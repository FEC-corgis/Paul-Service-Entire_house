import React, {useEffect, useState, useRef} from 'react';
import RulesMo from './modals/RulesMo.jsx';

const Rules = ({detes, modal}) => {
  const outside = useRef();
  const [rulesIsOpen, setRulesIsOpen] = useState(false);
  const handleClick = (e) => {
    if(outside.current.contains(e.target)){
      return
    }
  }

  useEffect(()=> {
    const getClick = document.addEventListener('click', handleClick)
    return () => getClick();
  }, [])


  let children = "This place isn't suitable for children under 12 and the";
  let rules = {'infants': detes.infants, 'pets': detes.pets, 'parties': detes.events, 'smoking':detes.smoking};
  let message = '', ending = '';
  if(detes.children_suitable === 1){
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
    <div className="textComponent" ref={outside}>
      <img className="topicIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/rules.svg"></img>
        <div className="wordish">
          <h3>House rules</h3>
          <p>{message} host doesn't allow {ending}.<button onClick={()=>setRulesIsOpen(!rulesIsOpen)} className="modalbtn">Get details</button></p> 
        </div> 
        {rulesIsOpen? <RulesMo detes={detes}/> : null}
    </div>
    )
}; 

export default Rules;