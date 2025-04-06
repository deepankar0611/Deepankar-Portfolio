import { FaGithub, FaLinkedin, FaGraduationCap, FaBriefcase, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import {
  SiDart,
  SiKotlin,
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiSwift,
  SiSass,
  SiFlutter,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiSupabase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiPostman,
  SiFigma,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

// Education data
const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Chandigarh University',
    location: 'Mohali, Punjab',
    period: '2023–present',
  },
  {
    degree: 'BSc in Chemistry',
    institution: 'Anjabit Singh College',
    location: 'Bikramganj, Bihar',
    period: '2018–2022',
  },
];

// Skills data
const categories = ['Programming Languages', 'Frameworks & Libraries', 'Databases', 'Tools & Others'];
const skills = [
  { name: 'Dart', icon: SiDart, category: 'Programming Languages' },
  { name: 'Kotlin', icon: SiKotlin, category: 'Programming Languages' },
  { name: 'Java', icon: DiJava, category: 'Programming Languages' },
  { name: 'Python', icon: SiPython, category: 'Programming Languages' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Programming Languages' },
  { name: 'C++', icon: SiCplusplus, category: 'Programming Languages' },
  { name: 'Swift', icon: SiSwift, category: 'Programming Languages' },
  { name: 'Flutter', icon: SiFlutter, category: 'Frameworks & Libraries' },
  { name: 'React', icon: SiReact, category: 'Frameworks & Libraries' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'Frameworks & Libraries' },
  { name: 'Express', icon: SiExpress, category: 'Frameworks & Libraries' },
  { name: 'Sass', icon: SiSass, category: 'Frameworks & Libraries' },
  { name: 'Firebase', icon: SiFirebase, category: 'Databases' },
  { name: 'Supabase', icon: SiSupabase, category: 'Databases' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Databases' },
  { name: 'MySQL', icon: SiMysql, category: 'Databases' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Databases' },
  { name: 'Git', icon: SiGit, category: 'Tools & Others' },
  { name: 'Postman', icon: SiPostman, category: 'Tools & Others' },
  { name: 'Figma', icon: SiFigma, category: 'Tools & Others' },
];

// Projects data
const projects = [
  {
    title: 'GlobeGaze',
    description: 'A Flutter app connecting travelers with locals, featuring Firebase authentication, real-time chat, location services, and AI-powered recommendations.',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=GlobeGaze',
    technologies: ['Flutter', 'Firebase', 'AI/ML', 'Google Maps API'],
    github: 'https://github.com/kamalnyan/GlobeGaze2',
    features: [
      'User authentication and profiles',
      'Real-time messaging system',
      'Location-based matching',
      'AI-powered travel recommendations',
      'Interactive maps and navigation',
    ],
  },
  {
    title: 'Settle Up',
    description: 'Smart expense sharing app built with Flutter, featuring a clean neumorphic UI and powerful backend integration.',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Settle+Up',
    technologies: ['Flutter', 'Firebase', 'Supabase', 'PDF'],
    github: 'https://github.com/deepankar0611/split_wise',
    features: [
      'Group expense tracking',
      'Automated bill splitting',
      'PDF report generation',
      'Real-time balance updates',
      'Transaction history',
    ],
  },
  {
    title: 'Smart Attendance',
    description: 'Flutter-based attendance management system with biometric authentication and geofencing capabilities.',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Smart+Attendance',
    technologies: ['Flutter', 'Firebase', 'Biometrics', 'Geofencing'],
    github: 'https://github.com/deepankar0611/smartt_attendance',
    features: [
      'Biometric authentication',
      'Location-based attendance',
      'Real-time analytics',
      'Attendance reports',
      'Admin dashboard',
    ],
  },
];

// Social links
const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/deepankar0611',
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/deepankar0611',
    color: 'hover:text-[#0077B5]',
  },
];

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section id="home" className="section-container min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="animate-fade-in text-center md:text-left">
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm{' '}
                <span className="modern-name relative">
                  <span className="typing-animation text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Deepankar Singh
                  </span>
                  <span className="modern-name-accent"></span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-md rounded-lg -z-10 animate-pulse" style={{ animationDuration: '3s' }}></span>
                </span>
              </h1>
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full hidden md:block"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 relative">
              A passionate developer focused on creating beautiful and functional applications
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://github.com/deepankar0611"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center space-x-2 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a
                href="https://linkedin.com/in/deepankar0611"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#0077B5] text-white hover:bg-[#0077B5]/90 flex items-center space-x-2 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <FaLinkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#0077B5] to-[#00A0DC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a
                href="/resume.pdf"
                download
                className="btn bg-gray-800 text-white hover:bg-gray-700 flex items-center space-x-2 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <FaDownload className="w-5 h-5" />
                  <span>Resume</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in mt-8 md:mt-0">
            <div className="aspect-square rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 absolute -inset-4 blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
            <div className="relative animate-float max-w-[250px] sm:max-w-[300px] md:max-w-none mx-auto">
              <div className="w-full aspect-square rounded-full bg-gradient-to-br from-primary to-secondary p-1 transition-all duration-500 hover:scale-105 hover:rotate-3 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/profile-image.jpg"
                    alt="Deepankar Singh"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              window.scrollTo({
                top: aboutSection.offsetTop - 80,
                behavior: 'smooth'
              });
            }
          }}
        >
          <span 
            className="text-sm text-gray-500 dark:text-gray-400 mb-2 hover:text-primary dark:hover:text-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                window.scrollTo({
                  top: aboutSection.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Scroll Down
          </span>
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        </div>

        <div className="animate-fade-in relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center md:text-left relative">
            <span className="relative z-10 inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform origin-left transition-transform duration-300 hover:scale-x-110"></span>
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-6">
              <div className="about-card card" style={{ '--delay': '0.2s' }}>
                <div className="shimmer"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-full opacity-50"></div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                  <span className="icon-container w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <span className="relative">
                    Bio
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                  </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 relative z-10">
                  I am a passionate developer with a strong foundation in computer science
                  and a love for creating beautiful, functional applications. Currently
                  pursuing my MCA at Chandigarh University, I specialize in mobile and
                  web development using modern technologies.
                </p>
              </div>

              <div className="about-card card" style={{ '--delay': '0.4s' }}>
                <div className="shimmer"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-full opacity-50"></div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                  <span className="icon-container w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="relative">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                  </span>
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300 relative z-10">
                  <p className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                    <span className="icon-container w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    deepankarsingh1@gmail.com
                  </p>
                  <p className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                    <span className="icon-container w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    +91 7479519946
                  </p>
                  <p className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                    <span className="icon-container w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    Patna, Bihar
                  </p>
                </div>
              </div>
            </div>

            <div className="about-card card" style={{ '--delay': '0.3s' }}>
              <div className="shimmer"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-full opacity-50"></div>
              <h3 className="text-lg sm:text-xl font-semibold mb-6 flex items-center">
                <span className="icon-container w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <FaGraduationCap className="h-5 w-5 text-primary" />
                </span>
                <span className="relative">
                  Education
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </span>
              </h3>
              <div className="space-y-6 relative z-10">
                {education.map((edu, index) => (
                  <div
                    key={edu.degree}
                    className="education-item"
                    style={{ animationDelay: `${0.5 + index * 0.2}s` }}
                  >
                    <h4>{edu.degree}</h4>
                    <p>{edu.institution}</p>
                    <div className="location-period">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{edu.location} • {edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
        </div>

        <div className="animate-fade-in relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center relative">
            <span className="relative z-10 inline-block">
              Skills & Expertise
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform origin-left transition-transform duration-300 hover:scale-x-110"></span>
            </span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            {categories.map((category, categoryIndex) => (
              <div key={category} className="skill-category group flex flex-col items-center">
                <h3 className="text-xl sm:text-2xl font-semibold relative text-center mb-6">
                  <span className="relative z-10">{category}</span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </h3>
                <div className="w-full skill-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 place-items-center">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="skill-card card flex flex-col items-center p-4 md:p-5 w-full max-w-[200px]"
                          style={{ 
                            animationDelay: `${(categoryIndex * 5 + index) * 0.1}s`,
                            '--delay': `${(categoryIndex * 5 + index) * 0.1}s`
                          }}
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-md transform scale-0 transition-transform duration-300 group-hover:scale-150"></div>
                            <Icon className="skill-icon w-8 h-8 sm:w-10 sm:h-10 mb-2 md:mb-3 text-primary relative z-10" />
                          </div>
                          <span className="skill-name text-sm sm:text-base font-medium text-center">{skill.name}</span>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        </div>

        <div className="animate-fade-in relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center relative">
            <span className="relative z-10 inline-block">
              Featured Projects
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform origin-left transition-transform duration-300 hover:scale-x-110"></span>
            </span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card card overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="View GitHub Repository"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View Live Project"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <div className="md:grid md:grid-cols-2 gap-6">
                  <div className="project-image-container aspect-video relative overflow-hidden rounded-lg mb-4 md:mb-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image w-full h-full object-cover"
                    />
                  </div>

                  <div className="project-content space-y-4 p-4 md:p-0">
                    <h3 className="project-title text-xl sm:text-2xl font-bold text-center md:text-left">{project.title}</h3>
                    <p className="project-description text-gray-600 dark:text-gray-300 text-sm sm:text-base text-center md:text-left">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="project-tech"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base text-center md:text-left">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-xs sm:text-sm text-center md:text-left">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        </div>

        <div className="animate-fade-in relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center relative">
            <span className="relative z-10 inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform origin-left transition-transform duration-300 hover:scale-x-110"></span>
            </span>
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div className="card p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6 text-center md:text-left">
                  I'm always interested in hearing about new projects and opportunities.
                  Feel free to reach out through any of the following channels.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`contact-link flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-dark-light hover:bg-primary hover:text-white transition-all duration-300 ${link.color} animate-fade-in`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm sm:text-base font-medium">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="card p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Location</h3>
                <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm sm:text-base">Patna, Bihar, India</span>
                </div>
              </div>
            </div>

            <div className="card p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center md:text-left">Contact Information</h3>
              <div className="space-y-6">
                <div className="contact-item group">
                  <h4 className="font-medium text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-1">Email</h4>
                  <a href="mailto:deepankarsingh1@gmail.com" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm sm:text-base">deepankarsingh1@gmail.com</span>
                  </a>
                </div>

                <div className="contact-item group">
                  <h4 className="font-medium text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-1">Phone</h4>
                  <a href="tel:+917479519946" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm sm:text-base">+91 7479519946</span>
                  </a>
                </div>

                <div className="contact-item group">
                  <h4 className="font-medium text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-1">Address</h4>
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm sm:text-base">Patna, Bihar, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 