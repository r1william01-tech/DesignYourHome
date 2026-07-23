"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import ArchitectureReview from "./ArchitectureReview";

const maximumFileSize = 25 * 1024 * 1024;
const acceptedFileTypes = ["application/pdf", "image/jpeg", "image/png"];

type UploadedPlan = {
  file: File;
  previewUrl: string;
  kind: "image" | "pdf";
};

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) {
    return `${Math.ceil(bytes / 1024)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function WorkspacePage() {
  const [uploadedPlan, setUploadedPlan] = useState<UploadedPlan | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [reviewMode, setReviewMode] = useState(false);

  useEffect(() => {
    return () => {
      if (uploadedPlan) {
        URL.revokeObjectURL(uploadedPlan.previewUrl);
      }
    };
  }, [uploadedPlan]);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];
    setError(null);

    if (!selectedFile) {
      return;
    }

    if (!acceptedFileTypes.includes(selectedFile.type)) {
      setError("Please choose a PDF, JPG, or PNG floor plan.");
      event.target.value = "";
      return;
    }

    if (selectedFile.size > maximumFileSize) {
      setError("This file is larger than 25 MB. Please choose a smaller plan.");
      event.target.value = "";
      return;
    }

    setUploadedPlan({
      file: selectedFile,
      previewUrl: URL.createObjectURL(selectedFile),
      kind: selectedFile.type === "application/pdf" ? "pdf" : "image"
    });
  }

  function clearUpload() {
    setUploadedPlan(null);
    setError(null);
    setReviewMode(false);
  }

  if (uploadedPlan && reviewMode) {
    return (
      <ArchitectureReview
        fileName={uploadedPlan.file.name}
        previewUrl={uploadedPlan.previewUrl}
        kind={uploadedPlan.kind}
        onBack={() => setReviewMode(false)}
      />
    );
  }

  return (
    <main className="workspace-page">
      <nav className="nav shell">
        <Link className="brand" href="/">DYH<span>.</span></Link>
        <Link className="back-link" href="/">Back to overview</Link>
      </nav>

      <section className="workspace-intro shell">
        <div className="eyebrow">Milestone 1 · Source intake</div>
        <h1>Start with the plan you actually own.</h1>
        <p>Upload a floor plan and inspect the original source before DYH attempts to interpret it. The source stays visible while the next architecture step is prepared.</p>
      </section>

      <section className="upload-area shell" aria-labelledby="upload-title">
        <div className="upload-card">
          <div className="upload-card-heading">
            <div>
              <div className="eyebrow">Step 01</div>
              <h2 id="upload-title">Upload your floor plan</h2>
            </div>
            <span className="confidence-badge">Source file</span>
          </div>

          <label className="upload-dropzone" htmlFor="floor-plan-upload">
            <span className="upload-icon" aria-hidden="true">↑</span>
            <span className="upload-title">Choose a PDF, JPG, or PNG</span>
            <span className="upload-description">Up to 25 MB. The original file will be previewed in this browser session.</span>
            <span className="upload-button">Choose file</span>
            <input id="floor-plan-upload" type="file" accept="application/pdf,image/jpeg,image/png" onChange={handleFileChange} />
          </label>

          {error ? <p className="error-message" role="alert">{error}</p> : null}

          <div className="trust-note">
            <span className="trust-mark" aria-hidden="true">i</span>
            <p>No measurements or architectural interpretation are being claimed yet. Confirmation comes after the source preview.</p>
          </div>
        </div>

        {uploadedPlan ? (
          <section className="source-preview-card" aria-labelledby="source-preview-title">
            <div className="preview-heading">
              <div>
                <div className="eyebrow">Uploaded source</div>
                <h2 id="source-preview-title">Review the original plan</h2>
              </div>
              <button className="text-button" type="button" onClick={clearUpload}>Choose another file</button>
            </div>

            <div className="file-summary">
              <span className="file-kind">{uploadedPlan.kind === "pdf" ? "PDF" : "IMAGE"}</span>
              <span className="file-name">{uploadedPlan.file.name}</span>
              <span className="file-size">{formatFileSize(uploadedPlan.file.size)}</span>
            </div>

            <div className="source-preview">
              {uploadedPlan.kind === "pdf" ? (
                <iframe className="pdf-preview" src={uploadedPlan.previewUrl} title={`Preview of ${uploadedPlan.file.name}`} />
              ) : (
                <img className="image-preview" src={uploadedPlan.previewUrl} alt={`Preview of ${uploadedPlan.file.name}`} />
              )}
            </div>

            <div className="next-step-card">
              <div>
                <span className="eyebrow">Next in the vertical slice</span>
                <h3>Mark the architecture for review</h3>
                <p>Mark room boundaries yourself so DYH can carry forward explicit geometry without pretending uncertain measurements are confirmed.</p>
              </div>
              <button className="secondary-button" type="button" onClick={() => setReviewMode(true)}>Review architecture</button>
            </div>
          </section>
        ) : (
          <div className="empty-preview-card">
            <div className="empty-plan-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <div className="eyebrow">Your source preview</div>
              <h2>Nothing uploaded yet</h2>
              <p>Your exact plan will appear here before any architecture is inferred.</p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
