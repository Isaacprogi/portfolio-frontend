//  icons
import {
  // FiYoutube,
  // FiInstagram,
  FiGithub,
  FiLinkedin,
  FiLayout,
  FiSettings,
  // FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/mongo.png';
import SkillImg9 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/frank.jpg';
import TestiImage2 from './assets/img/testimonials/chimezie.jpg';
import TestiImage3 from './assets/img/testimonials/okan.png';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://linkedin.com/in/isaacanasonye',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/isaacprogi',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project6,
    name: 'NotJustEvent',
    stack: 'React . node . tailwindcss . mongodb . redux ...',
    category: 'Fullstack',
    href: 'https://notjustevent.com/'
  },
  {
    id: '2',
    image: Project4,
    name: 'Substrately',
    stack: 'Mern stack',
    category: 'Fullstack',
    href: 'https://substrately.com'


  },
  {
    id: '3',
    image: Project5,
    name: 'Toedur',
    stack: 'React . Nextjs . tailwindcss',
    category: 'Fullstack',
    href: 'https://toedur.com'
  },
  {
    id: '4',
    image: Project1,
    name: 'Buy true',
    stack: 'React . typscript . tailwindcss',
    category: 'Frontend',
    href: 'https://buy-true.vercel.app/'

  },
  {
    id: '5',
    image: Project2,
    name: 'Zwilt',
    stack: 'React . typscripyt . tailwindcss ',
    category: 'Frontend',
    href: 'https://zwilt-theta.vercel.app/'

  },
  {
    id: '6',
    image: Project3,
    name: 'Clarifon Product Frontend Design',
    stack: 'React . tailwindcss',
    category: 'Frontend',
    href: 'https://clarifon.onrender.com'

  },
  {
    id: '7',
    image: Project4,
    name: 'Linkedin Clone Api',
    stack: 'Node . mongodb . socket.io . jwt',
    category: 'Backend',
    href: 'https://github.com/Isaacprogi/linkedin-clone-api'
  },
  {
    id: '8',
    image: Project6,
    name: 'Flight Search Api',
    stack: 'Node',
    category: 'Backend',
    href: 'https://github.com/Isaacprogi/flight-search-backend'
  },

];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Frontend',
  },
  {
    name: 'Fullstack',
  },
  {
    name: 'Backend',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
    name:'HTML',
    href:'https://html.com/',
  },
  {
    image: SkillImg2,
    name:'CSS',
    href:'https://css3.com/',

  },
  {
    image: SkillImg3,
    name:'JAVASCRIPT',
    href:'https://www.javascript.com/'
  },
  {
    image: SkillImg4,
    name:'REACT',
    href:'https://react.dev/',
  },
  {
    image: SkillImg5,
    name:'NEXT JS',
    href:'https://nextjs.org/',
  },
  {
    image: SkillImg6,
    name:'NODE JS',
    href:'https://nodejs.org/en/',
  },
  {
    image: SkillImg7,
    name:'GIT',
    href:'https://github.com/',
  },
  {
    image: SkillImg8,
    name:'MO-DB',
    href:'https://www.mongodb.com/',
  
  },
  {
    image: SkillImg9,
    name:'FIGMA',
    href:'https://www.figma.com/',
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Crafting digital experiences that captivate and inspire. Elevate your brand with visually stunning and user-friendly designs.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Transforming ideas into powerful, functional websites. From concept to code, we build custom solutions tailored to your unique needs.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Boosting your online visibility and driving organic growth. Maximize your digital presence with strategic SEO to reach the right audience.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage3,
    authorText:
      'Isaac is trustworthy',
    authorName: 'Oan Kan Meral',
    authorPosition: 'CEO, Toedur',
  },
  {
    authorImg: TestiImage1,
    authorText:
      'Isaac adapts quickly and improves rapidly',
    authorName: 'Frank Ugwu',
    authorPosition: 'Team head, NotJustEvent Inc',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt response. We can’t imagine working without it.',
    authorName: 'Chimezie',
    authorPosition: 'Frontend Team lead, NotJustEvent Inc',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: "I'm available😊",
    description: 'Email at isaaconyes80@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Nigeria, Enugu',
    description: 'Serving clients worldwide',
  },
];
