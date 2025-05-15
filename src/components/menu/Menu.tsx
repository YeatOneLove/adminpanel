import { DrawerHeader } from "components/header/styles"
import { Imune } from "./interfaces"
import { Button, Drawer } from "./styles"
import { ChevronLeftIcon } from "assets/icons"
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { menuItems } from "assets/constants/menuItems"
import { colors } from "assets/constants/colors"


const Menu = ({open, handleDrawerClose}: Imune): React.ReactElement => {
    return (                                                                                    
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                Logo
                <Button onClick={handleDrawerClose}>
                    <ChevronLeftIcon/>
                </Button>
            </DrawerHeader>
            <Divider />
            <List>
                {menuItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: "block" }}>
                        <ListItemButton
                            href={item.link}
                            sx={{ 
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5
                            }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                    color: colors.white[900]
                                }} >
                                {item.icon}
                                </ListItemIcon>
                            
                            
                            <ListItemText primary={item.label}
                                sx={{opacity: open? 1 : 0}} />
                        

                        </ListItemButton>
                    </ListItem>
                ))}
                        
            </List>
    </Drawer>
)
}

export default Menu