import { useEffect, useState } from "react";
import "./App.css";
import MyMovesItem from "./Components/MyMovesItem";
import Sidebar from "./Components/Sidebar";
import Allroutes from "./AllRoutes/Allroutes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="relative flex h-screen">
        <div className="hidden md:block md:mr-24">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <div className="overflow-auto flex-1 p-4">
            <Allroutes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
