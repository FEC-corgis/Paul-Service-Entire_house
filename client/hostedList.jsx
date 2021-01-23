import React from 'react';

const Avail = (props) => (
   <div className="textComponent">
      <img className="topicIcons" src="./img/house.JPG"></img>
      <div className="wordish">      
      <h3>{props.state.state.detes[0].property_space_available} home</h3>
      <p>You'll have the {props.state.state.detes[0].property_narrow_type} to yourself.</p>
      </div>
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
  <div className="textComponent">
      <img className="topicIcons" src="./img/rules.JPG"></img>
      <div className="wordish">
      <h3>House rules</h3>
      <p>{message} host doesn't allow {ending}.</p> <a href=''>Get details</a>
      </div>
  </div>
  )
} 

const SuperHost = () => (
   <div className="textComponent">
      <img className="topicIcons" src="./img/host.JPG"></img>
      <div className="wordish">
      <h3>Hilary is a Superhost</h3>
      <p>Superhosts are experienced, highly rated hosts who are commited to providing great stays for guests.</p>
      </div>
    </div>
)

const SelfChk = () => (
   <div className="textComponent">
      <img className="topicIcons" src="./img/self-check.JPG"></img>
      <div className="wordish">
      <h3>Self Check-in</h3>
      <p>Check yourself in with the keypad.</p>
      </div>
    </div>
)

const HostedList= function(props){
  let entireHouse, superHost, selfCheck;
  props.state.detes[0].property_space_available === 'Entire'
  ? entireHouse = <Avail state={props}/>
  : entireHouse = <div></div>;

  Math.random()< 0.5 ? superHost = <SuperHost/>: superHost = <div></div>;
  Math.random()< 0.5 ? selfCheck = <SelfChk/>: selfCheck = <div></div>;

  return(
  <div>
    <div>
      {entireHouse}
    </div>
    <div className="textComponent">
      <img className="topicIcons" src="./img/star.jpg"></img>
      <div className="wordish">
      <h3>Enhanced Clean</h3>
      <p>This host commited to Airbnb's 5-step enhanced cleaning process.</p> <a href=''>Learn more.</a>
      </div>
    </div>
    <div>
      {superHost}
    </div>
    <div>
      {selfCheck}
    </div>
    <div className="textComponent">
      <img className="topicIcons" src="./img/cancel.JPG"></img>
      <div className="wordish">
      <h3>Cancellation policy</h3>
      <p>Add your trip dates to get the cancellation details for this stay.</p><a href=''>Get details</a>
      </div>
    </div>
    <div>
      <Rules state={props}/>
    </div>
  </div>
  )
};

export default HostedList;