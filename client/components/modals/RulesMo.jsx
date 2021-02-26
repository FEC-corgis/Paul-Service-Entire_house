import React, {useState, useEffect, useRef} from 'react';

const Rules = ({detes, closeModal}) =>{
  let inside = useRef();
  let selfCheck, smoking, events, pets;
  detes.self_check_out ? selfCheck = <div className="rRows"><img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/selfcheckMo.svg"></img><div className="eIconDescription">Self check-in with lockbox</div></div>: null;
  detes.smoking ? smoking = <div className="rRows"><img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/smoking.svg"></img><div className="eIconDescription">No Smoking</div></div>: null;
  detes.events ? events = <div className="rRows"><img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/events.svg"></img><div className="eIconDescription">No parties or events</div></div>: null;
  detes.pets ? pets = <div className="rRows"><img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/pets.svg"></img><div className="eIconDescription">Pets are allowed</div></div>: null;

  const handleClick = (e) => {
    if(inside.current.contains(e.target)){
      return
    }
    closeModal();
  }

  useEffect(()=> {
    const getClick = document.addEventListener('click', handleClick)
    return () => getClick();
  }, []) 

  return(
    <div className="modal-overlay">
      <div className="modal-content" ref={inside}>
        <button className="closebtn_modal" onClick={closeModal}>X</button>
        <h3>House rules</h3>
         <div className="rules-container">
           <div className="rRows">
             <img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/checktime.svg"></img>
             <div className="eIconDescription">Check-in: Before {detes.check_in_time}PM</div>
             </div>
           <div className="rRows">
            <img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/checktime.svg"></img>
            <div className="eIconDescription">Checkout: {detes.check_out_time} PM</div>
         </div>
         {selfCheck}
         {smoking}
         {events}
         {pets}
       </div>
         <div>
           <h4>Additional rules</h4>
           <p>Thank you for removing your shoes on the carpet and for doing the dishes if they start piling up.</p>
         </div>
     </div>
    </div>
  )
};

export default Rules;