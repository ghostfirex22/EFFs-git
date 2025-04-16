import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function Facture(){
    const produitsState = useSelector((state)=>state.produits)
    const achatsState = useSelector((state)=>state.achats)
    const clientsState = useSelector((state)=>state.clients)

    const [search,setSearch] = useState()
    const [searchDetail,setSearchDetail] = useState()
    const [message,setMessage] = useState()
    const [calctotale,setCalctotale] = useState("")

    function detail(){
        const searcingList = clientsState.filter((item)=>{
            return item.numero === search
        })
        if(searcingList && searcingList.length !== 0){
            setSearchDetail(search)
            setMessage("")
        }else{
            setMessage("numero n'existe pas")
            setSearchDetail(null)
        }
    }

    console.log(searchDetail)

    useEffect(()=>{
        const AchatsToCalc = achatsState.filter((achat)=>{
            return achat.numero == searchDetail
        })

        const totale =  AchatsToCalc.reduce((item)=>{
            return item + 1;
        },0)

        setCalctotale(totale)
    },[searchDetail])

    return (
        <>
            <div className="flex flex-row w-full space-x-4 items-center">
                <input   className="flex-grow px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setSearch(e.target.value)} type="number" name="qte" placeholder="Numero of Client"/>
                <button  className="w-1/4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={detail}>Search</button>
            </div>
            {searchDetail ? clientsState.map((item) => {
                if(item.numero == searchDetail)
                return (
                <div key={item.numero} className="mt-4 text-gray-800">
                                <h1 className="font-semibold text-lg">Nom : {item.nom}</h1>
                                <h1 className="text-gray-600">Prenom : {item.prenom}</h1>
                            </div>
                        )
                    }) : <p className="text-gray-500 mt-4">Empty</p>}

                    <table className="w-full mt-8 border-collapse" border="1"> 
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                <th className="p-2 border border-gray-300">Code</th>
                                <th className="p-2 border border-gray-300">Intitule</th>
                                <th className="p-2 border border-gray-300">Quantité</th>
                                <th className="p-2 border border-gray-300">Prix</th>
                                <th className="p-2 border border-gray-300">Prix Totale</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchDetail ? achatsState.map((achat) => {
                                return produitsState.map((item, index) => {
                                    if (achat.numero === searchDetail && achat.codeProduit === item.codeProduit) {
                                        return (
                                            <tr key={index} className="odd:bg-white even:bg-gray-50">
                                                <td className="p-2 border border-gray-300 text-center">{item.codeProduit}</td>
                                                <td className="p-2 border border-gray-300 text-center">{item.intitule}</td>
                                                <td className="p-2 border border-gray-300 text-center">{achat.qte}</td>
                                                <td className="p-2 border border-gray-300 text-center">{item.prix}</td>
                                                <td className="p-2 border border-gray-300 text-center">{item.prix * achat.qte}</td>
                                            </tr>
                                        )
                                    }
                                })
                            }) :  <tr className="bg-gray-100 text-gray-700"><td colSpan="5" className="text-center text-5xl">{message}</td></tr> }
                        </tbody>
                        <tr className="bg-gray-100 text-gray-700" ><td colSpan="5" className="text-center text-3xl">Totale Achats : {calctotale}</td></tr>
                    </table>
        </>
    )
}

export default Facture