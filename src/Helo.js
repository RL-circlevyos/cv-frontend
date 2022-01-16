import React, { useState } from "react";

const Helo = () => {
  const [view, setView] = useState("");
  const [data, setData] = useState("");
  const selectHandler = () => {
    setData(view);
  };
  const bold = () => {
    const x = <b>{data}</b>;
    setView(x);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="type"
        value={view}
        onChange={(e) => setView(e.target.value)}
      />
      <button onClick={bold}>bold</button>
      <div onSelect={selectHandler}>{view}</div>
    </div>
  );
};

export default Helo;
