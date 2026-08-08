import React from 'react';

const ABOUT_CARDS = [
  {
    title: 'Passion',
    description:
      'I thrive in community and technology activities — turning ideas into reality through design, media, and code.',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
  {
    title: 'Learning',
    description:
      'I believe in continuous learning, embracing new experiences, and pushing my limits to develop new skills.',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: 'Goals',
    description:
      'My goal is to grow as an IT engineer and contribute to meaningful projects that make a positive difference.',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-[#051329] bg-grid-blueprint text-white px-8 py-32 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Corner Crosshair Accents (+ signs) */}
      <div className="absolute top-8 left-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>
      <div className="absolute top-8 right-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>
      <div className="absolute bottom-8 left-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>
      <div className="absolute bottom-8 right-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center z-10">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          Introduction
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
          About Me
        </h2>

        {/* Bio Paragraph */}
        <p className="max-w-2xl text-slate-300 leading-relaxed text-sm md:text-base mb-16 font-sans">
          I'm Sonleng, a passionate individual who thrives in community and technology
          activities. I enjoy stepping out of my comfort zone to take on new challenges,
          allowing me to grow both personally and professionally. I believe in continuous
          learning, embracing new experiences, and pushing my limits to develop new skills
          and perspectives.
        </p>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {ABOUT_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur-md text-slate-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Dark Blue Icon Badge */}
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-6 shadow-sm">
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-lg font-bold text-white mb-3">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;