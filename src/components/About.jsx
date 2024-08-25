import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/responsive.css';
import logo from '../images/logo.png';
import square from '../images/square.png';
import aboutImg from '../images/about-img.jpg';
import locationIcon from '../images/location.png';
import phoneIcon from '../images/phone.png';
import mailIcon from '../images/mail.png';
import fbIcon from '../images/fb.png';
import twitterIcon from '../images/twitter.png';
import linkedinIcon from '../images/linkedin.png';
import youtubeIcon from '../images/youtube.png';

const About = () => {
  const openNav = () => {
    document.getElementById('myNav').style.width = '100%';
  };

  const closeNav = () => {
    document.getElementById('myNav').style.width = '0%';
  };

  return (
    <div>
      <div className="hero_area">
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" style={{ width: '150px', height: '150px', marginTop: '10px' }} />
            </Link>
            <div className="navbar-collapse" id="">
              <ul className="navbar-nav ml-auto d-flex align-items-center">
                {/* <li className="nav-item">
                  <Link className="nav-link mr-4" to="/explore">
                    Explore
                  </Link>
                </li> */}

                <li className="nav-item dropdown">
                  {/* <Link
                    className="nav-link dropdown-toggle mr-4"
                    to="#"
                    id="utilityDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Utility
                  </Link> */}
                  <ul className="dropdown-menu" aria-labelledby="utilityDropdown">
                    {/* <li>
                      <Link className="dropdown-item" to="/mortgage-calculator">
                        Mortgage Calculator
                      </Link>
                    </li> */}
                    {/* Add more dropdown items here if needed */}
                  </ul>
                </li>

                {/* <li className="nav-item">
                  <Link className="nav-link mr-4" to="/login">
                    Connect Wallet
                  </Link>
                </li> */}
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
                  <Link to="/">HOME</Link>
                  <Link to="/about">ABOUT</Link>
                  <Link to="/house">HOUSE</Link>
                  <Link to="/pricing">PRICING</Link>
                  <Link to="/contact">CONTACT US</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
        {/* Header section ends */}
      </div>

      {/* About section */}
      <section className="about_section1 layout_padding-bottom">
        <div className="square-box">
          <img src={square} alt="Square" />
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
                <p className="p1">
                Welcome to ApnaMakan, where modern living meets ultimate convenience. Our thoughtfully designed apartments offer more than just a place to stay—they give you a place to thrive! Whether you’re a busy professional, a growing family, or anyone in between, we’ve got the perfect space for you.
                </p>
                <Link className="A1" to="/read-more">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End about section */}

      {/* Info section */}
      <section className="info_section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_contact">
                <h5>About Apartment</h5>
                <div>
                  <div className="img-box">
                    <img src={locationIcon} width="18px" alt="Location" />
                  </div>
                  <p>Address</p>
                </div>
                <div>
                  <div className="img-box">
                    <img src={phoneIcon} width="12px" alt="Phone" />
                  </div>
                  <p>+01 1234567890</p>
                </div>
                <div>
                  <div className="img-box">
                    <img src={mailIcon} width="18px" alt="Mail" />
                  </div>
                  <p>demo@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_info">
                <h5>Information</h5>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="info_links">
                <h5>Useful Link</h5>
                <ul>
                  <li>
                    <Link to="#">There are many</Link>
                  </li>
                  <li>
                    <Link to="#">variations of</Link>
                  </li>
                  <li>
                    <Link to="#">passages of</Link>
                  </li>
                  <li>
                    <Link to="#">Lorem Ipsum</Link>
                  </li>
                  <li>
                    <Link to="#">available, but</Link>
                  </li>
                  <li>
                    <Link to="#">the i</Link>
                  </li>
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
                  <Link to="#">
                    <img src={fbIcon} alt="Facebook" />
                  </Link>
                  <Link to="#">
                    <img src={twitterIcon} alt="Twitter" />
                  </Link>
                  <Link to="#">
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </Link>
                  <Link to="#">
                    <img src={youtubeIcon} alt="YouTube" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End info section */}

      {/* Footer section */}
      <section className="container-fluid footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="#">ApnaMakan</a>
          </p>
        </div>
      </section>
      {/* End footer section */}
    </div>
  );
};

export default About;
