import { type Project } from "./types";
import Toedur from '../assets/toedur.png'
import NotjustEvent from '../assets/notjustevent.png'
import Staicy from '../assets/uat.png'
import Sketchy from '../assets/sketchy.png'
import Rvin from '../assets/rvin.png'
import Solomate from '../assets/solemate.png'
import BleemHire from '../assets/bleem.png'
import P2p from '../assets/p2p.png'

  export const projects: Project[] = [
    // Company Projects
    {
      id: 1,
      title: 'Education Platform',
      description: 'A scalable e-commerce solution handling 10M+ transactions monthly, built for a Fortune 500 client.',
      techStack: ['Next js', 'Typescript', 'Stripe'],
      image: Toedur,
      liveUrl: 'https://toedur.com',
      githubUrl: '#',
      category: 'Full Stack',
      type: 'company',
      company: 'Toedur'
    },
    {
      id: 2,
      title: 'Event Management Platform',
      description: 'HIPAA-compliant patient management platform for a network of medical clinics.',
      techStack: ['React', 'Typescript', 'Azure'],
      image: NotjustEvent,
      liveUrl: 'https://notjustevent.com',
      category: 'Full Stack',
      type: 'company',
      company: 'notjustevent'
    },
    {
      id: 3,
      title: 'MBL Sport Platform',
      description: 'Real-time financial analytics dashboard for investment firms with advanced charting.',
      techStack: ['Vue3.js', 'Canva'],
      image: Staicy,
      liveUrl: 'https://uat-app.staicy.ai',
      category: 'Frontend',
      type: 'company',
      company: 'eagleai'
    },
    // Personal Projects
    {
      id: 4,
      title: 'Sketchy',
      description: 'A beautiful weather app with location-based forecasts and interactive maps.',
      techStack: ['React', 'TypeScript', 'Tailwind css', 'canva'],
      image: Sketchy,
      liveUrl: 'https://sketchy-sable.vercel.app/',
      githubUrl: 'https://github.com/Isaacprogi/sketchy',
      category: 'Mobile',
      type: 'personal'
    },
    {
      id: 5,
      title: 'Solemate',
      description: 'A social platform for food enthusiasts to share and discover new recipes.',
      techStack: ['React', 'Tailwind CSS', 'Typescript'],
      image:Solomate,
      liveUrl: 'https://solemate-sable.vercel.app/',
      githubUrl: 'https://github.com/Isaacprogi/Solemate',
      category: 'Full Stack',
      type: 'personal'
    },
    {
      id: 6,
      title: 'Rvin',
      description: 'A minimalist habit tracking app with streak counters and progress visualization.',
      techStack: ['React', 'TypeScript', 'i8nn'],
      image: Rvin,
      liveUrl: 'https://rvin-six.vercel.app/',
      githubUrl: '#',
      category: 'Web App',
      type: 'personal'
    },
    {
      id: 7,
      title: 'Bleemhire',
      description: 'A modern job platform designed to connect professionals with verified visa sponsorship and remote work opportunities worldwide.',
      techStack: ['React', 'TypeScript', 'supabase','lovable ai',"tailwindcss"
      ],
      image: BleemHire,
      liveUrl: 'https://www.bleemhire.com',
      githubUrl: '#',
      category: 'Web App',
      type: 'company'
    },
    {
      id: 8,
      title: 'P2P Africa',
      description: 'A clean, user-friendly peer-to-peer (P2P) event platform design that simplifies event creation, discovery, and participation.',
      techStack: ['React', 'TypeScript',"tailwindcss"],
      image: P2p,
      liveUrl: 'https://p2-p-africa.vercel.app/',
      githubUrl: 'https://github.com/Isaacprogi/P2P-Africa',
      category: 'Web App',
      type: 'personal'
    },
  ];