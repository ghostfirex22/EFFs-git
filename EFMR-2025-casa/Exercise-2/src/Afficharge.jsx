import { useSelector } from "react-redux"
import image from './lighter-books-bg.png'

function Afficharge({setSelectedCour}){

    const cours = useSelector((state)=>state.cours)

    console.log(cours)

    return (
        <>
            <div className="text-black">
                {cours.map((item)=>{
                    return (
                        <div key={item.id} onClick={()=> setSelectedCour(item.id)} >
                            <p>{item.diplome}</p>
                            <img src={image} alt="" />
                            <h1>{item.nom}</h1>
                        </div>)
                })}
            </div>
        </>
    )
}

export default Afficharge