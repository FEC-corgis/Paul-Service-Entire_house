import React from 'react';

const Avail = (props) => (
    <div className="textComponent">
       <img className="topicIcons" src="../img/house.JPG"></img>
       <div className="wordish">      
       <h3>{props.detes.property_space_available} home</h3>
       <p>You'll have the {props.detes.property_narrow_type} to yourself.</p>
       </div>
     </div>
 )

 export default Avail;