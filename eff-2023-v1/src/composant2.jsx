import { useEffect, useState } from "react";

function Rechercher({ data }) {
    const [donnee, setDonnee] = useState("");
    const [donnees, setDonnees] = useState([]);
    const [message,setMessage] = useState("");

    function chercher() {
        let newrow = data.filter((item) => item.service.nomser === donnee);
        console.log(newrow);

        if (donnees.length === 0){
            setMessage(" Aucun salarie n'est affecte a ce service ")
        }else{
            setMessage("")
        }

        setDonnees(newrow);
    }

    return (
        <div className="p-6 bg-gray-50 shadow-md rounded-lg max-w-md mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Rechercher par Service</h1>

            <label className="text-gray-700">Entrez le nom du service:</label>
            <input
                type="text"
                onChange={(e) => setDonnee(e.target.value.toLowerCase())}
                className="border border-gray-300 rounded-md p-2 mt-2 w-full"
            />

            <button
                onClick={chercher}
                className="bg-blue-500 text-white rounded-md p-2 mt-4 w-full hover:bg-blue-600"
            >
                Chercher
            </button>

            <h2 className="text-xl font-semibold mt-6 text-center">Résultats:</h2>
            <span className="text-red-600">{message}</span>
            <ul className="mt-4 space-y-2 text-gray-700">
                {donnees.map((item, index) => (
                    <li key={index} className="border-b border-gray-200 pb-2">
                        <strong>Nom:</strong> {item.nomsal} <strong>Prénom:</strong> {item.prenomsal}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Rechercher;
