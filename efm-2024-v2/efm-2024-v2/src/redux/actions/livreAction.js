export function addLivreAction(newBook){
    return (
        {
            type:"AJOUTER_LIVRE",
            payload:newBook
        }
    )
}

export function deleteLivreAction(ISBN){
    return (
        {
            type:"DELETE_LIVRE",
            payload:ISBN
        }
    )
}

export function updateLivreAction(updatedBook){
    return (
        {
            type:"UPDATE_LIVRE",
            payload:updatedBook
        }
    )
}