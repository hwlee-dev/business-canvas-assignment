import { StorageType } from "@/enums/common";
import { FieldType } from "@/types/user";
import type { Rule } from "rc-field-form/lib/interface";

export const STORAGE: StorageType = `${process.env.STORAGE}` as StorageType;
export const STORAGE_KEY = "users";

export const FIELD_RULES: Partial<Record<FieldType, Rule>> = {
  text: {
    max: 20,
  },
  textarea: {
    max: 50,
  },
};
