import { Autocomplete, FormControlLabel, FormGroup, FormLabel, TextField, RadioGroup, Typography } from '@mui/material';
import React from 'react';
import { Button } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { countries } from '../utils/countries';
import { Box } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import { TextField as CustomTextField} from './TextField';

export const OrderForm = () => {

    const { control, formState } = useFormContext();
    

    return (
        <>
            <FormLabel component="legend" sx={{ width:"100%" }} >
                <Typography>Please fill the form</Typography>
            </FormLabel>
            <FormGroup sx={{display:'flex', flexDirection:"row" }} >
                <CustomTextField
                    name='firstName'
                    label="First name"
                    rules={{required:"This field is required"}}
                />
                <CustomTextField
                    name='lastName'
                    label="Last name"
                    rules={{required:"This field is required"}}
                />
                <CustomTextField
                    name='email'
                    label="Email"
                    rules={{
                        required:"This field is required",
                    pattern:{
                        value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                        message:"Invalid email address"
                    }}}
                    autoComplete='email'
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
                                    error={Boolean(formState.errors.country)}
                                    helperText={formState.errors.country?.message}
                                    {...params}
                                    label="Choose a country"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password',
                                    }}
                                />
                            )}
                            onChange={(event,data)=>onChange(data.label)}
                        />
                    )
                }
                rules={{required:"This field is required"}}
                />
                <CustomTextField
                    name='phone'
                    label="Phone number"
                    rules={{
                        required:"This field is required",
                    pattern:{
                        value:/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
                        message:"Invalid phone number"
                    }}}
                />
                <CustomTextField
                    name='address'
                    label="Address line 1"
                    rules={{required:"This field is required"}}
                    autoComplete="address-line1"
                />
                <CustomTextField
                    name='address2'
                    label="Address line 2"
                    autoComplete="address-line2"
                />
                <CustomTextField
                    name='city'
                    label="City"
                    rules={{required:"This field is required"}}
                />
                <Controller
                    control={control}
                    name='deliveryType'
                    render={({
                        field:{ onChange, onBlur, value, name, ref },
                    })=> (
                        <RadioGroup
                            sx={{m:20,width:300}}
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onBlur={onBlur}
                            onChange={(event,data)=>onChange(data)}
                        >
                            <FormControlLabel value="post" control={<Radio />} label="Post service" />
                            <FormControlLabel value="pickup" control={<Radio />} label="Pickup at the offline store" />
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
                            sx={{display:"block",my:20, mx:10,width:300}}
                            value={value} 
                            onBlur={onBlur}
                            control={<Checkbox />} 
                            label="Please do not call me" 
                            onChange={onChange}
                            />
                    )}
                />
                <CustomTextField
                    name='comment'
                    label="Leave a comment here"
                    multiline
                    rows={4}
                    rules={{maxLength:{
                        value:500,
                        message:"Too long"
                    }}}
                />
            </FormGroup>
            <Button sx={{m:20}} variant="contained" type="submit">Place an order</Button> 
        </>
    );
}

