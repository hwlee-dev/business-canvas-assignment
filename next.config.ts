import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: [
    "antd",
    "rc-table",
    "@ant-design",
    "@ant-design/v5-patch-for-react-19",
  ],
  compiler: {
    styledComponents: true,
  },
  env: {
    STORAGE: process.env.STORAGE || "in-memory",
  },
};

export default nextConfig;
