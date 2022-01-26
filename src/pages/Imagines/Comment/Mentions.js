import React, { useState } from "react";
import { MentionsInput, Mention } from "react-mentions";
import "./Mentions.css";

const Mentions = ({ users }) => {
  const [state, setState] = useState({
    mentions: [],
  });

  const userMentionData = users.map((myUser) => ({
    id: myUser._id,
    display: `@${myUser.name}`,
  }));
  const handleChange = (event) => {
    const value = event.target.value;
    console.log("event: ", value);
    const regex = /[^{}]+(?=})/g;
    const mentions = value.match(regex);
    console.log("mentions: ", mentions);
    setState({ value: event.target.value });
  };

  console.log("state: ", state);
  return (
    <div>
      <MentionsInput
        placeholder="@mention and comment"
        value={state.value}
        onChange={handleChange}
        className="mentions"
      >
        <Mention
          markup="@{{__type__||__id__||__display__}}"
          data={userMentionData}
          className="mentions__mention"
        />
      </MentionsInput>
    </div>
  );
};

export default React.memo(Mentions);
