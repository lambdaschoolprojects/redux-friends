import React from "react";

const Friend = ({ data: { name, age, email } }) => {
  return (
    <>
      <h2>Name: {name} </h2>
      <h3>Age: {age} </h3>
      <h3>Email: {email} </h3>
      <hr />
    </>
  );
};

export default Friend;
