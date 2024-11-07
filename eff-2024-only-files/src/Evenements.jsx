function Evenements({ Data , index}) {
  let total = 0;
  return (
    <>
            <div className="my-10 bg-blue-400">
              <table className="min-w-full border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border border-gray-200">Theme</th>
                    <th className="px-4 py-2 border border-gray-200">
                      Date de debut
                    </th>
                    <th className="px-4 py-2 border border-gray-200">
                      Date de fin
                    </th>
                    <th className="px-4 py-2 border border-gray-200">
                      Description
                    </th>
                    <th className="px-4 py-2 border border-gray-200">
                      Cout journalier
                    </th>
                    <th className="px-4 py-2 border border-gray-200">Duree</th>
                    <th className="px-4 py-2 border border-gray-200">
                      Cout Total Evenement
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Data[index].evenements.map(function (item, index) {
                    let cout_total =
                      Number(item.duree) * Number(item.cout_journalier);
                    total += cout_total;
                    return (
                      <>
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-200 px-4 py-2">
                            {item.theme}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {item.data_debut}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {item.data_fin}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {item.description}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {item.cout_journalier}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {item.duree}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {cout_total} DH
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <tr className="bg-gray-100 font-bold">
                    <td colSpan={6} className="px-4 py-2 ">
                      Total des couts des evenements assuresest :
                    </td>
                    <td className="border border-gray-200 px-4 py-2 ">
                      {total} DH
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
    </>
  );
}

export default Evenements;
