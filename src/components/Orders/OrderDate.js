import "./OrderDate.css";

const OrderDate = (props) => {
  const day = props.date.toLocaleString("es-CO", { day: "2-digit" });
  const month = props.date.toLocaleString("es-CO", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="order-date">
      <div className="order-date__month">{month}</div>
      <div className="order-date__day">{day}</div>
      <div className="order-date__year">{year}</div>
    </div>
  );
};

export default OrderDate;
