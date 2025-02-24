import {Link ,Route, Routes } from "react-router-dom"
import AjouterAchat from "./AjouterAchat"
import Facture from "./Facture"

function Principal(){
    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
            <nav className="flex space-x-4 mb-6">
                <Link to="/Facture">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Facture</button>
                </Link>
                <Link to="/AjouterAchat">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Achats</button>
                </Link>
            </nav>

            <Routes>
                <Route path="/Facture" element={<Facture/>}></Route>
                <Route path="/AjouterAchat" element={<AjouterAchat/>}></Route>
            </Routes>
        </div>
    )   
}

export default Principal