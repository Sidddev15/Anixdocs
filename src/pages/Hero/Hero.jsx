import './Hero.css';
import { Link } from 'react-router-dom';
import AnixLogo from '../../assets/AnixLogo.png';

function Hero() {
    return (
        <div className='hero-container'>
            <div className="headline-subtext-container">
                <p className='headline anix-fade-in'>Bring Your Projects to Life.</p>
                <p className='subtext anix-fade-in'>AniX is a modern animation library focused on expressive, smooth, and customizable hover effects that go beyond the basics.</p>
                <div className="cta-button-container anix-swipe-reveal">
                    <Link to="/docs"><button className='cta-button'>Get Started</button></Link>
                    <Link to="/playground"><button className='cta-button'>Playground</button></Link>
                    <button className='cta-button'><a href="https://github.com/Sidddev15/Anix" target='_blank'>View on GitHub</a></button>
                </div>
            </div>
            <div className="animated-projections-container anix-drop-in">
                <a href="https://www.npmjs.com/package/@siddsr/anix" target='_blank'><img src={AnixLogo} alt="AnixLogo" /></a>
            </div>
        </div>
    );
}

export default Hero;