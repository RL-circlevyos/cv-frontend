import { authAction } from "./auth-slice";

// custom action creator function =>  thunk
export const signUpWithNameEmailAndPassword = (data) => {
  return async (dispatch) => {
    // 📈 send data to database
    const signupAction = async () => {
      console.log(data);
      const response = await fetch(
        // `${process.env.REACT_APP_API_BASE_URL}/users`,
        `http://localhost:5000/api/users`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
      console.log(response);
      dispatch(
        authAction.getInfo({
          userid: response.user._id,
          token: response.token,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

//   login
// custom action creator function =>  thunk
export const LoginWithNameEmailAndPassword = (data) => {
  return async (dispatch) => {
    // 📈 send data to database
    const LoginAction = async () => {
      const response = await fetch(
        // `${process.env.REACT_APP_API_BASE_URL}/auth`,
        "http://localhost:5000/api/auth",
        {
          method: "POST",
          // credentials: "include",
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
      console.log(response.token);
      dispatch(
        authAction.getInfo({
          userid: response.user._id,
          token: response.token,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};