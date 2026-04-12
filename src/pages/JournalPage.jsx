import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageVariants } from '../utils/animations';
import { journalData } from '../data/journalData';
import SEO from '../components/SEO';
import './Pages.css';

const JournalPage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-wrapper"
      style={{paddingTop: '10rem', backgroundColor: 'var(--bg-color)', minHeight: '100vh'}}
    >
      <SEO 
        title="Journal & Market Insights" 
        description="Explore the latest architectural insights, market trends, and luxury property real estate related updates around Vasant Kunj, Mehrauli, and New Delhi." 
      />
      <div className="container">
         <motion.span className="subtitle" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}}>The Archives</motion.span>
         <motion.h1 className="heading-primary" initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2, duration:0.8}}>Editorial Journal</motion.h1>

         <div className="journal-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', marginTop: '5rem'}}>
            {journalData.map((post, index) => (
              <motion.div 
                key={post.id} 
                className="journal-card"
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay: index * 0.1, duration: 0.8}}
              >
                  <Link to={`/journal/${post.id}`} style={{textDecoration: 'none'}}>
                     <div style={{aspectRatio: '4/3', overflow: 'hidden', marginBottom: '1.5rem'}}>
                        <img src={post.image} alt={post.title} style={{width: '100%', height:'100%', objectFit: 'cover'}} />
                     </div>
                     <span className="subtitle" style={{marginBottom: '0.5rem', color: 'var(--text-color)', opacity: 0.6}}>{post.category} • {post.date}</span>
                     <h3 style={{fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: 'var(--text-color)', marginBottom: '1rem', lineHeight: '1.2'}}>{post.title}</h3>
                     <p style={{fontFamily: 'Inter, sans-serif', color: 'var(--text-color)', opacity: 0.7, lineHeight: '1.6'}}>{post.excerpt}</p>
                  </Link>
              </motion.div>
            ))}
         </div>
      </div>
    </motion.div>
  );
};

export default JournalPage;
