import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Products() {
  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data);
  };

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/bs-brain@2.0.4/components/blogs/blog-4/assets/css/blog-4.css"
        />
      </Helmet>

      <Header />

      <header className="site-header section-padding d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12">
              <h1>
                <span className="d-block text-primary">Choose your</span>
                <span className="d-block text-dark">favorite stuffs</span>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section className="products section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-5">New Arrivals</h2>
            </div>

            <div className="row">
              {data &&
                data.map((value) => {
                  return (
                    <div className="col-lg-4 col-12 mb-3">
                      <div className="product-thumb ">
                        <div className="overflow-hidden bsb-overlay-hover">
                          <Link
                            to={"/View_Product/" + value.id}
                            style={{
                              backgroundColor: "lightgrey",
                            }}
                          >
                            <img
                              src={value.cate_img}
                              className="product-image bsb-hover-scale-up"
                              alt=""
                              width={"410px"}
                              height={"400px"}
                            />
                          </Link>
                        </div>

                        <div className="product-top d-flex">
                          <span className="product-alert me-auto">
                            New Arrival
                          </span>
                          <a href="#" className="bi-heart-fill"></a>
                        </div>

                        <div className="product-info">
                          <h5 className="product-title mb-0" style={{textAlign:"center"}}>
                            <Link
                              to={"/View_Product/" + value.id}
                              className="product-title-link"
                            >
                              {value.cate_name}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Products;
