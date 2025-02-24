import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function AdminAnns({setAnnonceDetail}){

    const annoncesRedux = useSelector((state)=>state.annonces.annoncesList)

    const navigate = useNavigate()
    
    function selectedAnn(value){
        setAnnonceDetail(value)
        navigate('/DetailAnn')
    }

    console.log(annoncesRedux)

    return (
        <>
            <div className="w-full overflow-x-auto p-4">
                <table className="w-full border border-gray-300 shadow-md rounded-lg">
                    <thead className="bg-gray-700 text-white">
                        <tr>
                            <th className="p-3">Email</th>
                            <th className="p-3">Ville</th>
                            <th className="p-3">Code Postal</th>
                            <th className="p-3">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {annoncesRedux.map((item, index) => (
                            <tr key={index} className="border-b border-gray-300 hover:bg-gray-100">
                                <td className="p-3">{item.email}</td>
                                <td className="p-3">{item.ville}</td>
                                <td className="p-3">{item.codepostal}</td>
                                <td className="p-3 text-blue-500 cursor-pointer" onClick={() => selectedAnn(item.id)}>Plus...</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AdminAnns