import { createSlice } from "@reduxjs/toolkit";
import { annonces } from "../../../db";

const annonceSlice = createSlice({
    name : "annonces",
    initialState:{ 
        annoncesList: annonces 
    },
    reducers:{
        inserer : (state,action)=>{ 
            state.annoncesList.push(action.payload);
        },
        modifier : (state,action)=>{
            const updatedList = state.annoncesList.map((item)=>{
                if (item.id == action.payload.id){
                    return action.payload
                }
                return item
            })
            state.annoncesList = updatedList
        },
        supprimer : (state,action)=>{
            const newList = state.annoncesList.filter((item)=>{
                return item.id != action.payload
            })
            state.annoncesList = newList
        }
    }
})

export const {inserer , modifier , supprimer} = annonceSlice.actions
export default annonceSlice.reducer