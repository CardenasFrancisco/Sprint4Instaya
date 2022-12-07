function MailTableThead() {
  return (
    <>
      <th
        scope="col"
        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
      >
        Id
      </th>
      <th
        scope="col"
        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
      >
        Fecha
      </th>
      <th
        scope="col"
        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
      >
        Direccion de Entrega
      </th>
      <th
        scope="col"
        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
      >
        Estado
      </th>
    </>
  );
}

export default MailTableThead;
