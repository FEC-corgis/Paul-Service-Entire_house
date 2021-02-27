import React, {useEffect, useState, useRef} from 'react';

const EnhancedClean = ({closeModal, hostDetes}) =>{
  const inside = useRef();
  const handleClick = (e) => {
    if(inside.current.contains(e.target)){
      return;
    }
    closeModal();
  }
  console.log(hostDetes);
  useEffect(()=> {
    const getClick = document.addEventListener('click', handleClick)
    return () => getClick();
  }, []);

    return(
      <div className="modal-overlay">
        <div className="modal-content" ref={inside}>
          <button className="closebtn_modal" onClick={closeModal}>X</button>
          <div className="eTopIcon">
            <img src="https://entirehouse-img.s3-us-west-1.amazonaws.com/EnhancedCleanIcon.svg"></img>
          </div>
          <h3>Enhanced Clean</h3>
          <p>{hostDetes.name} committed to Airbnb's 5-step enhanced cleaning process– a set of standards developed in partnership with experts, for the times of COVID-19 and beyond.</p>
          <p>Here's what {hostDetes.name} committed to doing before every stay:</p>
       <div className="eGrid">  
          <div className="eIcon-container">
            <img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/EnhancedCleanCheck.svg"></img>
          </div>
           <div >
            <h4>Sanitize surfaces</h4>
            <p className="eDes">Sanitize every high-touch surface, down to the doorknow</p>
           </div>
           <div className="eIcon-container" >
             <img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/EnhancedCleanCheck.svg"></img>
           </div>
           <div>
            <h4>Use approved products</h4>
            <p className="eDes">Use cleaners approved by health experts, like disinfectants with 70% alcohol or higher</p>
          </div>
          <div className="eIcon-container">
            <img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/EnhancedCleanCheck.svg"></img>
          </div>
          <div >
            <h4>Thoroughly clean</h4>
            <p className="eDes">Refer to our extensive checklists while cleaning room-by-room</p>
          </div>
          <div className="eIcon-container" >
            <img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/EnhancedCleanCheck.svg"></img>
          </div>
          <div >
            <h4>Wear a mask and gloves</h4>
            <p className="eDes">Help avoid cross-contamination by wearing a mask and gloves</p>
          </div>
          <div className="eIcon-container">
            <img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/EnhancedCleanCheck.svg"></img>
          </div>
          <div>
            <h4>Wash all linens</h4>
            <p className="eDes" >Wash linens at a high heat setting</p>
          </div>
          <div className="eIcon-container">
             <img className="eIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/EnhancedCleanCheck.svg"></img>
          </div>
          <div>
            <h4>Follow all other local guidance</h4>
            <p className="eDes">Comply with local laws, including any additional safety or cleaning guidelines</p>
          </div>
        </div>
        <a href=''>Learn more about the 5-step process</a>
      </div>
    </div>
  )
};

export default EnhancedClean;
