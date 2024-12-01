import React from "react";
import Header from "./components/header";
import Navber from "./components/navbar";
import Hero from "./components/hero";
import TrusedBy from "./components/trusedBy";
import ExploreCourses  from "./components/ExploringCourses";
import OurAchivement from "./components/OurAchivement";
import Ourteam from "./components/Ourteam";
import CustomerTestimonials from "./components/customerTestimonials";
import Footer from "./components/footer";

 export default  function Home (){
    return(
      <div>
        <Header />
        <Navber/>
        <Hero/>
        < TrusedBy /> 
        < CustomerTestimonials /> 
        <ExploreCourses />
        <OurAchivement/>
        <Ourteam/>
        <Footer/>
      </div>
    )
 };
 
 