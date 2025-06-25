import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, ExternalLink, Github, Linkedin, Mail, Phone, Globe, Code, Send } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [currentPassion, setCurrentPassion] = useState(0);
  
  const passions = [
    "AI & Machine Learning 🤖",
    "Data Analysis 📊", 
    "Python Programming 🐍"
  ];

  useEffect(() => {
    const passion = passions[currentPassion];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < passion.length) {
        setTypedText(passion.slice(0, index + 1));
        index++;
      } else {
        setTimeout(() => {
          setTypedText('');
          setCurrentPassion((prev) => (prev + 1) % passions.length);
        }, 2000);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentPassion]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  const skills = [
    { name: "Python", level: 85, color: "from-blue-500 to-blue-600" },
    { name: "SQL", level: 80, color: "from-green-500 to-green-600" },
    { name: "Java (Basics)", level: 60, color: "from-orange-500 to-orange-600" },
    { name: "Machine Learning (Basics)", level: 70, color: "from-purple-500 to-purple-600" },
    { name: "Data Visualization", level: 75, color: "from-cyan-500 to-cyan-600" },
    { name: "Power BI", level: 70, color: "from-yellow-500 to-yellow-600" },
    { name: "Artificial Intelligence Basics", level: 65, color: "from-red-500 to-red-600" },
    { name: "HTML", level: 85, color: "from-pink-500 to-pink-600" },
    { name: "CSS", level: 80, color: "from-indigo-500 to-indigo-600" },
    { name: "JavaScript", level: 75, color: "from-emerald-500 to-emerald-600" },
    { name: "Excel", level: 90, color: "from-teal-500 to-teal-600" }
  ];

  const languages = [
    { language: "Telugu", level: 100, description: "Native fluency; can read, write, and speak professionally", color: "from-pink-500 to-pink-600" },
    { language: "English", level: 85, description: "Proficient; can read, write, and speak with professional fluency", color: "from-blue-500 to-blue-600" },
    { language: "Hindi", level: 70, description: "Conversational; can read, write, and speak with liberal fluency", color: "from-purple-500 to-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-950 text-white relative overflow-hidden">
      {/* Enhanced animated background lights */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-400/8 rounded-full blur-2xl animate-pulse delay-3000"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-400/6 rounded-full blur-2xl animate-pulse delay-4000"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-pink-300/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-pink-500/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-pink-500/25">
                TLS
              </div>
              <div>
                <h1 className="text-xl font-bold text-pink-400">Thupakula Leena Sri</h1>
                <p className="text-sm text-gray-400">AI & ML Enthusiast</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize px-4 py-2 rounded-lg transition-all hover:bg-pink-500/20 hover:text-pink-400 hover:shadow-lg hover:shadow-pink-500/25 ${
                    activeSection === section ? 'bg-pink-500/30 text-pink-400 shadow-lg shadow-pink-500/25' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto text-center">
          <div className="mb-8 relative">
            {/* Pink glow background for profile */}
            <div className="absolute inset-0 w-52 h-52 mx-auto bg-gradient-to-r from-pink-500/30 to-purple-600/30 rounded-full blur-xl"></div>
            <img 
              src="/lovable-uploads/c701e223-8c3e-4739-9371-f82f3c2bd76c.png" 
              alt="Thupakula Leena Sri"
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-pink-500 shadow-2xl shadow-pink-500/30 object-cover hover:scale-105 transition-transform duration-300 relative z-10"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Thupakula Leena Sri
          </h1>
          
          <div className="text-2xl md:text-3xl mb-8 h-12">
            <span className="text-gray-300">Passionate about </span>
            <span className="text-pink-400 font-semibold">{typedText}</span>
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            A passionate and driven student specializing in Artificial Intelligence and Machine Learning, 
            with a strong foundation in Python programming and deep interest in data analytics.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-12">
            <button
              onClick={() => window.open('https://www.linkedin.com/in/leena-sri-thupakula-8002302a8', '_blank')}
              className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Linkedin className="h-7 w-7 text-white" />
            </button>
            <button
              onClick={() => window.open('https://github.com/LeenaSri29', '_blank')}
              className="w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300"
            >
              <Github className="h-7 w-7 text-white" />
            </button>
            <button
              onClick={() => window.open('mailto:leenathupakula05@gmail.com', '_blank')}
              className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
            >
              <Mail className="h-7 w-7 text-white" />
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-pink-500 text-pink-400 hover:bg-pink-500/10 px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all"
              onClick={() => window.open('https://drive.google.com/file/d/1o_lvrxPiM2SSthMRs_efxJvR4K-Itreb/view?usp=drivesdk', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-black/30 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-pink-400">About Me</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Main About Content */}
            <div className="md:col-span-2">
              <Card className="bg-gray-900/50 border-pink-500/30 hover:border-pink-500/60 transition-all hover:shadow-2xl hover:shadow-pink-500/20 hover:scale-105 duration-300">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I'm a passionate and driven student specializing in Artificial Intelligence and Machine Learning 🤖, 
                    with a strong foundation in Python programming 🐍 and a deep interest in data analytics 📊. 
                    I enjoy turning complex datasets into meaningful insights and using intelligent algorithms to solve real-world problems 🌍.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    With basics in Python libraries like Pandas 🐼, NumPy 🔢, Matplotlib 📈, and Scikit-learn 📘, 
                    I'm exploring machine learning frameworks to broaden my skill set.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I believe in continuous learning 📚 and strive to apply AI and data science ethically ✨ and creatively 🎨 
                    to make a positive impact. My goal is to become a data-driven AI professional 🚀 capable of building 
                    scalable, smart solutions 💡 across industries.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Quick Facts Box */}
            <div className="md:col-span-1">
              <Card className="bg-gray-900/80 border-pink-500/50 hover:border-pink-500/80 transition-all hover:shadow-2xl hover:shadow-pink-500/30 hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="text-pink-400 text-xl font-bold">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-pink-300 font-medium">B.Tech in AI & ML at Siddartha Institute</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-pink-300 font-medium">Multiple internships and certifications</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-pink-300 font-medium">Open source contributor</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-pink-300 font-medium">Award-winning presenter</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-pink-400">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-pink-500/30 rounded-lg p-6 hover:bg-pink-500/10 hover:border-pink-500 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium text-lg">{skill.name}</span>
                  <span className="text-pink-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/30 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-pink-400">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Java Programming Intern",
                company: "MICRO IT",
                duration: "May 2025 - Jun 2025",
                description: "Completed an intensive 1-month Java programming internship focused on core Java concepts and practical application development.",
                highlights: [
                  "Mastered Java fundamentals and OOP concepts",
                  "Built console-based applications using Java",
                  "Practiced data structures and algorithms in Java",
                  "Worked on mini-projects involving file handling and exception management"
                ]
              },
              {
                title: "Python Programming Intern",
                company: "PROG MASTER",
                duration: "Jan 2024 - Feb 2024",
                description: "A practical 2-month internship focused on building strong Python foundations with real-time mini-projects.",
                highlights: [
                  "Developed real-time Python applications like a password generator, file sorter, and weather checker using APIs",
                  "Implemented object-oriented programming, error handling, and file operations in real projects",
                  "Practiced unit testing and debugging in collaborative sessions",
                  "Participated in weekly mentor-led code reviews to enhance code structure and efficiency",
                  "Gained exposure to automation scripts for basic system tasks and CSV data handling"
                ]
              },
              {
                title: "Web Development Intern",
                company: "CSEdge",
                duration: "Mar 2024 - Apr 2024",
                description: "Hands-on web development internship building responsive student management system with HTML, CSS, and JavaScript.",
                highlights: [
                  "Built a responsive student management system with HTML, CSS, and JavaScript",
                  "Integrated form validation, CSS animations, and component-based UI for live user interaction",
                  "Designed a functional portfolio site as a part of the capstone project",
                  "Used GitHub for version control and deployed projects using GitHub Pages",
                  "Collaborated with peers on UI improvements and accessibility fixes in daily stand-ups"
                ]
              },
              {
                title: "Open Source Contributor",
                company: "GirlScript Summer of Code",
                duration: "May 2024 - Jun 2024",
                description: "Remote contributor to open-source repositories under mentor guidance.",
                highlights: [
                  "Fixed bugs and added new features to Python and frontend repositories",
                  "Submitted pull requests with documentation, improving real-world open-source projects",
                  "Contributed to beginner-friendly projects like to-do list apps, text editors, and weather apps",
                  "Learned issue tracking, code versioning (Git), and collaboration tools (Slack, GitHub Projects)",
                  "Engaged with a global community of developers, gaining real-world open-source experience"
                ]
              },
              {
                title: "SQL Workshop Participant",
                company: "Infosys Springboard",
                duration: "Aug 2024 - Sep 2024",
                description: "Participated in SQL workshop solving real-time business queries using relational databases with focus on banking applications.",
                highlights: [
                  "Designed queries for a banking database to fetch customer transaction reports",
                  "Used JOINs, subqueries, group functions, and nested conditions in hands-on tasks",
                  "Performed data normalization and created ER diagrams to structure databases",
                  "Understood how real companies use SQL to analyze customer behavior, sales trends, and fraud detection"
                ]
              }
            ].map((exp, index) => (
              <Card key={index} className="bg-gray-900/50 border-pink-500/30 hover:border-pink-500/60 transition-all hover:shadow-lg hover:shadow-pink-500/20 hover:scale-[1.02] duration-300">
                <CardHeader>
                  <CardTitle className="text-pink-400">{exp.title}</CardTitle>
                  <CardDescription className="text-purple-300 font-medium">{exp.company} • {exp.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  {exp.highlights && (
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-pink-400">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "🍴 Foodielicious Cart Flow App",
                description: "An interactive food ordering and cart flow web application built for user-friendly restaurant ordering experiences. This comprehensive project was developed using Lovable AI with a no-code approach, demonstrating modern web development capabilities and innovative problem-solving. The application features a complete user journey from menu browsing to order completion, including user authentication, dynamic cart management, real-time order tracking, and responsive design. The project showcases advanced UI/UX design principles, state management, and seamless integration of various frontend technologies. Built with React and TypeScript, it implements modern design patterns and provides an intuitive interface for both customers and restaurant management.",
                liveUrl: "https://foodielicious-cart-flow.lovable.app/login",
                codeUrl: "https://github.com/LeenaSri29/foodielicious-cart-flow",
                tags: ["React", "TypeScript", "UI/UX", "No-Code AI", "Lovable"]
              },
              {
                title: "🔐 Password Generator",
                description: "A comprehensive security tool that creates strong, customizable passwords with advanced options for length, character types, and complexity requirements. This project demonstrates proficiency in JavaScript programming, user interface design, and cybersecurity best practices. The application features real-time password strength validation, multiple customization options including uppercase/lowercase letters, numbers, and special characters, and an intuitive user interface. The tool promotes better cybersecurity practices by helping users avoid weak or reused passwords, making it ideal for both personal use and educational purposes. Built with clean, maintainable code and responsive design principles.",
                liveUrl: "https://leenasri29.github.io/Password-Generator-for-Micro-IT/",
                codeUrl: "https://github.com/LeenaSri29/Password-Generator-for-Micro-IT",
                tags: ["HTML", "CSS", "JavaScript", "Security", "Web Development"]
              },
              {
                title: "🔐 Digital Locker & Timer",
                description: "A sophisticated digital locker application with integrated timer functionality designed for secure digital asset management and time-based operations. This project combines security concepts with practical utility, featuring user authentication, secure storage mechanisms, and time-based access controls. The application demonstrates advanced JavaScript programming, local storage management, and user experience design. It includes features like automated locking/unlocking based on timer settings, secure password protection, and intuitive navigation. The project showcases understanding of security principles, data protection, and user-centric design while providing practical utility for managing digital resources with time constraints.",
                liveUrl: "https://leenasri29.github.io/digital-locker/",
                codeUrl: "https://github.com/LeenaSri29/digital-locker",
                tags: ["HTML", "CSS", "JavaScript", "Security", "Timer"]
              },
              {
                title: "🔢 Advanced Calculator",
                description: "A feature-rich calculator application with advanced mathematical operations, scientific functions, and an intuitive user interface. This project demonstrates strong programming fundamentals, mathematical algorithm implementation, and user experience design. The calculator supports basic arithmetic operations, advanced mathematical functions, memory operations, and error handling. Built with clean, modular code architecture, it features responsive design for various screen sizes, keyboard input support, and real-time calculation display. The project showcases proficiency in JavaScript programming, DOM manipulation, and creating practical utility applications with professional-grade user interfaces.",
                liveUrl: "https://leenasri29.github.io/Calculator-for-Micro-IT/",
                codeUrl: "https://github.com/LeenaSri29/Calculator-for-Micro-IT",
                tags: ["HTML", "CSS", "JavaScript", "Mathematics", "Web Development"]
              }
            ].map((project, index) => (
              <Card key={index} className="bg-gray-900/50 border-pink-500/30 hover:border-pink-500/60 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 duration-300">
                <CardHeader>
                  <CardTitle className="text-pink-400">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-pink-500/20 text-pink-300 hover:bg-pink-500/30 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button 
                      size="sm" 
                      className="bg-pink-500 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-pink-500 text-pink-400 hover:bg-pink-500/10 hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                      onClick={() => window.open(project.codeUrl, '_blank')}
                    >
                      <Code className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-black/30 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-pink-400">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                degree: "B.Tech - Computer Science (AI & ML)",
                institution: "Siddartha Institute of Science and Technology",
                duration: "2022 - Pursuing",
                description: "Currently pursuing Bachelor's degree with specialization in Artificial Intelligence and Machine Learning. This comprehensive program covers advanced topics including machine learning algorithms, deep learning architectures, neural networks, computer vision, natural language processing, and data science methodologies. The curriculum integrates theoretical foundations with practical applications, preparing students for the evolving AI industry. During my academic journey, I have actively participated in various college-level and intercollegiate technical events that enhanced both my subject knowledge and presentation skills. I was awarded 1st Prize in a Paper Presentation competition at Siddartha Institute of Science and Technology as part of our departmental association event, and secured 3rd Prize in a PPT competition at Sree Rama Engineering College. I also participated in a National Level Quest Competition, which provided exposure to participants from across the country and deepened my understanding of core technical concepts."
              },
              {
                degree: "Intermediate (MPC)",
                institution: "Sri Chaitanya Junior College, Tirupati",
                duration: "2020 - 2022",
                description: "Completed Intermediate education in Mathematics, Physics, and Chemistry with outstanding academic performance, achieving 91% in March 2022. This rigorous program provided a strong foundation in analytical thinking, problem-solving, and scientific methodology essential for engineering studies. The mathematics curriculum covered calculus, algebra, and statistics, while physics explored mechanics, thermodynamics, and electromagnetism. Chemistry studies included organic, inorganic, and physical chemistry concepts. This multidisciplinary approach developed critical thinking skills and quantitative analysis capabilities that directly support my current AI and ML studies. The program emphasized both theoretical understanding and practical applications, preparing me for advanced technical education."
              },
              {
                degree: "SSC",
                institution: "Sri Venkateswara Children's High School, Tirupati",
                duration: "2020",
                description: "Completed Secondary School Certificate with exceptional academic performance, achieving an outstanding 99% in March 2020. This achievement reflects consistent academic excellence and strong foundational knowledge across all subjects including mathematics, sciences, languages, and social studies. The comprehensive curriculum developed essential skills in logical reasoning, communication, and analytical thinking. The high academic performance demonstrates dedication to learning, time management skills, and the ability to excel under academic pressure. This strong educational foundation provided the confidence and knowledge base necessary for pursuing advanced studies in science and technology fields."
              }
            ].map((edu, index) => (
              <Card key={index} className="bg-gray-900/50 border-pink-500/30 hover:border-pink-500/60 transition-all hover:shadow-lg hover:shadow-pink-500/20">
                <CardHeader>
                  <CardTitle className="text-pink-400">{edu.degree}</CardTitle>
                  <CardDescription className="text-purple-300 font-medium">{edu.institution} • {edu.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Language Proficiency */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-pink-400">
            <Globe className="inline-block mr-3 mb-1" />
            Language Proficiency
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <Card key={index} className="bg-gray-900/50 border-pink-500/30 hover:border-pink-500/60 transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 duration-300">
                <CardHeader>
                  <CardTitle className="text-pink-400">{lang.language}</CardTitle>
                  <CardDescription className="text-purple-300 font-medium">{lang.level}%</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className={`bg-gradient-to-r ${lang.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-gray-300">{lang.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/30 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-pink-400">Connect With Me</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-pink-400">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 hover:bg-pink-500/10 p-3 rounded-lg transition-all duration-300">
                  <Mail className="h-5 w-5 text-pink-400" />
                  <span className="text-gray-300">leenathupakula05@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 hover:bg-pink-500/10 p-3 rounded-lg transition-all duration-300">
                  <Phone className="h-5 w-5 text-pink-400" />
                  <span className="text-gray-300">6304832820</span>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-pink-500 text-pink-400 hover:bg-pink-500/10 hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                    onClick={() => window.open('https://www.linkedin.com/in/leena-sri-thupakula-8002302a8', '_blank')}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-pink-500 text-pink-400 hover:bg-pink-500/10 hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                    onClick={() => window.open('https://github.com/LeenaSri29', '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-pink-400">Send a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-gray-900/50 border-pink-500/30 text-white placeholder-gray-400 focus:border-pink-500 hover:border-pink-500/60 transition-all"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-gray-900/50 border-pink-500/30 text-white placeholder-gray-400 focus:border-pink-500 hover:border-pink-500/60 transition-all"
                />
                <Textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="bg-gray-900/50 border-pink-500/30 text-white placeholder-gray-400 focus:border-pink-500 hover:border-pink-500/60 transition-all"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-pink-500/20 relative">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Thupakula Leena Sri. Made with ❤️ and passion for AI & ML.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
