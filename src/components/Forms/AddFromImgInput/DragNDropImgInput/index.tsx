import { useRef, useState } from "react";

import FromError from "components/Forms/FromError";
import {
  AddFormFieldWrapper,
  AddFormInputWrapper,
} from "components/Forms/FormsBasicStyles.styled";

import arrToFileList from "utilities/arrayOfFilesToFileList";
import fileListToArray from "utilities/fileListToArray";
import arrayReaorder from "utilities/arrayReorder";

import ImageUploaderPreview from "../ImageUploaderPreview";

import {
  UploaderConstainer,
  DragNDropArea,
  SelectButton,
  ImageUploaderInput,
  ImageUploaderLabel,
} from "./DragNDropImgInput.styled";

import { FileObj, FileRuleType } from "./DragNDropImgInputType";

const rule: FileRuleType = {
  maxSize: {
    value: 1048576,
    error: "Some files are too big",
  },
};

export default function DragNDropImgInput() {
  const filePicker = useRef<HTMLInputElement>(null);
  const imagesInput = filePicker.current;
  const [drag, setDrag] = useState(false);
  const [files, setFiles] = useState<FileObj[]>([]);
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const onButtonClick = () => {
    filePicker.current?.click();
  };
  /* Drop Zone */
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(true);
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(true);
  };
  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const newFiles = fileListToArray(event.dataTransfer.files, rule);
    const isValidFiles = newFiles.some((file) => file.isValid === false);
    if (isValidFiles) {
      setError(rule.maxSize.error);
    }

    setFiles((files) => [...files, ...newFiles]);
    setDrag(false);
    setTouched(true);
    if (imagesInput) {
      imagesInput.files = event.dataTransfer.files;
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) return;
    const newFiles = fileListToArray(fileList, rule);
    const isValidFiles = newFiles.some((file) => file.isValid === false);
    if (isValidFiles) {
      setError(rule.maxSize.error);
    }

    setFiles((files) => [...files, ...newFiles]);
    setTouched(true);
  };
  /*ImageUploaderPreview handlers*/
  const handleClick = (idx: number) => {
    const newFiles = files.filter((_file, fileIdx) => idx !== fileIdx);

    const isValidFiles = newFiles.some((file) => file.isValid === false);
    if (isValidFiles) {
      setError(rule.maxSize.error);
    } else {
      setError("");
    }
    setFiles(newFiles);
  };

  const handleReorder = (idxOfElem: number, idxOfInsert: number) => {
    setFiles((files) => arrayReaorder(idxOfElem, idxOfInsert, files));
  };

  if (imagesInput) {
    imagesInput.files = arrToFileList(files);
  }

  return (
    <AddFormFieldWrapper>
      <AddFormInputWrapper $valid={!error} $isTouched={!touched}>
        <UploaderConstainer>
          <DragNDropArea
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            $drag={drag}
          >
            <h3>Drag & Drop your images</h3>
            <SelectButton onClick={onButtonClick}>
              Or click here to select them
            </SelectButton>
            <ImageUploaderLabel htmlFor="imageUploader">
              Image uploader
            </ImageUploaderLabel>
            <ImageUploaderInput
              ref={filePicker}
              onChange={handleInputChange}
              id="imageUploader"
              name="imageUploader"
            />
          </DragNDropArea>
          <ImageUploaderPreview
            files={files}
            handleReorder={handleReorder}
            handleClick={handleClick}
          />
        </UploaderConstainer>
      </AddFormInputWrapper>
      <FromError string={error} />
    </AddFormFieldWrapper>
  );
}
