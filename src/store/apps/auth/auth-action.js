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

//   login
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
