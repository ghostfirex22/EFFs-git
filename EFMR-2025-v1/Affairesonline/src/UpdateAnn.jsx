import { useState } from "react"
import { categories, regions } from "./db"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { modifier } from "./redux/features/annonce/annonceSlice"

function UpdateAnn({updateAnnonce}){

    const [updatedAnnonce,setUpdatedAnnonce] = useState(updateAnnonce)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function updateAnnonceFunction(){
        dispatch(modifier(updatedAnnonce))
        navigate('/AdministrerAnns')
    }

    function handelChanges(e){   
        let key = e.target.name
        let val = e.target.value
        let _updatedAnnonce = {...updatedAnnonce}
        _updatedAnnonce[key] = val
        setUpdatedAnnonce(_updatedAnnonce)
    }

    console.log(updatedAnnonce)

    return (
        <>
<div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-800">Id: {updatedAnnonce.id}</p>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Texte:</label>
                    <input type="text" name="texte" onChange={handelChanges} value={updatedAnnonce.texte} 
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">N telephone:</label>
                    <input type="text" name="tel" onChange={handelChanges} value={updatedAnnonce.tel} 
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Adresse de messages:</label>
                    <input type="text" name="email" onChange={handelChanges} value={updatedAnnonce.email} 
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Ville:</label>
                    <input type="text" name="ville" onChange={handelChanges} value={updatedAnnonce.ville} 
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Code Postal:</label>
                    <input type="text" name="codepostal" onChange={handelChanges} value={updatedAnnonce.codepostal} 
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Montant:</label>
                    <input type="text" name="prix" onChange={handelChanges} value={updatedAnnonce.prix} 
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Utilisateur du site:</label>
                    <input type="text" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Region:</label>
                    <select value={updatedAnnonce.regid} onChange={handelChanges} name="regid" 
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500">
                        {regions.map((item) => (
                            <option value={item.regid} key={item.regid}>{item.regnom}</option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Categorie:</label>
                    <select value={updatedAnnonce.catid} onChange={handelChanges} name="catid" 
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500">
                        {categories.map((item) => (
                            <option value={item.catid} key={item.catid}>{item.catnom}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="flex flex-row gap-6 items-center mt-6">
                <button onClick={updateAnnonceFunction} 
                    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
                    Mettre a jour
                </button>

                <hr className="w-8 border-gray-400 rotate-90" />

                <Link to={'/AdministrerAnns'}>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600">
                        Annuler
                    </button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default UpdateAnn