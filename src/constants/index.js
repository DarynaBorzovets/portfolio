import {
  cardTrick,
  openTable,
  jobHunting,
  me,
 

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  
  {
    id: "technologies",
    title: "Technologies",
  },
  
  
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "experience",
    title: "Experience",
  },
 
  {
    id: "contact",
    title: "Contact",
  },
];

const tech = [
  {title: "JavaScript"},
  {title: "HTML"},
  {title: "CSS"},
  {title: "React"},
  {title: "TailWind"},
  {title: "BootStrap"},
  {title: "MaterialUI"},
  {title: "ChakraUI"},
  {title: "Node.js"},
  {title: "Express"},
  {title: "PostgreSQL"},
  {title: "RESTful APIs"},
  {title: "Git"},
  {title: "GitHub"},
  {title: "DevOps"},
  {title: "Axios"},
  {title: "Proxy"},
  {title: "Figma"},
  {title: "Docker"},
  {title: "Codacy"},
  {title: "Jest"},
  {title: "Postman"},
  {title: "JIRA"},
  {title: "Slack"},
  {title: "Kanban"},
  {title: "Agile Methodology"},
  {title: "System Design"},
  {title: "Microsoft Office"},












];

const photo = [
  { 
    title: "Web Developer",
    icon: me
    
 },];


const experiences = [
  {
    company_name: "Freelance",
    title: "Front-End Engineer",
  

    date: "2022 - Present",
    points: [
      "Conceptualize and launch innovative projects",
      "Lead collaboration with stakeholders to drive design decisions",
      "Engineer adaptive UI",
    ],
  },
  {
    title: "Junior Front-End Engineer",
    company_name: "5Star Foods Group",

    date: "2021-2022",
    points: [
      "Leveraged FAANG best practices",
      "Created and maintained ",
      "Collaborated with a cross-functional team",
      "Empowered the team during critical dead-lines",
    ],
  },
  {
    title: "Day Trader",
    company_name: "Self Employed",

    date: "2018-2021",
    points: [
      "Conducted in-depth analysis of the stock market",
      "Executed high-risk trades and implemented day trading strategies",
      "Traded penny stocks and performed pre-market and after-market trades"
    ],
  },
];

const projects = [
  {
    name: "Magic trick",
    description:"Developed a creative project emphasizing user experience and blend illusion with interactive elements.",
   
    image: cardTrick,
    source_code_link: "https://github.com/DarynaBorzovets/magic-trick-my-project",
  },
  {
    name: "OpenTable-improvement",
    description:"Led the development of a VIP list with special tags for guests, ensuring a personalized dining experience.",
   
    image: openTable,
    source_code_link: "https://github.com/DarynaBorzovets/open-table-improvement-my-project",
  },
  {
    name: "Job-hunting",
    description:
      "Designed an application, enabling users to filter job opportunities by posting language, facilitating communication.",
    
    image: jobHunting,
    source_code_link: "https://github.com/DarynaBorzovets/job-hunting-my-project",
  },
];

export { photo, experiences, projects, tech };


