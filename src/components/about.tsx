import { GitHubIcon } from './icons'
import './about.css'

interface AboutProps {
  onBackToHome: () => void
}

export function About({ onBackToHome }: AboutProps) {
  return (
    <div className="about-card">
      <div className="about-header">
        <h1 className="about-title">Tentang Saya</h1>
      </div>
      <div className="about-body">
        <section className="about-intro">
          <h2>
            <span role="img" aria-label="wave">👋</span> Halo, saya Ivaa
          </h2>
          <p>
            Saya adalah seorang mahasiswa Ilmu Komputer yang memiliki minat besar dalam dunia pengembangan web 
            dan teknologi. Saya senang mempelajari hal baru, memecahkan masalah melalui kode, serta merancang 
            antarmuka pengguna yang menarik, interaktif, dan responsif.
          </p>
        </section>

        <div className="about-grid">
          <section className="about-section">
            <h3>Pendidikan</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">2023 - Sekarang</div>
                <div className="timeline-title">S1 Ilmu Komputer</div>
                <div className="timeline-desc">Fokus pada rekayasa perangkat lunak dan pemrograman web.</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2020 - 2023</div>
                <div className="timeline-title">SMA Negeri (MIPA)</div>
                <div className="timeline-desc">Aktif dalam kegiatan akademik dan pengenalan dasar teknologi informasi.</div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h3>Minat & Fokus</h3>
            <div className="interest-list">
              <div className="interest-item">
                <span className="interest-icon">💻</span>
                <span>Frontend Development (React, TypeScript, CSS)</span>
              </div>
              <div className="interest-item">
                <span className="interest-icon">⚙️</span>
                <span>Backend & Database (Node.js, PostgreSQL)</span>
              </div>
              <div className="interest-item">
                <span className="interest-icon">🎨</span>
                <span>UI/UX Design & Glassmorphism</span>
              </div>
              <div className="interest-item">
                <span className="interest-icon">🚀</span>
                <span>DevOps & Git Version Control</span>
              </div>
            </div>
          </section>
        </div>

        <section className="contact-section">
          <h3>Mari Terkoneksi</h3>
          <div className="contact-links">
            <a href="https://github.com/ainivah01-web" target="_blank" rel="noreferrer" className="contact-btn">
              <GitHubIcon />
              GitHub
            </a>
            <a href="mailto:ainivah01@example.com" className="contact-btn">
              <span style={{ fontSize: '18px', marginRight: '4px' }}>📧</span>
              Email
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-btn">
              <span style={{ fontSize: '18px', marginRight: '4px' }}>💼</span>
              LinkedIn
            </a>
          </div>
        </section>

        <div style={{ textAlign: 'center' }}>
          <button className="back-to-home-btn" onClick={onBackToHome}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  )
}
