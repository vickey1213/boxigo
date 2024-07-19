import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MyMovesItem from "../Components/MyMovesItem";
import MyProfile from "../Components/MyProfile";
import MyMoves from "../Components/MyMoves";
import Sidebar from "../Components/Sidebar";

const Allroutes = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<MyMoves/>}/>
        <Route path="/mymoves" element={<MyMoves />} />
        <Route path="/mymovesitem" element={<MyMovesItem />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </>
  );
};

export default Allroutes;
