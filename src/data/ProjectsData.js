import Edokan from "../assets/Edokan.png";
import water4all from "../assets/water4all.png";


export const projects = [
  {
    id: 1,

    title: "Laravel Task Manager",

    status: "In Progress",

    featured: true,

    description:
      "Currently building a modern Task Management application with authentication, user-specific task management, CRUD operations, search, filtering and REST APIs using Laravel 12.",

    technologies: [
      "Laravel 12",
      "PHP",
      "MySQL",
      "REST API",
      "Sanctum",
    ],

    image: "/projects/task-manager.png",

    github: "https://github.com/Turjo24/Task_Manager",

    live: null,
  },

  {
    id: 2,

    title: "EDokan",

    status: "Completed",

    featured: true,

    description:
      "A full-stack e-commerce platform with authentication, product management, shopping cart, order processing and responsive user interface.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    image: Edokan,

    github: "https://github.com/kalvin-chakma/Project-CSE-2200",

    live: "https://project-cse-2200-ui.vercel.app/",
  },

  {
    id: 3,

    title: "Water4ALL",

    status: "Completed",

    featured: true,

    description:
      "Water supply and donation platform that connects donors with communities while tracking water distribution efficiently.",

    technologies: [
      "ASP.NET Core",
      "SQL Server",
      "Bootstrap",
    ],

    image: water4all,

    github: "https://github.com/Turjo24/Water4ALL-ASP.NET-PROJECT",

    live: null,
  },

  {
    id: 4,

    title: "PharmaConnect",

    status: "Completed",

    description:
      "Cross-platform medicine ordering mobile application with clean UI and smooth medicine browsing experience.",

    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
    ],

    image: "/projects/pharmaconnect.png",

    github: "https://github.com/Ahnaf152020/PharmaConnect",

    live: null,
  },

  {
    id: 5,

    title: "TrendyTrade",

    status: "Completed",

    description:
      "A web platform that enables users to barter and exchange products securely using Laravel.",

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
    ],

    image: "/projects/trendytrade.png",

    github: "https://github.com/Farhan-Islam-Ifti/TrendyTrade",

    live: null,
  },

  {
    id: 6,

    title: "Stroke Prediction",

    status: "Completed",

    description:
      "Machine Learning model for predicting stroke risk using healthcare data with preprocessing, training and evaluation.",

    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Google Colab",
    ],

    image: "/projects/stroke.png",

    github: "#",

    live: null,
  },
];