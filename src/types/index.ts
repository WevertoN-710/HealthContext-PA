export interface Categoria {
    id: string
    nome: string
    icone: string | null
}

export interface Regiao {
    id: string
    nome: string
    estado: string
}

export interface Expressao {
    id: string
    termo_local: string
    significado_medico: string
    descricao_detalhada: string | null
    estado: string
    audio_url: string | null
    created_at: string
    categorias?: Categoria[]
    regioes?: Regiao[]
}

export interface ExpressaoCategoria {
    expressao_id: string
    categoria_id: string
}

export interface ExpressaoRegiao {
    expressao_id: string
    regiao_id: string
}