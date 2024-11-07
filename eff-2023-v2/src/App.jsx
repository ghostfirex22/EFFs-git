import { useEffect, useState } from "react";
import ListEmployes from "./composante1";
import Rechercher from "./composante2";
import Materiel from "./composante";

function App(){

    const [employes,setEmployes] = useState([]);
    
    useEffect(function (){
        async function getEmployes(){
            const data = await fetch("http://localhost:4000/employes/")
            const EmployesData = await data.json();
            setEmployes(EmployesData)
        }
        getEmployes()
    },[])

    return (
        <>  
            <ListEmployes info={employes}/>
            <Rechercher info={employes}/>
            <Materiel/>
        </>
    )
}

export default App;