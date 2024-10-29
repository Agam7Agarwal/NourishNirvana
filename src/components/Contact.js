import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>Email: nourishnirvana.in@gmail.com</p>
        <p>Phone: +91 6395677338</p>
        <p>Address: D443, Gaur Homes, Govindpuram, Ghaziabad</p>
      </div>
    </div>
  );
};

export default Contact;
