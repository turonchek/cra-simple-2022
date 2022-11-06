import { Box, Grid, List, Typography } from "@mui/material";
import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductsItem } from "./ProductsItem";

export function ProductsList(props){

    const { products } = props;

    const ratingData = products.map( product => {
        return product.rating;
    })

    return(
        <Box  sx={{
                width:'75%', 
                display:'inline-block',
                verticalAlign: 'top',
                }} 
            className="products-list-wrap">
                            <Typography>Catalog</Typography>
                            <Grid container spacing={10} alignItems="stretch">
                            {products.map(product => (
                                <Grid key={product.id} item xs={6} md={4} lg={4} xl={4}>
                                    <ProductsItem ratingData={ratingData} {...product}/>
                                </Grid>
                            ))}
                            </Grid>
        </Box>
    )
}