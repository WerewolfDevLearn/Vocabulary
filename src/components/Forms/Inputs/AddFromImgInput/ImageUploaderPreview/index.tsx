import {
  ImageUploaderPreviewContent,
  ImageUploaderPreviewList,
  ImageUploaderPreviewItem,
  ImageUploaderPreviewItemDeleteButton,
} from "./ImageUploaderPreview.styled";

import { ImageUploaderPreviewType } from "./imageUploaderPreviewTypes";

export default function ImageUploaderPreview({
  files,
  handleClick,
  handleReorder,
}: ImageUploaderPreviewType) {
  let draggedIndex = "0";
  let dropedIndex = "0";

  const handleDragOverPreviw = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    if (event.currentTarget.dataset.index) {
      dropedIndex = event.currentTarget.dataset.index;
    }
  };
  const handleDragStartPreview = (event: React.DragEvent<HTMLLIElement>) => {
    if (event.currentTarget.dataset.index) {
      draggedIndex = event.currentTarget.dataset.index;
    }
  };

  const handleDropPreviw = () => {
    handleReorder(Number(draggedIndex), Number(dropedIndex), files);
  };

  return (
    <ImageUploaderPreviewList>
      {files.map((file, idx) => {
        return (
          <ImageUploaderPreviewItem
            data-index={idx}
            key={idx}
            onDrop={handleDropPreviw}
            onDragOver={handleDragOverPreviw}
            onDragStart={handleDragStartPreview}
            $valid={file.isValid}
          >
            <ImageUploaderPreviewItemDeleteButton
              onClick={() => handleClick(idx)}
            >
              X
            </ImageUploaderPreviewItemDeleteButton>
            <ImageUploaderPreviewContent
              src={URL.createObjectURL(file.file)}
              alt={file.file.name}
            />
          </ImageUploaderPreviewItem>
        );
      })}
    </ImageUploaderPreviewList>
  );
}
