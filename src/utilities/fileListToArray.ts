import { FileObj } from "components/Forms/AddFromImgInput/DragNDropImgInput/DragNDropImgInputType";

type FileRuleType = {
  maxSize: {
    value: number;
    error: string;
  };
};

function fileListToArray(fileList: FileList, rule: FileRuleType): FileObj[] {
  const arr: FileObj[] = [];
  const length = fileList.length;
  for (let i = 0; i < length; i++) {
    arr.push({
      file: fileList[i],
      isValid: fileList[i].size < rule.maxSize.value,
    });
  }

  return arr;
}

export default fileListToArray;
