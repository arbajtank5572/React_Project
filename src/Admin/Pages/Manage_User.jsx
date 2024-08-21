import React, { useEffect, useState } from "react";
import Side_Bar from "../Component/Side_Bar";
import Header from "../Component/Header";
import axios from "axios";
import { toast } from "react-toastify";

function Manage_User() {
  useEffect(() => {
    fetch();
  }, []);

  const [data, setdata] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/user`);
    console.log(res.data);
    setdata(res.data);
  };

  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/user/${id}`);
    console.log(res.data);
    toast.success("Data Delete Success");
    fetch();
  };

  const statusHandel = async (id) => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);

    if (res.data.status == "Block") {
      const res1 = await axios.patch(`http://localhost:3000/user/${id}`, {
        status: "Unblock",
      });
      if (res1.status == 200) {
        console.log(res.data);
        toast.success("Unblock Success");
        fetch();
      }
    } else {
      const res1 = await axios.patch(`http://localhost:3000/user/${id}`, {
        status: "Block",
      });

      if (res1.status == 200) {
        localStorage.removeItem("uid");
        localStorage.removeItem("uname");
        localStorage.removeItem("uimg");
        console.log(res.data);
        toast.success("Block SUccess");
        fetch();
      }
    }
  };
  return (
    <div class="container-xxl position-relative bg-white d-flex p-0">
      <Side_Bar />
      <div class="content">
        <Header />
        <div class="container-fluid pt-5 px-4 mt-5">
          <div class="col-12">
            <div class="bg-light rounded h-100 p-4">
              <h6 class="mb-4">Manage User :-</h6>
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col"> Mobile Number</th>
                      <th scope="col">Image</th>
                      <th scope="col">Delete</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((value, index) => {
                        return (
                          <tr key={index}>
                            <td>{value.id}</td>
                            <td scope="row">{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.number}</td>
                            <td>
                              <img
                                src={value.img}
                                alt=""
                                width={100}
                                height={100}
                              />
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
                            <td>
                              <button
                                type="button"
                                class="btn btn-outline-primary mt-2"
                                onClick={() => statusHandel(value.id)}
                              >
                                {value.status}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage_User;
