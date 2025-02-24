import { useEffect, useState } from "react"
import Affiche from "./Affiche"
import Recherche from "./Recherche"
import { Link, Route, Routes } from "react-router-dom"
import Menu from "./Menu"
import InfoProd from "./InfoProd"

function App(){

    const [produits,setProduits] = useState([])
    const [rowSelected,setRowSelected] = useState()

    useEffect(()=>{
        async function getProduits(){
          const data = await fetch("http://localhost:4000/produits")
          const produitsData = await data.json()
          setProduits(produitsData)
        }
        getProduits()
    },[])

    return (
        <>
            <div className="flex justify-center gap-4 p-4 bg-gray-100">
                <Link to="/recherche">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"> Recherche</button>
                </Link>

                <Link to="/affiche">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">Affiche</button>
                </Link>

                <Link to="/infoprod">
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition duration-200"> InfoProd</button>
                </Link>
            </div>

            <div className="p-4">
                <Routes>
                    <Route path="/menu" element={<Menu rowSelected={rowSelected} />} />
                    <Route path="/recherche" element={<Recherche produits={produits} setRowSelected={setRowSelected} />}/>
                    <Route path="/affiche" element={<Affiche produits={produits} />} />
                    <Route path="/infoprod" element={<InfoProd/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App