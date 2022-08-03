import React from "react";
import "../featured/featured.css";


const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img className="featuredImg" src="https://picsum.photos/id/237/200/300" />
        <div className="featuredTitles">
  <h1>Dublin</h1>
 
  <h2>123 proprties</h2>
  </div>
  
  
      </div>
      <div className="featuredItem">
        <img src="https://picsum.photos/200/300" />
        <div className="featuredTitles">
  <h1>Dublin</h1>
  <h2>123 proprties</h2>
  </div>
  
  
      </div>
      <div className="featuredItem">
        <img src="https://picsum.photos/200/300.webp" />
        <div className="featuredTitles">
  <h1>Dublin</h1>
  <h2>123 proprties</h2>
  </div>
  
  
      </div>
      
    </div>
  );
};

export default Featured;
