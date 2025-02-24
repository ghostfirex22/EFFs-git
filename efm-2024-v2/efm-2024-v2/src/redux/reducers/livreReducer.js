const initialState = {
    panier : [{
        "ISBN":"543216789",
        "Titre":"livre3",
        "Auteur" :"Frank Herbert",
        "Prix":500,
        "Genre":"Science Fiction"
    },{
        "ISBN":"987612345",
        "Titre":"livre4",
        "Auteur" : "Jane Austen",
        "Prix":380,
        "Genre":"Romance"
    }]
}

function livreReducer(state = initialState,action){
    switch (action.type) {
        case "AJOUTER_LIVRE":
            return {...state,panier:[...state.panier,action.payload]}
        case "DELETE_LIVRE":
            const newList = state.panier.filter((item)=>{
                return item.ISBN !== action.payload
            })
            return {state,panier:newList}
        default :
            return state
    }
}

// function articleReducer(state = initialState,action){
//     switch (action.type){
//         case "AJOUTER_ARTICLE":
//             //ajouter le code de l'ajout
//             return {...state,articles:[...state.articles,action.payload]}
//         case "SUPRIMER_ARTICLE":
//             //supprimer tkharbi9
//             const newArticles = state.articles.filter((item)=>{
//                 return item.id !== action.payload
//             }) 
//             return {...state,articles:newArticles}
//             //update 
//         case "MODIFIER_ARTICLE":
//             const upadtedArticles = state.articles.map((item)=>{
//                 if(item.id === action.payload.id){
//                     return action.payload
//                 }
//                 return item
//             })
//             return {state,articles:upadtedArticles}
        
//         default :
//             return state
//     }
// }

export default livreReducer