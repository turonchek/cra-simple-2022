import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { OrderForm } from "../components/OrderForm";

export function OrderPage() {

    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            userEmail:"",
            country:"",
            userPhone:"",
            userCity:"",
            address:"",
            address2:"",
            deliveryType:"post",
            dontCallMe:false,
            comment:"",
        },
    });

    const onSubmit = (data) => {
        console.log(data)
    }

    const onError = (error) => {
        console.log(error)
    }

    return <FormProvider {...form} >
                <form onSubmit={form.handleSubmit(onSubmit, onError)} >
                    <OrderForm/>
                </form>
            </FormProvider>
}