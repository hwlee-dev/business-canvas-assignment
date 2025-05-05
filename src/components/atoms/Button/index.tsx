import type { ButtonProps } from "antd";
import { Button as AntButton } from "antd";

const Button = ({ children, ...props }: ButtonProps) => {
  return <AntButton {...props}>{children}</AntButton>;
};

export default Button;
