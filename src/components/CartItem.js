import React from "react";
import { incrementQuantity, decrementQuantity, removeItem } from "../ducks/cart";
import { useDispatch } from "react-redux";
import { Avatar, Box, Button, IconButton, ListItem, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export function CartItem({ id,title,image,price,quantity=0 }) {

    const dispatch = useDispatch();
    return (
        <ListItem>
            <Box 
                display="flex" 
                width="100%"
                alignItems="center"
                justifyContent="space-between"
                className="cartItem">
                <Avatar className="cartItem__image" src={image} sx={{width:96,height:96,mr:2}} alt='item'/>
                <Box className="cartItem__info" width="60%" display="flex" justifyContent="space-between" alignItems="center" >
                    <Typography className="cartItem__title" variant="h6" >{title}</Typography>
                    <Box display="flex" alignItems="center" justifyContent="space-between" className='cartItem__incrDec'>
                        <IconButton onClick={() => dispatch(decrementQuantity(id))}>
                            <RemoveIcon/>
                        </IconButton>
                        <Typography>{quantity}</Typography>
                        <IconButton onClick={() => dispatch(incrementQuantity(id))}>
                            <AddIcon/>
                        </IconButton>
                        <Typography className="cartItem__price" variant="body1" >{price*quantity}$</Typography>
                    </Box>
                    
                </Box>
                <Button
                    className='cartItem__removeButton' 
                    onClick={() => dispatch(removeItem(id))}>
                        Remove
                </Button>
            </Box>
        </ListItem>
        
    )
}