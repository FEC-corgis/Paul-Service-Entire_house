import React from 'react';

const Rules = ({detes}) =>{
  let selfCheck, smoking, events, pets;
  detes.self_check_out ? selfCheck = <div><img src="./img/selfcheckMo.JPG"></img><p>Self check-in with lockbox</p></div>: null;
  detes.smoking ? smoking = <div><img src="./img/smoking.JPG"></img><p>No Smoking</p></div>: null;
  detes.events ? events = <div><img src="./img/events.jpg"></img><p>No parties or events</p></div>: null;
  detes.pets ? pets = <div><img src="./img/pets.JPG"></img><p>Pets are allowed</p></div>: null;

  return(
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>House rules</h3>
         <div className="rColumns">
           <div>
             <img src="./img/checktime.jpg"></img>
             <p>Check-in: {detes.check_in_time}</p>
           </div>
          <div>
            <img src="./img/checktime.jpg"></img>
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