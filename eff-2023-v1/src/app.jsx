import { useEffect, useState } from "react";
import Voitures from "./composant1";
import Rechercher from "./composant2";

function App() {
    const [salaries, setSalaries] = useState([]);

    useEffect(function () {
        async function getSalaries(){
            const data = await fetch("http://localhost:4000/salaries/");
            const salariesData = await data.json();
            setSalaries(salariesData);
        }
        getSalaries();
    }, []);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Liste des Stagiaires</h1>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="py-3 px-6 text-left uppercase tracking-wider font-semibold">Nom</th>
                        <th className="py-3 px-6 text-left uppercase tracking-wider font-semibold">Prénom</th>
                        <th className="py-3 px-6 text-left uppercase tracking-wider font-semibold">Fonction</th>
                        <th className="py-3 px-6 text-left uppercase tracking-wider font-semibold">Service</th>
                    </tr>
                </thead>
                <tbody>
                    {salaries.map((item, index) => (
                        <tr key={index} className="bg-gray-100 hover:bg-gray-200 border-b border-gray-300">
                            <td className="py-3 px-6">{item.nomsal}</td>
                            <td className="py-3 px-6">{item.prenomsal}</td>
                            <td className="py-3 px-6">{item.fonction}</td>
                            <td className="py-3 px-6">{item.service.nomser}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-6">
                <Voitures />
            </div>
            <div className="mt-6">
                <Rechercher data={salaries} />
            </div>
        </div>
    );
}

export default App;
