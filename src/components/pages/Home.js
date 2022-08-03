import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Featured from "../featured/Featured";
import '../pages/home.css';
import PropertyList from "../propertyList/PropertyList";
import Featuredproperties from "../featuredproperties/Featuredproperties";
import Maillist from "../maillist/Maillist";
import Footer from "../footer/Footer";


const Home = () => {
  return (
    

<React.Fragment>
<Navbar/>
<Header/>
<div className="HomeContainer">
  <Featured/>
  <h1 className="homeTitle">Browse by property type</h1>
<PropertyList/>
<h1 className="homeTitle">Homes guests love</h1>
<Featuredproperties/>
</div>
<Maillist/>
<Footer/>



</React.Fragment>


  );
};

export default Home;
