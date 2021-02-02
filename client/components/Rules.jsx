import React from 'react';

const Rules = ({detes}) => {
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
    <div className="textComponent">
        <img className="topicIcons" src="../img/rules.JPG"></img>
        <div className="wordish">
        <h3>House rules</h3>
        <p>{message} host doesn't allow {ending}.<a href=''>Get details</a></p> 
        </div>
    </div>
    )
} 

export default Rules;