import { PersonIcon, SportsEsportsIcon } from "assets/icons";
import { routes } from "./routes";

export const drawerWidth = 240;

export const menuItems = [
  {
    icon: <PersonIcon />,
    label: "Users",
    link: routes.users,
  },
  {
    icon: <SportsEsportsIcon />,
    label: "Games",
    link: routes.games,
  },
];
