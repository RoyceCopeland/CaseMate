import React, { Component } from "react";
import CalItem from './CalItem';
import "./Calendar.css";
const timeSlotNum = 37;
const Calendar = props => {
    const renderTimeSlots = () =>{
        console.log("props", props);
        const timeSlots = []
        var hour = 6;
        var min = "00";
        var halfMin = "30";
        var d;
        var ev = "";
        for (let i = 0; i < timeSlotNum; i++) {
          for(let k in props.events){
            
            if (props.events[k].time === hour && i % 2 === 0 ){
              ev = props.events[k].event;
            }
          }
          if(i % 2 === 0){
            d = new Date("October 13, 2014 "+ hour +":"+min+":00").toLocaleString('en-US',{hour12: true, hour: 'numeric', minute: 'numeric'});
          }else{
            d = new Date("October 13, 2014 "+ hour++ +":"+halfMin+":00").toLocaleString('en-US',{hour12: true, hour: 'numeric', minute: 'numeric'});
          }
          console.log("click", props.handleClick);
          timeSlots.push(<CalItem d={d} event={ev} clickHandler={props.handleClick} i={i}/>); 
          ev = "";
        }
        return timeSlots;
      }
    return (
      <div className="cal-table-wrapper">
        <table className="cal-table">
            {renderTimeSlots()}
        </table>
      </div>
    )
}

export default Calendar;
