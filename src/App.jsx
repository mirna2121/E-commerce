//Routes : elmsarat bta3ty
//main layout : elskeleton bta3 el website
//main component : parts bta3t elwebsite k2ny brkb pazzle
//lw fe 'notifecation' msln btt7t hna brdo

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SideMenu from "./Components/SideMenu/SideMenu";

export default function App() {
  {
    /* condetional rendering 3ayza a3ml condetion fe7ala an y7sl 7aga bs f page mo3yna welba2y la*/
  }
  let acceptedRoutes = ["order", "settings", "bills", ""];
  let url = window.location.href;
  let path = url.split("/")[3];
  return (
    <div className="App col-12 d-flex ">
      {/* {path != "login" || path != "" ? <h1>sideBar</h1> : null} "or another sollution to but this condetion:"*/}
      {acceptedRoutes.includes(path) && <SideMenu />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/order" element={<h1>food and drinks</h1>} />
        <Route path="/settings" element={<h1>settings</h1>} />
        <Route path="/bills" element={<h1>bills</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="*" element={<h1>404 page</h1>} />
      </Routes>
    </div>
  );
}
