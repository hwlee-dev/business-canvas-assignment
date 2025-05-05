import type {
  DropdownProps as AntDropdownProps,
  MenuProps as AntMenuProps,
} from "antd";
import { Dropdown as AntDropdown } from "antd";

interface DropdownProps extends AntDropdownProps {
  items: AntMenuProps["items"];
}

const Dropdown = ({ children, items, ...props }: DropdownProps) => {
  return (
    <AntDropdown menu={{ items }} {...props}>
      {children}
    </AntDropdown>
  );
};

export default Dropdown;
