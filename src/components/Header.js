import React from "react";
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    useTheme,
    useMediaQuery, 
    IconButton,
    Button,
    Box} from "@mui/material";
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { DrawerComponent } from "./DrawerComponent";
import SearchIcon from '@mui/icons-material/Search';
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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 10,
    marginRight: 10,
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export function Header() {

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <header>
            <Box sx={{mb:10}}>
                <AppBar position="static" >
                    <Toolbar>
                        <Typography variant="h4" className={classes.logo}>
                            Navbar
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                />
                        </Search>
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
                                    About
                                </Button>
                                <Button className={classes.link} {...{
                                    to:'/catalog',
                                    component:Link
                                }}>
                                    Products
                                </Button>
                                <Button className={classes.link} {...{
                                    to:'/delivery',
                                    component:Link
                                }}>
                                    Shipping and payment
                                </Button>
                                <IconButton className={classes.icon} component={Link} to="/cart" >
                                    <ShoppingCart/>
                                </IconButton>
                            </Box>
                            )}
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}