import React, { useState, useEffect, useContext } from "react";
import { Container, Backdrop, IconButton } from "@mui/material";
import prod1 from "./Pictures/addtocart.svg";
import prod2 from "./Pictures/addtocart.svg";
import prod3 from "./Pictures/addtocart.svg";
import prod4 from "./Pictures/addtocart.svg";
import thumb1 from "./Pictures/addtocart.svg";
import thumb2 from "./Pictures/addtocart.svg";
import thumb3 from "./Pictures/addtocart.svg";
import thumb4 from "./Pictures/addtocart.svg";
import CloseIcon from "./Icons/CloseIcon";
import PreviousIcon from "./Icons/PreviousIcon";
import NextIcon from "./Icons/NextIcon";
import Description from "./description";
import { useParams } from "react-router-dom";
import Cart from "./testcart";
import { CartItemsContext } from "./CartItemsContext";
import "./pdptes.css"

const IMAGES = [prod1, prod2, prod3, prod4];
const THUMBS = [thumb1, thumb2, thumb3, thumb4];

const Pdptes = () => {
  const [quant, setQuant] = useState(0);
  const [orderedQuant, setOrderedQuant] = useState(0);
  const [currentImage, setCurrentImage] = useState(prod1);
  const [currentPassedImage, setCurrentPassedImage] = useState(prod1);
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const { addItemToCart } = useContext(CartItemsContext);

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

  const handleClick = (index = null) => {
    setCurrentImage(IMAGES[index]);
    setCurrentPassedImage(IMAGES[index]);
  };

  const handleIncrement = () => {
    const currentIndex = IMAGES.findIndex((img) => img === currentPassedImage);
    const nextIndex = (currentIndex + 1) % IMAGES.length;
    setCurrentPassedImage(IMAGES[nextIndex]);
  };

  const handleDecrement = () => {
    const currentIndex = IMAGES.findIndex((img) => img === currentPassedImage);
    const prevIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
    setCurrentPassedImage(IMAGES[prevIndex]);
  };

  const handleToggle = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeActivatedClass = (parent) => {
    parent.childNodes.forEach((node) => {
      node.childNodes[0].classList.contains("activated") &&
        node.childNodes[0].classList.remove("activated");
    });
  };

  useEffect(() => {
    setCurrentImage(currentPassedImage);
  }, [currentPassedImage]);

  const addToCart = () => {
    const newItem = {
      id: id,
      name: `Product ${id}`, // You can replace this with the actual product name
      quantity: 100,
    };
    // console.log(newItem)
    addItemToCart(newItem);
    resetQuant();
  };

  return (
    <main className="App">
      <Container component="section" maxWidth={"lg"}>
        <div onOrderedQuant={orderedQuant} onReset={resetQuant} />
        <section className="core">
          <section className="gallery-holder hide-in-mobile">
            <section className="gallery">
              <div className="image">
                <img src={currentImage} alt="product-1" onClick={handleToggle} />
              </div>
              <Backdrop
                className="backdrop"
                sx={{
                  color: "#fff",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                onClick={handleClose}
              >
                <section className="backdrop-content">
                  <IconButton
                    onClick={handleClose}
                    sx={{ color: "#fff", bgcolor: "transparent", alignSelf: "flex-end" }}
                  >
                    <CloseIcon fillColor={"#fff"} />
                  </IconButton>
                  <div className="image">
                    <IconButton
                      className="icon-button-prev"
                      disableRipple
                      onClick={() => {
                        handleDecrement();
                        removeActivatedClass(document.querySelector(".thumbnails"));
                      }}
                      sx={{
                        height: "42px",
                        width: "42px",
                        bgcolor: "#fff",
                      }}
                    >
                      <PreviousIcon />
                    </IconButton>
                    <IconButton
                      className="icon-button-next"
                      disableRipple
                      onClick={() => {
                        handleIncrement();
                        removeActivatedClass(document.querySelector(".thumbnails"));
                      }}
                      sx={{
                        height: "42px",
                        width: "42px",
                        bgcolor: "#fff",
                      }}
                    >
                      <NextIcon />
                    </IconButton>
                    <img
                      src={currentPassedImage}
                      alt="selected-product"
                      style={{ cursor: "auto" }}
                    />
                  </div>
                  <div className="thumbnails">
                    {THUMBS.map((th, index) => {
                      return (
                        <div
                          className="img-holder-backd"
                          key={index}
                          onClick={(e) => {
                            handleClick(index);
                            removeActivatedClass(e.currentTarget.parentNode);
                            e.currentTarget.childNodes[0].classList.toggle("activated");
                          }}
                        >
                          <div
                            className={`outlay ${
                              index === IMAGES.findIndex((img) => img === currentPassedImage) && "activated"
                            }`}
                          ></div>
                          <img src={th} alt={`product-${index + 1}`} />
                        </div>
                      );
                    })}
                  </div>
                </section>
              </Backdrop>
            </section>
          </section>
          <section className="mobile-gallery hide-in-desktop">
            {/* Mobile Gallery Component */}
          </section>
          <Description
            onQuant={quant}
            onAdd={addQuant}
            onRemove={removeQuant}
            onSetOrderedQuant={setOrderedQuant}
            title={id}
            image={id}
            description={id}
          />
          <button onClick={addToCart} className="btnadd">Add to Cart</button>
         
        </section>
      </Container>
    </main>
  );
};

export default Pdptes;




// import React, { useState, useEffect } from "react";
// import { Container, Backdrop, IconButton } from "@mui/material";
// import CloseIcon from "./Icons/CloseIcon";
// import PreviousIcon from "./Icons/PreviousIcon";
// import NextIcon from "./Icons/NextIcon";
// import Description from "./description";
// import axios from "axios"; // Import Axios for making HTTP requests

// const Pdptes = () => {
//   const [product, setProduct] = useState(null);
//   const [quant, setQuant] = useState(0);
//   const [orderedQuant, setOrderedQuant] = useState(0);
//   const [currentImage, setCurrentImage] = useState(null);
//   const [currentPassedImage, setCurrentPassedImage] = useState(null);
//   const [open, setOpen] = useState(false);

//   // Function to fetch product details based on product ID
//   const fetchProductDetails = async (productId) => {
//     try {
//       const response = await axios.get(`/api/products/${productId}`); // Replace with your backend API endpoint
//       setProduct(response.data);
//       // Set initial image as the first image in product images array
//       setCurrentImage(response.data.images[0]);
//       setCurrentPassedImage(response.data.images[0]);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//     }
//   };

//   useEffect(() => {
//     const productId = "your_product_id_here"; // Replace with the actual product ID
//     fetchProductDetails(productId);
//   }, []); // Empty dependency array to trigger the fetch only once when the component mounts

//   const addQuant = () => {
//     setQuant(quant + 1);
//   };

//   const removeQuant = () => {
//     setQuant(quant - 1);
//   };

//   const resetQuant = () => {
//     setQuant(0);
//     setOrderedQuant(0);
//   };

//   const handleClick = (index) => {
//     setCurrentImage(product.images[index]);
//     setCurrentPassedImage(product.images[index]);
//   };

//   const handleIncrement = () => {
//     const currentIndex = product.images.findIndex((img) => img === currentPassedImage);
//     const nextIndex = (currentIndex + 1) % product.images.length;
//     setCurrentPassedImage(product.images[nextIndex]);
//   };

//   const handleDecrement = () => {
//     const currentIndex = product.images.findIndex((img) => img === currentPassedImage);
//     const prevIndex = (currentIndex - 1 + product.images.length) % product.images.length;
//     setCurrentPassedImage(product.images[prevIndex]);
//   };

//   const handleToggle = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const removeActivatedClass = (parent) => {
//     parent.childNodes.forEach((node) => {
//       node.childNodes[0].classList.contains("activated") &&
//         node.childNodes[0].classList.remove("activated");
//     });
//   };

//   return (
//     <main className="App">
//       <Container component="section" maxWidth={"lg"}>
//         <section className="core">
//           <section className="gallery-holder hide-in-mobile">
//             <section className="gallery">
//               <div className="image">
//                 <img src={currentImage} alt="product-1" onClick={handleToggle} />
//               </div>
//               <Backdrop
//                 className="backdrop"
//                 sx={{
//                   color: "#fff",
//                   backgroundColor: "rgba(0, 0, 0, 0.8)",
//                   zIndex: (theme) => theme.zIndex.drawer + 1,
//                 }}
//                 open={open}
//                 onClick={handleClose}
//               >
//                 <section className="backdrop-content">
//                   <IconButton
//                     onClick={handleClose}
//                     sx={{ color: "#fff", bgcolor: "transparent", alignSelf: "flex-end" }}
//                   >
//                     <CloseIcon fillColor={"#fff"} />
//                   </IconButton>
//                   <div className="image">
//                     <IconButton
//                       className="icon-button-prev"
//                       disableRipple
//                       onClick={() => {
//                         handleDecrement();
//                         removeActivatedClass(document.querySelector(".thumbnails"));
//                       }}
//                       sx={{
//                         height: "42px",
//                         width: "42px",
//                         bgcolor: "#fff",
//                       }}
//                     >
//                       <PreviousIcon />
//                     </IconButton>
//                     <IconButton
//                       className="icon-button-next"
//                       disableRipple
//                       onClick={() => {
//                         handleIncrement();
//                         removeActivatedClass(document.querySelector(".thumbnails"));
//                       }}
//                       sx={{
//                         height: "42px",
//                         width: "42px",
//                         bgcolor: "#fff",
//                       }}
//                     >
//                       <NextIcon />
//                     </IconButton>
//                     <img
//                       src={currentPassedImage}
//                       alt="selected-product"
//                       style={{ cursor: "auto" }}
//                     />
//                   </div>
//                   <div className="thumbnails">
//                     {product &&
//                       product.images.map((img, index) => (
//                         <div
//                           className="img-holder-backd"
//                           key={index}
//                           onClick={() => {
//                             handleClick(index);
//                             removeActivatedClass(document.querySelector(".thumbnails"));
//                           }}
//                         >
//                           <div
//                             className={`outlay ${
//                               img === currentPassedImage && "activated"
//                             }`}
//                           ></div>
//                           <img src={img} alt={`product-${index + 1}`} />
//                         </div>
//                       ))}
//                   </div>
//                 </section>
//               </Backdrop>
//             </section>
//           </section>
//           <section className="mobile-gallery hide-in-desktop">
//             {/* Mobile Gallery Component */}
//           </section>
//           {product && (
//             <Description
//               product={product}
//               onQuant={quant}
//               onAdd={addQuant}
//               onRemove={removeQuant}
//               onSetOrderedQuant={setOrderedQuant}
//             />
//           )}
//         </section>
//       </Container>
//     </main>
//   );
// };

// export default Pdptes;



// import React, { useState, useEffect } from "react";
// import { Container, Backdrop, IconButton } from "@mui/material";
// import CloseIcon from "./Icons/CloseIcon";
// import PreviousIcon from "./Icons/PreviousIcon";
// import NextIcon from "./Icons/NextIcon";
// import Description from "./description";
// import axios from "axios"; // Import Axios for making HTTP requests

// const Pdptes = () => {
//   const [product, setProduct] = useState(null);
//   const [quant, setQuant] = useState(0);
//   const [orderedQuant, setOrderedQuant] = useState(0);
//   const [currentImage, setCurrentImage] = useState(null);
//   const [currentPassedImage, setCurrentPassedImage] = useState(null);
//   const [open, setOpen] = useState(false);
  
//   // Function to fetch product details based on product ID
//   const fetchProductDetails = async (productId) => {
//     try {
//       const response = await axios.get(`/api/products/${productId}`); // Replace with your backend API endpoint
//       setProduct(response.data);
//       // Set initial image as the first image in product images array
//       setCurrentImage(response.data.images[0]);
//       setCurrentPassedImage(response.data.images[0]);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//     }
//   };

//   useEffect(() => {
//     const productId = "your_product_id_here"; // Replace with the actual product ID
//     fetchProductDetails(productId);
//   }, []); // Empty dependency array to trigger the fetch only once when the component mounts

//   const addQuant = () => {
//     setQuant(quant + 1);
//   };

//   const removeQuant = () => {
//     setQuant(quant - 1);
//   };

//   const resetQuant = () => {
//     setQuant(0);
//     setOrderedQuant(0);
//   };

//   const handleClick = (index) => {
//     setCurrentImage(product.images[index]);
//     setCurrentPassedImage(product.images[index]);
//   };

//   const handleIncrement = () => {
//     const currentIndex = product.images.findIndex((img) => img === currentPassedImage);
//     const nextIndex = (currentIndex + 1) % product.images.length;
//     setCurrentPassedImage(product.images[nextIndex]);
//   };

//   const handleDecrement = () => {
//     const currentIndex = product.images.findIndex((img) => img === currentPassedImage);
//     const prevIndex = (currentIndex - 1 + product.images.length) % product.images.length;
//     setCurrentPassedImage(product.images[prevIndex]);
//   };

//   const handleToggle = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const removeActivatedClass = (parent) => {
//     parent.childNodes.forEach((node) => {
//       node.childNodes[0].classList.contains("activated") &&
//         node.childNodes[0].classList.remove("activated");
//     });
//   };

//   const handleViewDetails = (productId) => {
//     // Manually update the URL
//     window.location.href = `/product/${productId}`;
//   };

//   return (
//     <main className="App">
//       <Container component="section" maxWidth={"lg"}>
//         <section className="core">
//           <section className="gallery-holder hide-in-mobile">
//             <section className="gallery">
//               <div className="image">
//                 <img src={currentImage} alt="product-1" onClick={handleToggle} />
//               </div>
//               <Backdrop
//                 className="backdrop"
//                 sx={{
//                   color: "#fff",
//                   backgroundColor: "rgba(0, 0, 0, 0.8)",
//                   zIndex: (theme) => theme.zIndex.drawer + 1,
//                 }}
//                 open={open}
//                 onClick={handleClose}
//               >
//                 <section className="backdrop-content">
//                   <IconButton
//                     onClick={handleClose}
//                     sx={{ color: "#fff", bgcolor: "transparent", alignSelf: "flex-end" }}
//                   >
//                     <CloseIcon fillColor={"#fff"} />
//                   </IconButton>
//                   <div className="image">
//                     <IconButton
//                       className="icon-button-prev"
//                       disableRipple
//                       onClick={() => {
//                         handleDecrement();
//                         removeActivatedClass(document.querySelector(".thumbnails"));
//                       }}
//                       sx={{
//                         height: "42px",
//                         width: "42px",
//                         bgcolor: "#fff",
//                       }}
//                     >
//                       <PreviousIcon />
//                     </IconButton>
//                     <IconButton
//                       className="icon-button-next"
//                       disableRipple
//                       onClick={() => {
//                         handleIncrement();
//                         removeActivatedClass(document.querySelector(".thumbnails"));
//                       }}
//                       sx={{
//                         height: "42px",
//                         width: "42px",
//                         bgcolor: "#fff",
//                       }}
//                     >
//                       <NextIcon />
//                     </IconButton>
//                     <img
//                       src={currentPassedImage}
//                       alt="selected-product"
//                       style={{ cursor: "auto" }}
//                     />
//                   </div>
//                   <div className="thumbnails">
//                     {product &&
//                       product.images.map((img, index) => (
//                         <div
//                           className="img-holder-backd"
//                           key={index}
//                           onClick={() => {
//                             handleClick(index);
//                             removeActivatedClass(document.querySelector(".thumbnails"));
//                           }}
//                         >
//                           <div
//                             className={`outlay ${
//                               img === currentPassedImage && "activated"
//                             }`}
//                           ></div>
//                           <img src={img} alt={`product-${index + 1}`} />
//                         </div>
//                       ))}
//                   </div>
//                 </section>
//               </Backdrop>
//             </section>
//           </section>
//           <section className="mobile-gallery hide-in-desktop">
//             {/* Mobile Gallery Component */}
//           </section>
//           {product && (
//             <Description
//               product={product}
//               onQuant={quant}
//               onAdd={addQuant}
//               onRemove={removeQuant}
//               onSetOrderedQuant={setOrderedQuant}
//             />
//           )}
//           <button onClick={() => handleViewDetails(product._id)}>View Details</button>
//         </section>
//       </Container>
//     </main>
//   );
// };

// export default Pdptes;
