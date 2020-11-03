import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import creative from '../images/creative.jpg';
import doctor from '../images/doctor.jpg';
import volunteer from '../images/volunteer.jpg';
import crwn from '../images/crwn.jpg';
const fakeProjectData = [
  {
    id: 1,
    img: creative,
    url: 'https://creative-agency-bd3fb.web.app/',
    client: 'https://github.com/engineer-aslam-hossain/creative-agency-client',
    name: 'Creative Agency',
    details:
      'A single page web app for Software Agency Service with Admin dashboard. Authenticated user can order for a service and check his/her service and can give reviews.',
    git: faGithubSquare,
    live: faExternalLinkAlt,
    tools: [
      { name: 'React' },
      { name: 'Express' },
      { name: 'MongoDB' },
      { name: 'Firebase' },
      { name: 'Node' },
      { name: 'ReactBootstrap' },
    ],
  },
  {
    id: 2,
    img: doctor,
    url: 'https://doctors-portal-1c3c1.web.app/',
    client: 'https://github.com/engineer-aslam-hossain/doctors-portal-client',
    name: 'Doctors Portal',
    details:
      'A single page web app for Doctors clinic to maintain appointment and manage appointment and patient as well as their prescription status in online. ',
    git: faGithubSquare,
    live: faExternalLinkAlt,
    tools: [
      { name: 'React' },
      { name: 'Express' },
      { name: 'MongoDB' },
      { name: 'Firebase' },
      { name: 'Node' },
      { name: 'ReactBootstrap' },
    ],
  },
  {
    id: 3,
    img: volunteer,
    url: 'https://volunteer-network-b9cfa.web.app/',
    name: 'Volunteer Network',
    client:
      'https://github.com/engineer-aslam-hossain/volunteer-network-client',
    details:
      'A single page web app for Software Agency Service with Admin dashboard. Authenticated user can order for a service and check his/her service and can give reviews.',
    git: faGithubSquare,
    live: faExternalLinkAlt,
    tools: [
      { name: 'React' },
      { name: 'Express' },
      { name: 'MongoDB' },
      { name: 'Firebase' },
      { name: 'Node' },
      { name: 'ReactBootstrap' },
    ],
  },
  {
    id: 4,
    img: crwn,
    url: 'https://crwn-clothig.herokuapp.com/',
    client: 'https://github.com/engineer-aslam-hossain/CRWN_Clothing',
    name: 'Crown Clothing',
    details:
      'A single page web app for E-commerce business and Manage order with stripe payment gateway and Authentication with firebase ',
    git: faGithubSquare,
    live: faExternalLinkAlt,
    tools: [
      { name: 'React' },
      { name: 'Redux' },
      { name: 'Stripe' },
      { name: 'Firebase' },
      { name: 'Node' },
      { name: 'ReactBootstrap' },
    ],
  },
];

export default fakeProjectData;
