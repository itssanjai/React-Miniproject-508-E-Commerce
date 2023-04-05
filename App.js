import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import BasicExample from './BasicExample';

function EcommerceApp() {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    {
      id: 1,
      name: "Macbook Air",
      description: "The MacBook Air is available in two screen sizes, the 13.3-inch and the 11-inch, and features a sleek aluminum casing. It is equipped with powerful processors, fast solid-state drives, and high-resolution displays, making it suitable for a wide range of tasks, including web browsing, email, video editing, gaming, and moreThe MacBook Air also includes a variety of ports and connectors, including USB-C, Thunderbolt, and headphone jacks, allowing users to connect a wide range of accessories and peripherals. ",
      description2: "The latest models also feature a Touch ID sensor for added security and convenience.",
      price: 99900.00,
      image: "https://tse1.mm.bing.net/th?id=OIP.mnbEiyh0D6UeGZFx82qY-wHaEK&pid=Api&P=0"
    },
    {
      id: 2,
      name: "HP victus",
      description: "HP Victus is a gaming laptop series that was launched by HP in 2021. This series of laptops is designed to cater to the needs of gamers who demand high-performance machines that can run the latest games smoothly. The HP Victus series comes with powerful AMD and Intel processors, high-end NVIDIA graphics cards, and fast SSD storage. The laptops also feature high refresh rate displays that offer a smooth and immersive gaming experience. HP Victus laptops come in two sizes, 16-inch and 17-inch.",
      price: 109966.00,
      image: "https://tse3.mm.bing.net/th?id=OIP.ehYJdHRj-jY4Wd6P0enrjQHaDr&pid=Api&P=0"
    },
    {
      id: 3,
      name: "DELL G15",
      description: "Dell G15 is a gaming laptop series that is designed to cater to the needs of gamers who demand high-performance machines that can run the latest games smoothly. Launched in 2021, the Dell G15 series comes with powerful Intel processors, high-end NVIDIA graphics cards, and fast SSD storage. The laptops also feature high refresh rate displays that offer a smooth and immersive gaming experience. The Dell G15 laptops come in two sizes, 15-inch and 16-inch, and are available in a range of colors to suit different tastes.",
      price: 73800.00,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFwJViETth-_Y2OvyCR95qFWt2E5TWMcaIA&usqp=CAU"
    }
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }
  

  return (
    
    <div className="ecommerce-app">
      <BasicExample/>
      <center><h1>The Apple Store</h1></center>
       <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} style={{ width: "450px", height: "250px" }}/>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>₹ {product.price.toFixed(2)}</p>
            <Button onClick={() => addToCart(product)} variant="primary">Add to Cart</Button>
            
            
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>

        <ul>
          {cart.map(item => (
            <li key={item.id}>{item.name} - ₹{item.price.toFixed(2)}</li>
          ))}
        </ul>
        <h3>Total: ₹{cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default EcommerceApp;
