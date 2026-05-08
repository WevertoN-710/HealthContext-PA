import type { Expressao } from '../types'

interface ExpressaoCardProps {
    expressao: Expressao
    selecionada: boolean
    onClick: () => void
}

export function ExpressaoCard({
                                  expressao,
                                  selecionada,
                                  onClick,
                              }: ExpressaoCardProps) {
    return (
        <div
            onClick={onClick}
            className={`
        p-4 rounded-xl cursor-pointer transition-all border-2
        ${selecionada
                ? 'bg-green-50 dark:bg-green-900/30 border-green-700 dark:border-green-500 shadow-md'
                : 'bg-white dark:bg-gray-800 border-transparent hover:border-green-300 dark:hover:border-green-700 hover:shadow-sm'
            }
      `}
        >
            <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">
                        {expressao.termo_local}
                    </h3>
                    <p className="text-green-800 dark:text-green-400 text-sm mt-1">
                        {expressao.significado_medico}
                    </p>
                </div>

                <span className="text-xl mt-1">
          {expressao.categorias?.[0]?.icone ?? '📋'}
        </span>
            </div>

            {expressao.categorias && expressao.categorias.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                    {expressao.categorias.map(cat => (
                        <span
                            key={cat.id}
                            className="
                text-xs px-2 py-0.5 rounded-full
                bg-green-100 dark:bg-green-900/50
                text-green-800 dark:text-green-300
              "
                        >
              {cat.nome}
            </span>
                    ))}
                </div>
            )}
        </div>
    )
}