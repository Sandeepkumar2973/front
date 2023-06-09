import React from 'react';
import classes from './Projects.module.css';
import bookheap from '../images/p5.jpeg';
import chess from '../images/p1.jpeg';
import shopping from '../images/p3.png';
import travel from '../images/p4.png';
// import definition from '../images/definition.png';
// import memes from '../images/memes.png';
// import superhero from '../images/superhero.png';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

// Web projects
const cardItem = [
  {
    link: 'https://www.neeve.io/',
    title: 'Education web & app',
    techStack: 'Tech Stack- MERN Stack',
    desc: 'Neeve powers new age online learning for students, engages parents and simplifies teacher’s tasks all on one connected platform...',
    image: travel
  },
  {
    link: 'https://vgorides.com/',
    title: 'On Demand Booking ',
    techStack: 'Tech Stack: Full stack',
    desc: 'Logistics management service provider, organize and control the flow of goods, services.',
    image: bookheap
  },
  {
    link: 'https://csf.care//',
    title: 'Foundation for poor person',
    techStack: 'Tech Stack- ReactJs, NodeJS, Express',
    desc: 'The NGO organized a marriage ceremony for underprivileged couples, providing them with financial assistance, clothes, jewelry, and other necessary items. .',
    image: chess
  },
  
  {
    link: 'https://mindglobal.ae/',
    title: 'Data Scientist ',
    techStack: 'Tech Stack- Mern Stack',
    desc: 'We bring extensive experience and expertise to help customers bring their visions to life. To maintain its status as the best IT solutions provider, Mindstorm Global Technologies displays high knowledge and dedication to its job..',
    image: shopping
  },
  // {
  //   link: 'https://play.google.com/store/apps/details?id=com.thesachin.your_dictionary',
  //   title: 'Definition Finder',
  //   techStack: 'Tech Stack: Flutter',
  //   desc: 'Definition Finder is absolutely free online dictionary with every word you look up. Millions of definitions from the most trusted source.',
  //   image: definition
  // },
  // {
  //   link: 'https://play.google.com/store/apps/details?id=com.thesachin.superheroes',
  //   title: 'My Superhero',
  //   techStack: 'Tech Stack- Flutter',
  //   desc: 'My SuperHero app provides all SuperHeroes and Villians data like powerstats, full name from all the universes.',
  //   image: superhero
  // },
  // {
  //   link: 'https://play.google.com/store/apps/details?id=com.thesachin.memestemplate',
  //   title: 'Indian Memes Templates',
  //   techStack: 'Tech Stack- Flutter',
  //   desc: ' Indian meme templates - Memeशाला contains a wide range of Indian meme templates including Bollywood, political, Indian shows. You can edit and create memes too.',
  //   image: memes
  // }
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <li>
        <a href={cardItem.link} className={classes.card} target='_blank'>
          <img src={cardItem.image} className={classes.card__image} alt='' />
          <div className={classes.card__overlay}>
            <div className={classes.card__header}>
              <svg className={classes.card__arc} xmlns='http://www.w3.org/2000/svg'>
                <path />
              </svg>
              <div className={classes.card__header_text}>
                <h3 className={classes.card__title}>{cardItem.title}</h3>
                <span className={classes.card__status}>{cardItem.techStack}</span>
              </div>
            </div>
            <p className={classes.card__description}>{cardItem.desc}</p>
          </div>
        </a>
      </li>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
        {/* <h2 className={classes.heading}>ANDROID APP PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItemApps.map((item) => {
            return getProjectCard(item);
          })}
        </ul> */}
      </ScrollAnimation>
    </div>
  );
}
