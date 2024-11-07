import { useState } from "react";

function Rechercher({ info }) {
    const [donnee, setDonnee] = useState("");
    const [donnees, setDonnees] = useState([]);
    const [message, setMessage] = useState("");

    function chercher() {
        let newRow = info.filter((item) => item.departement.nomDep === donnee);
        if (newRow.length == 0) {
            setMessage("Aucune employé n'est affecté à ce département");
        } else {
            setMessage("");
        }
        setDonnees(newRow);
    }

    return (
        <>
            <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Recherche par Département :</h1>
                <label htmlFor="" className="mb-2 text-lg">Entrer le nom du Département</label>
                <input
                    type="text"
                    onChange={(e) => setDonnee(e.target.value.toUpperCase())}
                    className="p-2 border border-gray-300 rounded-lg mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={chercher}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                    Chercher
                </button>

                <h2 className="text-xl font-semibold mt-6">Résultat</h2>
                <span className="text-red-500 mb-4">{message}</span>
                <ul className="list-disc mt-2 pl-4 space-y-2">
                    {donnees.map((item, index) => (
                        <li key={index} className="text-lg">
                            Nom : {item.nomEmp} Prénom : {item.prenomEmp}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Rechercher;
