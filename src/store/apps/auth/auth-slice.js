import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: "",
  isLoggedin: false,
  userid: "",
  username: "",
  email: "",
  password: "",
  userDetails: {},
  userImagines: [],
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    getInfo(state, action) {
      state.userid = action.payload.userid;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isLoggedin = false;
    },
    userDetails(state, action) {
      state.userDetails = action.payload.userDetails;
    },
    getImagines(state, action) {
      state.userImagines = action.payload.userImagines;
    },
  },
});

export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;
