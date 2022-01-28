import React, { useState } from "react";
import { MentionsInput, Mention } from "react-mentions";
import Button from "@mui/material/Button";
import "./Mention.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { commentCreateAction } from "../../../store/apps/imagines/imagine-action";
import { PaperAirplaneIcon } from "@heroicons/react/solid";

const Mentions = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const imagineId = useParams();
  const [mentioned, setMentioned] = useState("");

  const userMentionData = auth?.userDetails?.followers?.map((myUser) => ({
    id: myUser._id,
    display: `${myUser.name}`,
  }));

  const saveComment = () => {
    let newComment = mentioned;
    newComment = newComment.split("@@@__").join('<a href="/user/');
    newComment = newComment.split("^^^__").join('">');
    newComment = newComment.split("@@@^^^").join("</a>");
    if (newComment !== "") {
      let comment = newComment.trim();
      const commentBody = {
        textcomment: comment,
      };
      dispatch(commentCreateAction(commentBody, imagineId.id));
      //Call to your DataBase like backendModule.saveComment(comment,  along_with_other_params);
      // setMentioned({
      //   comment: "",
      // });
    }
  };
  return (
    <div className="flex justify-between items-center">
      <div className="w-full">
        {" "}
        <MentionsInput
          className="mentions"
          value={mentioned}
          onChange={(event) => setMentioned(event.target.value)}
          placeholder="@mention and comment"
        >
          <Mention
            className="mentions__mention"
            trigger="@"
            markup="@__display__ "
            data={userMentionData}
            displayTransform={(id, display) => {
              return `@${display}`;
            }}
          />
        </MentionsInput>
      </div>
      <div>
        <Button className="btn btn-us" onClick={saveComment}>
          <PaperAirplaneIcon className="h-5 w-5 transform rotate-45" />
        </Button>
      </div>
    </div>
  );
};

export default Mentions;
