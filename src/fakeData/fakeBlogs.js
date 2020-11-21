import blog1 from '../images/javaScript.jpg';
import blog2 from '../images/react.png';
import blog3 from '../images/js1.jpg';
const fakeBlogs = [
  {
    id: 1,
    img: blog1,
    title: 'Important Topics of JavaScript You Must Know :- Part-1',
    url:
      'https://aslamhossain-dev.medium.com/important-topics-of-javascript-you-must-know-part-1-8f7a1373e4a',
    details:
      'what the String.charAt() does is returns a new string consisting of the single value what we pass through this methods.It only gives us only one character of the whole string....',
  },
  {
    id: 2,
    img: blog2,
    url:
      'https://aslamhossain-dev.medium.com/10-important-topics-in-react-e2327a15678c',
    title: '10 Important Topics in React',
    details:
      'like other framework as like Angular or Ember React is not a framework, framework comes with lot’s of built in rules and regulation you cannot go beyond them but using react for front end you have lot’s of control of your application.React is all about flexibility, you can use much more third party tools while building react application....',
  },
  {
    id: 3,
    img: blog3,
    title: 'Important Topics of JavaScript You Must Know :- Part-2',
    url:
      'https://aslamhossain-dev.medium.com/important-topics-of-javascript-you-must-know-part-1-9cab58ff307c',
    details:
      'But you can say non primitive data are not 2 types only one types because functions are also objects There no Array type, no other type in javascript....',
  },
];

export default fakeBlogs;
