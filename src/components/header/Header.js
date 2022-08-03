import React from "react";
import { useState } from "react";
import "../header/header.css";
import HotelIcon from "@mui/icons-material/Hotel";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ParkIcon from "@mui/icons-material/Park";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [Destination,setDestination] =useState("");
  const [date, setDate] = useState([
 
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate()
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
const handleSearch = () =>{
   navigate("/hotels",{ state: {Destination,date,options}});
}

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <HotelIcon />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FlightIcon />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <DirectionsCarIcon />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <ParkIcon />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <AirplaneTicketIcon />
            <span>Airport taxis</span>
          </div>
        </div>

        <><h1 className="headerTitle">a lifetime of discount?It's Genius.</h1>
        <p className="headerDesc">
          get rewaredd for your travels unlock instant savings of 10% or more
          with a free Lambooking account
        </p>
        <button className="headerBtn">Sign in / register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <div className="headerIcon">
              <HotelIcon />

              <input
                type="text"
                placeholder="where are you going?"
                className="headerSearchInput"
                onChange={e=>setDestination(e.target.value)}
              />
            </div>
          </div>
          <div className="headerSearchItem">
            <div className="headerIcon">
              <CalendarMonthIcon />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new date()}
                />
              )}
            </div>
          </div>
          <div className="headerSearchItem">
            <div className="headerIcon">
              <PersonIcon />
              <span onClick={()=>setOpenOptions(openOptions?false:true)} className="headerSearchText">
                {`${options.adult} adult . ${options.children} children . ${options.room}`}</span>

                  
                
                <div className="options">
                <div className="optionItem"style={{visibility: "show"}}>
                  
                  {openOptions?
                  (<div><span   className="optionText">Adult</span>
                    <div className="optionCounter">
                    <button
                    
                       disabled={options.adult <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                    >
                      +
                    </button>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "d")}
                      >
                        +
                      </button>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  </div>):""}
                </div>
              </div>
            </div>
          </div>
          <div className="headerSearchItem">

          <button type="button" className="headerBtn"onClick={handleSearch}>Search</button>
          </div>
        </div></>
      </div>
    </div>
  );
};

export default Header;
