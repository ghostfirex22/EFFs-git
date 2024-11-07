import { useState } from "react";

function Voitures() {
    const [matricule, setMatricule] = useState("");
    const [marque, setMarque] = useState("");
    const [date, setDate] = useState("");
    const [couleur, setCouleur] = useState("");
    const [voiture, setVoiture] = useState({
        matricule: "",
        marque: "",
        date: "",
        couleur: ""
    });

    function confirm() {
        setVoiture({ ...voiture, matricule, marque, date, couleur });
    }

    return (
        <div className="p-6 bg-gray-50 shadow-md rounded-lg max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Ajoutez une Voiture</h1>

            <div className="flex flex-col space-y-4">
                <label className="text-gray-700">Matricule:</label>
                <input
                    type="text"
                    onChange={(e) => setMatricule(e.target.value)}
                    className="border border-gray-300 rounded-md p-2"
                />

                <label className="text-gray-700">Marque:</label>
                <input
                    type="text"
                    onChange={(e) => setMarque(e.target.value)}
                    className="border border-gray-300 rounded-md p-2"
                />

                <label className="text-gray-700">Date de mise en circulation:</label>
                <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    className="border border-gray-300 rounded-md p-2"
                />

                <label className="text-gray-700">Couleur:</label>
                <input
                    type="text"
                    onChange={(e) => setCouleur(e.target.value)}
                    className="border border-gray-300 rounded-md p-2"
                />

                <button
                    onClick={confirm}
                    className="bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-600"
                >
                    Confirmer
                </button>
            </div>

            <h2 className="text-xl font-semibold mt-6 text-center">Récapitulatif des informations :</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
                <li><strong>Matricule:</strong> {voiture.matricule}</li>
                <li><strong>Marque:</strong> {voiture.marque}</li>
                <li><strong>Date:</strong> {voiture.date}</li>
                <li><strong>Couleur:</strong> {voiture.couleur}</li>
            </ul>
        </div>
    );
}

export default Voitures;
