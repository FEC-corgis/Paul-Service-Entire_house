import React from 'react';
import ReactDOM from 'react-dom';

export default class HostedBy extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  render=()=>(
    <div>
        <p>Something</p>
    </div>
  )
};

ReactDOM.render(<HostedBy/>, document.getElementById('app'));