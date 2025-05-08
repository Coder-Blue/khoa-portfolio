import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  XTwitterIcon,
} from "~/components/icons";

import Project1 from "/assets/projects/1.png";
import Project2 from "/assets/projects/2.png";
import Project3 from "/assets/projects/3.png";
import Project4 from "/assets/projects/4.png";

export const links: { name: string; href: string }[] = [
  { name: "Trang chủ", href: "/" },
  { name: "Về tôi", href: "/about" },
  { name: "Dự án", href: "/projects" },
  { name: "Liên hệ", href: "/contact" },
];

export const socialLinks: {
  name: string;
  href: string;
  icon: any;
}[] = [
  { name: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { name: "Pinterest", href: "https://pinterest.com", icon: PinterestIcon },
  { name: "X", href: "https://x.com", icon: XTwitterIcon },
  { name: "Discord", href: "https://discord.com", icon: DiscordIcon },
];

export const homeContent: { jobName: string; jobLocation: string } = {
  jobName: "photographer <br /> &amp; film maker",
  jobLocation: "Los Angeles, USA",
};

export const aboutContent: {
  jobDescription1: string;
  jobDescription2: string;
} = {
  jobDescription1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Integer dignissim in mauris in facilisis</b>. Donec turpis turpis, gravida a nibh sit amet, porta dignissim elit,",
  jobDescription2:
    "Donec ornare, velit at tincidunt viverra, sapien diam scelerisque nisl, placerat lobortis sem sapien in dui. Vestibulum in fermentum ligula. Curabitur ut mi mollis, lacinia arcu eu, placerat libero. Nulla mollis fermentum venenatis.",
};

export const projectsContent: {
  projectDescription1: string;
  projectDescription2: string;
  projectsDisplay: { name: string; src: string | any; href: string }[];
} = {
  projectDescription1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Integer dignissim in mauris in facilisis</b>. Donec turpis turpis, gravida a nibh sit amet, porta dignissim elit,",
  projectDescription2:
    "Donec ornare, velit at tincidunt viverra, sapien diam scelerisque nisl, placerat lobortis sem sapien in dui. Vestibulum in fermentum ligula.",
  projectsDisplay: [
    { name: "Project 1", src: Project1, href: "https://facebook.com/" },
    { name: "Project 2", src: Project2, href: "https://facebook.com/" },
    { name: "Project 3", src: Project3, href: "https://facebook.com/" },
    { name: "Project 4", src: Project4, href: "https://facebook.com/" },
  ],
};
