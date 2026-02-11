/*
Design: Cyberpunk Futurism
Main portfolio page with particle background, hero section, about, experience, skills, and projects
Dark theme with electric blue and warning orange accents
*/

import ParticleBackground from '@/components/ParticleBackground';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Github, Linkedin, ExternalLink, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const activeSection = useActiveSection();
  const aboutRef = useScrollAnimation();
  const experienceRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
              LZ<span className="text-primary">_</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#about" 
                className={`transition-all duration-300 relative pb-1 ${
                  activeSection === 'about' 
                    ? 'text-primary font-semibold' 
                    : 'hover:text-primary text-foreground/70'
                }`}
              >
                ABOUT
                {activeSection === 'about' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                )}
              </a>
              <a 
                href="#experience" 
                className={`transition-all duration-300 relative pb-1 ${
                  activeSection === 'experience' 
                    ? 'text-primary font-semibold' 
                    : 'hover:text-primary text-foreground/70'
                }`}
              >
                EXPERIENCE
                {activeSection === 'experience' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                )}
              </a>
              <a 
                href="#skills" 
                className={`transition-all duration-300 relative pb-1 ${
                  activeSection === 'skills' 
                    ? 'text-primary font-semibold' 
                    : 'hover:text-primary text-foreground/70'
                }`}
              >
                SKILLS
                {activeSection === 'skills' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                )}
              </a>
              <a 
                href="#projects" 
                className={`transition-all duration-300 relative pb-1 ${
                  activeSection === 'projects' 
                    ? 'text-primary font-semibold' 
                    : 'hover:text-primary text-foreground/70'
                }`}
              >
                PROJECTS
                {activeSection === 'projects' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                )}
              </a>
              <a 
                href="#contact" 
                className={`transition-all duration-300 relative pb-1 ${
                  activeSection === 'contact' 
                    ? 'text-primary font-semibold' 
                    : 'hover:text-primary text-foreground/70'
                }`}
              >
                CONTACT
                {activeSection === 'contact' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                )}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:lepingzhang2002@gmail.com" className="hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/seventyzlp" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="container relative z-20 text-center px-6">
          <div className="cyber-border cyber-glow inline-block px-4 py-2 mb-8 bg-card/50 backdrop-blur-sm">
            <span className="text-primary font-mono text-sm">// SYSTEM_ONLINE</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            LEPING<br />
            <span className="text-primary">ZHANG</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Digital Media Technology / VR·XR Research / Drone Simulation
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Research Assistant at Tsinghua University | Simulation Environment Development Engineer
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="cyber-border cyber-glow" asChild>
              <a href="#contact">GET IN TOUCH</a>
            </Button>
            <Button size="lg" variant="outline" className="cyber-border" asChild>
              <a href="#projects">VIEW WORK</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef.ref} className={`relative py-32 scanline bg-background ${
        aboutRef.isVisible ? 'animate-fade-in-up' : ''
      }`}>
        <div className="container relative z-10 px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center break-words" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="text-primary">//</span> ABOUT_ME
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <p className="text-base md:text-lg leading-relaxed">
                I am a final-year undergraduate majoring in <span className="text-primary font-semibold">Digital Media Technology</span> at Beijing Film Academy.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Currently, I serve as a research assistant at <span className="text-primary font-semibold">Self-Progressive Embodied AI</span> interdisciplinary innovation group in Tsinghua University, advised by Prof. Feilin Han.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                My research focuses on <span className="text-primary font-semibold">multimedia assisted machine learning</span>, using highly simulated environments to generate training data and validate training results efficiently.
              </p>
              <div className="pt-6">
                <Button variant="outline" className="cyber-border" asChild>
                  <a href="mailto:lepingzhang2002@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    lepingzhang2002@gmail.com
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="cyber-border p-8 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold mb-6 break-words" style={{ fontFamily: 'var(--font-heading)' }}>
                  ACADEMIC_BACKGROUND
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4">
                    <div className="text-sm text-primary font-mono mb-1">May 2023 - Present</div>
                    <div className="font-semibold">Tsinghua University</div>
                    <div className="text-sm text-muted-foreground">Research Assistant Intern</div>
                  </div>
                  <div className="border-l-2 border-border pl-4">
                    <div className="text-sm text-muted-foreground font-mono mb-1">June 2025 - July 2025</div>
                    <div className="font-semibold">Nanyang Technological University</div>
                    <div className="text-sm text-muted-foreground">Summer School</div>
                  </div>
                  <div className="border-l-2 border-border pl-4">
                    <div className="text-sm text-muted-foreground font-mono mb-1">Sept 2021 - May 2025</div>
                    <div className="font-semibold">Beijing Film Academy</div>
                    <div className="text-sm text-muted-foreground">Digital Media Technology</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef.ref} className={`relative py-32 bg-background scanline ${
        experienceRef.isVisible ? 'animate-fade-in-up' : ''
      }`}>
        <div className="container relative z-10 px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center break-words" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="text-primary">//</span> WORK_EXPERIENCE
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="cyber-border p-8 bg-card/50 backdrop-blur-sm hover:cyber-glow transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    Simulation Environment Development Engineer
                  </h3>
                  <p className="text-primary">Institute of Industrial Artificial Intelligence, Chinese Academy of Sciences</p>
                </div>
                <div className="text-sm text-muted-foreground font-mono">Sept 2025 - Present</div>
              </div>
              
              <div className="space-y-6 mt-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    QGC Ground Station Development
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    <span className="text-primary font-mono text-sm">Role:</span> Core Developer | 
                    <span className="text-primary font-mono text-sm ml-4">Tech Stack:</span> QML, C++, Qt Framework, HTTP Communication
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Designed and implemented UI/UX for drone command and control interface based on QGC</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Built HTTP communication link between ground station and onboard computer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Integrated voice-to-text (Whisper) and behavior tree visualization for mission planning</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    UE5.2 + ProjectAirsim Drone Simulation System
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    <span className="text-primary font-mono text-sm">Role:</span> Core Developer | 
                    <span className="text-primary font-mono text-sm ml-4">Tech Stack:</span> UE5.2, ProjectAirsim, ROS1, Python API, Houdini, 3DGS
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Built city environment drone simulation system in UE5.2 with World Partition support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Developed ROS1 custom control nodes for behavior tree command translation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Explored procedural scene generation using Houdini and 3D Gaussian Splatting (3DGS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">★</span>
                      <span className="text-foreground font-semibold">Business Value: Enables pre-flight algorithm validation, significantly reducing testing costs and risks</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Product Demonstration Video Production
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    <span className="text-primary font-mono text-sm">Role:</span> Full-stack Video Producer | 
                    <span className="text-primary font-mono text-sm ml-4">Tech Stack:</span> UE5, Blender, After Effects, 3D Printing
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Produced 30+ minutes of high-quality demonstration videos (project assets exceeded 300GB)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Created 3D scenes, animations, and voice-over scripts for product promotion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Built custom post-processing pipelines and particle effects in UE5</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef.ref} className={`relative py-32 bg-background scanline ${
        skillsRef.isVisible ? 'animate-fade-in-up' : ''
      }`}>
        <div className="container relative z-10 px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center break-words" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="text-primary">//</span> TECHNICAL_SKILLS
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="cyber-border p-6 bg-card/50 backdrop-blur-sm hover:cyber-glow transition-all">
              <h3 className="text-xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                PROGRAMMING
              </h3>
              <ul className="space-y-2 font-mono text-sm">
                <li className="flex items-center gap-2"><span className="text-primary">›</span> QML / C++ (Qt)</li>
                <li className="flex items-center gap-2"><span className="text-primary">›</span> Python</li>
                <li className="flex items-center gap-2"><span className="text-primary">›</span> ROS1</li>
                <li className="flex items-center gap-2"><span className="text-primary">›</span> HTTP Communication</li>
              </ul>
            </Card>

            <Card className="cyber-border p-6 bg-card/50 backdrop-blur-sm hover:cyber-glow transition-all">
              <h3 className="text-xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                GRAPHICS & SIMULATION
              </h3>
              <ul className="space-y-2 font-mono text-sm">
                <li className="flex items-center gap-2"><span className="text-primary">›</span> UE5.2 (Blueprints)</li>
                <li className="flex items-center gap-2"><span className="text-primary">›</span> ProjectAirsim</li>
                <li className="flex items-center gap-2"><span className="text-primary">›</span> Houdini</li>
                <li className="flex items-center gap-2"><span className="text-primary">›</span> 3D Gaussian Splatting</li>
                <li className="flex items-center gap-2"><span className="text-primary">›</span> Blender (USD)</li>
              </ul>
            </Card>

            <Card className="cyber-border p-6 bg-card/50 backdrop-blur-sm hover:cyber-glow transition-all">
              <h3 className="text-xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                TOOLS & TECH
              </h3>
              <ul className="space-y-2 font-mono text-sm">
                <li className="flex items-center gap-2"><span className="text-primary">›</span> QGC Ground Station</li>
                <li className="flex items-center gap-2"><span className="text-primary">›</span> Whisper (STT)</li>
                <li className="flex items-center gap-2"><span className="text-primary">›</span> Behavior Trees</li>
                <li className="flex items-center gap-2"><span className="text-primary">›</span> After Effects</li>
                <li className="flex items-center gap-2"><span className="text-primary">›</span> Unity (VR/XR)</li>
                <li className="flex items-center gap-2"><span className="text-primary">›</span> Wwise (Spatial Audio)</li>
              </ul>
            </Card>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <Card className="cyber-border p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-6 break-words" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="text-primary">//</span> RESEARCH_INTERESTS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>VR/XR Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Game Development & Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Human Computer Interaction</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Multimedia User Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Drone Simulation & Control</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Ground Station UI/UX</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Procedural 3D Content Generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Real-time Graphics & Visualization</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef.ref} className={`relative py-32 bg-background scanline ${
        projectsRef.isVisible ? 'animate-fade-in-up' : ''
      }`}>
        <div className="container relative z-10 px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center break-words" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="text-primary">//</span> FEATURED_PROJECTS
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="cyber-border overflow-hidden bg-card/50 backdrop-blur-sm hover:cyber-glow transition-all group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663346392015/uRuffrOEtjzDmrVX.png"
                  alt="Drone Simulation Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Drone Simulation System
                </h3>
                <p className="text-muted-foreground mb-4">
                  Advanced UE5.2-based simulation environment for drone algorithm validation with ROS1 integration and procedural scene generation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-mono px-2 py-1 bg-primary/20 text-primary rounded">UE5.2</span>
                  <span className="text-xs font-mono px-2 py-1 bg-primary/20 text-primary rounded">ROS1</span>
                  <span className="text-xs font-mono px-2 py-1 bg-primary/20 text-primary rounded">Houdini</span>
                  <span className="text-xs font-mono px-2 py-1 bg-primary/20 text-primary rounded">3DGS</span>
                </div>
              </div>
            </Card>

            <Card className="cyber-border overflow-hidden bg-card/50 backdrop-blur-sm hover:cyber-glow transition-all group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663346392015/qbvntSLnhTNVHtPw.png"
                  alt="VR/XR Research Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  VR/XR Research Lab
                </h3>
                <p className="text-muted-foreground mb-4">
                  Human-computer interaction research focusing on immersive virtual environments and spatial computing applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-mono px-2 py-1 bg-primary/20 text-primary rounded">Unity</span>
                  <span className="text-xs font-mono px-2 py-1 bg-primary/20 text-primary rounded">SteamVR</span>
                  <span className="text-xs font-mono px-2 py-1 bg-primary/20 text-primary rounded">Wwise</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef.ref} className={`relative py-32 bg-background scanline ${
        contactRef.isVisible ? 'animate-fade-in-up' : ''
      }`}>
        <div className="container relative z-10 px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center break-words" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="text-primary">//</span> GET_IN_TOUCH
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <Card className="cyber-border cyber-glow p-12 bg-card/50 backdrop-blur-sm">
              <p className="text-xl mb-8 leading-relaxed">
                I'm currently open to research collaborations and interesting projects in VR/XR, drone simulation, and multimedia AI. 
                Let's connect and explore possibilities together.
              </p>
              <div className="flex items-center justify-center gap-6">
                <Button size="lg" className="cyber-border cyber-glow" asChild>
                  <a href="mailto:lepingzhang2002@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    EMAIL ME
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="cyber-border" asChild>
                  <a href="https://github.com/seventyzlp" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GITHUB
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-border">
        <div className="container relative z-10 px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground font-mono">
              © 2026 LEPING ZHANG. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              Designed with <span className="text-primary">Cyberpunk Futurism</span> aesthetic
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
