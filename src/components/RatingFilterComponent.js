import { AttachMoney } from "@mui/icons-material";
import { Box, Slider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, {useState} from "react";

export function RatingFilterComponent(props) {

    const { ratingData, onRatingChange, ratingFilter } = props;
    const ratingDataNumbers = ratingData.map( Number )

    // const [value, setValue] = useState([Math.min(...ratingDataNumbers), Math.max(...ratingDataNumbers)]);

    const handleChangeRating = (event, newValue) => {
        onRatingChange(newValue);
    };
    return (
        <Box className="filter-block price" sx={{ m:10 }} >
            <Typography>Rating</Typography>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                {/* <AttachMoney fontSize="small" /> */}
                <Slider
                    getAriaLabel={() => 'Rating range'}
                    value={ratingFilter}
                    min={Math.min(...ratingDataNumbers)}
                    max={Math.max(...ratingDataNumbers)}
                    onChange={handleChangeRating}
                    valueLabelDisplay="auto"
                />
                {/* <AttachMoney fontSize="large" /> */}
            </Stack>
        </Box>
            
    )
}