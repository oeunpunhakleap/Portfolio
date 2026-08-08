import React from 'react';
import {
  SiBootstrap,
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const SKILLS = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
];

const Skills = () => {
  const skillCards = [...SKILLS, ...SKILLS];

  return (
    <section id="skills" className="relative overflow-hidden bg-[#071a35] px-6 py-24 text-white md:px-12">
      <div className="absolute inset-0 bg-grid-blueprint opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-orange-500">+ Skills +</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Tools I use to build</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            A growing toolkit for turning ideas into clean, useful digital experiences.
          </p>
        </div>

        <div className="skills-fade relative overflow-hidden py-3" aria-label="Skills carousel">
          <div className="skills-track flex w-max gap-4 hover:[animation-play-state:paused]">
            {skillCards.map(({ name, icon: Icon, color }, index) => (
              <div
                key={`${name}-${index}`}
                aria-hidden={index >= SKILLS.length}
                className="flex min-w-40 items-center gap-3 rounded-xl border border-slate-700/70 bg-[#0b284b]/90 px-5 py-4 shadow-lg shadow-slate-950/20 transition-transform duration-300 hover:-translate-y-1"
              >
                <Icon className="h-8 w-8 shrink-0" style={{ color }} aria-hidden="true" />
                <span className="font-medium text-slate-100">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
