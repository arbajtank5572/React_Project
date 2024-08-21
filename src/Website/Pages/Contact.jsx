import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";
import axios from "axios";

function Contact() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    subject: "",
    comment: "",
  });

  const onchangeHandel = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  function validation() {
    var ans = true;
    if (formvalue.name == "") {
      toast.error("Name Field is Required");
      ans = false;
      return false;
    }
    if (formvalue.email == "") {
      toast.error("Email Field is Required");
      ans = false;
      return false;
    }
    if (formvalue.subject == "") {
      toast.error("Subject Field is Required");
      ans = false;
      return false;
    }
    if (formvalue.comment == "") {
      toast.error("Comment Field is Required");
      ans = false;
      return false;
    }
    return ans;
  }

  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/contact`, formvalue);
      console.log(formvalue);
      if (res.status == 201) {
        toast.success("Data Add Success");
        setFormvalue({
          ...formvalue,
          id: "",
          name: "",
          email: "",
          subject: "",
          comment: "",
        });
      }
    }
  };
  return (
    <div>
      <Header />
      <header className="site-header section-padding-img site-header-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 header-info">
              <h1>
                <span className="d-block text-primary">Say hello to us</span>
                <span className="d-block text-dark">love to hear you</span>
              </h1>
            </div>
          </div>
        </div>
        <img
          src="website/images/header/positive-european-woman-has-break-after-work.jpg"
          className="header-image img-fluid"
          alt
        />
      </header>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h2 className="mb-4">
                Let's <span>begin</span>
              </h2>
              <form
                className="contact-form me-lg-5 pe-lg-3"
                role="form"
                method="post"
                onSubmit={submitHandel}
                onChange={onchangeHandel}
              >
                <div className="form-floating">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Full name"
                    name="name"
                    value={formvalue.name}
                  />
                  <label htmlFor="name">Full name</label>
                </div>
                <div className="form-floating my-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="Email address"
                    value={formvalue.email}
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating my-4">
                  <input
                    type="subject"
                    name="subject"
                    id="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={formvalue.subject}
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="form-floating mb-4">
                  <textarea
                    name="comment"
                    className="form-control"
                    placeholder="Leave a comment here"
                    style={{ height: 160 }}
                    defaultValue={""}
                    value={formvalue.comment}
                  />
                  <label htmlFor="message">Tell us about the project</label>
                </div>
                <div className="col-lg-5 col-6">
                  <button type="submit" className="form-control">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-12 mt-5 ms-auto">
              <div className="row">
                <div className="col-6 border-end contact-info">
                  <h6 className="mb-3">New Business</h6>
                  <a href="mailto:hello@company.com" className="custom-link">
                    hello@company.com
                    <i className="bi-arrow-right ms-2" />
                  </a>
                </div>
                <div className="col-6 contact-info">
                  <h6 className="mb-3">Main Studio</h6>
                  <a href="mailto:studio@company.com" className="custom-link">
                    studio@company.com
                    <i className="bi-arrow-right ms-2" />
                  </a>
                </div>
                <div className="col-6 border-top border-end contact-info">
                  <h6 className="mb-3">Our Office</h6>
                  <p className="text-muted">
                    Akershusstranda 20, 0150 Oslo, Norway
                  </p>
                </div>
                <div className="col-6 border-top contact-info">
                  <h6 className="mb-3">Our Socials</h6>
                  <ul className="social-icon">
                    <li>
                      <a href="#" className="social-icon-link bi-messenger" />
                    </li>
                    <li>
                      <a href="#" className="social-icon-link bi-youtube" />
                    </li>
                    <li>
                      <a href="#" className="social-icon-link bi-instagram" />
                    </li>
                    <li>
                      <a href="#" className="social-icon-link bi-whatsapp" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
