export interface IUserProlifeField {
  type: "text" | "password" | "email" | "tel";
  filedname: "name" | "password" | "email" | "phone";
}
export interface FieldTypeName {
  name: string;
}
export interface FieldTypeEmail {
  email: string;
}
export interface FieldTypePhone {
  phone: string;
}
export interface FieldTypePassword {
  password: string;
}

export type InputValuesTypes = FieldTypeName | FieldTypeEmail | FieldTypePhone | FieldTypePassword;
