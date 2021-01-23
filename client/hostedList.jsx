import React from 'react';

const Avail = (props) => (
    <div>
      <img src="./img/house.JPG"></img>
      <h4>{props.state.state.detes[0].property_space_available} home</h4>
      <p>You'll have the {props.state.state.detes[0].property_narrow_type} to yourself.</p>
    </div>
)

const Rules = function(props){
  let children = "This place isn't suitable for children under 12 and the";
  let rules = {'infants': props.state.state.rules[0].infants, 'pets': props.state.state.rules[0].pets, 'parties': props.state.state.rules[0].events, 'smoking':props.state.state.rules[0].smoking};
  let message = '', ending = '';
  if(props.state.state.rules[0].children_suitable === 1){
    message += children;
  }else{
    message = 'This';
  }
  for(let rule in rules){
    if(rules[rule]===1){
      ending+=rule+',';
      // need to fix this to include 'or' at the end and comma after last rule addition
    }
  }
  return(
  <div>
      <img src="./img/rules.JPG"></img>
      <h4>House rules</h4>
      <p>{message} host doesn't allow {ending}.</p> <a href=''>Get details</a>
  </div>
  )
} 

const SuperHost = (props) => (
    <div>
      <img src="./img/host.JPG"></img>
      <h4>Hilary is a Superhost</h4>
      <p>Superhosts are experienced, highly rated hosts who are commited to providing great stays for guests.</p>
    </div>
)
const HostedList= function(props){
  let entireHouse, superHost;
  if(props.state.detes[0].property_space_available === 'Entire'){
    entireHouse = <Avail state={props}/>;
  }else{ entireHouse = <div></div> }

  if(Math.random() < 0.5){
    superHost = <SuperHost/>
  }else{ superHost =<div></div>}

  return(
  <div>
    <div>
      {entireHouse}
    </div>
    <div>
      <img src="./img/star.jpg"></img>
      <h4>Enhanced Clean</h4>
      <p>This host commited to Airbnb's 5-step enhanced cleaning process.</p> <a href=''>Learn more.</a>
    </div>
    <div>
      {superHost}
    </div>
    <div>
      <img src="./img/cancel.JPG"></img>
      <h4>Cancellation policy</h4>
      <p>Add your trip dates to get the cancellation details for this stay.</p><a href=''>Get details</a>
    </div>
    <div>
      <Rules state={props}/>
    </div>
  </div>
  )
};

export default HostedList;