import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import creative from "../images/Home.png";
import doctor from "../images/Home2.png";

const fakeProjectData = [
  {
    id: 1,
    img: creative,
    url: "https://dreamfinder.com.bd/",
    client: "/",
    name: "Dream Finder",
    details:
      "A property management web application like Bproperty.com or Zameen.com .Fully Functional and Dynamic Website and Fast Website Create Using Next Js.",
    git: faGithubSquare,
    live: faExternalLinkAlt,
    tools: [
      { name: "Next Js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Firebase" },
      { name: "Node" },
      { name: "ReactBootstrap" },
    ],
  },
  {
    id: 2,
    img: doctor,
    url: "https://deploy-test.engineer-aslam-hossain.vercel.app/",
    client: "/",
    name: "Sobar Daktar",
    details: `A online Telemedicine web application that Can used by the Doctor and Patient. Authenticated User can apply for Appointment. Can Find Friends etc. `,
    git: faGithubSquare,
    live: faExternalLinkAlt,
    tools: [
      { name: "Next Js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Firebase" },
      { name: "Node" },
      { name: "ReactBootstrap" },
    ],
  },
];

export default fakeProjectData;
