import { useState, useEffect } from 'react'
import type {Expressao, Categoria} from '../types'
import { getExpressoes, getCategorias } from '../services/expressaoService'
import Fuse from 'fuse.js'

export function useExpressoes() {
    const [expressoes, setExpressoes] = useState<Expressao[]>([])
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [termoBusca, setTermoBusca] = useState('')
    const [categoriaFiltro, setCategoriaFiltro] = useState<string | null>(null)
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        async function carregar() {
            setCarregando(true)
            const [exps, cats] = await Promise.all([
                getExpressoes(),
                getCategorias()
            ])
            setExpressoes(exps)
            setCategorias(cats)
            setCarregando(false)
        }
        carregar()
    }, [])

    // Configuração da busca inteligente com Fuse.js
    const fuse = new Fuse(expressoes, {
        keys: ['termo_local', 'significado_medico', 'descricao_detalhada'],
        threshold: 0.4, // 0 = exato, 1 = qualquer coisa
    })

    // Aplica busca e filtro por categoria
    const expressoesFiltradas = (() => {
        let resultado = termoBusca
            ? fuse.search(termoBusca).map(r => r.item)
            : expressoes

        if (categoriaFiltro) {
            resultado = resultado.filter(e =>
                e.categorias?.some(c => c.id === categoriaFiltro)
            )
        }

        return resultado
    })()

    return {
        expressoes: expressoesFiltradas,
        categorias,
        carregando,
        termoBusca,
        setTermoBusca,
        categoriaFiltro,
        setCategoriaFiltro,
    }
}