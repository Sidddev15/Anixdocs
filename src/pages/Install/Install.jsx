import "./Install.css";
import {Link} from 'react-router-dom';

export default function Install() {
  return (
    <>
      <div className="documentation-container">
      <Link to= '/'><button className="cta-button">Back to home</button></Link>
        <h4>AniX Installation & Usage Guide</h4>
        <p>
          AniX is a modern CSS animation library designed to add expressive and
          delightful hover interactions to your UI components. Whether you're
          building dashboards, landing pages, or interactive portfolios — AniX
          gives your buttons, cards, and links that extra wow factor.
        </p>
        <div className="border-bottom"></div>
        <h4>Installing AniX</h4>
        <h5>Option 1: Install via NPM</h5>
        <p>
          If you're using modern tools like Webpack, Vite, Next.js, or any build
          setup:
        </p>
        <pre>
          <code>npm i @siddsr/anix</code>
        </pre>
        <p>Then import it into your entry CSS file:</p>
        <pre>
          <code>import '@siddsr/anix/dist/anix.min.css';</code>
        </pre>
        <h6 className="caption">
          ✅ Works with all modern frameworks like React, Angular, Vue, Svelte,
          and more.
        </h6>
        <h4>Option 2: Use via CDN (No Build Setup Required)</h4>
        <p>
          Just add the stylesheet link in your HTML <code>&lt;head&gt;</code>:
        </p>
        <pre>
          <code>
            &lt;link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@siddsr/anix@latest/dist/anix.min.css"&gt;{" "}
          </code>
        </pre>
        <p>This is ideal for prototypes, CodePens, or static HTML sites.</p>
        <h4>Basic Usage</h4>
        <p>
          Once installed, simply apply the AniX class to your element. For
          example:
        </p>
        <pre>
          <code>
            &lt;button class="anix-slide-reveal"&gt;Hover Me&lt;/button&gt;
          </code>
        </pre>
        <p>
          You can mix and match AniX classes with your own utility styles or
          frameworks like Tailwind or Bootstrap.
        </p>
        <div className="border-bottom"></div>
        <h4>Animation Categories</h4>
        <p>AniX animations are grouped into several intuitive categories:</p>
        <ul>
          <li>Color Fills: anix-fill-top, anix-fill-center, etc.</li>
          <li>Slide Reveals: anix-swipe-reveal, anix-slide-left, etc.</li>
          <li>Transform Effects: anix-zoom-in, anix-tilt, anix-flip-x</li>
          <li>Border & Shadow: anix-border-grow, anix-glow, etc.</li>
          <li>Text Transitions: anix-type, anix-split, etc.</li>
        </ul>
        <div className="border-bottom"></div>
        <h4>Customizing Animations (coming soon)</h4>
        <p>AniX aims to support:</p>
        <ul>
          <li>Animation speed control via utility classes</li>
          <li>Custom easing</li>
          <li>Tagging & filtering animations</li>
          <li>Theme-aware animations (light/dark mode)</li>
        </ul>
        <p>Stay tuned for customization utilities and configuration support.</p>

        <h4>Using @keyframes Directly (Advanced)</h4>
        <p>
          If you prefer direct control, you can use AniX’s keyframes in your
          custom classes:
        </p>
        <pre>
          <code>
            {`
                .my-hover-card:hover {
                    animation: anixSwipeReveal 0.5s ease forwards;
                }
            `}
          </code>
        </pre>
        <p>All animations are built with clean, scoped keyframe names — so there's no conflict with your existing styles.</p>
        <div className="border-bottom"></div>
        <h4>Pro Tips</h4>
        <ul>
            <li>Use will-change: transform; for better performance on GPU-accelerated animations.</li>
            <li>Avoid animating width, height, or top/left for better FPS — stick to transform and opacity.</li>
            <li>Combine AniX with Tailwind, Bootstrap, or Chakra UI seamlessly.</li>
        </ul>
        <div className="border-bottom"></div>
        <h4>Contributing</h4>
        <p>Help us grow AniX! Head to <a href="https://github.com/Sidddev15/Anix" target="_blank">GitHub</a> to:</p>
        <ul>
            <li>Suggest new animations</li>
            <li>Report bugs or edge cases</li>
            <li>Create pull requests</li>
        </ul>
        <div className="border-bottom"></div>
        <h4>Example</h4>
        <pre>
            <code>
            &lt;button class="anix-slide-reveal px-4 py-2 bg-black text-white rounded-md"&gt;
                Hover Me
            &lt;/button&gt;
            </code>
        </pre>
        <p>That's it — you're animating with AniX! </p>
      <Link to= '/animation-gallery'><button className="cta-button">Animation Gallery</button></Link>
      </div>
    </>
  );
}
