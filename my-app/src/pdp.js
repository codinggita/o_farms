import React, { useState } from "react";
import "./pdp.css";
import { Container } from "@mui/material";

import Gallery from "./gallery";
import Description from "./description";
import MobileGallery from "./mobilegallery";

function Pdp() {
  const [quant, setQuant] = useState(0);
  const [orderedQuant, setOrderedQuant] = useState(0);

  const addQuant = () => {
    setQuant(quant + 1);
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  };

  const resetQuant = () => {
    setQuant(0);
    setOrderedQuant(0);
  };
  return (
    <main className="App">
      <Container component="section" maxWidth={"lg"}>
        
        <section className="core">
          <Gallery />
          <MobileGallery />
          <Description
            onQuant={quant}
            onAdd={addQuant}
            onRemove={removeQuant}
            onSetOrderedQuant={setOrderedQuant}
          />
        </section>
      </Container>
      
    </main>
  );
}

export default Pdp;



// // Pdp.js
// import React, { useState, useEffect } from "react";
// import "./pdp.css";
// import { Container } from "@mui/material";
// import Gallery from "./gallery";
// import Description from "./description";
// import MobileGallery from "./mobilegallery";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function Pdp() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         const response = await axios.get(`http://localhost:3001/api/products/${productId}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     }
//     fetchProduct();
//   }, [productId]);

//   if (!product) {
//     return <div>Loading...</div>; // Show loading indicator while fetching data
//   }

//   return (
//     <main className="App">
//       <Container component="section" maxWidth={"lg"}>
//         <section className="core">
//           <Gallery images={product.images} />
//           <MobileGallery images={product.images} />
//           <Description
//             product={product}
//             onAddToCart={() => {/* Implement add to cart functionality */}}
//             onRemoveFromCart={() => {/* Implement remove from cart functionality */}}
//           />
//         </section>
//       </Container>
//     </main>
//   );
// }

// export default Pdp;
