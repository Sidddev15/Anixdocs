import { useState } from 'react';
import { Link } from 'react-router-dom';
import animationCategories from '../../data/animationCategories';
import './AnimationsGallery.css';

export default function AnimationsGallery() {
  const [activeCategory, setActiveCategory] = useState('Fade');
  const [triggeredAnim, setTriggeredAnim] = useState(null);
  const [copiedClass, setCopiedClass] = useState(null);

  const handleAnimationClick = (animClass) => {
    setTriggeredAnim(animClass);
    setTimeout(() => setTriggeredAnim(null), 1900);
  };

  const handleCopy = (anim) => {
    navigator.clipboard.writeText(`class="${anim}"`);
    setCopiedClass(anim);
    setTimeout(() => setCopiedClass(null), 2000);
  };

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-white"><button className='cta-button' style={{ marginBottom: "25px" }}>Back</button></Link>
          <nav className="gallery-tabs">
            {Object.keys(animationCategories).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`tab-button ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <h2 className="gallery-heading">{activeCategory} Animations</h2>

      <div className="animation-grid">
        {animationCategories[activeCategory].map((anim) => {
          const isActive = triggeredAnim === anim;
          return (
            <div key={anim} className="animation-card">
              <h3 className="text-xl font-bold text-white anim-heading">{anim}</h3>
              <p className="text-sm anim-description">
                Apply the class <code>{anim}</code> to your element to trigger this animation.
                Click the demo box to preview it. Copy the class to use it.
              </p>
              {/* <div className="anim-box">AniX</div> */}
              <div
                className={`demo-box ${isActive ? anim : ''}`}
                onClick={() => handleAnimationClick(anim)}
              ></div>
              <button
                onClick={() => handleCopy(anim)}
                className={`copy-button ${copiedClass === anim ? 'copied' : ''}`}
              >
                {copiedClass === anim ? 'Copied!' : 'Copy Class'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
