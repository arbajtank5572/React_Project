import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function PNF() {
  return (
    <div>
      <Header />
      <div class="container mt-3">
        <div class>
          <div class="col-sm-12">
            <br />
            <br />
            <br />
            <br />
            <h2 align="center">Page Not Found </h2>
            <p align="center">Here is a error 404 we cant find the solution</p>
            <div class="spinner-border"></div> <br /> <br />
            <button class="btn btn-danger">
              {" "}
              <Link to="/" style={{ color: "black" }}>
                Back
              </Link>
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PNF;
