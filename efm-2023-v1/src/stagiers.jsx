import { useEffect, useState } from "react";

function  ComponentStagiaires(){
    const Stagiaires=[{id :1,matricule :1454,nom : "Alaoui ",codepostal :20400,ville :"casa",moyenne :12.56},
    {id :2, matricule :1455,nom : "Mansouri ",codepostal :20400,ville :"casa",moyenne :14.67}];

    const [stagiaire,setStagiaire] = useState({
        id :null,
        matricule :0,
        nom : "",
        codepostal :0,
        ville :"",
        moyenne :0
    })

    const [moyennes,setMoyennes] = useState({
        smallerNote: 0,
        graterNote: 0 ,
        totale: 0  })

    const [message,setMessage] = useState("")
    const [messageRecherche,setMessageRecherche] = useState("")
    const [error,setError] = useState("")

    const [listStagiaires,setListStagiaires] = useState([])

    const [stagiaires2,setStagiaires2] = useState([])

    useEffect(()=>{
        setListStagiaires(Stagiaires)
    },[])



    function vider(){
        setStagiaire({
            matricule :0,
            nom : "",
            codepostal :0,
            ville :"",
            moyenne :0
        })
    }

    function supprimer(del){
        let newStagiaires = listStagiaires.filter((item)=>{
            return item.id !== del
        })
        setListStagiaires(newStagiaires)
        vider()
    }

    function editer(){
        let editedStagiaires = listStagiaires.map((item)=>{
            if(stagiaire.id === item.id){
                item = {...stagiaire}
            }
            return item;
        })
        setListStagiaires(editedStagiaires)
        vider()
    }

    function filterVilleNom(){
        let newList = listStagiaires.filter((item)=>{
            if (stagiaire.ville == item.ville &&  stagiaire.nom === item.nom){
                setMessageRecherche("")
                return item
            }
        })
        if (newList.length == 0){
            setMessageRecherche("Tableau de recherche vide")
        }
        setStagiaires2(newList)
    }

    function initialiserRecherche(){
        setStagiaires2([])
    }

    useEffect(()=>{
        let SNote = 20
        let GNote = 0
        let Totale = 0
        listStagiaires.map((item)=>{
            Totale += item.moyenne
            if (item.moyenne < SNote){
                SNote = item.moyenne
            }
            if (item.moyenne > GNote){
                GNote = item.moyenne
            }
        })
        setMoyennes({...moyennes,smallerNote:SNote,graterNote:GNote,totale:Totale/listStagiaires.length})
    },[listStagiaires])

    useEffect(()=>{
        if (listStagiaires.length === 0) {
            setMessage("tableau des stagiaires vide")
        }else{
            setMessage("")
        }
    },[listStagiaires])

    function stagiaireId(){
        return listStagiaires.length + 1
    }

    function incrmentre(){
        let a = 1
        return a = listStagiaires.length
    }

    function ajouter(){
        if ((stagiaire.moyenne <= 20 && stagiaire.moyenne >= 0) && (stagiaire.codepostal <=20 && stagiaire.codepostal >=0)){
            let findIt = listStagiaires.find((item)=>{
                return item.matricule == stagiaire.matricule
            })

            if (findIt){
                setError("this matricule is already used")
            }else {
                const newStagire = {...stagiaire,id:stagiaireId()}
                setListStagiaires([...listStagiaires,newStagire])
                setError("")
                vider()
            }   
        }
    }
    

    return (
        <> 
        <div class="p-6 bg-gray-100">
            <table class="w-full mt-4 border border-gray-300">
                <thead class="bg-blue-600 text-white">
                    <tr>
                        <th class="px-4 py-2 border">ID</th>
                        <th class="px-4 py-2 border">Matricule</th>
                        <th class="px-4 py-2 border">Nom</th>
                        <th class="px-4 py-2 border">Ville</th>
                        <th class="px-4 py-2 border">Code Postal</th>
                        <th class="px-4 py-2 border">Moyenne</th>
                        <th class="px-4 py-2 border">Supprimer</th>
                        <th class="px-4 py-2 border">Editer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><span class="text-lg font-semibold text-red-600">{message}</span></tr>
                    {listStagiaires.map((item, index) => {
                        return (
                            <>
                                <tr key={index} onClick={() => setStagiaire({...item})} class="hover:bg-gray-200 cursor-pointer">
                                    <td class="px-4 py-2 border">{item.id}</td>
                                    <td class="px-4 py-2 border">{item.matricule}</td>
                                    <td class="px-4 py-2 border">{item.nom}</td>
                                    <td class="px-4 py-2 border">{item.ville}</td>
                                    <td class="px-4 py-2 border">{item.codepostal}</td>
                                    <td class="px-4 py-2 border">{item.moyenne}</td>
                                    <td class="px-4 py-2 border"><button onClick={() => {supprimer(item.id)}} class="text-red-600 hover:underline">Supprimer</button></td>
                                    <td class="px-4 py-2 border"><button onClick={editer} class="text-blue-600 hover:underline">Editer</button></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
            
            <div class="mt-4 grid gap-4 grid-cols-2">
                <input type="number" placeholder="ID" required value={stagiaireId()} class="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <input type="number" placeholder="Matricule" required value={stagiaire.matricule} onChange={(e) => setStagiaire({...stagiaire, matricule: e.target.value })} class="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <input type="text" placeholder="Nom" required value={stagiaire.nom} onChange={(e) => setStagiaire({...stagiaire, nom: e.target.value })} class="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <input type="number" placeholder="Code Postal" required value={stagiaire.codepostal} onChange={(e) => setStagiaire({...stagiaire, codepostal: e.target.value })} class="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <input type="text" placeholder="Ville" required value={stagiaire.ville} onChange={(e) => setStagiaire({ ...stagiaire, ville: e.target.value })} class="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <input min={0} max={20} type="number" placeholder="Moyenne" required value={stagiaire.moyenne} onChange={(e) => setStagiaire({ ...stagiaire, moyenne: Number(e.target.value) })} class="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <p className="text-red-600">{error}</p>
            
            <div class="mt-4 space-x-2">
                <button onClick={ajouter} class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Ajouter</button>
                <button onClick={vider} class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Vider</button>
                <button onClick={filterVilleNom} class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Filtrer Ville et Nom</button>
                <button onClick={initialiserRecherche} class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Initialiser Recherche</button>
            </div>
            
            <div class="mt-4">
                <p class="text-gray-700">La Moyenne générale la plus élevée: <span class="font-bold">{moyennes.graterNote}</span></p>
                <p class="text-gray-700">La Moyenne générale la moins élevée: <span class="font-bold">{moyennes.smallerNote}</span></p>
                <p class="text-gray-700">La Moyenne de la classe: <span class="font-bold">{moyennes.totale}</span></p>
            </div>
            
            <div class="mt-4">
                <span class="text-red-600 font-medium">{messageRecherche}</span>
                {stagiaires2.map((item, index) => {
                    return (
                        <>
                            <p key={index} class="text-gray-700">Ville :{item.ville}, Nom : {item.nom}</p>
                        </>
                    )
                })}
            </div>
        </div>

        </>
    )
}

export default ComponentStagiaires;