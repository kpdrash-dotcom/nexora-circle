"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [darkMode]);

  return (
    <main className="page">
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">
          <Image
            src="/logo.png"
            alt="NeXora Circle"
            width={80}
            height={80}
          />
          <span>NeXora Circle</span>
        </div>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>

          
        </ul>

        <button
          className="themeBtn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "◐" : "◑"}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/logo.png"
          alt="NeXora Circle Logo"
          width={800}
          height={800}
          className="heroLogo"
          priority
        />

        <h1>
          NeXora <span>Circle</span>
        </h1>

        <p>
          Building modern digital experiences through
          marketing, branding, web development and
          innovative business solutions.
        </p>

        <div className="buttons">
          <Link href="/contact">
            <button className="primaryBtn">
              Start Your Project with Us
            </button>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2 className="sectionTitle">
          Our Services
        </h2>

        <div className="serviceGrid">
          <div className="card">
            <h3>💻 Web Development</h3>

            <p>
              Fast, responsive and modern websites
              designed for growth.
            </p>
          </div>

          <div className="card">
            <h3>📈 Digital Marketing</h3>

            <p>
              Data-driven strategies that generate
              leads and increase visibility.
            </p>
          </div>

          <div className="card">
            <h3>🎨 Branding & Design</h3>

            <p>
              Create an unforgettable identity that
              stands out in the market.
            </p>
          </div>

          <div className="card">
            <h3>📱 Social Media</h3>

            <p>
              Build a stronger online presence through
              engaging content strategies.
            </p>
          </div>

          <div className="card">
            <h3>🚀 SEO Optimization</h3>

            <p>
              Improve rankings and drive organic
              traffic to your business.
            </p>
          </div>

          <div className="card">
            <h3>🤖 AI Automation</h3>

            <p>
              Automate processes and save time with
              smart digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* pkg */}

      <section className="packages">
  <h2 className="sectionTitle">
    Packages from Us
  </h2>

  <div className="packageGrid">

    <div className="packageCard starter">
      <span className="packageTag">Birthday Webs</span>

      <h3>Rs. 30,000</h3>
      <span className="duration">/ -</span>

      <ul>
        <li>✓ Facebook Management</li>
        <li>✓ Instagram Management</li>
        <li>✓ 10 Creative Posts</li>
        <li>✓ 4 Reels</li>
        <li>✓ Captions & Hashtags</li>
        <li>✓ Basic Strategy</li>
      </ul>

      <button className="packageBtn">
        Choose Starter
      </button>
    </div>

    <div className="packageCard growth featured">
      <span className="packageTag">Annivesary Webs</span>

      <h3>Rs. 75,000</h3>
      <span className="duration">/ -</span>

      <ul>
        <li>✓ Facebook Management</li>
        <li>✓ Instagram Management</li>
        <li>✓ TikTok Management</li>
        <li>✓ 16 Creative Posts</li>
        <li>✓ Content Scripts</li>
        <li>✓ Community Management</li>
      </ul>

      <button className="packageBtn">
        Choose Growth
      </button>
    </div>

    <div className="packageCard professional">
      <span className="packageTag">CURRENTLY NOT AVALIABLE</span>

      <h3>Rs. 00 000</h3>
      <span className="duration">/ -</span>

      <ul>
        <li>✓ --</li>
        <li>✓ --</li>
        <li>✓ --</li>
        <li>✓ --</li>
        <li>✓ --</li>
        <li>✓ --</li>
      </ul>

      <button className="packageBtn">
        --
      </button>
    </div>

  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <Image
          src="/logo.png"
          alt="NeXora Circle"
          width={100}
          height={100}
        />

        <h3>NeXora Circle</h3>

        <p>
          Building powerful digital experiences for
          ambitious brands.
        </p>

        <div className="footerLinks">
          <a
            href="https://instagram.com/nexoracircle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.webp"
              alt="Instagram"
              width={60}
              height={60}
            />
          </a>

          <a
            href="https://wa.me/94700000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/whatsapp.webp"
              alt="WhatsApp"
              width={60}
              height={60}
            />
          </a>

          <a
            href="https://tiktok.com/@nexoracircle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/tiktok.webp"
              alt="TikTok"
              width={40}
              height={40}
            />
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} NeXora Circle.
          All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}