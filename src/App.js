import React, { Fragment, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import logo from "./logo.svg";
import { logo, password, user } from "./index.js";

import "./App.css";

import Header from "./components/Layout/Header";
import LoginItem from "./components/Login/LoginItem";
import RegisterUserItem from "./components/Register/RegisterUserItem";
import OrderItem from "./components/Orders/OrderItem";
import Orders from "./components/Orders/Orders";
import OrderUpdate from "./components/OrderUpdate/OrderUpdate.js";
import OrderRegister from "./components/OrderRegister/OrderRegister.js";
import NotFound from "./pages/NotFound.js";
// React Bootstrap
// import { Form, Button, Row, Col } from "react-bootstrap";
const DUMMY_ORDERS = [
  {
    id: "1",
    date: new Date("2022,02 ,16"),
    recipientCity: "Barranquilla",
    recipientAddress: "cra 01 no 23-45",
    status: "Cumplido",
  },
  {
    id: "2",
    date: new Date("2022,05,08"),
    recipientCity: "Cali",
    recipientAddress: "cra 01 no 23-45",
    status: "Cumplido",
  },
  {
    id: "3",
    date: new Date("2022,07,16"),
    recipientCity: "Bogotá",
    recipientAddress: "cra 01 no 23-45",
    status: "Cancelado",
  },
  {
    id: "4",
    date: new Date("2022,08,24"),
    recipientCity: "Cartagena",
    recipientAddress: "cra 01 no 23-45",
    status: "Guardado",
  },
  {
    id: "5",
    date: new Date("2022,08,27"),
    recipientCity: "Bucaramanga",
    recipientAddress: "cra 01 no 23-45",
    status: "Guardado",
  },
];

function App() {
  const [orders, setOrders] = useState(DUMMY_ORDERS);
  const addOrderHandler = (order) => {
    // console.log("In App.js"); // TODO Testing Only
    // console.log(order); // TODO Testing Only
    setOrders((prevOrders) => {
      return [order, ...prevOrders];
    }); // Spread Operator [order, ...orders] to update State
  }; // Retrieve data from children OrderRegister

  return (
    <div className="App">
      {/* Routes(before Switch) only one active route at a time*/}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<LoginItem />} />
        <Route path="/register-user" element={<RegisterUserItem />} />
        <Route path="/orders" element={<Orders items={orders} />} />
        {/* allows for /orders/:orderID to be read */}
        <Route path="/orders/:orderID" element={<OrderUpdate />} />
        <Route
          path="/create-order"
          element={<OrderRegister onAddOrder={addOrderHandler} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
