import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="left-div"></div>

      <div className="clsn"></div>
      <div className="contact-form">
        <div className="body">
          <div className="container">
            <h2>Contact Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                />
                <label htmlFor="country">Country</label>
                <select id="country" name="country">
                  <option value="Haryana">Haryana</option>
                  <option value="Rajsthan">Rajsthan</option>
                  <option value="UP">UP</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="panjab">Panjab</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="ttl"></div>
    </>
  );
};

export default Contact;
