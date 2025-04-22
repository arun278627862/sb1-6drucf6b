import React, { useEffect, useState, useRef } from 'react';
import { Briefcase, GraduationCap, Mail, MapPin, PenTool as Tool, Brain, Sparkles, Calendar, Building2, Linkedin, MessageCircle, ExternalLink, Sun, Moon, Bot, FileSpreadsheet, FileText, BarChart3, Mail as MailIcon, FileCheck } from 'lucide-react';
// Removed Facebook icon import as it's no longer used
import { motion, AnimatePresence } from 'framer-motion';
import SplitText from './components/SplitText'; // Assuming this component exists
import ScrollReveal from './components/ScrollReveal'; // Assuming this component exists
import ScrollFloat from './components/ScrollFloat'; // Assuming this component exists
// SplashCursor import is removed

interface Skill {
  name: string;
  description: string;
  category: 'technical' | 'management' | 'ai' | 'software' | 'competencies';
  icon: React.ReactNode;
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills: Skill[] = [
    // --- Skills array remains the same ---
    {
      name: 'PCB Rework',
      description: 'Expert in PCB modification and repair, including component replacement and circuit modifications.',
      category: 'technical',
      icon: <Tool className="w-4 h-4" />
    },
    {
      name: 'Soldering',
      description: 'Proficient in precision soldering techniques for electronic components and circuit boards.',
      category: 'technical',
      icon: <Tool className="w-4 h-4" />
    },
    {
      name: 'ERP Systems',
      description: 'Experienced in implementing and managing Enterprise Resource Planning systems for production tracking.',
      category: 'technical',
      icon: <Tool className="w-4 h-4" />
    },
    {
      name: 'Automation',
      description: 'Skilled in designing and implementing automated production processes and quality control systems.',
      category: 'technical',
      icon: <Tool className="w-4 h-4" />
    },
    {
      name: 'Team Leadership',
      description: 'Proven ability to lead and motivate teams, fostering collaboration and achieving production goals.',
      category: 'management',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'Process Improvement',
      description: 'Expert in identifying and implementing process improvements to enhance efficiency and quality.',
      category: 'management',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'Quality Control',
      description: 'Comprehensive knowledge of quality control procedures and standards in manufacturing.',
      category: 'management',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'Root Cause Analysis',
      description: 'Skilled in identifying and resolving complex technical and operational issues.',
      category: 'management',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'AI-Powered Quality Inspection',
      description: 'Implementing AI solutions for automated quality control and defect detection.',
      category: 'ai',
      icon: <Bot className="w-4 h-4" />
    },
    {
      name: 'AI Process Optimization',
      description: 'Implementing AI solutions for production optimization and quality control.',
      category: 'ai',
      icon: <Bot className="w-4 h-4" />
    },
    {
      name: 'Machine Learning Applications',
      description: 'Understanding of ML applications in manufacturing and quality control.',
      category: 'ai',
      icon: <Bot className="w-4 h-4" />
    },
    {
      name: 'Microsoft Excel',
      description: 'Advanced proficiency in Excel functions, data analysis, and automation using macros and formulas.',
      category: 'software',
      icon: <FileSpreadsheet className="w-4 h-4" />
    },
    {
      name: 'Power BI',
      description: 'Creating interactive dashboards and data visualizations for production metrics and KPIs.',
      category: 'software',
      icon: <BarChart3 className="w-4 h-4" />
    },
    {
      name: 'Microsoft Office Suite',
      description: 'Expert in PowerPoint for technical presentations, Word for documentation, and Outlook for professional communication.',
      category: 'software',
      icon: <FileText className="w-4 h-4" />
    },
    {
      name: 'Problem Solving',
      description: 'Strong analytical and problem-solving skills with expertise in root cause analysis methodologies.',
      category: 'competencies',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'Process Optimization',
      description: 'Experience in streamlining workflows and implementing efficiency improvements.',
      category: 'competencies',
      icon: <BarChart3 className="w-4 h-4" />
    },
    {
      name: 'Team Coordination',
      description: 'Skilled in team leadership, training, and cross-functional collaboration.',
      category: 'competencies',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: '5S & Safety',
      description: 'Implementation and maintenance of 5S principles and safety practices in production environments.',
      category: 'competencies',
      icon: <FileCheck className="w-4 h-4" />
    },
    {
      name: 'Documentation',
      description: 'Proficient in creating technical documentation, SOPs, and detailed reports.',
      category: 'competencies',
      icon: <FileText className="w-4 h-4" />
    }
    // --- End of Skills array ---
  ];

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && ['hero', 'about', 'experience', 'skills', 'education', 'contact'].includes(hash)) {
        setActiveSection(hash);
    } else {
        setActiveSection('hero');
    }

    const timer = setTimeout(() => setIsLoaded(true), 50);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
             setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    document.body.style.cursor = 'default';

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      document.body.style.cursor = '';
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Assuming nav height is 64px (4rem)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false); // Close mobile menu on navigation
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // *** Use the GitHub raw link ***
  const profileImageUrl = "https://raw.githubusercontent.com/arun278627862/arun-website/1f0baa33d51d7bb07d2c3a97c87de9f049cf1981/arun%20DP.jpg";


  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100' : 'bg-gradient-to-br from-gray-100 via-white to-gray-100 text-gray-900'}`}
      style={{ cursor: 'default' }} // Apply default cursor to the entire body
    >

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg ${isDarkMode ? 'bg-black/30 border-white/10' : 'bg-white/30 border-black/10'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <motion.span
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
              className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-cyan-500' : 'from-blue-600 to-cyan-700'}`}
              onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer' }} // Add pointer cursor
            >
              Arun
            </motion.span>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              style={{ cursor: 'pointer' }} // Add pointer cursor
              className={`md:hidden p-2 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['hero', 'about', 'experience', 'skills', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  style={{ cursor: 'pointer' }} // Add pointer cursor
                  className={`text-sm font-medium transition-colors duration-200 relative ${
                    activeSection === section
                      ? isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <motion.div
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
                      layoutId="activeSectionIndicator" // For smooth animation between active items
                    />
                  )}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                style={{ cursor: 'pointer' }} // Add pointer cursor
                aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden absolute top-full left-0 right-0 shadow-lg border-t"
                style={{
                  backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.9)' : 'rgba(249, 250, 251, 0.9)', // Slightly transparent background
                  backdropFilter: 'blur(10px)', // Apply blur
                  WebkitBackdropFilter: 'blur(10px)', // Safari support
                  borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {['hero', 'about', 'experience', 'skills', 'education', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      style={{ cursor: 'pointer' }} // Add pointer cursor
                      className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                        activeSection === section
                          ? isDarkMode ? 'text-blue-400 bg-white/10' : 'text-blue-600 bg-black/10'
                          : isDarkMode ? 'text-gray-300 hover:text-white hover:bg-white/5' : 'text-gray-700 hover:text-black hover:bg-black/5'
                      }`}
                    >
                      {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                   <button
                      onClick={toggleDarkMode}
                      style={{ cursor: 'pointer' }} // Add pointer cursor
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-white/5' : 'text-gray-700 hover:text-black hover:bg-black/5'}`}
                    >
                      {isDarkMode ? (
                        <>
                          <Sun className="w-5 h-5 text-yellow-400" /> Switch to Light Mode
                        </>
                      ) : (
                        <>
                          <Moon className="w-5 h-5 text-gray-700" /> Switch to Dark Mode
                        </>
                      )}
                    </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Main content */}
      <main className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

        {/* Hero Section */}
        <section id="hero" className="min-h-[calc(100vh-6rem)] flex items-center justify-center py-16 scroll-mt-16">
          <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-16">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 space-y-4 text-center lg:text-left max-w-xl"
            >
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <ScrollFloat> Hi, I'm Arun Kumar</ScrollFloat>
                <SplitText text="Arun Kumar" className={`block mt-1 sm:mt-2 bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-cyan-500' : 'from-blue-600 to-cyan-700'}`} delay={0.5} />
              </h1>
              <ScrollReveal>
                <h2 className={`text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-4`}>
                  Electrical Engineer & Production Supervisor
                </h2>
              </ScrollReveal>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <motion.a
                  href="mailto:arun8941971190@gmail.com"
                  whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} style={{ cursor: 'pointer' }} // Add pointer cursor
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-lg shadow-md ${isDarkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-all duration-200`}
                >
                  <Mail className="w-5 h-5 mr-2" /> Contact Me
                </motion.a>
                <motion.button
                  onClick={() => scrollToSection('experience')}
                  whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} style={{ cursor: 'pointer' }} // Add pointer cursor
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${isDarkMode ? 'text-white' : 'text-gray-800'} transition-all duration-200`}
                >
                  <Briefcase className="w-5 h-5 mr-2" /> View Experience
                </motion.button>
              </div>
            </motion.div>

            {/* Profile Image --- UPDATED SRC --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-shrink-0 mt-8 lg:mt-0"
            >
              <img
                // *** Using the profileImageUrl variable which holds the GitHub link ***
                src={profileImageUrl}
                alt="Arun Kumar profile picture"
                loading="lazy" // Lazy load image
                className={`w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 shadow-xl ${isDarkMode ? 'border-blue-500/40' : 'border-blue-600/40'}`}
              />
            </motion.div>

          </div>
        </section>

        {/* --- Rest of the sections (About, Experience, Skills, Education, Contact) remain the same --- */}
        {/* About Section */}
        <section id="about" className="py-20 scroll-mt-16">
          <ScrollFloat>
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.3 }}
              className={`backdrop-blur-lg ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} p-6 md:p-10 rounded-2xl border ${isDarkMode ? 'border-white/10' : 'border-black/10'} shadow-xl`}
            >
              <h2 className={`text-3xl font-bold mb-6 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <Sparkles className={`w-7 h-7 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} /> About Me
              </h2>
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-4 leading-relaxed text-base md:text-lg`}>
                <p>
                  I'm a passionate and results-driven Electrical Engineer with 4+ years of hands-on experience in Electronics PCB Assembly, specializing in PCB analysis, rework, and problem-solving. My core strength lies in diagnosing board-level issues and delivering effective solutions with speed and accuracy.
                </p>
                <p>
                  In recent years, I've been actively leveraging the power of AI and automation to streamline repetitive tasks, improve process accuracy, and boost overall efficiency in the production line. Whether it's implementing AI-driven inspection ideas, automating manual steps, or enhancing troubleshooting workflows—I thrive on using smart technology to solve real-world challenges.
                </p>
                <p>
                  Driven by a commitment to quality, innovation, and continuous improvement, I aim to contribute to forward-thinking teams where technology meets precision.
                </p>
              </div>
            </motion.div>
          </ScrollFloat>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 scroll-mt-16">
          <h2 className={`text-3xl font-bold mb-10 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <Briefcase className={`w-7 h-7 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} /> Experience
          </h2>
          <div className="space-y-8">
            {/* Experience Item 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.3 }}
              className={`backdrop-blur-lg ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} p-6 rounded-xl border ${isDarkMode ? 'border-white/10' : 'border-black/10'} shadow-lg`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2 sm:gap-4">
                <div>
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Production Supervisor</h3>
                  <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1 text-sm`}>
                    <Building2 className="w-4 h-4 mr-2 flex-shrink-0" /> Secure Meters Limited
                  </div>
                </div>
                <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1 sm:mt-0 text-sm flex-shrink-0 whitespace-nowrap`}>
                  <Calendar className="w-4 h-4 mr-2" /> Apr 2024 – Present
                </div>
              </div>
              <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2 mt-3 text-base pl-2`}>
                <li>Oversaw production activities, ensuring adherence to Good Manufacturing Practices (GMPs).</li>
                <li>Managed manpower planning, skill matrix assessment, and team member development.</li>
                <li>Enhanced process efficiency and reduced waste using Why-Why analysis and problem-solving techniques.</li>
                <li>Implemented and monitored quality control measures to meet product standards.</li>
              </ul>
            </motion.div>
            {/* Experience Item 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true, amount: 0.3 }}
              className={`backdrop-blur-lg ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} p-6 rounded-xl border ${isDarkMode ? 'border-white/10' : 'border-black/10'} shadow-lg`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2 sm:gap-4">
                <div>
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>D.E.T. Production Engineer</h3>
                  <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1 text-sm`}>
                    <Building2 className="w-4 h-4 mr-2 flex-shrink-0" /> JNS Instrument Ltd
                  </div>
                </div>
                <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1 sm:mt-0 text-sm flex-shrink-0 whitespace-nowrap`}>
                  <Calendar className="w-4 h-4 mr-2" /> Jan 2021 – March 2024
                </div>
              </div>
              <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2 mt-3 text-base pl-2`}>
                <li>Spearheaded end-to-end operations from materials handling to final production stages.</li>
                <li>Conducted regular skill evaluations and provided targeted training to enhance team capabilities.</li>
                <li>Maintained rigorous quality control standards throughout the production process.</li>
                <li>Optimized resource utilization and resolved production bottlenecks through root cause analysis.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 scroll-mt-16">
          <h2 className={`text-3xl font-bold mb-10 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <Tool className={`w-7 h-7 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} /> Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Categories */}
             <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.2 }}
                className={`backdrop-blur-lg ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} p-6 rounded-xl border ${isDarkMode ? 'border-white/10' : 'border-black/10'} shadow-lg`}
              >
                <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Tool className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} /> Technical Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.filter(skill => skill.category === 'technical').map((skill) => (
                    <motion.button key={skill.name} onClick={() => setSelectedSkill(skill)} whileHover={{ scale: 1.05, y: -2 }} style={{ cursor: 'pointer' }} // Add pointer cursor
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} transition-all duration-200`}
                    >
                       {React.cloneElement(skill.icon as React.ReactElement, { className: "w-4 h-4 flex-shrink-0" })}
                       {skill.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true, amount: 0.2 }}
                className={`backdrop-blur-lg ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} p-6 rounded-xl border ${isDarkMode ? 'border-white/10' : 'border-black/10'} shadow-lg`}
              >
                <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Brain className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} /> Management Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.filter(skill => skill.category === 'management').map((skill) => (
                     <motion.button key={skill.name} onClick={() => setSelectedSkill(skill)} whileHover={{ scale: 1.05, y: -2 }} style={{ cursor: 'pointer' }} // Add pointer cursor
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} transition-all duration-200`}
                    >
                       {React.cloneElement(skill.icon as React.ReactElement, { className: "w-4 h-4 flex-shrink-0" })}
                       {skill.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true, amount: 0.2 }}
                className={`backdrop-blur-lg ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} p-6 rounded-xl border ${isDarkMode ? 'border-white/10' : 'border-black/10'} shadow-lg`}
              >
                <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Bot className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} /> AI & Automation
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.filter(skill => skill.category === 'ai').map((skill) => (
                     <motion.button key={skill.name} onClick={() => setSelectedSkill(skill)} whileHover={{ scale: 1.05, y: -2 }} style={{ cursor: 'pointer' }} // Add pointer cursor
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} transition-all duration-200`}
                    >
                       {React.cloneElement(skill.icon as React.ReactElement, { className: "w-4 h-4 flex-shrink-0" })}
                       {skill.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
               <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.0 }} viewport={{ once: true, amount: 0.2 }}
                className={`backdrop-blur-lg ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} p-6 rounded-xl border ${isDarkMode ? 'border-white/10' : 'border-black/10'} shadow-lg`}
              >
                <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <FileSpreadsheet className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} /> Software & Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.filter(skill => skill.category === 'software').map((skill) => (
                     <motion.button key={skill.name} onClick={() => setSelectedSkill(skill)} whileHover={{ scale: 1.05, y: -2 }} style={{ cursor: 'pointer' }} // Add pointer cursor
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} transition-all duration-200`}
                    >
                       {React.cloneElement(skill.icon as React.ReactElement, { className: "w-4 h-4 flex-shrink-0" })}
                       {skill.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true, amount: 0.2 }}
                className={`backdrop-blur-lg ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} p-6 rounded-xl border ${isDarkMode ? 'border-white/10' : 'border-black/10'} shadow-lg`}
              >
                <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Brain className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} /> Core Competencies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.filter(skill => skill.category === 'competencies').map((skill) => (
                    <motion.button key={skill.name} onClick={() => setSelectedSkill(skill)} whileHover={{ scale: 1.05, y: -2 }} style={{ cursor: 'pointer' }} // Add pointer cursor
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} transition-all duration-200`}
                    >
                       {React.cloneElement(skill.icon as React.ReactElement, { className: "w-4 h-4 flex-shrink-0" })}
                       {skill.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
          </div>

          {/* Skill Detail Modal */}
          <AnimatePresence>
            {selectedSkill && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[60]"
                onClick={() => setSelectedSkill(null)} // Close modal on background click
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} rounded-xl p-6 max-w-md w-full shadow-xl`}
                  onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`p-1.5 rounded-md ${isDarkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                        {React.cloneElement(selectedSkill.icon as React.ReactElement, { className: "w-5 h-5" })}
                    </span>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedSkill.name}
                    </h3>
                  </div>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-base`}>
                    {selectedSkill.description}
                  </p>
                  <button onClick={() => setSelectedSkill(null)} style={{ cursor: 'pointer' }} // Add pointer cursor
                    className={`mt-6 px-4 py-2 rounded-lg text-sm font-medium ${
                      isDarkMode ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                    } transition-colors w-full`}
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 scroll-mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.3 }}
            className={`backdrop-blur-lg ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} p-6 md:p-10 rounded-2xl border ${isDarkMode ? 'border-white/10' : 'border-black/10'} shadow-xl`}
          >
            <h2 className={`text-3xl font-bold mb-6 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <GraduationCap className={`w-7 h-7 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} /> Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Diploma in Electrical Engineering</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-1 text-base md:text-lg`}>Government Polytechnic Pilibhit, Uttar Pradesh</p>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>(Board of Technical Education, Uttar Pradesh - BTEUP)</p>
              </div>
              {/* Add more education items here if needed */}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.2 }}
            className={`backdrop-blur-lg ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} p-6 md:p-10 rounded-2xl border ${isDarkMode ? 'border-white/10' : 'border-black/10'} shadow-xl`}
          >
            <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <MailIcon className={`w-7 h-7 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} /> Connect With Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              {/* Contact Info & Location */}
              <div className="space-y-6">
                <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h3>
                <div className="space-y-4">
                   <a href="mailto:arun8941971190@gmail.com" style={{ cursor: 'pointer' }} // Add pointer cursor
                    className={`flex items-center gap-3 group ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span className="truncate">arun8941971190@gmail.com</span>
                  </a>
                  <a href="https://wa.me/918941971190" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }} // Add pointer cursor
                    className={`flex items-center gap-3 group ${isDarkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'} transition-colors`}>
                    <MessageCircle className="w-5 h-5 flex-shrink-0" />
                    <span>+91 89419 71190 (WhatsApp)</span>
                  </a>
                  <div className={`flex items-start gap-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Vill- Gwari, Post- Pachpera,<br/>Dist. – Bareilly, Uttar Pradesh, 243201, India</span>
                  </div>
                  <div className={`flex items-center gap-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Calendar className="w-5 h-5 flex-shrink-0" />
                    <span>Date of Birth: 20 July 1999</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links --- UPDATED --- */}
              <div className="space-y-6">
                 <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Find me Online</h3>
                 <div className="grid grid-cols-1 gap-4">
                    {/* LinkedIn Link */}
                    <motion.a
                      href="https://www.linkedin.com/in/arun-kumar-3350522a6" // Corrected href with https://
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, x: 5 }}
                      style={{ cursor: 'pointer' }} // Add pointer cursor
                      className={`flex items-center gap-4 px-4 py-3 rounded-lg ${isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} transition-all duration-200 group`}
                    >
                      <Linkedin className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform flex-shrink-0" /> {/* Changed icon color */}
                      <span className={`${isDarkMode ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-black'} font-medium`}>LinkedIn</span>
                      <ExternalLink className={`w-4 h-4 ml-auto ${isDarkMode ? 'text-gray-500 group-hover:text-gray-400' : 'text-gray-400 group-hover:text-gray-600'} transition-colors flex-shrink-0`}/>
                    </motion.a>

                    {/* Facebook link removed */}
                 </div>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

       {/* Footer */}
        <footer className={`py-6 mt-16 border-t ${isDarkMode ? 'border-white/10 bg-black/20' : 'border-black/10 bg-white/20'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    © {new Date().getFullYear()} Arun Kumar. All rights reserved.
                </p>
            </div>
        </footer>

    </div>
  );
}

export default App;