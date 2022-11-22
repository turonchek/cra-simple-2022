import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const OrderSubmitButton = () => {
    return (
        <Button {...{
                to:'/order',
                component:Link
            }}
            variant="contained">
            Checkout
        </Button>
    );
}

