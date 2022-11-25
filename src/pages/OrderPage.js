import React,{ useState } from "react";
import axios from "axios";
import { useForm, FormProvider } from "react-hook-form";
import { OrderForm } from "../components/OrderForm";
import { useSelector } from "react-redux";
import { selectCart } from "../ducks/cart";

export function OrderPage() {
    const cart = useSelector(selectCart)

    const [orderID, setOrderID] = useState('');
    const [error, setError] = useState('');

    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email:"",
            country:"",
            phone:"",
            city:"",
            address:"",
            address2:"",
            deliveryType:"post",
            dontCallMe:false,
            comment:"",
        },
    });

    const onSubmit = ({firstName,lastName,email,country,phone,city,address,address2,deliveryType,dontCallMe,comment}) => {
        axios.post('https://6355dad2da523ceadc07aaec.mockapi.io/orders', {
            firstName,
            lastName,
            email,
            country,
            phone,
            city,
            address,
            address2,
            deliveryType,
            dontCallMe,
            comment,
            cart:cart.items
        })
        .then(function ({data}) {
            setOrderID(data.id)
        })
        .catch(function (error) {
            setError(error)
            console.log(error);
        });
    }

    return <FormProvider {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} >
                    <OrderForm/>
                </form>
            </FormProvider>
}