import StyledComponentsRegistry from "@/lib/registry";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import { ConfigProvider } from "antd";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ConfigProvider>
          <StyledComponentsRegistry>
            <AntdRegistry>{children}</AntdRegistry>
          </StyledComponentsRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
