function Menu({rowSelected}){

    return (
        <>
            <ul>
                <li> Id : {rowSelected.id} </li>
                <li> Nom : {rowSelected.nomP} </li>
                <li> description : {rowSelected.desP}</li>
                <li> Prix : {rowSelected.prixP}</li>
                <li>Categorie Produit:
                    {rowSelected.categorie.id}
                    {rowSelected.categorie.nomC}
                    {rowSelected.categorie.thumbnail}
                </li>
            </ul>
        </>
    )
}

export default Menu