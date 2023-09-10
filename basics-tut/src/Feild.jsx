import React from "react";
const name = document.querySelector(".name");

const Feild = ({ name, email, index }) => {
  return (
    <div className="data-val">
      <h4 className="name">{name}</h4>
      <h4 className="name">{email}</h4>
      <button>Check</button>
    </div>
  );
};

export default Feild;
