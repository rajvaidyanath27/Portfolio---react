import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.avif";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I love to Build, Code & Create Websites.`;

export const ABOUT_TEXT = `I’m a versatile MERN stack developer and AI/ML Enthusiast, Currently i am in my 2nd year pursuing Btech in CSE. I am Skilled in React, Node.js, and databases like MySQL and MongoDB.I have a Strong command in MERN Stack, I excel at solving complex problems and delivering impactful solutions. Passionate about learning, staying ahead of tech trends, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2008 - 2021",
    role: "Student",
    company: "Holy Cross School",
    description: `Class 10th`,
    technologies: '85.6%',
  },
  {
    year: "2021 - 2023",
    role: "Student",
    company: "Sunbeam School",
    description: `Class 12th`,
    technologies: '80%',
  },
  {
    year: "2023 - 2027",
    role: "Student",
    company: "Galgotias University",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    
  },
  {
    year: "2024 Dec - ...",
    role: "Upcoming....",
    company: "Soon!!!",
    description: ` Looking for an Intern..........`,
    technologies: 'MERN Stack',
  },
];

export const PROJECTS = [
  {
    title: "Get Me A Coffee",
    image: project1,
    description:
      " The Get Me A Coffee app is a simple, user-friendly application designed to help users quickly order their favorite coffee with just a few clicks. Built with Next.js, the app leverages the power of React and server-side rendering to provide a fast and seamless experience. ", 
    technologies: [ "React", "Next.js", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Resturant Reservation",
    image: project2,
    description:
      " Users can book tables by selecting the date, time, and number of guests..",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Top Movies",
    image: project3,
    description:
      "Top Movies Search app, the general idea is that your app will allow users to search for and discover the best movies, view detailed information about each one (such as plot, cast, release year, etc.), and maybe even sort or filter the movies based on different criteria (e.g., top-rated, newest releases, genres, etc.).",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Currency Converter",
    image: project4,
    description:
      "Convert one currency to another in real time using the latest exchange rates. This project is useful for travelers, businesses, and anyone dealing with international transactions.",
    technologies: ["HTML", "Tailwind", "React.js"],
  },
];

export const CONTACT = {
  address: "Delhi , India",
  phoneNo: "+91 9559060225 ",
  email: "rajshowspeed@gmail.com",
};
