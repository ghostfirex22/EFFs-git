import {Route, Routes} from 'react-router-dom'
import Layout from './Layout'
import AnnsByReg from './AnnsByReg'
import DiffuserAnn from './DiffuserAnn'
import AdminAnns from './AdminAnns'
import { useState } from 'react'
import DetailAnn from './DetailAnn'
import UpdateAnn from './UpdateAnn'
function App(){

    const [annonceDetail,setAnnonceDetail] = useState(null)
    const [updateAnnonce,setUpdateAnnonce] = useState({})

    return (
        <>
            <div className='min-h-screen bg-gray-100'>
                <Routes>
                    <Route path='/' element={<Layout/>} ></Route>
                    <Route path='/AnnsByReg' element={<AnnsByReg/>}></Route>
                    <Route path='/DiffuserAnn' element={<DiffuserAnn/>}></Route>
                    <Route path='/AdministrerAnns' element={<AdminAnns setAnnonceDetail={setAnnonceDetail} />}></Route>
                    <Route path='/DetailAnn' element={<DetailAnn annonceDetail={annonceDetail} setUpdateAnnonce={setUpdateAnnonce} />} ></Route>
                    <Route path='/UpdateAnn' element={<UpdateAnn updateAnnonce={updateAnnonce}/>}></Route>
                </Routes>
            </div>

        </>
    )
}

export default App