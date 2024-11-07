import { useState } from "react";

function Materiel() {
    const [code, setCode] = useState();
    const [marque, setMaruqe] = useState();
    const [date, setDate] = useState();
    const [categorie, setCategorie] = useState();
    const [materiel, setMateriel] = useState({
        code: "",
        marque: "",
        date: "",
        categorie: ""
    });

    function confirmer() {
        setMateriel({ materiel, code: code, marque: marque, date: date, categorie: categorie });
    }

    return (
        <>
            <div className="flex flex-col items-center p-6 bg-gray-200 rounded-lg shadow-md">
                <label htmlFor="" className="text-lg mb-2">Code Materiel</label>
                <input
                    type="text"
                    onChange={(e) => setCode(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label htmlFor="" className="text-lg mb-2">Marque</label>
                <select name="" onChange={(e) => setMaruqe(e.target.value)} className="p-2 border border-gray-300 rounded-lg mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="hp">HP</option>
                    <option value="dell">Dell</option>
                </select>

                <label htmlFor="" className="text-lg mb-2">Date debut Utilisation</label>
                <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label htmlFor="" className="text-lg mb-2">Categorie</label>
                <input
                    type="text"
                    onChange={(e) => setCategorie(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    onClick={confirmer}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                    Confirmer
                </button>

                <h1 className="text-2xl font-semibold mt-6">Récapitulatif des informations :</h1>
                <ul className="list-disc mt-4 pl-6 space-y-2 text-lg">
                    <li>Code: {materiel.code}</li>
                    <li>Marque: {materiel.marque}</li>
                    <li>Date: {materiel.date}</li>
                    <li>Catégorie: {materiel.categorie}</li>
                </ul>
            </div>
        </>
    );
}

export default Materiel;
