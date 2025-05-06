export type Job = "developer" | "po" | "designer";
export type FieldName =
  | "name"
  | "address"
  | "memo"
  | "joinAt"
  | "job"
  | "agreement";
export type FieldType = "text" | "textarea" | "date" | "select" | "checkbox";

export interface User {
  id: string;
  name: string;
  address?: string;
  memo?: string;
  joinAt: string;
  job?: Job;
  agreement?: boolean;
}

export interface UserField {
  type: FieldType;
  label: FieldName;
  required?: boolean;
}
