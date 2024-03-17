import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSclice";

const appStore = configureStore({
    reducer : {
        user : userReducer,
    },
});

export default appStore;