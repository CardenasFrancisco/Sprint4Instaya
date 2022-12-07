import { useContext, useState } from "react";
import { MailContext } from "./MailContext";
import { getMails, getMail } from "../api/mail.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

export const useMails = () => {
  const context = useContext(MailContext);
  if (context === undefined) {
    throw new Error("useMails must be used within a MailProvider");
  }
  return context;
};

export const MailContextProvider = ({ children }) => {
  const [mails, setMails] = useState([]);
  const [mail, setMail] = useState({
    toDate: new Date(),
    package: {
      dimensions: { high: 0, width: 0, length: 0 },
      weigth: 0,
      fragile: false,
    },
    toUser: {
      nameToUser: "",
      dniToUser: "",
      addressToUser: "",
      cityToUser: "",
    },
    fromUser: { nameFromUser: "", addressFromUser: "", cityFromUser: "" },
    status: "Guardado",
  });
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const showError = (text) =>
    toast.error(text, {
      position: toast.POSITION.TOP_CENTER,
    });

  const loadMails = async () => {
    try {
      const response = await getMails(token, name);
      setMails(response.data);
    } catch (error) {
      //if (error.response.status === 403) setError(error.response.message);
      navigate("/");
      if (error.response.status === 403) alert("Inicie sesión nuevamente");
      console.error(error.message);
    }
  };

  const getMailContext = async (id) => {
    try {
      console.log(id);
      const response = await getMail(token, id);
      setMail(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (error !== "") showError(error);

  return (
    <div>
      <MailContext.Provider
        value={{
          mails,
          mail,
          token,
          loadMails,
          getMailContext,
          setToken,
          setName,
          setMail
        }}
      >
        {children}
      </MailContext.Provider>
      {/* {ErrorMessage()} */}
      <ToastContainer />
    </div>
  );
};
