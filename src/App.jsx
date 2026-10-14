import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [timeGreeting, setTimeGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setTimeGreeting('Good morning! Welcome to my profile.');
    } else if (currentHour < 18) {
      setTimeGreeting('Good afternoon! Thanks for dropping by.');
    } else {
      setTimeGreeting('Good evening! Glad you are here.');
    }
  }, []);

  return (
    <div className="app-container">
      <header className="header-container">
        <h1>Chaitanya Narayanam</h1>
        <p className="subtitle">Master in Philosophy (Computer Science) | Enterprise Architect</p>
        <p className="greeting">{timeGreeting}</p>
      </header>

      {/* Navigation Bar */}
      <nav className="nav-container">
        <button 
          className={activeTab === 'about' ? 'active' : ''} 
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button 
          className={activeTab === 'expertise' ? 'active' : ''} 
          onClick={() => setActiveTab('expertise')}
        >
          EA &amp; AI Expertise
        </button>
        <button 
          className={activeTab === 'skills' ? 'active' : ''} 
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
        <button 
          className={activeTab === 'projects' ? 'active' : ''} 
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
      </nav>

      {/* Dynamic Content Panel */}
      <main className="main-card">
        {activeTab === 'about' && (
          <div className="about-section text-left">
            <h2>Hello World 👋</h2>
            <p>
              I am an Enterprise Architect with <strong>22 Years of IT Professional Experience</strong>, specializing in solving complex architectural challenges in cloud-native and modern enterprise environments.
            </p>
            <div className="certifications-box">
              <h3>Certifications &amp; Credentials</h3>
              <ul>
                <li>TOGAF Certified</li>
                <li>Claude Certified Architect Professional</li>
                <li>AWS Cloud Solutions Architect</li>
              </ul>
            </div>
            <p className="linkedin-link">
              🔗 <a href="https://www.linkedin.com/in/chaitanya-narayanam--m-phil-8329506" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </p>
          </div>
        )}

        {activeTab === 'expertise' && (
          <div className="expertise-section text-left">
            <h2>Enterprise Architecture &amp; Agentic AI Solutions</h2>
            <p className="section-desc">High-impact architectural solutions delivered across core enterprise pillars:</p>
            
            <div className="expertise-grid">
              <div className="expertise-card">
                <h3>1. Strategy, Governance &amp; Financial Optimization</h3>
                <ul>
                  <li><strong>Application Rationalization:</strong> Streamlining portfolios and eliminating redundancy during post-merger integrations.</li>
                  <li><strong>Build vs. Buy Decisions:</strong> Advising executive leadership on critical technology investments balanced with TCO.</li>
                  <li><strong>CapEx &amp; OpEx Governance:</strong> Managing capital and operational expenditures to deliver cost-effective, high-ROI solutions.</li>
                </ul>
              </div>

              <div className="expertise-card">
                <h3>2. Advanced Agentic AI Architecture &amp; Solutions</h3>
                <ul>
                  <li><strong>Agentic AI Solution Creation:</strong> Architecting autonomous multi-step reasoning systems and tool-execution workflows.</li>
                  <li><strong>AI Design Patterns:</strong> Implementing orchestrator-worker, routing, reflection, and human-in-the-loop patterns.</li>
                  <li><strong>AI Compliance &amp; Governance:</strong> Establishing frameworks to govern agent behavior, mitigate drift, and ensure data privacy.</li>
                  <li><strong>AI Performance Tuning:</strong> Optimizing latency, token efficiency, throughput, and scalability for enterprise AI.</li>
                </ul>
              </div>

              <div className="expertise-card">
                <h3>3. Modernization &amp; Cloud Transformation</h3>
                <ul>
                  <li><strong>Monolith to Microservices:</strong> Refactoring and decoupling legacy monoliths into scalable microservices.</li>
                  <li><strong>Cloud &amp; Hybrid Migration:</strong> Transitioning on-premises infrastructure to public and hybrid cloud environments.</li>
                  <li><strong>Legacy Modernization:</strong> Upgrading core legacy systems into modern, cloud-native architectures.</li>
                </ul>
              </div>

              <div className="expertise-card">
                <h3>4. Integration, Security &amp; Compliance</h3>
                <ul>
                  <li><strong>Enterprise API Integration:</strong> Connecting in-house systems, COTS software, and 3rd-party applications seamlessly.</li>
                  <li><strong>Security Best Practices:</strong> Embedding zero-trust security postures and robust IAM frameworks across all tiers.</li>
                  <li><strong>Regulatory Standards Rollout:</strong> Enterprise-wide rollout of regulatory compliance frameworks and standards (e.g., GDPR, HIPAA, SOC 2).</li>
                </ul>
              </div>

              <div className="expertise-card">
                <h3>5. Full-Stack Engineering &amp; Scalability</h3>
                <ul>
                  <li><strong>Full-Stack Solutions Architecture:</strong> Delivering robust end-to-end solutions using React.js, Node.js, and Spring Boot.</li>
                  <li><strong>Performance Tuning:</strong> Designing high-performance, fault-tolerant solutions capable of handling enterprise workloads.</li>
                  <li><strong>Enterprise Initiatives Execution:</strong> Orchestrating cross-functional technology initiatives across all business verticals.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="skills-section text-left">
            <h2>Technical Stack</h2>
            <p>Technologies and paradigms applied in enterprise environments:</p>
            <div className="skills-grid">
              <span className="skill-tag">React / Vite</span>
              <span className="skill-tag">JavaScript / HTML / CSS</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Java Spring Boot</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Kubernetes (K8s)</span>
              <span className="skill-tag">Agentic AI Frameworks</span>
              <span className="skill-tag">Git &amp; GitHub Actions</span>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="projects-section text-left">
            <h2>Featured Projects &amp; Solutions</h2>
            <div className="project-item">
              <h3>Enterprise Portfolio SPA</h3>
              <p>A lightning-fast single-page profile built with React, Vite, and custom hooks.</p>
            </div>
            <div className="project-item">
              <h3>Agentic AI &amp; Microservices Hub</h3>
              <p>Scalable full-stack systems leveraging Java Spring Boot backend services, MongoDB, and autonomous multi-agent orchestration.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;