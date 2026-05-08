import { Sun, Moon, Menu } from 'lucide-react'

interface HeaderProps {
    darkMode: boolean
    toggleDarkMode: () => void
    toggleMenu: () => void
}

export function Header({ darkMode, toggleDarkMode, toggleMenu }: HeaderProps) {
    return (
        <header className="bg-green-900 dark:bg-gray-900 text-white px-4 py-3 flex items-center justify-between shadow-lg">

            <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-green-800 dark:hover:bg-gray-700 transition-colors"
                aria-label="Abrir menu"
            >
                <Menu size={22} />
            </button>

            <div className="flex flex-col items-center">
        <span className="text-xs tracking-widest text-green-300 uppercase">
          Dicionário
        </span>
                <span className="text-xl font-bold tracking-wide">
          MED-PA
        </span>
            </div>

            <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-green-800 dark:hover:bg-gray-700 transition-colors"
                aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
                {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>

        </header>
    )
}