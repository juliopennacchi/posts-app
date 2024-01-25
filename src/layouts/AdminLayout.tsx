import { ThemeProvider } from "@mui/material";
import DrawerAppBar from "./DrawerAppBar";
import { MenuItemType } from "../types/LayoutTypes";
import { ReactNode } from "react";
import { darkTheme } from "../theme/theme";

interface AdminLayoutProps {
  children?: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const navItems: MenuItemType[] = [
    {
      title: "Home",
      path: "/admin",
    },
    {
      title: "Configurações",
      path: "/admin/config",
    },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <DrawerAppBar title="Admin" menuItems={navItems}>
        {children}
      </DrawerAppBar>
    </ThemeProvider>
  );
}
