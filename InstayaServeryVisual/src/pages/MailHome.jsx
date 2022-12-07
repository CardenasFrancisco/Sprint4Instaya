import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MailCard from "../components/Mail/MailCard";
import { useNavigate } from "react-router-dom";
import { useMails } from "../context/MailProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MailHome() {
  const location = useLocation();
  const navigate = useNavigate();
  const { loadMails, mails } = useMails();
  const showError = (text) =>
    toast.error(text, {
      position: toast.POSITION.TOP_CENTER,
    });

  useEffect(() => {
    loadMails();
  }, []);

  return (
    <section className="bg-orange-600">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 className="text-2xl font-normal leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray text-center mb-10">
          {" "}
          Gestión de paquetes{" "}
        </h1>
        <div className="flex items-center justify-center">
          <MailCard />
        </div>
        <button
           className="px-6 py-2 border-2 border-gray-900 text-gray-900 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out justify-center"
          onClick={() => {
            navigate("/mail/new");
          }}
        >
          Enviar nuevo paquete
        </button>
      </div>
      <ToastContainer />
    </section>
  );
}

export default MailHome;
