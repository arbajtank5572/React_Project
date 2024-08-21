import React, { useState } from "react";
import Side_Bar from "../Component/Side_Bar";
import Header from "../Component/Header";
import "./Form.css";
import { toast } from "react-toastify";
import axios from "axios";

function Add_Categories() {
  
  const [formvalue, setFormvalue] = useState({
    id: "",
    cate_name: "",
    cate_img: "",
  });

  const onChangehandel = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  function validation() {
    var ans = true;

    if (formvalue.cate_name == "") {
      toast.error("Category Name Field is required");
      ans = false;
      return false;
    }

    if (formvalue.cate_img == "") {
      toast.error("Category Image Field is required");
      ans = false;
      return false;
    }
    return ans;
  }

  const submitHandel = async (e) => {
    e.preventDefault();

    if (validation()) {
      const res = await axios.post(
        `http://localhost:3000/categories`,
        formvalue
      );
      console.log(res);
      if (res.status == 201) {
        toast.success("Data Add Success");
        setFormvalue({ ...formvalue, id: "", cate_name: "", cate_img: "" });
      }
    }
  };
  return (
    <div class="container-xxl position-relative bg-white d-flex p-0">
      <Side_Bar />
      <div className="content">
        <Header />
        <div className="wrapper">
          <div className="logo">
            <img
              src="https://png.pngtree.com/png-vector/20190505/ourmid/pngtree-vector-add-icon-png-image_1023418.jpg"
              alt
            />
          </div>
          <div className="text-center mt-4 name">Add_Categories</div>
          <form
            className="p-3 mt-3"
            method="post"
            onSubmit={submitHandel}
            onChange={onChangehandel}
          >
            <div className="form-field d-flex align-items-center">
              <i
                class="fa-solid fa-layer-group mt-1"
                style={{ color: "#207bbc" }}
              ></i>
              <input
                type="text"
                name="cate_name"
                id="cate_name"
                placeholder="Category_Name"
                value={formvalue.cate_name}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <i
                class="fa-solid fa-images mt-1"
                style={{ color: "#207bbc" }}
              ></i>
              <input
                type="url"
                name="cate_img"
                id="cate_image"
                placeholder="Category_Image"
                value={formvalue.cate_img}
              />
            </div>
            <button className="btn mt-3" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add_Categories;
