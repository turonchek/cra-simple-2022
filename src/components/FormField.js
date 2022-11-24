import { boxSizing } from "@mui/system";
import React from "react";
import { forwardRef } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";

export const FormField = forwardRef(
    (
        {
        name,
        label,
        Component,
        rules,
        ...restProps
        },
        ref
    ) => {
        const formState = useFormState();
        return (
        <Controller
            name={name}
            ref={ref}
            rules={rules}
            render={({ field: { onChange, onBlur, value, ref } }) => (
            <Component
                sx={{m:20,width:300}}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                error={Boolean(formState.errors && formState.errors[name])}
                helperText={formState.errors && formState.errors[name]?.message}
                label={label}
                {...restProps}
            />
            )}
        />
        );
    }
);