import { Route, Routes } from "react-router-dom";
import NotFoundPages from "./pages/NotFoundPages";
import MailHome from "./pages/MailHome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MailForm from "./components/Mail/MailForm";
import { MailContextProvider } from "./context/MailProvider";
import MailCard from "./components/Mail/MailCard";

function App() {
  return (
    <>
      <MailContextProvider>
        <Routes>
          <Route path="*" element={<NotFoundPages />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/mail" element={<MailHome />} />
          <Route path="/mail/new" element={<MailForm type={"new"} />} />
          <Route path="/mail/edit" element={<MailForm type={"edit"} />} />
          <Route path="/nonName" element={<MailCard />} />
        </Routes>
      </MailContextProvider>
    </>
  );
}

export default App;
