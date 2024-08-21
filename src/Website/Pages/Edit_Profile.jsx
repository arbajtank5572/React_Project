import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { redirect, useNavigate, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

function Edit_Profile() {
  const redirect = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("uid")) {
      editdata();
    } else {
      redirect("/");
    }
  }, []);

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    number: "",
    img: "",
  });

  const { id } = useParams();

  const editdata = async () => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  };

  const onChangehandel = async (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };

  function validation() {
    var ans = true;

    if (formvalue.name == "") {
      toast.error("Name Field is required");
      ans = false;
      return false;
    }

    if (formvalue.email == "") {
      toast.error("Email Field is required");
      ans = false;
      return false;
    }

    if (formvalue.password == "") {
      toast.error("Password Field is required");
      ans = false;
      return false;
    }

    if (formvalue.number == "") {
      toast.error("Mobile Number Field is required");
      ans = false;
      return false;
    }

    if (formvalue.img == "") {
      toast.error("Image Field is required");
      ans = false;
      return false;
    }
    return ans;
  }

  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/user/${id}`,
        formvalue
      );
      console.log(res);
      if (res.status == 200) {
        setFormvalue({
          ...formvalue,
          id: "",
          name: "",
          email: "",
          password: "",
          number: "",
          img: "",
        });
        redirect("/Profile");
        toast.success("Data Update Success");
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
                <h1 className="hero-title text-center">Edit Profile</h1>
                <div className="div-separator w-50 m-auto mt-3 my-5"></div>
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
                          id="name"
                          className="form-control"
                          placeholder="Username"
                          name="name"
                          value={formvalue.name}
                        />
                        <label htmlFor="name">Username</label>
                      </div>
                      <div className="form-floating my-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email address"
                          name="email"
                          value={formvalue.email}
                        />
                        <label htmlFor="email">Email address</label>
                      </div>
                      <div className="form-floating my-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          value={formvalue.password}
                        />
                        <label htmlFor="password">Password</label>
                        <p className="text-center"></p>
                      </div>
                      <div className="form-floating my-4">
                        <input
                          type="number"
                          id="number"
                          className="form-control"
                          placeholder="Mobile Number"
                          name="number"
                          value={formvalue.number}
                        />
                        <label htmlFor="Mobile Number">Mobile Number</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="url"
                          id="img"
                          className="form-control"
                          placeholder="Image"
                          name="img"
                          value={formvalue.img}
                        />
                        <label htmlFor="image">Image</label>
                      </div>
                      <button
                        type="submit"
                        className="btn custom-btn form-control mt-4 mb-3"
                      >
                        save
                      </button>
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

export default Edit_Profile;
