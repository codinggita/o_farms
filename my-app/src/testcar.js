// // Product.js
// import React, { useState, useEffect } from "react";

// import { v4 as uuidv4 } from "uuid";
// import Carousel from "react-spring-3d-carousel";
// import { config, useSpring, animated } from "react-spring"; // Importing useSpring and animated
// import Styles from "./Button.module.css";

// function Button({ text }) {
//   return <button className={Styles.btn}>{text}</button>;
// }

// function Card({ imagen, onClick }) {
//   const [show, setShown] = useState(false);

//   const props3 = useSpring({
//     opacity: 1,
//     transform: show ? "scale(1.03)" : "scale(1)",
//     boxShadow: show
//       ? "0 20px 25px rgb(0 0 0 / 25%)"
//       : "0 2px 10px rgb(0 0 0 / 8%)"
//   });
//   return (
//     <animated.div
//       className={Styles.card}
//       style={props3}
//       onMouseEnter={() => setShown(true)}
//       onMouseLeave={() => setShown(false)}
//       onClick={onClick}
//     >
//       <img src={imagen} alt="" />
//       <h2>Title</h2>
//       <p>
//         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
//         nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
//         volutpat.
//       </p>
//       <div className={Styles.btnn}>
//         <Button text="Demo" />
//         <Button text="Code" />
//       </div>
//     </animated.div>
//   );
// }

// function Producttes() {
//   const [offsetRadius, setOffsetRadius] = useState(4);
//   const [showArrows, setShowArrows] = useState(false);
//   const [goToSlide, setGoToSlide] = useState(null);

//   const table = [
//     {
//       key: uuidv4(),
//       content: (
//         <Card
//           imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg"
//           onClick={() => setGoToSlide(0)}
//         />
//       ),
//     },
//     {
//       key: uuidv4(),
//       content: (
//         <Card
//           imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png"
//           onClick={() => setGoToSlide(1)}
//         />
//       ),
//     },
//     {
//       key: uuidv4(),
//       content: (
//         <Card
//           imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png"
//           onClick={() => setGoToSlide(2)}
//         />
//       ),
//     },
//     {
//       key: uuidv4(),
//       content: (
//         <Card
//           imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png"
//           onClick={() => setGoToSlide(3)}
//         />
//       ),
//     },
//     {
//       key: uuidv4(),
//       content: (
//         <Card
//           imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg"
//           onClick={() => setGoToSlide(4)}
//         />
//       ),
//     },
//   ];

//   const [cards] = useState(table);

//   useEffect(() => {
//     setOffsetRadius(200);
//     setShowArrows(false);
//   }, []);

//   return (
//     <div className="">
//       <div style={{ width: "100%", height: "500px", margin: "0 auto" }}>
//         <Carousel
//           slides={cards}
//           goToSlide={goToSlide}
//           offsetRadius={offsetRadius}
//           showNavigation={showArrows}
//           animationConfig={config.gentle}
//         />
//       </div>
//     </div>
//   );
// }


// export default Producttes;


// // Product.js
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// // import "./App.css";
// import Carousel from "react-spring-3d-carousel";
// import { config, useSpring, animated } from "react-spring";
// import Styles from "./Button.module.css";

// function Button({ text }) {
//   return <button className={Styles.btn}>{text}</button>;
// }

// function Card({ product, onClick }) {
//   const [show, setShown] = useState(false);

//   const props3 = useSpring({
//     opacity: 1,
//     transform: show ? "scale(1.03)" : "scale(1)",
//     boxShadow: show
//       ? "0 20px 25px rgb(0 0 0 / 25%)"
//       : "0 2px 10px rgb(0 0 0 / 8%)"
//   });
  
//   return (
//     <animated.div
//       className={Styles.card}
//       style={props3}
//       onMouseEnter={() => setShown(true)}
//       onMouseLeave={() => setShown(false)}
//       onClick={() => onClick(product.id)}
//     >
//       <img src={product.image} alt={product.title} />
//       <h2>{product.title}</h2>
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       <Link to={`/product/${product.id}`}>
//         <Button text="View Details" />
//       </Link>
//     </animated.div>
//   );
// }

// function Producttes() {
//   const [products, setProducts] = useState([]);
//   const [goToSlide, setGoToSlide] = useState(null);

//   useEffect(() => {
//     // Fetch product data from backend API
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("YOUR_API_ENDPOINT_HERE");
//       if (response.ok) {
//         const data = await response.json();
//         setProducts(data);
//       } else {
//         console.error("Failed to fetch products");
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const handleCardClick = (productId) => {
//     const index = products.findIndex(product => product.id === productId);
//     setGoToSlide(index);
//   };

//   return (
//     <div className="">
//       <div style={{ width: "100%", height: "500px", margin: "0 auto" }}>
//         <Carousel
//           slides={products.map(product => ({ key: product.id, content: <Card product={product} onClick={handleCardClick} /> }))}
//           goToSlide={goToSlide}
//           offsetRadius={200}
//           showNavigation={false}
//           animationConfig={config.gentle}
//         />
//       </div>
//     </div>
//   );
// }

// export default Producttes;



//Product.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./testcar.css";
import Carousel from "react-spring-3d-carousel";
import { config, useSpring, animated } from "react-spring";
import Styles from "./Button.module.css";

function Button({ text }) {
  return <button className={Styles.btn}>{text}</button>;
}

function Card({ product, onClick }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onClick={() => onClick(product._id)}
    >
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p className="cardwi">{product.description}</p>
      <p>Price: Rs {product.price}</p>
      <Link to={`/product/${product.title}`}>
        <Button text="View Details" />
      </Link>
    </animated.div>
  );
}

function Producttes() {
  const [products, setProducts] = useState([]);
  const [goToSlide, setGoToSlide] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/products"); // Update the URL to match your backend API
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCardClick = (productId) => {
    const index = products.findIndex(product => product._id === productId);
    setGoToSlide(index);
  };

  return (
    <div className="">
      <div style={{ width: "100%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={products.map(product => ({ key: product._id, content: <Card product={product} onClick={handleCardClick} /> }))}
          goToSlide={goToSlide}
          offsetRadius={200}
          showNavigation={false}
          animationConfig={config.gentle}
        />
      </div>
    </div>
  );
}

export default Producttes;


// import React, { useState, useEffect } from "react";
// import { Link, useHistory } from "react-router-dom";
// import Carousel from "react-spring-3d-carousel";
// import { config } from "react-spring";
// import Styles from "./Button.module.css";

// function Button({ text }) {
//   return <button className={Styles.btn}>{text}</button>;
// }

// function Card({ product, onClick }) {
//   const [show, setShown] = useState(false);
//   const history = useHistory();

//   return (
//     <div className={Styles.card} onMouseEnter={() => setShown(true)} onMouseLeave={() => setShown(false)} onClick={() => onClick(product._id)}>
//       <img src={product.image} alt={product.title} />
//       <h2>{product.title}</h2>
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       <Button text="View Details" />
//     </div>
//   );
// }

// function Producttes() {
//   const [products, setProducts] = useState([]);
//   const [goToSlide, setGoToSlide] = useState(null);
//   const history = useHistory();

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("http://localhost:3001/api/products"); // Update the URL to match your backend API
//       if (response.ok) {
//         const data = await response.json();
//         setProducts(data);
//       } else {
//         console.error("Failed to fetch products");
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const handleCardClick = (productId) => {
//     setGoToSlide(null);
//     history.push(`/product/${productId}`);
//   };

//   return (
//     <div className="">
//       <div style={{ width: "100%", height: "500px", margin: "0 auto" }}>
//         <Carousel
//           slides={products.map(product => ({ key: product._id, content: <Card product={product} onClick={handleCardClick} /> }))}
//           goToSlide={goToSlide}
//           offsetRadius={200}
//           showNavigation={false}
//           animationConfig={config.gentle}
//         />
//       </div>
//     </div>
//   );
// }

// export default Producttes;

