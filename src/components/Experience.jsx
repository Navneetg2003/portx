import ExperienceCard from "./ExperienceCard";

const experiences = [
  { 
    time:"December 2024 - February 2025",
    content:
      "Worked on applications using Spring Boot and integrated CI/CD pipelines. Designed UI/UX with HTML, CSS, JavaScript, and libraries. Developed personal projects from start to finish, focusing on deployment and gaining practical experience in full-stack web development.",
    name: "Full Stack Web Developer Intern ",
    imgSrc: "https://media.licdn.com/dms/image/v2/C4D0BAQELqHrDyzleng/company-logo_200_200/company-logo_200_200/0/1669543718928?e=1746057600&v=beta&t=mZem_W1jdrFckOtD8GyernyujsgTUJtssq0ZnavOQdk",
    company: "GC Cloud Info System Pvt. Ltd.",
  },
];

const Experience = () => {
  return (
    <section id="experiences" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">Experience</h2>

        <div className="flex items-stretch gap-3 w-fit">
          {experiences.map(({ time,content, name, imgSrc, company }, key) => (
            <ExperienceCard
              key={key}
              time={time}
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;