import React, { useEffect, useState } from "react";
import Side_Bar from "../Component/Side_Bar";
import Header from "../Component/Header";
import "./Form.css";
import { toast } from "react-toastify";
import axios from "axios";

function Add_Product() {
  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data);
  };

  const [formvalue, setFormvalue] = useState({
    id: "",
    product_name: "",
    price: "",
    size: "",
    cate_id: "",
    img: "",
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

    if (formvalue.product_name == "") {
      toast.error("Product Name Field is required");
      ans = false;
      return false;
    }
    if (formvalue.price == "") {
      toast.error("Product Price Field is required");
      ans = false;
      return false;
    }
    if (formvalue.size == "") {
      toast.error(" Size Field is required");
      ans = false;
      return false;
    }
    if (formvalue.cate_id == "") {
      toast.error("Select Categories Field is required");
      ans = false;
      return false;
    }
    if (formvalue.img == "") {
      toast.error("Product Image_1 Field is required");
      ans = false;
      return false;
    }

    return ans;
  }

  const submitHandel = async (e) => {
    e.preventDefault();

    if (validation()) {
      const res = await axios.post(`http://localhost:3000/product`, formvalue);
      console.log(res);

      if (res.status == 201) {
        toast.success("Data Add Success");
        setFormvalue({
          ...formvalue,
          id: "",
          product_name: "",
          price: "",
          size: "",
          cate_id: "",
          img: "",
        });
      }
    }
  };

  return (
    <div class="container-xxl position-relative bg-white d-flex p-0 mt-0">
      <Side_Bar />
      <div className="content">
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
          <div className="text-center mt-3 name">Add_Products</div>
          <form
            className="p-2 mt-2"
            method="post"
            onChange={onChangehandel}
            onSubmit={submitHandel}
          >
            <div className="form-field d-flex align-items-center">
              <i
                class="fa-brands fa-product-hunt fa-lg mt-1"
                style={{ color: "#207bbc" }}
              ></i>
              <input
                type="text"
                name="product_name"
                id="product_name"
                placeholder="Product_Name"
                value={formvalue.product_name}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <i
                class="fa-solid fa-rupee-sign fa-lg mt-1"
                style={{ color: "#207bbc" }}
              ></i>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                value={formvalue.price}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <i class="fa-solid fa-tape" style={{ color: "#207bbc" }}></i>
              <input
                type="text"
                name="size"
                id="size"
                placeholder="Size"
                value={formvalue.size}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <i
                class="fa-solid fa-layer-group mt-1"
                style={{ color: "#207bbc" }}
              ></i>
              <select
                name="cate_id"
                id="cate_id"
                value={formvalue.cate_id}
                style={{
                  outline: "none",
                  border: "none",
                  backgroundColor: "transparent",
                  padding: "10px",
                }}
              >
                <option>Select category</option>
                {data &&
                  data.map((value) => {
                    return <option value={value.id}>{value.cate_name}</option>;
                  })}
              </select>
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
            <button className="btn mt-2" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add_Product;
