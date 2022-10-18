import { Box, Card, CardActionArea, CardContent, CardMedia, ListItem, Typography } from "@mui/material";
import React from "react";

export function ProductsItem(props) {
    const { image_link, name, brand, description, api_featured_image, price, price_sign } = props;
    return (
        
            <Card sx={{height:"100%"}}>
                <CardActionArea className="cardaction" sx={{height:"100%", display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', justifyContent:'space-between'}}>
                    <CardMedia
                        component="img"
                        // width={300}
                        // height= 'auto'
                        // object-fit= 'cover'
                        image={api_featured_image}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component='h3'>
                            {brand}
                        </Typography>
                        <Typography gutterBottom variant="h5" component='h4'>
                            {name}
                        </Typography>
                        {/* <Typography dangerouslySetInnerHTML={{__html: description}} sx={{mt:'10'}} textAlign="center" variant="body2" color="text.secondary"> */}
                            {/* {description} */}
                        {/* </Typography> */}
                        <Box sx={{m:10}}>
                            <Typography fontSize={30} variant="body1" component='span' color="text.primary">
                                {price}{price_sign}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        
    )
}