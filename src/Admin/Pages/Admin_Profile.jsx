import React, { useEffect, useState } from "react";
import Side_Bar from "../Component/Side_Bar";
import Header from "../Component/Header";
import "./Form.css";
import { useNavigate } from "react-router";
import axios from "axios";

function Admin_Profile() {
  const redirect = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admin_uid")) {
      redirect("/dashboard");
    } else {
      fetch();
    }
  }, []);

  const [data, setdata] = useState({});

  const fetch = async () => {
    const res = await axios.get(
      `http://localhost:3000/admin/${localStorage.getItem("admin_uid")}`
    );
    console.log(res.data);
    setdata(res.data);
  };
  return (
    <div class="container-xxl position-relative bg-white d-flex p-0 mt-0">
      <Side_Bar />
      <div className="content">
        <Header />
        <div className="container mt-5">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={data.img}
                        alt="Admin"
                        width={150}
                      />
                      <div className="mt-3">
                        <h4>{data.name}</h4>
                        <p className="text-secondary mb-1">{data.id}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">ID</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{data.id}</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{data.name}</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {data.email}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Mobile</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {data.mobile}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12">
                        <button
                          type="button"
                          class="btn btn-outline-primary mt-2"
                          onClick={() =>
                            redirect("/edit_admin_profile/" + data.id)
                          }
                        >
                          Edit
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

export default Admin_Profile;
