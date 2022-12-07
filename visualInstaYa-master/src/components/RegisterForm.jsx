import { Formik, Form } from "formik";
import { registerUser } from "../api/register.api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterForm() {
  const navigate = useNavigate();
  const showSuccess = () =>
    toast.success("Registro exitoso!", {
      position: toast.POSITION.TOP_CENTER,
    });

  const showError = (text) =>
    toast.error(text, { position: toast.POSITION.TOP_CENTER });

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          user: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            const response = await registerUser(values);
            console.log(response);
            showSuccess();
            setTimeout(() => {
              navigate("/");
            }, 2000);
          } catch (error) {
            const { message } = error.response.data;
            showError(message);
            console.log(error);
            actions.resetForm();
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
                    Registrarse
                  </h1>
                  <Form className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nombres y Apellidos
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        value={values.name}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Correo
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="user"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Usuario
                      </label>
                      <input
                        id="user"
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
                        id="password"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-500"
                    >
                      {isSubmitting ? "Registrando..." : "Registrar"}
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      ¿Ya tiene una cuenta?{" "}
                      <a
                        onClick={() => navigate("/")}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Ingrese aqui!
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

export default RegisterForm;
