const initState={
    produits:[
        {ref:7,nom:'PC HP',categorie:'informatique'},
        {ref:8,nom:'SKYWORTH',categorie:'TV'}
    ]
}

function produitReducer(state = initState,action){
    switch(action.type){
        case "add_produit" :
            return {...state,produits:[...state.produits,action.payload]}
        case "delete_produit":
            const newList = state.produits.filter((item)=>{
                return item.ref != action.payload
            })
            return {...state,produits:newList}
        default :
            return state
    }
}

export default produitReducer