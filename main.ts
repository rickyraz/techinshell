/** @jsx h */
import blog, { ga, redirects } from "https://deno.land/x/blog@0.4.2/blog.tsx";

blog({
  title: "Ricky Azhari",
  description: `self-taught software engineer & rustaceans`,
  avatar: "./rick.jpg",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:rickyrazhari83@gmail.com" },
    { title: "GitHub", url: "https://github.com/rickyraz" },
    { title: "Twitter", url: "https://twitter.com/rickyrazhari8" },
    { title: "Project", url: "https://rick-realestate.vercel.app/", target:"_blank" },
  ],
  author: "Ricky Azhari",
  theme: "light",
  favicon : "./rick.jpg",
  lang: "en",
  middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    ga("G-39L44RHQ2Y"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    redirects({
     "/hello_world.html": "/hello_world",
    }),

  ]
});
