import React from 'react';

const Avail = ({detes}) => (
    <div className="textComponent">
       <img className="topicIcons" src="../img/house.JPG"></img>
       <div className="wordish">      
       <h3>{detes.property_space_available} home</h3>
       <p>You'll have the {detes.property_narrow_type} to yourself.</p>
       </div>
     </div>
 )

 export default Avail;