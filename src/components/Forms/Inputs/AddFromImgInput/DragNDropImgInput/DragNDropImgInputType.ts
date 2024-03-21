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
export interface IDragNDropImgInput {
  name: string;
  placeholder: string;
  idx: string;
  callBack: boolean;
  callBackFunction: (idx: string) => void;
}
