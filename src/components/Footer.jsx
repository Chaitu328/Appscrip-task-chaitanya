import { useState } from "react";
export const Footer = () => {
    const [email, setEmail] = useState('');
    
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubscribe = (e) => {
      e.preventDefault();
      // Handle subscribe logic
      console.log('Subscribing with email:', email);
    };
    
    return (
      <footer>
        <div className="container">
          <section className="newsletter-section">
            <h2>BE THE FIRST TO KNOW</h2>
            <p>Sign up for updates from meta muse.</p>
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Your email address" 
                value={email} 
                onChange={handleEmailChange} 
                required 
                aria-label="Email address"
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </section>
  
          <div className="footer-content">
            <div className="footer-column">
              <h2 className="brand-name">meta muse</h2>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#stories">Stories</a></li>
                <li><a href="#artisans">Artisans</a></li>
                <li><a href="#boutiques">Boutiques</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#compliance">EU Compliance Docs</a></li>
              </ul>
            </div>
  
            <div className="footer-column">
              <h2>QUICK LINKS</h2>
              <ul>
                <li><a href="#orders">Orders & Shipping</a></li>
                <li><a href="#seller">Join/Login as a Seller</a></li>
                <li><a href="#payment">Payment & Pricing</a></li>
                <li><a href="#returns">Return & Refunds</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms & Conditions</a></li>
              </ul>
            </div>
  
            <div className="footer-column">
              <section className="social-section">
                <h2>FOLLOW US</h2>
                <div className="social-icons">
                  <a href="#instagram" className="social-icon" aria-label="Instagram">🔘</a>
                  <a href="#facebook" className="social-icon" aria-label="Facebook">🔘</a>
                </div>
              </section>
              
              <section className="contact-info">
                <h2>CONTACT US</h2>
                <p>+412 345 6789</p>
                <p>customercare@metamuse.com</p>
              </section>
  
              <section className="currency-selector">
                <h2>CURRENCY</h2>
                <button className="currency-button">$ USD</button>
                <p className="currency-note">Transactions are converted to your local currency depending on location</p>
              </section>
            </div>
          </div>
  
          <section className="payment-methods">
            <h2>meta muse ACCEPTS</h2>
            <div className="payment-icons">
              <span className="payment-icon">VISA</span>
              <span className="payment-icon">APPLE</span>
              <span className="payment-icon">SHOP</span>
            </div>
          </section>
  
          <div className="copyright">
            <p>Copyright © 2023 metamuse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };