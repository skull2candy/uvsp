import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

const PriceUnlockModal = ({ isOpen, onClose, propertyName, onUnlock }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    try {
      const response = await fetch(`${API_BASE_URL}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          message: `Price requested for ${propertyName}`,
          property_interest: propertyName,
        }),
      });

      if (response.ok) {
        onUnlock();
        onClose();
      }
    } catch (error) {
      console.error('Error unlocking price:', error);
      alert('Technical error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          <motion.div 
            className="modal-content glass"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button className="close-modal" onClick={onClose}><X size={24} /></button>
            
            <div className="modal-header">
              <span className="subtitle">Private Acquisition</span>
              <h2 className="heading-secondary">Unlock Pricing</h2>
              <p className="body-text">Please provide your details to receive the private investment portfolio for {propertyName}.</p>
            </div>

            <form onSubmit={handleSubmit} className="elite-form">
              <div className="form-group">
                <input 
                  type="text" 
                  className="luxury-input" 
                  placeholder="Full Name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  className="luxury-input" 
                  placeholder="Email Address" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  className="luxury-input" 
                  placeholder="Phone Number" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <button type="submit" className="btn luxury-submit-btn w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Requesting...' : 'Reveal Investment Price'}
              </button>
            </form>
          </motion.div>
        </div>
      )}

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 2rem;
        }
        .modal-content {
          width: 100%;
          max-width: 500px;
          padding: 3.5rem;
          position: relative;
          background: rgba(20, 20, 20, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .close-modal {
          position: absolute;
          top: 1.5rem; right: 1.5rem;
          background: none; border: none;
          color: #fff; opacity: 0.5;
          cursor: pointer;
          transition: opacity 0.3s;
        }
        .close-modal:hover { opacity: 1; }
        .modal-header { margin-bottom: 2.5rem; text-align: center; }
        .modal-header h2 { font-size: 2rem; margin: 1rem 0; }
        .modal-header .body-text { opacity: 0.6; font-size: 0.95rem; }
      `}</style>
    </AnimatePresence>
  );
};

export default PriceUnlockModal;
