import { useSelector } from "react-redux"

function Modifier(){

    const cours = useSelector((state)=>state.cours)

    return (
        <>                        
            <h1>{detailCour.nom}</h1>
            <p>{detailCour.details}</p>
            <span>{detailCour.formateur}</span>
            <input type="text" name="duree" />
        </>
    )
}

export default Modifier