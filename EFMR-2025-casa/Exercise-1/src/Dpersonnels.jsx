function Dpersonnels({setFullInfo,fullInfo}){

    function inputsChanges(e){
        let key = e.target.name
        let val = e.target.value
        let _fullInfo = {...fullInfo}
        _fullInfo[key] = val
        setFullInfo(_fullInfo)
    }

    return (
        <>
            <h1>Vos donnees personnelles</h1>
            <div>
                <label htmlFor="">Nom</label>
                <input type="text" name="nom" onChange={inputsChanges} placeholder="votre nom"/>
            </div>
            <div>
                <label htmlFor="">Prenom</label>
                <input type="text" name="prenom" onChange={inputsChanges} placeholder="votre prenom"/>
            </div>
            <div>
                <label htmlFor="">Date de naissance</label>
                <input type="date" name="dateN" onChange={inputsChanges}/>
            </div>
            <div>
                <h3>Lieu de naissance</h3>
                <div>
                    <label htmlFor="">Seine-Saint-Denis</label>
                    <input type="radio" name="lieuN" value='Seine-Saint-Denis' onChange={inputsChanges}/>
                    <label htmlFor="">Reste du monde</label>
                    <input type="radio" name="lieuN" value='Reste du monde' onChange={inputsChanges}/>
                </div>
            </div>
        </>
    )
}

export default Dpersonnels