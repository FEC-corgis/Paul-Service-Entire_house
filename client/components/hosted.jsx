import React, { useState, useEffect} from 'react';
import ReactDOM, { render } from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import HostedList from './hostedList.jsx';
import {getDetes, getHost} from '../helper/api.js';
import './hosted.css';

const HostedBy = (props) => {
  let entireHost;
  const [propertyDetes, setPropertyDetes] = useState([]);
  const [hostDetes, setHostDetes] = useState([]);

  const updatePropertyDetes = () => getDetes(props.match.params.id)
    .then(data => setPropertyDetes(data));
 
  const updateHostDetes = () => getHost(props.match.params.id)
    .then(host => setHostDetes(host.Host));
  
  useEffect(()=>{
    updatePropertyDetes();
    updateHostDetes();
  },[]);

  propertyDetes[0] ?
    entireHost = (
      <div className="entireContainer">
        <div className="headContainer">
          <div className="header">
    <h1 className="titleForService">{propertyDetes[0].property_space_available} {propertyDetes[0].property_narrow_type} hosted by {hostDetes.name}</h1>
            <p id="subtitle">{propertyDetes[0].guest_capacity} guests &middot; {propertyDetes[0].rooms} bedrooms &middot; {propertyDetes[0].guest_capacity} beds &middot; {propertyDetes[0].bathrooms} bath</p>
          </div>
          <img id='hostpic' src={hostDetes.avatar}></img>
        </div>
        <div className="categoryList">
          <HostedList detes={propertyDetes[0]} hostDetes={hostDetes}/>
        </div>
        <div className="descriptionContainer">
          <p className="descriptionProp">{propertyDetes[0].property_description} <a href=''>read more</a></p>          
          <a className="descriptionProp" href=''>Contact host</a>
       </div>
       <div className="sleepingContainer">
          <h1 className="titleForService">Sleeping arrangements</h1>
          <div className="sleepingArrangements">
            <img className="hardcodeIMG" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/beds.svg"></img>
            <h4>Bedroom 1</h4>
            <p>1 queen bed</p>
          </div>
       </div>
       <div className="Amenities">
         <h1 className="titleForService">Amenities</h1>
           <div className="amenContainer">
             <div className="amen">
               <div>TV</div>
               <img className="hardcodeIMG" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/tv.svg"></img>
             </div>
             <div className="amen">
               <div>WiFi</div>
               <img className="hardcodeIMG" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/wifi.svg"></img>
               </div>
             <div className="amen">
               <div>Kitchen</div>
               <img className="hardcodeIMG"  src="https://entirehouse-img.s3-us-west-1.amazonaws.com/kitchen.svg"></img>
               </div>
             <div className="amen">
               <div>Free parking on premises</div>
               <img className="hardcodeIMG"  src="https://entirehouse-img.s3-us-west-1.amazonaws.com/parking.svg"></img>
             </div>
             <div className="amen">
               <div>Hot Tub</div>
               <img className="hardcodeIMG"  src="https://entirehouse-img.s3-us-west-1.amazonaws.com/hottub.svg"></img>
               </div>
             <div className="amen">
               <div>Central Heating</div>
               <img className="hardcodeIMG" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/heating.svg"></img>
             </div>
             <div className="amen">
               <div>Smoke Alarm</div>
               <img className="hardcodeIMG" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/smokealarm.svg"></img>
               </div>
             <div className="amen">
               <div>Carbon monoxide alarm</div>
               <img className="hardcodeIMG" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/carbonalarm.svg"></img>
             </div>
             <div className="amen">
               <div>First aid kit</div>
               <img className="hardcodeIMG" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/firstaid.svg"></img>
               </div>
             <div className="amen">
               <div>Fire extinguisher</div>
               <img className="hardcodeIMG" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/fireextingusiher.svg"></img>
             </div>
             <div className="showAllAmenContainer">
               <a href="">Show all 29 amenities</a>
             </div>
         </div>
       </div>
      </div>
      ) : entireHost = null;
  
  return entireHost;
};

ReactDOM.render(
  <Router>
    <Route exact path={"/rooms/:id"} component={HostedBy}/>
  </Router>, document.getElementById('entirehouse'));
