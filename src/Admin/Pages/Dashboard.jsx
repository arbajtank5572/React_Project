import React, { useEffect } from "react";
import Side_Bar from "../Component/Side_Bar";
import Header from "../Component/Header";
import { useNavigate } from "react-router";

function Dashboard() {
  const redirect = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admin_uid")) {
      redirect("/admin_Login");
    }
  });
  return (
    <div class="container-xxl position-relative bg-white d-flex p-0">
      <Side_Bar />
      <div className="content">
        <Header />
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-6 col-xl-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-line fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2">Today Sale</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-bar fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2">Total Sale</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-area fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2">Today Revenue</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-pie fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2">Total Revenue</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid pt-4 px-4">
          <div className="bg-light text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="mb-0">Recent Salse</h6>
              <a href>Show All</a>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-dark text-center">
                    <th scope="col">Image</th>
                    <th scope="col">Customer_Name</th>
                    <th scope="col">Total Order</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">More Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td
                      style={{ maxWidth: "fit-content", textAlign: "center" }}
                    >
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.XwQl1fgL8Sj_byE6Ca2xNQHaJQ&pid=Api&P=0&h=180"
                        alt=""
                        width={50}
                        style={{ borderRadius: "50%" }}
                      />
                    </td>
                    <td>Richard Shotwell</td>
                    <td>50</td>
                    <td>75,000</td>
                    <td>Paid</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href>
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td
                      style={{ maxWidth: "fit-content", textAlign: "center" }}
                    >
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.-SAzaYZAT7-nCc7Y0XXvMQHaMQ&pid=Api&P=0&h=180"
                        alt=""
                        width={50}
                        height={60}
                        style={{ borderRadius: "50%" }}
                      />
                    </td>
                    <td>Nicolas Kim </td>
                    <td>42</td>
                    <td>60,000</td>
                    <td>Paid</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href>
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td
                      style={{ maxWidth: "fit-content", textAlign: "center" }}
                    >
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.1O0gEatuyr40CQJlOT6Q_QHaJj&pid=Api&P=0&h=180"
                        alt=""
                        width={50}
                        style={{ borderRadius: "50%" }}
                      />
                    </td>
                    <td>Austin Rechard</td>
                    <td>35</td>
                    <td>55,000</td>
                    <td>Paid</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href>
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td
                      style={{ maxWidth: "fit-content", textAlign: "center" }}
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinYE4d1ZBRv5VyhsGNEaXIm8CkjEhSF3Hug&s"
                        alt=""
                        width={50}
                        style={{ borderRadius: "50%" }}
                      />
                    </td>
                    <td>Daniel Zuchnik</td>
                    <td>20</td>
                    <td>40,000</td>
                    <td>Paid</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href>
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td
                      style={{ maxWidth: "fit-content", textAlign: "center" }}
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBq5tsQ71ZJnfI73wMpQe1eRwtsb-cNnwwTQ&s"
                        alt=""
                        height={60}
                        width={60}
                        style={{ borderRadius: "50%" }}
                      />
                    </td>
                    <td>Amy Harris</td>
                    <td>18</td>
                    <td>35,000</td>
                    <td>Paid</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href>
                        Detail
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
