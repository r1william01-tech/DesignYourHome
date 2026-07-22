import type { Point2D, SceneObject, Size3D } from "./model";

export type SceneOperation =
  | {
      type: "create_object";
      object: Omit<SceneObject, "id"> & { id?: string };
    }
  | {
      type: "update_object";
      objectId: string;
      changes: Partial<Pick<SceneObject, "position" | "rotation" | "size" | "category">>>;
    }
  | {
      type: "remove_object";
      objectId: string;
    };

export type OperationProposal = {
  requestId: string;
  explanation: string;
  operations: SceneOperation[];
  assumptions: Array<{ label: string; value: string }>;
};

export type ValidationIssue = {
  severity: "error" | "warning";
  code: "collision" | "clearance" | "opening_obstruction" | "missing_measurement" | "utility_constraint";
  message: string;
  objectIds: string[];
};

export type ValidationResult = {
  valid: boolean;
  issues: ValidationIssue[];
};

export type PlacementCandidate = {
  id: string;
  label: string;
  rationale: string;
  tradeoffs: string[];
  position: Point2D;
  size: Size3D;
  validation: ValidationResult;
};
