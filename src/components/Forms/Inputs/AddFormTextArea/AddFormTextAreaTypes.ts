export interface IAddFormTextArea {
  name: string;
  placeholder: string;
  idx: string;
  callBack: boolean;
  callBackFunction: (idx: string) => void;
}
