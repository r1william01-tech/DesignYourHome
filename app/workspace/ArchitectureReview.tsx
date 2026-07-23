"use client";

import { PointerEvent, useEffect, useState } from "react";
import type { ConfirmedReview, ReviewRoom } from "@/lib/scene/review";

type ArchitectureReviewProps = {
  fileName: string;
  previewUrl: string;
  kind: "image" | "pdf";
  onBack: () => void;
};

type DragState = {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
};

function clamp(value: number) {
  return Math.max(0, Math.min(1, value));
}

function getRelativePoint(event: PointerEvent<HTMLDivElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();

  return {
    x: clamp((event.clientX - bounds.left) / bounds.width),
    y: clamp((event.clientY - bounds.top) / bounds.height)
  };
}

function toReviewRoom(drag: DragState, name: string, index: number): ReviewRoom {
  const x = Math.min(drag.startX, drag.currentX);
  const y = Math.min(drag.startY, drag.currentY);

  return {
    id: `room-${Date.now()}-${index}`,
    name: name.trim() || `Room ${index + 1}`,
    x,
    y,
    width: Math.abs(drag.currentX - drag.startX),
    height: Math.abs(drag.currentY - drag.startY),
    confidence: "confirmed"
  };
}

export default function ArchitectureReview({ fileName, previewUrl, kind, onBack }: ArchitectureReviewProps) {
  const [rooms, setRooms] = useState<ReviewRoom[]>([]);
  const [roomName, setRoomName] = useState("Living room");
  const [drag, setDrag] = useState<DragState | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [confirmedReview, setConfirmedReview] = useState<ConfirmedReview | null>(null);

  useEffect(() => {
    const savedReview = window.localStorage.getItem("dyh:confirmed-review");

    if (!savedReview) {
      return;
    }

    try {
      const parsedReview = JSON.parse(savedReview) as ConfirmedReview;

      if (parsedReview.sourceFileName === fileName && parsedReview.schemaVersion === 1) {
        setRooms(parsedReview.rooms);
        setConfirmedReview(parsedReview);
      }
    } catch {
      window.localStorage.removeItem("dyh:confirmed-review");
    }
  }, [fileName]);

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (confirmedReview) {
      return;
    }

    const point = getRelativePoint(event);
    event.currentTarget.setPointerCapture(event.pointerId);
    setMessage(null);
    setDrag({ startX: point.x, startY: point.y, currentX: point.x, currentY: point.y });
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!drag || confirmedReview) {
      return;
    }

    const point = getRelativePoint(event);
    setDrag({ ...drag, currentX: point.x, currentY: point.y });
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!drag || confirmedReview) {
      return;
    }

    const point = getRelativePoint(event);
    const completedDrag = { ...drag, currentX: point.x, currentY: point.y };
    const nextRoom = toReviewRoom(completedDrag, roomName, rooms.length);

    setDrag(null);

    if (nextRoom.width < 0.04 || nextRoom.height < 0.04) {
      setMessage("Draw a larger area so the room boundary is useful.");
      return;
    }

    setRooms((currentRooms) => [...currentRooms, nextRoom]);
    setRoomName(`Room ${rooms.length + 2}`);
  }

  function removeRoom(roomId: string) {
    if (confirmedReview) {
      return;
    }

    setRooms((currentRooms) => currentRooms.filter((room) => room.id !== roomId));
  }

  function confirmArchitecture() {
    if (rooms.length === 0) {
      setMessage("Mark at least one room before confirming the architecture.");
      return;
    }

    const review: ConfirmedReview = {
      schemaVersion: 1,
      sourceFileName: fileName,
      rooms,
      confirmedAt: new Date().toISOString()
    };

    window.localStorage.setItem("dyh:confirmed-review", JSON.stringify(review));
    setConfirmedReview(review);
    setMessage("Your marked room geometry is saved in this browser.");
  }

  const dragPreview = drag ? {
    left: `${Math.min(drag.startX, drag.currentX) * 100}%`,
    top: `${Math.min(drag.startY, drag.currentY) * 100}%`,
    width: `${Math.abs(drag.currentX - drag.startX) * 100}%`,
    height: `${Math.abs(drag.currentY - drag.startY) * 100}%`
  } : undefined;

  return (
    <main className="workspace-page">
      <nav className="nav shell">
        <button className="brand brand-button" type="button" onClick={onBack}>DYH<span>.</span></button>
        <button className="back-link back-button" type="button" onClick={onBack}>Back to source</button>
      </nav>

      <section className="workspace-intro shell review-intro">
        <div className="eyebrow">Milestone 1 · Architecture review</div>
        <h1>Mark what the plan means to you.</h1>
        <p>DYH is not claiming automatic measurements yet. Draw room boundaries on the source, name them, and confirm the geometry you want to carry forward.</p>
      </section>

      <section className="review-area shell" aria-labelledby="review-title">
        <div className="review-source-card">
          <div className="preview-heading">
            <div>
              <div className="eyebrow">Source · {fileName}</div>
              <h2 id="review-title">Review the architecture</h2>
            </div>
            <span className="confidence-badge">User-marked</span>
          </div>

          <div
            className={`review-stage ${confirmedReview ? "review-stage-confirmed" : ""}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => setDrag(null)}
          >
            {kind === "pdf" ? (
              <iframe className="review-pdf" src={previewUrl} title={`Review of ${fileName}`} />
            ) : (
              <img className="review-image" src={previewUrl} alt={`Review of ${fileName}`} />
            )}
            <div className="review-overlay" aria-hidden="true">
              {rooms.map((room, index) => (
                <div
                  className="room-boundary"
                  key={room.id}
                  style={{ left: `${room.x * 100}%`, top: `${room.y * 100}%`, width: `${room.width * 100}%`, height: `${room.height * 100}%` }}
                >
                  <span>{index + 1}. {room.name}</span>
                </div>
              ))}
              {dragPreview ? <div className="room-boundary room-boundary-preview" style={dragPreview} /> : null}
            </div>
          </div>

          <p className="review-instruction">{confirmedReview ? "Confirmed geometry is locked for this browser session." : "Click and drag over a room to mark its boundary."}</p>
        </div>

        <aside className="review-controls">
          <div className="review-control-card">
            <div className="eyebrow">Room marker</div>
            <h2>Add confirmed rooms</h2>
            <p className="control-copy">Each marked rectangle becomes explicit structured geometry. It is not presented as an automatic parser result.</p>
            <label className="field-label" htmlFor="room-name">Next room name</label>
            <input className="text-input" id="room-name" value={roomName} onChange={(event) => setRoomName(event.target.value)} disabled={Boolean(confirmedReview)} />
            <div className="room-list">
              {rooms.length === 0 ? <p className="room-list-empty">No rooms marked yet.</p> : null}
              {rooms.map((room) => (
                <div className="room-list-item" key={room.id}>
                  <span>{room.name}</span>
                  <button type="button" onClick={() => removeRoom(room.id)} disabled={Boolean(confirmedReview)} aria-label={`Remove ${room.name}`}>×</button>
                </div>
              ))}
            </div>
            <button className="primary-button confirm-button" type="button" onClick={confirmArchitecture} disabled={Boolean(confirmedReview)}>
              {confirmedReview ? "Architecture confirmed" : "Confirm architecture"}
            </button>
            {message ? <p className="review-message" role="status">{message}</p> : null}
          </div>

          <div className="review-facts-card">
            <span className="eyebrow">Trust status</span>
            <div className="fact-row"><span>Source</span><strong>Confirmed upload</strong></div>
            <div className="fact-row"><span>Room boundaries</span><strong>{rooms.length ? "User confirmed" : "Not marked"}</strong></div>
            <div className="fact-row"><span>Measurements</span><strong>Needs verification</strong></div>
            <div className="fact-row"><span>Saved to</span><strong>Browser only</strong></div>
          </div>
        </aside>
      </section>
    </main>
  );
}
