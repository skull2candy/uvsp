import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { pageVariants, fadeInUp, staggerContainer } from '../utils/animations';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PriceUnlockModal from '../components/PriceUnlockModal';
import { 
  Car, 
  Users, 
  ArrowUpToLine, 
  ShieldCheck, 
  Waves, 
  Zap, 
  Dumbbell, 
  Layout, 
  Baby, 
  Fence, 
  MapPin,
  Trees,
  Wine,
  Coffee,
  Droplets,
  Sparkles,
  ArrowUpRight,
  Compass,
  KeyRound
} from 'lucide-react';
import './Pages.css';

const crownAmenities = [
  { icon: <Car size={16} strokeWidth={1.5} />, title: 'STILT CAR PARKING' },
  { icon: <ArrowUpToLine size={16} strokeWidth={1.5} />, title: 'HIGH-SPEED ELEVATOR' },
  { icon: <ShieldCheck size={16} strokeWidth={1.5} />, title: '24X7 GATED SECURITY' },
  { icon: <Zap size={16} strokeWidth={1.5} />, title: 'FULL POWER BACKUP' },
  { icon: <Layout size={16} strokeWidth={1.5} />, title: 'ITALIAN MARBLE INTERIORS' },
  { icon: <Fence size={16} strokeWidth={1.5} />, title: 'EXCLUSIVE ROOFTOP' },
  { icon: <MapPin size={16} strokeWidth={1.5} />, title: 'PRIME VASANT KUNJ' }
];

const ryhanAmenities = [
  { icon: <Car size={16} strokeWidth={1.5} />, title: 'COVERED CAR PARKING' },
  { icon: <Users size={16} strokeWidth={1.5} />, title: 'DOUBLE HEIGHT LOBBY' },
  { icon: <ArrowUpToLine size={16} strokeWidth={1.5} />, title: 'ELEVATOR ACCESS' },
  { icon: <ShieldCheck size={16} strokeWidth={1.5} />, title: 'CCTV SURVEILLANCE' },
  { icon: <Zap size={16} strokeWidth={1.5} />, title: 'PARTIAL POWER BACKUP' },
  { icon: <Layout size={16} strokeWidth={1.5} />, title: 'NATURAL LIGHT ATRIUM' },
  { icon: <MapPin size={16} strokeWidth={1.5} />, title: 'NEAR METRO & HERITAGE' }
];

const whisperingAmenities = [
  { icon: <Waves size={16} strokeWidth={1.5} />, title: 'SIGNATURE POOL & CLUB' },
  { icon: <Dumbbell size={16} strokeWidth={1.5} />, title: 'ELITE FITNESS STUDIO' },
  { icon: <Trees size={16} strokeWidth={1.5} />, title: 'SKY TERRACE BOTANICAL' },
  { icon: <ShieldCheck size={16} strokeWidth={1.5} />, title: 'SMART SECURITY GATEWAY' },
  { icon: <Droplets size={16} strokeWidth={1.5} />, title: '24-HR WATER SUPPLY' },
  { icon: <MapPin size={16} strokeWidth={1.5} />, title: 'JAUNAPUR PINE GROVES' }
];

const Project = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProperty, setActiveProperty] = useState('The Crown');
  const [revealedPrices, setRevealedPrices] = useState(() => {
    try {
      return {
        'The Crown': sessionStorage.getItem('unlocked_the-crown') === 'true',
        'Ryhan Square': sessionStorage.getItem('unlocked_ryhan-square') === 'true',
        'Whispering Pines': sessionStorage.getItem('unlocked_whispering-pines') === 'true'
      };
    } catch (e) {
      return {};
    }
  });

  // Parallax for The Crown
  const section1Ref = useRef(null);
  const { scrollYProgress: s1Progress } = useScroll({
    target: section1Ref,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(s1Progress, [0, 1], ["-12%", "12%"]);
  const scale1 = useTransform(s1Progress, [0, 0.5, 1], [1.12, 1, 1.08]);

  // Parallax for Ryhan Square
  const section2Ref = useRef(null);
  const { scrollYProgress: s2Progress } = useScroll({
    target: section2Ref,
    offset: ["start end", "end start"]
  });
  const y2 = useTransform(s2Progress, [0, 1], ["-12%", "12%"]);
  const scale2 = useTransform(s2Progress, [0, 0.5, 1], [1.12, 1, 1.08]);

  // Parallax for Whispering Pines
  const section3Ref = useRef(null);
  const { scrollYProgress: s3Progress } = useScroll({
    target: section3Ref,
    offset: ["start end", "end start"]
  });
  const y3 = useTransform(s3Progress, [0, 1], ["-12%", "12%"]);
  const scale3 = useTransform(s3Progress, [0, 0.5, 1], [1.12, 1, 1.08]);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenModal = (propName) => {
    setActiveProperty(propName);
    setModalOpen(true);
  };

  const textFadeIn = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerList = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    },
    viewport: { once: true, margin: "-80px" }
  };

  const revealPill = {
    initial: { opacity: 0, y: 15, scale: 0.95 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
    viewport: { once: true }
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="page-wrapper">
      <SEO 
        title="Bespoke Portfolio | UVSP Buildcon" 
        description="Explore our curated collection of luxury residential developments across South Delhi, from Vasant Kunj to Jaunapur." 
      />

      {/* ── CINEMATIC PORTFOLIO HERO HEADER ── */}
      <section className="portfolio-hero-section">
        <div className="container">
          <motion.div 
            className="portfolio-hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="pulsing-radar-dot"></span>
            <span>EXCLUSIVE SOUTH DELHI COLLECTION • 2026</span>
          </motion.div>

          <motion.h1 
            className="portfolio-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Architectural Masterworks
          </motion.h1>

          <motion.p 
            className="portfolio-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            A curated anthology of private residences crafted by UVSP Buildcon. Each development balances quiet luxury, climate-responsive design, and timeless Indian master-craftsmanship.
          </motion.p>

          {/* Quick Jump Navigation */}
          <motion.div 
            className="portfolio-jump-nav"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="portfolio-jump-pill" onClick={() => scrollToSection(section1Ref)}>
              <span className="pill-index">01</span>
              <span>The Crown • Vasant Kunj</span>
            </button>
            <button className="portfolio-jump-pill" onClick={() => scrollToSection(section2Ref)}>
              <span className="pill-index">02</span>
              <span>Ryhan Square • Vasant Kunj</span>
            </button>
            <button className="portfolio-jump-pill" onClick={() => scrollToSection(section3Ref)}>
              <span className="pill-index">03</span>
              <span>Whispering Pines • Jaunapur</span>
            </button>
          </motion.div>

          {/* Metric Highlights */}
          <motion.div 
            className="portfolio-stats-bar"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
          >
            <div className="portfolio-stat-item">
              <div className="portfolio-stat-num">50+</div>
              <div className="portfolio-stat-label">Bespoke Homes Delivered</div>
            </div>
            <div className="portfolio-stat-item">
              <div className="portfolio-stat-num">100%</div>
              <div className="portfolio-stat-label">Vastu Harmonized</div>
            </div>
            <div className="portfolio-stat-item">
              <div className="portfolio-stat-num">3 Prime</div>
              <div className="portfolio-stat-label">South Delhi Locations</div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* ── 01. THE CROWN ── */}
      <section ref={section1Ref} className="sticky-split-container project-watermark-wrap">
          <div className="project-watermark-num">01</div>
          
          <div className="sticky-left">
            <motion.img 
              src="/the-crown-new.webp" 
              alt="The Crown" 
              className="sticky-image" 
              style={{ y: y1, scale: scale1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8 }}
            />
            <div style={{position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10}}>
               <motion.div 
                 className="status-badge badge-construction"
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.3 }}
               >
                  <span className="status-dot"></span> Under Construction
               </motion.div>
            </div>
         </div>

         <div className="scroll-right section-padding">
            <motion.div {...textFadeIn} className="project-header">
               <motion.div 
                 className="project-accent-line"
                 initial={{ width: 0 }}
                 whileInView={{ width: '80px' }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
               />
               <span className="subtitle" style={{ letterSpacing: '0.3em' }}>PROPOSAL 01</span>
               <h2 className="heading-primary" style={{fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: '0.5rem 0'}}>THE CROWN</h2>
               <span className="label-text" style={{display:'flex', alignItems: 'center', gap: '0.5rem'}}>
                 <MapPin size={14} color="var(--accent-color)" /> Vasant Kunj, South Delhi
               </span>
            </motion.div>
            
            <motion.div {...textFadeIn} transition={{ delay: 0.2, duration: 1 }} className="project-body">
              <h3 className="heading-secondary" style={{fontSize: '1.8rem', marginBottom: '1.2rem'}}>Royal Elegance Reimagined.</h3>
              <p className="body-text-large">
                The Crown represents the pinnacle of regal architecture harmonized with modern minimalism. Sourced with the finest ivory marble, both the exterior facade and the inner sanctums resonate with singular, quiet prestige.
              </p>
              <div style={{marginTop: '2.5rem'}}>
                <Link to="/property/the-crown" className="btn-project-cta">
                  <span>Explore The Crown</span>
                  <ArrowUpRight size={18} className="cta-arrow" />
                </Link>
              </div>
            </motion.div>
            
            <div className="project-spec-grid">
               <motion.div 
                 className="spec-entry spec-entry-card"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 whileHover={{ y: -4 }}
               >
                  <span className="label-text">Configuration</span>
                  <h4>3BHK Ultra-Luxury</h4>
                  <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem'}}>Private Elevator & Stilt Parking</p>
               </motion.div>

               <motion.div 
                 className="spec-entry spec-entry-card"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.15 }}
                 whileHover={{ y: -4 }}
                 onClick={() => !revealedPrices['The Crown'] && handleOpenModal('The Crown')}
                 style={{ cursor: revealedPrices['The Crown'] ? 'default' : 'pointer' }}
               >
                  <span className="label-text">Investment Portfolio</span>
                  <div className="hidden-price-block">
                     {revealedPrices['The Crown'] ? (
                       <span style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--accent-color)', fontFamily: "'Playfair Display', serif" }}>
                         ₹ 1.99 Cr.
                       </span>
                     ) : (
                       <>
                         <span className="price-masked" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                           <KeyRound size={14} color="var(--accent-color)" /> Unlock Price Portfolio
                         </span>
                         <div className="price-shimmer-bar"></div>
                       </>
                     )}
                  </div>
               </motion.div>

               <div className="spec-amenities" style={{gridColumn: '1 / -1'}}>
                  <span className="label-text">Curated Amenities</span>
                  <motion.div variants={staggerList} initial="initial" whileInView="whileInView" className="amenity-tags">
                     {crownAmenities.map((item, idx) => (
                       <motion.span 
                         key={`crown-amenity-${idx}`} 
                         variants={revealPill} 
                         className="amenity-tag"
                         whileHover={{ y: -3, scale: 1.04 }}
                       >
                         <span className="amenity-icon">{item.icon}</span>
                         {item.title}
                       </motion.span>
                     ))}
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* ── 02. RYHAN SQUARE ── */}
      <section ref={section2Ref} className="sticky-split-container reverse project-watermark-wrap" style={{backgroundColor: 'var(--surface-color)'}}>
         <div className="project-watermark-num" style={{left: '1rem', right: 'auto'}}>02</div>

         <div className="sticky-left">
            <motion.img 
              src="/ryhan-square-new.webp" 
              alt="Ryhan Square" 
              className="sticky-image" 
              style={{ y: y2, scale: scale2 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8 }}
            />
            <div style={{position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10}}>
               <motion.div 
                 className="status-badge badge-ready"
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.3 }}
               >
                  <span className="status-dot"></span> Ready To Move In
               </motion.div>
            </div>
         </div>

         <div className="scroll-right section-padding">
            <motion.div {...textFadeIn} className="project-header">
               <motion.div 
                 className="project-accent-line"
                 initial={{ width: 0 }}
                 whileInView={{ width: '80px' }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
               />
               <span className="subtitle" style={{ letterSpacing: '0.3em' }}>PROPOSAL 02</span>
               <h2 className="heading-primary" style={{fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: '0.5rem 0'}}>RYHAN SQUARE</h2>
               <span className="label-text" style={{display:'flex', alignItems: 'center', gap: '0.5rem'}}>
                 <MapPin size={14} color="var(--accent-color)" /> Vasant Kunj, South Delhi
               </span>
            </motion.div>
            
            <motion.div {...textFadeIn} transition={{ delay: 0.2, duration: 1 }} className="project-body">
              <h3 className="heading-secondary" style={{fontSize: '1.8rem', marginBottom: '1.2rem'}}>Quiet Modern Serenity.</h3>
              <p className="body-text-large">
                Ryhan Square elegantly balances expansive glass expanses with monolithic concrete forms, blurring boundaries between structural permanence and the surrounding lush green tree lines.
              </p>
              <div style={{marginTop: '2.5rem'}}>
                <Link to="/property/ryhan-square" className="btn-project-cta">
                  <span>Explore Ryhan Square</span>
                  <ArrowUpRight size={18} className="cta-arrow" />
                </Link>
              </div>
            </motion.div>
            
            <div className="project-spec-grid">
               <motion.div 
                 className="spec-entry spec-entry-card"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 whileHover={{ y: -4 }}
               >
                  <span className="label-text">Configuration</span>
                  <h4>3BHK Bespoke</h4>
                  <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem'}}>Double-Height Grand Lobby</p>
               </motion.div>

               <motion.div 
                 className="spec-entry spec-entry-card"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.15 }}
                 whileHover={{ y: -4 }}
                 onClick={() => !revealedPrices['Ryhan Square'] && handleOpenModal('Ryhan Square')}
                 style={{ cursor: revealedPrices['Ryhan Square'] ? 'default' : 'pointer' }}
               >
                  <span className="label-text">Investment Portfolio</span>
                  <div className="hidden-price-block">
                     {revealedPrices['Ryhan Square'] ? (
                       <span style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--accent-color)', fontFamily: "'Playfair Display', serif" }}>
                         ₹ 1.50 Cr.
                       </span>
                     ) : (
                       <>
                         <span className="price-masked" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                           <KeyRound size={14} color="var(--accent-color)" /> Unlock Price Portfolio
                         </span>
                         <div className="price-shimmer-bar"></div>
                       </>
                     )}
                  </div>
               </motion.div>

               <div className="spec-amenities" style={{gridColumn: '1 / -1'}}>
                  <span className="label-text">Curated Amenities</span>
                  <motion.div variants={staggerList} initial="initial" whileInView="whileInView" className="amenity-tags">
                     {ryhanAmenities.map((item, idx) => (
                       <motion.span 
                         key={`ryhan-amenity-${idx}`} 
                         variants={revealPill} 
                         className="amenity-tag"
                         whileHover={{ y: -3, scale: 1.04 }}
                       >
                         <span className="amenity-icon">{item.icon}</span>
                         {item.title}
                       </motion.span>
                     ))}
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* ── 03. WHISPERING PINES ── */}
      <section ref={section3Ref} className="sticky-split-container project-watermark-wrap">
          <div className="project-watermark-num">03</div>

          <div className="sticky-left">
            <motion.img 
              src="/whispering-pines-hero.webp" 
              alt="Whispering Pines" 
              className="sticky-image" 
              style={{ y: y3, scale: scale3 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8 }}
            />
            <div style={{position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10}}>
               <motion.div 
                 className="status-badge badge-construction"
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.3 }}
               >
                  <span className="status-dot"></span> Under Construction
               </motion.div>
            </div>
         </div>

         <div className="scroll-right section-padding">
            <motion.div {...textFadeIn} className="project-header">
               <motion.div 
                 className="project-accent-line"
                 initial={{ width: 0 }}
                 whileInView={{ width: '80px' }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
               />
               <span className="subtitle" style={{ letterSpacing: '0.3em' }}>PROPOSAL 03</span>
               <h2 className="heading-primary" style={{fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: '0.5rem 0'}}>WHISPERING PINES</h2>
               <span className="label-text" style={{display:'flex', alignItems: 'center', gap: '0.5rem'}}>
                 <MapPin size={14} color="var(--accent-color)" /> Jaunapur, South Delhi (Near Mandi Road)
               </span>
            </motion.div>
            
            <motion.div {...textFadeIn} transition={{ delay: 0.2, duration: 1 }} className="project-body">
              <h3 className="heading-secondary" style={{fontSize: '1.8rem', marginBottom: '1.2rem'}}>Nature-Inspired Gated Sanctuary.</h3>
              <p className="body-text-large">
                Where nature whispers peace across majestic pine groves. An exclusive 3 BHK luxury society offering a resort-style swimming pool, clubhouse, see-through Otis/Schindler glass lifts, and 24x7 smart gated security.
              </p>
              <div style={{marginTop: '2.5rem'}}>
                <Link to="/property/whispering-pines" className="btn-project-cta">
                  <span>Explore Whispering Pines</span>
                  <ArrowUpRight size={18} className="cta-arrow" />
                </Link>
              </div>
            </motion.div>
            
            <div className="project-spec-grid">
               <motion.div 
                 className="spec-entry spec-entry-card"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 whileHover={{ y: -4 }}
               >
                  <span className="label-text">Configuration</span>
                  <h4>3BHK Luxury Society</h4>
               </motion.div>

               <motion.div 
                 className="spec-entry spec-entry-card"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.15 }}
                 whileHover={{ y: -4 }}
                 onClick={() => !revealedPrices['Whispering Pines'] && handleOpenModal('Whispering Pines')}
                 style={{ cursor: revealedPrices['Whispering Pines'] ? 'default' : 'pointer' }}
               >
                  <span className="label-text">Investment Portfolio</span>
                  <div className="hidden-price-block">
                     {revealedPrices['Whispering Pines'] ? (
                       <span style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--accent-color)', fontFamily: "'Playfair Display', serif" }}>
                         ₹ 1.75 Cr.
                       </span>
                     ) : (
                       <>
                         <span className="price-masked" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                           <KeyRound size={14} color="var(--accent-color)" /> Unlock Price (₹ 1.XX Cr.)
                         </span>
                         <div className="price-shimmer-bar"></div>
                       </>
                     )}
                  </div>
               </motion.div>

               <div className="spec-amenities" style={{gridColumn: '1 / -1'}}>
                  <span className="label-text">Curated Amenities</span>
                  <motion.div variants={staggerList} initial="initial" whileInView="whileInView" className="amenity-tags">
                     {whisperingAmenities.map((item, idx) => (
                       <motion.span 
                         key={`whispering-amenity-${idx}`} 
                         variants={revealPill} 
                         className="amenity-tag"
                         whileHover={{ y: -3, scale: 1.04 }}
                       >
                         <span className="amenity-icon">{item.icon}</span>
                         {item.title}
                       </motion.span>
                     ))}
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* ── CLOSING PRIVATE ACQUISITION BANNER ── */}
      <section className="portfolio-closing-banner">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="subtitle" style={{ letterSpacing: '0.35em' }}>BESPOKE COMMISSIONS</span>
            <h2 className="heading-primary" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: '1rem 0 1.5rem' }}>
              Begin Your Private Acquisition
            </h2>
            <p className="body-text-large" style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-muted)' }}>
              Looking for tailored builder floors or an exclusive plot development in South Delhi? Connect with our senior architectural executives.
            </p>
            <div className="closing-cta-group">
              <Link to="/contact" className="btn btn-solid" style={{ textDecoration: 'none' }}>
                Schedule Private Walkthrough
              </Link>
              <Link to="/journal" className="btn" style={{ textDecoration: 'none' }}>
                Read Architectural Journal
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Price Unlock Modal */}
      <PriceUnlockModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        propertyName={activeProperty}
        onUnlock={() => {
          setRevealedPrices(prev => ({ ...prev, [activeProperty]: true }));
          const idMap = {
            'The Crown': 'the-crown',
            'Ryhan Square': 'ryhan-square',
            'Whispering Pines': 'whispering-pines'
          };
          try { sessionStorage.setItem(`unlocked_${idMap[activeProperty]}`, 'true'); } catch (e) {}
        }}
      />
    </motion.div>
  );
};

export default Project;
