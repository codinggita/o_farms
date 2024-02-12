import "./products.css";
import Appnavtest from './appnavtest'
import ThreedCarousel from "./threedcarousel";
import Producttes from "./testcar";


function Products(){
  return (
    
    <div className="main-c">
    
    <div className="prodnav">
    <Appnavtest/>
    
    </div>
     <div className="smdd">
        <p className="smd">Products</p>
        <a href="/Cart" className="smd">Cart</a>
     </div>
     <div>
     <Producttes/>
     </div>
    
  
     
     
    </div>


  );

  

};

export default Products;