import {configureStore} from "@reduxjs/toolkit";
import annoncesReducer from '../features/annonce/annonceSlice'

const store = configureStore({
    reducer:{
        annonces : annoncesReducer
    }
})

export default store

