import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageVariants } from '../utils/animations';
import { journalData } from '../data/journalData';
import SEO from '../components/SEO';
import './Pages.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = journalData.find(post => post.id === id);

  if (!article) return <Navigate to="/journal" replace />;

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-wrapper"
      style={{backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '10rem'}}
    >
      <SEO 
        title={article.title} 
        description={article.excerpt} 
        type="article"
      />
      
      {/* ARTICLE HERO */}
      <div style={{width: '100%', height: '70vh', position: 'relative', overflow: 'hidden'}}>
        <img src={article.image} alt={article.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        <div style={{position: 'absolute', top:0, left:0, width:'100%', height:'100%', background: 'linear-gradient(to top, var(--bg-color) 0%, transparent 100%)'}}></div>
      </div>

      <div className="container" style={{maxWidth: '800px', marginTop: '-15vh', position: 'relative', zIndex: 10}}>
         <motion.div initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{delay:0.3, duration: 0.8}}>
            <span className="subtitle">{article.category} • {article.date}</span>
            <h1 className="heading-secondary" style={{fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '3rem'}}>{article.title}</h1>
            
            <div 
              className="article-content" 
              style={{fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-color)', opacity: 0.85}}
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />
         </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .article-content h2 {
           font-family: 'Playfair Display', serif;
           font-size: 2.2rem;
           margin-top: 3.5rem;
           margin-bottom: 1.5rem;
           color: var(--accent-color);
        }
        .article-content p {
           margin-bottom: 1.5rem;
        }
        .article-content strong {
           color: var(--accent-color);
        }
      `}} />
    </motion.div>
  );
};

export default ArticleDetail;
