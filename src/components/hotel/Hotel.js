import React from "react";
import { useState } from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Navbar from "../navbar/Navbar";
import "../hotel/hotel.css";
import MailList from '../maillist/Maillist';
import Footer from '../footer/Footer';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
const Hotel = () => {
    const [slidenumber,setSlidenumber] = useState(0);

    const [open,setOpen] = useState(false);

  const photos = [
    {
      src: "https://loremflickr.com/320/240" ,
    },
    {
      src: "https://loremflickr.com/320/240"  ,
    },
    {
      src: "https://loremflickr.com/320/240" ,
    },
    {
      src: "https://loremflickr.com/320/240" ,
    },

    {
      src: "https://loremflickr.com/320/240" ,
    },
    {
      src: "https://loremflickr.com/320/240" ,
    },
  ];

  const handleOpen = (i)  => {
    setSlidenumber([i]);
    setOpen(true);

  };
  const handleMove=(direction)=>{
    let newSlideNumber;

  /* /\\/*/ if(direction==="l"){
        newSlideNumber  = slidenumber === 0 ? 5 : slidenumber-1

    }else{
        newSlideNumber = slidenumber === 5 ? 0 : slidenumber+1
    }

    setSlidenumber (newSlideNumber) ;

  };
  return (
    <div>
      <Navbar />
      <header type="list" />
      <div className="hotelContainer">

     {open && <div className="slider">
    
     <ExitToAppIcon className="close" onClick={()=>setOpen(false)}/>
     <ArrowCircleLeftIcon classname="arrow" onClick={()=>handleMove("l")}/>

     <div className="sliderWrapper">
        <img src={photos[slidenumber].src} alt="" className="sliderImg"/>
    
     <ArrowCircleRightIcon classname="arrow"onClick={()=>handleMove("l")}/>
     </div>
     </div>
    
     }

     

        <div className="hotelWrapper">
            <button className="bookNow">Reserve or book now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress"></div>
          <FmdGoodIcon />
          <span>Elton St 123 New York</span>
      
        <span className="hotelDistance">
          Excellent location 500m from center
        </span>
        <span className="hotelPriceHighlight">
          Book a stay over $114 this property an get a free airport taxi
        </span>

        <div className="hotelImages">
          {photos.map((photo,i) => (
            <div className="hotelImgWrapper">
              <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
            </div>
          ))}
        </div>

        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hoteltitile">Stay in the heart of Krakow</h1>
            <p className="hotelDesc">dsfjklklkkkllklklklklk
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
              located in the real herart of Krawo, this property hasa
              nkodkkcl;dlcd'cdc
            </span>
            <h2>
              <b>$945</b>(p nights)
            </h2>
            <button>Reserve or Book Now!</button>
          </div>
          </div>
          <MailList/>
          <Footer/>
          </div>
        </div>
      </div>

  );
};

export default Hotel;
