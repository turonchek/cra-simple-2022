import { Box, List } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";
import { selectCart } from "../ducks/cart";
import { CartItem } from "./CartItem";

export function CartItems(){
    const cart = useSelector(selectCart)
    return (
        <List sx={{m:20}} >
            {cart.items?.map(item => (
                <CartItem 
                    key={item.id}
                    id={item.id}
                    image={item.photo}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    />
            ))}
        </List>
    )
}