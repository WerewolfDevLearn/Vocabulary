import { FileObj } from "components/Forms/AddFromImgInput/DragNDropImgInput/DragNDropImgInputType";

export default function arrayReaorder(
  idxOfElem: number,
  idxOfInsert: number,
  array: FileObj[],
): FileObj[] {
  const newArray = [...array];
  newArray.splice(idxOfElem, 1);
  const newPoitionOfInsertion = newArray.indexOf(array[idxOfInsert]);
  newArray.splice(newPoitionOfInsertion, 0, array[idxOfElem]);
  return newArray;
}
