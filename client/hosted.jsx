import React from 'react';
import ReactDOM from 'react-dom';
import './hosted.css';
import HostedList from './hostedList.jsx';
import axios from 'axios';

class HostedBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.getPropInfo.bind(this);
  }
  getPropInfo() {
    axios({
      method: 'GET',
      url: 'http://localhost/5545/propertyDetails/'
    })
      .then((res)=>{
        console.log(res);
      });
  }

  render() {
    return (
      <div>
        <h1>Entire cottage hosted by Hilary</h1>
        <h3>3 guests - Studio - 2 beds - 1 bath</h3>
        <img id='hostpic' src="https://a0.muscache.com/im/pictures/user/28ccfa9f-9fae-49dd-94da-2bd7525548c4.jpg?im_w=240"></img>
        <hr></hr>
        <HostedList getPropInfo={this.getPropInfo}/>
        <hr></hr>
        <p>This is the description... Cyeaaah!</p><a>read more</a>
      </div>
    );
  }
}

ReactDOM.render(<HostedBy/>, document.getElementById('app'));