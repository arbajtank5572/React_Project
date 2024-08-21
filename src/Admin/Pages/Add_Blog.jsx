import React, { useState } from "react";
import Side_Bar from "../Component/Side_Bar";
import Header from "../Component/Header";
import "./Form.css";
import { toast } from "react-toastify";
import axios from "axios";

function Add_Blog() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    blog_img: "",
    blog_title: "",
    blog_date: "",
    description: "",
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

    if (formvalue.blog_img == "") {
      toast.error("Blog Image Field is required");
      ans = false;
      return false;
    }

    if (formvalue.blog_title == "") {
      toast.error("Blog Title Field is required");
      ans = false;
      return false;
    }

    if (formvalue.blog_date == "") {
      toast.error("Blog Date Field is required");
      ans = false;
      return false;
    }

    if (formvalue.description == "") {
      toast.error("Blog Description Field is required");
      ans = false;
      return false;
    }
    return ans;
  }

  const submitHandel = async (e) => {
    e.preventDefault();

    if (validation()) {
      const res = await axios.post(`http://localhost:3000/blog`, formvalue);
      console.log(res);

      if (res.status == 201) {
        toast.success("Data Add Success");
        setFormvalue({
          ...formvalue,
          id: "",
          blog_img: "",
          blog_title: "",
          blog_date: "",
          description: "",
        });
      }
    }
  };
  return (
    <div>
      <div class="container-xxl position-relative bg-white d-flex p-0 mt-0">
        <Side_Bar />
        <div className="content">
          <Header />
          <div
            className="wrapper"
            style={{ marginTop: "75px ", height: "525px" }}
          >
            <div className="logo">
              <img
                src="https://png.pngtree.com/png-vector/20190505/ourmid/pngtree-vector-add-icon-png-image_1023418.jpg"
                alt
              />
            </div>
            <div className="text-center mt-3 name">Add_Blog</div>
            <form
              className="p-2 mt-2"
              method="post"
              onSubmit={submitHandel}
              onChange={onChangehandel}
            >
              <div className="form-field d-flex align-items-center">
                <i
                  class="fa-solid fa-images mt-1"
                  style={{ color: "#207bbc" }}
                ></i>
                <input
                  type="url"
                  name="blog_img"
                  id="blog_image"
                  placeholder="Blog_Image"
                  value={formvalue.blog_img}
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <i
                  class="fa-solid fa-t fa-lg mt-1"
                  style={{ color: "#207bbc" }}
                ></i>
                <input
                  type="text"
                  name="blog_title"
                  id="blog_title"
                  placeholder="Blog_Title"
                  value={formvalue.blog_title}
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <i
                  class="fa-solid fa-calendar-days fa-lg"
                  style={{ color: "#207bbc" }}
                ></i>
                <input
                  type="date"
                  name="blog_date"
                  id="blog_date"
                  placeholder="Blog_Date"
                  value={formvalue.blog_date}
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <i
                  class="fa-solid fa-table fa-lg"
                  style={{ color: "#207bbc" }}
                ></i>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  value={formvalue.description}
                />
              </div>
              <button className="btn mt-2" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_Blog;
