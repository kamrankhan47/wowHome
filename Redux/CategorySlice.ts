import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface CategoryState{
    data: any[],
    loading: boolean,
    error: boolean
}

const initialState: CategoryState = {
    data:[],
    loading:false,
    error:false

}
  
export const getAllCategory = createAsyncThunk(
    "category/getAllCategory",
    async ()=>{
        const response = await axios.get("http://172.16.0.102:8080/categories")
        return response.data
    }
)
export const getbyidCategory = createAsyncThunk(
    "category/getbyidCategory",
    async (id:number)=>{
        const response = await axios.get(`http://172.16.0.102:8080/categories/${id}`)
        return response.data
    }
)

const CategorySlice = createSlice({
    name:"category",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder.addCase(getAllCategory.pending,(state,action)=>{
              state.loading = true  

       }).addCase(getAllCategory.fulfilled,(state,action)=>{
            state.data = action.payload
            state.loading = false
       }).addCase(getAllCategory.rejected,(state,action)=>{
            state.error = true
            state.loading = false
       })

       builder.addCase(getbyidCategory.pending,(state,action)=>{
        state.loading = true

       }).addCase(getbyidCategory.fulfilled,(state,action)=>{
        state.data = action.payload
        state.loading = false
       }).addCase(getbyidCategory.rejected,(state,action)=>{
        state.error = true
        state.loading = false
       })

    }

})

export default CategorySlice.reducer



