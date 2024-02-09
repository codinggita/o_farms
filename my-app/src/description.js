import React from "react";



const Description = ({ onQuant, onAdd, onRemove, onSetOrderedQuant }) => {
  return (
    <section className="description">
      <p className="pre">O-Farms company</p>
      <h1>fall limited Organic-foods</h1>
      <p className="desc">
        These Food made purely Organically, Don't miss the essence of it. Go Fast and grab it.
      </p>
      <div className="price">
        <div className="main-tag">
          <p>$125.00</p>
          <p>50%</p>
        </div>
        <s>$250.00</s>
      </div>
      <div className="buttons">
        
        <button
          className="add-to-cart"
          onClick={() => {
            onSetOrderedQuant(onQuant);
          }}
        >
          
          add to cart
        </button>
      </div>
    </section>
  );
};

export default Description;