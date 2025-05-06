import { FIELD_RULES } from "@/constants/common";
import { FIELD_LABEL_MAP, JOB_LABEL_MAP } from "@/constants/user";
import { FieldName, Job, UserField } from "@/types/user";
import { Checkbox, DatePicker, Form, Input, Select } from "antd";

const useUserPageHook = () => {
  const getSelectOptions = (label: FieldName) => {
    let options: { label: string; value: string }[] = [];
    switch (label) {
      case "job":
        options = Object.keys(JOB_LABEL_MAP).map((key) => ({
          label: JOB_LABEL_MAP[key as Job],
          value: key,
        }));
        break;
      default:
    }
    return options.map((option) => (
      <Select.Option key={option.value} value={option.value}>
        {option.label}
      </Select.Option>
    ));
  };

  const getFormItems = (field: UserField): React.ReactElement => {
    let element;
    switch (field.type) {
      case "text":
        element = <Input />;
        break;
      case "textarea":
        element = <Input.TextArea />;
        break;
      case "date":
        element = <DatePicker />;
        break;
      case "select":
        element = <Select>{getSelectOptions(field.label)}</Select>;
        break;
      case "checkbox":
        element = <Checkbox />;
        break;
    }

    return (
      <Form.Item
        name={field.label}
        label={FIELD_LABEL_MAP[field.label]}
        rules={[{ required: field.required, ...FIELD_RULES[field.type] }]}
        hasFeedback={field.required}
        {...(field.type === "checkbox" && { valuePropName: "checked" })}
      >
        {element}
      </Form.Item>
    );
  };

  return {
    getSelectOptions,
    getFormItems,
  };
};

export default useUserPageHook;
