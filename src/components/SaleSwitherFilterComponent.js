import { Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React,{ useState } from "react";

export function SaleSwitcherFilterComponent(props) {

    const { isSaleFilter, onIsSaleChange } = props;

    const handleChange = (event) => {
        const { checked } = event.target;
        onIsSaleChange(checked);
    };

    return (
        <Box className="filter-block price" sx={{ m:10 }} >
            <Typography>On sale</Typography>
            <Switch
                checked={isSaleFilter}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                />
        </Box>
        
    )
}