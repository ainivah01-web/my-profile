import { SunIcon, MoonIcon } from './icons'
import './navbar.css'

interface NavbarProps {
  currentPage: 'home' | 'about'
  onPageChange: (page: 'home' | 'about') => void
  isDark: boolean
  toggleTheme: () => void
}

export function Navbar({ currentPage, onPageChange, isDark, toggleTheme }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => onPageChange('home')}>
        ivaa.dev
      </div>
      <div className="navbar-links">
        <button
          className={`navbar-link ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => onPageChange('home')}
        >
          Home
        </button>
        <button
          className={`navbar-link ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => onPageChange('about')}
        >
          About
        </button>
      </div>
      <div className="navbar-actions">
        <button 
          className="navbar-theme-toggle" 
          onClick={toggleTheme} 
          aria-label="Toggle theme"
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  )
}
