import { authAction } from "./auth-slice";

// custom action creator function =>  thunk
export const signUpWithNameEmailAndPassword = (data) => {
  return async (dispatch) => {
    // 📈 send data to database
    const signupAction = async () => {
      console.log(data);
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/signup`,
        // `http://localhost:3699/api/v1/signup`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            mode: "cors",
          },
          body: JSON.stringify(data),
        }
      );

      // checking response status
      if (!response.ok) {
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      return responseData;
    };

    try {
      const response = await signupAction();
      console.log(response.user._id);
      dispatch(
        authAction.getInfo({
          userid: response.user._id,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

// login
// custom action creator function =>  thunk
export const LoginWithNameEmailAndPassword = (data) => {
  return async (dispatch) => {
    // 📈 send data to database
    const LoginAction = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/login`,
        // "http://localhost:3699/api/v1/login",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "http://localhost:3000",
          },
          body: JSON.stringify(data),
        }
      );

      // console.log(response);

      // checking response status
      if (!response.ok) {
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      return responseData;
    };

    try {
      const response = await LoginAction();
      console.log(response);
      dispatch(
        authAction.getInfo({
          userid: response.user._id,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

//   auth state
// custom action creator function =>  thunk
export const AuthState = () => {
  return async (dispatch) => {
    // 📈 send data to database
    const LoginAction = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/authstate`,
        // "http://localhost:3699/api/v1/authstate",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // console.log(response);

      // checking response status
      if (!response.ok) {
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      return responseData;
    };

    try {
      const response = await LoginAction();
      console.log(response.id);
      dispatch(
        authAction.getInfo({
          userid: response._id,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

// logout
export const logoutAction = () => {
  return async (dispatch) => {
    // 📈 send data to database
    const Logout = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/logout`,
        // "http://localhost:3699/api/v1/authstate",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // console.log(response);

      // checking response status
      if (!response.ok) {
        throw Error("logout failed");
      }
    };

    try {
      const response = await Logout();
      console.log(response.id);
    } catch (error) {
      console.log(error);
    }
  };
};

export const userDetailsUpdateAction = (updateBody) => {
  return async (dispatch) => {
    // 📈 send data to database
    const userDetailsUpdate = async () => {
      console.log("update calling");
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/userdashboard/update`,
        // "http://localhost:3699/api/v1/authstate",
        {
          method: "PATCH",
          credentials: "include",
          // headers: {
          //   "Content-Type": "formdata",
          // },
          body: updateBody,
        }
      );

      // console.log(response);

      // checking response status
      if (!response.ok) {
        throw Error("user update failed");
      }

      const responseData = await response.json();
      return responseData.user;
    };

    try {
      const response = await userDetailsUpdate();

      dispatch(
        authAction.userDetails({
          userDetails: response,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const userDetailsAction = (id) => {
  return async (dispatch) => {
    // 📈 send data to database
    const userDetails = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/userdashboard/${id}`,
        // "http://localhost:3699/api/v1/authstate",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // console.log(response);

      // checking response status
      if (!response.ok) {
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      return responseData.user;
    };

    try {
      const response = await userDetails();
      console.log(response.id);
      dispatch(
        authAction.userDetails({
          userDetails: response,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

// mydetail
export const myDetailsAction = () => {
  return async (dispatch) => {
    // 📈 send data to database
    const userDetails = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/mydetails`,
        // "http://localhost:3699/api/v1/authstate",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // console.log(response);

      // checking response status
      if (!response.ok) {
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      return responseData.user;
    };

    try {
      const response = await userDetails();
      console.log(response.id);
      dispatch(
        authAction.userDetails({
          myDetails: response,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const userImaginesAction = (id) => {
  return async (dispatch) => {
    // 📈 send data to database
    const userImagines = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/userimagines/${id}`,
        // "http://localhost:3699/api/v1/authstate",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // console.log(response);

      // checking response status
      if (!response.ok) {
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      return responseData.imagine;
    };

    try {
      const response = await userImagines();
      console.log(response);
      dispatch(
        authAction.getImagines({
          userImagines: response,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

// follow
export const userFollowAction = (id) => {
  return async (dispatch) => {
    // 📈 send data to database
    const userDetails = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/follow`,
        // "http://localhost:3699/api/v1/authstate",
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        }
      );

      // console.log(response);

      // checking response status
      if (!response.ok) {
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      return responseData.user;
    };

    try {
      const response = await userDetails();
      console.log(response.id);
    } catch (error) {
      console.log(error);
    }
  };
};

// unfollow
export const userUnfollowAction = (id) => {
  return async (dispatch) => {
    // 📈 send data to database
    const userDetails = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/unfollow`,
        // "http://localhost:3699/api/v1/authstate",
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        }
      );

      // console.log(response);

      // checking response status
      if (!response.ok) {
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      return responseData.user;
    };

    try {
      await userDetails();
    } catch (error) {
      console.log(error);
    }
  };
};

// change password
export const changePasswordAction = (passwordBody) => {
  return async (dispatch) => {
    // 📈 send data to database
    const userDetails = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/password/update`,
        // "http://localhost:3699/api/v1/authstate",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passwordBody),
        }
      );

      // console.log(response);

      // checking response status
      if (!response.ok) {
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      return responseData.user;
    };

    try {
      await userDetails();
    } catch (error) {
      console.log(error);
    }
  };
};
