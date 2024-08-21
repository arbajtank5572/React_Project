import React from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import "./Drop_down.css";

function Side_Bar() {
  return (
    <div className="sidebar pe-4 pb-3">
      <nav className="navbar bg-light navbar-light">
        <Link to="/dashboard" className="navbar-brand mx-4 mb-3">
          <h3 className="text-primary">
            <i className="fa fa-hashtag me-2" />
            DASHMIN
          </h3>
        </Link>
        <div className="d-flex align-items-center ms-4 mb-4">
          {(() => {
            if (localStorage.getItem("admin_uid")) {
              return (
                <>
                  <div className="position-relative">
                    <img
                      className="rounded-circle"
                      src={localStorage.getItem("admin_uimg")}
                      alt
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0">
                      {localStorage.getItem("admin_uname")}
                    </h6>
                    <span>Admin</span>
                  </div>
                </>
              );
            }
          })()}
        </div>
        <div className="navbar-nav w-100">
          <Link to="/dashboard" className="nav-item nav-link active">
            <i className="fa fa-tachometer-alt me-2" />
            Dashboard
          </Link>
          <div class="dropdown">
            <input type="checkbox" id="dropdown-toggle" />
            <label for="dropdown-toggle" class="dropdown-label">
              <i className="fa fa-laptop me-2" style={{ marginLeft: "10px" }} />{" "}
              Categories
              <i
                class="fa-solid fa-chevron-down"
                style={{ paddingLeft: "40px", fontSize: "14px" }}
              ></i>
            </label>
            <div class="dropdown-content bg-transparent border-0  dropdown-menu">
              <Link to="/add_category" className="dropdown-item">
                Add Category
              </Link>
              <Link to="/manage_category" className="dropdown-item">
                Manage Category
              </Link>
            </div>
          </div>
          <div class="dropdown-new">
            <input type="checkbox" id="dropdown-new-toggle" />
            <label for="dropdown-new-toggle" class="dropdown-new-label">
              <i className="fa fa-laptop me-2" style={{ marginLeft: "10px" }} />{" "}
              Products
              <i
                class="fa-solid fa-chevron-down"
                style={{ paddingLeft: "40px", fontSize: "14px" }}
              ></i>
            </label>
            <div class="dropdown-new-content bg-transparent border-0 dropdown-menu">
              <Link to="/add_product" className="dropdown-item">
                Add Product
              </Link>
              <Link to="/manage_product" className="dropdown-item">
                Manage Product
              </Link>
            </div>
          </div>
          <Link to="/contacts" className="nav-item nav-link">
            <i className="fa fa-th me-2" />
            Contacts
          </Link>
          <Link to="/Manage_User" className="nav-item nav-link">
            <i className="fa fa-table me-2" />
            Manage User
          </Link>
          <Link to="/add_blog" className="nav-item nav-link">
            <i className="fa fa-chart-bar me-2" />
            Add_Blog
          </Link>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="far fa-file-alt me-2" />
              Pages
            </a>
            <div className="dropdown-menu bg-transparent border-0">
              <Link to="/admin_login" className="dropdown-item">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Helmet>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="/admin/js/main.js"></script>
      </Helmet>
      <Helmet>
        <link href="/admin/css/bootstrap.min.css" rel="stylesheet" />
      </Helmet>
    </div>
  );
}

export default Side_Bar;
