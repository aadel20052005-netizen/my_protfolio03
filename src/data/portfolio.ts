export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  subtext: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  github: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const stats: Stat[] = [
  {
    value: 3,
    suffix: '+',
    label: 'Completed Projects',
    subtext: 'Real-world ML & data solutions',
    icon: 'FolderGit2',
  },
  {
    value: 2,
    suffix: '+',
    label: 'Professional Certifications',
    subtext: 'Oracle AI Certified Foundations Associate, DEPI Soft Skills',
    icon: 'Award',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Passion & Continuous Learning',
    subtext: 'Always growing, always building',
    icon: 'Heart',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Employee Management System',
    description:
      'A robust Python Object-Oriented Programming (OOP) & File Handling system built to manage company employees, calculate dynamic payrolls, track attendance, and persist data using local file handling.',
    techStack: ['Python', 'OOP', 'Inheritance', 'Polymorphism', 'File I/O'],
    image: '/project1.jpg',
    github: 'https://github.com/aadel20052005-netizen/Employee-Management-System-Python',
  },
  {
    id: 2,
    title: 'DVD Rental Data Analysis',
    description:
      'Comprehensive relational database analytics using PostgreSQL on the DVD rental dataset. Demonstrates complex SQL joins, aggregation, subqueries, and window functions to uncover customer rental trends.',
    techStack: ['SQL', 'PostgreSQL', 'Data Analysis'],
    image: '/project2.jpg',
    github: 'https://github.com/aadel20052005-netizen/DVD-Rental-Data-Analysis-SQL',
  },
  {
    id: 3,
    title: 'Company Database Schema Analysis',
    description:
      'Advanced SQL relational database modeling and schema querying. Analyzes organizational hierarchy, employee-department assignments, and project budget distributions.',
    techStack: ['SQL', 'Schema Design', 'Data Modeling'],
    image: '/project3.jpg',
    github: 'https://github.com/aadel20052005-netizen/Company-Database-Schema-Analysis-SQL',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: ['Python (OOP)', 'C/C++'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: ['SQL', 'PostgreSQL', 'SQL Server'],
  },
  {
    title: 'Machine Learning',
    icon: 'BrainCircuit',
    skills: ['Machine Learning', 'Scikit-learn'],
  },
  {
    title: 'Data Science & Math',
    icon: 'Sigma',
    skills: ['Pandas', 'NumPy', 'Linear Algebra'],
  },
  {
    title: 'Data Engineering',
    icon: 'Workflow',
    skills: ['Data Modeling', 'Schema Design', 'Data Analysis'],
  },
];

export const certifications: Certification[] = [
  {
    title: 'Oracle AI Certified Foundations Associate',
    issuer: 'Oracle',
  },
  {
    title: 'DEPI Soft Skills',
    issuer: 'DEPI',
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ahmed-adel-ml',
    icon: 'Linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/aadel20052005-netizen',
    icon: 'Github',
  },
  {
    label: 'Email',
    href: 'mailto:A.adel20052005@gmail.com',
    icon: 'Mail',
  },
];

export const profile = {
  name: 'Ahmed Adel',
  nameArabic: 'أحمد عادل عبد النبي عويس متولي',
  title: 'Machine Learning Engineer & Data Scientist',
  location: 'Egypt',
  email: 'A.adel20052005@gmail.com',
  github: 'https://github.com/aadel20052005-netizen',
  linkedin: 'https://www.linkedin.com/in/ahmed-adel-ml',
  cv: '/Ahmed_Adel_CV.pdf',
  photo: '/profile.jpg',
  bio: "I turn raw data into intelligent systems, combining solid software engineering foundations with machine learning to build reliable, data-driven solutions. With expertise spanning Python OOP, relational databases, and data engineering, I'm passionate about crafting models and pipelines that solve real problems.",
  roles: [
    'Machine Learning Engineer',
    'Data Scientist',
    'Python Developer',
    'Data Engineer',
  ],
  quote: 'In my mind, I am always the best.',
};
