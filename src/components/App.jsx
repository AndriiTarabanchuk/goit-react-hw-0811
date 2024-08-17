import { useEffect, useState } from "react";
import css from "./App.module.css";
import { Route, Routes } from "react-router";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Contacts from "../pages/Contacts/Contacts";
import { fetchContacts } from "../redux/contactsOps";
import { useDispatch } from "react-redux";

function App() {
  return (
    <div className={css.root}>
      <h1 className={css.visualliHidden}>Book of contacts</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
