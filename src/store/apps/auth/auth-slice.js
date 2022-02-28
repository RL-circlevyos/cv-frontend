import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: "",
  isLoggedin: false, // TODO:needs to be deleted
  userid: "",
  username: "",
  email: "",
  password: "",
  userDetails: {},
  myDetails: {},
  accountDetails: {},
  accountImagines: [],
  accountId: "",
  userImagines: [],
  following: [],
  isinitiate: false,
  isLogged: false,
  errMsg: "",
  successMsg: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    getInfo(state, action) {
      state.userDetails = action.payload.userDetails;
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
    getAccountId(state, action) {
      state.accountId = action.payload.accountId;
    },
    getAccountDetails(state, action) {
      state.accountDetails = action.payload.accountDetails;
    },
    getAccountImagines(state, action) {
      state.accountImagines = action.payload.accountImagines;
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

    // ****** new add **********
    login(state, action) {
      state.isLogged = true;
    },
    getTokenAdd(state, action) {
      state.token = action.payload.token;
    },
    getMessage(state, action) {
      state.errMsg = action.payload.errMsg;
      state.successMsg = action.payload.successMsg;
    },
  },
});

export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;
