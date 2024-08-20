import React from "react";
import Link from "next/link";
const SendData = () => {
  var jsonData = {
    users: [
      {
        name: "alan",
        age: 23,
        username: "aturing",
      },
      {
        name: "john",
        age: 29,
        username: "__john__",
      },
    ],
  };

  function handleClick() {
    // Send data to the backend via POST
    fetch("http://localhost:3000/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      body: JSON.stringify(jsonData), // body data type must match "Content-Type" header
    });
  }
  return (
    <>
      <Link
        onClick={handleClick}
        href=''
        style={{
          textAlign: "center",
          width: "100px",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
      >
        Send data to backend
      </Link>
    </>
  );
};

export default SendData;
