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
          <Link to="/project/featured" className="btn" style={{textDecoration: 'none'}}>View All Projects</Link>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
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
                  <div className="project-badge-container">
                    <span className="project-launch-badge">{project.badgeText}</span>
                    <span className="project-status-badge">{project.status}</span>
                  </div>
                  <div className="project-overlay">
                    <span className="explore-text">
                      <span>Explore Masterplan &amp; Details</span>
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-meta-row">
                    <span className="project-typology">{project.typology}</span>
                  </div>
                  <h3 className="project-title">
                    <span>{project.title}</span>
                    <ArrowUpRight size={20} className="title-arrow" />
                  </h3>
                  <p className="project-location">{project.location}</p>
                </div>
              </motion.div>
            </Link>
          ))}
          
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
