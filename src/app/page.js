export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Ushitha Wijetunge</h1>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-gray-300">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-black via-gray-950 to-black">
        <div>
          <p className="uppercase tracking-[0.3em] text-gray-400 mb-4 text-sm">
            Finance • Business Analytics • Leadership
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Building the Future with
            <span className="block text-gray-400">Finance & Data</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed mb-8">
            Finance professional passionate about analytics, leadership,
            technology, and business growth.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-600 px-6 py-3 rounded-2xl"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-300 leading-relaxed">
          I am a finance and business analytics enthusiast
          with experience in finance operations, business systems, and analytics.
        </p>
      </section>

      <section id="experience" className="bg-gray-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Finance Operations</h3>
            </div>

            <div className="bg-black border border-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Business Analytics</h3>
            </div>

            <div className="bg-black border border-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Leadership Vision</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
          <h3 className="text-2xl font-semibold mb-4">SQL Database System</h3>

          <p className="text-gray-400">
            Business-related SQL and analytics projects.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-gray-950 py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>

        <p className="text-gray-400 mb-10">
          Interested in finance, analytics, or collaboration?
        </p>

        <a
          href="mailto:yourmail@email.com"
          className="bg-white text-black px-6 py-3 rounded-2xl font-semibold"
        >
          Email Me
        </a>
      </section>
    </div>
  );
}
