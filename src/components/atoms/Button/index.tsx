import { Button as AntButton } from "antd";
import type { ButtonProps } from "antd";

const Button = ({ children, ...props }: ButtonProps) => {
  return <AntButton {...props}>{children}</AntButton>;
};

export default Button;
