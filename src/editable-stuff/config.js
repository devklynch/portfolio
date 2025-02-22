// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Devlin",
  middleName: "",
  lastName: "Lynch",
  message: "Solving problems and creating impact through technology",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/devklynch",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/devlin-lynch/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/main_image.png"),
  imageSize: 375,
  message:
    "I'm a project manager turned software engineer who loves bringing ideas to life, making things easier for people, and getting creative with problem-solving. In my time as a project manager, I worked closely with developers to define requirements, compile use cases, and manage feature development. I also collaborated with third parties on integrations, which sparked my interest in software development and inspired me to create the solutions I once managed. Now, I combine my ability to understand projects at both a high level and in detail with my engineering skills and strong documentation practices to build thoughtful, effective solutions.",
  resume:
    "https://docs.google.com/document/d/1mNYk5VZL8Y_2E4Px-AwA_FKBYLqJGzhj8BF7lNTIC6Y/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  projects: [
    {
      title: "Smart Gardening",
      description:
        "React-based app that provides personal plant recommendations using OpenAI and Google Cloud APIs, allowing users to save and manage plants based on their garden condtions. I worked on developing the My Garden functionality to save, delete, and display plants on both the React frontend and Rails backend. I also learned about and then implemented testing with Cypress to ensure a working and accessible front-end.",
      img: require("../editable-stuff/smart_gardening.gif"),
      backendrepo: "https://github.com/sethverrill/smart-gardening-be",
      frontendrepo: "https://github.com/wally-yawn/smart_gardening_fe",
      deployedsite: "https://smart-gardening-fe.vercel.app/",
    },
    {
      title: "Music Festival",
      description:
        "This project focused on a full stack app for a music festival organization service with a Rails API and React front-end. This would be for an admin user to have the ability to view user's schedules and details as well as have the ability to remove a show from a specific schedule. This was completed in 16 hours over 3 days. The app demonstrates by ability to build a well-structured full-stack app, balancing back-end functionality with a user-friendly interface.",
      img: require("../editable-stuff/MusicFE.gif"),
      backendrepo: "https://github.com/devklynch/music_festival_be",
      frontendrepo: "https://github.com/devklynch/music_festival_fe",
    },
  ],
};

// Education SECTION
const education = {
  show: true,
  heading: "Education",
  listings: [
    {
      school: "Turing School of Software and Design",
      description: [
        "1,500 hour, 7-month intensive ACCET-accredited software development program",
        "Member of the Student Leadership Committee",
      ],
      dates: "Aug. 2024 - Mar. 2025",
      img: require("../editable-stuff/turing_logo.png"),
    },
    {
      school: "University of Colorado Denver, MBA",
      description: ["Specialization in Business Analytics"],
      dates: "Dec. 2020",
      img: require("../editable-stuff/cu_denver_logo.png"),
    },
    {
      school:
        "University of Notre Dame, Bachelor of Business Administration, IT Management",
      description: [
        "Activities and societies- Notre Dame Ultimate Frisbee Club, Notre Dame Information Technology Club, Student International Business Council Member, Dorm Vice President and Dorm Council",
      ],
      dates: "Aug. 2009 - May 2013",
      img: require("../editable-stuff/nd_logo.jpg"),
    },
  ],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  programmingLanguages: [
    {
      name: "Javascript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "Ruby",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg",
    },
  ],
  frameworks: [
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Rails",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg",
    },
    {
      name: "Cypress",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
    },
    {
      name: "RSpec",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rspec/rspec-original.svg",
    },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering. If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "devklynch@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Senior Project Manager, Paytronix Systems", // Here Add Company Name
      info: [
        "Managed large complex projects working with 3rd parties, product teams, and stakeholders",
        "Mainted project timelines and worked closely with clients ranging from IT, marketing, and C-suite executives",
        "Developed internal processes and documentation for Project Manangement Office",
      ],
      date: "Mar. 2020 – Aug. 2024",
    },
    {
      role: "Implementations Consultant, Paytronix Systems",
      info: [
        "Oversaw multiple implementations projects that involved requirements gathering, software configuration, and training clients",
        "Worked with 3rd parties to troubleshoot integrations and software",
        "Configured software for clients based on desired program and design",
      ],
      date: "Feb. 2018 – Mar. 2020",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  education,
  getInTouch,
  experiences,
};
