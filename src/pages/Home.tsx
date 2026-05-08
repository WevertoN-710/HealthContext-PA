import { SearchBar } from '../components/SearchBar'
import { CategoryFilter } from '../components/CategoryFilter'
import { useExpressoes } from '../hooks/useExpressoes'
import { useNavigate } from 'react-router-dom'

export function Home() {
    const { categorias, termoBusca, setTermoBusca } = useExpressoes()
    const navigate = useNavigate()

    function handleBuscar(valor: string) {
        setTermoBusca(valor)
    }

    function handleSubmitBusca(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter' && termoBusca.length > 1) {
            navigate(`/dicionario?busca=${encodeURIComponent(termoBusca)}`)
        }
    }

    function handleCategoria(id: string | null) {
        if (id) {
            navigate(`/dicionario?categoria=${id}`)
        } else {
            navigate('/dicionario')
        }
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4 bg-teal-50 dark:bg-gray-900 relative overflow-hidden">
            <div className="relative z-10 w-full max-w-2xl flex flex-col items-center gap-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-green-900 dark:text-green-400">
                        Dicionário MED-PA
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
                        Regionalismos médicos do estado do Pará
                    </p>
                </div>

                <div className="w-full">
                    <SearchBar
                        valor={termoBusca}
                        onChange={handleBuscar}
                        onKeyDown={handleSubmitBusca}
                        placeholder='Busque uma expressão (ex: "gastura", "baticum")...'
                    />
                </div>

                <div className="w-full">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 text-center">
                        Acesso rápido por categoria:
                    </p>
                    <CategoryFilter
                        categorias={categorias}
                        categoriaAtiva={null}
                        onSelecionar={handleCategoria}
                    />
                </div>

                <p className="text-xs text-gray-400 dark:text-gray-600 text-center">
                    Iniciativa: Estudantes de Medicina do Pará · Escalável para todo o Brasil
                </p>
            </div>
        </main>
    )
}