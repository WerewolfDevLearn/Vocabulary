export interface IAddFormInput {
  name: string;
  placeholder: string;
  idx: string;
  callBack: boolean;
  callBackFunction: (idx: string) => void;
}
