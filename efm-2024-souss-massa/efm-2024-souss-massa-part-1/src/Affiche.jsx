function Affiche({produits}){

    return (
        <>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Afficher</h1>
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Reference</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Nom Produit</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Description</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Prix</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Categorie</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Image</th>
                </tr>
            </thead>
            <tbody>
                {produits.map((item, index) => (
                <tr key={index} className={"bg-white"}>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">{item.id}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">{item.nomP}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">{item.desP}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">{item.prixP}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">{item.categorie.nomC}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                        <img src={item.thumbnail} alt="no-Image-for-the-produit"/>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </>

    )
}

export default Affiche