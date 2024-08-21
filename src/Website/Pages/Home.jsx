import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
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
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/bs-brain@2.0.4/components/blogs/blog-4/assets/css/blog-4.css"
        />
      </Helmet>
      <Header />

      {/* Carousel */}
      <div style={{ marginTop: "100px" }}>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to={0}
              className="active"
            />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-110524-EMB-Z11-P1-Dennislingo-Broadstar-min50.jpg"
                alt="Los Angeles"
                className="d-block"
                style={{ width: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-110524-EMB-Z11-P5-Thedrystate-Rare-5090.jpg"
                alt="Chicago"
                className="d-block"
                style={{ width: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-110524-EMB-Z11-P3-snitch-min55.jpg"
                alt="New York"
                className="d-block"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </div>

      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-5">
                Get started with <span>Little</span> Fashion
              </h2>
            </div>
            <div className="col-lg-2 col-12 mt-auto mb-auto">
              <ul
                className="nav nav-pills mb-5 mx-auto justify-content-center align-items-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Introduction
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-youtube-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-youtube"
                    type="button"
                    role="tab"
                    aria-controls="pills-youtube"
                    aria-selected="true"
                  >
                    How we work?
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-skill-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-skill"
                    type="button"
                    role="tab"
                    aria-controls="pills-skill"
                    aria-selected="false"
                  >
                    Capabilites
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-10 col-12">
              <div className="tab-content mt-2" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <img
                        src="https://img.freepik.com/premium-photo/photo-online-fashion-shopping-with-laptop_575980-20273.jpg?size=626&ext=jpg&ga=GA1.1.1302686374.1715141436&semt=ais_user"
                        className="img-fluid"
                        alt
                      />
                    </div>
                    <div className="col-lg-5 col-12">
                      <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                        <h4 className="mb-3">
                          Good <span>Design</span> <br />
                          Ideas for <span>your</span> fashion
                        </h4>
                        <p>
                          Little Fashion is a platform for your shopping hub.
                          Here are all types and categories of clothes
                          available. So don't go anywhere Little Fashion is
                          here.
                        </p>
                        <p>
                          The right choise of your can bring you the right
                          benefits. Little Fashion is a best platform for earn
                          shopping benefits.
                        </p>
                        <div className="mt-2 mt-lg-auto">
                          <Link to="/about" className="custom-link mb-2">
                            Learn more about us
                            <i className="bi-arrow-right ms-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-youtube"
                  role="tabpanel"
                  aria-labelledby="pills-youtube-tab"
                >
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <div className="ratio ratio-16x9">
                        <iframe
                          src="https://www.youtube-nocookie.com/embed/f_7JqPDWhfw?controls=0"
                          title="YouTube video player"
                          frameBorder={0}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                    <div className="col-lg-5 col-12">
                      <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                        <h4 className="mb-3">Life at Studio</h4>
                        <p>
                          Over three years in business, We’ve had the chance to
                          work on a variety of projects, with companies
                        </p>
                        <p>Custom work is branding, web design, UI/UX design</p>
                        <div className="mt-2 mt-lg-auto">
                          <Link to="/contact" className="custom-link mb-2">
                            Work with us
                            <i className="bi-arrow-right ms-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-skill"
                  role="tabpanel"
                  aria-labelledby="pills-skill-tab"
                >
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <img
                        src="https://img.freepik.com/free-photo/shopping-online-consumerism-connection-sale-concept_53876-120951.jpg?t=st=1719053335~exp=1719056935~hmac=7109a1af8f69b239d225ac2dd00d36bdafbdeae4797f3cb11222d4e4aa6c3d6e&w=1060"
                        className="img-fluid"
                        alt
                      />
                    </div>
                    <div className="col-lg-5 col-12">
                      <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                        <h4 className="mb-3">What can help you?</h4>
                        <p>
                          Over three years in business, We’ve had the chance on
                          projects
                        </p>
                        <div className="skill-thumb mt-3">
                          <strong>Branding</strong>
                          <span className="float-end">90%</span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              role="progressbar"
                              aria-valuenow={90}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "90%" }}
                            />
                          </div>
                          <strong>Design &amp; Stragety</strong>
                          <span className="float-end">70%</span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              role="progressbar"
                              aria-valuenow={70}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "70%" }}
                            />
                          </div>
                          <strong>Online Platform</strong>
                          <span className="float-end">80%</span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              role="progressbar"
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                        <div className="mt-2 mt-lg-auto">
                          <Link to="/products" className="custom-link mb-2">
                            Explore products
                            <i className="bi-arrow-right ms-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="front-product">
        <div className="container-fluid p-0">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <img
                src="website/images/retail-shop-owner-mask-social-distancing-shopping.jpg"
                className="img-fluid"
                alt
              />
            </div>
            <div className="col-lg-6 col-12">
              <div className="px-5 py-5 py-lg-0">
                <h2 className="mb-4">
                  <span>Retail</span> shop owners
                </h2>
                <p className="lead mb-4">
                  Credits go to Unsplash and FreePik websites for images used in
                  this Little Fashion by Tooplate.
                </p>
                <Link to="/products" className="custom-link">
                  Explore Products
                  <i className="bi-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-product section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-5">All Categories</h2>
            </div>
            <div className="row">
              {data &&
                data.map((value, index) => {
                  return (
                    <div className="col-lg-4 col-12 mb-3">
                      <div className="product-thumb">
                        <div className="overflow-hidden bsb-overlay-hover" style={{border: "solid 3px grey"}}>
                          <Link
                            to={"/view_shop/" + value.id}
                            style={{
                              backgroundColor: "lightgrey",
                            }}
                          >
                            <img
                              src={value.cate_img}
                              className="product-image  bsb-hover-scale-up"
                              alt=""
                              width={"410px"}
                              height={"400px"}
                              style={{ objectFit: "cover" }}
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
                              to={"/view_shop/" + value.id}
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
    </div>
  );
}

export default Home;
