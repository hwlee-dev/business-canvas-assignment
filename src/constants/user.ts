import { FieldName, Job, UserField } from "@/types/user";

export const USER_FORM_FIELDS: UserField[] = [
  {
    type: "text",
    label: "name",
    required: true,
  },
  {
    type: "text",
    label: "address",
    required: false,
  },
  {
    type: "textarea",
    label: "memo",
    required: false,
  },
  {
    type: "date",
    label: "joinAt",
    required: true,
  },
  {
    type: "select",
    label: "job",
    required: false,
  },
  {
    type: "checkbox",
    label: "agreement",
    required: false,
  },
];

export const FIELD_LABEL_MAP: Omit<Record<FieldName, string>, "id"> = {
  name: "이름",
  address: "주소",
  memo: "메모",
  joinAt: "가입일",
  job: "직업",
  agreement: "이메일 수신 동의",
};

export const JOB_LABEL_MAP: Omit<Record<Job, string>, "id"> = {
  developer: "개발자",
  po: "PO",
  designer: "디자이너",
};
