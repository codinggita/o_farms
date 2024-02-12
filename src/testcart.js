import React, { Fragment, useState, useContext } from 'react';
import { Box, Badge, IconButton, Modal, Paper, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { CartItemsContext } from './CartItemsContext';


const Cart = () => {
    const [open, setOpen] = useState(false);
    const { cartItems, totalAmount, removeItemFromCart } = useContext(CartItemsContext);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDeleteItem = (itemId) => {
        removeItemFromCart(itemId);
    };

    return (
        <>
            <Badge color="error">
                <IconButton onClick={handleOpen}>
                    <ShoppingCartIcon />
                </IconButton>
            </Badge>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        maxWidth: 400,
                    }}
                >
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h6">Your Cart</Typography>
                            <IconButton onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ maxHeight: 300, overflowY: 'auto' }}>
                            {cartItems && cartItems.map(item => (
                                <Paper key={item.id} sx={{ marginBottom: 1, padding: 1 }}>
                                    <Typography>{item.name}</Typography>
                                    <Typography>Quantity: {item.quantity}</Typography>
                                    <IconButton onClick={() => handleDeleteItem(item.id)}>
                                        <button >Delete item</button> {/* Add an icon for delete functionality */}
                                    </IconButton>
                                    {/* You may want to display more details like price */}
                                </Paper>
                            ))}
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                            <Typography>Total Amount: ${totalAmount}</Typography>
                            <Button variant="contained" color="primary">Checkout</Button>
                        </Box>
                    </Paper>
                </Box>
            </Modal>
        </>
    );
};

export default Cart;

