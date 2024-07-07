import React from "react";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin (1).png";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="right">
        <h2>Contact me</h2>
        <h3>Don't be shy! Hit me up!👇</h3>
        <div className="mail">
          <img src={mail} alt="" />
          <div className="mail_about">
            <h4>Mail</h4>
            <p>
              <a href="mailto:ss1731493@gmail.com" target="blank">
                ss1731493@gmail.com
              </a>
            </p>
          </div>
          <div className="mail">
            <img src={linkedin} alt="" />

            <div className="mail_about">
              <h4>LinkedIn</h4>
              <p>
                <a href="www.linkedin.com/in/ss173" target="blank">
                  www.linkedin.com/in/ss173
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3635788.814623532!2d80.85930415!3d27.138192749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711041305404!5m2!1sen!2sin"
          // width="600"
          // height="450"
          // style="border:0;"
          title="contactpage map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </div>
  );
};

export default Contact;
