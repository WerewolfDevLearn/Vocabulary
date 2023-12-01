import { useRef, useState } from "react";

import arrToFileList from "utilities/arrayOfFilesToFileList";
import fileListToArray from "utilities/fileListToArray";

import {
  UploaderConstainer,
  DragNDropArea,
  SelectButton,
  ImageUploaderInput,
  ImageUploaderPreviewList,
  ImageUploaderPreviewItem,
  ImageUploaderPreviewContent,
} from "./DragNDropImgInput.styled";

export default function DragNDropImgInput() {
  const filePicker = useRef<HTMLInputElement>(null);
  const imagesInput = filePicker.current;
  const [drag, setDrag] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const onButtonClick = () => {
    filePicker.current?.click();
  };

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
    setFiles((files) => [...files, ...event.dataTransfer.files]);

    setDrag(false);
    if (imagesInput) {
      imagesInput.files = event.dataTransfer.files;
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) return;
    const newFiles = fileListToArray(fileList);
    setFiles((files) => [...files, ...newFiles]);
  };

  if (imagesInput) {
    imagesInput.files = arrToFileList(files);
  }
  return (
    <UploaderConstainer>
      <DragNDropArea
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        $drag={drag}
      >
        <h3>Drag & Drop your images</h3>
        <SelectButton onClick={onButtonClick}>Or click here to select them</SelectButton>
        <ImageUploaderInput ref={filePicker} onChange={handleInputChange} />
      </DragNDropArea>
      <ImageUploaderPreviewList>
        {files.map((file, idx) => {
          return (
            <ImageUploaderPreviewItem key={idx}>
              <ImageUploaderPreviewContent src={URL.createObjectURL(file)} alt={file.name} />
            </ImageUploaderPreviewItem>
          );
        })}
      </ImageUploaderPreviewList>
    </UploaderConstainer>
  );
}
