import { FileObj } from "components/Forms/AddFromImgInput/DragNDropImgInput/DragNDropImgInputType";

function arrToFileList(arr: FileObj[]): FileList {
  const dt = new DataTransfer();
  arr.map((file) => dt.items.add(file.file));
  const fileList = dt.files;
  return fileList;
}
export default arrToFileList;
