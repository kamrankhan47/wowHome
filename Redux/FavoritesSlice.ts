import { createSlice } from "@reduxjs/toolkit";

interface FavoritesState{
    data: any[],

}

const initialState: FavoritesState = {
    data:[],
}

const FavoritesSlice = createSlice({
    name:"favorites",
    initialState:initialState,
    reducers:{
        addFavorites:(state,action)=>{
            const newfavorites = action.payload
console.log(newfavorites._id);

            const existingfavorites = state.data.find((favorites)=>favorites._id === newfavorites._id)

            if(!existingfavorites){
                state.data.push(newfavorites)
                console.log(...state.data);
                
                
            }else{
                console.log("You already added this item to Bookings List!");
            }
          console.log(state.data);
          
        }
    }
})

export const {addFavorites} = FavoritesSlice.actions

export default FavoritesSlice.reducer