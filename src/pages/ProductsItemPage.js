import React,{useState, useEffect} from "react";
import { useParams } from "react-router";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from "@mui/material";

export function ProductsItemPage() {

    const [item, setItem] = useState({});
    const { id } = useParams();

    const fetchItem = () => {
        fetch(`https://61f5558a62f1e300173c40f3.mockapi.io/products/${id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    }

    useEffect(() => {
        fetchItem();
    }, []);

    return(
        <Card sx={{height:"100%"}}>
            <CardActionArea className="cardaction" sx={{height:"100%", display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', justifyContent:'space-between'}}>
                <CardMedia
                    component="img"
                    // width={300}
                    // height= 'auto'
                    // object-fit= 'cover'
                    image={item.photo}
                    alt={item.title}
                />
                <CardContent>
                    {item.isNew && <Box sx={{m:10}}>
                                <Typography fontSize={10} variant="body3" component='span' color="text.primary">
                                    New!!!
                                </Typography>
                            </Box>}
                    <Typography gutterBottom variant="h5" component='h5'>
                        {item.title}
                    </Typography>
                    {item.isSale && <Box sx={{m:10}}>
                                <Typography fontSize={20} variant="body3" component='span' color="text.primary">
                                    SALE!!
                                </Typography>
                            </Box>}
                    <Typography gutterBottom>
                        {item.description}
                    </Typography>
                    {/* <Typography dangerouslySetInnerHTML={{__html: description}} sx={{mt:'10'}} textAlign="center" variant="body2" color="text.secondary"> */}
                        {/* {description} */}
                    {/* </Typography> */}
                    <Rating name="half-rating-read" max={5} precision={0.1} defaultValue={item.rating/10} readOnly />
                    <Box sx={{m:10}}>
                        <Typography fontSize={30} variant="body1" component='span' color="text.primary">
                            {item.price}$
                        </Typography>
                    </Box>
                </CardContent>
                {item.isInStock ? ( 
                        <Button variant="contained">Add to cart</Button>
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