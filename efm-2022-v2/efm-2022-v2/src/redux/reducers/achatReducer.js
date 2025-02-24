const initialState = {
  clients: [{ numero: "1", nom: "Nom1", prenom: "Premon1"},
    { numero: "2", nom: "Nom2", prenom: "Premon2"}
  ],
  produits: [
    { codeProduit: "1", intitule: "Produit1", prix: 10 ,quantite : 30,qAlert : 5},
    { codeProduit: "2", intitule: " Produit2", prix: 20 ,quantite : 50,qAlert : 3},
    { codeProduit: "3", intitule: "Produit3", prix: 30 ,quantite : 15,qAlert : 1},
  ],
  achats: [{ numero: "1", codeProduit: "1", qte: 5 }
    ,{ numero: "2", codeProduit: "3", qte: 7 },
    { numero: "1", codeProduit: "2", qte: 20 }
  ],
};

function achatReducer(state = initialState, action) {
  switch (action.type) {
    case "AJOUTER_ACHAT":
        let UpdatedProduits = state.produits.map((item)=>{
          if(action.payload.newAchats.codeProduit == item.codeProduit){
            console.log("done")
            item.quantite = action.payload.currentQuentite
          }return item
        }
      )
      return { ...state,produits:UpdatedProduits, achats:[...state.achats, action.payload.newAchats]};
    case "SUPRIMER_ACHAT":
      const newList = state.achats.filter((item)=>{
        return item.numero !== action.payload
      }) 
      return {...state,achats:newList}
      
    default:
      return state;
  }
}

export default achatReducer;