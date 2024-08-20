import React from "react";
import GETscript from "../script";

const Cards = () => {
  return (
    <>
      <script src={GETscript}></script>
      <div id="users" className="bg-slate-100 w-full max-w-72 text-base m-auto rounded-lg p-3 ">
        <h1  className=" font-bold">Name</h1>
        <h2  className=" font-normal">Email</h2>
        <p >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, amet?
        </p>
      </div>
    </>
  );
};

export default Cards;
