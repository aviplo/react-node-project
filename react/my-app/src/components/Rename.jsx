import React from "react";
import { useState } from "react";

const Rename = () => {
  const [newName, setNewName] = useState();
  const oldName = window.location.href.split("/")[3];
  console.log(oldName);
  function send() {
    fetch(`http://localhost:5002/${oldName}/rename`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({"name":newName}),
    });
  }
  return (
    <div>
      <h1>{oldName}</h1>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button
        onClick={() => {
          send();
        }}
      >
        ugu
      </button>
    </div>
  );
};

export default Rename;
