import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../ducks/cart";

export function ProductsItem(props) {
    const dispatch = useDispatch();
    const { id, title, description, price, photo, isNew, isSale, isInStock, rating, ratingData } = props;

    return (
                <Card sx={{height:"100%"}} >
                    <CardActionArea className="cardaction" sx={{height:"100%", display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', justifyContent:'space-between'}}>
                        <CardMedia
                            component="img"
                            image={photo}
                            alt={title}
                        />
                        <CardContent to={`/catalog/${id}`} sx={{underline:"none"}} component={Link}>
                            {isNew && <Box sx={{m:10}}>
                                        <Typography fontSize={10} variant="body3" component='span' color="text.primary">
                                            New!!!
                                        </Typography>
                                    </Box>}
                            <Typography gutterBottom variant="h5" component='h5'>
                                {title}
                            </Typography>
                            {isSale && <Box sx={{m:10}}>
                                        <Typography fontSize={20} variant="body3" component='span' color="text.primary">
                                            SALE!!
                                        </Typography>
                                    </Box>}
                            <Typography gutterBottom>
                                {description}
                            </Typography>
                            {/* <Typography dangerouslySetInnerHTML={{__html: description}} sx={{mt:'10'}} textAlign="center" variant="body2" color="text.secondary"> */}
                                {/* {description} */}
                            {/* </Typography> */}
                            {/* <Rating name="half-rating-read" max={5} precision={0.1} defaultValue={rating/10} readOnly /> */}
                            <Box sx={{m:10}}>
                                <Typography fontSize={30} variant="body1" component='span' color="text.primary">
                                    {price}$
                                </Typography>
                            </Box>
                        </CardContent>
                        {isInStock ? ( 
                            <Button 
                                onClick={()=>dispatch(addToCart({id,title,photo,price}))}
                                sx={{m:10}} 
                                variant="contained">Add to cart</Button>
                        ) : ( 
                            <Box sx={{m:10}}>
                                <Typography fontSize={20} variant="body3" component='span' color="text.primary">
                                    Out of stock
                                </Typography>
                            </Box>
                        )}
                    </CardActionArea>
                </Card>
    )
}