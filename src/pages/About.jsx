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

export default function About() {
  return (
    <section className="section-container">
      <div className="animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Bio</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I am a passionate developer with a strong foundation in computer science
                and a love for creating beautiful, functional applications. Currently
                pursuing my MCA at Chandigarh University, I specialize in mobile and
                web development using modern technologies.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>📧 deepankarsingh1@gmail.com</p>
                <p>📱 +91 7479519946</p>
                <p>📍 Patna, Bihar</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="border-l-4 border-primary pl-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {edu.location} • {edu.period}
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