export type AddFormState = {
  type: string;
  key: string;
  name: string;
  placeholder: string;
  callBack: boolean;
  callBackFunction: ((idx: string) => void) | null;
}[];
