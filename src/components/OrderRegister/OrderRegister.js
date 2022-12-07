import "./OrderRegister.css";
import Card from "../UI/Card.js";
import OrderRegisterForm from "./OrderRegisterForm";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const OrderRegister = (props) => {
  const saveOrderDataHandler = (enteredOrderData) => {
    const orderData = {
      ...enteredOrderData,
      // id: Math.random().toString(), // TODO Random Id generating. Needs another method
      id: getRandomInt(10, 999),
      status: "Guardado",
    };
    // console.log(orderData); // TODO 
    props.onAddOrder(orderData);
  };

  return (
    <div className="order-register">
      <h2>Registro de Órden</h2>
      <OrderRegisterForm onSaveOrderData={saveOrderDataHandler} />
    </div>
  );
};

export default OrderRegister;
