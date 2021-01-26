import React from 'react';
import {render} from '@testing-library/react';

import Hosted from '../client/components/hosted.jsx';
import Hostlist from '../client/components/hostedList.jsx';
import Rules from '../client/components/Rules.jsx';
import SelfCheck from '../client/components/SelfCheck.jsx';
import SuperHost from '../client/components/SuperHost.jsx';
import Avail from '../client/components/Avail.jsx';

// need to figure out other ways to test front-end, My component literally pulls data and puts it up on service. Only checks to see if data is available and puts it according to database
describe('Hosted', ()=> {
  test('renders Hosted house container', () =>{
    render(<Hosted />);
    screen.debug();
  });

  test('renders HostedList container', () =>{
    render(<HostList />);
    screen.debug();
  });

  test('renders Hosted house container', () =>{
    render(<Rules />);
    screen.debug();
  });

  test('renders Hosted house container', () =>{
    render(<SuperHost />);
    screen.debug();
  });

  test('renders Hosted house container', () =>{
    render(<SelfCheck />);
    screen.debug();
  });
  
  test('renders Hosted house container', () =>{
    render(<Avail />);
    screen.debug();
  });
});