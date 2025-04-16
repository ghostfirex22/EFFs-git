function Connaissances({setFullInfo,fullInfo}){

    return (
        <>
            <div>
                <h3>Connaissances</h3>
                <div>
                    <input type="checkbox" name='html' onChange={(e)=>setFullInfo({...fullInfo,connaissances:{...fullInfo.connaissances,[e.target.name] :e.target.checked }})}/>
                    <label htmlFor="">HTML</label>
                    <input type="checkbox" name='css' onChange={(e)=>setFullInfo({...fullInfo,connaissances:{...fullInfo.connaissances,[e.target.name] :e.target.checked }})}/>
                    <label htmlFor="">CSS</label>
                    <input type="checkbox" name='formulaires' onChange={(e)=>setFullInfo({...fullInfo,connaissances:{...fullInfo.connaissances,[e.target.name] :e.target.checked }})}/>
                    <label htmlFor="">formulaires</label>
                    <input type="checkbox" name='javaScript' onChange={(e)=>setFullInfo({...fullInfo,connaissances:{...fullInfo.connaissances,[e.target.name] :e.target.checked }})}/>
                    <label htmlFor="">JavaScript</label>
                </div>
            </div>
        </>
    )
}

export default Connaissances