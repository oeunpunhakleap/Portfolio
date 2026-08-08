import React from 'react';
import avatar from '../assets/avarta.png';

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

const PROFILE_STATS = [
  { value: 'IT', label: 'Student' },
  { value: 'Web', label: 'Developer' },
  { value: 'UI', label: 'Focused' },
];

const About = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-[#051329] bg-grid-blueprint text-white px-6 py-28 md:px-12 md:py-32 overflow-hidden"
    >
      <div className="absolute top-8 left-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>
      <div className="absolute top-8 right-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>
      <div className="absolute bottom-8 left-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>
      <div className="absolute bottom-8 right-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>

      {/*============================================================ Main Container ===================================================================================== */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] border border-cyan-400/20 bg-cyan-400/5" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-700/70 bg-[#0b284b]/90 shadow-2xl shadow-slate-950/40">
              <img
                src={avatar}
                alt="Leap avatar"
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#051329] via-[#051329]/70 to-transparent px-6 pb-6 pt-20">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
                  Creative Developer
                </p>
                <h3 className="mt-2 text-2xl font-bold">Leap</h3>
              </div>
            </div>

            <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-3 gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/90 p-3 text-center shadow-xl shadow-slate-950/40 backdrop-blur">
              {PROFILE_STATS.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/5 px-3 py-3">
                  <p className="text-lg font-bold text-orange-400">{stat.value}</p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/80 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-cyan-400 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Introduction
            </div>

            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              About Me
            </h2>

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

        <div className="mt-24 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
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
    </section>
  );
};

export default About;
