import { AttachMoney } from "@mui/icons-material";
import { Box, Slider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, {useCallback, useState} from "react";

export function PriceFilterComponent(props) {
    

    const { priceData, onPriceChange, priceFilter } = props;
    const priceDataNumbers = priceData.map( Number )


    const handleChangePrice = useCallback((e,newValue) => {
        onPriceChange(newValue);
    },[])

    return (
        <Box className="filter-block price" sx={{ m:10 }} >
            <Typography>Price</Typography>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                {/* <AttachMoney fontSize="small" /> */}
                <Slider
                    getAriaLabel={() => 'Price range'}
                    value={priceFilter}
                    min={Math.min(...priceDataNumbers)}
                    max={Math.max(...priceDataNumbers)}
                    onChange={handleChangePrice}
                    valueLabelDisplay="auto"
                />
                {/* <AttachMoney fontSize="large" /> */}
            </Stack>
        </Box>
            
    )
}