import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
    data:[],
    loading: false,
    error:"",
}

export const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
 //    console.log(response.data)
    return response.data;
 }

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
   const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
//    console.log(response.data)
   return response.data;
})

const todo_slice = createSlice({
    name:"todos",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        // Emeliyyat basladi
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });

        // Emeliyyat bitdi
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });

        // Error zamani
        builder.addCase(fetchTodos.rejected, (state, action) =>{
            state.loading = false;
            state.error = "Fetch zamani problem yarandi."
            // state.error = action.error.message || "Fetch zamani problem yarandi.";
        })

    }
})

export default todo_slice.reducer;