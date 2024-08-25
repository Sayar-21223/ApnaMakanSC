import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import location from '../images/location.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/responsive.css';

const Contact = () => {
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

      {/* Contact section */}
      <section className="contact_section layout_padding-top">
        <div className="container">
          <div className="heading_container">
            <h2>Get In Touch</h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="map_container">
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14695.084144060515!2d88.5275238!3d22.958658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724524698362!5m2!1sen!2sin"
                    width="600"
                    height="300"
                    frameBorder="0"
                    style={{ border: 0, width: '100%', height: '100%' }}
                    allowFullScreen
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="form_container p-4" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                <form action="">
                  <div className="mb-3">
                    <textarea className="form-control" placeholder="Name" style={{ padding: '10px', borderRadius: '5px', borderColor: '#000000',}} />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" placeholder="Email" style={{ padding: '10px', borderRadius: '5px', borderColor: '#ddd' }} />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" placeholder="Phone Number" style={{ padding: '10px', borderRadius: '5px', borderColor: '#ddd' }} />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" placeholder="Message" style={{ padding: '10px', borderRadius: '5px', borderColor: '#ddd', height: '120px' }}></textarea>
                  </div>
                  <div className="d-flex">
                    <button type="submit" className="btn btn-primary w-100" style={{ borderRadius: '5px', padding: '10px', backgroundColor: '#007bff', border: 'none' }}>
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End contact section */}

      {/* Info section */}
      <section className="info_section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_contact">
                <h5>About Apartment</h5>
                <div>
                  <div className="img-box">
                    <img src="/images/location.png" width="18px" alt="location" />
                  </div>
                  <p>Address</p>
                </div>
                <div>
                  <div className="img-box">
                    <img src="/images/phone.png" width="12px" alt="phone" />
                  </div>
                  <p>+01 1234567890</p>
                </div>
                <div>
                  <div className="img-box">
                    <img src="/images/mail.png" width="18px" alt="mail" />
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
                  <button type="submit">Subscribe</button>
                </form>
                <div className="social_box">
                  <Link to="#">
                    <img src="/images/fb.png" alt="fb" />
                  </Link>
                  <Link to="#">
                    <img src="/images/twitter.png" alt="twitter" />
                  </Link>
                  <Link to="#">
                    <img src="/images/linkedin.png" alt="linkedin" />
                  </Link>
                  <Link to="#">
                    <img src="/images/youtube.png" alt="youtube" />
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

export default Contact;
