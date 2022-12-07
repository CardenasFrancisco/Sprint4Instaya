import "./OrderDestination.css";

const OrderDestination = (props) => {
  const recipientAddress = props.recipientAddress;
  const recipientCity = props.recipientCity;
  return (
    <div className="order-item__destination">
      <div className="order-item__address">{recipientAddress}</div>
      <div className="order-item__city">{recipientCity}</div>
    </div>
  );
};
export default OrderDestination;
