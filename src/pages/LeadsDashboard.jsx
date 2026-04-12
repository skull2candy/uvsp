import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Copy, CheckCircle, Search, RefreshCw, LogIn } from 'lucide-react';
import { pageVariants } from '../utils/animations';
import SEO from '../components/SEO';
import '../pages/Pages.css';

const LeadsDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessKey, setAccessKey] = useState('');
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (accessKey === 'UVSP-2026') {
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      alert('Invalid Executive Access Key');
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/leads', {
        headers: { 'x-admin-key': 'UVSP-2026' }
      });
      const data = await response.json();
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error('Fetch leads failed', err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const exportToCSV = () => {
    const headers = ['Date', 'Name', 'Email', 'Phone', 'Property', 'Message'];
    const rows = leads.map(l => [
      new Date(l.created_at).toLocaleDateString(),
      l.name,
      l.email,
      l.phone,
      l.property_interest,
      l.message.replace(/,/g, ';') // evade csv break
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n" 
      + rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `UVSP_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter(l => 
    l.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    l.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.property_interest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <motion.div 
        variants={pageVariants}
        initial="initial"
        animate="animate"
        className="page-wrapper dashboard-login-gate"
        style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '2rem'}}
      >
        <SEO title="Admin Login" description="Secure executive access to UVSP leads." />
        <div className="glass login-card" style={{padding: '4rem', maxWidth: '450px', width: '100%', textAlign: 'center'}}>
          <div className="icon-wrap" style={{marginBottom: '2rem', display: 'flex', justifyContent: 'center'}}>
             <LogIn size={48} strokeWidth={1} color="var(--accent-color)" />
          </div>
          <h2 className="heading-secondary" style={{marginBottom: '1rem'}}>Executive Access</h2>
          <p className="body-text" style={{opacity: 0.6, marginBottom: '2.5rem'}}>Enter your secret key to manage client inquiries.</p>
          <form onSubmit={handleLogin} className="elite-form">
            <input 
              type="password" 
              className="luxury-input" 
              placeholder="Access Key" 
              required 
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value)}
              style={{textAlign: 'center', letterSpacing: '0.4em'}}
            />
            <button type="submit" className="btn luxury-submit-btn w-full" style={{marginTop: '2rem'}}>
              Verify Identity
            </button>
          </form>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="page-wrapper dashboard-main"
      style={{paddingTop: '8rem', minHeight: '100vh', paddingBottom: '6rem'}}
    >
      <SEO title="Leads Dashboard" description="Manage property inquiries." />
      <div className="container" style={{maxWidth: '1200px'}}>
        
        {/* DASHBOARD HEADER */}
        <div className="dashboard-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem'}}>
          <div>
            <span className="subtitle">Real-Time Management</span>
            <h1 className="heading-secondary" style={{fontSize: '3rem', marginTop: '0.5rem'}}>Inquiry Vault</h1>
            <p className="body-text" style={{opacity: 0.6}}>{leads.length} active leads secured in database.</p>
          </div>
          
          <div className="dashboard-actions" style={{display: 'flex', gap: '1rem'}}>
             <div className="search-bar glass" style={{display: 'flex', alignItems: 'center', padding: '0 1.5rem', borderRadius: '4px'}}>
               <Search size={18} style={{opacity: 0.5}} />
               <input 
                 type="text" 
                 placeholder="Search Leads..." 
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 style={{background: 'none', border: 'none', color: '#fff', padding: '1rem', outline: 'none', fontSize: '0.9rem'}}
               />
             </div>
             <button onClick={fetchLeads} className="btn-icon glass" title="Refresh">
               <RefreshCw size={20} className={loading ? 'spin' : ''} />
             </button>
             <button onClick={exportToCSV} className="btn-icon glass" title="Export to CSV">
               <Download size={20} />
             </button>
          </div>
        </div>

        {/* LEADS TABLE */}
        <div className="leads-table-container glass" style={{overflowX: 'auto', borderRadius: '4px'}}>
          <table className="leads-table" style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left'}}>
            <thead>
              <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                <th style={{padding: '1.5rem 2rem', fontSize: '0.75rem', letterSpacing: '0.1em', opacity: 0.5}}>DATE</th>
                <th style={{padding: '1.5rem 2rem', fontSize: '0.75rem', letterSpacing: '0.1em', opacity: 0.5}}>CLIENT</th>
                <th style={{padding: '1.5rem 2rem', fontSize: '0.75rem', letterSpacing: '0.1em', opacity: 0.5}}>CONTACT</th>
                <th style={{padding: '1.5rem 2rem', fontSize: '0.75rem', letterSpacing: '0.1em', opacity: 0.5}}>PROPERTY</th>
                <th style={{padding: '1.5rem 2rem', fontSize: '0.75rem', letterSpacing: '0.1em', opacity: 0.5}}>MESSAGE</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="lead-row" style={{borderBottom: '1px solid rgba(255,255,255,0.02)', transition: 'background 0.3s ease'}}>
                  <td style={{padding: '2rem', fontSize: '0.9rem', opacity: 0.8}}>{new Date(lead.created_at).toLocaleDateString()}</td>
                  <td style={{padding: '2rem'}}>
                    <div style={{fontWeight: '500'}}>{lead.name}</div>
                  </td>
                  <td style={{padding: '2rem'}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem'}}>
                      <div className="copyable" onClick={() => copyToClipboard(lead.email, `e-${lead.id}`)}>
                        {lead.email} {copiedId === `e-${lead.id}` ? <CheckCircle size={12} color="var(--accent-color)" /> : <Copy size={12} style={{opacity: 0.3}} />}
                      </div>
                      <div className="copyable" onClick={() => copyToClipboard(lead.phone, `p-${lead.id}`)}>
                        {lead.phone} {copiedId === `p-${lead.id}` ? <CheckCircle size={12} color="var(--accent-color)" /> : <Copy size={12} style={{opacity: 0.3}} />}
                      </div>
                    </div>
                  </td>
                  <td style={{padding: '2rem'}}>
                    <span style={{fontSize: '0.8rem', padding: '0.4rem 0.8rem', background: 'rgba(197, 160, 89, 0.1)', color: 'var(--accent-color)', borderRadius: '2px', border: '1px solid rgba(197, 160, 89, 0.2)'}}>
                      {lead.property_interest}
                    </span>
                  </td>
                  <td style={{padding: '2rem', maxWidth: '300px'}}>
                    <p style={{fontSize: '0.9rem', opacity: 0.6, lineHeight: '1.5'}}>{lead.message}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredLeads.length === 0 && (
            <div style={{padding: '4rem', textAlign: 'center', opacity: 0.3}}>
              No inquiries found matching your criteria.
            </div>
          )}
        </div>

      </div>

      <style>{`
        .lead-row:hover { background: rgba(255, 255, 255, 0.01); }
        .copyable { cursor: pointer; display: flex; align-items: center; gap: 0.5rem; transition: color 0.3s ease; }
        .copyable:hover { color: var(--accent-color); }
        .btn-icon { background: none; border: none; color: #fff; cursor: pointer; height: 50px; width: 50px; display: flex; alignItems: center; justifyContent: center; transition: all 0.3s ease; }
        .btn-icon:hover { background: rgba(255,255,255,0.05); color: var(--accent-color); transform: translateY(-2px); }
        .spin { animation: spinHeader 1s linear infinite; }
        @keyframes spinHeader { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </motion.div>
  );
};

export default LeadsDashboard;
