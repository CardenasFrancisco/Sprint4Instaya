import "./OrderUpdate.css";
import Card from "../UI/Card";
import { useParams } from "react-router-dom";
import OrderUpdateForm from "./OrderUpdateForm";

const DUMMY_ORDERS = [
  {
    id: "1",
    date: new Date("2022,02 ,16"),
    recipientName: "Fulanito De Tal",
    recipientCity: "Barranquilla",
    recipientAddress: "cra 01 no 23-45",
    status: "Cumplido",
  },
  {
    id: "2",
    date: new Date("2022,05,08"),
    recipientName: "Perencejito Pérez",
    recipientCity: "Cali",
    recipientAddress: "cra 01 no 23-45",
    status: "Cumplido",
  },
  {
    id: "3",
    date: new Date("2022,07,16"),
    recipientName: "Goku Son",
    recipientCity: "Bogotá",
    recipientAddress: "cra 01 no 23-45",
    status: "Cancelado",
  },
  {
    id: "4",
    date: new Date("2022,08,24"),
    recipientName: "Clark Kent",
    recipientCity: "Cartagena",
    recipientAddress: "cra 01 no 23-45",
    status: "Guardado",
  },
  {
    id: "5",
    date: new Date("2022,08,27"),
    recipientName: "Naruto Uzumaki",
    recipientCity: "Bucaramanga",
    recipientAddress: "cra 01 no 23-45",
    status: "Guardado",
  },
];

const OrderUpdate = () => {
  const params = useParams();
  console.log(params.orderID);

  const order = DUMMY_ORDERS.find((order) => order.id === params.orderID);
  if (!order) {
    return <p>No existen orden con id # {params.orderID}</p>;
  }
  return (
    <div className="order-update">
      <h2>Actualización de Órden #: {params.orderID}</h2>
      <h3></h3>
      <OrderUpdateForm
        id={order.id}
        date={order.date}
        recipientCity={order.recipientCity}
        recipientAddress={order.recipientAddress}
        status={order.status}
      />
    </div>
  );
};

export default OrderUpdate;
