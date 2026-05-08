import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Dicionario } from './pages/Dicionario'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode))
  }, [darkMode])

  function toggleDarkMode() {
    setDarkMode(prev => !prev)
  }

  function toggleMenu() {
    setMenuAberto(prev => !prev)
  }

  return (
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-teal-50 dark:bg-gray-900 transition-colors">
          <BrowserRouter>
            <Header
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                toggleMenu={toggleMenu}
            />

            {menuAberto && (
                <div className="fixed inset-0 z-50 flex" onClick={() => setMenuAberto(false)}>
                  <div className="w-72 h-full bg-white dark:bg-gray-800 shadow-2xl p-6 flex flex-col gap-4" onClick={e => e.stopPropagation()}>
                    <h2 className="text-xl font-bold text-green-900 dark:text-green-400">Menu</h2>
                    <nav className="flex flex-col gap-2">
                      <a href="/" className="px-4 py-3 rounded-lg hover:bg-teal-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium" onClick={() => setMenuAberto(false)}>Inicio</a>
                      <a href="/dicionario" className="px-4 py-3 rounded-lg hover:bg-teal-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium" onClick={() => setMenuAberto(false)}>Dicionario</a>
                    </nav>
                    <div className="mt-auto text-xs text-gray-400 dark:text-gray-600">Dicionario MED-PA v1.0.0</div>
                  </div>
                </div>
            )}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dicionario" element={<Dicionario />} />
            </Routes>

          </BrowserRouter>
        </div>
      </div>
  )
}