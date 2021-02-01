import React, {useEffect, useState, useRef} from 'react';
import Avail from './Avail.jsx';
import Rules from './Rules.jsx';
import SelfCheck from './SelfCheck.jsx';
import SuperHost from './SuperHost.jsx';
// import Modal from './Modal.jsx';

const HostedList= function(props){
  const outside = useRef();
  const [cleanIsOpen, setCleanIsOpen] = useState(false);
  const [cancelIsOpen, setCancelIsOpen] = useState(false);

  const handleClick = (e) => {
    if(outside.current.contains(e.target)){
      return
    }
    setCleanIsOpen(false);
    // setCancelIsOpen(false);
  }

  useEffect(()=> {
    const getClick = document.addEventListener('click', handleClick)
    return () => getClick();
  }, []);

  // optional information based on db data
  let entireHouse, superHost, selfCheck;
  props.detes.property_space_available === 'Entire'
  ? entireHouse = <Avail detes={props}/>
  : entireHouse = null;

  Math.random()< 0.5 ? superHost = <SuperHost/>: superHost = null;
  // need endpoint from Dane, randomized this for now

  props.detes.self_check_out === 1 ? selfCheck = <SelfCheck/>: selfCheck = null;

  return(
  <div>
    <div>
      {entireHouse}
    </div>
    <div className="textComponent" ref={outside}>
      <img className="topicIcons" src="../img/star.jpg"></img>
      <div className="wordish">
      <h3>Enhanced Clean</h3>
      <p>This host commited to Airbnb's 5-step enhanced cleaning process.<button onClick={()=>setCleanIsOpen(!cleanIsOpen)} className="modalbtn">Learn more.</button></p>
     </div>
    </div>
      {cleanIsOpen ? (<Modal />): null}
    <div>
      {superHost}
    </div>
    <div>
      {selfCheck}
    </div>
    <div className="textComponent" ref={outside}>
      <img className="topicIcons" src="../img/cancel.JPG"></img>
      <div className="wordish">
      <h3>Cancellation policy</h3>
      <p>Add your trip dates to get the cancellation details for this stay.<button onClick={()=>setCancelIsOpen(!cancelIsOpen)} className="modalbtn"> Get details</button></p>      
      </div>
    </div>
    {cancelIsOpen ? (<Modal />): null}
    <div>
      <Rules detes={props}/>
    </div>
  </div>
  )
};

export default HostedList;