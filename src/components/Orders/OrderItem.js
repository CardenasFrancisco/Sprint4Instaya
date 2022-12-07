import Card from "../UI/Card";
import OrderDate from "./OrderDate";
import OrderDestination from "./OrderDestination";
import OrderStatus from "./OrderStatus";
import "./OrderItem.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderItem = (props) => {
  return (
    // <Card className="order-item">
    <div className="order-item">
      <Link className="btn order-item__id" to={`/orders/${props.id}`}>
        {/* NOTE this ` are backticks. not ' single quotations */}
        {props.id}
      </Link>
      <OrderDate date={props.date} />
      <OrderDestination
        recipientAddress={props.recipientAddress}
        recipientCity={props.recipientCity}
      />
      <OrderStatus status={props.status} />
    </div>
    // </Card>
  );
};

export default OrderItem;
