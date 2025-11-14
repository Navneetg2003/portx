const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Experience",
    href: "#experiences",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Navneetg2003",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/navneetgupta/",
  },
  {
    label: "Twitter X",
    href: "https://x.com/navgupta1302",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_navneet__gupta",
  },
  {
    label: "Leetcode",
    href: "https://leetcode.com/u/navneetg1302/",
  },
];

const Footer = () => {
  return (
    <footer className="section relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-12">
          <div className="mb-10 fade-in">
            <div className="relative inline-block mb-8">
              <h2 className="headline-1 lg:max-w-[12ch] relative z-10">
                Let&apos;s work together today!
              </h2>
              <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 rounded-full animate-glow"></div>
            </div>

            <p className="text-zinc-400 max-w-[40ch] leading-relaxed">
              Ready to bring your ideas to life? Get in touch and let's create something extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:pl-20 fade-in delay-200">
            <div>
              <p className="mb-4 font-bold text-zinc-200 text-lg flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span>
                Sitemap
              </p>
              <ul className="space-y-2">
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="group flex items-center gap-2 text-sm text-zinc-400 py-1 transition-all duration-300 hover:text-sky-400"
                    >
                      <span className="w-0 h-[2px] bg-sky-400 group-hover:w-3 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-bold text-zinc-200 text-lg flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span>
                Socials
              </p>
              <ul className="space-y-2">
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-sm text-zinc-400 py-1 transition-all duration-300 hover:text-sky-400"
                    >
                      <span className="w-0 h-[2px] bg-sky-400 group-hover:w-3 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative h-[1px] mt-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
