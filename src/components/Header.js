import { 
    AppBar, 
    Toolbar, 
    Typography, 
    useTheme,
    useMediaQuery, 
    IconButton,
    Button,
    Box} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import { DrawerComponent } from "./DrawerComponent";
import { ShoppingCart } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        color: theme.palette.text.primary,
        marginRight:theme.spacing(10),
        marginLeft:theme.spacing(10),
        fontWeight:300,
        "&:hover": {
        boxShadow: `inset 100px 0 0 0 ${theme.palette.action.hover}`,
        borderRadius:0,
        borderColor:'transparent',
        color: theme.palette.text.disabled,
        },
    },
    icon: {
        color: theme.palette.primary.dark,
        marginRight: theme.spacing(20),
        marginLeft: theme.spacing(20),
    }
}));

export function Header() {

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{mb:10}}>
            <AppBar position="static" >
                <Toolbar>
                    <Typography variant="h4" className={classes.logo}>
                        Navbar
                    </Typography>
                    {isMobile ? (
                        <Box className={classes.navlinks}>
                        <IconButton >
                                <Link to="/cart" className={classes.icon}>
                                    <ShoppingCart/>
                                </Link>
                        </IconButton>
                        <DrawerComponent />
                        </Box>
                        ) : (
                        <Box className={classes.navlinks}>
                            {/* <Link to="/" className={classes.link}>
                            Main Page
                            </Link>
                            <Link to="/products" className={classes.link}>
                            Products
                            </Link>
                            <Link to="/register" className={classes.link}>
                            Sign up
                            </Link>
                            <Link to="/login" className={classes.link}>
                            Log in
                            </Link>
                            <IconButton className={classes.icon} component={Link} to="/cart" >
                            <ShoppingCart/>
                            </IconButton> */}
                            <Button className={classes.link} {...{
                                to:'/',
                                component:Link
                            }}>
                                Main Page
                            </Button>
                            <Button className={classes.link} {...{
                                to:'/products',
                                component:Link
                            }}>
                                Products
                            </Button>
                            <Button className={classes.link} {...{
                                to:'/login',
                                component:Link
                            }}>
                                Log in
                            </Button>
                            <Button sx={{ border: 1, borderRadius:0 }} className={classes.link} {...{
                                to:'/register',
                                component:Link
                            }}>
                                Sign up
                            </Button>
                            <IconButton className={classes.icon} component={Link} to="/cart" >
                                <ShoppingCart/>
                            </IconButton>
                        </Box>
                        )}
                </Toolbar>
            </AppBar>
        </Box>
        
    )
}