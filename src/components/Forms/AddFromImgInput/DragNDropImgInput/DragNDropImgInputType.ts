export type arrayOfFileObjects = {
  file: File;
  valid: boolean;
};
export type FileObj = {
  file: File;
  isValid: boolean;
};
export type FileRuleType = {
  maxSize: {
    value: number;
    error: string;
  };
};
