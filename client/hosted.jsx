import React from 'react';
import ReactDOM from 'react-dom';
import './hosted.css';
import HostedList from './hostedList.jsx';
import axios from 'axios';

class HostedBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {detes: [{
      Property_details_id: 1,
      bathrooms: 2,
      dedicated_guest_space: 0,
      guest_capacity: 9,
      max_length_stay: 9,
      min_length_stay: 2,
      property_description: "This cozy Apartment is 5 minutes away from a park and walkable distance from a famous trail. It's the perfect location for you and more! It accompanies 2 with ease, and has plenty of room for lounging. You'll have a fine time here at our enjoyable Loft! Reserve your stay now!!",
      property_id: null,
      property_narrow_type: "Loft",
      property_space_available: "Entire",
      property_type: "Apartment",
      registered_business: 0,
      rooms: 6
    }]};
    this.getPropInfo = this.getPropInfo.bind(this);
  }
  componentDidMount() {
    this.getPropInfo();
  } 

  getPropInfo() {
    axios({
      method: 'GET',
      url: `http://localhost:5545/propertyDetails/?id=${Math.floor(Math.random()*100)}`
    })
      .then((res)=>{
        this.setState({detes: res.data});
      })
      .catch((err)=> { console.log(err); });
  }

  conState() {
    console.log(this.state.detes[0]);
  }

  render() {
    return (
      <div>
        <h1>{this.state.detes[0].property_space_available} {this.state.detes[0].property_narrow_type} hosted by Paul</h1>
        <h3>{this.state.detes[0].guest_capacity} guests - {this.state.detes[0].rooms} beds - {this.state.detes[0].bathrooms} bath</h3>
        <img id='hostpic' src="https://a0.muscache.com/im/pictures/user/28ccfa9f-9fae-49dd-94da-2bd7525548c4.jpg?im_w=240"></img>
        <hr></hr>
        <HostedList state={this.state}/>
        <hr></hr>
        <p>{this.state.detes[0].property_description}</p><a>read more</a>
      </div>
    );
  }
}

ReactDOM.render(<HostedBy/>, document.getElementById('app'));