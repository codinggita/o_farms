import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Pdp from './pdp';
import Cart from './Cart';
import Producttes from './testcar';
import Pdptes from './pdptes';
import CartPage from './carttest';
import { CartItemsProvider } from './CartItemsContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartItemsProvider>

    <App/>
    </CartItemsProvider>

    </BrowserRouter>
    
    
  </React.StrictMode>
);

