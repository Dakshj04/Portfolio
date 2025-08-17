import React from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code, Database, Brain, Wrench } from 'lucide-react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Resume from './components/Resume.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';

function App() {
  // Data structures for all components
  const experiences = [
    {
      title: 'Marketing Intern',
      company: 'Corinzo',
      period: 'Feb 2024 – Mar 2024',
      description: 'Conducted comprehensive market research, designed effective marketing campaigns, and improved client outreach strategies. Collaborated with cross-functional teams to enhance brand visibility and engagement.'
    }
  ];

  const resumeVersions = [
    {
      label: 'AI/ML Focused',
      filename: 'resume-aiml.pdf',
      description: 'Specialized resume highlighting AI/ML projects and machine learning expertise.'
    },
    {
      label: 'Full-Stack Developer',
      filename: 'resume-fullstack.pdf',
      description: 'Comprehensive resume showcasing full-stack development skills and web technologies.'
    },
    {
      label: 'AI-Focused',
      filename: 'resume-aifocus.pdf',
      description: 'Resume emphasizing artificial intelligence projects and GenAI integrations.'
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Jain University',
      period: '2023–2026',
      gpa: '8.3'
    },
    {
      degree: 'Previous Studies',
      institution: 'Indus University',
      period: '2022–2023'
    },
    {
      degree: 'Secondary Education',
      institution: 'Seedling Modern Public School',
      details: '10th: 86.2% • 12th: 86.6%'
    }
  ];

  const certifications = [
    {
      name: 'SQL Certification',
      issuer: 'Coursera'
    },
    {
      name: 'Data Science Program',
      issuer: 'Physics Wallah'
    }
  ];

  const skills = {
    Programming: ['Python', 'Java', 'JavaScript', 'C'],
    Web: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js'],
    Databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
    'ML/Data': ['Pandas', 'NumPy', 'Scikit-learn', 'EDA', 'LangChain', 'LLM Integration'],
    Tools: ['Git', 'GitHub', 'Postman', 'Linux', 'Docker', 'Streamlit', 'Flask'],
    APIs: ['OpenAI', 'Replicate', 'Gemini', 'Clerk Auth', 'REST APIs']
  };

  const projects = [
    {
      title: 'Quick.Ai',
      description: 'AI SaaS platform with Clerk authentication, Stripe billing integration, and OpenAI & Replicate APIs. Built with PERN stack for scalable AI-powered solutions.',
      tech: ['PERN Stack', 'OpenAI API', 'Replicate API', 'Stripe', 'Clerk Auth']
    },
    {
      title: 'Medical Chatbot',
      description: 'Intelligent healthcare assistant using LangChain and GPT with Pinecone vector database for medical knowledge retrieval. Dockerized Flask backend for deployment.',
      tech: ['LangChain', 'GPT', 'Pinecone', 'Docker', 'Flask']
    },
    {
      title: 'Diabetes Prediction ML App',
      description: 'Machine learning application using logistic regression and decision tree models for diabetes prediction. Deployed on AWS with Flask for real-time predictions.',
      tech: ['Machine Learning', 'AWS', 'Flask', 'Scikit-learn', 'Logistic Regression']
    },
    {
      title: 'GenAI Shopping Assistant',
      description: 'AI-powered chatbot for personalized laptop recommendations using Gemini API. Interactive Flask frontend with intelligent product matching capabilities.',
      tech: ['Gemini API', 'Flask', 'GenAI', 'NLP', 'Recommendation System']
    }
  ];

  const skillIcons = {
    Programming: Code,
    Web: ExternalLink,
    Databases: Database,
    'ML/Data': Brain,
    Tools: Wrench,
    APIs: ExternalLink
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-beige font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-ivory/80 backdrop-blur-md border-b border-taupe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-serif text-xl font-semibold text-espresso">DJ</div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-brown hover:text-espresso transition-colors">About</a>
                <a href="#skills" className="text-brown hover:text-espresso transition-colors">Skills</a>
                <a href="#projects" className="text-brown hover:text-espresso transition-colors">Projects</a>
                <a href="#contact" className="text-brown hover:text-espresso transition-colors">Contact</a>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://linkedin.com/in/daksh-jain-7a4327259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown hover:text-espresso transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/Dakshj04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown hover:text-espresso transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:0408jaindaksh@gmail.com"
                  className="text-brown hover:text-espresso transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* All Portfolio Sections */}
      <Hero
        name="Daksh Jain"
        title="Aspiring AI/ML Engineer & Full-Stack Developer"
        description="Dynamic and driven Computer Science student with a strong foundation in programming, AI/ML, and web development."
      />

      <About
        description="Dynamic and driven Computer Science student with a strong foundation in programming, AI/ML, and web development. Passionate about building intelligent systems, GenAI integrations, and full-stack applications. Skilled at problem-solving, collaboration, and delivering real-world projects."
        location="Bengaluru, India"
        email="0408jaindaksh@gmail.com"
        imageUrl="/Daksh.jpg"
      />

      <Skills
        skills={skills}
        skillIcons={skillIcons}
      />

      <Projects projects={projects} />

      <Experience experiences={experiences} />

      <Resume resumeVersions={resumeVersions} />

      <Education education={education} />

      <Certifications certifications={certifications} />

      <Contact
        email="0408jaindaksh@gmail.com"
        phone="6378922996"
        github="https://github.com/Dakshj04"
        linkedin="https://linkedin.com/in/daksh-jain-7a4327259/"
      />

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-brown text-center">
        <p className="text-gold font-light">
          © 2025 Daksh Jain. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;