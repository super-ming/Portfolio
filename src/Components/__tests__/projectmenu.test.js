import React from 'react';
import { shallow, mount } from '../../enzyme';
import TestRenderer from 'react-test-renderer';
import CatClicker from '../../Assets/Images/catclicker.JPG';
import FeedReader from '../../Assets/Images/feedreader.JPG';
import SingaporeMap from '../../Assets/Images/singaporemap.JPG';
import Frogger from '../../Assets/Images/frogger.JPG';
import MemoryGame from '../../Assets/Images/memorygame.JPG';
import TechEvents from '../Assets/Images/techevents.JPG';
import Awsom from '../Assets/Images/awsom.JPG';
import Voluntech from '../Assets/Images/voluntech.jpg';
import Kachingu from '../Assets/Images/kachingu.jpg';
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
      {title: "Seattle Voluntech", href:"https://seattlevoluntech.sfo2.digitaloceanspaces.com/index.html#/", src: Voluntech, sourceCode: "https://github.com/super-ming/seattlevoluntech", skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Mobile First Responsive Design', 'REST APIs'], text:"This platform aims to connect small business owners in Seattle who need technical with volunteers who can provide the skills and time."},
        {title: "Kachingu", href:"https://kachingu1.herokuapp.com/", src: Kachingu, sourceCode: "https://github.com/super-ming/v8-bears-team-13", skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Mobile First Responsive Design', 'REST APIs', 'Postgresql', 'Sass'], text:"Kachingu is an income and expense tracking application."},
        {title: "Singapore Restaurants", href:"https://singapore-restaurants.herokuapp.com/", src: SingaporeMap, sourceCode: "https://github.com/super-ming/Singapore-Neighborhood-Map", skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Mobile First Responsive Design', 'REST APIs'], text:"This application uses React, Facebook Graph API, and Google Maps API to display restaurants in central Singapore."},
        {title: "AWSOM", href:"https://awsom.herokuapp.com/", src: Awsom, sourceCode: "https://github.com/super-ming/awsom-front-end", skills: ['React', 'JavaScript', 'HTML5', 'CSS3'], text:"Redesigned existing homepage for Awsom.info, as a part of Community Hack Night initiative launch at CodeFellows."},
        {title: "What is the Next Tech Event in Seattle?", href:"https://gwgtechevents.github.io/team_seattle/", src: TechEvents, sourceCode: "https://github.com/super-ming/Udacity_calendar_team", skills: ['JavaScript', 'HTML5', 'CSS3'], text:"I created the idea of building an web application to display upcoming tech events in the Seattle area and collaborated with fellow classmates."},
        {title: "Memory Card Game", href:"https://super-ming.github.io/Memory-Card/", src: MemoryGame, sourceCode: "https://github.com/super-ming/Memory-Card", skills: ['JavaScript', 'HTMl5', 'CSS3'], text:"Memory game created with JavaScript, HTML, and CSS."},
        {title: "Feed Reader", href:"https://super-ming.github.io/frontend-nanodegree-feedreader/", sourceCode: "https://github.com/super-ming/frontend-nanodegree-feedreader", skills: ['JavaScript', 'Jasmine', 'HTML5', 'CSS3'], src: FeedReader, text:"Application that provides a live feed of pages from various websites."},
        {title: "Frogger Game", href:"https://super-ming.github.io/frontend-nanodegree-arcade-game/", sourceCode: "https://github.com/super-ming/frontend-nanodegree-arcade-game", skills: ['JavaScript', 'HTML5', 'CSS3', 'Canvas'], src: Frogger, text:"Classic arcade game created with JavaScript, HTML, and CSS."},
        {title: "Cat Clicker", href:"https://super-ming.github.io/Cat-Clicker/", src: CatClicker, sourceCode: "https://github.com/super-ming/Cat-Clicker", skills: ['JavaScript', 'HTML5', 'CSS3'], text:"Cat clicking application. Click if you dare."}
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
      {title: "Seattle Voluntech", href:"https://seattlevoluntech.sfo2.digitaloceanspaces.com/index.html#/", src: Voluntech, sourceCode: "https://github.com/super-ming/seattlevoluntech", skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Mobile First Responsive Design', 'REST APIs'], text:"This platform aims to connect small business owners in Seattle who need technical with volunteers who can provide the skills and time."},
        {title: "Kachingu", href:"https://kachingu1.herokuapp.com/", src: Kachingu, sourceCode: "https://github.com/super-ming/v8-bears-team-13", skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Mobile First Responsive Design', 'REST APIs', 'Postgresql', 'Sass'], text:"Kachingu is an income and expense tracking application."},
        {title: "Singapore Restaurants", href:"https://singapore-restaurants.herokuapp.com/", src: SingaporeMap, sourceCode: "https://github.com/super-ming/Singapore-Neighborhood-Map", skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Mobile First Responsive Design', 'REST APIs'], text:"This application uses React, Facebook Graph API, and Google Maps API to display restaurants in central Singapore."},
        {title: "AWSOM", href:"https://awsom.herokuapp.com/", src: Awsom, sourceCode: "https://github.com/super-ming/awsom-front-end", skills: ['React', 'JavaScript', 'HTML5', 'CSS3'], text:"Redesigned existing homepage for Awsom.info, as a part of Community Hack Night initiative launch at CodeFellows."},
        {title: "What is the Next Tech Event in Seattle?", href:"https://gwgtechevents.github.io/team_seattle/", src: TechEvents, sourceCode: "https://github.com/super-ming/Udacity_calendar_team", skills: ['JavaScript', 'HTML5', 'CSS3'], text:"I created the idea of building an web application to display upcoming tech events in the Seattle area and collaborated with fellow classmates."},
        {title: "Memory Card Game", href:"https://super-ming.github.io/Memory-Card/", src: MemoryGame, sourceCode: "https://github.com/super-ming/Memory-Card", skills: ['JavaScript', 'HTMl5', 'CSS3'], text:"Memory game created with JavaScript, HTML, and CSS."},
        {title: "Feed Reader", href:"https://super-ming.github.io/frontend-nanodegree-feedreader/", sourceCode: "https://github.com/super-ming/frontend-nanodegree-feedreader", skills: ['JavaScript', 'Jasmine', 'HTML5', 'CSS3'], src: FeedReader, text:"Application that provides a live feed of pages from various websites."},
        {title: "Frogger Game", href:"https://super-ming.github.io/frontend-nanodegree-arcade-game/", sourceCode: "https://github.com/super-ming/frontend-nanodegree-arcade-game", skills: ['JavaScript', 'HTML5', 'CSS3', 'Canvas'], src: Frogger, text:"Classic arcade game created with JavaScript, HTML, and CSS."},
        {title: "Cat Clicker", href:"https://super-ming.github.io/Cat-Clicker/", src: CatClicker, sourceCode: "https://github.com/super-ming/Cat-Clicker", skills: ['JavaScript', 'HTML5', 'CSS3'], text:"Cat clicking application. Click if you dare."}
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
