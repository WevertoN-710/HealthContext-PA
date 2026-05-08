import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchBar } from '../components/SearchBar'
import { CategoryFilter } from '../components/CategoryFilter'
import { ExpressaoCard } from '../components/ExpressaoCard'
import { ExpressaoDetail } from '../components/ExpressaoDetail'
import { useExpressoes } from '../hooks/useExpressoes'
import type { Expressao } from '../types'

export function Dicionario() {
    const [searchParams] = useSearchParams()
    const {
        expressoes,
        categorias,
        carregando,
        termoBusca,
        setTermoBusca,
        categoriaFiltro,
        setCategoriaFiltro,
    } = useExpressoes()

    const [expressaoSelecionada, setExpressaoSelecionada] = useState<Expressao | null>(null)
    const [mostrarDetalhe, setMostrarDetalhe] = useState(false)

    useEffect(() => {
        const categoriaParam = searchParams.get('categoria')
        const buscaParam = searchParams.get('busca')

        if (categoriaParam) {
            setCategoriaFiltro(categoriaParam)
        }
        if (buscaParam) {
            setTermoBusca(buscaParam)
        }
    }, [searchParams])

    function handleSelecionarExpressao(expressao: Expressao) {
        setExpressaoSelecionada(expressao)
        setMostrarDetalhe(true)
    }

    function handleFecharDetalhe() {
        setMostrarDetalhe(false)
    }

    return (
        <div className="flex flex-col h-[calc(100vh-64px)] bg-teal-50 dark:bg-gray-900">
            <div className="px-4 py-3 bg-white dark:bg-gray-800 shadow-sm flex flex-col gap-3">
                <SearchBar valor={termoBusca} onChange={setTermoBusca} />
                <CategoryFilter
                    categorias={categorias}
                    categoriaAtiva={categoriaFiltro}
                    onSelecionar={setCategoriaFiltro}
                />
            </div>

            <div className="flex flex-1 overflow-hidden">
                <div className={`flex flex-col w-full md:w-2/5 lg:w-1/3 border-r border-gray-200 dark:border-gray-700 overflow-y-auto bg-teal-50 dark:bg-gray-900 ${mostrarDetalhe ? 'hidden md:flex' : 'flex'}`}>
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            {carregando ? 'Carregando...' : `${expressoes.length} expressão(ões) encontrada(s)`}
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 p-3">
                        {carregando ? (
                            Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="h-24 rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse" />
                            ))
                        ) : expressoes.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <span className="text-5xl mb-3">🔍</span>
                                <p className="text-gray-500 dark:text-gray-400 font-medium">Nenhuma expressão encontrada</p>
                                <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">Tente outro termo ou categoria</p>
                            </div>
                        ) : (
                            expressoes.map(expressao => (
                                <ExpressaoCard
                                    key={expressao.id}
                                    expressao={expressao}
                                    selecionada={expressaoSelecionada?.id === expressao.id}
                                    onClick={() => handleSelecionarExpressao(expressao)}
                                />
                            ))
                        )}
                    </div>
                </div>

                <div className={`flex-1 bg-white dark:bg-gray-800 ${mostrarDetalhe ? 'flex' : 'hidden md:flex'}`}>
                    <ExpressaoDetail expressao={expressaoSelecionada} onFechar={handleFecharDetalhe} />
                </div>
            </div>
        </div>
    )
}