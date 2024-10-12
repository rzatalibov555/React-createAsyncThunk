import { configureStore } from "@reduxjs/toolkit";
import todoReducer  from "../redux/todo_slice";

export default configureStore({
    reducer: {
        todos: todoReducer,
    },
});