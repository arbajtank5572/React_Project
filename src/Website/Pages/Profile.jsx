import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
  const redirect = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("uid")) {
      redirect("/");
    } else {
      fetch();
    }
  }, []);

  const [data, setdata] = useState({});

  const fetch = async () => {
    const res = await axios.get(
      `http://localhost:3000/user/${localStorage.getItem("uid")}`
    );
    console.log(res.data);
    setdata(res.data);
  };
  return (
    <div>
      <Header />

      <section className="gift_section layout_padding-bottom mt-5">
        <div className="container mt-5">
          <div className="heading_container heading_center">
            <h2>My Profile</h2>
          </div>
          <div className="main-body">
            {/* /Breadcrumb */}
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={data.img}
                        alt="Admin"
                        width={180}
                        style={{ borderRadius: "10px" }}
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
                    <div className="row pb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">ID</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{data.id}</div>
                    </div>
                    <hr />
                    <div className="row  pb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{data.name}</div>
                    </div>
                    <hr />
                    <div className="row pb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {data.email}
                      </div>
                    </div>
                    <hr />
                    <div className="row pb-2">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Mobile</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {data.number}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12">
                        <a
                          className="btn btn-info "
                          target="__blank"
                          onClick={() => redirect("/Edit_Profile/" + data.id)}
                        >
                          Edit Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
