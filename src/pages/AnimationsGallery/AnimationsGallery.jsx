import { useState } from 'react';
import './AnimationsGallery.css';
import { Link } from 'react-router-dom';

const animationCategories = {
  'Fade': ['anix-fade-in', 'anix-fade-in-up', 'anix-fade-in-down', 'anix-fade-in-left', 'anix-fade-in-right', 'anix-fade-in-scale', 'anix-fade-in-rotate', 'anix-fade-out-down', 'anix-fade-out-left', 'anix-fade-out-right', 'anix-fade-out-scale', 'anix-fade-out-up', 'anix-fade-out'],
  'Slide': ['anix-slide-in-up', 'anix-slide-in-down', 'anix-slide-in-left', 'anix-slide-in-right', 'anix-slide-in-blur', 'anix-slide-out-down', 'anix-slide-out-left', 'anix-slide-out-right', 'anix-slide-out-up'],
  'Zoom / Scale': ['anix-zoom-in', 'anix-zoom-in-up', 'anix-zoom-in-down','anix-zoom-out-down', 'anix-zoom-out-up', 'anix-zoom-out', 'anix-scale-center', 'anix-scale-top-left', 'anix-scale-top-right', 'anix-scale-out', ],
  'Rotate / Flip': ['anix-rotate-in', 'anix-rotate-up-left', 'anix-rotate-down-right', 'anix-rotate-out-down-left', 'anix-rotate-out-up-right', 'anix-rotate-out' , 'anix-flip-x', 'anix-flip-y', 'anix-flip-out-x', 'anix-flip-out-y'],
  'Bounce': ['anix-bounce', 'anix-bounce-in', 'anix-bounce-in-left', 'anix-bounce-in-down', 'anix-bounce-infinite', 'anix-bounce-out'],
  'Specialty': ['anix-roll-in', 'anix-contract-out', 'anix-grow-in', 'anix-drop-in', 'anix-curtain-reveal', 'anix-drop-out', 'anix-flash', 'anix-grow-in', 'anix-head-shake', 'anix-heart-beat', 'anix-hero-fade-in-delay', 'anix-hero-zoom-in', 'anix-jello', 'anix-pop-in', 'anix-pulse', 'anix-rubber-band','anix-shake-x', 'anix-shake-y', 'anix-shake', 'anix-shrink-out', 'anix-stretch-y', 'anix-swing', 'anix-swipe-reveal', 'anix-tada', 'anix-wiggle' ],
};

const AnimationsGallery = () => {
  const [activeCategory, setActiveCategory] = useState('Fade');
  const [triggeredAnim, setTriggeredAnim] = useState(null);
  const [copiedClass, setCopiedClass] = useState(null);

  const handleAnimationClick = (animClass) => {
    setTriggeredAnim(animClass);
    setTimeout(() => setTriggeredAnim(null), 1900); // remove after 1s
  };

  const handleCopy = (anim) => {
    navigator.clipboard.writeText(`class="${anim}"`);
    setCopiedClass(anim);
    setTimeout(() => setCopiedClass(null), 2000)
  }

  return (
    <div className="gallery-container">
      <Link to="/"><button className='cta-button'>Back to home</button></Link>
      <h2 className="gallery-heading">AniX Animation Gallery</h2>
      <div className="gallery-tabs">
        {Object.keys(animationCategories).map((cat) => (
          <button
            key={cat}
            className={`tab-button ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="animation-grid">
        {animationCategories[activeCategory].map((anim) => {
          const isActive = triggeredAnim === anim;
          return (
            <div className="animation-card" key={anim}>
              <div
                className={'anim-box'}
              >
                AniX
              </div>
              <div
                className={`demo-box ${isActive ? anim : ''}`}
                onClick={() => handleAnimationClick(anim)}
              ></div>
              <p>{anim}</p>
              <button
                className={`copy-button ${copiedClass === anim ? 'copied' : ''}`}
                onClick={() => handleCopy(anim)}
              >
                {copiedClass === anim ? 'Copied!' : 'Copy Class'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimationsGallery;
