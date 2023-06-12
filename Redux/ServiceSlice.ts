import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ServiceState{
    data: any[],
    loading: boolean,
    error: boolean

}

const initialState: ServiceState = {
    data:[],
    loading:false,
    error:false

}

export const getAllService = createAsyncThunk(
    "service/getAllService",
    async ()=>{
        const response = await axios.get("http://192.168.0.101:8080/services")
        return response.data
            
    }
)

export const getbyidService = createAsyncThunk(
    "service/getbyidService",
    async (id:number)=>{
        const response = await axios.get(`http://192.168.0.101:8080/services/${id}`)
        return response.data
    }
)


const ServiceSlice = createSlice({
    name:"service",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
         builder.addCase(getAllService.pending,(state,action)=>{
                  state.loading = true  
    
         }).addCase(getAllService.fulfilled,(state,action)=>{
                state.data = action.payload
                state.loading = false
         }).addCase(getAllService.rejected,(state,action)=>{
                state.error = true
                state.loading = false
         })
    
         builder.addCase(getbyidService.pending,(state,action)=>{
          state.loading = true
    
         }).addCase(getbyidService.fulfilled,(state,action)=>{
          state.data = action.payload
          state.loading = false
         }).addCase(getbyidService.rejected,(state,action)=>{
          state.error = true
          state.loading = false
         })
    
    }
})

export default ServiceSlice.reducer