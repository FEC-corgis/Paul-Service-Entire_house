import React from 'react';
import Avail from './Avail.jsx';
import Rules from './Rules.jsx';
import SelfCheck from './SelfCheck.jsx';
import SuperHost from './SuperHost.jsx';

const HostedList= function(props){
  let entireHouse, superHost, selfCheck;
  props.state.detes[0].property_space_available === 'Entire'
  ? entireHouse = <Avail state={props}/>
  : entireHouse = <div></div>;

  Math.random()< 0.5 ? superHost = <SuperHost/>: superHost = <div></div>;
  // need endpoint from Dane, randomized this for now

  props.state.rules[0].self_check_out === 1 ? selfCheck = <SelfCheck/>: selfCheck = <div></div>;

  return(
  <div>
    <div>
      {entireHouse}
    </div>
    <div className="textComponent">
      <img className="topicIcons" src="../img/star.jpg"></img>
      <div className="wordish">
      <h3>Enhanced Clean</h3>
      <p>This host commited to Airbnb's 5-step enhanced cleaning process.<a href=''>Learn more.</a></p>
     </div>
    </div>
    <div>
      {superHost}
    </div>
    <div>
      {selfCheck}
    </div>
    <div className="textComponent">
      <img className="topicIcons" src="../img/cancel.JPG"></img>
      <div className="wordish">
      <h3>Cancellation policy</h3>
      <p>Add your trip dates to get the cancellation details for this stay.<a href=''>Get details</a></p>      
      </div>
    </div>
    <div>
      {/* <Rules state={props}/> */}
    </div>
  </div>
  )
};

export default HostedList;