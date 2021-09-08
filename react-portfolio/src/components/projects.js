import blitz from './images/blitzAndChaos.jpg'
import poggers from './images/poggers.jpg'
import techBlog from './images/techBlog.jpg'
import dayPlanner from './images/dayplanner.jpg'

const projects = [
    {
      id: 1,
      dataBsTarget: "#collapseOne",
      ariaControls: "collapseOne",
      title: 'Blitz and Chaos',
      img: blitz,
      description: 'This is where the description goess',
      deployed: 'deployed url goes here',
      repo: 'repo goes here'
    },
    {
      id: 2,
      dataBsTarget: "#collapseTwo",
      ariaControls: "collapseTwo",
      title: 'Poggers',
      img: poggers,
      description: 'This is where the description goes',
      deployed: 'deployed URL goes here',
      repo: 'repo goes here',
    },
    {
      id: 3,
      dataBsTarget: "#collapseThree",
      ariaControls: "collapseThree",
      title: 'Tech Blog',
      img: techBlog,
    },
    {
      id: 4,
      dataBsTarget: "#collapseFour",
      ariaControls: "collapseFour",
      title: 'Day Planner',
      img: dayPlanner,
    }
  ]

  export default projects;