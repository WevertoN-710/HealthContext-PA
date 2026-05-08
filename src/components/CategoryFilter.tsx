import type { Categoria } from '../types'

interface CategoryFilterProps {
    categorias: Categoria[]
    categoriaAtiva: string | null
    onSelecionar: (id: string | null) => void
}

export function CategoryFilter({
                                   categorias,
                                   categoriaAtiva,
                                   onSelecionar,
                               }: CategoryFilterProps) {
    return (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">

            <button
                onClick={() => onSelecionar(null)}
                className={`
          flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium
          transition-colors border-2
          ${categoriaAtiva === null
                    ? 'bg-green-800 text-white border-green-800'
                    : 'bg-white dark:bg-gray-800 text-green-800 dark:text-green-400 border-green-700 dark:border-green-600 hover:bg-green-50 dark:hover:bg-gray-700'
                }
        `}
            >
                Todas
            </button>

            {categorias.map(categoria => (
                <button
                    key={categoria.id}
                    onClick={() => onSelecionar(categoria.id)}
                    className={`
            flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium
            transition-colors border-2 flex items-center gap-2
            ${categoriaAtiva === categoria.id
                        ? 'bg-green-800 text-white border-green-800'
                        : 'bg-white dark:bg-gray-800 text-green-800 dark:text-green-400 border-green-700 dark:border-green-600 hover:bg-green-50 dark:hover:bg-gray-700'
                    }
          `}
                >
                    <span>{categoria.icone}</span>
                    <span>{categoria.nome}</span>
                </button>
            ))}

        </div>
    )
}