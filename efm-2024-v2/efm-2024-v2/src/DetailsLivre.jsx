import { useEffect, useState } from "react"

function DetailsLivre(){

    const [livres,setLivres] = useState([])

    useEffect(()=>{
        async function getLivres(){
            const data = await fetch("http://localhost:4000/livres")
            const livresData = await data.json()
                setLivres(livresData)
        }getLivres()
    },[])

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-gray-200 my-10 p-6 rounded-lg shadow-lg space-y-4 mt-8">
                <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">ISBN</th>
                            <th className="border border-gray-300 px-4 py-2">Titre</th>
                            <th className="border border-gray-300 px-4 py-2">Auteur</th>
                            <th className="border border-gray-300 px-4 py-2">Prix</th>
                            <th className="border border-gray-300 px-4 py-2">Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livres.map((item, index) => (
                            <tr key={index} className="even:bg-gray-50 odd:bg-white">
                                <td className="border border-gray-300 px-4 py-2">{item.ISBN}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.Titre}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.Auteur}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.Prix}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.Genre}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default DetailsLivre