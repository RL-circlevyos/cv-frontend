import { toast } from "react-toastify";
import { UiSliceAction } from "../ui/uiSlice";
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
          // credentials: "include",
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
      toast.success("signup successful");
      console.log(response);
      // dispatch(
      //   authAction.getMessage({
      //     errMsg: "",

      //   })
      // );
    } catch (error) {
      toast.error("username or email exists");

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

      // checking response status
      if (!response.ok) {
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      return responseData;
    };

    try {
      const response = await LoginAction();
      toast.success("login successful");
      console.log(response);
      dispatch(
        authAction.getInfo({
          userid: response.user._id,
        })
      );
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };
};

//   auth state
// custom action creator function =>  thunk
export const AuthState = (token) => {
  return async (dispatch) => {
    // 📈 send data to database
    const LoginAction = async () => {
      console.log("auth state calling");
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/authstate`,
        // "http://localhost:3699/api/v1/authstate",
        {
          method: "GET",
          // credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
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
      const response = await LoginAction();
      console.log(response, "User details");
      dispatch(
        authAction.getInfo({
          userDetails: response,
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

        {
          method: "GET",
        }
      );

      // checking response status
      if (!response.ok) {
        throw Error("logout failed");
      }
    };

    try {
      await Logout();
      toast.warn("you are logged out");

      //console.log(response.id);
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };
};

export const userDetailsUpdateAction = (updateBody, token) => {
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
          headers: {
            // "Content-Type": "formdata",
            Authorization: token,
          },
          body: updateBody,
        }
      );

      /**  console.log(response);*/

      // checking response status
      if (!response.ok) {
        throw Error("user update failed");
      }

      const responseData = await response.json();
      return responseData.user;
    };

    try {
      dispatch(
        authAction.isUploading({
          isUploading: true,
        })
      );
      const response = await userDetailsUpdate();
      dispatch(
        authAction.isUploading({
          isUploading: false,
        })
      );
      toast.info("updated successfully");
      dispatch(
        authAction.userDetails({
          userDetails: response,
        })
      );
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };
};

export const userDetailsAction = (id, token) => {
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
            Authorization: token,
          },
        }
      );

      // checking response status
      if (!response.ok) {
        /**toast.error("something went wrong");*/
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      return responseData.user;
    };

    try {
      dispatch(
        UiSliceAction.loading({
          isLoading: true,
        })
      );
      const response = await userDetails();
      console.log(response, "useer details ");

      dispatch(
        authAction.visitUserDetails({
          visitUserDetails: response,
        })
      );
    } catch (error) {
      toast.error(error);
    } finally {
      dispatch(
        UiSliceAction.loading({
          isLoading: false,
        })
      );
    }
  };
};

// account details
export const accountDetailsAction = (id) => {
  return async (dispatch) => {
    // 📈 send data to database
    const accountDetails = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/ac/${id}`,
        // "http://localhost:3699/api/v1/authstate",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // checking response status
      if (!response.ok) {
        /**toast.error("something went wrong");*/
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      return responseData.user;
    };

    try {
      const response = await accountDetails();

      dispatch(
        authAction.getAccountDetails({
          accountDetails: response,
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        UiSliceAction.loading({
          isLoading: false,
        })
      );
    } finally {
    }
  };
};

// user follow
export const userFollowingAction = (id, token) => {
  return async (dispatch) => {
    // 📈 send data to database
    const userDetails = async () => {
      console.log("user followings list");
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/mydetails`,
        // "http://localhost:3699/api/v1/authstate",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      // checking response status
      if (!response.ok) {
        /**toast.error("something went wrong");*/
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      console.log(responseData.user.following);
      return responseData.user.following;
    };

    try {
      const response = await userDetails();
      console.log(response);
      dispatch(
        authAction.followingList({
          following: response,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

// mydetail
export const myDetailsAction = (token) => {
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
            Authorization: token,
          },
        }
      );

      // checking response status
      if (!response.ok) {
        throw Error("authentication failed");
      }
      /**toast.success("successfully updated");*/
      const responseData = await response.json();
      return responseData.user;
    };

    try {
      const response = await userDetails();

      dispatch(
        authAction.myDetails({
          myDetails: response,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const userImaginesAction = (id, token) => {
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
            Authorization: token,
          },
        }
      );

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

// account imagines
export const accountImaginesAction = (id) => {
  return async (dispatch) => {
    // 📈 send data to database
    const accountImagines = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/ac/imagines/${id}`,
        // "http://localhost:3699/api/v1/authstate",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // checking response status
      if (!response.ok) {
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      return responseData.imagine;
    };

    try {
      dispatch(
        UiSliceAction.loading({
          isLoading: true,
        })
      );
      const response = await accountImagines();

      dispatch(
        authAction.getAccountImagines({
          accountImagines: response,
        })
      );
      dispatch(
        UiSliceAction.loading({
          isLoading: false,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

// follow
export const userFollowAction = (id, token) => {
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
            Authorization: token,
          },
          body: JSON.stringify({
            id: id,
          }),
        }
      );

      /**console.log(response);*/

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
export const userUnfollowAction = (id, token) => {
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
            Authorization: token,
          },
          body: JSON.stringify({
            id: id,
          }),
        }
      );

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

      // checking response status
      if (!response.ok) {
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      return responseData.user;
    };

    try {
      await userDetails();
      toast.info("password changed successfully");
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };
};

// * job provider request
export const userJobProviderReqAction = (reqQuestionBody, token) => {
  return async (dispatch) => {
    // 📈 send data to database
    const jobProviderReq = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/jobproviderrequest`,

        {
          method: "POST",
          credentials: "include",
          headers: {
            Authorization: token,
          },
          body: reqQuestionBody,
        }
      );

      /**console.log(response);*/

      // checking response status
      if (!response.ok) {
        throw Error("authentication failed");
      }

      return response;
    };

    try {
      await jobProviderReq();
    } catch (error) {
      console.log(error);
    }
  };
};
