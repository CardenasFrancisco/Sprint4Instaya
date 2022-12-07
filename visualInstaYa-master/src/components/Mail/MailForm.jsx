import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMails } from "../../context/MailProvider";
import { addMail, updateMail } from "../../api/mail.api";

function MailForm({ type }) {
  const navigate = useNavigate();

  const { mail, token, setMail } = useMails();

  function convertFormat(values) {
    console.log(values);
    const {
      toDate,
      width,
      high,
      length,
      weigth,
      fragile,
      nameToUser,
      dniToUser,
      addressToUser,
      cityToUser,
      nameFromUser,
      addressFromUser,
      cityFromUser,
      status,
    } = values;

    const data = {
      toDate: new Date(toDate),
      package: {
        dimensions: {
          high,
          width,
          length,
        },
        weigth,
        fragile: fragile === "Si" ? true : false,
      },
      toUser: {
        name: nameToUser,
        dni: dniToUser,
        address: addressToUser,
        city: cityToUser,
      },
      fromUser: {
        name: nameFromUser,
        address: addressFromUser,
        city: cityFromUser,
      },
      status,
    };
    return data;
  }

  const dateFormat = (date) => {
    if (typeof date === "string") {
      const dateArray = date.split("-");
      return `${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`;
    } else {
      return date.toISOString().split("T")[0];
    }
  };

  const showSuccess = (text) =>
    toast.success(text, {
      position: toast.POSITION.TOP_CENTER,
    });

  const showError = (text) =>
    toast.error(text, {
      position: toast.POSITION.TOP_CENTER,
    });

  const newSubmit = async (data) => {
    try {
      const response = await addMail(token, data);
      showSuccess("Paquete enviado!");
      setTimeout(() => {
        navigate("/mail");
      }, 2000);
    } catch (error) {
      showError(error.response.data.message);
      console.error(error);
    }
  };

  const editSubmit = async (data) => {
    try {
      const response = await updateMail(token, data);
      showSuccess("Paquete actualizado!");
      setTimeout(() => {
        navigate("/mail");
      }, 2000);
    } catch (error) {
      const { message } = error.response.data;
      showError(message);
      console.error(message);
    }
  };

  return (
    <div>
      <Formik
        initialValues={mail}
        onSubmit={async (values) => {
          console.log(values);
          const data = convertFormat(values);
          console.log(data);
          if (type === "new") {
            await newSubmit(data);
          } else {
            await editSubmit(data);
          }
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting, values }) => (
          <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px- py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-4">
                  <Form className="space-y-4 md:space-y-6 columns-3">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Fecha de entrega
                      </label>
                      <input
                        type="date"
                        name="toDate"
                        onChange={handleChange}
                        onSubmit={handleChange}
                        defaultValue={dateFormat(values.toDate)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Alto (cm)
                      </label>
                      <input
                        type="number"
                        name="high"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        defaultValue={values.package.dimensions.high}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Ancho (cm)
                      </label>
                      <input
                        type="number"
                        name="width"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        defaultValue={values.package.dimensions.width}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Largo (cm)
                      </label>
                      <input
                        type="number"
                        name="length"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        defaultValue={values.package.dimensions.length}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Peso (Gramos)
                      </label>
                      <input
                        type="number"
                        name="weigth"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        defaultValue={values.package.weigth}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="isFragile"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        ¿Es frágil?
                      </label>
                      <select
                        name="fragile"
                        id="isFragile"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        defaultValue={values.package.fragile == true ? "Si" : "No"}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value={true}>Si</option>
                        <option value={false}>No</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Nombre del destinatario
                      </label>
                      <input
                        type="text"
                        name="nameToUser"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        defaultValue={values.toUser.name}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        DNI del destinatario
                      </label>
                      <input
                        type="text"
                        name="dniToUser"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        defaultValue={values.toUser.dni}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Dirección del destinatario
                      </label>
                      <input
                        type="text"
                        name="addressToUser"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        defaultValue={values.toUser.address}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Ciudad del destinatario
                      </label>
                      <input
                        type="text"
                        name="cityToUser"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        defaultValue={values.toUser.city}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Nombre del remitente
                      </label>
                      <input
                        type="text"
                        name="nameFromUser"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        defaultValue={values.fromUser.name}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Dirección del remitente
                      </label>
                      <input
                        type="text"
                        name="addressFromUser"
                        onSubmit={handleSubmit}
                        onChange={handleChange}
                        defaultValue={values.fromUser.address}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Ciudad del remitente
                      </label>
                      <input
                        type="text"
                        name="cityFromUser"
                        onSubmit={handleSubmit}
                        onChange={handleChange}
                        defaultValue={values.fromUser.city}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <ToastContainer />
                  </Form>
                  <div>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-full"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </div>
  );
}

export default MailForm;
