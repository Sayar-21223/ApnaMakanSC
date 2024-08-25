import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import locationIcon from '../images/location.png';
import phoneIcon from '../images/phone.png';
import mailIcon from '../images/mail.png';
import fbIcon from '../images/fb.png';
import twitterIcon from '../images/twitter.png';
import linkedinIcon from '../images/linkedin.png';
import youtubeIcon from '../images/youtube.png';
import '../styles/bootstrap.css';
import '../styles/style.css';
import '../styles/responsive.css';

// Define the PricePage component
function PricePage() {
  // Function to open the navigation overlay
  const openNav = () => {
    const nav = document.getElementById('myNav');
    if (nav) {
      nav.style.width = '100%';  // Open the navigation menu
    }
  };

  // Function to close the navigation overlay
  const closeNav = () => {
    const nav = document.getElementById('myNav');
    if (nav) {
      nav.style.width = '0%';  // Close the navigation menu
    }
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
                  {/* <Link className="nav-link mr-4" to="/explore">
                    Explore
                  </Link> */}
                </li>

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
        {/* End header section */}
      </div>

      {/* Price section */}
      <section className="price_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Pricing</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the</p>
          </div>
          <div className="price_container">
            <div className="box">
              <div className="detail-box">
                <div className="heading-box">
                  <h4>01</h4>
                  <h6>Basic</h6>
                </div>
                <div className="text-box">
                  <h2>10.00Eth</h2>
                  <ul>
                    <li>variations of</li>
                    <li>passages of Lorem</li>
                    <li>Ipsum available,</li>
                    <li>but the majority</li>
                    <li>have suffered</li>
                    <li>alteration in</li>
                  </ul>
                </div>
              </div>
              <div className="btn-box">
                <a href="">Buy Now</a>
              </div>
            </div>
            <div className="box">
              <div className="detail-box">
                <div className="heading-box">
                  <h4>02</h4>
                  <h6>Standard</h6>
                </div>
                <div className="text-box">
                  <h2>20.00Eth</h2>
                  <ul>
                    <li>variations of</li>
                    <li>passages of Lorem</li>
                    <li>Ipsum available,</li>
                    <li>but the majority</li>
                    <li>have suffered</li>
                    <li>alteration in</li>
                  </ul>
                </div>
              </div>
              <div className="btn-box">
                <a href="">Buy Now</a>
              </div>
            </div>
            <div className="box">
              <div className="detail-box">
                <div className="heading-box">
                  <h4>03</h4>
                  <h6>Premium</h6>
                </div>
                <div className="text-box">
                  <h2>30.00Eth</h2>
                  <ul>
                    <li>variations of</li>
                    <li>passages of Lorem</li>
                    <li>Ipsum available,</li>
                    <li>but the majority</li>
                    <li>have suffered</li>
                    <li>alteration in</li>
                  </ul>
                </div>
              </div>
              <div className="btn-box">
                <a href="">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End price section */}

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
                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="info_links">
                <h5>Useful Link</h5>
                <ul>
                  <li><a href="">There are many</a></li>
                  <li><a href="">variations of</a></li>
                  <li><a href="">passages of</a></li>
                  <li><a href="">Lorem Ipsum</a></li>
                  <li><a href="">available, but</a></li>
                  <li><a href="">the i</a></li>
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
                  <a href=""><img src={fbIcon} alt="Facebook" /></a>
                  <a href=""><img src={twitterIcon} alt="Twitter" /></a>
                  <a href=""><img src={linkedinIcon} alt="LinkedIn" /></a>
                  <a href=""><img src={youtubeIcon} alt="YouTube" /></a>
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
            <a href="#">ApnaMakn</a>
          </p>
        </div>
      </section>
      {/* End footer section */}
    </div>
  );
}

export default PricePage;
