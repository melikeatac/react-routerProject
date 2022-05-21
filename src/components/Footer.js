import React from "react";
import { Link } from "react-router-dom";
import "../components/style.css";

const Footer = () => {
  return (
    <div className="cs-footer">
      <div className="row">
        <div className="col-4 cs-left1">
          <Link to="/">
            <img className="cs-logo" src="logo1.png" />
          </Link>
          <h6>Ready to cook?</h6>
          <p>Sign up for our weekly newsletters!</p>
          <span>
            <input type="text" placeholder="Enter your email" />
            <button>SIGN UP</button>
          </span>
          <span className="cs-footer-left">
            <p>LET'S BE FRIENDS!</p>
            <div></div>
          </span>
        </div>
        <div className="col-4 cs-footer-middle">
          <ul>
            <li>
              <a>RECIPES</a>
            </li>
            <li>
              <a>QUICK & EASY</a>
            </li>
            <li>
              <a>IN THE KITCHEN</a>
            </li>
            <li>
              <a>BUYING GUIDES</a>
            </li>
            <li>
              <a>HOLIDAYS & SEASONS</a>
            </li>
          </ul>
        </div>
        <div className="col-4 cs-footer-right">
          <h5>E-bültenimize üye olarak yeniliklerden haberdar olun!</h5>
          <h6>
            Şimdi üye olarak lezzetli reçetelere, sektörel trendlere, ücretsiz
            numunelere ve çok daha fazlasına ulaşabilirsiniz.
          </h6>
          <p>Bizi takip edin!</p>
          <ul>
            <li>
              <a>
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
