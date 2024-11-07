import { useEffect, useState } from "react";

function Experts2() {
  const [experts, setExperts] = useState([]);

  useEffect(function () {
    async function getExperts() {
      const data = await fetch("http://localhost:4000/experts");
      const expertsData = await data.json();
      setExperts(expertsData);
    }
    getExperts();
  }, []);

  return (
    <>
    <div className="pt-10">
        <h1 className="text-4xl font-bold text-white bg-blue-800 py-4 text-center rounded-t-lg">
            Expert 2
        </h1>
        <ul className="bg-blue-50 p-4 rounded-b-lg shadow-lg">
            {experts.map((item, index) => (
            <li
                key={index}
                className="text-blue-700 border-b border-blue-200 py-2 first:pt-0 last:border-b-0 last:pb-0"
            >
                ID: {item.id} | Nom Complet: {item.nom_complet}
                
            </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Experts2;
