import React, { useState } from "react";
import Header from '../components/Layout/Header.jsx'
import DashboardItems from '../components/Layout/DashboardItems.jsx'
import NewsAndEvents from "../components/Layout/NewsAndEvents.jsx";
import Footer from '../components/Layout/Footer.jsx'
import Images from '../components/Layout/Images.jsx'
import Achievements from '../components/Layout/Achivements.jsx'
export default function Home() {

    return (
      <>
        <Header />
        <DashboardItems/>
        <NewsAndEvents/>
        <Achievements/>
        <Images/>
        <Footer/>
        
        

      </>
    );
  }
