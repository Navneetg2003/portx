import ExperienceCard from "./ExperienceCard";

const experiences = [
  { 
    time: "December 2024 - February 2025",
    content:
      "Engineered scalable applications using Spring Boot microservices architecture and implemented CI/CD pipelines for automated deployment. Crafted responsive UI/UX interfaces with modern web technologies and JavaScript libraries. Led end-to-end development of full-stack applications, from design and implementation to production deployment.",
    name: "Full Stack Web Developer Intern",
    imgSrc: "https://media.licdn.com/dms/image/v2/C4D0BAQELqHrDyzleng/company-logo_200_200/company-logo_200_200/0/1669543718928?e=2147483647&v=beta&t=zowragWklf9tyU5h40-vul3asag9yUvgbeeMpUnSP4o",
    company: "GC Cloud Info System Pvt. Ltd.",
    skills: ["Spring Boot", "CI/CD", "React", "JavaScript", "Full Stack Development"]
  },
];

const Experience = () => {
  return (
    <section id="experiences" className="section overflow-hidden">
      <div className="container">
        <div className="relative inline-block mb-8">
          <h2 className="headline-2 reveal-up relative z-10">
            Professional Experience
          </h2>
          <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 rounded-full animate-glow"></div>
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-sky-400/10 rounded-full blur-2xl"></div>
        </div>

        <p className="text-zinc-400 mb-8 max-w-[60ch]">
          My journey in software development, building real-world solutions and gaining hands-on experience.
        </p>

        <div className="flex items-stretch gap-5 w-fit">
          {experiences.map(({ time, content, name, imgSrc, company, skills }, key) => (
            <ExperienceCard
              key={key}
              time={time}
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
              skills={skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;