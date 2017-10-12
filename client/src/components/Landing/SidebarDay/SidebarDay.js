import React from "react";
import "./SidebarDay.css";
import {SideNav, SideNavItem, Button, Col, Card, Icon, CardPanel} from 'react-materialize'
import ToDo from "../ToDo";
import ToDoItem from "../ToDo/ToDoItem";
const timeSlotNum = 37;

const SidebarDay = props => {

  const renderTimeSlots = () =>{
    
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
      
      timeSlots.push(<SideNavItem><h6 className="small">{d}</h6> {ev}</SideNavItem>); 
      ev = "";
    }
    return timeSlots;
  }

  return (
    <SideNav
      trigger={<Button className="hide">Day Sidebar</Button>}
      options={{ closeOnClick: true }}
    >
    <Col m={6} s={12}>
      <ToDo>
        <ToDoItem
          text='practice estimating wind speeds'
          styling='bigstrong'
        />
        <ToDoItem
          text='Walk the dog'
        />
        <ToDoItem
          text='Call eye doctor'
        />
      </ToDo>
      <hr />
      <Card className='blue-grey darken-1 calendar-card' textClassName='white-text' title='Calendar'>
        {renderTimeSlots()}
      </Card>
    </Col>
    
    </SideNav>);
}



export default SidebarDay;
