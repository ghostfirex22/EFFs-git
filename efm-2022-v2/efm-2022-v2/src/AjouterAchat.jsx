import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAchatsAction, deleteAchatsAction } from "./redux/actions/achatActions"

function AjouterAchat(){

    const [achat,setAchat] = useState({
        numero : null,
        codeProduit: "",
        qte:"",
        
    })

    const [produitQuantite,setProduitQuantite] = useState()
    const [produitSelected,setProduitSelected] = useState()
    const [currentQuantite,setCurrentQuantite] = useState(null)
    const [searchedList,setSearchedList] = useState()
    const [search,setSearch] = useState()
    
    const produitsState = useSelector((state)=>state.produits)
    const achatsState = useSelector((state)=>state.achats)
    const clientsState = useSelector((state)=>state.clients)

    const dispatch = useDispatch()

    function inputschanges(e){
        let key = e.target.name
        let val = e.target.value
        let _achat = {...achat}
        _achat[key] = val
        setAchat(_achat)
    }

    function ajouter(){
        dispatch(addAchatsAction(achat,currentQuantite))
    }

    function supprimer(achatN){
        dispatch(deleteAchatsAction(achatN))
    }


    useEffect(()=>{
        produitsState.map((item)=>{
            if(item.codeProduit == produitSelected){
                setProduitQuantite({...item})
            }
        })
    },[produitSelected])

    useEffect(()=>{
        if(produitQuantite && produitQuantite.quantite){
            let val = Number(produitQuantite.quantite) - Number(achat.qte)
            setCurrentQuantite(val)
        }
    },[produitQuantite,achat.qte])
    
    console.log(produitsState)

    function searching(){
        let searcingList = achatsState.filter((item)=>{
            return item.numero === search
        })
        setSearchedList(searcingList)
    }


    return (
        <>
            <div className="flex items-center w-full space-x-2">
                <input onChange={(e) => setSearch(e.target.value)} className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"  type="number" name="qte" placeholder="Numero of Client"/>
                <button  className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={searching}> Search </button>
            </div>

            <div className="mt-4">
                {searchedList && searchedList.length > 0 ? (
                    searchedList.map((item, index) => (
                        <h1 key={index} className="text-gray-800">N : {item.numero} | Code Produit : {item.codeProduit} | Quantité: {item.qte}</h1>
                    ))
                ) : (
                    <h1 className="text-gray-500">Empty</h1>
                )}
            </div>

            <div className="max-w-md mx-auto mt-10 overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-300 rounded-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border border-gray-300">Numero</th>
                            <th className="px-4 py-2 border border-gray-300">Code Produit</th>
                            <th className="px-4 py-2 border border-gray-300">Quantité</th>
                            <th className="px-4 py-2 border border-gray-300">Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {achatsState.map((item, index) => (
                            <tr key={index} className="odd:bg-white even:bg-gray-50">
                                <td className="px-4 py-2 border border-gray-300">{item.numero}</td>
                                <td className="px-4 py-2 border border-gray-300">{item.codeProduit}</td>
                                <td className="px-4 py-2 border border-gray-300">{item.qte}</td>
                                <td className="px-4 py-2 border border-gray-300">
                                    <button  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" onClick={() =>{ supprimer(item.numero)}}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg space-y-4">
                <select  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" name="numero" onChange={inputschanges}>
                    {clientsState.map((item, index) => (
                        <option key={index} value={item.numero}>
                            {item.nom} | {item.prenom}
                        </option>
                    ))}
                </select>

                <select  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"name="codeProduit" onChange={inputschanges} onClick={(e)=> setProduitSelected(e.target.value)} >
                    {produitsState.map((item, index) => {
                        return (
                            <>
                                <option key={index} value={item.codeProduit}>
                                    {item.intitule}
                                </option>   
                            </>
                        )
                })}
                </select>
                {produitQuantite ? 
                    <p className={currentQuantite <= produitQuantite.qAlert ? "text-red-500" : "text-green-400"}> Quantité en stack est : {currentQuantite}</p>
                    : (
                        <p> Quantité en stack est :</p>
                    )
                }

                <input onChange={inputschanges} className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" type="number" name="qte" placeholder="Quantité" />

                
                {currentQuantite && currentQuantite <= 0 ?
                    (<p>Not enough quantite</p>)
                    : (
                        <button onClick={ajouter} className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
                    )
                }
            </div>
        </>
    )
}

export default AjouterAchat
