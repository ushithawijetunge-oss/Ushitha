export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-semibold tracking-wide">
            Ushitha Wijetunge
          </h1>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-[0.2em] text-gray-400">
            <a href="#about" className="hover:text-white transition duration-300">About</a>
            <a href="#experience" className="hover:text-white transition duration-300">Experience</a>
            <a href="#projects" className="hover:text-white transition duration-300">Projects</a>
            <a href="#contact" className="hover:text-white transition duration-300">Contact</a>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-black via-gray-950 to-black">

        <div>

          {/* Optional Profile Image */}
          <img
            src="/profile.jpg"
            alt="Ushitha"
            className="w-40 h-40 rounded-full mx-auto mb-8 border border-white/20 object-cover shadow-2xl"
          />

          <p className="uppercase tracking-[0.3em] text-gray-500 mb-5 text-sm">
            Finance Analyst • Business Analytics • Strategic Operations
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Finance & Analytics
            <span className="block text-gray-400">
              Driven by Data
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mb-10">
            Finance analyst passionate about business intelligence,
            analytics, strategic operations, and building modern
            data-driven business solutions.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">

            <a
              href="#projects"
              className="bg-white text-black px-7 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white/10 px-7 py-3 rounded-2xl hover:bg-white/5 transition duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>

      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-28">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-8">
              About Me
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              Finance professional with practical exposure to
              financial operations, analytics, business systems,
              and strategic decision-making.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              Passionate about technology, leadership,
              and transforming data into meaningful
              business insights.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

            <h3 className="text-2xl font-semibold mb-8">
              Core Expertise
            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="border-b border-white/10 pb-4">
                📊 Financial Analysis & Reporting
              </div>

              <div className="border-b border-white/10 pb-4">
                📈 Business Intelligence & Analytics
              </div>

              <div className="border-b border-white/10 pb-4">
                💻 SQL Databases & Data Management
              </div>

              <div className="border-b border-white/10 pb-4">
                🚀 Strategic Operations & Leadership
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Experience */}
      <section id="experience" className="bg-gradient-to-b from-black to-gray-950 py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-16 text-center">
            Experience
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:scale-105 transition duration-300">

              <h3 className="text-2xl font-semibold mb-5">
                Finance Operations
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Exposure to financial workflows,
                reconciliations, reporting,
                and operational finance processes.
              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:scale-105 transition duration-300">

              <h3 className="text-2xl font-semibold mb-5">
                Business Analytics
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Experience with SQL databases,
                analytics projects,
                dashboards, and business intelligence tools.
              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:scale-105 transition duration-300">

              <h3 className="text-2xl font-semibold mb-5">
                Leadership Vision
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Focused on strategic growth,
                innovation, and future leadership
                in modern business environments.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto py-28 px-6">

        <h2 className="text-4xl font-bold mb-16 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:scale-[1.03] transition duration-300">

            <h3 className="text-2xl font-semibold mb-5">
              SQL Database System
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8">
              Designed business-related SQL systems
              including workflows,
              approval processes,
              and analytics structures.
            </p>

            <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold">
              View Project
            </button>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:scale-[1.03] transition duration-300">

            <h3 className="text-2xl font-semibold mb-5">
              Business Research & Analytics
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8">
              Academic and strategic research
              focused on finance,
              economics,
              and business intelligence.
            </p>

            <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold">
              View Research
            </button>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-b from-gray-950 to-black py-28 px-6 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold mb-6">
            Let's Connect
          </h2>

          <p className="text-gray-400 text-lg mb-12">
            Interested in finance, analytics,
            technology, or strategic collaboration?
          </p>

          <div className="flex justify-center gap-5 flex-wrap">

            <a
              href="mailto:yourmail@email.com"
              className="bg-white text-black px-7 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300"
            >
              Email Me
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="border border-white/10 px-7 py-3 rounded-2xl hover:bg-white/5 transition duration-300"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Ushitha Wijetunge. All rights reserved.
      </footer>

    </div>
  );
}
