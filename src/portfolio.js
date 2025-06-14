/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Seth Borey",
  title: "Hi , I'm Borey",
  subTitle: emoji(
    "A passionate Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Java / PHP and some other cool libraries and frameworks"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SethB18",
  linkedin: "https://www.linkedin.com/in/seth-borey-51b56a303/",
  gmail: "boreysethkpk@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/cee.kay.614360",
  instagram: "https://www.instagram.com/seth.b_ck/",
  medium: "https://medium.com/@boreysethkpk",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Errors is the fun part of coding, fixed is where i proud of myself",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications While Curious about the attack surface"),
    emoji(
      "⚡ Reduce the process for better performance of web applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Setec Institute",
      logo: require("./assets/images/Setec.png"),
      subHeader: "Bechelor of Management Information System",
      duration: "April 2023 - Present",
      desc: "Top 5% in the class 3 Semester in row.",
      descBullets: [
        
      ]
    },
    {
      schoolName: "Instituto de Tecnologia du cambodge",
      logo: require("./assets/images/ITCLOGO.gif"),
      subHeader: "Foundation Year",
      duration: "February 2022 - January 2023",
      desc: "Finished foundation year selected into Telecom and Network Departement ",
      descBullets: []
    },
    {
      schoolName: "Hun Sen Kampong Kong High School",
      logo: require("./assets/images/moey.png"),
      subHeader: "Bacll",
      duration: "2021",
      desc: "Finished with Grade C of 2021 Bacll.",
      descBullets: [
        
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Software Engineer",
    //   company: "Facebook",
    //   companylogo: require("./assets/images/facebookLogo.png"),
    //   date: "June 2018 – Present",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      role: "Web Developer",
      company: "Local Team(Unofficial)",
      companylogo: require("./assets/images/Unofficial.png"),
      date: "May 2024 – May 2025",
      desc: "Build, Maintained and Deployed a Web Application for Local Team to Manage their Team and Projects. The Application is built using ReactJS, Php, Laravel, Python",
      descBullets: [
        "Developed a user-friendly interface for team management.",
        "Access to servers and databases for data retrieval and storage.",
        "Modify Backend APIs to support new features.",
        "Optimized application performance and responsiveness."
      ]
    },
    {
      role: "Volunteer IT Support",
      company: "Setec Institute",
      companylogo: require("./assets/images/Setec.png"),
      date: "May 2022 – January 2023",
      desc: "Stand By At School to Help Students with IT Issues, Installing Software, Fixing Computer Issues, and Teaching Basic Computer Skills.Discuss with the IT Department to Improve the IT Infrastructure of the School.",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ComicLogo.png"),
      projectName: "Comic Site",
      projectDesc: "Free Read all epsiode in korean",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://tgyh88.xyz/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/moo.png"),
      projectName: "Movie Site",
      projectDesc: "Free Watch Movie and TV Show Online In Korean",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://tgyh88.xyz/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/hotel.png"),
      projectName: "Hotel Management System",
      projectDesc: "Manage Room Booking, Check-in and Check-out",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tweenty.kuipedia.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/montertv.png"),
      projectName: "MovieSite",
      projectDesc: "Watch Movie and TV Show Online In Korean",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://monstertv.jtv24.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and share others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://developer.payway.com.kh/",
      title: "ABA Payway Developer",
      description:
        "How many time you have Accept 100៛ from customer that bought you a 100$ product? This is the solution for you, ABA Payway Developer API is the solution for you to accept payment online in Cambodia."
    },
    {
      url: "https://medium.com/@boreysethkpk/why-laravel-157a79e1e13f",
      title: "Why Laravel?",
      description:
        "Laravel is a PHP framework that is designed to make web development easier and more efficient.laravel end my sleepless night with raw php"
    },
    {
      url:"https://medium.com/@boreysethkpk/python-sometime-is-real-python-3c61144ea930",
      title: "Python Scraping",
      description:
        "Scraping is the process of extracting data from websites. Python is a great language for scraping because it has many libraries that make it easy to scrape data from websites."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "My Inbox is open for all.",
  number: "+885-014 986 770",
  email_address: "boreysethkpk@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
