import Home from "./Website/Pages/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Website/Pages/About";
import Products from "./Website/Pages/Products";
import Contact from "./Website/Pages/Contact";
import Blog from "./Website/Pages/Blog";
import PNF from "./Website/Pages/PNF";
import Sign_up from "./Website/Pages/Sign_up";
import User_Login from "./Website/Pages/User_Login";
import View_Shop from "./Website/Pages/View_Shop";
import View_Product from "./Website/Pages/View_Product";
import Profile from "./Website/Pages/Profile";
import Edit_Profile from "./Website/Pages/Edit_Profile";

// Admin_Side

import Dashboard from "./Admin/Pages/Dashboard";
import Add_Product from "./Admin/Pages/Add_Product";
import Manage_Product from "./Admin/Pages/Manage_Product";
import Add_Categories from "./Admin/Pages/Add_Categories";
import Manage_Categories from "./Admin/Pages/Manage_Categories";
import Manage_Contacts from "./Admin/Pages/Manage_Contacts";
import Manage_User from "./Admin/Pages/Manage_User";
import Add_Blog from "./Admin/Pages/Add_Blog";
import Admin_Login from "./Admin/Pages/Admin_Login";
import Admin_Profile from "./Admin/Pages/Admin_Profile";
import Edit_Admin_Profile from "./Admin/Pages/Edit_Admin_Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="*" element={<PNF />}></Route>
          <Route path="/sign_up" element={<Sign_up />}></Route>
          <Route path="/user_login" element={<User_Login />}></Route>
          <Route
            path="/view_shop/:cate_id"
            element={<View_Shop />}
          ></Route>
           
          <Route path="/view_product/:cate_id" element={<View_Product />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/edit_profile/:id" element={<Edit_Profile />}></Route>

          {
            // Admin_Side
          }

          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/add_product" element={<Add_Product />}></Route>
          <Route path="/manage_product" element={<Manage_Product />}></Route>
          <Route path="/add_category" element={<Add_Categories />}></Route>
          <Route
            path="/manage_category"
            element={<Manage_Categories />}
          ></Route>
          <Route path="/contacts" element={<Manage_Contacts />}></Route>
          <Route path="/manage_user" element={<Manage_User />}></Route>
          <Route path="/add_blog" element={<Add_Blog />}></Route>
          <Route path="/admin_login" element={<Admin_Login />}></Route>
          <Route path="/admin_profile" element={<Admin_Profile />}></Route>
          <Route
            path="/edit_admin_profile/:id"
            element={<Edit_Admin_Profile />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
