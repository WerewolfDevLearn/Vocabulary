import { AddFormState } from "../AddFrom/AddFormTypes";

export type IAddFormTools = {
  addElement: React.Dispatch<React.SetStateAction<AddFormState>>;
  callBackFunction: ((idx: string) => void) | null;
};
// {
//         type: string;
//         key: string;
//         name: string;
//         placeholder: string;
//         callBack: boolean;
//         callBackFunction: ((idx: string) => void) | null;
//       }[]
