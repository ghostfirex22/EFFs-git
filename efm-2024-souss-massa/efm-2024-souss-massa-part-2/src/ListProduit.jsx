import { useSelector } from "react-redux"

function ListProduit(){

    const produitsState = useSelector((state) => state.produits)

    return (
        <>  
            <h1 className="text-4xl text-center font-bold text-blue-700">List Produits</h1>
            <table className="w-full mt-4 border-collapse bg-white rounded shadow-md">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="px-4 py-2 text-left">Ref</th>
                        <th className="px-4 py-2 text-left">Nom</th>
                        <th className="px-4 py-2 text-left">Categorie</th>
                    </tr>
                </thead>
                <tbody>
                    {produitsState.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="px-4 py-2 border">{item.ref}</td>
                            <td className="px-4 py-2 border">{item.nom}</td>
                            <td className="px-4 py-2 border">{item.categorie}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ListProduit