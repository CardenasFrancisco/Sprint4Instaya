import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";
import { loginUser } from "../api/login.api";
import { useNavigate } from "react-router-dom";
import { useMails } from "../context/MailProvider";

function LoginForm() {
  const navigate = useNavigate();

  const { setToken, setName } = useMails();

  const showSuccess = () =>
    toast.success("Login exitoso!", {
      position: toast.POSITION.TOP_CENTER,
    });

  const showError = () =>
    toast.error("Usuario o constraseña incorrectos!", {
      position: toast.POSITION.TOP_CENTER,
    });

  return (
    <div>
      <Formik
        initialValues={{ user: "", password: "" }}
        onSubmit={async (values, actions) => {
          try {
            const response = await loginUser(values);
            showSuccess();
            setToken(response.data.token);
            setName(response.data.actualUser.name);
            setTimeout(() => {
              navigate("/mail");
            }, 2000);
          } catch (error) {
            showError();
            actions.resetForm();
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting, values }) => (
          <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <a
                href="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                <img
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="logo"
                  className="w-8 h-8 mr-2"
                />
                Insta Ya
              </a>
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                    Iniciar sesión
                  </h1>
                  <Form className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="user"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Usuario
                      </label>
                      <input
                        type="text"
                        name="user"
                        onChange={handleChange}
                        value={values.user}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Contraseña
                      </label>
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-orange-500"
                    >
                      {isSubmitting ? "Ingresando..." : "Ingresar"}
                    </button>

                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      ¿No tienes una cuenta?
                      <a
                        onClick={() => navigate("/register")}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        &ensp;Registrate!
                      </a>
                    </p>
                    <ToastContainer />
                  </Form>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
