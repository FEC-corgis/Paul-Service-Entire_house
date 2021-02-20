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
    .then(host => console.log('hi'));

  useEffect(()=>{
    updatePropertyDetes();
    updateHostDetes();
  },[]);

  propertyDetes[0] ?
    entireHost = (
      <div className="entireContainer">
        <div className="headContainer">
          <div className="header">
            <h1 className="titleForService">{propertyDetes[0].property_space_available} {propertyDetes[0].property_narrow_type} hosted by Dane</h1>
            <p id="subtitle">{propertyDetes[0].guest_capacity} guests &middot; {propertyDetes[0].rooms} bedrooms &middot; {propertyDetes[0].guest_capacity} beds &middot; {propertyDetes[0].bathrooms} bath</p>
          </div>
          <img id='hostpic' src="../img/hostpic.jpg"></img>
        </div>
        <div className="categoryList">
          <HostedList detes={propertyDetes[0]}/>
        </div>
        <div className="descriptionContainer">
          <p className="descriptionProp">{propertyDetes[0].property_description} <a href=''>read more</a></p>          
          <a className="descriptionProp" href=''>Contact host</a>
       </div>
       <div className="sleepingContainer">
          <h1 className="titleForService">Sleeping arrangements</h1>
       </div>
       <div className="Amenities">
          <h1 className="titleForService">Amenities</h1>
       </div>
      </div>
      ) : entireHost = null;
  
  return entireHost;
};

ReactDOM.render(
  <Router>
    <Route exact path={"/rooms/:id"} component={HostedBy}/>
  </Router>, document.getElementById('entirehouse'));
