import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fakeContacts from "../../fakeData/fakeContacts";
import "./Contact.css";
import { Form } from "react-bootstrap";
import ParticleCanvas from "../ParticleCanvas/ParticleCanvas";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const windowSize = window.innerWidth;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_jhgnrpz",
        e.target,
        "user_iga3YqlpyPCT5paXEVuVc"
      )
      .then(
        (result) => {
          if (result) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your message SuccessFully Send to Aslam",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <ParticleCanvas />
      <div className="container">
        <div className="contactHead d-flex flex-column align-items-center mb-5">
          <h3>Contact</h3>
          <p>Let's Work Together</p>
        </div>
        <div className="row">
          {fakeContacts.map((contact) => (
            <div
              className="col-md-4 contact-details d-flex flex-column align-items-center"
              data-aos={
                (contact.id === 1 && windowSize > 1000
                  ? "fade-up-right"
                  : "fade-up") ||
                (contact.id === 2 && "fade-up") ||
                (contact.id === 3 && windowSize > 1000
                  ? "fade-up-left"
                  : "fade-up")
              }
              data-aos-duration="900"
              data-aos-delay="200"
              key={contact.id}
            >
              <p className="blockIcon">
                <FontAwesomeIcon icon={contact.icon} />
              </p>
              <h4>{contact.name}</h4>
              <p>{contact.address}</p>
            </div>
          ))}
        </div>
        <div
          className="contactForm my-5"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="900"
        >
          <h3 className="text-center">Have You Something to Say ?</h3>
          <p className="text-center">Feel free to message me</p>

          <Form onSubmit={sendEmail}>
            <Form.Group controlId="formGroupName">
              <Form.Control
                type="text"
                placeholder="Enter Your Full Name"
                name="name"
              />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Control
                type="email"
                placeholder="Enter your Valid Email "
                name="email"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write Your Message Here"
                name="message"
              />
            </Form.Group>
            <button type="submit" className="allArticle">
              Send
            </button>
          </Form>
        </div>
        <p className="text-center copyRight">
          &copy; {new Date().getFullYear()} All Rights Reserve to Aslam Hossain
        </p>
      </div>
    </section>
  );
};

export default Contact;
