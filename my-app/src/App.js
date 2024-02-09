import react from "react";
import {Routes,Route} from "react-router-dom";
import threedcarousel from "./threedcarousel";

import Login from './Login';
 import Signup from './Signup';
 import Products from './products';
 import Apps from './apps';

 import Footer from './Footer';
 import Newsletter from './Newsletter';

import Cart from "./Cart"
 import JournalPage from './journal';
import Pricing from './Pricing';
import VideoList from "./videos";
import ThreedCarousel from "./threedcarousel";


function App(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Apps/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/Signup" element={<Signup/>}/>
                <Route path="/Products" element={<Products/>}/>
                <Route path="/Aboutus" element={<Footer/>}/>
                <Route path="/videos" element={<VideoList/>}/>
                <Route path="/Cart" element={<VideoList/>}/>
            </Routes>

            


        </>
    );
};

export default App;