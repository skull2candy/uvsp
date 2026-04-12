import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Droplets, Hammer, Cpu, MapPin } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  {
    id: 1,
    icon: <Shield size={24} strokeWidth={1} />,
    title: 'Uncompromised Quality',
    desc: 'Rare Italian marbles and precision fittings.',
    bgImage: '/wcu-1.png'
  },
  {
    id: 2,
    icon: <Award size={24} strokeWidth={1} />,
    title: 'Architectural Brilliance',
    desc: 'Award-winning design philosophy emphasizing light.',
    bgImage: '/wcu-2.png'
  },
  {
    id: 3,
    icon: <Droplets size={24} strokeWidth={1} />,
    title: 'Sustainable Luxury',
    desc: 'Integrating green technologies seamlessly.',
    bgImage: '/wcu-3.png'
  },
  {
    id: 4,
    icon: <Hammer size={24} strokeWidth={1} />,
    title: 'Bespoke Craftsmanship',
    desc: 'Masterwork joinery with unparalleled attention.',
    bgImage: '/wcu-4.png'
  },
  {
    id: 5,
    icon: <Cpu size={24} strokeWidth={1} />,
    title: 'Smart-Home Ecosystem',
    desc: 'Biometric security and ambient intelligence.',
    bgImage: '/wcu-5.png'
  },
  {
    id: 6,
    icon: <MapPin size={24} strokeWidth={1} />,
    title: 'Exclusive Locales',
    desc: 'Mastery of New Delhi’s heritage sectors.',
    bgImage: '/wcu-6.png'
  }
];

const WhyChooseUs = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="section-padding kinetic-wcu-section">
      <div className="container">
        
        <motion.div 
          className="wcu-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="subtitle">The UVSP Standard</span>
          <h2 className="heading-secondary">Why Choose Us</h2>
        </motion.div>

        <div className="accordion-container-six">
          {features.map((feature) => {
            const isActive = activeId === feature.id;
            
            return (
              <motion.div 
                key={feature.id}
                layout
                onClick={() => setActiveId(feature.id)}
                onHoverStart={() => setActiveId(feature.id)}
                className={`accordion-panel ${isActive ? 'active' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.8 },
                  y: { duration: 0.8 }
                }}
              >
                {/* Background Image Layer */}
                <div className="panel-bg" style={{ backgroundImage: `url(${feature.bgImage})` }}></div>
                <div className="panel-overlay"></div>

                {/* Content Container */}
                <motion.div className="panel-content" layout="position">
                  <div className="panel-icon-wrap">
                    {feature.icon}
                  </div>
                  
                  <motion.div className="panel-text-block" layout="position">
                    <h3 className="panel-title">{feature.title}</h3>
                    
                    <motion.p 
                      className="panel-desc"
                      initial={false}
                      animate={{ 
                        opacity: isActive ? 1 : 0, 
                        height: isActive ? 'auto' : 0,
                        marginTop: isActive ? '1rem' : 0
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {feature.desc}
                    </motion.p>
                  </motion.div>
                </motion.div>
                
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
