import DrawerAppBar from "./DrawerAppBar";
import { MenuItemType } from "../types/LayoutTypes";
import { ReactNode } from "react";

interface UserLayoutProps {
  children?: ReactNode;
}

export default function UserLayout(props: UserLayoutProps) {
  const { children } = props;

  const navItems: MenuItemType[] = [
    {
      title: "Home",
      path: "/user",
    },
    {
      title: "Posts",
      path: "/posts",
    },
  ];

  return (
    <DrawerAppBar title="User" menuItems={navItems}>
      {children}
    </DrawerAppBar>
  );
}
