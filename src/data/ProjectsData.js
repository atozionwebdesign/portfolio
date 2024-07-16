import React from "react";
import TechTable from "../components/Portfolio/TechTable";

export const projects = [
  {
    project: "ZionTV",
    title: "ZionTV",
    subtitle: "An Interactive Learning Flashcard App",
    logo: require("../assets/portfolio/logos/Zion-TV500-logo.png"),
    about:
      "Designed with the help of it's namesake inquisitive toddler, ZionTV is a fun and interactive learning game for babies, toddlers, and young children.  It includes a wide range of flashcards to help young learners learn alphabets, numbers, shapes, and much more.",
    techTable: (
      <TechTable
        frontEnd={["react-bootstrap"]}
        platform={["react"]}
        backEnd={[]}
        api={[]}
        graphics={["gsap", "lottie"]}
      />
    ),
    techNarrative:
      "The app was created using React v18.3.1. To streamline the code, the components were designed to be pure, with little to no hard-coding of data. The data and styles for the flashcards are stored in separate files for each lesson.",
    diagram: require("../documents/ZionTV-application-diagram.pdf"),
    diagramImg: require("../assets/portfolio/diagrams/zionTV-diagram.png"),
    designSummary:
      "The unique theme and styles for each lesson are stored in separate files and passed to the flashcard component as props.",
    designTheme:
      "Themed as a tv screen and remote control, each channel / lesson is brought up via a different button on the remote control. Card themes: ABCs - Animals, NUMBERS - Robots and Monsters, SHAPES - Under the Sea.",
    designTypographyNarrative: (
      <>
        <p>
          <strong>Barriecito Regular</strong> was chosen as the typeface for its
          fun, warm and lively appearance as well as its rythmic contrast. It is
          a version of Barrio font that includes both uppercase and lowercase
          characters and its hand-lettering, amateur look makes it highly
          suitable for a children's application.{" "}
        </p>
        <p>
          To pair with the fun and childlike Barriecito Regular font,{" "}
          <strong>Glacial Indifference</strong> was chosen. It is a simple
          geometric typeface that is perfect for little ones to read and learn
          their letters.
        </p>
      </>
    ),
    designTypography: [
      {
        name: "Barriecito Regular",
        fontFamily: "barriecito-regular",
        use: "Logo, Headers, Emphasis",
        type: "header",
      },
      {
        name: "Glacial Indifference",
        fontFamily: "glacial-indifference",
        use: "Logo, Bodytext",
        type: "subheader",
      },
    ],
    designGraphics: "Canva and IconScout",
    designColorNarrative:
      "Meant to be fun and whimsical to be of interest to little minds, each lesson/theme has a different color palette. The ZionTV logo was created using the color palette below.  The main color palette of the application is included in the table below, however, many more colors are included for the other various themes. ",
    designColors: {
      main: ["#FF1134", "#3F76FF", "#4292FF", "#A50CFE", "#D500AC"],
      complementary: ["#0A0A0A", "#3A3D3F", "#D3D3D3", "#FAF9F6"],
    },
    technologies: "React.js | Bootstrap | GSAP | Lottie Animations",
    link: "ZionTV",
    git: (
      <a
        href="https://github.com/atozionwebdesign/flashcards"
        alt=""
        target="_blank"
        rel="noopener noreferrer"
      >
        ZionTV GIT Repo
      </a>
    ),
    carousel: [
      {
        img: require("../assets/portfolio/zionTV-home.png"),
        title: "Homepage",
        caption: "Homepage with intro message",
      },
      {
        img: require("../assets/portfolio/zionTV-number-front.png"),
        title: "Number Lesson Front View",
        caption: "Number visually shown on flashcard front view",
      },
      {
        img: require("../assets/portfolio/zionTV-number-back.png"),
        title: "Number Lesson Front Back",
        caption: "Number of items shown on flashcard back view",
      },
      {
        img: require("../assets/portfolio/zionTV-abc-front.png"),
        title: "Alphabet Lesson Front View",
        caption: "Letter w/ associated word shown on both sides ",
      },
    ],
    services: "Web Design & Development | Logo Design",
  },
  {
    project: "WhoUGot?",
    title: "WhoUGot?",
    subtitle: "A Sports Pick App",
    logo: require("../assets/portfolio/logos/WhoUGot500-logo.png"),
    about:
      "WhoUGot? is an app to make game picks for upcoming sporting events.  It uses the ESPN API to pull in the latest season's standings for popular professional sport leagues, including: NFL, NBA, MLB, NHL and more.  App visitors are able to view the most up-to-date league standings.  Account holders can make game picks and see how they stack up against others. Game pick standings are stored and winners are crowned by game/ week, and ultimately by season.",
    techTable: (
      <TechTable
        frontEnd={["react-bootstrap", "mongoose", "redux"]}
        platform={["react"]}
        backEnd={["node", "express", "bcrypt", "mongodb"]}
        api={["axios", "espn-api"]}
        graphics={["gsap", "lottie"]}
      />
    ),
    techNarrative: (
      <>
        <p>
          WhoUGot? is a full-stack web application built using the{" "}
          <strong>MERN</strong> stack:{" "}
          <strong>MongoDB, Express, React, Node.js</strong>. A NoSQL{" "}
          <strong>MongoDB database</strong> was chosen over a traditional SQL
          database to store the application data. The benefits are: the
          flexibility of the document schemas - different sports / leagues data
          is easily stored centrally, a boost in data output performance, and
          built-in scaling options - allowing the app to handle large data sets
          and high throughput operations. <strong>Express</strong> was used as
          the routing framework. It defines the routing table that the app uses
          to perform various actions based on the HTTP methods and URLs (api and
          regular routes). <strong>React</strong> is the front-end framework and
          platform. The components are built as pure as possible with data
          passed through as props. The server and back-end framework is handled
          via <strong>Node.js</strong>.
        </p>
        <p className="p-large bold" style={{ marginBottom: 0 }}>
          FOLDER STRUCTURE
        </p>
        <p>
          Due to the complexity and full-stack nature of the application, the
          files are organized in <strong>Client</strong> and{" "}
          <strong>Server</strong> folders. The <strong>Client</strong> folder
          houses files related to the front-end functionality- i.e. assets,
          pages / components, data and <strong>REDUX</strong> which is used to
          manage the global application state. REDUX is configured with a single
          store and multiple reducers (slices) for each chunk of functionality.
          The <strong>Server</strong> folder houses files related to the
          back-end functionality- i.e. routes, models and controllers.
        </p>
        <p>
          To view the folder structure and explore in detail, see the{" "}
          <a
            href="https://github.com/atozionwebdesign/sports-picks-app"
            alt=""
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--lighter-teal)",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            WhoUGot? GIT Repo
          </a>
          .
        </p>
        <p className="p-large bold" style={{ marginBottom: 0 }}>
          ROUTING via AXIOS
        </p>
        <p>
          A core functionality of the application is fetching and utilizing
          information from the external ESPN API. Another is performing CRUD
          operations - i.e user accounts and game picks within the application's
          MongoDB database instance. Axios is used to handle these requests. The
          application utilizes the Promise API to send asyncrhonous HTTP
          requests and receive the appropriate data in Return.
        </p>
      </>
    ),
    designSummary:
      "The overall design of the application is modern and simple with a feminine touch. It was developed by a sports fan, who happens to be a woman and while that is evident, the sports and data take center stage.",
    designTheme:
      "The theme of the application is sports. Muted backgrounds and colors were used to complement bright and fun sport graphics to highlight the theme.",
    designTypographyNarrative: (
      <>
        <p>
          Described as a highly condensed, tight and normalized version of
          classic grotesque display lettforms, <strong>Six Caps</strong> was the
          perfect header choice for this web application. It is a neutral font
          that does not take up much room horizontally. It works very well on
          the clean and modern landing page, as well as, table headings
          throughout the application. It legibly creates visual interest without
          distraction or taking up too much space.
        </p>
        <p>
          <strong>Inter Tight</strong> was selected as the main application font
          to pair with Six Caps. It is a slightly condensed variation of the
          Inter font-family that was designed specifically for computer screens.
          It is a simple font that is easy to read, particularly on the
          data-heavy tables throughout the application.
        </p>
      </>
    ),
    designTypography: [
      {
        name: "Six Caps",
        fontFamily: "six-caps",
        use: "Logo, Headers, Emphasis",
        type: "header",
      },
      {
        name: "Inter Tight",
        fontFamily: "inter-tight",
        use: "Logo, Bodytext",
        type: "subheader",
      },
    ],
    designGraphics: "Canva and IconScout",
    designColorNarrative:
      "The color palette was inspired by the official colors of the developer, Ashley Stith's, favorite sports team - The Philadelphia Eagles: mindight green, black, white and silver.  The accent colors were chosen to pop and add visual interest without being distracting.",
    designColors: {
      main: ["#0F29292F", "#14A098", "#501F3A"],
      complementary: ["#CB2D6F", "#D3AD29", "#141414", "#A9B2AD", "#CCCCCC"],
    },
    technologies: "React.js | Node.js | REDUX | MongoDB | bcrypt | ESPN API",
    link: "WhoUGot?",
    git: (
      <a
        href="https://github.com/atozionwebdesign/sports-picks-app"
        alt=""
        target="_blank"
        rel="noopener noreferrer"
      >
        WhoUGot? GIT Repo
      </a>
    ),
    carousel: [
      {
        img: require("../assets/portfolio/whougot-home.png"),
        title: "Home Page",
        caption: "Home page with intro animations",
      },
      {
        img: require("../assets/portfolio/whougot-signup.png"),
        title: "Signup Form",
        caption: "Signup form",
      },
      {
        img: require("../assets/portfolio/whougot-standings-football-collapsed.png"),
        title: "Standings Landing Page",
        caption: "View standings by sport/league and make NFL game picks",
      },
      {
        img: require("../assets/portfolio/whougot-standings-football-expanded.png"),
        title: "NFL Standings Expanded",
        caption: "View most recent NFL Standings",
      },
      {
        img: require("../assets/portfolio/whougot-picks.png"),
        title: "Make Game Picks",
        caption: "Make game picks modal",
      },
      {
        img: require("../assets/portfolio/whougot-winners-collapsed.png"),
        title: "Winners Modal",
        caption: "View winners by week",
      },
      {
        img: require("../assets/portfolio/whougot-winners-expanded.png"),
        title: "Winners Modal Week Expanded",
        caption: "Expand weeks to see winners for each game",
      },
    ],
    services: "Web Design & Development | Logo Design",
  },
  {
    project: "Rainbow Forecast",
    title: "Rainbow Forecast",
    subtitle: "A Weather App",
    logo: require("../assets/portfolio/logos/rainbow-forecast500-logo.png"),
    about: (
      <p>
        An app to pull up current and 14-day weather for a given address or zip
        code. The app also includes inspirational weather themed quotes to
        remind us that we need both <strong>sun</strong> and{" "}
        <strong>rain</strong> to have a rainbow.
      </p>
    ),
    techTable: (
      <TechTable
        frontEnd={["react-bootstrap", "redux", "typescript"]}
        platform={["react"]}
        backEnd={[]}
        api={["geocode", "weather-gov"]}
        graphics={["font-awesome", "lottie"]}
      />
    ),
    techNarrative: (
      <>
        <p>
          Rainbow Forecast is a single page web application that fetches data
          from third party <strong>Weather.gov API</strong> and returns the
          weather based on user input. The Weather.gov API takes in latitude and
          longitude as query parameters. Because most people track locations via zip code or city and state, the <strong>Geocoding API</strong> is first used to format the user input
          to latitude and longitude. The response is then passed to the Weather.gov API as query parameters in order to get the appropriate
          weather response.
        </p>
        <p className="p-large bold" style={{ marginBottom: 0 }}>
          STATE MANAGEMENT
        </p>
        <p>
          REDUX is used to manage a single state variable - location. The user
          Location select updates the location state variable when a new
          location is selected and the Weather Content component monitors the
          state variable and re-renders everytime it changes. This allows the
          application to seamlessly update for each location the user selects.
        </p>
        <p className="p-large bold" style={{ marginBottom: 0 }}>
          TYPESCRIPT
        </p>
        <p>
          All of the data displayed in the application is pulled from an
          external source. To ensure the data is properly formatted, the
          application uses <strong>TypeScript</strong>. Types are defined and
          each API response is checked against the type before displaying or
          manipulating the data.
        </p>
      </>
    ),
    diagram: require("../documents/Rainbow-Forecast-application-diagram.pdf"),
    diagramImg: require("../assets/portfolio/diagrams/rainbow-forecast-diagram.png"),
    designSummary: "'Color has the power to make dull things look attractive.'",
    designTheme:
      "",
    designTypographyNarrative: (
      <>
        <p>
          The application utilizes a single typeface - <strong>Montserrat</strong>. It reads well large and small, bold and normal. It is modernly aesthetic and has a geometric design with clean lines that pair very well with the bright and cheerful application color palette.
        </p>
      </>
    ),
    designTypography: [
      {
        name: "Montserrat",
        fontFamily: "montserrat",
        use: "Logo, Headers, Emphasis, Body",
        type: "header",
      },
      {
        name: "Montserrat",
        fontFamily: "montserrat",
        use: "Logo, Bodytext",
        type: "subheader",
      },
    ],
    designGraphics: "Canva and IconScout",
    designColorNarrative:
      " A rainbow, with its beautiful colors and underlying meaning are the inspiration and theme for this web application. Although not literally ROYGBIV, the color scheme is a modern, loose take on the rainbow.",
    designColors: {
      main: ["#26547C", "#EF476F", "#FFD166", "#06D6A0"],
      complementary: ["#FFFCF9", "#080809"],
    },
    link: "Weather",
    technologies: "React.js | Bootstrap | 3rd-party APIs | REDUX | TypeScript",
    carousel: [
      {
        img: require("../assets/portfolio/weather-home.png"),
        title: "Homepage",
        caption: "Includes search select, current weather and 2-wk forecast",
      },
      {
        img: require("../assets/portfolio/weather-home-2.png"),
        title: "Homepage",
        caption: "Includes search select, current weather and 2-wk forecast",
      }
    ],
    services: "Web Design & Development | Logo Design",
    git: (
      <a
        href="https://github.com/atozionwebdesign/weather-typescript"
        alt=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Rainbow Forecast GIT Repo
      </a>
    ),
  },
  // {
  //   project: "Petocracy",
  //   about: "A pet adoption app.",
  //   link: "Weather",
  //   technologies: "",
  //   carousel: [],
  //   git: "Git",
  // },
  // {
  //   project: "Spice-A-Holic",
  //   about: "An E-Commerce MERN Application.",
  //   link: "Spice-A-Holic",
  //   technologies: "MongoDB | Express | React.js | Node.js",
  //   carousel: [],
  //   git: "Git",
  // },
];
