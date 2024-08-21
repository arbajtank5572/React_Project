import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Button.css";
import { toast } from "react-toastify";

function View_Product() {
  useEffect(() => {
    fetch();
  }, []);

  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const { cate_id } = useParams();
  const [data, setData] = useState([]);
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/product?id=${cate_id}`);
    console.log(res.data);
    setData(res.data);
  };

  return (
    <div>
      <Header />
      <div
        style={{ backgroundColor: "#e2e8f0", width: "100%" }}
        className="mt-5"
      >
        <div class="container py-5">
          {data &&
            data.map((value, index) => {
              return (
                <div class="row px-xl-5 " key={index}>
                  <div className="col-lg-5 pb-5">
                    <div
                      id="product-carousel"
                      class="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner mt-4">
                        <div className="carousel-item active">
                          <img
                            class="w-100 "
                            src={value.img}
                            alt="Image"
                            style={{ height: "550px", objectFit: "contain" }}
                          />
                        </div>
                        <div className="carousel-item ">
                          <img
                            className="w-100"
                            src={value.img_2}
                            alt="Image"
                            style={{ height: "550px", objectFit: "contain" }}
                          />
                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#product-carousel"
                        data-slide="prev"
                      >
                        <i class="fa fa-2x fa-angle-left text-dark"></i>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#product-carousel"
                        data-slide="next"
                      >
                        <i className="fa fa-2x fa-angle-right text-dark"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-7 pb-5 mt-4">
                    <h3 className="font-weight-semi-bold">
                      {value.product_name}
                    </h3>
                    <div className="d-flex mb-3">
                      <div className="text-dark mr-2">
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star-half-alt"></small>
                        <small className="far fa-star"></small>
                      </div>
                      <small className="pt-1">(50 Reviews)</small>
                    </div>
                    <h3 class="font-weight-semi-bold mb-4">${value.price}</h3>
                    <p class="mb-4">
                      Volup erat ipsum diam elitr rebum et dolor. Est nonumy
                      elitr erat diam stet sit clita ea. Sanc invidunt ipsum et,
                      labore clita lorem magna lorem ut. Erat lorem duo dolor no
                      sea nonumy. Accus labore stet, est lorem sit diam sea et
                      justo, amet at lorem et eirmod ipsum diam et rebum kasd
                      rebum.
                    </p>

                    <div className="d-flex mb-3">
                      <p className="text-dark font-weight-medium mb-0 me-2">
                        Sizes:
                      </p>
                      <form>
                        <div className="d-flex mt-1">
                          <div className="custom-control custom-radio custom-control-inline me-2">
                            <input
                              type="radio"
                              class="custom-control-input"
                              id="size-1"
                              name="size"
                              value="XS"
                            />
                            <label
                              className="custom-control-label"
                              for="size-1"
                            >
                              XS
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline me-2">
                            <input
                              type="radio"
                              class="custom-control-input"
                              id="size-2"
                              name="size"
                              value="S"
                            />
                            <label
                              className="custom-control-label"
                              for="size-2"
                            >
                              S
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline me-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="size-3"
                              name="size"
                              value="M"
                            />
                            <label
                              className="custom-control-label"
                              for="size-3"
                            >
                              M
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline me-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="size-4"
                              name="size"
                              value="L"
                            />
                            <label
                              className="custom-control-label"
                              for="size-4"
                            >
                              L
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline me-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="size-5"
                              name="size"
                              value="XL"
                            />
                            <label
                              className="custom-control-label"
                              for="size-5"
                            >
                              XL
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="d-flex mb-4">
                      <p className="text-dark font-weight-medium mb-0 me-2">
                        Colors:
                      </p>
                      <form>
                        <div className="d-flex mt-1">
                          <div class="custom-control custom-radio custom-control-inline me-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="color-1"
                              name="color"
                              value="Black"
                            />
                            <label
                              className="custom-control-label"
                              for="color-1"
                            >
                              Black
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline me-2">
                            <input
                              type="radio"
                              class="custom-control-input"
                              id="color-2"
                              name="color"
                              value="White"
                            />
                            <label
                              className="custom-control-label"
                              for="color-2"
                            >
                              White
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline me-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="color-3"
                              name="color"
                              value="Red"
                            />
                            <label
                              className="custom-control-label"
                              for="color-3"
                            >
                              Red
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline me-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="color-4"
                              name="color"
                              value="Blue"
                            />
                            <label
                              className="custom-control-label"
                              for="color-4"
                            >
                              Blue
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline me-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="color-5"
                              name="color"
                              value="Green"
                            />
                            <label
                              className="custom-control-label"
                              for="color-5"
                            >
                              Green
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="d-flex align-items-center mb-4 pt-2">
                      <div
                        className="input-group quantity mr-3"
                        style={{ width: "130px" }}
                      >
                        <div className="input-group-btn me-2">
                          <button className="btn btn-dark btn-minus" onClick={handleDecrease}>
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                        <button
                          type="text"
                          className="form-control bg-secondary text-center me-2"
                        >
                          {count}
                        </button>
                        <div className="input-group-btn me-2">
                          <button
                            className="btn btn-dark btn-plus"
                            onClick={handleIncrease}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <Link to={"Javascript:void(0)"}>
                        <button className="btn btn-dark px-3">
                          <i className="fa fa-shopping-cart mr-1"></i> Add To
                          Cart
                        </button>
                      </Link>
                    </div>
                    <div className="d-flex justify-content-between  flex-wrap text-center mt-5 ">
                      <div>
                        <img
                          src="https://images.apollo247.in/images/ui_revamp_secure_payment_widget.svg?tr=w-160,q-60,f-webp,dpr-1.25,c-at_max"
                          alt=""
                        />
                        <p className="mt-2" style={{ color: "#106c89" }}>
                          Secure Payment
                        </p>
                      </div>
                      <div>
                        <img
                          src="https://images.apollo247.in/images/ui_revamp_fullyreliable_widget.svg?tr=w-160,q-60,f-webp,dpr-1.25,c-at_max  "
                          alt=""
                        />
                        <p className="mt-2 vw" style={{ color: "#106c89" }}>
                          Trusted by 8 Crore Indians
                        </p>
                      </div>
                      <div>
                        <img
                          src="https://images.apollo247.in/images/ui_revamp_fullyreliable_widget.svg?tr=w-160,q-60,f-webp,dpr-1.25,c-at_max"
                          alt=""
                        />
                        <p className="mt-2" style={{ color: "#106c89" }}>
                          Genuine Products
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default View_Product;
