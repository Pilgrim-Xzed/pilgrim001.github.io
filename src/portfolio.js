
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sa'id Bello",
  title: "Sa'id here,",
  subTitle: emoji("A highly motivated 🚀 software developer with solid understanding of software development best practices and loves to build stuff, I'm also an open source hobbyist & a community mentor focused on making impacts."),
  resumeLink: "https://docs.google.com/document/d/17EXG2z0rlHGqTHDSF09eWxROjZiAaf12LEu04gBBLaY/edit"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Pilgrim001",
  linkedin: "#",
  gmail: "saeedbello12@gmail.com",
  gitlab: "https://gitlab.com/Slammad",
  facebook: "#"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
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
      skillName: "Flutter",
      fontAwesomeClassname: "fa fa-flutter"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Dart & Flutter ",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "60%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "(Contract Based)Remote Software Developer",  
      company: "Mercurie",
      companylogo: require("./assets/images/company.jpg"),
      date: "June 2019",
      desc: "At Mercurie, I was focused on building an android retail recommendation tool for Android Go devices using mind-blowing technologies.",
      descBullets: [
        "Built complex backend logic and Restful APIs with Python, Flask, Nodejs",
        "Designed and Integrated systems with Google Cloud products such as Cloud Storage, Cloud Build, Cloud Pub/Sub, Container Registry, Firebase/Firestore, CI/CD tools.",
        "Designed User Interfaces with Vuejs and Integrated with Firebase,and Restful Endpoints.",
        "Wrote Automation Scripts and Continuous Deployment Pipelines based on Google Cloud Infrastructure.",
        "Developed an Android App with tablet support only to be installed in stores selling the following brands (Tecno,Infinix,Itel)"
      ]
    },
    {
      role: "Mobile Developer",   
      company: "RestMeal",
      companylogo: require("./assets/images/restmeal.jpg"),
      date: "May 2019",
      desc: "At Restmeal, I was focused on building a mobile application for table reservation and meal order"
    },
    {
      role: "Software Engineer (Intern)",  
      company: "NIMC",
      companylogo: require("./assets/images/nimc.jpg"),
      date: "2018",
      desc: "At NIMC, I worked as an intern with the IT Department and I was focused on system maintenance and network configuration."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "LIST",
  projects: [
    {
      image: "https://storage.cloud.google.com/hpc_bucket/visuals.jpg",
      link: "https://github.com/Pilgrim001/NG-Tracker-v1.0"
    },
    {
      image: "https://storage.cloud.google.com/hpc_bucket/restmeal1.jpg",
      link: "https://play.google.com/store/apps/details?id=com.slammad.restmealapp"
    },
    {
      image: "https://storage.cloud.google.com/hpc_bucket/1d510f87-1b8d-4ff6-a296-90261960c995.jpeg",
      link: "#"
    },
   
  
  

  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji(""),
  subtitle: "",

  achivementsCards: [
   
  ]
};

// Blogs Section

const blogSection = {

  title: "",
  subtitle: "",

  blogs: [
   
  ]
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: emoji(""),

  talks: [
    
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji(""),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: []
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+2349094815738",
  email_address: "saeedbello12@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : ""//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
