import { AddFormToolsWrapper, AddFromTool } from "./AddFormTools.styled";

import { IAddFormTools } from "./AddFormToolsTypes";
import { useState } from "react";

export default function AddFormTools({
  addElement,
  callBackFunction,
}: IAddFormTools) {
  const [counter, setCounter] = useState<number>(4);

  const addText = () => {
    addElement((state) => {
      return [
        ...state,
        {
          key: `id${counter}`,
          name: `Text ${counter}`,
          type: "textArea",
          placeholder: "Add text",
          callBack: true,
          callBackFunction: callBackFunction,
        },
      ];
    });
    setCounter((counter) => counter + 1);
  };

  const addImageUploader = () => {
    addElement((state) => [
      ...state,
      {
        key: `id${counter}`,
        name: `Optional Image ${counter}`,
        type: "fileInput",
        placeholder: "Add image",
        callBack: true,
        callBackFunction: callBackFunction,
      },
    ]);
    setCounter((counter) => counter + 1);
  };
  const addVLink = () => {
    addElement((state) => [
      ...state,
      {
        key: `id${counter}`,
        name: `Video link ${counter}`,
        type: "textInput",
        placeholder: "Add video link",
        callBack: true,
        callBackFunction: callBackFunction,
      },
    ]);
    setCounter((counter) => counter + 1);
  };
  const addALink = () => {
    addElement((state) => [
      ...state,
      {
        key: `id${counter}`,
        name: `Audio link ${counter}`,
        type: "textInput",
        placeholder: "Add audio link",
        callBack: true,
        callBackFunction: callBackFunction,
      },
    ]);
    setCounter((counter) => counter + 1);
  };

  return (
    <AddFormToolsWrapper>
      <AddFromTool title="Add text" onClick={addText}>
        +Txt
      </AddFromTool>
      <AddFromTool title="Add smage" onClick={addImageUploader}>
        +Img
      </AddFromTool>
      <AddFromTool title="Add link to video" onClick={addVLink}>
        +VLink
      </AddFromTool>
      <AddFromTool title="Add link to audio" onClick={addALink}>
        +ALink
      </AddFromTool>
    </AddFormToolsWrapper>
  );
}
