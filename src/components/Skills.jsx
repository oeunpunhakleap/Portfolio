import React from 'react';
import {
  SiBootstrap,
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiPandas,
  SiNumpy,
} from 'react-icons/si';

const SKILLS = [
  { name: 'HTML5', category: 'Markup', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', category: 'Style', icon: SiCss, color: '#1572B6' },
  { name: 'Bootstrap', category: 'Framework', icon: SiBootstrap, color: '#7952B3' },
  { name: 'JavaScript', category: 'Language', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', category: 'Library', icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', category: 'Utility CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Python', category: 'Language', icon: SiPython, color: '#3776AB' },
  { name: 'NumPy', category: 'Data Science', icon: SiNumpy, color: '#4DABCF' },
  { name: 'Pandas', category: 'Data Analysis', icon: SiPandas, color: '#E70488' },
  { name: 'Git', category: 'Version Control', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', category: 'Code Hosting', icon: SiGithub, color: '#FFFFFF' },
  { name: 'Figma', category: 'Design', icon: SiFigma, color: '#F24E1E' },
];

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    items: 'HTML, CSS, JavaScript, React, Tailwind',
  },
  {
    title: 'Data',
    items: 'Python, NumPy, Pandas, analysis basics',
  },
  {
    title: 'Workflow',
    items: 'Git, GitHub, component-based builds',
  },
  {
    title: 'Design',
    items: 'Figma, layout, responsive UI polish',
  },
];

const Skills = () => {
  const skillCards = [...SKILLS, ...SKILLS];

  return (
    <section id="skills" className="relative overflow-hidden bg-[#051329] px-6 py-24 text-white md:px-12">
      <div className="absolute inset-0 bg-grid-blueprint opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-widest text-orange-500">+ Skills +</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Tools I use to build</h2>
            <p className="mt-4 max-w-xl text-slate-400">
              A growing toolkit for turning ideas into clean, useful digital experiences.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-700/70 bg-slate-900/55 p-5 shadow-lg shadow-slate-950/20 backdrop-blur-md"
              >
                <p className="text-sm font-bold text-white">{group.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{group.items}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-fade relative overflow-hidden rounded-4xl border border-slate-700/70 bg-slate-950/35 py-5 shadow-2xl shadow-slate-950/20" aria-label="Skills carousel">
          <div className="skills-track flex w-max gap-4 px-5 hover:[animation-play-state:paused]">
            {skillCards.map(({ name, category, icon: Icon, color }, index) => (
              <div
                key={`${name}-${index}`}
                aria-hidden={index >= SKILLS.length}
                className="group flex min-w-52 items-center gap-4 rounded-2xl border border-slate-700/70 bg-[#0b284b]/90 px-5 py-4 shadow-lg shadow-slate-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-[#103965]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/8 ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-white/14">
                  <Icon className="h-7 w-7" style={{ color }} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-slate-100">{name}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-500 group-hover:text-cyan-200">{category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
