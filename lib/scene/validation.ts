import type { Scene } from "./model";
import type { SceneOperation, ValidationResult } from "./operations";

export function validateOperations(_scene: Scene, operations: SceneOperation[]): ValidationResult {
  if (operations.length === 0) {
    return {
      valid: false,
      issues: [{ severity: "error", code: "missing_measurement", message: "At least one scene operation is required.", objectIds: [] }]
    };
  }

  return {
    valid: false,
    issues: [{ severity: "error", code: "missing_measurement", message: "Spatial validation is not implemented until confirmed geometry is available.", objectIds: [] }]
  };
}
