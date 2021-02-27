import React, {useEffect, useState, useRef} from 'react';
import Avail from './Avail.jsx';
import Rules from './Rules.jsx';
import SelfCheck from './SelfCheck.jsx';
import SuperHost from './SuperHost.jsx';
import EnhancedClean from './modals/EnhancedClean.jsx';

const HostedList = ({detes, hostDetes}) => {
  const [cleanIsOpen, setCleanIsOpen] = useState(false);
 
  const closeModal = () =>{
    setCleanIsOpen(false);
  }

  // optional information based on db data
  let entireHouse, superHost, selfCheck;
  detes.property_space_available === 'Entire'
  ? entireHouse = <Avail detes={detes}/>
  : entireHouse = null;

  hostDetes.isSuperhost === true ? superHost = <SuperHost hostDetes={hostDetes}/>: superHost = null;
  detes.self_check_out === 1 ? selfCheck = <SelfCheck/>: selfCheck = null;

  return(
  <div>
    <div>
      {entireHouse}
    </div>
    <div className="textComponent" > 
      <img className="topicIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/star.svg"></img>
      <div className="wordish">
      <h3>Enhanced Clean</h3>
      <p>This host commited to Airbnb's 5-step enhanced cleaning process. <button onClick={()=>setCleanIsOpen(!cleanIsOpen)} className="modalbtn">Learn more.</button></p>
     </div>
    </div>
      {cleanIsOpen ? (<EnhancedClean closeModal={closeModal} hostDetes={hostDetes}/>): null}
    <div>
      {superHost}
    </div>
    <div>
      {selfCheck}
    </div>
    <div className="textComponent">
      <img className="topicIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/cancel.svg"></img>
      <div className="wordish">
      <h3>Cancellation policy</h3>
      <p>Add your trip dates to get the cancellation details for this stay.</p>     
      </div>
    </div>
    <div>
      <Rules detes={detes}/>
    </div>
  </div>
  )
};

export default HostedList;