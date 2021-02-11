import React, {useState, useEffect, useRef} from 'react';

const Rules = ({detes, closeModal}) =>{
  let inside = useRef();
  let selfCheck, smoking, events, pets;
  detes.self_check_out ? selfCheck = <div><img src="https://entirehouse-img.s3-us-west-1.amazonaws.com/selfcheckMo.svg"></img><p>Self check-in with lockbox</p></div>: null;
  detes.smoking ? smoking = <div><img src="https://entirehouse-img.s3-us-west-1.amazonaws.com/smoking.svg"></img><p>No Smoking</p></div>: null;
  detes.events ? events = <div><img src="https://entirehouse-img.s3-us-west-1.amazonaws.com/events.svg"></img><p>No parties or events</p></div>: null;
  detes.pets ? pets = <div><img src="https://entirehouse-img.s3-us-west-1.amazonaws.com/pets.svg"></img><p>Pets are allowed</p></div>: null;

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
         <div className="rColumns">
           <div>
             <img src="https://entirehouse-img.s3-us-west-1.amazonaws.com/checktime.svg"></img>
             <p>Check-in: {detes.check_in_time}</p>
           </div>
          <div>
            <img src="https://entirehouse-img.s3-us-west-1.amazonaws.com/checktime.svg"></img>
            <p>Checkout: {detes.check_out_time}</p>
         </div>
         {selfCheck}
         {smoking}
         {events}
         {pets}
         <div>
           <h4>Additional rules</h4>
           <p>Thank you for removing your shoes on the carpet and for doing the dishes if they start piling up.</p>
         </div>
       </div>
     </div>
    </div>
  )
};

export default Rules;