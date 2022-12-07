import OrderItem from "./OrderItem";
import Card from "../UI/Card";
import "./Orders.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Orders = (props) => {
  const createOrderHandler = () => {
    console.log("Click Crear Orden");
  };
  return (
    <div className="orders">
      <h2>Listado de Órdenes</h2>
      <Link
        variant="link"
        className="orders__button-create"
        onClick={createOrderHandler}
        to="../create-order/"
      >
        Crear Orden
      </Link>

      {props.items.map((order) => (
        <OrderItem
          key={order.id}
          id={order.id}
          date={order.date}
          recipientCity={order.recipientCity}
          recipientAddress={order.recipientAddress}
          status={order.status}
        />
      ))}
      {/* <OrderItem
        id={props.items[0].id}
        date={props.items[0].date}
        city={props.items[0].city}
        address={props.items[0].address}
        status={props.items[0].status}
      />
      <OrderItem
        id={props.items[1].id}
        date={props.items[1].date}
        city={props.items[1].city}
        address={props.items[1].address}
        status={props.items[1].status}
      />
      <OrderItem
        id={props.items[2].id}
        date={props.items[2].date}
        city={props.items[2].city}
        address={props.items[2].address}
        status={props.items[2].status}
      />
      <OrderItem
        id={props.items[3].id}
        date={props.items[3].date}
        city={props.items[3].city}
        address={props.items[3].address}
        status={props.items[3].status}
      />
      <OrderItem
        id={props.items[4].id}
        date={props.items[4].date}
        city={props.items[4].city}
        address={props.items[4].address}
        status={props.items[4].status}
      /> */}
    </div>
  );
};
export default Orders;
