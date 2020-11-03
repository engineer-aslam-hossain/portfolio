import blog1 from '../images/blog-1.png';
import blog2 from '../images/blog-2.png';
import blog3 from '../images/blog-3.png';
const fakeBlogs = [
  {
    id: 1,
    img: blog1,
    title: 'How Javascript Hoisting Work',
    details:
      'Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution...',
  },
  {
    id: 2,
    img: blog2,
    title: 'React useContext In Easy Way',
    details:
      'If you are a React developer, and haven’t learned about React hooks yet, it is the perfect time to start learning now...',
  },
  {
    id: 3,
    img: blog3,
    title: 'How Context Made life easier',
    details:
      'Context is about sharing data to many components. The reason we need the Context API is that its cumbersome to pass data...',
  },
];

export default fakeBlogs;
