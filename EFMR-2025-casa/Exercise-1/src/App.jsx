import { useState } from "react"
import Connaissances from "./Connaissances"
import Coordonnees from "./Coordonnees"
import Dpersonnels from "./Dpersonnels"

function App(){

    const [fullInfo,setFullInfo] = useState({
        nom:'',
        prenom:'',
        dateN:'',
        lieuN:'',
        adresseP:'',
        codeP:'',
        adresseE:'',
        pageP:'',
        tel:'',
        semestre:'',
        connaissances:{
            html:false,
            css:false,
            formulaires:false,
            javaScript:false
        }
    })

    console.log(fullInfo)

    return (
        <>
            <Dpersonnels fullInfo={fullInfo} setFullInfo={setFullInfo}/>
            <Coordonnees fullInfo={fullInfo} setFullInfo={setFullInfo}/>
            <Connaissances fullInfo={fullInfo} setFullInfo={setFullInfo}/>

            <ul>
                <li>{fullInfo.nom}</li>
                <li>{fullInfo.prenom}</li>
                <li>{fullInfo.dateN}</li>
                <li>{fullInfo.lieuN}</li>
                <li>{fullInfo.adresseP}</li>
                <li>{fullInfo.codeP}</li>
                <li>{fullInfo.adresseE}</li>
                <li>{fullInfo.pageP}</li>
                <li>{fullInfo.tel}</li>
                <li>{fullInfo.semestre}</li>
                <li>
                    HTML : {fullInfo.connaissances.html}
                    CSS : {fullInfo.connaissances.css}
                    formulaires : {fullInfo.connaissances.formulaires}
                    javaScript : {fullInfo.connaissances.javaScript}
                </li>
            </ul>
        </>
    )
}

export default App