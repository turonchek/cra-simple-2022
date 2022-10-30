import { Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React,{ useState } from "react";

export function IsNewSwitcherFilterComponent(props) {

    const { isNewFilter, onIsNewChange } = props;

    const handleChange = (event) => {
        const { checked } = event.target;
        onIsNewChange(checked);
    };

    return (
        <Box className="filter-block price" sx={{ m:10 }} >
            <Typography>New</Typography>
            <Switch
                checked={isNewFilter}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                />
        </Box>
        
    )
}