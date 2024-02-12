import React from "react";
import Cart from "./testcart";



const Description = ({ title, onQuant, onAdd, onRemove, onSetOrderedQuant }) => {
  return (
    <section className="description">
      <div><Cart /></div>
      <p className="pre">O-Farms company     </p>
      <h1>{title}</h1>
      <p className="desc">
        These Food made purely Organically, Don't miss the essence of it. Go Fast and grab it.
        
      </p>
      <div className="price">
        <div className="main-tag">
          <p>Rs 125.00</p>
          <p>50%</p>
        </div>
        <s>Rs 250.00</s>
      </div>
      <div className="buttons">
       

      {/* <button onClick={addToCart}>Add to Cart</button> */}
          
        
        {/* <button
          className="add-to-cart"
          onClick={() => {
            onSetOrderedQuant(onQuant);
          }}
        >
          
          add to cart */}
        {/* </button> */}
      </div>
    </section>
  );
};

export default Description;