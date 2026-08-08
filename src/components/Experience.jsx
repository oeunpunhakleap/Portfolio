import React, { useState } from 'react';

// TIMELINE DATA
const TIMELINE_DATA = [
  {
    year: '2025 — Present',
    title: 'Bachelor of Software Devlopment Student',
    subtitle: 'American University of Phnom Penh',
    description:
      'Studying Software Devlopment, building a foundation in programming, web technology, and problem solving.',
    side: 'left',
  },
  {
    year: '2025',
    title: 'Intern — Graphic Designer, Cameraman & Content Creator',
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
    year: '2024 — 2025',
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
    title: 'RUPPER Connect — University Learning Portal',
    description:
      'A clean digital campus workspace for attendance, grades, schedules, announcements, and daily academic coordination, built for RUPP students and faculty.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    isPrivateRepo: true,
  },
  {
    title: 'Jeat Nas — Traditional Khmer Recipe Platform',
    description:
      'A web platform dedicated to showcasing traditional Khmer cuisine recipes, featuring interactive search, step-by-step guides, and location recommendations.',
    image: null,
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
    isPrivateRepo: false,
  },
  {
    title: 'Cisco Packet Tracer Network Topology',
    description:
      'Custom enterprise network topology configuration incorporating DHCP servers, NAT translation, VLAN segmentation, and multi-router subnetting.',
    image: null,
    tags: ['Cisco PT', 'Networking', 'VLAN / NAT'],
    liveUrl: null,
    githubUrl: '#',
    isPrivateRepo: false,
  },
];

const CERTIFICATES_DATA = [
  {
    title: 'Sub-1 Hour 10K Milestone',
    issuer: 'Personal Achievement',
    date: '2026',
    description: 'Successfully completed structured sub-1 hour 10-kilometer endurance running program.',
  },
  {
    title: 'Graphic Design Educator & Workshop Facilitator',
    issuer: 'Rural Teachers Workshop',
    date: '2024',
    description: 'Recognized for conducting digital graphic design training for educators in rural provinces.',
  },
];

const TECH_STACK_DATA = [
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React'] },
  { category: 'Design & Media', items: ['Photoshop', 'Illustrator', 'Video Production', 'UI/UX Design'] },
  { category: 'Networking & OS', items: ['Cisco Packet Tracer', 'DHCP/NAT', 'VLANs', 'Zorin OS / Linux'] },
];

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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Timeline
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Experience & Education
          </h2>
        </div>

        {/* Timeline Line Wrapper */}
        <div className="relative py-4">
          {/* Central Spine Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-cyan-500/30" />

          {/* Timeline Cards */}
          <div className="flex flex-col gap-12 md:gap-16">
            {TIMELINE_DATA.map((item, index) => {
              const isLeft = item.side === 'left';

              return (
                <div 
                  key={index} 
                  className={`relative flex items-center w-full ${
                    isLeft ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Node Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#051329] z-20 shadow-md shadow-cyan-500/50" />

                  {/* Card Element */}
                  <div 
                    className={`w-full md:w-[46%] ${
                      isLeft ? 'pr-0 md:pr-10 text-left md:text-right' : 'pl-0 md:pl-10 text-left'
                    }`}
                  >
                    <div className="bg-white text-slate-900 rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100 flex flex-col items-start md:items-inherit hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      
                      {/* Year Badge */}
                      <div className={`inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4 ${
                        isLeft ? 'self-start md:self-end' : 'self-start'
                      }`}>
                        {item.year}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 leading-snug">
                        {item.title}
                      </h3>

                      {/* Subtitle / Organization */}
                      <p className="text-xs md:text-sm font-medium text-slate-500 mb-4">
                        {item.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
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
      <div className="w-full max-w-5xl flex flex-col items-center z-10">
        
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
            Explore my journey through projects, certificates, and technical expertise. Each section represents a milestone in my continuous learning path.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="p-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-slate-200/50 flex items-center gap-1 mb-16">
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
              activeTab === 'projects'
                ? 'bg-[#0e3b68] text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Projects
          </button>

          <button
            onClick={() => setActiveTab('certificates')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
              activeTab === 'certificates'
                ? 'bg-[#0e3b68] text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Certificates
          </button>

          <button
            onClick={() => setActiveTab('techstack')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
              activeTab === 'techstack'
                ? 'bg-[#0e3b68] text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Tech Stack
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
                  className="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div className="h-44 bg-slate-100 overflow-hidden relative flex items-center justify-center border-b border-slate-100">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-[#f4f6f8] flex flex-col items-center justify-center text-slate-400 gap-2 border border-dashed border-slate-200">
                        <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <span className="text-xs font-mono text-slate-500">Preview coming soon</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col grow justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="w-full py-2.5 px-4 rounded-xl bg-[#0e3b68] hover:bg-[#0a2b4d] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
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
                            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            GitHub
                          </a>
                        )}

                        {project.isPrivateRepo && (
                          <div className="w-full py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-400 text-[11px] font-mono flex items-center justify-center gap-2 text-center">
                            <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
                <div key={idx} className="bg-white text-slate-900 rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4">
                      {cert.date}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h3>
                    <p className="text-cyan-600 font-medium text-xs mb-4">{cert.issuer}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TECH STACK */}
          {activeTab === 'techstack' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TECH_STACK_DATA.map((stack, idx) => (
                <div key={idx} className="bg-white text-slate-900 rounded-3xl p-8 shadow-xl border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">{stack.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, iIdx) => (
                      <span key={iIdx} className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold">
                        {item}
                      </span>
                    ))}
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