function ListEmployes({ info }) {
    return (
        <>
            <div className="p-6 bg-gray-50 flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Liste des Employés</h1>
                <div className="overflow-x-auto w-full max-w-4xl shadow-lg rounded-lg">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-blue-500 text-white">
                            <tr>
                                <th className="py-3 px-6 text-left uppercase tracking-wider font-semibold">Nom</th>
                                <th className="py-3 px-6 text-left uppercase tracking-wider font-semibold">Prénom</th>
                                <th className="py-3 px-6 text-left uppercase tracking-wider font-semibold">Poste</th>
                                <th className="py-3 px-6 text-left uppercase tracking-wider font-semibold">Département</th>
                            </tr>
                        </thead>
                        <tbody>
                            {info.map((item, index) => (
                                <tr key={index} className="bg-gray-50 hover:bg-gray-100 border-b border-gray-200">
                                    <td className="py-3 px-6 text-gray-700">{item.nomEmp}</td>
                                    <td className="py-3 px-6 text-gray-700">{item.prenomEmp}</td>
                                    <td className="py-3 px-6 text-gray-700">{item.poste}</td>
                                    <td className="py-3 px-6 text-gray-700">{item.departement.nomDep}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ListEmployes;
