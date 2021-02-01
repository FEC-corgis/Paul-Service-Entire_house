import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import HostedList from './hostedList.jsx';
import axios from 'axios';
import {
  getDetes,
  getSani,
  getRules
} from '../helper/api.js';
import './hosted.css';

const HostedBy = () => {
  const [propertyDetes, setPropertyDetes] = useState([]);
  const [propertySani, setPropertySani] = useState([]);
  const [propertyRules, setPropertyRules] = useState([]);

  const updatePropertyDetes = () => getDetes()
    .then(data => console.log(data));
  
  const getConsole = () => console.log(propertyDetes);

  // componentDidMount() {
  //   axios({
  //     method: 'GET',
  //     url: `http://localhost:5545/propertyDetails/?id=${Math.floor(Math.random()*100)}`
  //   })
  //     .then((res)=>{
  //       this.setState({detes: res.data[0]});
  //     })
  //     .catch((err)=> { console.log(err); });
  // } 

  // getPropInfo() {
    // axios({
    //   method: 'GET',
    //   url: `http://localhost:5545/propertyRules/?id=${Math.floor(Math.random()*100)}`
    // })
    //   .then((res)=>{
    //     this.setState({rules : res.data});
    //   })
    //   .catch((err)=> { console.log(err); });
    // axios({
    //   method: 'GET',
    //   url: `http://localhost:5545/propertySanitation/?id=${Math.floor(Math.random()*100)}`
    // })
    //   .then((res)=>{
    //     this.setState({sanitation: res.data});
    //   })
    //   .catch((err)=>{ console.log(err);});
  }

  render(
      <div >
          <div className="headContainer">
          <div className="header">
            {/* <h1>{this.state.detes[0].property_space_available} {this.state.detes[0].property_narrow_type} hosted by Dane</h1> */}
            {/* made Dane host to remind myself to get host data from him */}
            {/* <p id="subtitle">{this.state.detes[0].guest_capacity} guests &middot; {this.state.detes[0].rooms} bedrooms &middot; {this.state.detes[0].guest_capacity} beds &middot; {this.state.detes[0].bathrooms} bath</p> */}
          </div>
          <img id='hostpic' src="../img/hostpic.jpg"></img>
          </div>
          <hr></hr>
          {/* <HostedList state={this.state}/> */}
          <hr></hr>
          {/* <p className="descriptionProp">{this.state.detes[0].property_description}<a href=''> read more</a></p>           */}
          <button className="descriptionProp" onClick={this.console.bind(this)}>Contact host</button>
      </div>
  )

ReactDOM.render(<HostedBy/>, document.getElementById('app'));