import React from 'react';

const HostedList = (props) => (
  <div>
    <div id="test">
      <img src="./img/house.JPG"></img>
      <h4>Entire home</h4>
      <p>You'll have the cottage to yourself.</p>
    </div>
    <div>
      <img src="./img/star.jpg"></img>
      <h4>Enhanced Clean</h4>
      <p>This host commited to Airbnb's 5-step enhanced cleaning process.</p> <a onClick={props.getPropInfo()}>Learn more.</a>
    </div>
    <div>
      <img src="./img/host.JPG"></img>
      <h4>Hilary is a Superhost</h4>
      <p>Superhosts are experienced, highly rated hosts who are commited to providing great stays for guests.</p>
    </div>
    <div>
      <img src="./img/cancel.JPG"></img>
      <h4>Cancellation policy</h4>
      <p>Add your trip dates to get the cancellation details for this stay.</p>
    </div>
    <div>
      <img src="./img/rules.JPG"></img>
      <h4>House rules</h4>
      <p>This place isn't suitable for children under 12 and the host doesn't allow pets, parties or smoking. <a>get details</a></p>
    </div>
  </div>
);

export default HostedList;