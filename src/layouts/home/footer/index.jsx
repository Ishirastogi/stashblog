import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import s from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        {/* Left Section (Logo + Socials) */}
        <div className={s.footerLeft}>
          <img
            src="/images/logo/footer-logo.png" // replace with your footer logo
            alt="Moradabad Export Logo"
            className={s.footerLogo}
          />
          <h2>MORADABAD EXPORT</h2>
          <div className={s.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Middle Section (Policies) */}
        <div className={s.footerCenter}>
          <h3>Policies</h3>
          <ul>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/return">Return and Refund Policy</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Right Section (Quick Links) */}
        <div className={s.footerRight}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={s.footerBottom}>
        <p>© 2024 Brand Name. www.brandname.com</p>
      </div>
    </footer>
  );
}
