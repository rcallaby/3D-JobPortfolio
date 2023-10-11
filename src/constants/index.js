import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Penetration Tester",
      icon: web,
    },
    {
      title: "Udemy Instructor",
      icon: mobile,
    },
    {
      title: "Kindle Author",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Freelance Website Penetration Tester",
      company_name: "Self Employed",
      icon: starbucks,
      iconBg: "#383E56",
      date: "September 2019 - Present",
      points: [
          "Currently, I perform website vulnerability tests and inform clients of their vulnerabilities using industry standard best practices",
          "As well, I work on several bug bounty programs to help major corporations to find website vulnerabilities using their standardized reporting practices",
          "Currently, I am honing my defensive skills so that I could become a more well rounded security consultant."
      ],
    },
    {
      title: "Udemy Instructor",
      company_name: "Udemy",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Kindle Author",
      company_name: "Amazon",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "I am presently an author with a substantial portfolio of works available on Amazon Kindle. ",
        "In the interest of maintaining content quality, I have made the decision to temporarily withdraw some of my books from the platform to facilitate necessary updates.",
        "At this time, my primary focus revolves around the creation of a new series of non-fiction books, predominantly comprising instructive tutorials. ",
        "These forthcoming publications will predominantly delve into topics such as Linux, Microsoft Azure, and Visual Studio Code.",
      ],
    },
    {
      title: "YouTuber/Content Creator",
      company_name: "Google/Alphabet",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "I make review videos on technology and also educational tutorial videos on Linux, Programming, Ethical Hacking, and so on.",
        "I am considering making YouTube my primary platform for my courses and moving away from Udemy.",
        "My current focus is to create many more long form informative tutorials, and well as some very compelling and informative YouTube shorts"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Richard demonstrated from early in his tenure that he understood what business is all about. He was well organized. He was quite aware of the bottom line, and had a knack for recognizing and eliminating waste.", 
      name: "Leroi Palmer",
      designation: "Founder",
      company: "BOD at Inno-Q",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Richard is a passionate writer and an avid blogger. He is highly motivated and has a skill set which helps and inspires others to achieve their goals. ",
      name: "Himanshu Prasad",
      designation: "Actor",
      company: "Coach",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Great service! Very clear writer and attentive editor!",
      name: "Kevin Burcroft, MBA",
      designation: "QAD Technical Product Manager",
      company: "Syndicate One Group",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };