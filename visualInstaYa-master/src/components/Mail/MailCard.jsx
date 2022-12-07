import { useEffect } from "react";
import MailObject from "./MailObject";
import MailTableThead from "./MailTableThead";
import { useMails } from "/src/context/MailProvider.jsx";

function MailCard() {
  const { mails, loadMails } = useMails();

  useEffect(() => {
    loadMails();
  }, []);

  function renderMain() {
    if (mails.length === 0) {
      return (
        <h2 className="mb-7 text-gray-50 text-center">❌ No hay paquetes</h2>
      );
    } else {
      return (
        <div className="rounded-lg border container mx-auto bg-[#DEE7E7] m-10">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-[#F4F7F5] border-b">
                      <tr>
                        <MailTableThead />
                      </tr>
                    </thead>
                    <tbody>
                      
                        {mails.map((mail) => (
                          <MailObject key={mail.id} mail={mail} />
                        ))}
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return <div>{renderMain()}</div>;
}

export default MailCard;
