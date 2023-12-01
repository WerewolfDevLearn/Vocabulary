function fileListToArray(fileList: FileList): File[] {
  const arr: File[] = [];
  const length = fileList.length;
  for (let i = 0; i < length; i++) {
    arr.push(fileList[i]);
  }

  return arr;
}

export default fileListToArray;
