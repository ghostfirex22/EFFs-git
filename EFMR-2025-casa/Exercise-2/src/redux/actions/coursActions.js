export function ajouterCoursAction(newCour){
    return ({
        type:"Ajouter_cour",
        payload:newCour
    })
}

export function suprimerCour(id){
    return ({
        type:"Suprimer_cour",
        payload:id
    })
}

export function modifierCour(updatedCour){
    return({
        type:"Modifier_cour",
        payload:updatedCour
    })
}

