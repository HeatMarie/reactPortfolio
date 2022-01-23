import blitz from './images/blitzAndChaos.jpg'
import poggers from './images/poggers.jpg'
import techBlog from './images/techBlog.jpg'
import dayPlanner from './images/dayplanner.jpg'
import weatherDashboard from './images/weatherDashboard.png'
import enviroPact from './images/EnviroPact.png'

const projects = [
    {
      id: 1,
      dataBsTarget: "#collapseOne",
      ariaControls: "collapseOne",
      title: 'EnviroPact',
      img: enviroPact,
      description: `EnviroPact is an app that makes Company and corporate ESG scores more accessible to the public. My tasks here included: helping design the layout, creating the Login, Sign up and data charts.`,
      deployed: `https://enviropact.herokuapp.com/`,
      repo: `https://github.com/HeatMarie/EnviroPact`
    },
    {
      id: 2,
      dataBsTarget: "#collapseTwo",
      ariaControls: "collapseTwo",
      title: 'Poggers',
      img: poggers,
      description: 'Poggers-POG is an app that allows user to sign into an account and add game titles and tasks. This was a full stack group project that utilized Handlebar templates, Express.js, Sequelize, MySQL, and Heroku.',
      deployed: 'https://poggers-pog.herokuapp.com/',
      repo: 'https://github.com/HeatMarie/pogger',
    },
    {
      id: 3,
      dataBsTarget: "#collapseThree",
      ariaControls: "collapseThree",
      title: 'Blitz and Chaos',
      img: blitz,
      description: 'Blitz and Chaos is an interactive story app that allows the reader to dive further into a story by making their own choices. This app used APIs, JavaScript, CSS, and HTML5 to give the user the experience of an Interactive Story',
      deployed: 'https://heatmarie.github.io/BlitzandChaos/',
      repo: 'https://github.com/HeatMarie/BlitzandChaos'
    },
    {
      id: 4,
      dataBsTarget: "#collapseFour",
      ariaControls: "collapseFour",
      title: 'Tech Blog',
      img: techBlog,
      description: 'This fun, pesky project was one to put all the skills to the test. The project implemented Handlebar templates, Ex- press.js, Sequelize, MySQL, and Heroku to truly create a full stack app.',
      deployed: 'https://heats-tech-blog.herokuapp.com',
      repo: 'https://github.com/HeatMarie/techBlog',
    },
    {
      id: 5,
      dataBsTarget: "#collapseFive",
      ariaControls: "collapseFive",
      title: 'Day Planner',
      img: dayPlanner,
      description: `I mean, it's a day planner. Nothing fancy, but it was fun to create. It uses Javascript, Luxon (third-party API), CSS, and HTML. `,
      deployed: 'https://heatmarie.github.io/dayPlanner/',
      repo: 'https://github.com/HeatMarie/dayPlanner'
    },
    {
      id: 6,
      dataBsTarget: "#collapseSix",
      ariaControls: "collapseSix",
      title: 'Weather Dashboard',
      img: weatherDashboard,
      description: `That app that will remind you that no one really knows what the weather will do. This app uses JavaScript, Luxon API, HTML5, and CSS3.`,
      deployed: `https://heatmarie.github.io/weatherDashboard/`,
      repo: `https://github.com/HeatMarie/weatherDashboard`
    }
  ]

  export default projects;