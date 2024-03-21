import AddFormTextArea from "components/Forms/Inputs/AddFormTextArea";
import AddFormInput from "components/Forms/Inputs/AddFormTextInput";
import DragNDropImgInput from "components/Forms/Inputs/AddFromImgInput/DragNDropImgInput";

type objToJSXArgs = {
  // type: "textInput" | "textAria" | "fileInput";
  type: string;
  key: string;
  name: string;
  placeholder: string;
  callBack: boolean;
};
type TdeleteCallback = (idx: string) => void;

export default function objToJSX(
  obj: objToJSXArgs,
  callBackFunction: TdeleteCallback,
): JSX.Element {
  if (obj.type === "textInput")
    return (
      <AddFormInput
        name={obj.name}
        placeholder={obj.placeholder}
        key={obj.key}
        idx={obj.key}
        callBack={obj.callBack}
        callBackFunction={callBackFunction}
      />
    );

  if (obj.type === "fileInput")
    return (
      <DragNDropImgInput
        name={obj.name}
        placeholder={obj.placeholder}
        key={obj.key}
        idx={obj.key}
        callBack={obj.callBack}
        callBackFunction={callBackFunction}
      />
    );

  return (
    <AddFormTextArea
      name={obj.name}
      placeholder={obj.placeholder}
      key={obj.key}
      idx={obj.key}
      callBack={obj.callBack}
      callBackFunction={callBackFunction}
    />
  );
}
