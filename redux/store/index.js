import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingSlice from "../reducer/loading";

const allReducers = combineReducers({
    loadingReducer: loadingSlice.reducer,
})

const myStore = configureStore({
    reducer: allReducers,
})

export default myStore