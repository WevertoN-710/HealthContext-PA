import { supabase } from '../lib/supabase'
import type {Expressao, Categoria, Regiao} from '../types'

// Busca todas as expressões e categorias
export async function getExpressoes(): Promise<Expressao[]> {
    const { data, error } = await supabase
        .from('expressao')
        .select(`
      *,
      categorias:expressao_categoria(
        categoria(*)
      ),
      regioes:expressao_regiao(
        regiao(*)
      )
    `)
        .order('termo_local')

    if (error) {
        console.error('Erro ao buscar expressões:', error)
        return []
    }

    return data.map((item: any) => ({
        ...item,
        categorias: item.categorias?.map((ec: any) => ec.categoria) ?? [],
        regioes: item.regioes?.map((er: any) => er.regiao) ?? [],
    }))
}

// Busca uma expressão específica pelo ID
export async function getExpressaoById(id: string): Promise<Expressao | null> {
    const { data, error } = await supabase
        .from('expressao')
        .select(`
      *,
      categorias:expressao_categoria(
        categoria(*)
      ),
      regioes:expressao_regiao(
        regiao(*)
      )
    `)
        .eq('id', id)
        .single()

    if (error) {
        console.error('Erro ao buscar expressão:', error)
        return null
    }

    return {
        ...data,
        categorias: data.categorias?.map((ec: any) => ec.categoria) ?? [],
        regioes: data.regioes?.map((er: any) => er.regiao) ?? [],
    }
}

// Busca todas as categorias
export async function getCategorias(): Promise<Categoria[]> {
    const { data, error } = await supabase
        .from('categoria')
        .select('*')
        .order('nome')

    if (error) {
        console.error('Erro ao buscar categorias:', error)
        return []
    }

    return data
}

// Busca todas as regiões
export async function getRegioes(): Promise<Regiao[]> {
    const { data, error } = await supabase
        .from('regiao')
        .select('*')
        .order('nome')

    if (error) {
        console.error('Erro ao buscar regiões:', error)
        return []
    }

    return data
}