import React, { useEffect, useState } from "react";
import Side_Bar from "../Component/Side_Bar";
import Header from "../Component/Header";
import "./Form.css";
import axios from "axios";
import { toast } from "react-toastify";

function Manage_Categories() {
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
    cate_name: "",
    cate_img: "",
  });

  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/categories/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  };

  const onChangehandel = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
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
      const res = await axios.patch(
        `http://localhost:3000/categories/${formvalue.id}`,
        formvalue
      );
      console.log(res);
      if (res.status == 200) {
        toast.success("Data Update Success");
        setFormvalue({ ...formvalue, id: "", cate_name: "", cate_img: "" });
        fetch();
      }
    }
  };

  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/categories/${id}`);
    console.log(res.data);
    toast.success("Data Delete Success");
    fetch();
  };

  return (
    <div class="container-xxl position-relative bg-white d-flex p-0">
      <Side_Bar />
      <div class="content">
        <Header />
        <div class="container-fluid pt-5 px-4 mt-5">
          <div class="col-12">
            <div class="bg-light rounded h-100 p-4">
              <h6 class="mb-4">Manage Categories :-</h6>
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Category Name</th>
                      <th scope="col">Category Image</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((value, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{value.id}</th>
                            <td>{value.cate_name}</td>
                            <td>
                              <img src={value.cate_img} alt="" width={100} />
                            </td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-outline-primary mt-2"
                                onClick={() => editdata(value.id)}
                                data-bs-toggle="modal"
                                data-bs-target="#myModal"
                              >
                                Edit
                              </button>
                            </td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-outline-primary mt-2"
                                onClick={() => deleteHandel(value.id)}
                              >
                                Delete
                              </button>
                            </td>
                            {/* <td>123</td>
                            <td>Member</td> */}
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>

              <div className="modal" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Edit Categories</h4>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      />
                    </div>
                    <div className="modal-body">
                      <div className="wrapper mt-0 mb-0">
                        <div className="logo">
                          <img
                            src="https://png.pngtree.com/png-vector/20190505/ourmid/pngtree-vector-add-icon-png-image_1023418.jpg"
                            alt
                          />
                        </div>
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
                          <div>
                            <button className="btn mt-3 ">Update</button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        class="btn btn-outline-primary me-3 mt-0"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage_Categories;
