type RuleType = {
  min?: {
    value: number;
    erorr: string;
  };
  max?: {
    value: number;
    erorr: string;
  };
};

import { FileRuleType } from "components/Forms/AddFromImgInput/DragNDropImgInput/DragNDropImgInputType";
export function inputValidation(string: string, rule: RuleType): string {
  if (rule.min && string.length < rule.min.value) {
    return rule.min.erorr;
  }
  if (rule.max && string.length > rule.max.value) {
    return rule.max.erorr;
  }
  return "";
}

export function fileValidation(file: File, rule: FileRuleType): string {
  if (file.size > rule.maxSize.value) {
    return rule.maxSize.error;
  }
  return "";
}
