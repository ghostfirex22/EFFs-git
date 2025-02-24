import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Recherche({produits,setRowSelected}){

    const navigate = useNavigate()

    const [search,setSearch] = useState()
    const [filledList,setFilledList] = useState([])

    function searching() {
        const searchingList = produits.filter((item)=>{
            if(item.categorie.nomC == search){
                return item 
            }
        })
        setFilledList(searchingList)
    }

    function plusLink(row){
        setRowSelected(row)
        navigate('/menu')
    }

    return(
        <>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Recherche</h1>
        <div className="mb-6 flex items-center gap-4">
            <label className="text-gray-700 font-medium" >Recherche par Categorie :</label>
            <input type="text" onChange={(e) => setSearch(e.target.value)} className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button onClick={searching} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"> Recherche </button>
        </div>

        <h1 className="text-xl font-bold text-gray-800 mb-4">Resultat</h1>
        <ul className="space-y-4">
            {filledList.length > 0 ? (
            filledList.map((produit, index) => (
                <li key={index} className="p-4 bg-gray-100 rounded-md shadow-md flex items-center justify-between" >
                    <span className="text-gray-700">
                        {produit.nomP} | prix : {produit.prix}dh
                    </span>
                    <button onClick={() => plusLink(produit)} className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-200" > Plus</button>
                </li>
            ))
            ) : (
            <p className="text-gray-500 italic">No contenu</p>
            )}
        </ul>
        </>
    )
}

export default Recherche