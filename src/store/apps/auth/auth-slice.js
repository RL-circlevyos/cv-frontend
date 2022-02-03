import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: "",
  isLoggedin: false,
  userid: "",
  username: "",
  email: "",
  password: "",
  userDetails: {},
  myDetails: {},
  userImagines: [],
  following: [],
  isinitiate: false,
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
    myDetails(state, action) {
      state.myDetails = action.payload.myDetails;
    },
    getImagines(state, action) {
      state.userImagines = action.payload.userImagines;
    },
    userInitiate(state, action) {
      state.isinitiate = action.payload.isinitiate;
    },
    followingList(state, action) {
      state.following = action.payload.following;
    },
  },
});

export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;
