import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { categories,regions } from "./db"
import { Link, useNavigate } from "react-router-dom"
import { supprimer } from "./redux/features/annonce/annonceSlice"

function DetailAnn({annonceDetail,setUpdateAnnonce}){

    const annoncesRedux = useSelector((state)=>state.annonces.annoncesList)
    const [currentAnn,setCurrentAnn] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function goToUpdate(){
        const selectedAnn = annoncesRedux.find((item)=>{
            return item.id == annonceDetail
        })
        setUpdateAnnonce(selectedAnn)
        navigate('/UpdateAnn')
    }

    function deleteAnn(){
        dispatch(supprimer(annonceDetail))
        navigate('/AdministrerAnns')
    }

    useEffect(()=>{
        const selectedAnn = annoncesRedux.find((item)=>{
            return item.id == annonceDetail
        })
        if(selectedAnn){
            const region = regions.find((region)=>{
                return region.regid == selectedAnn.regid
            })
            const categorie = categories.find((categorie)=>{
                return categorie.catid == selectedAnn.catid
            })
            const fullDetails = {
                ...selectedAnn,
                region : region.regnom,
                categorie : categorie.catnom
            }
            setCurrentAnn(fullDetails)
        }
        
    },[annoncesRedux,annonceDetail])

    return (
        <>
            <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-md">
                <div className="mb-4">
                    <p><span className="font-bold">ID:</span> {currentAnn.id}</p>
                    <p><span className="font-bold">Texte:</span> {currentAnn.texte}</p>
                    <p><span className="font-bold">Telephone:</span> {currentAnn.tel}</p>
                    <p><span className="font-bold">Email:</span> {currentAnn.email}</p>
                    <p><span className="font-bold">Ville:</span> {currentAnn.ville}</p>
                    <p><span className="font-bold">Code Postal:</span> {currentAnn.codepostal}</p>
                    <p><span className="font-bold">Montant:</span> {currentAnn.prix}</p>
                    <p><span className="font-bold">Region:</span> {currentAnn.region}</p>
                    <p><span className="font-bold">Categorie:</span> {currentAnn.categorie}</p>
                </div>
                <div className="flex gap-4 items-center">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={goToUpdate}>Modifier</button>
                    <span className="w-px bg-black h-6"></span>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={deleteAnn}>Supprimer</button>
                    <span className="w-px bg-black h-6"></span>
                    <Link to={'/AdministrerAnns'}>
                        <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Retour</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default DetailAnn