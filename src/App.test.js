import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from './enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = mount(<App />);
  //console.log(wrapper.debug());
  ReactDOM.render(wrapper, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('focus update', () => {
  it('updates focus when project navlink is clicked', () => {
    document.body.innerHTML = '<div></div>';
    const wrapper = mount(<App />, { attachTo: document.getElementsByName('div')[0] });
    //console.log(wrapper.debug());
    wrapper.find('a.project-nav').prop('onClick')();
    console.log(document.hasFocus());
    expect(wrapper.find('div.project-wrapper').childAt(0).props().id).toEqual(document.activeElement.id);
  })
})
