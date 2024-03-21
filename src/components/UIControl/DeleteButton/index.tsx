import { DeleteButtonStyles } from "./DeleteButton.styled";

interface IDeleteButton {
  callBackFunction: (idx: string) => void;
  idx: string;
}

export default function DeleteButton({ callBackFunction, idx }: IDeleteButton) {
  return (
    <DeleteButtonStyles onClick={() => callBackFunction(idx)}>
      x
    </DeleteButtonStyles>
  );
}
