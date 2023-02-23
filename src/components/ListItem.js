import React from "react";

export const ListItem = ({
  title,
  body,
  votesCount,
  handleUpVote,
  handleDownVote,
}) => {
  return (
    <div style={{ display: "flex", flexFlow: "row" }}>
      <div>
        <button onClick={handleUpVote}>^</button>
        <p>{votesCount}</p>
        <button onClick={handleDownVote}>v</button>
      </div>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};
