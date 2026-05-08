import { X, MapPin, Tag } from 'lucide-react'
import type { Expressao } from '../types'

interface ExpressaoDetailProps {
    expressao: Expressao | null
    onFechar: () => void
}

export function ExpressaoDetail({ expressao, onFechar }: ExpressaoDetailProps) {
    if (!expressao) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <span className="text-6xl mb-4">🩺</span>
                <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                    Selecione uma expressão
                </h3>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                    Clique em um termo da lista para ver seu significado médico detalhado.
                </p>
            </div>
        )
    }

    return (
        <div className="p-6 h-full overflow-y-auto">

            {/* Botão fechar — visível apenas no mobile */}
            <button
                onClick={onFechar}
                className="md:hidden mb-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700"
            >
                <X size={16} />
                Voltar à lista
            </button>

            {/* Termo principal */}
            <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-green-700 dark:text-green-400 font-medium mb-1">
                    Termo Local
                </p>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {expressao.termo_local}
                </h2>
            </div>

            {/* Significado médico */}
            <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-green-700 dark:text-green-400 font-medium mb-2">
                    Significado Médico
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                    {expressao.significado_medico}
                </p>
            </div>

            {/* Descrição detalhada */}
            {expressao.descricao_detalhada && (
                <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-green-700 dark:text-green-400 font-medium mb-2">
                        Descrição
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {expressao.descricao_detalhada}
                    </p>
                </div>
            )}

            {/* Categorias */}
            {expressao.categorias && expressao.categorias.length > 0 && (
                <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-green-700 dark:text-green-400 font-medium mb-2 flex items-center gap-1">
                        <Tag size={12} />
                        Categorias
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {expressao.categorias.map(cat => (
                            <span
                                key={cat.id}
                                className="
                  px-3 py-1 rounded-full text-sm font-medium
                  bg-green-100 dark:bg-green-900/50
                  text-green-800 dark:text-green-300
                  flex items-center gap-1
                "
                            >
                <span>{cat.icone}</span>
                <span>{cat.nome}</span>
              </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Regiões */}
            {expressao.regioes && expressao.regioes.length > 0 && (
                <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-green-700 dark:text-green-400 font-medium mb-2 flex items-center gap-1">
                        <MapPin size={12} />
                        Regiões de Uso
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {expressao.regioes.map(reg => (
                            <span
                                key={reg.id}
                                className="
                  px-3 py-1 rounded-full text-sm
                  bg-amber-100 dark:bg-amber-900/30
                  text-amber-800 dark:text-amber-300
                "
                            >
                {reg.nome}
              </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Estado */}
            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-400 dark:text-gray-500">
                    Estado de origem: <span className="font-medium">{expressao.estado}</span>
                </p>
            </div>

        </div>
    )
}