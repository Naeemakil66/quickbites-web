import React, { useState } from "react";

function AboutContact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className="page-container">
      <section className="about-section">
        <h1 className="page-title">About QuickBites</h1>
        <p>
          QuickBites was founded in 2026 with a simple mission: to serve delicious, high-quality gourmet 
          meals made from fresh ingredients. Whether you want a quick burger or a slice of artisanal pizza, 
          we have got you covered!
        </p>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        {messageSent ? (
          <p className="success-toast">Thank you for reaching out! We will reply to your message shortly.</p>
        ) : (
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" required placeholder="your.email@example.com" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea required rows="4" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn btn-secondary">Send Message</button>
          </form>
        )}
      </section>
    </div>
  );
}

export default AboutContact;