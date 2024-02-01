import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactNode, useState } from "react";
import { MenuItemType } from "../../types/LayoutTypes";
import { useNavigate } from "react-router-dom";
import { AdminPanelSettings, SupervisedUserCircle } from "@mui/icons-material";

const drawerWidth = 240;

interface DrawerAppBarProps {
  title: string;
  menuItems: MenuItemType[];
  children: ReactNode;
}

export default function DrawerAppBar(props: DrawerAppBarProps) {
  const { title, menuItems, children } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigation = useNavigate();

  const handleNavigation = (path: string) => {
    navigation(path);
  }

  const actions = [
    { icon: <AdminPanelSettings />, name: 'Admin', path:"/admin" },
    { icon: <SupervisedUserCircle />, name: 'User', path:"/user" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {title}
      </Typography>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={() => handleNavigation(item.path)}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {title}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {menuItems.map((item) => (
              <Button key={item.title} sx={{ color: "#fff" }} onClick={() => handleNavigation(item.path)}>
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }} style={{width: '100%'}}>
        <Toolbar />
        {children}
      </Box>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleNavigation(action.path)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
