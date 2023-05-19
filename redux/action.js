import { createSlice } from "@reduxjs/toolkit";

// Scroll top
export const scrollTopSlice = createSlice({
	name: "scrollTop",
	initialState: 0,
	reducers: {
		setScrollTop: (state, action) => (state = action.payload),
	},
});

export const scrollTopAction = scrollTopSlice.actions;
