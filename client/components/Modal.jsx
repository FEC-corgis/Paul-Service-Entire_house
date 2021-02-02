import React from 'react';

const Modal = ({detes}) => {
  let modalType;
  return (
    <div>
      <img src="../img/EnhancedCleanIcon.JPG"></img>
      <h3>Enhanced Clean</h3>
      <p>Dane committed to Airbnb's 5-step enhanced cleaning process-- a set of standards developed in partnership with experts, for the times of COVID-19 and beyond.</p>
      <p>Here's what Dane committed to doing before every stay:</p>
      <div className="eColumns">
          <div>
              <h6>Sanitize surfaces</h6>
              <p>Sanitize every high-touch surface, down to the doorknow</p>
          </div>
          <div>
              <h6>Thoroughly clean</h6>
              <p>Refer to our extensive checklists while cleaning room-by-room</p>
          </div>
          <div>
              <h6>Wash all linens</h6>
              <p>Wash linens at a high heat setting</p>
          </div>
          <div>
              <h6>Use approved products</h6>
              <p>Use cleaners approved by health experts, like disinfectants with 70% alcohol or higher</p>
          </div>
          <div>
              <h6>Wear a mask and gloves</h6>
              <p>Help avoid cross-contamination by wearing a mask and gloves</p>
          </div>
          <div>
              <h6>Follow all other local guidance</h6>
              <p>Comply with local laws, including any additional safety or cleaning guidelines</p>
          </div>
      </div>
    </div>
  )
};

export default Modal;