import { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const glowRef = useRef(null);
  const dotRef = useRef(null);
  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  useEffect(() => {
    // Only enable on non-touch devices
    if ('ontouchstart' in window) return;

    const glow = glowRef.current;
    const dot = dotRef.current;
    if (!glow || !dot) return;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    let rafId;
    const animate = () => {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      glow.style.transform = `translate(${glowX - 200}px, ${glowY - 200}px)`;
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const onMouseEnterLink = () => {
      glow.style.opacity = '0.25';
      glow.style.transform += ' scale(1.5)';
    };
    const onMouseLeaveLink = () => { glow.style.opacity = '0.12'; };

    document.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      {/* Large lagging glow */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 176, 130, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 998,
          opacity: 0.12,
          transition: 'opacity 0.5s ease',
          willChange: 'transform',
        }}
      />
      {/* Precise dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--accent-color)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CursorGlow;
