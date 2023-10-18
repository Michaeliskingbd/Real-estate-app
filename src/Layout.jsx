import React from 'react'
import {Outlet} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footerimage from './components/footerImage/Footerimage';






export default function Layout() {
  return (
    <main>
      <NavBar/>
      <Outlet />
      <Footerimage/>
 
     
      
    </main>
  );
}