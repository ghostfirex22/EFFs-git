import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduit } from "./redux/action/produitAction"

function AddProuit(){

    const [produit,setproduit] = useState({
        
    })

    const disptach = useDispatch()

    function inpChanges(e){
        let key = e.target.name
        let val = e.target.value
        const _produit = {...produit}
        _produit[key] = val
        setproduit(_produit)
    }

    console.log(produit)

    function ajouterProduit(){
        disptach(addProduit(produit))    
    }

   return (
        <>
            <div className="p-4 space-y-4 my-10 bg-gray-100 rounded shadow-md">

                <h1 className="text-4xl text-center font-bold text-blue-700">AJOUTER PRODUIT</h1>

                <div className="space-y-1">
                    <label htmlFor="ref" className="block font-medium text-gray-700">Ref :</label>
                    <input type="text" name="ref" onChange={inpChanges} className="w-full p-2 border rounded border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
                </div>

                <div className="space-y-1">
                    <label htmlFor="nom" className="block font-medium text-gray-700">Nom :</label>
                    <input type="text" name="nom" onChange={inpChanges} className="w-full p-2 border rounded border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
                </div>

                <div className="space-y-1">
                    <label htmlFor="categorie" className="block font-medium text-gray-700">Categorie :</label>
                    <input type="text" name="categorie" onChange={inpChanges} className="w-full p-2 border rounded border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
                </div>

                <button onClick={ajouterProduit}  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                    Ajouter Produit
                </button>
            </div>
        </>
   )
}

export default AddProuit