import { ResumeData } from './types';

let resumeData: ResumeData = {
    "imagebaseurl":"https://avatars.githubusercontent.com/u/176297",
    "name": "Will Bagby",
    "role": "Full Stack Engineer",
    "linkedinId":"4576196",
    "roleDescription": "Web Developer. Empathy is my superpower.",
    "socialLinks":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/william-bagby/",
          "className":"fa fa-linkedin"
        },
        {
          "name":"github",
          "url":"http://github.com/bagby",
          "className":"fa fa-github"
        }
      ],
    "aboutme":"I have worked professionally as a web developer/software engineer for over 20 years. I am a full stack engineer with experience in Javascript frameworks, and a wide variety of backends. DevOps, CI/CD, and cloud infrastructure are also in my wheelhouse. I have a passion for learning and teaching. I am a husband and father of three, living the dream in the 'burbs of Rockland County, NY. Hobbies include cooking, gardening, and I play a mediocre guitar and keyboards.",
    "address":"I live out in the NYC 'burbs with my family in Rockland County, NY",
    "website":"https://willbagby.dev",
    "education":[
      {
        "UniversityName":"City College of New York (CUNY)",
        "specialization":"B.S. Computer Science",
        "MonthOfPassing":"May",
        "YearOfPassing":"1998",
      }
    ],
    "work":[
      {
        "CompanyName":"Nayya",
        "specialization":"Senior Software Engineer II",
        "StartDate":"Feb 2023",
        "EndDate":"May 2024",
        "Achievements":"Maintained and enhanced the company’s Choose product, an in-depth user survey which feeds into a Recommendation engine to help users choose their employee benefits. Full stack development with a React/Redux frontend and Rails backend. Other tasks include GraphQL requests to internal and external APIs, PR reviews, occasional on-call triage duties, and deleting 70,000+ lines of legacy code (my proudest achievement)."
      },
      {
        "CompanyName":"Functional Inc.",
        "specialization":"Senior Software Engineer",
        "StartDate":"Dec 2020",
        "EndDate":"Oct 2022",
        "Achievements":"Built a multi-tenant Client/Employee Web Portal for the Louisiana Home Care industry using Ember.js and GCP. Integrated with 3rd party API from the state’s Electronic Visit Verification (EVV) system to pull in client/employee data for use by our billing/payroll software, used Firebase Auth for authentication and user management, wrote backend cloud function triggers using Node."
      },
      {
        "CompanyName":"Cardstack",
        "specialization":"Senior Software Engineer",
        "StartDate":"Oct 2017",
        "EndDate":"Mar 2020",
        "Achievements":"Built a suite of tools and components for creating complex web applications using Javascript/Typescript (Ember.js, Node) and AWS. Used Terraform to easily spin up a complete backend environment, including Docker-ized Postgres, S3, EC2, Cloudfront, Route53, etc. Participated in the ICO for the CARD token, as well as the infrastructure for allowing people to purchase it, using strict KYC standards. Built and maintained the company’s consumer facing website cardstack.com"
      },
      {
        "CompanyName":"Monegraph",
        "specialization":"Señor Software Engineer",
        "StartDate":"May 2015",
        "EndDate":"Oct 2017",
        "Achievements":"Built a Bitcoin blockchain-based platform for providing provenance for digital creative works, both a web-based app at monegraph.com, and a mobile app for iOS/Android using Cordova."
      },
      {
        "CompanyName":"McGraw-Hill Education",
        "specialization":"Software Engineer",
        "StartDate":"Mar 2012",
        "EndDate":"May 2015",
        "Achievements":"Built first-of-its-kind POC online course building software using Ember.js and Rails. Contributed to the Connect suite of education software products, used by millions of students worldwide."
      },
      {
        "CompanyName":"Bloomberg LP",
        "specialization":"Software Engineer",
        "StartDate":"Dec 2009",
        "EndDate":"Mar 2012",
        "Achievements":"Helped relaunch bloomberg.com using Ruby on Rails, maintained businessweek.com using Java/Marklogic. Implemented BConnect API for user authentication/authorization using Scala/Lift."
      },
    ],
    "skills":[
      {
        "text":"Javascript/Typescript",
        "value": 90
      },
      {
        "text":"HTML5",
        "value": 90
      },
      {
        "text":"CSS3",
        "value": 90
      },
      {
        "text":"Web Accessibility",
        "value": 90
      },
      {
        "text":"JS Frameworks (React, Ember)",
        "value": 50
      },
      {
        "text":"Node.js",
        "value": 80
      },
      {
        "text":"Ruby on Rails",
        "value": 50
      },
      {
        "text":"Test Driven Development",
        "value": 80
      },
      {
        "text":"Github",
        "value": 50
      },
      {
        "text":"CI/CD Pipelines",
        "value": 50
      },
      {
        "text":"AWS",
        "value": 50
      },
      {
        "text":"GCP",
        "value": 50
      },
      {
        "text":"PostgresQL",
        "value": 50
      },
      {
        "text":"Scrum/Agile",
        "value": 50
      },
      {
        "text":"Java",
        "value": 90
      },
      {
        "text":"Scala",
        "value": 90
      },
      {
        "text":"Mario Kart 8",
        "value": 90
      },
    ],
    "portfolio":[
      {
        "name":"Drag & Drop with Custom Animation",
        "description":"Testing interactions between hand-rolled drag & drop behavior and the ember-animation library",
        "thumburl":"images/portfolio/tic-tac-toe.png",
        "imgurl":"images/portfolio/tic-tac-toe-enhanced.mp4"
      },
      {
        "name":"Daily Scheduler",
        "description":"Built a hand-rolled daily and weekly scheduler using Ember.js for home care workers in Louisiana",
        "thumburl":"images/portfolio/daily-schedule.png",
        "imgurl":"images/portfolio/daily-schedule.mp4"
      },
      {
        "name":"Card Layout Builder",
        "description":"Built a layout builder for creating custom layouts that sync with backend data, complete with editing capabilities.",
        "thumburl":"images/portfolio/add-field-drag.png",
        "imgurl":"images/portfolio/add-field-drag.mp4"
      }
    ],
    "testimonials":[
      {
        "description":"This is a sample testimonial",
        "name":"Some technical guy"
      },
      {
        "description":"This is a sample testimonial",
        "name":"Some technical guy"
      }
    ]
  }
  
  export default resumeData;