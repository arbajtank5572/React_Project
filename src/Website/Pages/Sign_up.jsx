import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Sign_up() {
  const redirect = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("uid")) {
      redirect("/");
    }
  });

  const [data, setdata] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    number: "",
    status: "Unblock",
    img: "",
  });

  const onChangehandel = (e) => {
    setdata({
      ...data,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  function validation() {
    var ans = true;
    if (data.name == "") {
      toast.error("Name Field is required");
      ans = false;
      return false;
    }

    if (data.email == "") {
      toast.error("please enter your email");
      ans = false;
      return false;
    }

    if (data.password == "") {
      toast.error("please enter your password");
      ans = false;
      return false;
    }

    if (data.number == "") {
      toast.error("please enter your mobile Number");
      ans = false;
      return false;
    }

    if (data.img == "") {
      toast.error("please enter your Image");
      ans = false;
      return false;
    }

    return true;
  }

  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res_arr = await axios.get(
        `http://localhost:3000/user?email=${data.email}`
      );

      console.log(res_arr);
      if (res_arr.data.length > 0) {
        toast.error("Email id already Exist !");
        setdata({
          ...data,
          id: "",
          name: "",
          email: "",
          password: "",
          number: "",
          img: "",
        });
      } else {
        const res = await axios.post(`http://localhost:3000/user`, data);
        console.log(res);
        if (res.status == 201) {
          toast.success("Data Add Success");
          setdata({
            ...data,
            // id: "",
            name: "",
            email: "",
            password: "",
            number: "",
            img: "",
          });
        }
      }
    }
  };

  return (
    <div>
      <Header />
      <main>
        <section className="sign-in-form section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto col-12">
                <h1 className="hero-title text-center mb-5">Sign Up</h1>
                <div className="social-login d-flex flex-column w-50 m-auto">
                  <a href="#" className="btn custom-btn social-btn mb-4">
                    <i className="bi bi-google me-3" />
                    Continue with Google
                  </a>
                  <a href="#" className="btn custom-btn social-btn">
                    <i className="bi bi-facebook me-3" />
                    Continue with Facebook
                  </a>
                </div>
                <div className="div-separator w-50 m-auto my-5">
                  <span>or</span>
                </div>
                <div className="row">
                  <div className="col-lg-8 col-11 mx-auto">
                    <form
                      role="form"
                      method="post"
                      onSubmit={submitHandel}
                      onChange={onChangehandel}
                    >
                      <div className="form-floating">
                        <input
                          type="name"
                          name="name"
                          id="name"
                          value={data.name}
                          className="form-control"
                          placeholder="Username"
                        />
                        <label htmlFor="name">Username</label>
                      </div>
                      <div className="form-floating my-4">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={data.email}
                          className="form-control"
                          placeholder="Email address"
                        />
                        <label htmlFor="email">Email address</label>
                      </div>
                      <div className="form-floating my-4">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={data.password}
                          className="form-control"
                          placeholder="Password"
                        />
                        <label htmlFor="password">Password</label>
                        <p className="text-center">
                        </p>
                      </div>
                      <div className="form-floating my-4">
                        <input
                          type="number"
                          name="number"
                          id="number"
                          value={data.number}
                          className="form-control"
                          placeholder="Mobile Number"
                        />
                        <label htmlFor="Mobile Number">Mobile Number</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="url"
                          name="img"
                          id="img"
                          value={data.img}
                          className="form-control"
                          placeholder="Image"
                        />
                        <label htmlFor="image">Image</label>
                      </div>
                      <button
                        type="submit"
                        className="btn custom-btn form-control mt-4 mb-3"
                      >
                        Create account
                      </button>
                      <p className="text-center">
                        Already have an account? Please{" "}
                        <Link to="/user_login">Sign In</Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Sign_up;
