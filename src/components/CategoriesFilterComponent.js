import React, { useState, useCallback } from "react";
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, IconButton, List, ListItem, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export function CategoriesFilterComponent(props){

    const { categories, checkedCategories, onChangeCategories } = props;
    // console.log(categories)

    const [isOpenCategories, setIsOpenCategories] = useState(false);
    
    const handleChangeCategories = useCallback((e) => {
        const { value } = e.currentTarget;
        let newCategory;
            if(checkedCategories.includes(value)){
                newCategory = checkedCategories.filter(item => item !== value);
            }else {
                newCategory = [...checkedCategories,value];
            }
            onChangeCategories(newCategory)
    },[checkedCategories,onChangeCategories])
    
    return(
        <Box className="filters-block categories" sx={{ m:10 }} >
                    <Box className="filters-block-data">
                        <FormControl sx={{ m: 3, width:"100%" }} component="fieldset" variant="standard">
                            <FormLabel component="legend" sx={{ width:"100%" }} >
                                <IconButton disableRipple onClick={() => setIsOpenCategories(!isOpenCategories)} sx={{display:'flex', alignItems:'center', justifyContent:'space-between', width:"100%"}}>
                                    <Typography>Categories</Typography>
                                    <AddIcon/>
                                </IconButton>
                            </FormLabel>
                            {isOpenCategories && <FormGroup>
                                            <List className="filters-block-data-list" >
                                                    {categories
                                                    .map(category => (
                                                        <ListItem key={category.id} className="filters-block-data-list__item">
                                                            <FormControlLabel
                                                            control={
                                                                <Checkbox checked={checkedCategories.includes(category.name)} id={category.id} value={category.name} onChange={handleChangeCategories} name={category.name} />
                                                                }
                                                                label={category.name}
                                                                />
                                                        </ListItem>
                                                    ))}
                                            </List>
                                        </FormGroup>}
                            <FormHelperText></FormHelperText>
                        </FormControl>
                    </Box>
                </Box>
    )
}