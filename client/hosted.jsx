import React from 'react';
import ReactDOM from 'react-dom';
import HostedList from './hostedList.jsx';
import axios from 'axios';
import './hosted.css';

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
    }],
    rules:[{
      Rules_id: 1,
      check_in_time: 6,
      check_out_time: 4,
      smoking: 0,
      events: 1,
      pets: 1,
      infants: 0,
      children_suitable: 1,
      Property_details_id: 1
    }],
    sanitation:[{
      Sanitation_id: 1,
      sanitize_surface: 1,
      approved_products: 1,
      thoroughly_clean: 0,
      mask_glove: 0,
      wash_linen: 1,
      local_guidance: 1,
      Property_details_id: 1 
      }]
  };
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
    axios({
      method: 'GET',
      url: `http://localhost:5545/propertyRules/?id=${Math.floor(Math.random()*100)}`
    })
      .then((res)=>{
        this.setState({rules : res.data});
      })
      .catch((err)=> { console.log(err); });
    axios({
      method: 'GET',
      url: `http://localhost:5545/propertySanitation/?id=${Math.floor(Math.random()*100)}`
    })
      .then((res)=>{
        this.setState({sanitation: res.data});
      })
      .catch((err)=>{ console.log(err);});
  }

  conState() {
    console.log(this.state);
  }

  render() {
    return (
      <div >
        <h1>{this.state.detes[0].property_space_available} {this.state.detes[0].property_narrow_type} hosted by Hilary</h1>
        <p id="subtitle">{this.state.detes[0].guest_capacity} guests &middot; {this.state.detes[0].rooms} bedrooms &middot; {this.state.detes[0].bathrooms} bath</p>
        <img id='hostpic' src="https://a0.muscache.com/im/pictures/user/28ccfa9f-9fae-49dd-94da-2bd7525548c4.jpg?im_w=240"></img>
        <hr></hr>
        <HostedList state={this.state}/>
        <hr></hr>
        <p id="descriptionProp">{this.state.detes[0].property_description}</p><button onClick={this.conState.bind(this)}>read more</button>
        <a href='http://localhost:5545'>Contact host</a>
      </div>
    );
  }
}

ReactDOM.render(<HostedBy/>, document.getElementById('app'));