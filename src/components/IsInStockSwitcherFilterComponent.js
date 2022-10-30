import { Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export function IsInStockSwitcherFilterComponent(props) {

    const { isInStockFilter, onIsInStockChange } = props;

    const handleChange = (event) => {
        const { checked } = event.target;
        onIsInStockChange(checked);
    };

    return(
        <Box className="filter-block price" sx={{ m:10 }} >
            <Typography>In stock</Typography>
            <Switch
                checked={isInStockFilter}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                />
        </Box>
    )
}