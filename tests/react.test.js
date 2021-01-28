import React from 'react';
import {render, screen, cleanup, fireEvent} from '@testing-library/react';

import Hosted from '../client/components/hosted.jsx';
import Hostlist from '../client/components/hostedList.jsx';
import Rules from '../client/components/Rules.jsx';
import SelfCheck from '../client/components/SelfCheck.jsx';
import SuperHost from '../client/components/SuperHost.jsx';
import Avail from '../client/components/Avail.jsx';

describe('Hosted component', ()=> {
  beforeAll(() => {
    render(<Hosted />)
  })
  test('should contain hosted by header', () => {
    const title = screen.getByText('hosted by')
    expect(title).toBeInTheDocument();
  })

  test('should get contact host anchor from componenet', () => {
    const hostAnchor = screen.getByText('Contact host')
    expect(hostAnchor).toBeInTheDocument();
  })

  test('should include host pic', () =>{
    const imgId = screen.getByTestId('hostpic')
    expect(imgId).toBeInTheDocument();
  })
  
  test('should have modal button', ()=>{
    const mButton = screen.getByClass('modal')
    expect(mButton).toBeInTheDocument();
  })

  afterAll(clearnup)
});

describe('HostedList component', () => {
  beforeAll(()=>{
    render(<Hostlist />)
  })

  test('should contain at least one host section', ()=>{
    const textSection = screen.getByClass('wordish')
    expect(textSection).toBeInTheDocument();
  })
  test('should contain topic icons', ()=>{
    const icons = screen.getByClass('topicIcons')
    expect(icons).toBeInTheDocument();
  })

  afterAll(cleanup)
});


describe('Avail component', () => {
  beforeAll(()=>{
    render(<Avail />)
  })

  test('should announce if entire home is available', ()=>{
    const entire = screen.getByText('home')
    expect(entire).toBeInTheDocument();
  })

  afterAll(cleanup)
});

describe('Rules component', () => {
  beforeAll(()=>{
    render(<Rules />)
  })

  test('should have a get details modal', ()=>{
    const details = screen.getByText('Get Details')
    expect(details).toBeInTheDocument();
  })

  test('includes ruls icon', ()=>{
    const icon = screen.getByClass('topicIcons')
    expect(icon).toBeInTheDocument();
  })

  afterAll(cleanup)
});

describe('SelfCheck component', () => {
  beforeAll(()=>{
    render(<SelfCheck />)
  })

  test('should have a self checkin header', ()=>{
    const SC = screen.getByText('Self Check-in')
    expect(SC).toBeInTheDocument();
  })

  test('includes ruls icon', ()=>{
    const icon = screen.getByClass('topicIcons')
    expect(icon).toBeInTheDocument();
  })

  afterAll(cleanup)
});

describe('SuperHost component', () => {
  beforeAll(()=>{
    render(<Rules />)
  })

  test('should have superhost description', ()=>{
    const details = screen.getByText('Superhosts are experienced, highly rated hosts who are commited to providing great stays for guests.')
    expect(details).toBeInTheDocument();
  })

  test('includes ruls icon', ()=>{
    const icon = screen.getByClass('topicIcons')
    expect(icon).toBeInTheDocument();
  })

  afterAll(cleanup)
});
