export type Confidence = "confirmed" | "inferred" | "estimated" | "needs_verification";

export type Point2D = {
  x: number;
  y: number;
};

export type Size3D = {
  width: number;
  depth: number;
  height: number;
};

export type Wall = {
  id: string;
  start: Point2D;
  end: Point2D;
  thickness: number;
  confidence: Confidence;
};

export type Opening = {
  id: string;
  kind: "door" | "window" | "balcony";
  wallId: string;
  offset: number;
  width: number;
  height: number;
  swing?: "inward" | "outward" | "sliding" | "unknown";
  confidence: Confidence;
};

export type Room = {
  id: string;
  name: string;
  polygon: Point2D[];
  level: number;
  confidence: Confidence;
};

export type SceneObject = {
  id: string;
  category: "furniture" | "appliance" | "fixture" | "finish";
  roomId: string;
  position: Point2D;
  rotation: number;
  size: Size3D;
  source: "user_owned" | "user_requested" | "system";
};

export type Architecture = {
  walls: Wall[];
  openings: Opening[];
  rooms: Room[];
  orientation?: { northDegrees: number; confidence: Confidence };
};

export type Scene = {
  schemaVersion: 1;
  projectId: string;
  architecture: Architecture;
  objects: SceneObject[];
  revision: number;
  updatedAt: string;
};
