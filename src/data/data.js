import pasteproof from "../assets/pasteproof-128.png";
import freddie_mac from "../assets/FreddieMacLogo.svg";
import jasaron from "../assets/jasaron_learning.png";
import ibm from "../assets/IBM_logo.svg";

export const data = [
  {
    id: 1,
    name: "AniThrift",
    image: null,
    alt: "AniThrift placeholder logo",
    placeholderLabel: "AniThrift",
    url: "https://anithrift.netlify.app/",
    description:
      "● Passion project blending anime fandom with sustainable resale, architected end-to-end in TypeScript\n● Integrated Stripe checkout, Firebase-authenticated messaging, and Firestore-backed chat threads to connect buyers & sellers\n● Designed listing workflows so community members can publish, manage, and fulfill their own product inventory alongside eBay-sourced catalog items",
  },
  {
    id: 2,
    name: "Pasteproof",
    image: pasteproof,
    url: "https://pasteproof.com",
    description:
      "● Developed a full-stack web application with modern React frontend and robust backend architecture\n● Implemented secure user authentication and data management systems\n● Created responsive UI/UX design ensuring optimal user experience across all devices",
  },
  {
    id: 3,
    name: "Freddie Mac",
    image: freddie_mac,
    url: "https://sf.freddiemac.com",
    description:
      "● Maintained and stabilized a mission-critical web ecosystem through proactive maintenance and complex content deployments, successfully achieving and sustaining 100% platform uptime\n● Led the technical execution of a complex platform migration, architecting a new front-end experience from legacy systems and strictly ensuring compliance with internal Freddie Mac design principles\n● Managed the end-to-end content deployment pipeline, integrating dynamic assets within the Drupal architecture to ensure content freshness and seamless user narrative",
  },
  {
    id: 4,
    name: "Jasaron Learning Institute (discontinued)",
    image: jasaron,
    description:
      "● Developed and deployed customized, responsive user interfaces using standard HTML5/CSS practices to align with client educational goals\n● Managed all aspects of client website maintenance, encompassing front-end layout modifications, back-end functionality, and performance optimization\n● Leveraged market research and UX/UI practices to enhance site usability",
  },
  {
    id: 5,
    name: "IBM",
    image: ibm,
    url: "https://www.ibm.com/support/pages/ibmsearch",
    description:
      "● Developed diagnostic script to reconcile published Drupal content\n● Engineered search query capabilities in Drupal by introducing a component parameter, facilitating more nuanced and targeted content discovery for end-users",
  },
];
