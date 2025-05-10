import { useState } from "react";
import "./Playground.css";
import { Link } from "react-router-dom";

const effects = [
  "glitch",
  "bounce",
  "fade",
  "skew",
  "blur-pop",
  "typewriter",
  "smoke",
  "shatter",
  "particles",
  "color-morph",
];

const Playground = () => {
  const [effect, setEffect] = useState("");

  const handleClick = () => {
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    setEffect(randomEffect);
  };

  return (
    <div className={"playground-container"} onDoubleClick={handleClick}>
      <h3 className={`coming-soon-next ${effect}`}>
        Double <br /> Tap
      </h3>
      <h6>Playground Notice</h6>
      <p>
        We’re cooking up something amazing for the AniX Playground! While the
        full interactive experience is still in the works, we’ve added a few fun
        effects for you to enjoy in the meantime. Feel free to click around and
        explore — and stay tuned, the real magic is coming soon!
      </p>
      <Link to="/">
        <button className="cta-button-playground">Back to Home</button>
      </Link>
    </div>
  );
};

export default Playground;
