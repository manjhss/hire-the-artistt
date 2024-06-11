import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthState = {
	status: boolean;
	userData: {
		$id?: string,
		name?: string,
		email?: string
	};
};

const initialState: AuthState = {
	status: false,
	userData: {},
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<object>) => {
			state.status = true;
			state.userData = action.payload;
		},
		logout: (state) => {
			state.status = false;
			state.userData = {};
		},
	},
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
