import website from '../assets/Website.png';
import frost from '../assets/Frostbite.png';
import dqn from '../assets/DQN.png';
import reciped from '../assets/Reciped.png';
import shop from '../assets/shop.png';
import apollo from '../assets/apollo.png';
import analytics from '../assets/analytics.png';

export const projects = [
  {
    name: 'Portfolio Website',
    description:
      'An interactive website that displays 3D models and parallax scrolling. ThreeJS was used to render the models and framer motion used to animate the scrolling.',
    tags: [
      {
        name: 'react',
        color: 'rgb(194, 114, 190)',
      },
      {
        name: 'threejs',
        color: 'cyan',
      },
      {
        name: 'framer motion',
        color: 'rgb(60, 186, 125)',
      },
    ],
    image: website,
    code_link: 'https://github.com/JoshRuthel/portfolio',
  },
  {
    name: 'Reciped Web Application',
    description:
      'Fullstack web application that allows users to create, store, share and discover recipes. It also includes a Machine Learning based recommendation system.',
    tags: [
      {
        name: 'react',
        color: 'rgb(194, 114, 190)',
      },
      {
        name: 'nodejs',
        color: 'cyan',
      },
      {
        name: 'postgreSQL',
        color: 'rgb(60, 186, 125)',
      },
    ],
    image: reciped,
    code_link: 'https://github.com/Reciped-Social-Media',
  },
  {
    name: 'Frostbite Atari',
    description:
      'Arcade game replica of the original 1983 Frostbite. OOP was used in conjuction with C++ to control game mechanics and SFML used for display.',
    tags: [
      {
        name: 'c++',
        color: 'rgb(194, 114, 190)',
      },
      {
        name: 'sfml',
        color: 'cyan',
      },
      {
        name: 'git',
        color: 'rgb(60, 186, 125)',
      },
    ],
    image: frost,
    code_link: 'https://github.com/JoshRuthel',
  },
  {
    name: 'DQN  Model',
    description:
      'Deep Q-Network Machine Learning model trained to optimize task offloading decisions in IoT devices for edge computing. Python was used to simulate the training results.',
    tags: [
      {
        name: 'python',
        color: 'rgb(194, 114, 190)',
      },
      {
        name: 'pyTorch',
        color: 'cyan',
      },
      {
        name: 'RL',
        color: 'rgb(60, 186, 125)',
      },
    ],
    image: dqn,
    code_link: 'https://github.com/JoshRuthel/DQN',
  },
];

export const experience = [
  {
    title: 'API Data Centre',
    location: 'Syft Analytics',
    img: shop,
    date: 'January 2022 - March 2022',
    description: [
      'Developed a data centre that integrates with Shopify, Mailchimp, Paypal, Stripe and Microsoft teams APIs.',
      'User authentication was setup using OAuth flow to retrieve personal information.',
      'Filtration system allowed users to filter data by date ranges.',
    ],
  },
  {
    title: 'Lead Generation',
    location: 'Syft Analytics',
    img: apollo,
    date: 'January 2023 - March 2023',
    description: [
      'Developed a simple Web Application to streamline the data enrichment and user authentication process.',
      'The pipeline made use of existing APIs Apollo and Reacher for data enrichment and authentication.',
      'An automated pipeline for discovering leads using the Google Maps API was also created.',
    ],
  },
  {
    title: 'React Developer',
    location: 'Syft Analytics',
    img: analytics,
    date: 'July 2023 - Present',
    description: [
      'Developed a pipeline for lead generation making use of the Puppeteer Javascript Library for web scraping.',
      'Interacted extensively with Google Query Language and the Google Maps/Analytics API for reporting return on advertising metrics.',
      'Currently learning how to integrate ThreeJS and Framer Motion into landing pages to create authentic parallax scrolling experiences.',
    ],
  },
];
