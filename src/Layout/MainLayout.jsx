import React from 'react'
import ContactInfo from "../Components/ContactInfo";
import NavBar from "../Components/NavBar";
import Footer from '../Components/Footer'
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
        <ContactInfo/>
        <NavBar/>
        <Outlet/>
       <Footer/>

    </div>
  )
}

export default MainLayout