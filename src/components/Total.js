import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../ducks/cart";

export function Total(){

    const cart = useSelector(selectCart)

    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.items.forEach(item => {
            totalQuantity += item.quantity
            totalPrice += item.price * item.quantity
        })
        return {totalPrice, totalQuantity}
    }

    return(
        <Box sx={{m:20}}>
            <Typography textAlign="center" variant="h6">Order summary</Typography>
            <Typography>Products in total: {getTotal().totalQuantity}</Typography>
            <Typography>Total price: {getTotal().totalPrice}$</Typography>
        </Box>
    )
}