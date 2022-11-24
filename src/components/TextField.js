import React from "react";
import { forwardRef } from "react";
import { FormField } from "./FormField";
import { TextField as MUITextField } from "@mui/material";


export const TextField = forwardRef((props, ref) => (
    <FormField ref={ref} Component={MUITextField} {...props} />
));