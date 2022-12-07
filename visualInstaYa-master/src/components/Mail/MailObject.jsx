import { useNavigate } from "react-router-dom";
import { useMails } from "/src/context/MailProvider.jsx";

function MailObject({ mail }) {
  const navigate = useNavigate();
  const { getMailContext } = useMails();
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 ">
        <button
          className="px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out justify-center"
          onClick={async () => {
            await getMailContext(mail.id);
            navigate("/mail/edit");
          }}
        >
          {mail.id}{" "}
        </button>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {mail.toDate.split("T")[0]}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {mail.toUser.address}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {mail.status}
      </td>
    </tr>
  );
}

export default MailObject;
