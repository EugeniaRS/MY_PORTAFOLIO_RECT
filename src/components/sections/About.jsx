import React from "react";

export const About = () => {
  const frontSkills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "HTML",
    "CSS",
    "JavaScript",
  ];
  const backSkills = ["Node.js", "Express", "MySQL", "PostgreSQL", "Python"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r  from-blue-500  to-cyan-400 bg-clip-text text-transparent text-center ">
          About Me
        </h2>
        <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            I am a passionate web developer with a strong foundation in HTML,
            CSS, and JavaScript. I have experience in building responsive and
            user-friendly websites. My goal is to create seamless digital
            experiences that engage users and meet their needs. I am constantly
            learning and adapting to new technologies to stay current in the
            ever-evolving field of web development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] treansition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Back-End</h3>
              <div className="flex flex-wrap gap-2">
                {backSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] treansition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-300 sssspace-y-2">
                <li>
                    <strong>B.S. in Computer Science</strong> - University of UANL (2016-2021)
                </li>
                <li>
                    <strong>BootCamp full stack  Web Development</strong> - Softek (8 months)
                </li>
                
                
            </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-2 text-gray-300">
                <div>
                    <h4> Development web at TELINTEC (2023-Present)</h4>
                    <p className="text-gray-400">
                    En mi rol actual, trabajo principalmente con Next.js para el desarrollo frontend, y he colaborado también en el backend con Python, asegurando integraciones sólidas y eficientes.


                    </p>
                </div>

            </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            </div>
        </div>
      </div>
    </section>
  );
};
