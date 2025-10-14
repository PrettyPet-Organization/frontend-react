import { createSlice } from '@reduxjs/toolkit';

interface MobileMenuState {
	isOpened: boolean;
}

const initialState: MobileMenuState = {
	isOpened: false,
};

export const mobileMenuSlice = createSlice({
	name: 'mobileMenu',
	initialState,
	reducers: {
		open: (state) => {
			state.isOpened = true;
		},
		close: (state) => {
			state.isOpened = false;
		},
		toggle: (state) => {
			state.isOpened = !state.isOpened;
		},
	},
});

export const { open, close, toggle } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
