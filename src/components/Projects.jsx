import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projectsData = [
  {
    id: 'ryhan-square',
    title: 'Ryhan Square',
    location: 'Vasant Kunj',
    image: '/ryhan-square-new.png'
  },
  {
    id: 'the-crown',
    title: 'THE CROWN',
    location: 'Vasant Kunj',
    image: '/the-crown-new.png',
    status: 'Under Construction'
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  {project.status && <span className="status-badge-absolute">{project.status}</span>}
                  <div className="project-overlay">
                    <span className="explore-text">Explore <ArrowUpRight size={18} /></span>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-location">{project.location}</p>
                </div>
              </motion.div>
            </Link>
          ))}
          
          <motion.div 
            className="project-stat-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <h2 className="stat-number">30+</h2>
             <h3 className="stat-title">Legacy Projects Sold</h3>
             <p className="stat-desc">
               In exclusive collaboration with Kiera Construction and premiere developers, forging an undeniable legacy of architectural supremacy in New Delhi.
             </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
