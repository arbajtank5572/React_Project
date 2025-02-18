import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Blog() {
  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/blog`);
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
      <header class="site-header section-padding d-flex justify-content-center align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-12">
              <div>
                <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <span class="text-primary">Blog</span>
                  <span class="text-dark">Page</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="bsb-blog-5 py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="display-5 mb-4 mb-md-5 text-center">
                Latest Articles
              </h2>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
        <div className="container overflow-hidden">
          <div className="row gy-4 gy-md-5 gx-xl-6 gy-xl-6 gx-xxl-9 gy-xxl-9">
            {data &&
              data.map((value) => {
                return (
                  <div className="col-12 col-lg-4">
                    <article>
                      <div className="card border-0 bg-transparent">
                        <figure className="card-img-top mb-4 overflow-hidden bsb-overlay-hover">
                          <Link to="javascript:void(0)">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={value.blog_img}
                              alt="Living"
                            />
                          </Link>
                          <figcaption>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
                              fill="currentColor"
                              className="bi bi-eye text-white bsb-hover-fadeInLeft"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>
                        <div className="card-body m-0 p-0">
                          <div className="entry-header mb-3">
                            <ul className="entry-meta list-unstyled d-flex mb-3">
                              <li>
                                <Link
                                  className="d-inline-flex px-2 py-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7"
                                  to="javascript:void(0)"
                                >
                                  {value.blog_title}
                                </Link>
                              </li>
                            </ul>
                            <h2 className="card-title entry-title h4 m-0">
                              <Link
                                className="link-dark text-decoration-none"
                                to="javascript:void(0)"
                              >
                                {value.description}
                              </Link>
                            </h2>
                          </div>
                        </div>
                        <div className="card-footer border-0 bg-transparent p-0 m-0">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <Link
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                to="javascript:void(0)"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={14}
                                  height={14}
                                  fill="currentColor"
                                  className="bi bi-calendar3"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                <span className="ms-2 fs-7">
                                  {value.blog_date}
                                </span>
                              </Link>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <Link
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                to="javascript:void(0)"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={14}
                                  height={14}
                                  fill="currentColor"
                                  className="bi bi-chat-dots"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                </svg>
                                <span className="ms-2 fs-7">383</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <button className="btn bsb-btn-2xl btn-primary rounded-pill mt-5 mt-xl-10">
                All Articles
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
