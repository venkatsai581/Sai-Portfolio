import { Github, Linkedin, Mail, Code2, Layout, Server, Database, Wrench, Bike, Plane, BookOpen, LayoutDashboard, BarChart3, Users, ShieldCheck, LifeBuoy } from 'lucide-react'

export const me = {
  name: 'Ketha Venkata Sai Krishna',
  role: 'Full Stack Developer',
  email: 'kethavenkat04@gmail.com',
  location: 'Hyderabad, Telangana',
  summary:
    'I build web applications with ReactJS, Python and MySQL. I enjoy turning an idea into a responsive interface backed by clean APIs and solid database work.',
  about:
    'I am a Computer Science and Engineering graduate and a full stack developer at Stackly, with six months of professional experience. My work covers frontend and backend development, API integration, database operations and debugging. I like shipping small, well-tested features and learning from every code review.',
}

export const socials = [
  { name: 'GitHub', href: 'https://github.com/venkatsai581', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ketha-venkata-sai-krishna', icon: Linkedin },
  { name: 'Email', href: `mailto:${me.email}`, icon: Mail },
]

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export const skills = [
  { title: 'Languages', icon: Code2, items: ['Java', 'Python', 'JavaScript'] },
  { title: 'Frontend', icon: Layout, items: ['ReactJS', 'HTML', 'CSS', 'Bootstrap'] },
  { title: 'Backend', icon: Server, items: ['Java Servlets', 'JDBC', 'REST APIs'] },
  { title: 'Databases', icon: Database, items: ['MySQL', 'Oracle 10g XE'] },
  { title: 'Tools', icon: Wrench, items: ['Git', 'GitHub', 'Vercel', 'VS Code', 'MySQL Workbench', 'Eclipse', 'Apache Tomcat', 'JSON Server', 'Postman'] },
]

export const projects = [
  {
    title: 'CommerceDesk Admin Dashboard',
    image: '/projects/commercedesk.webp',
    icon: LayoutDashboard,
    text: 'An e-commerce admin dashboard to manage products, orders, customers and inventory, with analytics charts, search, filtering, sorting, pagination and form validation.',
    tech: ['React', 'Vite', 'Charts', 'localStorage'],
    href: 'https://vsk-ecom-shop.netlify.app',
    github: 'https://github.com/venkatsai581/Vsk_shop',
  },
  {
    title: 'SaaS Management Dashboard',
    image: '/projects/saas.webp',
    icon: BarChart3,
    text: 'A dashboard for managing SaaS users, customers, subscriptions and pricing plans, with revenue and usage analytics, date range filters, modals and toast notifications.',
    tech: ['React', 'Vite', 'Charts', 'localStorage'],
    href: 'https://vsk-saa-s-app.netlify.app',
    github: 'https://github.com/venkatsai581/SaaS_App',
  },
  {
    title: 'Travel & Booking Dashboard',
    image: '/projects/travel.webp',
    icon: Plane,
    text: 'A dashboard to manage destinations, trips, customers, bookings and payments, with search, filtering, sorting, pagination and analytics charts.',
    tech: ['ReactJS', 'CRUD', 'Charts'],
    href: 'https://travel-app-vsk.vercel.app',
    github: 'https://github.com/venkatsai581/Travel_app',
  },
  {
    title: 'HR Management Dashboard',
    image: '/projects/hr.webp',
    icon: Users,
    text: 'A responsive HR dashboard built with React and deployed on Vercel.',
    tech: ['React', 'Vite'],
    href: 'https://hr-manage-app.vercel.app',
    github: 'https://github.com/venkatsai581/HR-Manage-App',
  },
  {
    title: 'Auth and User Access Portal',
    image: '/projects/auth.webp',
    icon: ShieldCheck,
    text: 'An authentication and user access management dashboard built with React.',
    tech: ['React', 'Vite'],
    href: 'https://auth-user-acess-vsk.netlify.app',
    github: 'https://github.com/venkatsai581/Auth_Access_App',
  },
  {
    title: 'Help Desk Support App',
    image: '/projects/helpdesk.webp',
    icon: LifeBuoy,
    text: 'A help desk support application built with React and deployed on Netlify.',
    tech: ['React', 'Vite'],
    href: 'https://help-desksupport.netlify.app',
    github: 'https://github.com/venkatsai581/help-desk',
  },
  {
    title: 'BikeHub Application',
    image: '/projects/bikehub.webp',
    icon: Bike,
    text: 'A responsive bike showroom app with nested routing, URL parameters, mock API CRUD, custom hooks and form validation.',
    tech: ['React', 'Context', 'useReducer', 'React Router'],
    href: 'https://vskvenkatbike-hub.netlify.app/',
  },
  {
    title: 'Online Book Store',
    image: '/projects/bookstore.webp',
    icon: BookOpen,
    text: 'An online bookstore with authentication, search, filtering, cart management and order functionality.',
    tech: ['JavaScript', 'Axios', 'JSON Server'],
    href: 'https://bookstore-frontend-plyg.onrender.com',
  },
]

export const timeline = [
  { when: 'Apr 2026 to now', title: 'Full Stack Developer, Stackly', text: 'Building full-stack features with ReactJS, REST APIs and MySQL, plus debugging and API testing.' },
  { when: '2021 to 2025', title: 'B.Tech in Computer Science and Engineering', text: 'Institute of Aeronautical Engineering. CGPA 7.81.' },
  { when: '2019 to 2021', title: 'MPC, Narayana Jr College', text: 'Percentage 89.4%.' },
]

export const certs = [
  'Python & Django, Udemy (Jan 2026)',
  'Java Full Stack Course, Codegnan (Feb 2025)',
  'Zscaler Cybersecurity Fundamentals Associate (Apr 2024)',
  'Python, GUVI and HackerRank (Jun 2023)',
]

export const faqs = [
  {
    q: 'Who are you?',
    a: 'I’m Ketha Venkata Sai Krishna, a Full Stack Developer at Stackly in Hyderabad. I have six months of professional experience building web applications with ReactJS, Python and MySQL, and I hold a B.Tech in Computer Science and Engineering.',
  },
  {
    q: 'What technologies are you proficient in?',
    a: 'I work with JavaScript, Python and Java. On the frontend I use ReactJS, HTML, CSS and Bootstrap. On the backend I use Java Servlets, JDBC and REST APIs, with MySQL and Oracle for databases. My everyday tools are Git, GitHub, Vercel and Postman.',
  },
  {
    q: 'What is your experience with front-end and back-end development?',
    a: 'I specialize in building full-stack applications that deliver seamless user experiences.\n\nOn the front-end, I create responsive, interactive, and user-friendly interfaces using React and Material-UI, ensuring that the UI adapts smoothly across devices. With a keen eye for design, I leverage CSS frameworks like Bootstrap to craft clean, visually appealing layouts that enhance user engagement.\n\nFor the back-end, I design and develop RESTful APIs using Node.js and Express, ensuring efficient communication between the client and server. I use MongoDB to manage data, focusing on performance, scalability, and security. My back-end code is modular, well-documented, and built to accommodate growth, making it easy to maintain and expand as projects evolve.',
  },
  {
    q: 'Do you have experience working in teams?',
    a: 'Yes,\nI have experience leading and working with developers in collaborative environments. I value clear communication, regular coordination, and enjoy being part of a team where everyone contributes to achieving project goals together.',
  },
  {
    q: 'How can I contact you for a project?',
    a: 'Use the contact form on this page, or email me at kethavenkat04@gmail.com. You can also reach me on LinkedIn or GitHub, and I’ll reply as soon as I can.',
  },
  {
    q: 'Are you available for hire, and what kind of roles are you interested in?',
    a: 'Yes,\nI am available for hire and open to full-time, part-time, or contract-based roles. I’m particularly interested in roles where I can work on innovative projects, collaborate with diverse teams, and make meaningful contributions to the success of the company.',
  },
  {
    q: 'My question isn’t listed here!',
    a: 'If your question wasn’t covered, I’d love to hear from you! Click the button below, and you’ll be redirected to a form where you can fill in your details and ask your specific question. I’ll get back to you as soon as possible!',
    cta: true,
  },
]
