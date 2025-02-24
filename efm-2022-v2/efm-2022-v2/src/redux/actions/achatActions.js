// Function crateur d'action(action creator)

export function addAchatsAction(newAchats,currentQuentite) {
    return (
        {
            type:"AJOUTER_ACHAT",
            payload:{newAchats:newAchats,currentQuentite:currentQuentite}
        }
    )
}

export function updateAchatsAction(newAchats){
    return (
        {
            type:"MODIFIER_ACHAT",
            payload:newAchats
        }
    )
}

export function deleteAchatsAction(AchatsId){
    return(
        {
            type:"SUPRIMER_ACHAT",
            payload:AchatsId
        }
    )
}

