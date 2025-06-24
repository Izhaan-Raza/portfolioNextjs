'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Twitter,
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Zap,
  Brain,
  Rocket,
  Award,
  Trophy,
  Star,
  Users,
  TrendingUp,
  Target,
  Briefcase,
  GraduationCap,
  FolderOpen,
  MessageCircle,
  Bolt,
  Mic,
  MessageSquare,
  Recycle,
  Wifi,
  Flag,
  Car,
  Airplay,
  Instagram
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  icon: any;
  gradient: string;
  delay: number;
}

interface Achievement {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: any;
  gradient: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "P.E.S.R.S. (EV Slot Booking)",
    description: "Token-based electric vehicle charging slot booking system with real-time dashboard and authentication.",
    tech: ["Flask", "MongoDB", "Docker", "Python"],
    icon: Bolt,
    gradient: "from-green-500 to-teal-500",
    delay: 0.1
  },
  {
    id: 2,
    title: "AI Voice Agent",
    description: "Voice-enabled AI assistant using speech-to-text and LLM integration for natural conversation.",
    tech: ["Python", "SpeechRecognition", "TTS", "OpenAI API"],
    icon: Mic,
    gradient: "from-purple-500 to-indigo-500",
    delay: 0.2
  },
  {
    id: 3,
    title: "Java Chat Application",
    description: "LAN-based CLI/GUI chat system using raw sockets, hosted on Raspberry Pi.",
    tech: ["Java", "Swing", "Sockets", "Raspberry Pi"],
    icon: MessageSquare,
    gradient: "from-yellow-500 to-orange-500",
    delay: 0.3
  },
  {
    id: 4,
    title: "Waste Classifier Web App",
    description: "AI-powered waste classification tool with image upload and recycling guidance.",
    tech: ["React", "Flask", "TensorFlow", "Tailwind CSS"],
    icon: Recycle,
    gradient: "from-lime-500 to-green-500",
    delay: 0.4
  },
  {
    id: 5,
    title: "IoT Sensor Network",
    description: "Real-time data collection system using ESP32 and Raspberry Pi for environmental monitoring.",
    tech: ["ESP32", "Python", "Firebase", "HTTP"],
    icon: Wifi,
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.5
  },
  {
    id: 6,
    title: "F1 Live Tracker",
    description: "Formula 1 race telemetry tracker with live updates, driver stats, and custom UI.",
    tech: ["React", "API", "Chart.js", "Tailwind CSS"],
    icon: Flag,
    gradient: "from-red-500 to-yellow-500",
    delay: 0.6
  },
  {
    id: 7,
    title: "Pi-ADAS Safety System",
    description: "Raspberry Pi-based ADAS with object detection, collision alerts, and emergency braking.",
    tech: ["YOLOv5", "OpenCV", "Python", "Pi Camera"],
    icon: Car,
    gradient: "from-gray-500 to-slate-600",
    delay: 0.7
  },
  {
    id: 8,
    title: "Emergency Drone (Prototype)",
    description: "Autonomous drone system for emergency response with sensor data streaming and navigation.",
    tech: ["Python", "GPS", "Raspberry Pi Pico W", "MQTT"],
    icon: Airplay,
    gradient: "from-sky-500 to-indigo-500",
    delay: 0.8
  }

];

const achievements: Achievement[] = [
{
  id: 1,
  year: "2024",
  title: "Dumb-a-thon Winner",
  description: "Secured First Prize for presenting the most creatively unconventional idea at a university hackathon.",
  icon: Trophy,
  gradient: "from-yellow-400 to-orange-500",
  category: "Award"
},
{
  id: 2,
  year: "2024",
  title: "UI/UX Developer Intern",
  description: "Hired as a UI/UX Developer at Vectr, a student-led startup focused on innovative digital solutions.",
  icon: Briefcase,
  gradient: "from-blue-500 to-purple-600",
  category: "Career"
},
{
  id: 3,
  year: "2024",
  title: "Open Source Contributor",
  description: "Earned the Level 4 Hacktoberfest badge for consistent contributions to open source projects.",
  icon: Star,
  gradient: "from-green-400 to-blue-500",
  category: "Coding"
},
{
  id: 4,
  year: "2024",
  title: "IoT Developer Intern",
  description: "Landed my first internship as an IoT Developer at a student-led startup, working on real-time systems.",
  icon: GraduationCap,
  gradient: "from-orange-500 to-red-500",
  category: "Career"
},
{
  id: 5,
  year: "2024",
  title: "Invited to NIT Jamshedpur (OJASS)",
  description: "Invited to present and participate in the annual tech fest OJASS at NIT Jamshedpur.",
  icon: TrendingUp,
  gradient: "from-purple-500 to-pink-500",
  category: "Community"
},
{
  id: 6,
  year: "2023",
  title: "Interschool Science Fest Winner",
  description: "Won First Prize for designing and building the most durable bridge structure at a science exhibition.",
  icon: Trophy,
  gradient: "from-cyan-400 to-blue-600",
  category: "Award"
},
{
  id: 7,
  year: "2022",
  title: "Science Club Secretary",
  description: "Appointed Secretary of the school's Atal Tinkering Lab (ATL) Innovation Group, leading STEM activities.",
  icon: TrendingUp,
  gradient: "from-emerald-400 to-teal-600",
  category: "Leadership"
},
{
  id: 8,
  year: "2022",
  title: "Inter-School Robotics Competition",
  description: "Won First Prize for Best Innovation in a regional inter-school robotics competition.",
  icon: Trophy,
  gradient: "from-indigo-500 to-purple-600",
  category: "Award"
}

];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const sections = ['about', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-slate-900" />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          style={{ y }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </motion.div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-slate-900/90 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:50px_50px]"></div>
      </div>

      {/* Floating Glass Navigation */}
{/* Floating Glass Navigation */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1 }}
  className="fixed top-8 w-full flex justify-center z-50"
>
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-2xl max-w-fit">
    <div className="flex justify-center items-center space-x-8 w-full max-w-fit">
      <button
        onClick={() => scrollToSection('projects')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
          activeSection === 'projects'
            ? 'bg-white/20 text-white'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
      >
        <FolderOpen className="w-4 h-4" />
        <span className="text-sm font-medium">Projects</span>
      </button>

      <button
        onClick={() => scrollToSection('achievements')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
          activeSection === 'achievements'
            ? 'bg-white/20 text-white'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
      >
        <Trophy className="w-4 h-4" />
        <span className="text-sm font-medium">Achievements</span>
      </button>

      <button
        onClick={() => scrollToSection('contact')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
          activeSection === 'contact'
            ? 'bg-white/20 text-white'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
      >
        <MessageCircle className="w-4 h-4" />
        <span className="text-sm font-medium">Contact</span>
      </button>
    </div>
  </div>
</motion.div>


      {/* Hero Section */}
      <section id="about" className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                {/* change the pfp from linkedin */}
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQEmgPBw-euiwg/profile-displayphoto-shrink_400_400/B56ZbiJTrhGgAg-/0/1747550813488?e=1756339200&v=beta&t=3aXlfj5S8TZUZtl2gpPkJjR3_8ua8YXCm6ucLd0kV4A"
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Izhaan Raza
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            IoT developer with a focus on AI, automation, and real-time systems.
            Experienced in building intelligent solutions using raspberryPi, python and Java
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a href="https://github.com/izhaan-raza" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/izhaan-raza-7243aa32b/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="bg-transparent border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </a>
            <a href="mailto:izzupro3232@gmail.com">
              <Button variant="outline" size="lg" className="bg-transparent border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </Button>
            </a>

          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 border border-blue-500/30 rounded-lg backdrop-blur-sm"
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-16 h-16 border border-purple-500/30 rounded-full backdrop-blur-sm"
        />
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A showcase of innovative solutions built with modern technologies and thoughtful design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: project.delay }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} mb-4`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* <div className="flex space-x-3">
                      <Button variant="outline" size="sm" className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live
                      </Button>
                    </div> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Achievements & Milestones
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A journey of continuous growth, innovation, and impactful contributions to the tech community.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${achievement.gradient}`}>
                            <achievement.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <span className="text-sm text-slate-400 font-medium">{achievement.category}</span>
                            <div className="text-lg font-bold text-blue-400">{achievement.year}</div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-2 text-white">
                          {achievement.title}
                        </h3>
                        
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${achievement.gradient} border-4 border-slate-900`}></div>
                    <div className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${achievement.gradient} animate-ping opacity-20`}></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Ready to turn your ideas into reality? Let's collaborate and create exceptional digital experiences together.
            </p>
            
            <div className="flex justify-center space-x-6">
              <a href="mailto:izzupro3232@gmail.com">

                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </a>
              <a href="https://instagram.com/izhaann7">
              
                <Button variant="outline" size="lg" className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800">
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow Me
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 py-8 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center text-slate-400">
          <p>&copy; Izhaan Raza 2025. Crafted with passion and precision.</p>
        </div>
      </footer>
    </div>
  );
}