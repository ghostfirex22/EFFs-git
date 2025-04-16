import { useEffect, useState } from "react"
import Afficharge from "./Afficharge"
import Details from "./Details"
import { useSelector } from "react-redux"

function App(){

  const cours = useSelector((state)=>state.cours)

  const [selectedCour,setSelectedCour] = useState(null)
  const [detailCour,setDetailCour] = useState({})

  useEffect(()=>{
    const currentCour = cours.find((item)=>{
        return item.id == selectedCour
    })
    setDetailCour(currentCour)
  },[selectedCour])

  return (
      <>
        <Afficharge setSelectedCour={setSelectedCour} />
        <Details detailCour={detailCour}/>
      </>
  )
}

export default App