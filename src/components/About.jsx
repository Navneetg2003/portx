const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 hover:bg-zinc-800/70 transition-all duration-300 shadow-xl hover:shadow-2xl scale-up backdrop-blur-sm border border-zinc-700/50">
          <p className="text-zinc-300 mb-4 md:text-xl md:leading-relaxed fade-in">
            I&apos;m Navneet Gupta, a Full Stack Developer with a passion for artificial intelligence and machine learning. 
            Currently interning at GC Cloud Info System, I specialize in building intelligent applications that merge 
            cutting-edge AI technologies with robust full-stack solutions.
          </p>
          
          <p className="text-zinc-300 md:text-xl md:leading-relaxed fade-in delay-100">
            My expertise spans from computer vision systems like AI-powered virtual try-ons to geospatial analysis platforms 
            and predictive models. I thrive on transforming complex data challenges into intuitive, scalable applications 
            using technologies like Spring Boot, React, Node.js, and Python. Every project I build is driven by innovation, 
            precision, and a commitment to delivering real-world impact.
          </p>

          <div className="flex justify-end mt-6 fade-in delay-200">
            <img
              src="assets/logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="md:w-[40px] md:h-[40px] hover:rotate-12 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;