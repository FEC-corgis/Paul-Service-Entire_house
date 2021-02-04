import React, { useState, useEffect} from 'react';
import ReactDOM, { render } from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import HostedList from './hostedList.jsx';
import {getDetes} from '../helper/api.js';
import './hosted.css';

const HostedBy = (props) => {
  console.log(props);
  let entireHost;
  const [propertyDetes, setPropertyDetes] = useState([]);

  const updatePropertyDetes = () => getDetes()
    .then(data => setPropertyDetes(data));

  useEffect(()=>{
    updatePropertyDetes();
  },[]);

  propertyDetes[0]?
   entireHost = (
      <div >
          <div className="headContainer">
          <div className="header">
            <h1>{propertyDetes[0].property_space_available} {propertyDetes[0].property_narrow_type} hosted by Dane</h1>
            {/* made Dane host to remind myself to get host data from him */}
            <p id="subtitle">{propertyDetes[0].guest_capacity} guests &middot; {propertyDetes[0].rooms} bedrooms &middot; {propertyDetes[0].guest_capacity} beds &middot; {propertyDetes[0].bathrooms} bath</p>
          </div>
          <img id='hostpic' src="../img/hostpic.jpg"></img>
          </div>
          <hr></hr>
          <HostedList detes={propertyDetes[0]}/>
          <hr></hr>
          <p className="descriptionProp">{propertyDetes[0].property_description}<a href=''> read more</a></p>          
          <a className="descriptionProp" href=''>Contact host</a>
      </div>
  ) : entireHost = null;
  
  return entireHost;
};

ReactDOM.render(
<Router>
  <HostedBy exact path="/rooms/:id" component={HostedBy}/>
</Router>, document.getElementById('entirehouse'));