module.exports = {
  siteMetadata: {
    portfolioItems: [
      {
        image: "/img/climatecheck/climateCheck.png",
        image2: "",
        title: "ClimateCheck - Climate Reports",
        description:
          "ClimateCheck brings the realities of climate change to your doorstep with a proprietary rating️ and report for any US property. The report details areas such as flood risk, fire risk, and storm risk.",
        dateComplete: "",
        badges: ["React", "TypeScript", "Next.js"]
      },
      {
        image: "/img/reeviewr/beta.jpg",
        image2: "",
        title: "Reeviewr - Free Music Feedback",
        description:
          "Reeviewr is for people to get feedback. Share reviews on content and upload posts. Everybody gets the feedback and attention they deserve, and it's completely free.",
        dateComplete: "",
        badges: ["React", "TypeScript", "GraphQL", "Prisma"]
      },
      {
        image: "/img/homscout/iphonePreview.png",
        image2: "",
        title: "LeadScout - Mobile Lead Generation",
        description:
          "LeadScout was a React Native mobile app designed for canvassers to identify, pin, and market to a chosen address when scouting potential homes for roof repairs.",
        dateComplete: "",
        badges: ["React Native", "JavaScript", "Node"]
      },
      {
        image: "/img/assets/group.png",
        image2: "",
        title: "Assets - Proofing and Collaboration",
        description:
          "For iOS, Apple TV, and Web, all apps built with React and React Native. Assets was intended for designers and photographers to upload their work and get feedback from clients.",
        dateComplete: "",
        badges: ["React", "React Native", "JavaScript", "Node"]
      }
    ],
    qualificationItems: [
      {
        title: "Technology",
        items: [
          {
            keyword: "Semantic Markup",
            copy: "HTML, JSX, SEO, Accessibility"
          },
          {
            keyword: "Scalable Styling",
            copy: "SASS architecture, UI kits, helpers, functions, and variables"
          },
          {
            keyword: "Client-Side Development",
            copy:
              "React, React Native, Next.js, Apollo, Webpack, Storybook, TypeScript"
          },
          {
            keyword: "Server-Side Development",
            copy: "Node, Express, GraphQL, Prisma, Loopback, ORM, Migrations, TypeScript"
          },
          {
            keyword: "Other",
            copy: "Variable Fonts, CSS Grid, Animations, Web VR, SVGs, SSR, Yarn, etc"
          }
        ]
      },
      {
        title: "Process",
        items: [
          {
            keyword: "Developer Experience",
            copy:
              "Guidelines, Specs, Checklists, Gitflow, CI / CD, Automated Testing"
          },
          {
            keyword: "Optimization Areas",
            copy:
              "Security controls, Performance diagnostics, Scalable architectures"
          },
          {
            keyword: "Development Tools",
            copy: "VS Code, WebStorm, Terminal, Sequel Pro, Homebrew, XCode"
          },
          {
            keyword: "Collaboration Tools",
            copy: "Atlassian, Github, Asana, Trello, InVision, Slack, etc"
          },
          {
            keyword: "Design Tools",
            copy: "Figma, Framer, Sketch, Photoshop, Illustrator"
          }
        ]
      }
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`
  ]
};
