import React, { useState, useEffect } from "react";
const CardsAI = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError("Error fetching data");
        console.log(error);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  // Check if data is an array before mapping
  if (Array.isArray(data)) {
    return (
      <>
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-slate-100 w-full max-w-56 m-auto rounded-lg p-3 mb-3"
          >
            <h1 className="text-base font-bold">{item.name}</h1>
            <h1 className="text-base font-normal">{item.email}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </>
    );
  } else if (data) {
    // Handle case where data is an object or something else
    return (
      <div className="bg-slate-100 w-full max-w-56 m-auto rounded-lg p-3 mb-3">
        <h1 className="text-base font-bold">{data.name || "No Name"}</h1>
        <h1 className="text-base font-normal">{data.email || "No Email"}</h1>
        <p>{data.body || "No content available"}</p>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default CardsAI;
