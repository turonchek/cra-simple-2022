import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { PriceFilterComponent } from "./PriceFilterComponent";
import { RatingFilterComponent } from "./RatingFilterComponent";
import { IsNewSwitcherFilterComponent } from "./IsNewSwitcherFilterComponent";
import { SearchFilterComponent } from "./SearchFilterComponent";
import { CategoriesFilterComponent } from "./CategoriesFilterComponent";
import { SaleSwitcherFilterComponent } from "./SaleSwitherFilterComponent";
import { IsInStockSwitcherFilterComponent } from "./IsInStockSwitcherFilterComponent";

export function Filters(props){
    
    const { categories, 
            products, 
            search, 
            onSearch, 
            onPriceChange, 
            priceFilter, 
            onRatingChange, 
            ratingFilter, 
            isNewFilter, 
            onIsNewChange,
            isSaleFilter,
            onIsSaleChange,
            isInStockFilter,
            onIsInStockChange,
            onChangeCategories,
            checkedCategories } = props;

            console.log(products)

    const priceData = products.map( product => {
        return product.price;
    })

    const ratingData = products.map( product => {
        return product.rating;
    })
    
    return (
        <Box
            className="filters-form"
            sx={{
                width: '25%',
                display:'inline-block',
                verticalAlign: 'top',
            }}
            >
            <Typography component="h2">Filters</Typography>
            <Box className="filters-block-wrap" sx={{m:10}} > 
                <SearchFilterComponent search={search} onSearch={onSearch} />
                <PriceFilterComponent priceData={priceData} onPriceChange={onPriceChange} priceFilter={priceFilter}/>
                <RatingFilterComponent ratingData={ratingData} onRatingChange={onRatingChange} ratingFilter={ratingFilter}/>
                <IsNewSwitcherFilterComponent isNewFilter={isNewFilter} onIsNewChange={onIsNewChange} />
                <SaleSwitcherFilterComponent  isSaleFilter={isSaleFilter} onIsSaleChange={onIsSaleChange} />
                <IsInStockSwitcherFilterComponent onIsInStockChange={onIsInStockChange} isInStockFilter={isInStockFilter} />
                <CategoriesFilterComponent checkedCategories={checkedCategories} onChangeCategories={onChangeCategories} categories={categories}/>
            </Box>
        </Box>
    )
}