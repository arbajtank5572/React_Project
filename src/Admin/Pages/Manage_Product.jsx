import React, { useEffect, useState } from "react";
import Side_Bar from "../Component/Side_Bar";
import Header from "../Component/Header";
import "./Form.css";
import axios from "axios";
import { toast } from "react-toastify";

function Manage_Product() {
  useEffect(() => {
    fetch();
  }, []);

  const [search, setsearch] = useState("");
  console.log(search);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/product`);
    console.log(res.data);
    setData(res.data);
  };

  const [formvalue, setFormvalue] = useState({
    id: "",
    product_name: "",
    price: "",
    size: "",
    img: "",
  });

  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/product/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  };

  const onChangehandel = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/product/${id}`);
    console.log(res.data);
    toast.success("Data Delete Success");
    fetch();
  };

  function validation() {
    var ans = true;

    if (formvalue.product_name == "") {
      toast.error("Product Name Field is required");
      ans = false;
      return false;
    }

    if (formvalue.price == "") {
      toast.error("Price Field is required");
      ans = false;
      return false;
    }

    if (formvalue.size == "") {
      toast.error("Product Size Field is required");
      ans = false;
      return false;
    }

    if (formvalue.img == "") {
      toast.error("Product Image Field is required");
      ans = false;
      return false;
    }

    return ans;
  }

  const submitHandel = async (e) => {
    e.preventDefault();

    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/product/${formvalue.id}`,
        formvalue
      );
      console.log(res);
      if (res.status == 200) {
        toast.success(" Data Update Success ");
        setFormvalue({
          ...formvalue,
          id: "",
          product_name: "",
          price: "",
          size: "",
          img: "",
        });
        fetch();
      }
    }
  };

  return (
    <div>
      <div class="container-xxl position-relative bg-white d-flex p-0">
        <Side_Bar />
        <div class="content">
          <Header />
          <div class="container-fluid pt-5 px-4 mt-5">
            <div class="col-12">
              <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">Manage Products :-</h6>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="input-group mb-4">
                  <input
                    type="text"
                    onChange={(e) => setsearch(e.target.value)}
                    value={search}
                    className="form-control"
                    placeholder="Categories Name"
                  />
                  <button class="btn btn-primary" type="button">
                    Search
                  </button>
                </div>
              </div>
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Size</th>
                        <th scope="col">Cate_ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data
                        .filter((value) => {
                          return search === ""
                            ? value
                            : value.product_name &&
                                value.product_name
                                  .toLowerCase()
                                  .includes(search.toLowerCase());
                        })
                        .map((value) => {
                          return (
                            <tr key={value.id}>
                              <th scope="row">{value.id}</th>
                              <td>{value.product_name}</td>
                              <td>{value.price}</td>
                              <td>{value.size}</td>
                              <td>{value.cate_id}</td>
                              <td>
                                <img src={value.img} alt="" width={100} />
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
                        <h4 className="modal-title">Edit Products</h4>
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
                                type="text"
                                name="price"
                                id="price"
                                placeholder="Price"
                                value={formvalue.price}
                              />
                            </div>
                            <div className="form-field d-flex align-items-center">
                              <i
                                class="fa-solid fa-tape"
                                style={{ color: "#207bbc" }}
                              ></i>
                              <input
                                type="text"
                                name="size"
                                id="size"
                                placeholder="Size"
                                value={formvalue.size}
                              />
                            </div>
                            {/* <div className="form-field d-flex align-items-center">
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
                                <option>Men</option>
                                <option>Women</option>
                                <option>Children</option>
                              </select>
                            </div> */}
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
                            <button
                              className="btn mt-2 btn-block"
                              type="submit"
                            >
                              Update
                            </button>
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
    </div>
  );
}

export default Manage_Product;
