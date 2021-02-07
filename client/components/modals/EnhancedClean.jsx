import React, {useEffect, useState, useRef} from 'react';

const EnhancedClean = ({cleanIsOpen, closeModal}) =>{
  const inside = useRef();
  const handleClick = (e) => {
    if(inside.current.contains(e.target)){
      return;
    }
    closeModal();
  }
  useEffect(()=> {
    const getClick = document.addEventListener('click', handleClick)
    return () => getClick();
  }, []);

    return(
      <div className="modal-overlay">
        <div className="modal-content" ref={inside}>
          <img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/EnhancedCleanIcon.svg"></img>
          <h3>Enhanced Clean</h3>
          <p>Dane committed to Airbnb's 5-step enhanced cleaning process-- a set of standards developed in partnership with experts, for the times of COVID-19 and beyond.</p>
          <p>Here's what Dane committed to doing before every stay:</p>
       <div className="eGrid">
           <div className="i1">
             <img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/EnhancedCleanCheck.svg"></img>
            <h4>Sanitize surfaces</h4>
            <p>Sanitize every high-touch surface, down to the doorknow</p>
           </div>
           <div className="i2">
             <img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/EnhancedCleanCheck.svg"></img>
            <h4>Use approved products</h4>
            <p>Use cleaners approved by health experts, like disinfectants with 70% alcohol or higher</p>
          </div>

          <div className="i3">
            <img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/EnhancedCleanCheck.svg"></img>
            <h4>Thoroughly clean</h4>
            <p>Refer to our extensive checklists while cleaning room-by-room</p>
          </div>
          <div className="i4">
            <img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/EnhancedCleanCheck.svg"></img>
            <h4>Wear a mask and gloves</h4>
            <p>Help avoid cross-contamination by wearing a mask and gloves</p>
          </div>

          <div className="i5">
            <img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/EnhancedCleanCheck.svg"></img>
            <h4>Wash all linens</h4>
            <p>Wash linens at a high heat setting</p>
          </div>
          <div className="i6">
             <img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/EnhancedCleanCheck.svg"></img>
            <h4>Follow all other local guidance</h4>
            <p>Comply with local laws, including any additional safety or cleaning guidelines</p>
          </div>

        </div>
        <a href=''>Learn more about the 5-step process</a>
      </div>
    </div>
  )
};

export default EnhancedClean;