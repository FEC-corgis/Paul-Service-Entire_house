import React, {useEffect, useState, useRef} from 'react';
import RulesMo from './modals/RulesMo.jsx';

const Rules = ({detes, modal}) => {
  const [rulesIsOpen, setRulesIsOpen] = useState(false);
  
  const closeModal = () => {
    setRulesIsOpen(false);
  }

  const rulesMessage = () =>{
    let children = "This place isn't suitable for children under 12 and the";
    let rules = {'infants': detes.infants, 'pets': detes.pets, 'parties': detes.events, 'smoking':detes.smoking};
    let rulesNu = Object.values(rules);
    let rulesCnt = rulesNu.filter(r=>r!=0);
    let message = '', ending = '';
    detes.children_suitable === 1 ? message += children : message = 'This';
    let count = 0;
    for(let rule in rules){
      if(count === rulesCnt.length-1){
        ending+=rule+' or ';
      }else if(count===rulesCnt.length){
        ending+=rule+'. ';
      }else{
        ending+=rule+', ';
      }
      count++;
      console.log(count);
    }
    return `${message} host doesn't allow ${ending}`;
  }

  return(
    <div className="textComponent">
      <img className="topicIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/rules.svg"></img>
        <div className="wordish">
          <h3>House rules</h3>
          <p>{rulesMessage()}<button onClick={()=>setRulesIsOpen(!rulesIsOpen)} className="modalbtn">Get details</button></p> 
        </div> 
        {rulesIsOpen? <RulesMo closeModal={closeModal} detes={detes}/> : null}
    </div>
    )
}; 

export default Rules;