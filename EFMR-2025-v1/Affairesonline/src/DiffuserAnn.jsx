import { useState } from "react"
import { regions , categories } from "./db"
import { useDispatch, useSelector } from "react-redux"
import { inserer } from "./redux/features/annonce/annonceSlice"

function DiffuserAnn(){

    const annoncesRedux = useSelector((state)=>state.annonces.annoncesList)

    const dispatch = useDispatch()
    const [newAnnonce,setNewAnnonce] = useState({
        id : annoncesRedux.length + 1,
        texte : null ,
        tel : null ,
        email : null ,
        prix : null ,
        ville : null ,
        codepostal : null ,
        regid : null ,
        catid : null
    })

    function addAnnonce(){
        dispatch(inserer(newAnnonce))
    }

    function handelChanges(e){   
        console.log(annoncesRedux)
        let key = e.target.name
        let val = e.target.value
        let _newAnnonce = {...newAnnonce}
        _newAnnonce[key] = val
        setNewAnnonce(_newAnnonce)
    }

    return (
        <>
            <div className="bg-gray-400 p-5 rounded-lg shadow-md max-w-lg mx-auto">
            <div className="flex flex-col gap-4">
                <label className="font-semibold">Texte de l'annonce (250 caracteres max)</label>
                <textarea maxLength={250} name="texte" className="p-2 border rounded-md" onChange={handelChanges}></textarea>
            </div>
            <div className="flex gap-4 mt-4">
                <div className="flex flex-col">
                    <label className="font-semibold">Categorie</label>
                    <select name="catid" className="p-2 border rounded-md" onChange={handelChanges}>
                        {categories.map((item, index) => (
                            <option key={index} value={item.catid}>{item.catnom}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Region</label>
                    <select name="regid" className="p-2 border rounded-md" onChange={handelChanges}>
                        {regions.map((item, index) => (
                            <option key={index} value={item.regid}>{item.regnom}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="mt-4">
                <label className="font-semibold">Prix</label>
                <input type="text" name="prix" className="p-2 border rounded-md w-full" onChange={handelChanges} />
            </div>
            <div className="flex gap-4 mt-4">
                <div className="flex flex-col">
                    <label className="font-semibold">N de telephone</label>
                    <input type="text" name="tel" className="p-2 border rounded-md" onChange={handelChanges} />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold flex items-center gap-2">
                        <span className="rounded-full border border-black px-2 py-1 text-sm font-bold">@</span>
                        Email
                    </label>
                    <input type="text" name="email" className="p-2 border rounded-md" onChange={handelChanges} />
                </div>
            </div>
            <div className="flex gap-4 mt-4">
                <div className="flex flex-col">
                    <label className="font-semibold">Code Postal</label>
                    <input type="text" name="codepostal" className="p-2 border rounded-md" onChange={handelChanges} />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Ville</label>
                    <input type="text" name="ville" className="p-2 border rounded-md" onChange={handelChanges} />
                </div>
            </div>
            <button onClick={addAnnonce} className="bg-gray-600 text-white p-2 rounded-md mt-4 w-full hover:bg-gray-700">Valider votre annonce</button>
        </div>
        </>
    )
}

export default DiffuserAnn