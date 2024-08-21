import React, { useEffect, useState } from "react";
import Side_Bar from "../Component/Side_Bar";
import Header from "../Component/Header";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import "./Form.css";

function Edit_Admin_Profile() {
  const redirect = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("admin_uid")) {
      editdata();
    } else {
      redirect("/dashboard");
    }
  }, []);

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    img: "",
  });

  const { id } = useParams();

  const editdata = async () => {
    const res = await axios.get(`http://localhost:3000/admin/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  };

  const onChangehandel = (e) => {
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

    if (formvalue.mobile == "") {
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
        `http://localhost:3000/admin/${id}`,
        formvalue
      );
      if (res.status == 200) {
        setFormvalue({
          ...formvalue,
          id: "",
          name: "",
          email: "",
          password: "",
          mobile: "",
          img: "",
        });
        redirect("/admin_profile");
        toast.success("Data Update Success");
      }
    }
  };

  return (
    <div class="container-xxl position-relative bg-white d-flex p-0">
      <Side_Bar />

      <div class="content">
        <Header />

        <div
          className="wrapper"
          style={{ marginTop: "45px", marginBottom: "0px" }}
        >
          <div className="logo">
            <img
              src="https://png.pngtree.com/png-vector/20190505/ourmid/pngtree-vector-add-icon-png-image_1023418.jpg"
              alt
            />
          </div>
          <div className="text-center mt-3 name">Edit Profile</div>
          <form
            className="p-2 mt-2"
            method="post"
            onChange={onChangehandel}
            onSubmit={submitHandel}
          >
            <div className="form-field d-flex align-items-center">
              <i
                class="fa-solid fa-circle-user fa-lg mt-1"
                style={{ color: "#207bbc" }}
              ></i>
              <input
                type="text"
                name="product_name"
                id="product_name"
                placeholder="Product_Name"
                value={formvalue.name}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <i
                class="fa-solid fa-envelope fa-lg mt-1"
                style={{ color: "#207bbc" }}
              ></i>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                value={formvalue.email}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <i
                class="fa-solid fa-phone-volume fa-lg"
                style={{ color: "#207bbc" }}
              ></i>
              <input
                type="text"
                name="size"
                id="size"
                placeholder="Size"
                value={formvalue.mobile}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <i
                class="fa-solid fa-images mt-1"
                style={{ color: "#207bbc" }}
              ></i>
              <input
                type="url"
                name="img"
                id="img"
                placeholder="Product_Image"
                value={formvalue.img}
              />
            </div>
            <button className="btn mt-2">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit_Admin_Profile;
