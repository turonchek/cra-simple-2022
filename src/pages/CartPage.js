import React from "react";
import { CartItems } from "../components/CartItems";
import { OrderSubmitButton } from "../components/OrderSubmitButton";
import { Total } from "../components/Total";

export function CartPage() {

    return(
            <>
                <CartItems/>
                <Total/>
                <OrderSubmitButton/>
            </>
    )
}