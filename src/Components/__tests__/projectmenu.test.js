import React from 'react';
import { shallow, mount } from '../../enzyme';
import TestRenderer from 'react-test-renderer';
import CatClicker from '../../Assets/Images/catclicker.JPG';
import FeedReader from '../../Assets/Images/feedreader.JPG';
import SingaporeMap from '../../Assets/Images/singaporemap.JPG';
import Frogger from '../../Assets/Images/frogger.JPG';
import MemoryGame from '../../Assets/Images/memorygame.JPG';
import Menu from '../project_menu';

describe('project_menu tests', () => {

  it('renders', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find('.project-wrapper')).toBeDefined();
  });

  it('renders and matches our snapshot', () => {
  const component = TestRenderer.create(
    <Menu />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

  it('renders project item', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find('.laptop')).toBeDefined();
    expect(wrapper.find('.project-thumbnail')).toBeDefined();
    expect(wrapper.find('.project-text')).toBeDefined();
    expect(wrapper.find('.arrow-left')).toBeDefined();
    expect(wrapper.find('.arrow-right')).toBeDefined();
    expect(wrapper.exists('.arrow-left'));
  });

  it('right arrow button renders next project item when clicked ', () => {
    const projects = [
      {title: "Singapore Restaurants", href:"https://agile-beyond-13723.herokuapp.com/", src: SingaporeMap, tools: ['React', 'JavaScript', 'Html5', 'Css3', 'Facebook'], text:"This application uses React, Facebook Graph API, and Google Maps API to display restaurants in central Singapore."},
      {title: "Cat Clicker", href:"https://super-ming.github.io/Cat-Clicker/", src: CatClicker, tools: ['JavaScript', 'Html5', 'Css3'], text:"Cat clicking application. Click if you dare."},
      {title: "Feed Reader", href:"https://super-ming.github.io/frontend-nanodegree-feedreader/", tools: ['JavaScript', 'Html5', 'Css3'], src: FeedReader, text:"Application that provides a live feed of pages from various websites."},
      {title: "Frogger Game", href:"https://super-ming.github.io/frontend-nanodegree-arcade-game/", tools: ['JavaScript', 'Html5', 'Css3'], src: Frogger, text:"This is a classic arcade game created with JavaScript, HTML, and CSS."},
      {title: "Memory Card Game", href:"https://super-ming.github.io/Memory-Card/", src: MemoryGame, tools: ['JavaScript', 'Html5', 'Css3'], text:"This is a memory game created with JavaScript, HTML, and CSS."}
    ];
    const wrapper = mount(<Menu />, { attachTo: document.body });
    //console.log(wrapper.debug());
    expect(wrapper.find('a').props().href).toEqual(projects[0].href);
    expect(wrapper.find('.project-thumbnail').props().alt).toEqual(projects[0].title);
    expect(wrapper.find('.project-thumbnail').props().src).toEqual(projects[0].src);
    expect(wrapper.find('h4').text()).toEqual(projects[0].title);
    expect(wrapper.find('p').text()).toEqual(projects[0].text);
    //console.log(wrapper.state('key'));
    wrapper.find('button.arrow-right').simulate('click', { target: { value: wrapper.state('key') }});
    //Enzyme wrapper not re-rendering when state is changed
    wrapper.update();
    console.log(wrapper.find('div.mediaGroup').childAt(0).props().href);
    expect(wrapper.find('div.mediaGroup').childAt(0).props().href).toEqual(projects[1].href);
    expect(wrapper.find('.project-thumbnail').props().alt).toEqual(projects[1].title);
    expect(wrapper.find('.project-thumbnail').props().src).toEqual(projects[1].src);
    expect(wrapper.find('div.project-text').childAt(0).text()).toEqual(projects[1].title);
    expect(wrapper.find('div.project-text').childAt(1).text()).toEqual(projects[1].text);
    wrapper.unmount();
  });

  it('left arrow button renders previous project item when clicked ', () => {
    const projects = [
      {title: "Singapore Restaurants", href:"https://agile-beyond-13723.herokuapp.com/", src: SingaporeMap, tools: ['React', 'JavaScript', 'Html5', 'Css3', 'Facebook'], text:"This application uses React, Facebook Graph API, and Google Maps API to display restaurants in central Singapore."},
      {title: "Cat Clicker", href:"https://super-ming.github.io/Cat-Clicker/", src: CatClicker, tools: ['JavaScript', 'Html5', 'Css3'], text:"Cat clicking application. Click if you dare."},
      {title: "Feed Reader", href:"https://super-ming.github.io/frontend-nanodegree-feedreader/", tools: ['JavaScript', 'Html5', 'Css3'], src: FeedReader, text:"Application that provides a live feed of pages from various websites."},
      {title: "Frogger Game", href:"https://super-ming.github.io/frontend-nanodegree-arcade-game/", tools: ['JavaScript', 'Html5', 'Css3'], src: Frogger, text:"This is a classic arcade game created with JavaScript, HTML, and CSS."},
      {title: "Memory Card Game", href:"https://super-ming.github.io/Memory-Card/", src: MemoryGame, tools: ['JavaScript', 'Html5', 'Css3'], text:"This is a memory game created with JavaScript, HTML, and CSS."}
    ];
    const wrapper = mount(<Menu />, { attachTo: document.body });
    expect(wrapper.find('div.mediaGroup').childAt(0).props().href).toEqual(projects[0].href);
    expect(wrapper.find('.project-thumbnail').props().alt).toEqual(projects[0].title);
    expect(wrapper.find('.project-thumbnail').props().src).toEqual(projects[0].src);
    expect(wrapper.find('div.project-text').childAt(0).text()).toEqual(projects[0].title);
    expect(wrapper.find('div.project-text').childAt(1).text()).toEqual(projects[0].text);
    wrapper.find('button.arrow-left').simulate('click', wrapper.state().key);
    expect(wrapper.find('div.mediaGroup').childAt(0).props().href).toEqual(projects[4].href);
    expect(wrapper.find('.project-thumbnail').props().alt).toEqual(projects[4].title);
    expect(wrapper.find('.project-thumbnail').props().src).toEqual(projects[4].src);
    expect(wrapper.find('div.project-text').childAt(0).text()).toEqual(projects[4].title);
    expect(wrapper.find('div.project-text').childAt(1).text()).toEqual(projects[4].text);
    wrapper.unmount();
  });

})
