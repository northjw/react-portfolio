// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.png"


export default {
  

  //   Header Details ---------------------
  name: "Josh North",
  headerTagline: [
    //Line 1 For Header
    "Designer",
    //Line 2 For Header
    "Web Developer,",
    //Line 3 For Header
    "Artist",
  ],
  //   Header Paragraph
  headerParagraph:
    "“Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it sure stinks.”   ---–Irene Au",

  //Contact Email
  contactEmail: "northjw1@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, 
      title: "Weather Forcaster", 
      para:
        "A weather forecast app that allows the user to search for weather conditions currently in any city. It also shows the next 5 day forecast.", 
      imageSrc:
        "https://images.unsplash.com/photo-1577648188599-291bb8b831c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1358&q=80",
     
      url: "https://northjw.github.io/weather-forecaster/",
    },
    {
      id: 2, 
      title: "Note Taker", 
      para:
        "This is an application that uses express so that the user can create, save, and delete notes.", 
      imageSrc:
      "https://images.unsplash.com/photo-1560762484-813fc97650a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
     
      url: "https://calm-castle-82091.herokuapp.com/",
    },
    {
      id: 3, 
      title: "Recipe Rolodex", 
      para:
        "This application allows you to search recipes, favorite recipes, create a shopping list, and search recipe videos on YouTube.", 
      imageSrc:
      "https://images.unsplash.com/photo-1516116412344-6663387e8590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
     
      url: "https://sabinehutter.github.io/Recipe-Rolodex/",
    },
    {
      id: 4, 
      title: "The Good Samaritan", 
      para:
      "This is a covid tracer application that allows users to log locations they have visited by date. If a user receives a positive test result for covid 19, they then report it to the app. The app then compiles a list of everone who may have had exposure at the same locations, generates an email, and informs the users of a possible exposure.",
        
    
      imageSrc:
        "https://images.unsplash.com/photo-1592991538534-00972b6f59ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
     
      url: "https://the-good-samaritan-covid-track.herokuapp.com/",
    },
    {
      id: 5, 
      title: "Body Of Work || Fitness Tracker", 
      para:
        "An app that allows a user to log multiple exercises in a workout on a given day, to be able to track the name, type, weight, sets, reps, and duration of exercise. when the exercise is a cardio exercise, the user is able to track their distance traveled.", 
      imageSrc:
        "https://images.unsplash.com/photo-1603297638322-c7a08d52966c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
     
      url: "https://fierce-harbor-15977.herokuapp.com/?id=5fefb0efe2381700171b96b0",
    },
    {
      id: 6, 
      title: "Budget Tracker", 
      para:
        "Track your withdrawals and deposits with this budget tracker that works online and offline!", 
      imageSrc:
        "https://images.unsplash.com/photo-1563191911-e65f8655ebf9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
     
      url: "https://hidden-plateau-34179.herokuapp.com/",
    },
    

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I'm an artist currently in a life transition going from working on Broadway as a costumer, to becoming a web developer. The world is an ever changing place that I've learned to adapt and change with. This can be seen in my art through the years in the various mediums I've expressed myself through. I've worked in Photography, Graphic Design, Costume Design, Screen Printing, and most recently Watercolors.",
  aboutParaTwo:
    "I grew up on a small farm in Virginia with my mother, my father, and my older sister. I was very connected to nature as a young boy and have found inspiration from it ever since. Despite my love of the natural world I was always drawn to city life. After completing my college career at James Madison University, I moved to New York City. I continue to reside here in Bushwick Brooklyn.",
 
  
    
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "CSS",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "JAVASCRIPT",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "REACT",
    },
    {
      id: 5,
      img: designIcon,
      para:
        "EYE FOR DESIGN",
    },
    {
      id: 6,
      img: codeIcon,
      para:
        "VS CODE",
    },
    
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Upcoming",
  promotionPara:
    "Next I will be taking courses at M.I.T to better my knowledge in computer science and python. Check back at the begining of April to see what progress I've made.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/northjw" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/josh-north-9577241b3/",
    },
   
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
