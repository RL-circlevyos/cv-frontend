import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utility/notification/Notification";

function ActivationEmail() {
  const { activation_token } = useParams();

  const [err, setErr] = useState("");
  const [success, setsuccess] = useState("");

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/activation`,
            {
              activation_token,
            }
          );
          setsuccess(res.data.msg);
        } catch (err) {
          err.response.data.msg && setErr(err.response.data.msg);
        }
      };
      activationEmail();
    }
  }, [activation_token]);
  return (
    <div className="active_page">
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
      {success && <Link to="/login">Login Now</Link>}
    </div>
  );
}

export default ActivationEmail;
