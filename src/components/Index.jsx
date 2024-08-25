// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { PropertyList } from './PropertyList';
// import Chatbot from './Chatbot';
// import '../styles/chatbot.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/style.css';
// import '../styles/responsive.css';
// import logo from '../images/logo.png';
// import square from '../images/square.png';
// import aboutImg from '../images/about-img.jpg';
// import d1 from '../images/d-1.jpg';
// import d2 from '../images/d-2.jpg';
// import c1 from '../images/c-1.jpg';
// import u1 from '../images/u-1.png';
// import u2 from '../images/u-2.png';
// import u3 from '../images/u-3.png';
// import u4 from '../images/u-4.png';
// import s1 from '../images/s-1.jpg';
// import s2 from '../images/s-2.jpg';
// import s3 from '../images/s-3.jpg';
// import s4 from '../images/s-4.jpg';
// import s5 from '../images/s-5.jpg';
// import s6 from '../images/s-6.jpg';


// const Index = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [location, setLocation] = useState('');
//   const [priceRange, setPriceRange] = useState('');
//   const [propertyType, setPropertyType] = useState('');
//   const [sortOption, setSortOption] = useState('price');
  


//   const filters = {
//     location: 'New York', // Example location
//     priceRange: { min: 100000, max: 500000 }, // Example price range
//     propertyType: 'Apartment' // Example property type
//   };

//   const openNav = () => {
//     document.getElementById('myNav').style.width = '100%';
//   };

//   const closeNav = () => {
//     document.getElementById('myNav').style.width = '0%';
//   };

//   // Handle search
//   const handleSearch = () => {
//     // Here you would typically make an API call to fetch filtered data
//     console.log('Searching with:', { location, priceRange, propertyType, sortOption });
//     // Fetch properties based on these filters and update your property list
//   };
  
//   const [acc, setAcc] = useState(null);
//   const connectWallet = async () => {
//     if(window.ethereum)
//       {
//       try
//       {
//         const accs = await window.ethereum.request({method: 'eth_requestAccounts' });
//         setAcc(accs[0]);
//       }catch(error)
//         {
//           console.error("Error", error);
//         }
//       }else
//           console.log("Not found Metamask");
//   };

//   return (
//     <div className="hero_area">
//       <header className="header_section">
//         <div className="container-fluid">
//           <nav className="navbar navbar-expand-lg custom_nav-container">
//             <Link className="navbar-brand" to="/">
//               <img src={logo} alt="Logo" style={{ width: '160px', height: '160px', marginTop: '10px' }} />
//             </Link>
//             <div className="navbar-collapse" id="">
//               <ul className="navbar-nav ml-auto d-flex align-items-center">
//                 <li className="nav-item">
//                   <Link className="nav-link mr-4" to="/explore">
//                     Explore
//                   </Link>
//                 </li>

//                 <li className="nav-item dropdown">
//                   <Link
//                     className="nav-link dropdown-toggle mr-4"
//                     to="#"
//                     id="utilityDropdown"
//                     role="button"
//                     data-toggle="dropdown"
//                     aria-haspopup="true"
//                     aria-expanded="false"
//                   >
//                     Utility
//                   </Link>
//                   <ul className="dropdown-menu" aria-labelledby="utilityDropdown">
//                     <li>
//                       <Link className="dropdown-item" to="/mortgage-calculator">
//                         Real Time Crypto Price
//                       </Link>
//                     </li>
//                     {/* Add more dropdown items here if needed */}
//                   </ul>
//                 </li>

//                 <li className="nav-item">
//                   {acc ? (
//                   <div className="nav-link mr-4" onClick={connectWallet}>
//                     {acc.slice(0, 6) + '...' + acc.slice(-4)}
//                 </div> ): (
//                 <button className="nav-link mr-4" onClick={connectWallet}>
//                 Connect Wallet
//               </button> )}
//                   {/* <div onClick={connectWallet} >
//                     Connect Wallet
//                   </div> */}

//                 </li>
//               </ul>

//               <div className="custom_menu-btn">
//                 <button onClick={openNav}>
//                   <span className="s-1"></span>
//                   <span className="s-2"></span>
//                   <span className="s-3"></span>
//                 </button>
//               </div>
//               <div id="myNav" className="overlay">
//   <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
//   <div className="overlay-content">
//     <Link to="/" onClick={closeNav}>HOME</Link>
//     <Link to="/about" onClick={closeNav}>ABOUT</Link>
//     <Link to="/house" onClick={closeNav}>HOUSE</Link>
//     <Link to="/pricing" onClick={closeNav}>PRICING</Link>
//     <Link to="/contact" onClick={closeNav}>CONTACT US</Link>
//   </div>
// </div>
//             </div>
//           </nav>
//         </div>
//       </header>

//       <section className="slider_section">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-4 offset-md-1">
//               <div className="detail-box">
//                 <h1>
//                   <span>Modern</span> <br />
//                   Apartment <br />
//                   House
//                 </h1>
//                 <p>
//                 Welcome to ApnaMakn, Where Dreams Get an Upgrade!
//                 </p>
//                 <div className="btn-box">
//                   <Link to="/about">Read More</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
// {/* ---------------------------------------------- */}
// <section className="find_section">
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Enter location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           aria-label="Location"
//         />
//         <input
//           type="number"
//           placeholder="Min price"
//           value={priceRange.min}
//           onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
//           aria-label="Minimum price"
//         />
//         <input
//           type="number"
//           placeholder="Max price"
//           value={priceRange.max}
//           onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
//           aria-label="Maximum price"
//         />
//         <select
//           value={propertyType}
//           onChange={(e) => setPropertyType(e.target.value)}
//           aria-label="Property type"
//         >
//           <option value="">Select property type</option>
//           <option value="apartment">Apartment</option>
//           <option value="house">House</option>
//           <option value="land">Land</option>
//         </select>
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {/* Sorting Options */}
//       <div className="sorting-options">
//         <select
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//           aria-label="Sort by"
//         >
//           <option value="">Sort by</option>
//           <option value="price-asc">Price: Low to High</option>
//           <option value="price-desc">Price: High to Low</option>
//           <option value="date-added">Date Added</option>
//           <option value="popularity">Popularity</option>
//         </select>
//       </div>
//     </section>

// {/* ------------------------------------------------------ */}
//       <section className="about_section layout_padding-bottom">
//         <div className="square-box">
//           <img src={square} alt="" />
//         </div>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6">
//               <div className="img-box">
//                 <img src={aboutImg} alt="About Us" />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="detail-box">
//                 <div className="heading_container">
//                   <h2>About Our Apartment</h2>
//                 </div>
//                 <p>
//                 Welcome to ApnaMakan, where modern living meets ultimate convenience. Our thoughtfully designed apartments offer more than just a place to stay—they give you a place to thrive! Whether you’re a busy professional, a growing family, or anyone in between, we’ve got the perfect space for you.
//                 </p>
//                 <Link to="/about">Read More</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="sale_section layout_padding">
//         <div className="container-fluid">
//           <div className="heading_container">
//             <h2>House For Sale</h2>
//             <p>There are many variations of passages of Lorem Ipsum available, but the</p>
//           </div>
//           <div className="sale_container">
//             {[s1, s2, s3, s4, s5, s6].map((img, index) => (
//               <div className="box" key={index}>
//                 <div className="img-box">
//                   <img src={img} alt={`House ${index + 1}`} />
//                 </div>
//                 <div className="detail-box">
//                   <h6>apartment house</h6>
//                   <p>There are many variations of passages of Lorem Ipsum available, but</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="btn-box">
//             <Link to="/more">Find More</Link>
//           </div>
//         </div>
//       </section>

//       <section className="price_section layout_padding-bottom">
//         <div className="container">
//           <div className="heading_container">
//             <h2>Our Pricing</h2>
//             <p>There are many variations of passages of Lorem Ipsum available, but the</p>
//           </div>
//           <div className="price_container">
//             {["Basic", "Standard", "Premium"].map((plan, index) => (
//               <div className="box" key={index}>
//                 <div className="detail-box">
//                   <div className="heading-box">
//                     <h4>0{index + 1}</h4>
//                     <h6>{plan}</h6>
//                   </div>
//                   <div className="text-box">
//                     <h2>{(index + 1) * 10}.00Eth</h2>
//                     <ul>
//                       {/* {["variations of", "passages of Lorem", "Ipsum available,", "but the majority", "have suffered", "alteration in"].map(
//                         (item, i) => (
//                           <li key={i}>{item}</li>
//                         )
//                       )} */}
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="btn-box">
//                   <Link to="/pricing">Buy Now</Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="deal_section layout_padding-bottom">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6">
//               <div className="detail-box">
//                 <div className="heading_container">
//                   <h2>Very Good Deal For House</h2>
//                 </div>
//                 <p>
//                   There are many variations of passages of Lorem Ipsum available, but the majority have suffered
//                   alteration in some form, by injected humour, or randomised words which don't look even slightly
//                   believable.
//                 </p>
//                 <Link to="/contact">Get A Quote</Link>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="img-box">
//                 <div className="box b1">
//                   <img src={d1} alt="Deal 1" />
//                 </div>
//                 <div className="box b1">
//                   <img src={d2} alt="Deal 2" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="us_section layout_padding2">
//         <div className="container">
//           <div className="heading_container">
//             <h2>Why Choose Us</h2>
//           </div>
//           <div className="row">
//             {[
//               { img: u1, number: "1000+", text: "Years of House" },
//               { img: u2, number: "20000+", text: "Projects Delivered" },
//               { img: u3, number: "1000+", text: "Satisfied Clients" },
//               { img: u4, number: "1000+", text: "Years of House" },
//             ].map((item, index) => (
//               <div className="col-md-3" key={index}>
//                 <div className="box">
//                   <div className="img-box">
//                     <img src={item.img} alt={`Choose Us ${index + 1}`} />
//                   </div>
//                   <div className="detail-box">
//                     <h3>{item.number}</h3>
//                     <h6>{item.text}</h6>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* <section className="client_section layout_padding-bottom">
//         <div className="container">
//           <div className="heading_container">
//             <h2>What Our Clients Says</h2>
//           </div>
//           <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
//             <div className="carousel-inner">
//               {[
//                 { img: c1, name: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
//                 { img: c1, name: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
//                 { img: c1, name: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
//               ].map((client, index) => (
//                 <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
//                   <div className="row">
//                     <div className="col-md-3">
//                       <div className="client_img-box">
//                         <img src={client.img} alt={`Client ${index + 1}`} />
//                       </div>
//                     </div>
//                     <div className="col-md-9">
//                       <div className="client_detail">
//                         <h4>{client.name}</h4>
//                         <p>{client.text}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="carousel_btn-box">
//               <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
//                 <span className="sr-only">Previous</span>
//               </a>
//               <img src="../images/line.png" alt="Line" />
//               <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
//                 <span className="sr-only">Next</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* <section className="contact_section layout_padding-bottom">
//         <div className="container">
//           <div className="heading_container">
//             <h2>Request A Call Back</h2>
//           </div>
//           <div className="row">
//             <div className="col-md-6">
//               <form action="">
//                 <div className="form-row">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input type="text" className="form-control" placeholder="First Name" />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input type="text" className="form-control" placeholder="Last Name" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-row">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input type="email" className="form-control" placeholder="Email" />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input type="text" className="form-control" placeholder="Phone Number" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <textarea className="form-control" placeholder="Message"></textarea>
//                 </div>
//                 <div className="btn-box">
//                   <button type="submit">SEND</button>
//                 </div>
//               </form>
//             </div>
//             <div className="col-md-6">
//               <div className="img-box">
//                 <img src="../images/contact-img.jpg" alt="Contact" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}

//        {/* Chatbot Component */}
//        <Chatbot />

//       <footer className="footer_section">
//         <div className="container">
//           {/* <div className="row">
//             <div className="col-md-6 col-lg-3 footer-col">
//               <div className="footer_detail">
//                 <h4>About</h4>
//                 <p>
//                   There are many variations of passages of Lorem Ipsum available, but the majority have suffered
//                   alteration
//                 </p>
//                 <div className="footer_social">
//                   <a href="https://facebook.com">
//                     <i className="fa fa-facebook" aria-hidden="true"></i>
//                   </a>
//                   <a href="https://twitter.com">
//                     <i className="fa fa-twitter" aria-hidden="true"></i>
//                   </a>
//                   <a href="https://linkedin.com">
//                     <i className="fa fa-linkedin" aria-hidden="true"></i>
//                   </a>
//                   <a href="https://instagram.com">
//                     <i className="fa fa-instagram" aria-hidden="true"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-3 footer-col">
//               <div className="footer_contact">
//                 <h4>Reach at..</h4>
//                 <div className="contact_link_box">
//                   <a href="https://www.google.com/maps">
//                     <i className="fa fa-map-marker" aria-hidden="true"></i>
//                     <span> Location</span>
//                   </a>
//                   <a href="tel:+01766332">
//                     <i className="fa fa-phone" aria-hidden="true"></i>
//                     <span> Call +01 1234567890</span>
//                   </a>
//                   <a href="mailto:demo@gmail.com">
//                     <i className="fa fa-envelope" aria-hidden="true"></i>
//                     <span> demo@gmail.com</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-3 footer-col">
//               <div className="footer_contact">
//                 <h4>Subscribe</h4>
//                 <form action="">
//                   <input type="text" placeholder="Enter email" />
//                   <button type="submit">Subscribe</button>
//                 </form>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-3 footer-col">
//               <div className="map_container">
//                 <div className="map">
//                   <div id="googleMap"></div>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//           <div className="footer-info">
//             <p>
//               &copy; <span id="displayYear"></span> All Rights Reserved By
//               <a href="#">ApnaMakan</a>
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Index;

import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PropertyList } from './PropertyList';
import Chatbot from './Chatbot';
import { ethers } from 'ethers';
import Web3 from "web3";
import '../styles/chatbot.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/responsive.css';
import logo from '../images/logo.png';
import square from '../images/square.png';
import aboutImg from '../images/about-img.jpg';
import d1 from '../images/d-1.jpg';
import d2 from '../images/d-2.jpg';
import u1 from '../images/u-1.png';
import u2 from '../images/u-2.png';
import u3 from '../images/u-3.png';
import u4 from '../images/u-4.png';
import s1 from '../images/s-1.jpg';
import s2 from '../images/s-2.jpg';
import s3 from '../images/s-3.jpg';
import s4 from '../images/s-4.jpg';
import s5 from '../images/s-5.jpg';
import s6 from '../images/s-6.jpg';
// import img2 from '../components/images/1.jpg';
// import img4 from '../image/4.jpg';
// import img3 from '../image/3.jpeg';
// import img1 from '../image/1.jpg';



const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [sortOption, setSortOption] = useState('price');
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [property, setProperty] = useState(null);
  const [error, setError] = useState(null);

useEffect(() => {
  
    initializeWeb3();
    }
);

  const filters = {
    location: 'New York', // Example location
    priceRange: { min: 100000, max: 500000 }, // Example price range
    propertyType: 'Apartment' // Example property type
  };

  const openNav = () => {
    document.getElementById('myNav').style.width = '100%';
  };

  const closeNav = () => {
    document.getElementById('myNav').style.width = '0%';
  };
  
    // Replace with your contract's ABI and address
    const contractAddress = '0xa98B8F30374977c39EdF09B5E93D466047212617';
    const contractABI = [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_location",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_price",
            "type": "uint256"
          }
        ],
        "name": "createProperty",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "PropertyCreated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "to",
            "type": "address"
          }
        ],
        "name": "PropertyTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "forSale",
            "type": "bool"
          }
        ],
        "name": "PropertyUpdated",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_newOwner",
            "type": "address"
          }
        ],
        "name": "transferProperty",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_price",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "_forSale",
            "type": "bool"
          }
        ],
        "name": "updateProperty",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "getProperty",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "location",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "forSale",
                "type": "bool"
              }
            ],
            "internalType": "struct RealEstate.Property",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "ownedProperties",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "properties",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "forSale",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "propertyCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
      // Add other functions and events here
    ];
  
    /*const initialize = async () => {
      if (window.ethereum) {
        try {
          const tempProvider = new ethers.BrowserProvider(window.ethereum);
          const signer = await tempProvider.getSigner(); // Get the signer
          const tempContract = new ethers.Contract(contractAddress, contractABI, signer); // Use the signer here
          setProvider(tempProvider);
          setContract(tempContract);
        } catch (error) {
          console.error('Initialization error:', error);
          alert('Error initializing contract.');
        }
      } else {
        alert('Please install MetaMask!');
      }
    };
  
    const handleCreateProperty = async () => {
      console.log("Clicked")
      setLoading(true);
      try {
        if (!contract) {
          alert('Contract not initialized. Please try again.');
          return;
        }
        const tx = await contract.createProperty('Property Name', 'Property Location', 1000);
        await tx.wait(); // Wait for the transaction to be mined
        alert('Property created successfully!');
      } catch (error) {
        console.error('Transaction error:', error);
        alert('Error creating property');
      }
      setLoading(false);
    };
  
    const handleButtonClick = async () => {
      if (!provider || !contract) {
        await initialize(); // Ensure initialization is completed before proceeding
      }
      if (contract) { // Ensure the contract is initialized before proceeding
        await handleCreateProperty();
      }
    };*/
  
  // Handle search
  const handleSearch = () => {
    // Here you would typically make an API call to fetch filtered data
    console.log('Searching with:', { location, priceRange, propertyType, sortOption });
    // Fetch properties based on these filters and update your property list
  };
  
  const [acc, setAcc] = useState(null);
  const connectWallet = async () => {
    if(window.ethereum)
      {
      try
      {
        const accs = await window.ethereum.request({method: 'eth_requestAccounts' });
        setAcc(accs[0]);
      }catch(error)
        {
          console.error("Error", error);
        }
      }else
          console.log("Not found Metamask");
  };
  
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log('Creating new property with:', newProperty);
//     // Here you can add logic to send this data to a backend or blockchain
//     setNewProperty({ name: '', price: '', location: '' }); // Reset form after submission
//   };

//   const [newProperty, setNewProperty] = useState({
//     name: '',
//     location: '',
//     price: 0,
// });

  const [newProperty, setNewProperty] = useState({
    name: '',
    location: '',
    price: 0,
  });

  const fetchProperty= async () => {
    if (!web3) {
      console.error('Web3 not initialized');
      return;
    }
  
    try {
  
    
  
      const contract = new web3.eth.Contract(contractABI,contractAddress);
      console.log(contract)
      for(let i = 1 ;i<10;i++){
      const property = await contract.methods.getProperty(i).call();
      console.log(property)
      }
      
    } catch (error) {
      console.error('Error fetching backups', error);
    }
  };
  const initializeWeb3 = async () => {
    if (!window.ethereum) {
      console.error('MetaMask not detected');
      return;
    }
  
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } catch (error) {
      console.error('Error initializing web3', error);
    }
  };
  const initialize = async () => {
    if (window.ethereum) {
      try {
        const tempProvider = new ethers.BrowserProvider(window.ethereum);
        const signer = await tempProvider.getSigner();
        const tempContract = new ethers.Contract(contractAddress, contractABI, signer);
        setProvider(tempProvider);
        setContract(tempContract);
      } catch (error) {
        console.error('Initialization error:', error);
        alert('Error initializing contract.');
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const handleCreateProperty = async (name, location, price) => {
    console.log("Clicked");
    setLoading(true);
    try {
      if (!contract) {
        alert('Contract not initialized. Please try again.');
        return;
      }
      const tx = await contract.createProperty(name, location, price);
      await tx.wait(); // Wait for the transaction to be mined
      alert('Property created successfully!');
    } catch (error) {
      console.error('Transaction error:', error);
      alert('Error creating property');
    }
    setLoading(false);
  };

  const handleButtonClick = async () => {
    if (!provider || !contract) {
      await initialize(); // Ensure initialization is completed before proceeding
    }
    if (contract) { // Ensure the contract is initialized before proceeding
      await handleCreateProperty(newProperty.name, newProperty.location, newProperty.price);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Creating new property with:', newProperty);
    handleButtonClick(); // Call handleButtonClick to create the property
    setNewProperty({ name: '', location: '', price: 0 }); // Reset form after submission
  };

// Get Property function (JSX Equivalent of Solidity getProperty)
const handleGetProperty = async () => {
  try {
      if (contract) {
          const property = await contract.getProperty(propertyId);
          setPropertyDetails(property);

          console.log('Property ID:', property.id.toString());
          console.log('Location:', property.location);
          console.log('Price:', ethers.utils.formatUnits(property.price, 'ether')); // Convert from wei to ether
          console.log('Owner Address:', property.owner);
      }
  } catch (error) {
      console.error('Error fetching property:', error);
      alert('Error fetching property');
  }
};

  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" style={{ width: '160px', height: '160px', marginTop: '10px' }} />
            </Link>
            <div className="navbar-collapse" id="">
              <ul className="navbar-nav ml-auto d-flex align-items-center">
                {/* <li className="nav-item">
                  <Link className="nav-link mr-4" to="/explore">
                    Explore
                  </Link>
                </li> */}

                {/* <li className="nav-item">
                <button onClick={handleButtonClick} disabled={loading} style={{
        border: '1px solid #007bff', // Add border
        padding: '6px 12px', // Add padding
        borderRadius: '4px', // Round the corners
        backgroundColor: 'transparent', // Make the background transparent
        color: '#007bff',
        marginRight: '25px'
         // Set text color to match primary theme
      }}>
      {loading ? 'CREATING...' : 'CREATE PROPERTY'}
    </button >
    </li> */}
     {/* <li className="nav-item" style={{
                  border: '1px solid #007bff', // Add border
                  padding: '6px 12px', // Add padding
                  borderRadius: '4px', // Round the corners
                  // backgroundColor: 'transparent', // Make the background transparent
                  color: '#007bff',

                }}>
                <div className="btn-box">
                  <Link to="/index.html">DEVELOPERS</Link>
                </div>

                </li> */}
    
                  
                <li className="nav-item" style={{
                  border: '1px solid #007bff', // Add border
                  padding: '6px 12px', // Add padding
                  borderRadius: '4px', // Round the corners
                  // backgroundColor: 'transparent', // Make the background transparent
                  color: '#007bff',

                }}>
                <div className="btn-box">
                  <Link to="/pricing">BUY PROPERTY</Link>
                </div>

                </li>
                {/* <li className="nav-item" style={{
                  border: '1px solid #007bff', // Add border
                  padding: '6px 12px', // Add padding
                  borderRadius: '4px', // Round the corners
                  // backgroundColor: 'transparent', // Make the background transparent
                  color: '#007bff',

                }}>
                <button onClick={() => { fetchProperty() }}>
                Get Property
            </button>
                </li> */}

                <li className="nav-item">
  {acc ? (
    <div
      className="nav-link mr-4"
      onClick={connectWallet}
      style={{
        border: '1px solid #007bff', // Add border
        padding: '6px 12px', // Add padding for better spacing
        borderRadius: '4px', // Round the corners
        cursor: 'pointer', // Change cursor to pointer
        color: '#007bff',
         // Set text color to match primary theme
      }}
    >
      {acc.slice(0, 6) + '...' + acc.slice(-4)}
    </div>
  ) : (
    <button
      className="nav-link mr-4"
      onClick={connectWallet}
      style={{
        border: '1px solid #007bff', // Add border
        padding: '6px 12px', // Add padding
        borderRadius: '4px', // Round the corners
        backgroundColor: 'transparent', // Make the background transparent
        color: '#007bff',
        marginLeft: '25px' // Set text color to match primary theme
      }}
    >
      Connect Wallet
    </button>
  )}
  <button className="nav-link mr-4" 
  style={{
    border: '1px solid #007bff', // Add border
    padding: '6px 12px', // Add padding
    borderRadius: '4px', // Round the corners
    backgroundColor: 'transparent', // Make the background transparent
    color: '#007bff',
    marginLeft: '200px',
    marginTop: '-37px' // Set text color to match primary theme
  }}onClick={fetchProperty}>Get</button>
</li>
              </ul>
              <div>
        </div>
              <div className="custom_menu-btn">
                <button onClick={openNav}>
                  <span className="s-1"></span>
                  <span className="s-2"></span>
                  <span className="s-3"></span>
                </button>
              </div>
              <div id="myNav" className="overlay">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
  <div className="overlay-content">
    <Link to="/" onClick={closeNav}>HOME</Link>
    <Link to="/about" onClick={closeNav}>ABOUT</Link>
    <Link to="/explore" onClick={closeNav}>EXPLORE</Link>
    <Link to="/house" onClick={closeNav}>HOUSE</Link>
    <Link to="/pricing" onClick={closeNav}>PRICING</Link>
    <Link to="/contact" onClick={closeNav}>CONTACT US</Link>
  </div>
</div>
            </div>
          </nav>
        </div>
      </header>

      <section className="slider_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 offset-md-1">
              <div className="detail-box">
                <h1>
                  <span>Modern</span> <br />
                  Apartment <br />
                  House
                </h1>
                <p>
                Welcome to ApnaMakan, Where Dreams Get an Upgrade!
                </p>
                <div className="btn-box">
                  <Link to="/about">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* ---------------------------------------------- */}
<section className="find_section">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          aria-label="Location"
        />
        <input
          type="number"
          placeholder="Min price"
          value={priceRange.min}
          onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
          aria-label="Minimum price"
        />
        <input
          type="number"
          placeholder="Max price"
          value={priceRange.max}
          onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
          aria-label="Maximum price"
        />
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          aria-label="Property type"
        >
          <option value="">Select property type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="land">Land</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Sorting Options */}
      <div className="sorting-options">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          aria-label="Sort by"
        >
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="date-added">Date Added</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
    </section>
{/* ------------------------------------------------------ */}
      <section className="about_section layout_padding-bottom">
        <div className="square-box">
          <img src={square} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={aboutImg} alt="About Us" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Our Apartment</h2>
                </div>
                <p>
                Welcome to ApnaMakan, where modern living meets ultimate convenience. Our thoughtfully designed apartments offer more than just a place to stay—they give you a place to thrive! Whether you’re a busy professional, a growing family, or anyone in between, we’ve got the perfect space for you.
                </p>
                <Link to="/about">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="sale_section layout_padding">
        <div className="container-fluid">
          <div className="heading_container">
            <h2>House For Sale</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the</p>
          </div>
          <div className="sale_container">
            {[s1, s2, s3, s4, s5, s6].map((img, index) => (
              <div className="box" key={index}>
                <div className="img-box">
                  <img src={img} alt={`House ${index + 1}`} />
                </div>
                <div className="detail-box">
                  <h6>apartment house</h6>
                  <p>There are many variations of passages of Lorem Ipsum available, but</p>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-box">
            <Link to="/more">Find More</Link>
          </div>
        </div>
      </section>

      <section className="form_section">
        <div className="container">
          <div className="heading_container">
            <h2 className='new' style={{
              marginLeft: "350px"
            }}>Create New Property</h2>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="propertyName">Property Name</label>
              <input
                type="text"
                className="form-control"
                id="propertyName"
                placeholder="Enter property name"
                value={newProperty.name}
                onChange={(e) => setNewProperty({ ...newProperty, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="propertyPrice">Price</label>
              <input
                type="number"
                className="form-control"
                id="propertyPrice"
                placeholder="Enter property price"
                value={newProperty.price}
                onChange={(e) => setNewProperty({ ...newProperty, price: e.target.value })}
                required
              />
            </div>
            {/* New input for Location */}
            <div className="form-group">
              <label htmlFor="propertyLocation">Location</label>
              <input
                type="text"
                className="form-control"
                id="propertyLocation"
                placeholder="Enter property location"
                value={newProperty.location}
                onChange={(e) => setNewProperty({ ...newProperty, location: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">CREATE PROPERTY</button>
          </form>
        </div>
      </section>

      {/* <button onClick={handleButtonClick} disabled={loading} style={{
        border: '1px solid #007bff', // Add border
        padding: '6px 12px', // Add padding
        borderRadius: '4px', // Round the corners
        backgroundColor: 'transparent', // Make the background transparent
        color: '#007bff',
        marginRight: '25px'
         // Set text color to match primary theme
      }}>
      {loading ? 'CREATING...' : 'CREATE PROPERTY'}
    </button > */}

      <section className="price_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>Our Pricing</h2>
            <p></p>
          </div>
          <div className="price_container">
            {["Basic", "Standard", "Premium"].map((plan, index) => (
              <div className="box" key={index}>
                <div className="detail-box">
                  <div className="heading-box">
                    <h4>0{index + 1}</h4>
                    <h6>{plan}</h6>
                  </div>
                  <div className="text-box">
                    <h2>{(index + 1) * 10}.00Eth</h2>
                    <ul>
                      {/* {["variations of", "passages of Lorem", "Ipsum available,", "but the majority", "have suffered", "alteration in"].map(
                        (item, i) => (
                          <li key={i}>{item}</li>
                        )
                      )} */}
                    </ul>
                  </div>
                </div>
                <div className="btn-box">
                  <Link to="/pricing">Buy Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="deal_section layout_padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Very Good Deal For House</h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words which don't look even slightly
                  believable.
                </p>
                <Link to="/contact">Get A Quote</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <div className="box b1">
                  <img src={d1} alt="Deal 1" />
                </div>
                <div className="box b1">
                  <img src={d2} alt="Deal 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="us_section layout_padding2">
        <div className="container">
          <div className="heading_container">
            <h2>Why Choose Us</h2>
          </div>
          <div className="row">
            {[
              { img: u1, number: "1000+", text: "Years of House" },
              { img: u2, number: "20000+", text: "Projects Delivered" },
              { img: u3, number: "1000+", text: "Satisfied Clients" },
              { img: u4, number: "1000+", text: "Years of House" },
            ].map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className="box">
                  <div className="img-box">
                    <img src={item.img} alt={`Choose Us ${index + 1}`} />
                  </div>
                  <div className="detail-box">
                    <h3>{item.number}</h3>
                    <h6>{item.text}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>What Our Clients Says</h2>
          </div>
          <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {[
                { img: c1, name: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
                { img: c1, name: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
                { img: c1, name: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
              ].map((client, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="client_img-box">
                        <img src={client.img} alt={`Client ${index + 1}`} />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="client_detail">
                        <h4>{client.name}</h4>
                        <p>{client.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel_btn-box">
              <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                <span className="sr-only">Previous</span>
              </a>
              <img src="../images/line.png" alt="Line" />
              <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="contact_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>Request A Call Back</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form action="">
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Last Name" />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Message"></textarea>
                </div>
                <div className="btn-box">
                  <button type="submit">SEND</button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="../images/contact-img.jpg" alt="Contact" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

       {/* Chatbot Component */}
       <Chatbot />

      <footer className="footer_section">
        <div className="container">
          {/* <div className="row">
            <div className="col-md-6 col-lg-3 footer-col">
              <div className="footer_detail">
                <h4>About</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration
                </p>
                <div className="footer_social">
                  <a href="https://facebook.com">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="https://twitter.com">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="https://linkedin.com">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="https://instagram.com">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-col">
              <div className="footer_contact">
                <h4>Reach at..</h4>
                <div className="contact_link_box">
                  <a href="https://www.google.com/maps">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span> Location</span>
                  </a>
                  <a href="tel:+01766332">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span> Call +01 1234567890</span>
                  </a>
                  <a href="mailto:demo@gmail.com">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span> demo@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-col">
              <div className="footer_contact">
                <h4>Subscribe</h4>
                <form action="">
                  <input type="text" placeholder="Enter email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-col">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap"></div>
                </div>
              </div>
            </div>
          </div> */}

{/* <section className="team" id="team">
  <h1 className="heading" style={{ marginTop: '80px' }}>Our Team</h1>
  <div className="container2">
    <div className="card">
      <div className="content1">
        <div className="imgbx">
          <img src={img2} alt="Sugnik Tarafder" />
        </div>
        <div className="contentbx">
          <h3>
            Sugnik Tarafder
            <br />
            <span>Cloud Database Developer<br />Hooghly Engineering & Technology College (HETC)</span>
          </h3>
        </div>
      </div>
      <ul className="sci">
        <li style={{ '--i': 1 }}>
          <a href="https://github.com/ArjoSugnik">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li style={{ '--i': 2 }}>
          <a href="https://www.linkedin.com/in/sugnik-tarafder">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li style={{ '--i': 3 }}>
          <a href="https://twitter.com/sugniktarafder">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
    <div className="card">
      <div className="content1">
        <div className="imgbx">
          <img src={img4} alt="Sayar Paul" />
        </div>
        <div className="contentbx">
          <h3>
            Sayar Paul
            <br />
            <span>Frontend Developer<br />Hooghly Engineering & Technology College (HETC)</span>
          </h3>
        </div>
      </div>
      <ul className="sci">
        <li style={{ '--i': 1 }}>
          <a href="https://github.com/Sayar-21223">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li style={{ '--i': 2 }}>
          <a href="https://www.linkedin.com/in/sayar-paul-9b7535254/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li style={{ '--i': 3 }}>
          <a href="https://twitter.com/sayar_paul">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
    <div className="card">
      <div className="content1">
        <div className="imgbx">
          <img src={img3} alt="Debjit Mitra" />
        </div>
        <div className="contentbx">
          <h3>
            Debjit Mitra
            <br />
            <span>Full Stack Developer<br />Hooghly Engineering & Technology College (HETC)</span>
          </h3>
        </div>
      </div>
      <ul className="sci">
        <li style={{ '--i': 1 }}>
          <a href="https://github.com/debjitmitra000">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li style={{ '--i': 2 }}>
          <a href="https://www.linkedin.com/in/debjitmitra000/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li style={{ '--i': 3 }}>
          <a href="https://twitter.com/debjitmitra000">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
    <div className="card">
      <div className="content1">
        <div className="imgbx">
          <img src={img1} alt="Sourodip Ghosh" />
        </div>
        <div className="contentbx">
          <h3>
            Sourodip Ghosh
            <br />
            <span>Backend Developer<br />Hooghly Engineering & Technology College (HETC)</span>
          </h3>
        </div>
      </div>
      <ul className="sci">
        <li style={{ '--i': 1 }}>
          <a href="https://github.com/RajSourodip">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li style={{ '--i': 2 }}>
          <a href="https://www.linkedin.com/in/sourodip-ghosh-177662253/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li style={{ '--i': 3 }}>
          <a href="https://twitter.com/40Sourodip?t=Pw_FrbaSAcJ2LnqQQgZ5LA&s=08">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</section> */}
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By
              <a href="#">ApnaMakan</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
