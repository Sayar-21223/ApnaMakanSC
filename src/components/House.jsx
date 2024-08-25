import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import s1 from '../images/s-1.jpg';
import s2 from '../images/s-2.jpg';
import s3 from '../images/s-3.jpg';
import s4 from '../images/s-4.jpg';
import s5 from '../images/s-5.jpg';
import s6 from '../images/s-6.jpg';
import location from '../images/location.png';
import phone from '../images/phone.png';
import mail from '../images/mail.png';
import fb from '../images/fb.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import youtube from '../images/youtube.png';
import '../styles/bootstrap.css';
import '../styles/style.css';
import '../styles/responsive.css';

const House = () => {
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  return (
    <div className="sub_page">
      <div className="hero_area">
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" style={{ width: '150px', height: '150px', marginTop: '10px' }} />
            </Link>
            <div className="navbar-collapse" id="">
              <ul className="navbar-nav ml-auto d-flex align-items-center">
                <li className="nav-item">
                  <Link className="nav-link mr-4" to="/explore">
                    Explore
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle mr-4"
                    to="#"
                    id="utilityDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Utility
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="utilityDropdown">
                    <li>
                      <Link className="dropdown-item" to="/mortgage-calculator">
                        Mortgage Calculator
                      </Link>
                    </li>
                    {/* Add more dropdown items here if needed */}
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link mr-4" to="/login">
                    Connect Wallet
                  </Link>
                </li>
              </ul>
              <div className="custom_menu-btn">
                <button onClick={openNav}>
                  <span className="s-1"></span>
                  <span className="s-2"></span>
                  <span className="s-3"></span>
                </button>
              </div>
              <div id="myNav" className="overlay">
              <div className="overlay-content">
                <Link to="/" onClick={closeNav}>HOME</Link>
                <Link to="/about" onClick={closeNav}>ABOUT</Link>
                <Link to="/house" onClick={closeNav}>HOUSE</Link>
                <Link to="/pricing" onClick={closeNav}>PRICING</Link>
                <Link to="/contact" onClick={closeNav}>CONTACT US</Link>
              </div>
            </div>

            </div>
          </nav>
        </div>
      </header>
        {/* end header section */}
      </div>

      {/* sale section */}
      <section className="sale_section layout_padding1">
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
      {/* end sale section */}

      {/* info section */}
      <section className="info_section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_contact">
                <h5>About Apartment</h5>
                <div>
                  <div className="img-box">
                    <img src={location} width="18px" alt="Location" />
                  </div>
                  <p>Address</p>
                </div>
                <div>
                  <div className="img-box">
                    <img src={phone} width="12px" alt="Phone" />
                  </div>
                  <p>+01 1234567890</p>
                </div>
                <div>
                  <div className="img-box">
                    <img src={mail} width="18px" alt="Mail" />
                  </div>
                  <p>demo@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_info">
                <h5>Information</h5>
                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="info_links">
                <h5>Useful Link</h5>
                <ul>
                  <li><Link to="/">There are many</Link></li>
                  <li><Link to="/">variations of</Link></li>
                  <li><Link to="/">passages of</Link></li>
                  <li><Link to="/">Lorem Ipsum</Link></li>
                  <li><Link to="/">available, but</Link></li>
                  <li><Link to="/">the i</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_form">
                <h5>Newsletter</h5>
                <form action="">
                  <input type="email" placeholder="Enter your email" />
                  <button>Subscribe</button>
                </form>
                <div className="social_box">
                  <a href="#"><img src={fb} alt="Facebook" /></a>
                  <a href="#"><img src={twitter} alt="Twitter" /></a>
                  <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
                  <a href="#"><img src={youtube} alt="YouTube" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end info section */}

      {/* footer section */}
      <section className="container-fluid footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By <a href="#">ApnaMakan</a>
          </p>
        </div>
      </section>
      {/* end footer section */}
    </div>
  );
};

export default House;
