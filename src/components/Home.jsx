import React from 'react';
import avatar from '../assets/avarta.png';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/oeunpunhakleap',
    svg: (
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    )
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/punhakleap-oeun-561868370/',
    svg: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    )
  },
  {
    label: 'Telegram',
    href: 'https://t.me/Punhakleap',
    svg: (
      <path d="M9.417 15.181l-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.154c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.642-7.91c.595-.394 1.136-.176.69.218l-10.225 9.179z" />
    )
  },
  {
    label: 'Email',
    href: 'mailto:oeunpunhakleap12@gmail.com',
    svg: (
      <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
    )
  }
];

const PROFILE_STATS = [
  { value: 'IT', label: 'Student' },
  { value: 'Web', label: 'Developer' },
  { value: 'UI', label: 'Focused' },
];

const ABOUT_CARDS = [
  {
    title: 'Passion',
    description:
      'I thrive in community and technology activities, turning ideas into reality through design, media, and code.',
    icon: (
      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

const Home = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-[#051329] bg-grid-blueprint px-6 pb-24 pt-28 text-white md:px-12 md:pb-32 md:pt-32 overflow-hidden"
    >
      {/* ================ + background */}
      <div className="absolute top-8 left-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>
      <div className="absolute top-8 right-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>
      <div className="absolute bottom-8 left-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>
      <div className="absolute bottom-8 right-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
        
          {/* ============ Left Side (Text Content) ================================== */}
          <div className="w-full md:w-1/2">
            <p className="text-orange-500 font-mono text-sm tracking-wider uppercase mb-6">
              + Portfolio +
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              <span className="block">Hello,</span>
              <span className="block">I'm Leap. I like to build stuff</span>
            </h1>

            <p className="text-slate-400 text-lg mb-8">
              Software developer student interested in building web experiences,
              learning data structures, and training ML models.
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
            <div className="flex flex-wrap gap-4">
              <a href="#experience2" className="bg-orange-600 hover:bg-orange-500 text-white font-medium px-6 py-3 rounded-sm transition-colors">
                View work
              </a>
              <a href="#about" className="border border-slate-700 hover:border-slate-500 text-slate-200 px-6 py-3 rounded-sm transition-colors">
                About me
              </a>
            </div>
          </div>

          {/* =========================Right Side (Image)================================================ */}
          <div className="group relative mx-auto w-full max-w-sm transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] md:max-w-md">
            <div className="absolute -inset-4 rounded-4xl border border-cyan-400/20 bg-cyan-400/5 transition-all duration-500 group-hover:border-cyan-300/50 group-hover:bg-cyan-300/15 group-hover:shadow-2xl group-hover:shadow-cyan-500/20" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-700/70 bg-[#0b284b]/90 shadow-2xl shadow-slate-950/40 transition-all duration-500 group-hover:border-cyan-300/60 group-hover:bg-[#155f9d] group-hover:shadow-cyan-500/25">
              <img
                src={avatar}
                alt="Leap avatar"
                className="aspect-square w-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cyan-200/0 mix-blend-screen transition-colors duration-500 group-hover:bg-cyan-200/20" />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#051329] via-[#051329]/70 to-transparent px-6 pb-6 pt-20 transition-all duration-500 group-hover:from-[#0b3158]">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
                  Creative Developer
                </p>
                <h3 className="mt-2 text-2xl font-bold">PunhakLeap OEUN</h3>
              </div>
            </div>

            <div className="relative z-10 mx-3 -mt-3 grid grid-cols-3 gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/90 p-3 text-center shadow-xl shadow-slate-950/40 backdrop-blur">
              {PROFILE_STATS.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/5 px-3 py-3">
                  <p className="text-lg font-bold text-orange-400">{stat.value}</p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*Bottom Info*/}
        <div className="mx-auto mt-16 grid w-full max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-sm border border-slate-800 bg-slate-800/50 text-xs font-mono md:grid-cols-4">
          <div className="bg-[#051329]/90 p-4">
            <p className="text-slate-500 uppercase tracking-widest mb-1">Role</p>
            <p className="text-slate-200 font-semibold">Student in IT field.</p>
          </div>
          <div className="bg-[#051329]/90 p-4">
            <p className="text-slate-500 uppercase tracking-widest mb-1">Based In</p>
            <p className="text-slate-200 font-semibold">Phnom Penh, Cambodia</p>
          </div>
          <div className="bg-[#051329]/90 p-4">
            <p className="text-slate-500 uppercase tracking-widest mb-1">Interested In</p>
            <p className="text-slate-200 font-semibold">ML / Data Structure</p>
          </div>
          <div className="bg-[#051329]/90 p-4">
            <p className="text-slate-500 uppercase tracking-widest mb-1">Status</p>
            <p className="text-slate-200 font-semibold">Open to work / Open to learn</p>
          </div>
        </div>

        <div id="about" className="scroll-mt-24 pt-24">
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/80 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-cyan-400 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Introduction
              </div>

              <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                About Me
              </h2>
            </div>

            <div>
              <div className="space-y-5 text-sm leading-relaxed text-slate-300 md:text-base">
                <p>
                  I'm Leap, an IT student and web developer who enjoys building clean,
                  useful, and modern digital experiences. I like turning ideas into real
                  interfaces with code, design thinking, and a lot of curiosity.
                </p>
                <p>
                  I enjoy working with HTML, CSS, JavaScript, React, and Tailwind CSS,
                  and I keep improving by practicing new projects, learning from real
                  problems, and trying to make each page feel better than the last one.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/50 p-5">
                  <p className="text-2xl font-bold text-cyan-300">01</p>
                  <p className="mt-2 text-sm text-slate-300">Build responsive websites</p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/50 p-5">
                  <p className="text-2xl font-bold text-orange-400">02</p>
                  <p className="mt-2 text-sm text-slate-300">Design simple user flows</p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/50 p-5">
                  <p className="text-2xl font-bold text-emerald-300">03</p>
                  <p className="mt-2 text-sm text-slate-300">Keep learning every day</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {ABOUT_CARDS.map((card, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl border border-slate-700/70 bg-slate-900/60 p-7 shadow-lg shadow-slate-950/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 shadow-sm">
                  {card.icon}
                </div>

                <h3 className="mb-3 text-lg font-bold text-white">
                  {card.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
