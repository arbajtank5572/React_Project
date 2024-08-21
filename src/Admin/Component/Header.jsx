import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Header() {
  const redirect = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admin_uid")) {
      redirect("/admin_Login");
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

  const adminlogout = () => {
    localStorage.removeItem("admin_uid");
    localStorage.removeItem("admin_uname");
    toast.success("Logout Success");
    redirect("/admin_login");
    return false;
  };
  return (
    <>
      <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
        <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
          <h2 className="text-primary mb-0">
            <i className="fa fa-hashtag" />
          </h2>
        </a>
        <a href="javascript:void(0)" className="sidebar-toggler flex-shrink-0">
          <i className="fa fa-bars" />
        </a>
        <div className="navbar-nav align-items-center ms-auto">
          <div className="nav-item dropdown">
            {(() => {
              if (localStorage.getItem("admin_uid")) {
                return (
                  <>
                    <div class="dropdown-new-01">
                      <input type="checkbox" id="dropdown-new-01-toggle" />
                      <label
                        for="dropdown-new-01-toggle"
                        class="dropdown-new-01-label"
                      >
                        <img
                          className="rounded-circle me-lg-2"
                          src={localStorage.getItem("admin_uimg")}
                          alt
                          style={{ width: 40, height: 40 }}
                        />
                        <span className="d-none d-lg-inline-flex">
                          {localStorage.getItem("admin_uname")}
                        </span>
                        <i
                          class="fa-solid fa-caret-down"
                          style={{ paddingLeft: "10px" }}
                        ></i>
                      </label>
                      <div class="dropdown-new-01-content dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                        <Link to="/admin_profile" className="dropdown-item">
                          My Profile
                        </Link>
                        <button
                          className="dropdown-item"
                          onClick={() =>
                            redirect("/edit_admin_profile/" + data.id)
                          }
                        >
                          Edit Profile
                        </button>
                        <a
                          href="javascript:void(0)"
                          className="dropdown-item"
                          onClick={adminlogout}
                        >
                          Log Out
                        </a>
                      </div>
                    </div>
                  </>
                );
              } else {
                return (
                  <Link to="/admin_login">
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-fw"
                    >
                      <span style={{ fontSize: "15px" }}>
                        <i class="fa-solid fa-user-lock me-2"></i>
                        Login
                      </span>
                    </button>
                  </Link>
                );
              }
            })()}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
