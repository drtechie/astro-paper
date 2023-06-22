import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://drtechie.dev/",
  author: "Mithun James",
  desc: "I am Dr Mithun James - a medical doctor turned engineering leader. I am interested in applying my interdisciplinary skill set in medicine and information technology to improve patient outcomes. I find tremendous joy in architecting scalable technical solutions for real-world healthcare challenges.",
  title: "${musings}",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/drtechie",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/iamdrtechie",
    linkTitle: `${SITE.author} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_drtechie",
    linkTitle: `${SITE.author} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dr-mithun-james/",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:drmithunjames@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/iamdrtechie",
    linkTitle: `${SITE.author} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Mastodon`,
    active: false,
  },
];
