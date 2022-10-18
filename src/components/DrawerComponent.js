import React, { useState } from "react";
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    // makeStyles,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "../materialUI/theme";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration: 'none',
        color: theme.palette.text.secondary,
        fontSize: "20px",
    },
    icon:{
        color: theme.palette.primary.dark
    }
}));

export function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
        <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
        >
            <List>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                <Link to="/" className={classes.link}>Main Page</Link>
                </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                    <Link to="/products" className={classes.link}>Products</Link>
                </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                    <Link to="/register" className={classes.link}>Sign up</Link>
                </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                    <Link to="/login" className={classes.link}>Log in</Link>
                </ListItemText>
            </ListItem>
            <Divider/>
            </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
            <MenuIcon />
        </IconButton>
        </>
    );
}