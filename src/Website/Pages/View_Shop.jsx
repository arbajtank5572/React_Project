import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./Button.css";

function View_Product() {
  useEffect(() => {
    fetch();
  }, []);

  const { cate_id } = useParams();
  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(
      `http://localhost:3000/product?cate_id=${cate_id}`
    );
    console.log(res.data);
    setData(res.data);
  };

  return (
    <div>
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
                data.map((value, index) => {
                  return (
                    <div className="col-md-3 col-sm-6">
                      <Link to={"/view_shop/" + value.id}>
                        <div className="product-grid">
                          <div className="product-image">
                            <Link to={"/view_product/" + value.id} className="image">
                              <div>
                                <img
                                  className="pic-1"
                                  src={value.img}
                                  style={{ height: "360px" }}
                                />
                                <img
                                  className="pic-2"
                                  src={value.img_2}
                                  style={{ height: "360px" }}
                                />
                              </div>
                            </Link>
                            <ul className="product-links">
                              <li>
                                <a href="#">
                                  <i className="far fa-heart" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-random" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-search" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-content mb-4">
                            <ul className="rating">
                              <li className="fa fa-star" />
                              <li className="fa fa-star" />
                              <li className="fa fa-star" />
                              <li className="fa fa-star" />
                              <li className="far fa-star" />
                            </ul>
                            <h3 className="title product_name">
                              {value.product_name}
                            </h3>
                            <div className="price">${value.price}</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default View_Product;
