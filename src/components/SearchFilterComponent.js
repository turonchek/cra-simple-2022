import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export function SearchFilterComponent(props){

    const handleChangeSearch = (e) => {
        const {onSearch} = props;
        const { value } = e.currentTarget;
        onSearch(value);
    }

    return(
        <Box className="filter-block search" sx={{ m:10 }} >
            <Typography>Search</Typography>
            <TextField value={props.search} onChange={handleChangeSearch} id="outlined-search" label="Name" type="search" />
        </Box>
    )
}