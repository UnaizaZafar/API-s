import React from "react";
import GETscript from "../script";

const Cards = () => {
  return (
    <>
      <script src={GETscript}></script>
      <div id="users" className="bg-slate-100 w-max  m-auto rounded-lg p-3 ">
        <h1 className="text-base  font-bold">Name</h1>
        <h1 className="text-base font-normal">Email</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, amet?
        </p>
      </div>
    </>
  );
};

export default Cards;
