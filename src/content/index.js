import react from '../images/react.svg';
import mongodb from '../images/mongo.png'
import express from '../images/express.png'
import node from '../images/node.png'

export default {
    nav: {
      logo: 'CC',
      links: [
        { text: 'Work', to: 'mywork' },
        { text: 'Contact', to: 'mycontact' },
      ],
    },
    header: {
      img:
        'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
      text: ['Hi!', "It's me Alejandro Waldo.", 'I am '],
      typical: [
        'web developer. 🖥',
        2000,
        'Backend developer. 📹',
        2000,
        'Mobile Developer',
        2000,
      ],
      btnText: 'Discover More',
    },
  
    stack: {
      title: 'Stack',
      tech: [
        {
          img: mongodb,
          alt: 'mongodb',
        },
        {
          img: react,
          alt: 'react',
        },
        {
          img: express,
          alt: 'express',
        },
        {
          img: node,
          alt: 'node',
        },
      ],
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
    },
  };