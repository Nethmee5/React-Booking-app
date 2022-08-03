import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import "../List/list.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Searchitem from "../serachitem/Searchitem.js";

const List = () => {
  const location = useLocation();
  const [Destination, setDestination] = useState(location.state.Destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  console.log(location);
  return (
    <div>
      <Navbar />
      <Header type="List" />

      <div className="listController">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={Destination} />
            </div>
            <div className="lsItem">
              <label>Check in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  range={date}
                />
              )}
            </div>

            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min Price<small>per night</small>
                </span>
                <input type="number" className="lsOptionNumber" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max Price<small>per night</small>
                </span>
                <input type="number" className="lsOptionNumber" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptiontext">adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.adult}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptiontext">Children</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder={options.children}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptiontext">Room</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.room}
                />
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
             <Searchitem/>
             <Searchitem/>
             <Searchitem/>
             <Searchitem/>
             <Searchitem/>
             <Searchitem/>
             <Searchitem/>
             <Searchitem/>







          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
