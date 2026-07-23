export type ReviewRoom = {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  confidence: "confirmed";
};

export type ConfirmedReview = {
  schemaVersion: 1;
  sourceFileName: string;
  rooms: ReviewRoom[];
  confirmedAt: string;
};
