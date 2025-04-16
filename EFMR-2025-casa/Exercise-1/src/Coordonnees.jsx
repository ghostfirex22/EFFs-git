function Coordonnees({setFullInfo,fullInfo}){

    function inputsChanges(e){
        let key = e.target.name
        let val = e.target.value
        let _fullInfo = {...fullInfo}
        _fullInfo[key] = val
        setFullInfo(_fullInfo)
    }

    return(
        <>
            <div>
                <label htmlFor="">Adresse postale</label>
                <input type="text" name="adresseP" onChange={inputsChanges} />
            </div>            
            <div>
                <label htmlFor="">Code postal</label>
                <input type="text" name="codeP" onChange={inputsChanges}/>
            </div>
            <div>
                <label htmlFor="">Adresse electronique</label>
                <input type="text" name="adresseE" onChange={inputsChanges}/>
            </div>
            <div>
                <label htmlFor="">Page personnelle</label>
                <input type="text" name="pageP" onChange={inputsChanges}/>
            </div>
            <div>
                <label htmlFor="">Telephone portable</label>
                <input type="text" name="tel" onChange={inputsChanges}/>
            </div>
            <div>
                <label htmlFor="">semestre</label>
                <select name="semestre" id="" onChange={inputsChanges}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
        </>
    )
}

export default Coordonnees