import { configureStore } from "@reduxjs/toolkit";
import { scrollTopSlice } from "./action";

// REDUX
const store = configureStore({
	reducer: { scrollTop: scrollTopSlice.reducer },
});

export default store;
