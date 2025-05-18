import Image from "next/image";
import './styles.css';
import EmailLink from './components/EmailLink';

export default function Home() {
  return (
    <div className="container fade-in">
      {/* Profile Section */}
      <header className="about_me">
        <div className="header">
          <Image src="/Container.png" alt="Profile" width={52} height={52} className="image" />
          <div className="name">
            <h1 className="header_name">Mohamed Siddique</h1>
            <p className="header_text">Engineer turned designer</p>
          </div>
        </div>
        <p className="white_text">
          I'm a product designer based in India. I design purposeful and playful digital experiences. Over the years, I've worked at the intersection of utility and delight, shaping products that reach millions across consumer and enterprise companies.
        </p>
        <p className="white_text">
          Currently, I design in the Teams for Education space at Microsoft. Previously, I've designed key projects at Zepto, Flipkart, and Freshworks.
        </p>
        {/* Social Links */}
        <div className="section" aria-label="Social links">
          <div className="list links">
            <div className="links">
              <a className="list-item link" href="#">
                X <span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg>
                </span>
              </a>
              <a className="list-item link" href="#">
                LinkedIn <span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg>
                </span>
              </a>
              <EmailLink />
            </div>
          </div>
        </div>
      </header>

        {/* Work Experience */}
        <section className="section fade-in" aria-labelledby="work-heading">
          <h2 id="work-heading" className="subtext">Work</h2>
          <div className="list">
            <a className="list-item" href="#">
              <span className="white_text">Microsoft</span>
              <span className="dash"></span>
              <span className="subtext">Product Designer II</span>
              <span className="light_text year">2024—{'\u00A0\u00A0\u00A0\u00A0'}</span>
            </a>
            <a className="list-item" href="#">
              <span className="white_text">Zepto</span>
              <span className="dash"></span>
              <span className="subtext">Senior Product Designer</span>
              <span className="light_text year">2024—24</span>
            </a>
            <a className="list-item" href="#">
              <span className="white_text">Flipkart</span>
              <span className="dash"></span>
              <span className="subtext">Product Designer II</span>
              <span className="light_text year">2022—24</span>
            </a>
            <a className="list-item" href="#">
              <span className="white_text">Freshworks</span>
              <span className="dash"></span>
              <span className="subtext">Product Designer</span>
              <span className="light_text year">2019—22</span>
            </a>
            <a className="list-item" href="#">
              <span className="white_text">MaidSafe</span>
              <span className="dash"></span>
              <span className="subtext">Product Designer</span>
              <span className="light_text year">2018—19</span>
            </a>
          </div>
        </section>

        {/* Side Projects */}
        <section className="section fade-in" aria-labelledby="side-projects-heading">
          <h2 id="side-projects-heading" className="subtext">Side projects</h2>
          <div className="list">
            <a className="list-item" href="#">
              <span className="white_text">Currency formatter [Figma plugin]</span>
              <span className="dash"></span>
            </a>
            <a className="list-item" href="#">
              <span className="white_text">Layer sweeper [Figma plugin]</span>
              <span className="dash"></span>
            </a>
            <a className="list-item" href="#">
              <span className="white_text">20px icons</span>
              <span className="dash"></span>
            </a>
          </div>
        </section>

        {/* Experiments */}
        <section className="section fade-in" aria-labelledby="other-works-heading">
          <h2 id="other-works-heading" className="subtext">Other works</h2>
          <div className="list">
            <a className="list-item" href="#">
              <span className="white_text">Illustrations</span>
              <span className="dash"></span>
            </a>
            <a className="list-item" href="#">
              <span className="white_text">Digital art</span>
              <span className="dash"></span>
            </a>
            <a className="list-item" href="#">
              <span className="white_text">3D renders</span>
              <span className="dash"></span>
            </a>
          </div>
        </section>

      {/* Footer */}
      <footer className="list-item">
        <p className="light_text"> © 2025 Mohamed Siddique</p>
        <p className="light_text">India</p>
      </footer>
    </div>
  );
}
