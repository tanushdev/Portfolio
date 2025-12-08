import React from 'react';
import { Github, Linkedin, Twitter, Mail, FileText, ExternalLink, Code2, Server, Database, Globe, Cpu, Layout } from 'lucide-react';
import { Project, Skill, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Tanush Shyam",
  title: "Full-Stack Developer | AI/ML",
  shortBio: "Building Apps That INSPIRE.",
  about: `I'm Tanush Shyam. I am a passionate developer with a strong foundation in building scalable web applications. 
  With expertise in the MERN stack and a keen eye for design, I bridge the gap between backend functionality and frontend aesthetics.
  I enjoy solving complex problems and learning new technologies to stay ahead in the fast-paced tech world.`,
  email: "tanushshyam42@gmail.com",
  location: "India",
};

export const SKILLS: Skill[] = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "TypeScript", icon: "📘", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Frontend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Express", icon: "🚂", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", category: "Backend" },
  { name: "Git", icon: "🐙", category: "Tools" },
  { name: "Docker", icon: "🐳", category: "Tools" },
  { name: "AWS", icon: "☁️", category: "Tools" },
  { name: "Figma", icon: "🖌️", category: "Other" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI Content Generator",
    description: "A SaaS application that uses Generative AI to create blog posts and social media captions. Built with Next.js and Gemini API.",
    technologies: ["Next.js", "TypeScript", "Gemini API", "Stripe"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    githubUrl: "https://github.com/tanush/ai-generator",
    liveUrl: "https://tanushdev.me/project1",
  },
  {
    id: "2",
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing products, orders, and analytics. Features real-time data visualization.",
    technologies: ["React", "Redux", "Node.js", "Chart.js"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    githubUrl: "https://github.com/tanush/dashboard",
    liveUrl: "https://tanushdev.me/project2",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "A collaborative task manager with drag-and-drop functionality and team workspaces.",
    technologies: ["Vue.js", "Firebase", "Tailwind"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    githubUrl: "https://github.com/tanush/task-app",
    liveUrl: "https://tanushdev.me/project3",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    platform: "LinkedIn", 
    url: "https://www.linkedin.com/in/tanushshyam/", 
    icon: <Linkedin size={24} /> 
  },
  { 
    platform: "GitHub", 
    url: "https://github.com/tanushdev", 
    icon: <Github size={24} /> 
  },
  { 
    platform: "Email", 
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=tanushshyam42@gmail.com&su=Hello&body=I%20want%20to%20connect!", 
    icon: <Mail size={24} /> 
  },
  { 
    platform: "Resume", 
    url: "https://docs.google.com/document/d/1tmoKqs30eMcrD3-ZDRzPmX80vjI4at6u8eHzcGbk8tQ/edit?usp=sharing", 
    icon: <FileText size={24} /> 
  },
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];