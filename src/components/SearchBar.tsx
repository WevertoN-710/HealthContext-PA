import { Search, X } from 'lucide-react'

interface SearchBarProps {
    valor: string
    onChange: (valor: string) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    placeholder?: string
}

export function SearchBar({ valor, onChange, onKeyDown, placeholder }: SearchBarProps) {
    return (
        <div className="relative w-full">
            <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700 dark:text-green-400"
            />
            <input
                type="text"
                value={valor}
                onChange={e => onChange(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder={placeholder ?? 'Busque uma expressão regional do Pará...'}
                className="
          w-full pl-12 pr-10 py-3 rounded-full
          border-2 border-green-700 dark:border-green-600
          bg-white dark:bg-gray-800
          text-gray-800 dark:text-gray-100
          placeholder-gray-400 dark:placeholder-gray-500
          focus:outline-none focus:border-yellow-500
          transition-colors text-base shadow-sm
        "
            />
            {valor && (
                <button
                    onClick={() => onChange('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    aria-label="Limpar busca"
                >
                    <X size={18} />
                </button>
            )}
        </div>
    )
}