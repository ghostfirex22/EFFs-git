import { Link, Route, Routes } from "react-router-dom"
import Header from "./header"
import { useEffect, useState } from "react"
import DetailsLivre from "./DetailsLivre"
import { useDispatch, useSelector } from "react-redux"
import { addLivreAction, deleteLivreAction } from "./redux/actions/livreAction"

function App(){
    const [livres,setLivres] = useState([])
    const [total,setTotal] = useState()
    const panierState = useSelector((state)=>state.panier)

    const dispatch = useDispatch()

    useEffect(()=>{
        async function getLivres(){
            const data = await fetch("http://localhost:4000/livres")
            const livresData = await data.json()
                setLivres(livresData)
        }getLivres()
    },[])


    useEffect(()=>{
        const tot = panierState.reduce((totalePrix,currentItem)=>{
            return totalePrix + currentItem.Prix
        },0)
        setTotal(tot)
    },[panierState])

    function deletePanier(panierISBN){
        dispatch(deleteLivreAction(panierISBN))
    }

    function ajouterLivre(livre){
        dispatch(addLivreAction(livre))
    }

    return (
        <>  
           <div className="p-6 bg-gray-100 min-h-screen">
                <div className="flex flex-col items-center justify-center bg-gray-600 p-6 rounded-lg shadow-lg space-y-4">
                    <Header />

                    <div className="flex space-x-4">
                        <Link to={'/'}>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">
                                Acceuil
                            </button>
                        </Link>

                        <Link to={'/detailslivre'}>
                            <button className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition">
                                Détail
                            </button>
                        </Link>
                    </div>
                </div>

                <Routes>
                    <Route path="/detailsLivre" element={<DetailsLivre />} />
                </Routes>

                <div className="overflow-x-auto bg-white shadow rounded-lg p-4">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">ISBN</th>
                                <th className="border border-gray-300 px-4 py-2">Titre</th>
                                <th className="border border-gray-300 px-4 py-2">Auteur</th>
                                <th className="border border-gray-300 px-4 py-2">Prix</th>
                                <th className="border border-gray-300 px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livres.map((item, index) => (
                                <tr key={index} className="even:bg-gray-50 odd:bg-white">
                                    <td className="border border-gray-300 px-4 py-2">{item.ISBN}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.Titre}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.Auteur}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.Prix}</td>
                                    <td className="flex justify-center border border-gray-300 px-4 py-2">
                                        <button onClick={() => ajouterLivre(item)}  className="bg-indigo-500 text-white px-4 py-1 rounded shadow hover:bg-indigo-600 transition">Ajouter</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h1 className="text-2xl font-bold mt-6 mb-4">Panier</h1>
                <ul className="space-y-2">
                    {panierState.map((item, index) => (
                        <li key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded shadow">
                            <span className="text-lg">Prix : {item.Prix}</span>
                            <button 
                                onClick={() => deletePanier(item.ISBN)}
                                className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition"
                            >
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>

                <p className="text-lg font-semibold mt-4">Total : {total}</p>
            </div>

        </>
    )
}

export default App