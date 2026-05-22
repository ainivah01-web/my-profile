import { useState } from 'react'
import { ProfileCard } from './components/profile-card'
import { Navbar } from './components/navbar'
import { About } from './components/about'
import './components/profile-card.css'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home')

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="app">
      <Navbar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      <main className="main-content">
        {currentPage === 'home' ? (
          <ProfileCard
            name="ivaa"
            bio="Mahasiswa Ilmu Komputer yang suka membangun sesuatu. Sedang mendalami React, TypeScript, dan DevOps."
            skills={['React', 'TypeScript', 'Node.js', 'Git']}
            avatarUrl="./iva.jpg"
            githubUrl="https://github.com/ainivah01-web"
          />
        ) : (
          <About onBackToHome={() => setCurrentPage('home')} />
        )}
      </main>
    </div>
  )
}

export default App

