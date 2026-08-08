import React from 'react';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    svg: (
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    )
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    svg: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    )
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    svg: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    )
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    svg: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    )
  },
  {
    label: 'Email',
    href: 'mailto:your.email@example.com',
    svg: (
      <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
    )
  }
];

const Home = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-[#051329] bg-grid-blueprint text-white px-8 pt-32 pb-16 flex flex-col justify-between overflow-hidden"
    >
      {/* ================ + background */}
      <div className="absolute top-8 left-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>
      <div className="absolute top-8 right-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>
      <div className="absolute bottom-8 left-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>
      <div className="absolute bottom-8 right-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>

      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row gap-8 items-center">
        
        {/* ============ Left Side (Text Content) ================================== */}
        <div className="w-full md:w-1/2">
          <p className="text-orange-500 font-mono text-sm tracking-wider uppercase mb-6">
            + Portfolio +
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            <p>Hello,</p>
            <p>I'm leap. I like to build stuff</p>
          </h1>

          <p className="text-slate-400 text-lg mb-8">
            software devloper student who interested in building, 
            Machine learning, and interfaces that stay out of the way.
          </p>

          {/* ==============Icons===================== */}
          <div className="flex items-center gap-3 mb-8">
            {SOCIAL_LINKS.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-10 h-10 rounded-full bg-white text-slate-800 hover:text-orange-600 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  {item.svg}
                </svg>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a href="#work" className="bg-orange-600 hover:bg-orange-500 text-white font-medium px-6 py-3 rounded-sm transition-colors">
              View work
            </a>
            <a href="#contact" className="border border-slate-700 hover:border-slate-500 text-slate-200 px-6 py-3 rounded-sm transition-colors">
              Get in touch
            </a>
          </div>
        </div>

        {/* =========================Right Side (Image)================================================ */}
        <div className="w-full max-w-md aspect-square rounded-3xl bg-[#0e3b68] border border-cyan-500/20 shadow-2xl relative overflow-hidden flex items-center justify-center p-4 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
          
          {/* Image Container */}
          <div className="w-full h-full bg-amber-200 rounded-2xl overflow-hidden relative z-10">
            <img 
              src="https://i.pinimg.com/1200x/2a/de/d1/2aded18db15a4b9b4fc0eea77ec3e854.jpg" 
              alt="Profile or Project" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-tr from-[#08223e] to-[#0e3b68] opacity-80 group-hover:from-[#134e8d] group-hover:to-[#1d63b8] group-hover:opacity-100 transition-all duration-700 ease-out" />

        </div>

      </div>

      {/*Bottom Info*/}
      <div className="max-w-5xl mx-auto w-full mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800/50 border border-slate-800 rounded-sm overflow-hidden text-xs font-mono">
        <div className="bg-[#051329]/90 p-4">
          <p className="text-slate-500 uppercase tracking-widest mb-1">Role</p>
          <p className="text-slate-200 font-semibold">Full-Stack Eng.</p>
        </div>
        <div className="bg-[#051329]/90 p-4">
          <p className="text-slate-500 uppercase tracking-widest mb-1">Based In</p>
          <p className="text-slate-200 font-semibold">Austin, TX</p>
        </div>
        <div className="bg-[#051329]/90 p-4">
          <p className="text-slate-500 uppercase tracking-widest mb-1">Focus</p>
          <p className="text-slate-200 font-semibold">Payments / Infra</p>
        </div>
        <div className="bg-[#051329]/90 p-4">
          <p className="text-slate-500 uppercase tracking-widest mb-1">Status</p>
          <p className="text-slate-200 font-semibold">Open to work</p>
        </div>
      </div>

    </section>
  );
};

export default Home;