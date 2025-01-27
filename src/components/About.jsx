const aboutItems = [
  {
    label: "Projects done",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl">
            Welcome! I&apos;m Navneet, a professional web developer with a knack
            for crafting visually stunning and highly functional websites.
            Combining creativity and technical expertise, I transform your
            vision into digital masterpieces that excel in both appearance and
            performance.
          </p>

          <dl className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <dt className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </dt>
                <dd className="text-sm text-zinc-400">{label}</dd>
              </div>
            ))}

            <img
              src="src/assets/logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;