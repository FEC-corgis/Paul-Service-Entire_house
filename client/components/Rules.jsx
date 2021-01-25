import React from 'react';

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
        <img className="topicIcons" src="../img/rules.JPG"></img>
        <div className="wordish">
        <h3>House rules</h3>
        <p>{message} host doesn't allow {ending}.</p> <a href=''>Get details</a>
        </div>
    </div>
    )
} 

export default Rules;