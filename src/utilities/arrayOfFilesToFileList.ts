function arrToFileList(arr: File[]): FileList {
  const dt = new DataTransfer();
  arr.map((file) => dt.items.add(file));
  const fileList = dt.files;
  return fileList;
}
export default arrToFileList;
