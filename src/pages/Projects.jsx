import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'GlobeGaze',
    description: 'A Flutter app connecting travelers with locals, featuring Firebase authentication, real-time chat, location services, and AI-powered recommendations.',
    image: '/projects/globegaze.jpg',
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
    image: '/projects/settleup.jpg',
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
    image: '/projects/attendance.jpg',
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

export default function Projects() {
  return (
    <section className="section-container">
      <div className="animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Projects</h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="md:grid md:grid-cols-2 gap-6">
                <div className="aspect-video relative overflow-hidden rounded-lg mb-6 md:mb-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                        >
                          <FaExternalLinkAlt className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-dark-light rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
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
  );
} 