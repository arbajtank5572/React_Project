import React, { useEffect, useState } from "react";
import "./Form.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";

function Admin_Login() {
  const redirect = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("admin_uid")) {
      redirect("/dashboard");
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
      toast.error("Email Field is required");
      ans = false;
      return false;
    }
    if (data.password == "") {
      toast.error("Password Field is required");
      ans = false;
      return false;
    }
    return ans;
  }

  const submitHandel = async (e) => {
    e.preventDefault();

    if (validation()) {
      const res_arr = await axios.get(
        `http://localhost:3000/admin?email=${data.email}`
      );
      console.log(res_arr);

      if (res_arr.data.length > 0) {
        if (res_arr.data[0].password == data.password) {
          if (res_arr.data[0].status == "Unblock") {
            localStorage.setItem("admin_uid", res_arr.data[0].id);
            localStorage.setItem("admin_uname", res_arr.data[0].name);
            localStorage.setItem("admin_uimg", res_arr.data[0].img);

            toast.success("Login Success");
            return redirect("/dashboard");
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
    <div
      class="container-fluid"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/digital-technology-polygon-connection-background_1035-17976.jpg?t=st=1718102082~exp=1718105682~hmac=02c52bf3ebb8bf664b48779f448bf27089d7c8fc894299d4448487044746b319&w=1060)",
        height: "100vh",
      }}
    >
      <div
        class="row h-100 align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="wrapper mt-0">
          <div className="logo">
            <img
              src="https://png.pngtree.com/png-vector/20190505/ourmid/pngtree-vector-add-icon-png-image_1023418.jpg"
              alt
            />
          </div>
          <div className="text-center mt-3 name">Admin_Login</div>
          <form
            className="p-2 mt-2"
            method="post"
            onChange={onChangehandel}
            onSubmit={submitHandel}
          >
            <div className="form-field d-flex align-items-center">
              <i
                class="fa-solid fa-envelope-circle-check fa-lg mt-1  "
                style={{ color: "#207bbc" }}
              ></i>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={data.email}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <i
                class="fa-solid fa-lock fa-lg mt-1"
                style={{ color: "#207bbc" }}
              ></i>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={data.password}
              />
            </div>
            <button className="btn mt-2" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin_Login;
