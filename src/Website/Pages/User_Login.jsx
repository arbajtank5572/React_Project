import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function User_Login() {
  const redirect = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("uid")) {
      redirect("/");
    }
  });

  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const onChangehandel = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  function validation() {
    var ans = true;

    if (data.email == "") {
      toast.error("email Field is required");
      ans = false;
      return false;
    }

    if (data.password == "") {
      toast.error("password Field is required");
      ans = false;
      return false;
    }

    return ans;
  }

  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res_arr = await axios.get(
        `http://localhost:3000/user?email=${data.email}`
      );
      console.log(res_arr);
      if (res_arr.data.length > 0) {
        if (res_arr.data[0].password == data.password) {
          if (res_arr.data[0].status == "Unblock") {
            // session created in browser
            localStorage.setItem("uid", res_arr.data[0].id);
            localStorage.setItem("uname", res_arr.data[0].name);
            localStorage.setItem("uimg", res_arr.data[0].img);


            toast.success("Login Success");
            return redirect("/");
          } else {
            toast.error("Account Blocked Contact SHOP");
            setdata({ ...data, email: "", password: "" });
            return false;
          }
        } else {
          toast.error("Password does not match");
          setdata({ ...data, email: "", password: "" });
          return false;
        }
      } else {
        toast.error("Email does not Exist");
        setdata({ ...data, email: "", password: "" });
        return false;
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
                <h1 className="hero-title text-center mb-5">Sign In</h1>
                <div className="row">
                  <div className="col-lg-8 col-11 mx-auto">
                    <form
                      role="form"
                      method="post"
                      onChange={onChangehandel}
                      onSubmit={submitHandel}
                    >
                      <div className="form-floating mb-4 p-0">
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
                      <div className="form-floating p-0">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={data.password}
                          className="form-control"
                          placeholder="Password"
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                      <button
                        type="submit"
                        className="btn custom-btn form-control mt-4 mb-3  "
                      >
                        Sign in
                      </button>
                      <p className="text-center">
                        Don’t have an account?{" "}
                        <Link to="/Sign_up">Create One</Link>
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

export default User_Login;
