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

const skills = [
  { name: 'Dart', icon: SiDart, category: 'Languages' },
  { name: 'Kotlin', icon: SiKotlin, category: 'Languages' },
  { name: 'Python', icon: SiPython, category: 'Languages' },
  { name: 'Java', icon: DiJava, category: 'Languages' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Languages' },
  { name: 'C++', icon: SiCplusplus, category: 'Languages' },
  { name: 'Swift', icon: SiSwift, category: 'Languages' },
  { name: 'SCSS', icon: SiSass, category: 'Languages' },
  { name: 'Flutter', icon: SiFlutter, category: 'Frameworks' },
  { name: 'React', icon: SiReact, category: 'Frameworks' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'Frameworks' },
  { name: 'Express.js', icon: SiExpress, category: 'Frameworks' },
  { name: 'Firebase', icon: SiFirebase, category: 'Databases' },
  { name: 'Supabase', icon: SiSupabase, category: 'Databases' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Databases' },
  { name: 'MySQL', icon: SiMysql, category: 'Databases' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Databases' },
  { name: 'Git', icon: SiGit, category: 'Tools' },
  { name: 'Postman', icon: SiPostman, category: 'Tools' },
  { name: 'Figma', icon: SiFigma, category: 'Tools' },
];

const certifications = [
  { name: 'Java Programming', issuer: 'Oracle' },
  { name: 'REST API Development', issuer: 'Udemy' },
  { name: 'Python for Data Science', issuer: 'Coursera' },
];

const categories = ['Languages', 'Frameworks', 'Databases', 'Tools'];

export default function Skills() {
  return (
    <section className="section-container">
      <div
        className="animate-fade-in"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills & Expertise</h2>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-6">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="card flex flex-col items-center p-4 hover:scale-105 transition-transform animate-fade-in"
                        style={{ animationDelay: `${(categoryIndex * 5 + index) * 0.1}s` }}
                      >
                        <Icon className="w-8 h-8 mb-2 text-primary" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="card p-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h4 className="font-semibold mb-1">{cert.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Issued by {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 