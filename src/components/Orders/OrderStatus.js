import "./OrderStatus.css";

const OrderStatus = (props) => {
  const status = props.status;
  if (status === "Cumplido") {
    return (
      <div className="order-status">
        <div className="order-item__status order-item__status-green">
          {status}
        </div>
      </div>
    );
  } else if (status === "Cancelado") {
    return (
      <div className="order-status">
        <div className="order-item__status order-item__status-black">
          {status}
        </div>
      </div>
    );
  } else if (status === "Guardado") {
    return (
      <div className="order-status">
        <div className="order-item__status">{status}</div>
      </div>
    );
  }
};

export default OrderStatus;
