// import React from 'react';
// import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';

// const Cartp = () => {
//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>
//         Shopping Cart
//       </Typography>
//       <List>
//         Display cart items 
//          <ListItem>
//           <ListItemText primary="Product Name" secondary="$10.99" />
//           <ListItemSecondaryAction>
//             <IconButton edge="end" aria-label="delete">
//               <DeleteIcon />
//             </IconButton>
//           </ListItemSecondaryAction>
//         </ListItem>
//       </List>
//       <Typography variant="h5" gutterBottom>
//         Total: $0.00
//       </Typography>
//        Checkout button 
//     </div>
//   );
// }

// export default Cartp;


// import React, { useState } from 'react';

// const CartPage = () => {
//   // State for cart items
//   const [cartItems, setCartItems] = useState([]);
//   // State for total price
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Function to add an item to the cart
//   const addItemToCartHandler = (item) => {
//     const updatedCart = [...cartItems, item];
//     setCartItems(updatedCart);
//     // Update total price
//     setTotalPrice(totalPrice + (item.quantity * item.price));
//   };

//   // Function to remove an item from the cart
//   const removeItemFromCartHandler = (id) => {
//     const updatedCart = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedCart);
//     // Recalculate total price
//     const removedItem = cartItems.find(item => item.id === id);
//     setTotalPrice(totalPrice - (removedItem.quantity * removedItem.price));
//   };

//   // Function to calculate total price
//   const calculateTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
//   };

//   // Function to display cart items
//   const renderCartItems = () => {
//     return cartItems.map(item => (
//       <div key={item.id}>
//         <p>{item.title}</p>
//         <p>Quantity: {item.quantity}</p>
//         <p>Price: {item.price}</p>
//         <button onClick={() => removeItemFromCartHandler(item.id)}>Remove</button>
//       </div>
//     ));
//   };

//   // Function to display FAQ
//   const renderFAQ = () => {
//     return (
//       <div>
//         <h2>Frequently Asked Questions</h2>
//         {/* FAQ content goes here */}
//       </div>
//     );
//   };

//   // Function to display additional features
//   const renderAdditionalFeatures = () => {
//     return (
//       <div>
//         <h2>Additional Features</h2>
//         {/* Additional features content goes here */}
//       </div>
//     );
//   };

//   return (
//     <div className="cart-page">
//       <header>
//         <h1>Your Cart</h1>
//         <p>{cartItems.length} items in your cart</p>
//       </header>

//       <div className="cart-items">
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty</p>
//         ) : (
//           renderCartItems()
//         )}
//       </div>

//       <div className="total-price">
//         <h2>Total Price: ${totalPrice}</h2>
//       </div>

//       <div className="faq-section">
//         {renderFAQ()}
//       </div>

//       <div className="additional-features">
//         {renderAdditionalFeatures()}
//       </div>
//     </div>
//   );
// };

// export default CartPage;

// import React, { useState, useEffect } from 'react';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Function to add an item to the cart
//   const addItemToCartHandler = (item) => {
//     const updatedCart = [...cartItems, item];
//     setCartItems(updatedCart);
//     setTotalPrice(totalPrice + (item.quantity * item.price));
//   };

//   // Function to remove an item from the cart
//   const removeItemFromCartHandler = (id) => {
//     const updatedCart = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedCart);
//     const removedItem = cartItems.find(item => item.id === id);
//     setTotalPrice(totalPrice - (removedItem.quantity * removedItem.price));
//   };

//   // Function to calculate total price
//   const calculateTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
//   };

//   // Function to display cart items
//   const renderCartItems = () => {
//     return cartItems.map(item => (
//       <div key={item.id}>
//         <p>{item.title}</p>
//         <p>Quantity: {item.quantity}</p>
//         <p>Price: {item.price}</p>
//         <button onClick={() => removeItemFromCartHandler(item.id)}>Remove</button>
//       </div>
//     ));
//   };

//   // Function to display FAQ
//   const renderFAQ = () => {
//     return (
//       <div>
//         <h2>Frequently Asked Questions</h2>
//         {/* FAQ content goes here */}
//       </div>
//     );
//   };

//   // Function to display additional features
//   const renderAdditionalFeatures = () => {
//     return (
//       <div>
//         <h2>Additional Features</h2>
//         {/* Additional features content goes here */}
//       </div>
//     );
//   };

//   useEffect(() => {
//     // Logic for fetching cart items and setting initial state
//   }, []);

//   return (
//     <div className="cart-page">
//       <header>
//         <h1>Your Cart</h1>
//         <p>{cartItems.length} items in your cart</p>
//       </header>

//       <div className="cart-items">
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty</p>
//         ) : (
//           renderCartItems()
//         )}
//       </div>

//       <div className="total-price">
//         <h2>Total Price: ${totalPrice}</h2>
//       </div>

//       <div className="faq-section">
//         {renderFAQ()}
//       </div>

//       <div className="additional-features">
//         {renderAdditionalFeatures()}
//       </div>
//     </div>
//   );
// };

// export default CartPage;




// import React, { Fragment, useState, useContext } from 'react';
// import axios from 'axios';
// import Badge from '@mui/material/Badge';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Modal from '@mui/material/Modal';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   minWidth: '350px',
//   width: '45%',
//   height: '400px',
//   bgcolor: 'background.paper',
//   border: '5px solid #FFE26E',
//   borderRadius: '15px',
//   boxShadow: 24,
//   p: 4,
// };

// const Cart = () => {
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     const [ openCheckoutModal, setOpenCheckoutModal] = useState(false);
//     const handleCheckoutOpen = () => setOpenCheckoutModal(true);
//     const handleCheckoutClose = () => setOpenCheckoutModal(false);

//     const cartItems = useContext(CartItemsContext);

//     const handleCheckout = async () => {
//         if(cartItems.totalAmount > 0){
//             const config = {
//                 reason: 'checkout',
//                 amount: cartItems.totalAmount
//             }

//         await axios.post("http://localhost:5000/api/payment", config)
//             .then((res) => {
//                     console.log(res.data)
//                     window.location.replace(res.data)
//                     handleCheckoutOpen()
//                 }
//             )
//             .catch((err) => console.log(err))
//         }
//         else {
//             return
//         }
//     }

//     return (
//         <Fragment>
//                 <Badge badgeContent={cartItems.items.length} color="error">
//                     <ShoppingCartIcon color="black" onClick={handleOpen} sx={{ width: '35px'}}/>
//                 </Badge>
//                 <Modal
//                     open={open}
//                     onClose={handleClose}
//                 >
//                     <Box sx={style}>
//                     <div className="cart__header">
//                         <h2>Your Cart</h2>
//                     </div>
//                     <div className="cart__items__container">
//                         <div className="cartItems">
//                             {cartItems.items.length===0? 
//                                 <div className="cart__empty"> Empty cart!</div> : 
//                                 <div className="shop__cart__items">
//                                     {cartItems.items.map((item) => <CartCard key={item._id} item={item}/>)}
//                                 </div>
//                             }
//                             {cartItems.items.length > 0 &&
//                                 <div className="options">
//                                     <div className="total__amount">
//                                         <div className="total__amount__label">Total Amount:</div>
//                                         <div className="total__amount__value">${cartItems.totalAmount}.00</div>
//                                     </div>
//                                     <div className="checkout">
//                                         <Button variant="outlined" onClick={handleCheckout}>Checkout</Button>
//                                     </div>
//                                 </div>
//                             }
//                             </div>
//                         </div>
//                     </Box>
//                 </Modal>
//                 <Modal
//                 open={openCheckoutModal}
//                 onClose={handleCheckoutClose}
//             >
//                     <Box sx={style}>
//                     <div className="d-flex w-100 h-100 justify-content-center align-items-center">
//                         <h2>Your checkout was successful</h2>
//                     </div>
//                     </Box>
//                 </Modal>
//         </Fragment>
//      );
// }
 
// export default Cart;            

// const CartCard = (props) => {
//     let cartItems  = useContext(CartItemsContext)
//     const [size, setSize] = useState(props.item.size[0]);

//     const handelQuantityIncrement = (event) => {
//         cartItems.quantity(props.item.id, 'INC');
//     };

//     const handelQuantityDecrement = (event) => {
//         if(props.item.itemQuantity >1){
//             cartItems.quantity(props.item.id, 'DEC');
//         }
//     };

//     const handelRemoveItem = () => {
//         cartItems.removeItem(props.item)
//     }

//     const handleSizeChange = (event) => {
//         setSize(event.target.value);
//     };

//     return (
//         <div className='cart__item__card'>
//             <div className="cart__item__detail">
//                 <div className="cart__item__image">
//                     <img src={`https://shema-ecommerce.herokuapp.com/${props.item.category}/${props.item.image[0].filename}`} alt="item" className="item__image"/>
//                 </div>
//                 <div className="cart__item__name">{props.item.name}</div>
//             </div>
//             <div className="cart__item__quantity">
//                 <IconButton onClick={handelQuantityIncrement}>
//                     <AddCircleIcon />
//                 </IconButton>
//                 <div type="text" name="quantity" className="quantity__input">{props.item.itemQuantity}</div>
//                 <IconButton onClick={handelQuantityDecrement}>
//                     <RemoveCircleIcon fontSize='medium'/>
//                 </IconButton>
//             </div>
//             <div className="product size">
//                 <Box sx={{ minWidth: 80} }>
//                     <FormControl fullWidth size="small">
//                         <InputLabel>Size</InputLabel>
//                         <Select
//                         value={size}
//                         label="size"
//                         onChange={handleSizeChange}
//                         >
//                         {props.item.size.map((size) => <MenuItem value={size}>{size}</MenuItem>)}
//                         </Select>
//                     </FormControl>
//                 </Box>
//             </div>
//             <div className="cart__item__price">${props.item.price}</div>
//             <div className="remove__item__icon">
//                 <IconButton>
//                     <HighlightOffIcon onClick={handelRemoveItem}/>
//                 </IconButton>
//             </div>
//         </div>
//      );
// }

// export default CartCard;   

// export const CartItemsContext = createContext({
//     items: [],
//     totalAmount: 0,
//     addItem: () => {},
//     removeItem: () => {},
//     quantity: () => {}
// })


import React, { Fragment, useState, useContext } from 'react';
import axios from 'axios';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '350px',
  width: '45%',
  height: '400px',
  bgcolor: 'background.paper',
  border: '5px solid #FFE26E',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [ openCheckoutModal, setOpenCheckoutModal] = useState(false);
    const handleCheckoutOpen = () => setOpenCheckoutModal(true);
    const handleCheckoutClose = () => setOpenCheckoutModal(false);

    const cartItems = useContext(CartItemsContext);

    const handleCheckout = async () => {
        if(cartItems.totalAmount > 0){
            const config = {
                reason: 'checkout',
                amount: cartItems.totalAmount
            }

        await axios.post("http://localhost:5000/api/payment", config)
            .then((res) => {
                    console.log(res.data)
                    window.location.replace(res.data)
                    handleCheckoutOpen()
                }
            )
            .catch((err) => console.log(err))
        }
        else {
            return
        }
    }

    return (
        <Fragment>
                <Badge badgeContent={cartItems.items.length} color="error">
                    <ShoppingCartIcon color="black" onClick={handleOpen} sx={{ width: '35px'}}/>
                </Badge>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                    <div className="cart__header">
                        <h2>Your Cart</h2>
                    </div>
                    <div className="cart__items__container">
                        <div className="cartItems">
                            {cartItems.items.length===0? 
                                <div className="cart__empty"> Empty cart!</div> : 
                                <div className="shop__cart__items">
                                    {cartItems.items.map((item) => <CartCard key={item._id} item={item}/>)}
                                </div>
                            }
                            {cartItems.items.length > 0 &&
                                <div className="options">
                                    <div className="total__amount">
                                        <div className="total__amount__label">Total Amount:</div>
                                        <div className="total__amount__value">${cartItems.totalAmount}.00</div>
                                    </div>
                                    <div className="checkout">
                                        <Button variant="outlined" onClick={handleCheckout}>Checkout</Button>
                                    </div>
                                </div>
                            }
                            </div>
                        </div>
                    </Box>
                </Modal>
                <Modal
                open={openCheckoutModal}
                onClose={handleCheckoutClose}
            >
                    <Box sx={style}>
                    <div className="d-flex w-100 h-100 justify-content-center align-items-center">
                        <h2>Your checkout was successful</h2>
                    </div>
                    </Box>
                </Modal>
        </Fragment>
     );
}
 
export default Cart;            

const CartCard = (props) => {
    let cartItems  = useContext(CartItemsContext)
    const [size, setSize] = useState(props.item.size[0]);

    const handelQuantityIncrement = (event) => {
        cartItems.quantity(props.item.id, 'INC');
    };

    const handelQuantityDecrement = (event) => {
        if(props.item.itemQuantity >1){
            cartItems.quantity(props.item.id, 'DEC');
        }
    };

    const handelRemoveItem = () => {
        cartItems.removeItem(props.item)
    }

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    return (
        <div className='cart__item__card'>
            <div className="cart__item__detail">
                <div className="cart__item__image">
                    <img src={`https://shema-ecommerce.herokuapp.com/${props.item.category}/${props.item.image[0].filename}`} alt="item" className="item__image"/>
                </div>
                <div className="cart__item__name">{props.item.name}</div>
            </div>
            <div className="cart__item__quantity">
                <IconButton onClick={handelQuantityIncrement}>
                    <AddCircleIcon />
                </IconButton>
                <div type="text" name="quantity" className="quantity__input">{props.item.itemQuantity}</div>
                <IconButton onClick={handelQuantityDecrement}>
                    <RemoveCircleIcon fontSize='medium'/>
                </IconButton>
            </div>
            <div className="product size">
                <Box sx={{ minWidth: 80} }>
                    <FormControl fullWidth size="small">
                        
                        <Select
                        value={size}
                        label="size"
                        onChange={handleSizeChange}
                        >
                        {props.item.size.map((size) => <MenuItem value={size}>{size}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className="cart__item__price">${props.item.price}</div>
            <div className="remove__item__icon">
                <IconButton>
                    <HighlightOffIcon onClick={handelRemoveItem}/>
                </IconButton>
            </div>
        </div>
     );
}
 
export { CartCard };   

export const CartItemsContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {},
    quantity: () => {}
});
