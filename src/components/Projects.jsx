import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projectsData = [
  {
    id: 'whispering-pines',
    title: 'Whispering Pines',
    location: 'Jaunapur, South Delhi',
    typology: '3 BHK Ultra-Luxury Society',
    image: '/whispering-pines-hero.webp',
    status: 'Under Construction',
    badgeText: 'New Launch'
  },
  {
    id: 'the-crown',
    title: 'The Crown',
    location: 'Vasant Kunj, South Delhi',
    typology: '3 BHK Bespoke Floor',
    image: '/the-crown-new.webp',
    status: 'Under Construction',
    badgeText: 'Signature'
  },
  {
    id: 'ryhan-square',
    title: 'Ryhan Square',
    location: 'Vasant Kunj, South Delhi',
    typology: '3 BHK Heritage Luxury Floor',
    image: '/ryhan-square-new.webp',
    status: 'Ready To Move In',
    badgeText: 'Ready To Move'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="subtitle">Portfolio</span>
            <h2 className="heading-secondary">Selected Works</h2>
          </div>
          <Link to="/portfolio" className="btn" style={{textDecoration: 'none'}}>View All Projects</Link>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => {
            const isMasked = project.id === 'the-crown' || project.id === 'whispering-pines';

            return (
              <Link to={`/property/${project.id}`} style={{textDecoration: 'none'}} key={project.id}>
                <motion.div 
                  className="project-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                    
                    {isMasked ? (
                      <>
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'radial-gradient(circle at center, rgba(14, 14, 14, 0.75) 0%, rgba(10, 10, 10, 0.96) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 1
                        }}>
                          <span style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.68rem',
                            letterSpacing: '0.25em',
                            color: 'var(--accent-color)',
                            textTransform: 'uppercase',
                            border: '1px solid rgba(200, 176, 130, 0.3)',
                            padding: '0.4rem 1rem',
                            borderRadius: '9999px',
                            background: 'rgba(0, 0, 0, 0.6)'
                          }}>
                            Confidential Release
                          </span>
                        </div>
                        <div className="project-badge-container" style={{ zIndex: 2 }}>
                          <span className="project-launch-badge" style={{ borderColor: 'rgba(200, 176, 130, 0.4)', color: 'var(--accent-color)' }}>
                            Private Enclave
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="project-badge-container">
                        <span className="project-launch-badge">{project.badgeText}</span>
                        <span className="project-status-badge">{project.status}</span>
                      </div>
                    )}

                    <div className="project-overlay" style={{ zIndex: 3 }}>
                      <span className="explore-text">
                        <span>{isMasked ? 'Private Briefing' : 'Explore Masterplan & Details'}</span>
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                  
                  <div className="project-info" style={isMasked ? { padding: '1.75rem 1.75rem 2rem' } : {}}>
                    {!isMasked && (
                      <div className="project-meta-row">
                        <span className="project-typology">{project.typology}</span>
                      </div>
                    )}
                    <h3 className="project-title" style={isMasked ? { margin: 0 } : {}}>
                      <span>{project.title}</span>
                      <ArrowUpRight size={20} className="title-arrow" />
                    </h3>
                    {!isMasked && <p className="project-location">{project.location}</p>}
                  </div>
                </motion.div>
              </Link>
            );
          })}
          
          <motion.div 
            className="project-stat-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <span className="stat-pretitle">TWO DECADES OF TRUST</span>
             <h2 className="stat-number">50+</h2>
             <h3 className="stat-title">Legacy Projects Delivered</h3>
             <p className="stat-desc">
               Forging an undeniable legacy of architectural supremacy in South Delhi. Over 500 discerning families reside in UVSP-engineered homes.
             </p>
             <Link to="/about" className="stat-card-link">
               <span>Read UVSP Heritage</span>
               <ArrowUpRight size={16} />
             </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
