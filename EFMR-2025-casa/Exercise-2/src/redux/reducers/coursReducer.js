import {produce} from 'immer'

const initialState = {
    cours:[
        {
          id: 1,
          nom: 'Technicien informatique',
          duree: 12,
          formateur: 'MrSBAIT',
          diplome: 'Niveau 6',
          details: 'Gérez un parc informatique sécurisé, déployez des postes de travail et apportez un support aux utilisateurs'
        },
        {
          id: 2,
          nom: 'Supply chain analyst',
          duree: 12,
          formateur: 'MrFAKHRI',
          diplome: 'Niveau 6',
          details: 'Exploitez et interprétez les données de la chaîne de approvisionnement'
        }
      ]
}

function coursReducer(state = initialState,action){
    return produce(state,(draft)=>{
        switch(action.type) {
            case "Ajouter_cour" :
                draft.cours.push(action.payload)

            case "Suprimer_cour" :
                const newList = state.cours.filter((item)=>{
                    return item.id != action.payload
                })
                draft.cours = newList

            case "Modifier_cour" :
                const updatedList = state.cours.map((item)=>{
                    if(item.id == action.payload.id){
                        return item = action.payload
                    }
                    return item
                })
                draft.cours = updatedList

            default :
                    return state
        }
    })
}

export default coursReducer