import React from 'react';

const Avail = ({detes}) => (
    <div className="textComponent">
       <img className="topicIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/house.svg"></img>
       <div className="wordish">      
       <h3>{detes.property_space_available} home</h3>
       <p>You'll have the {detes.property_narrow_type} to yourself.</p>
       </div>
     </div>
 )

 export default Avail;