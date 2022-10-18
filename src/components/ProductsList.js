import { Box, Grid, List } from "@mui/material";
import React,{ useState, useEffect } from "react";
import { ProductsItem } from "./ProductsItem";

export function ProductsList(){

    const [status, setStatus] = useState('initial');
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const fetchData = async (mountState) => {
        setStatus('loading')
        setError(null)
        setData([])

        try{
            const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`);
            const json = await response.json();
            if(mountState.isMount){
                console.log(json)
                setStatus('success')
                setData(json)
                setError(null)
            }
        } catch (error){
            if(mountState.isMount){
                setStatus(error)
                setError(error.message)
            }
            
        }
    };

    useEffect(() => {
        let mountState = {
            isMount:true,
        };
        fetchData(mountState);
        return ()=>{
            mountState.isMount = false;
        }
    }, []);


    return(
        <Box className="products-list-wrap">
            {status === 'loading' || status === 'initial' ? (
                <Box>Loading...</Box>
            ) : (
                <>
                    {error===null ? (
                        
                            <Grid container spacing={10} alignItems="stretch">
                            {data.map(product => (
                                <Grid key={product.id} item xs={4} md={3} lg={2.4}>
                                    <ProductsItem key={product.id} {...product}/>
                                </Grid>
                            ))}
                            </Grid>
                        
                    ) : (
                        <span style={{ color: 'red' }}>{error}</span>
                    )}
                </>
            )}
        </Box>
    )
}