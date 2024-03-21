export default function arrayReaorder(
  idxOfElem: number,
  idxOfInsert: number,
  array: any[],
) {
  const newArray = [...array];
  newArray.splice(idxOfElem, 1);
  const newPoitionOfInsertion = newArray.indexOf(array[idxOfInsert]);
  newArray.splice(newPoitionOfInsertion, 0, array[idxOfElem]);
  return newArray;
}
