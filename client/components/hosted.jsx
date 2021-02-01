import React, { useState, useEffect} from 'react';
import ReactDOM, { render } from 'react-dom';
import HostedList from './hostedList.jsx';
import {getDetes} from '../helper/api.js';
import './hosted.css';

const HostedBy = () => {
  const [propertyDetes, setPropertyDetes] = useState([]);

  const updatePropertyDetes = () => getDetes()
    .then(data => console.log(data));

  useEffect(()=>{
    updatePropertyDetes();
  },[]);
  
  return(
      <div >
          <div className="headContainer">
          <div className="header">
            <h1>{propertyDetes.property_space_available} {propertyDetes.property_narrow_type} hosted by Dane</h1>
            {/* made Dane host to remind myself to get host data from him */}
            <p id="subtitle">{propertyDetes.guest_capacity} guests &middot; {propertyDetes.rooms} bedrooms &middot; {propertyDetes.guest_capacity} beds &middot; {propertyDetes.bathrooms} bath</p>
          </div>
          <img id='hostpic' src="../img/hostpic.jpg"></img>
          </div>
          <hr></hr>
          <HostedList detes={propertyDetes}/>
          <hr></hr>
          <p className="descriptionProp">{propertyDetes.property_description}<a href=''> read more</a></p>          
          <a className="descriptionProp" href=''>Contact host</a>
      </div>
  )
};

ReactDOM.render(<HostedBy/>, document.getElementById('app'));