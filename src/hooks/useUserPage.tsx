import {
  StyledCheckbox,
  StyledCheckboxGroup,
} from "@/components/pages/UserListPage/index.styled";
import { FIELD_RULES } from "@/constants/common";
import { FIELD_LABEL_MAP, JOB_LABEL_MAP } from "@/constants/user";
import { FieldName, Job, User, UserField } from "@/types/user";
import { Checkbox, DatePicker, Form, Input, Select } from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";
import dayjs from "dayjs";

const useUserPage = () => {
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

  const getFilterDropdown = (
    key: keyof User,
    filters: Record<keyof User, any[]>,
  ) => {
    const FilterDropdownComponent = ({
      setSelectedKeys,
      selectedKeys,
      confirm,
    }: FilterDropdownProps) => {
      const options = [...new Set(filters?.[key])];

      const handleChange = (checkedValues: any) => {
        setSelectedKeys(checkedValues);
        confirm({
          closeDropdown: false,
        });
      };

      return (
        <StyledCheckboxGroup onChange={handleChange} value={selectedKeys}>
          {options.map((option) => {
            const getText = () => {
              let result = option;
              switch (key) {
                case "job":
                  result = JOB_LABEL_MAP[option as Job];
                  break;
                case "joinAt":
                  result = dayjs(option).format("YYYY-MM-DD");
                  break;
                case "agreement":
                  result = option === true ? "선택됨" : "선택 안함";
                  break;
                default:
              }
              return result;
            };

            return (
              <StyledCheckbox key={option} value={option}>
                {getText()}
              </StyledCheckbox>
            );
          })}
        </StyledCheckboxGroup>
      );
    };

    FilterDropdownComponent.displayName = "FilterDropdownComponent";

    return FilterDropdownComponent;
  };

  return {
    getSelectOptions,
    getFormItems,
    getFilterDropdown,
  };
};

export default useUserPage;
