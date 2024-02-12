// import React, { useState } from "react";
// import { useSpring, animated } from "react-spring";
// import Button from "./Button";
// import Carroussel from "./Carousel";
// import Styles from "./Card.module.css";
// import { v4 as uuidv4 } from "uuid";

// function Card({ imagen, title, para, price }) {
//   const [show, setShown] = useState(false);

//   const props3 = useSpring({
//     transform: show ? "scale(1.03)" : "scale(1)",
//     boxShadow: show ? "0 20px 25px rgb(0 0 0 / 25%)" : "0 2px 10px rgb(0 0 0 / 8%)"
//   });

//   return (
//     <animated.div
//       className={Styles.card}
//       style={props3}
//       onMouseEnter={() => setShown(true)}
//       onMouseLeave={() => setShown(false)}
//     >
//       <img src={imagen} alt="" />
//       <h2>{title}</h2>
//       <p>{para}</p>
//       <p>{price}</p>

//       <div className={Styles.btnn}>
//         <Button text="Add to Cart" />
//       </div>
//     </animated.div>
//   );
// }

// function ThreedCarousel() {
//   let cards = [
//     {
//       key: uuidv4(),
//       content: (
//         <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" title="HI" para="bye" price="tata"/>
//       )
//     },
//     {
//       key: uuidv4(),
//       content: (
//         <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" title="HI" para="bye" price="tata" />
//       )
//     },
//     {
//       key: uuidv4(),
//       content: (
//         <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" title="HI" para="bye" price="tata"/>
//       )
//     },
//     {
//       key: uuidv4(),
//       content: (
//         <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" title="HI" para="bye" price="tata"/>
//       )
//     },
//     {
//       key: uuidv4(),
//       content: (
//         <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" title="HI" para="bye" price="tata"/>
//       )
//     }
//   ];

//   return (
//     <div className="">
//       <Carroussel
//         cards={cards}
//         height="650px"
//         width="100%"
//         margin="0 auto"
//         offset={2}
//         showArrows={false}
//       />
//     </div>
//   );
// }

// export default ThreedCarousel;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Carroussel from "./Carousel";
// import Styles from "./Card.module.css";
// import { Link } from "react-router-dom";

// function ThreedCarousel() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await axios.get("http://localhost:3001/api/products");
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   // Transform products into cards expected by the Carousel component
//   const carouselCards = products.map((product) => ({
//     key: product.productId,
//     content: (
//       <Link key={product.productId} to={`/product/${product.productId}`}>
//       <div className={Styles.card} key={product.productId}>
//         <img src="https://picsum.photos/200" alt={product.title} />
//         <h2>{product.title}</h2>
//         <p>{product.description}</p>
//         <p>{product.price}</p>
//         <div>
//           <button>Add to Cart</button>
//         </div>
//       </div>
//       </Link>
//     ),
//   }));

//   return (
//     <div className="">
//       {/* Render the Carousel component with the transformed cards */}
      
//       <Carroussel cards={carouselCards} height="650px" width="100%" margin="0 auto" offset={2} showArrows={false} />
//     </div>
//   );
// }

// export default ThreedCarousel;


