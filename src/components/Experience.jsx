import React, { useState } from 'react';
import jeatNasImage from '../assets/Jeat-Nas.jpg';

// TIMELINE DATA
const TIMELINE_DATA = [
  {
    year: '2025 - Present',
    title: 'Bachelor of Software Development Student',
    subtitle: 'American University of Phnom Penh',
    description:
      'Studying Software Development, building a foundation in programming, web technology, and problem solving.',
    side: 'left',
  },
  {
    year: '2025',
    title: 'Intern - Graphic Designer, Cameraman & Content Creator',
    subtitle: 'RUPP UICC',
    description:
      'Created visual designs and digital content for various projects, assisted in filming, photography, and video production, and developed creative thinking and teamwork through hands-on experience.',
    side: 'right',
  },
  {
    year: '2025',
    title: 'Volunteer',
    subtitle: 'RUPP Sangkran & Angkor Sangkran',
    description:
      'Helped organize community events — learned to work with different kinds of people, communicate effectively as part of a team, and solve problems on the spot.',
    side: 'left',
  },
  {
    year: '2024 - 2025',
    title: 'Design & Analytics Intern',
    subtitle: 'Ministry of Information',
    description:
      'Managed social media channels, designed promotional graphics, and tracked engagement analytics across multiple digital campaigns.',
    side: 'right',
  },
  {
    year: '2024',
    title: 'Design Educator',
    subtitle: 'Rural Teachers Workshop',
    description:
      'Conducted a hands-on training workshop teaching basic graphic design skills and digital tools to school teachers in rural provinces.',
    side: 'left',
  },
];

// PORTFOLIO DATA
const PROJECTS_DATA = [
  {
    title: 'Phnom Penh Weather predicter',
    description:
      'A ML training module to read past Cambodia weather data and try to predicet the incoming weather in the next 7days ahead',
    image: 'https://i.pinimg.com/1200x/bc/60/6d/bc606ddea1a6795e15a6b0d14e464b94.jpg',
    tags: ['Python', 'Numpy', 'Pandas', 'XGBoost', 'Scikit-learn'],
    liveUrl: null,
    githubUrl: 'https://github.com/oeunpunhakleap/Weather_Prediction',
    isPrivateRepo: false,
  },
  {
    title: 'Jeat Nas — Traditional Khmer Recipe Platform',
    description:
      'A web platform dedicated to showcasing traditional Khmer cuisine recipes, featuring interactive search, step-by-step guides, and location recommendations.',
    image: jeatNasImage,
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: null,
    githubUrl: 'https://github.com/oeunpunhakleap/webproject',
    isPrivateRepo: false,
  },
  {
    title: 'Cisco Packet Tracer Network Topology',
    description:
      'Custom enterprise network topology configuration incorporating DHCP servers, NAT translation, VLAN segmentation, and multi-router subnetting.',
    image: 'https://i.pinimg.com/1200x/5e/dd/e3/5edde3a87543e1ede048eda5c8706fe3.jpg',
    tags: ['Cisco PT', 'Networking', 'VLAN / NAT'],
    liveUrl: null,
    githubUrl: null,
  },
];

const CERTIFICATES_DATA = [
  {
    title: 'ETEC Basic Network and Cybersecurity',
    issuer: 'Education',
    date: '2026',
    description: 'Successfully completed first step of Network Essentail and Cybersecurity.',
  },
  {
    title: 'Graphic Design Educator & Workshop Facilitator',
    issuer: 'Rural Teachers Workshop',
    date: '2024',
    description: 'Recognized for conducting digital graphic design training for educators in rural provinces.',
  },
];

const handleProjectImageError = (event) => {
  event.currentTarget.closest('[data-project-image]')?.setAttribute('data-image-error', 'true');
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <section 
      id="experience" 
      className="relative min-h-screen bg-[#051329] bg-grid-blueprint text-white px-6 md:px-12 py-32 flex flex-col items-center overflow-hidden"
    >
      {/* Corner Crosshair Accents (+ signs) */}
      <div className="absolute top-8 left-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>
      <div className="absolute top-8 right-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>
      <div className="absolute bottom-8 left-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>
      <div className="absolute bottom-8 right-8 text-cyan-500/40 font-mono text-xl pointer-events-none">+</div>

      {/* ==================== 1. TIMELINE SECTION ==================== */}
      <div className="w-full max-w-5xl mb-32 z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Timeline
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Experience & Education
          </h2>
        </div>

        {/* Timeline Line Wrapper */}
        <div className="relative py-4">
          {/* Central Spine Line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-400/10 via-cyan-400/60 to-cyan-400/10 md:left-1/2 md:-translate-x-1/2" />

          {/* Timeline Cards */}
          <div className="flex flex-col gap-8 md:gap-16">
            {TIMELINE_DATA.map((item, index) => {
              const isLeft = item.side === 'left';

              return (
                <div 
                  key={index} 
                  className={`relative flex w-full items-stretch md:items-center ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Node Dot */}
                  <div className="absolute left-5 top-8 z-20 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#051329] bg-cyan-400 shadow-md shadow-cyan-500/50 md:left-1/2 md:top-1/2 md:-translate-y-1/2" />
                  <div
                    className={`absolute left-5 top-10 hidden h-0.5 w-10 bg-cyan-400/40 md:top-1/2 md:block ${
                      isLeft ? 'md:left-[calc(50%-2.5rem)]' : 'md:left-1/2'
                    }`}
                  />

                  {/* Card Element */}
                  <div 
                    className={`w-full pl-14 md:w-[46%] md:pl-0 ${
                      isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'
                    }`}
                  >
                    <div className="flex h-full flex-col items-start rounded-2xl border border-slate-700/70 bg-slate-900/75 p-5 text-left shadow-xl shadow-slate-950/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-2xl md:p-7">
                      
                      {/* Year Badge */}
                      <div className={`inline-block px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 text-xs font-semibold mb-4 ${
                        isLeft ? 'self-start md:self-end' : 'self-start'
                      }`}>
                        {item.year}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 leading-snug">
                        {item.title}
                      </h3>

                      {/* Subtitle / Organization */}
                      <p className="text-xs md:text-sm font-medium text-orange-300 mb-4">
                        {item.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="w-full max-w-5xl border-t border-slate-800/80 mb-32 z-10" />

      {/* ==================== 2. PORTFOLIO SHOWCASE SECTION ==================== */}
      <div id='experience2' className="w-full max-w-5xl flex flex-col items-center z-10">
        
        {/* Showcase Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Explore selected projects and certificates from my learning journey.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="mb-16 grid w-full max-w-md grid-cols-2 gap-2 rounded-2xl border border-slate-700/70 bg-slate-950/70 p-2 shadow-2xl shadow-slate-950/30 backdrop-blur-md">
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold transition-all duration-300 md:text-sm ${
              activeTab === 'projects'
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-950/30'
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Projects
          </button>

          <button
            onClick={() => setActiveTab('certificates')}
            className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold transition-all duration-300 md:text-sm ${
              activeTab === 'certificates'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-950/30'
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Certificates
          </button>

        </div>

        {/* Tab Content */}
        <div className="w-full">
          {/* PROJECTS */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROJECTS_DATA.map((project, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/75 text-white shadow-xl shadow-slate-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-2xl"
                >
                  <div
                    className="group/image relative flex h-44 items-center justify-center overflow-hidden border-b border-slate-700/70 bg-slate-950/70 data-[image-error=true]:border-dashed"
                    data-project-image
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        onError={handleProjectImageError}
                        className="h-full w-full object-cover group-data-[image-error=true]/image:hidden"
                      />
                    ) : (
                      null
                    )}
                    <div className="hidden h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-slate-700 bg-[#061a32] text-slate-400 group-data-[image-error=true]/image:flex empty:flex">
                      <svg className="w-8 h-8 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <span className="text-xs font-mono text-slate-500">Preview coming soon</span>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col grow justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white mb-2 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-3 py-1 rounded-full border border-slate-700/80 bg-slate-950/70 text-slate-300 text-[11px] font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="w-full py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2.5 px-4 rounded-xl border border-slate-700/80 bg-slate-950/70 hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            GitHub
                          </a>
                        )}

                        {project.isPrivateRepo && (
                          <div className="w-full py-2.5 px-4 rounded-xl bg-slate-950/70 border border-slate-700/80 text-slate-500 text-[11px] font-mono flex items-center justify-center gap-2 text-center">
                            <svg className="w-3.5 h-3.5 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Repo is private — public version coming soon</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CERTIFICATES */}
          {activeTab === 'certificates' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CERTIFICATES_DATA.map((cert, idx) => (
                <div key={idx} className="flex flex-col justify-between rounded-2xl border border-slate-700/70 bg-slate-900/75 p-8 text-white shadow-xl shadow-slate-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs font-semibold mb-4">
                      {cert.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-orange-300 font-medium text-xs mb-4">{cert.issuer}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>      
    </section>
  );
};

export default Experience;
