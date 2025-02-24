export function addProduit(newProduit){
    return (
        {
            type:"add_produit",
            payload:newProduit
        }
    )
}

export function deleteProduit(ref){
    return (
        {
            type:"delete_produit",
            payload:ref
        }
    )
}