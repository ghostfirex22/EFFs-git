import { useState } from "react"
import { regions,annonces } from "./db"

function AnnsByReg(){

    const [selectedReg,setSelectedReg] = useState(null)

    return (
        <>
            <div className="w-10/12 md:w-6/12 mx-auto p-6 bg-white rounded-lg shadow-md">
            <select className="my-4 p-2 border border-gray-300 rounded-md" onChange={(e) => setSelectedReg(e.target.value)}>
                <option selected disabled>select a region</option>
                {regions.map((item, index) => (
                    <option key={index} value={item.regid}>{item.regnom}</option>
                ))}
            </select>

            <div className="flex flex-col gap-6">
                {annonces.map((item, index) => {
                    if (item.regid == selectedReg) {
                        return (
                            <div className="flex flex-col p-4 bg-gray-100 border border-gray-300 rounded-md shadow-sm" key={index}>
                                <div className="flex justify-between bg-gray-200 p-2 rounded-md">
                                    <p className="font-semibold">{item.ville} ({item.codepostal})</p>
                                    <p className="text-gray-600">{item.email}</p>
                                </div>
                                <span className="mt-2 text-gray-800">{item.texte}</span>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
        </>
    )
}

export default AnnsByReg