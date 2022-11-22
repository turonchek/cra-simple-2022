import { Autocomplete, Button, FormControlLabel, FormGroup, FormLabel, RadioGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { countries } from '../utils/countries';
import { Box } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';

export const OrderForm = () => {

    const { control, handleSubmit, formState } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
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
    // const { onChange, onBlur, name, ref } = register('firstName'); 

    const onSubmit = (data) => {
        console.log(data)
    }

    const onError = (error) => {
        console.log(error)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} >
            <FormLabel component="legend" sx={{ width:"100%" }} >
                <Typography>Please fill the form</Typography>
            </FormLabel>
            <FormGroup>
                
                <Controller  
                    control={control}
                    name='firstName'
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <TextField
                                sx={{width: 300, m:20}}
                                id="outlined-multiline-flexible"
                                label="First Name"
                                multiline
                                value={value}
                                onBlur={onBlur}
                                inputRef={ref}
                                onChange={onChange}
                                error={Boolean(formState.errors.firstName)}
                                helperText={formState.errors.firstName?.message}
                            />
                        )} 
                    rules={{required:"This field is required"}}
                    />
                    <Controller  
                        control={control}
                        name='lastName'
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                            }) => (
                                <TextField
                                    sx={{width: 300, m:20}}
                                    id="outlined-multiline-flexible"
                                    label="Last Name"
                                    multiline
                                    value={value}
                                    onBlur={onBlur}
                                    inputRef={ref}
                                    onChange={onChange}
                                    error={Boolean(formState.errors.lastName)}
                                    helperText={formState.errors.lastName?.message}
                                />
                            )} 
                        rules={{required:"This field is required"}}
                    />
                    <Controller  
                        control={control}
                        name='userEmail'
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                            }) => (
                                <TextField
                                    sx={{width: 300, m:20}}
                                    id="outlined-multiline-flexible"
                                    label="Email"
                                    multiline
                                    autoComplete='email'
                                    value={value}
                                    onBlur={onBlur}
                                    inputRef={ref}
                                    onChange={onChange}
                                    error={Boolean(formState.errors.userEmail)}
                                    helperText={formState.errors.userEmail?.message}
                                />
                            )} 
                        rules={{
                            required:"This field is required", 
                            pattern:{
                                value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                message:"Invalid email address"
                            }
                        }}
                    />
                <Controller
                    control={control}
                    name='country'
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                    }) => (
                        <Autocomplete
                            id="country-select-demo"
                            sx={{ width: 300, m:20}}
                            options={countries}
                            // onChange={onChange}
                            // onBlur={onBlur}
                            // value={value}
                            // error={Boolean(formState.errors.country)}
                            
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                <img
                                    loading="lazy"
                                    width="20"
                                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                    alt=""
                                />
                                {option.label} ({option.code})+{option.phone}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    // value={value}
                                    // onBlur={onBlur}
                                    // inputRef={ref}
                                    // onChange={onChange}
                                    error={Boolean(formState.errors.country)}
                                    helperText={formState.errors.country?.message}
                                    {...params}
                                    label="Choose a country"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                />
                            )}
                            onChange={(event,data)=>onChange(data.label)}
                        />
                    )
                }
                rules={{required:"This field is required"}}
                />
                <Controller  
                    control={control}
                    name='userPhone'
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <TextField
                                sx={{width: 300, m:20}}
                                id="outlined-multiline-flexible"
                                label="Phone number"
                                multiline
                                // autoComplete='email'
                                value={value}
                                onBlur={onBlur}
                                inputRef={ref}
                                onChange={onChange}
                                error={Boolean(formState.errors.userPhone)}
                                helperText={formState.errors.userPhone?.message}
                            />
                        )} 
                    rules={{
                        required:"This field is required", 
                        pattern:{
                            value:/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
                            message:"Invalid phone number"
                        }
                    }}
                />
                <Controller  
                    control={control}
                    name='userCity'
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <TextField
                                sx={{width: 300, m:20}}
                                id="outlined-multiline-flexible"
                                label="City"
                                multiline
                                value={value}
                                onBlur={onBlur}
                                inputRef={ref}
                                onChange={onChange}
                                error={Boolean(formState.errors.userCity)}
                                helperText={formState.errors.userCity?.message}
                            />
                        )} 
                    rules={{required:"This field is required"}}
                />
                <Controller  
                    control={control}
                    name='address'
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <TextField
                                sx={{width: 300, m:20}}
                                id="outlined-multiline-flexible"
                                label="Address line 1"
                                autoComplete="address-line1"
                                multiline
                                value={value}
                                onBlur={onBlur}
                                inputRef={ref}
                                onChange={onChange}
                                error={Boolean(formState.errors.address)}
                                helperText={formState.errors.address?.message}
                            />
                        )} 
                    rules={{required:"This field is required"}}
                />
                <Controller  
                    control={control}
                    name='address2'
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <TextField
                                sx={{width: 300, m:20}}
                                id="outlined-multiline-flexible"
                                label="Address line 2"
                                multiline
                                autoComplete="address-line2"
                                value={value}
                                onBlur={onBlur}
                                inputRef={ref}
                                onChange={onChange}
                                error={Boolean(formState.errors.address2)}
                                helperText={formState.errors.address2?.message}
                            />
                        )} 
                />
                <Controller
                    control={control}
                    name='deliveryType'
                    render={({
                        field:{ onChange, onBlur, value, name, ref },
                    })=> (
                        <RadioGroup
                            // sx={{m:20}}
                            // defaultValue="post"
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onBlur={onBlur}
                            onChange={(event,data)=>onChange(data)}
                        >
                            <FormControlLabel sx={{m:20}} value="post" control={<Radio />} label="Post service" />
                            <FormControlLabel sx={{m:20}} value="pickup" control={<Radio />} label="Pickup at the offline store" />
                        </RadioGroup>
                    )}
                />
                <Controller
                    control={control}
                    name="dontCallMe"
                    render={({
                        field: { onChange, onBlur, value, name, ref }
                    }) => (
                        <FormControlLabel 
                            sx={{m:20}}
                            value={value} 
                            onBlur={onBlur}
                            control={<Checkbox />} 
                            label="Please do not call me" 
                            onChange={onChange}
                            />
                    )}
                />
                <Controller  
                    control={control}
                    name='comment'
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <TextField
                                sx={{width: 300, m:20}}
                                id="outlined-multiline-flexible"
                                label="Leave a comment here"
                                multiline
                                rows={4}
                                value={value}
                                onBlur={onBlur}
                                inputRef={ref}
                                onChange={onChange}
                                error={Boolean(formState.errors.comment)}
                                helperText={formState.errors.comment?.message}
                            />
                        )} 
                    rules={{maxLength:{
                        value:500,
                        message:"Too long"
                    }}}
                />
            </FormGroup>
            <Button sx={{m:20}} variant="contained" type="submit">Place an order</Button>
        </form>
    );
}

