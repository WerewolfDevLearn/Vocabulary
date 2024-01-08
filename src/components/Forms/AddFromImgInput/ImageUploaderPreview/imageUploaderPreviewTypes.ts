import { FileObj } from "../DragNDropImgInput/DragNDropImgInputType";

export interface ImageUploaderPreviewType {
  files: FileObj[];
  handleReorder: (
    idxOfElem: number,
    idxOfInsert: number,
    array: FileObj[],
  ) => void;
  handleClick: (idx: number) => void;
}
