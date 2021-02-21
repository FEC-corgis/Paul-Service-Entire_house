import React from 'react';

const SuperHost = ({hostDetes}) => (
    <div className="textComponent">
       <img className="topicIcons" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/host.svg"></img>
       <div className="wordish">
       <h3>{hostDetes.name} is a Superhost</h3>
       <p>Superhosts are experienced, highly rated hosts who are commited to providing great stays for guests.</p>
       </div>
     </div>
)

export default SuperHost;