```markdown
#  Dicionário MED-PA

Sistema web de regionalismos médicos do estado do Pará, desenvolvido para auxiliar médicos e estudantes de medicina na comunicação com pacientes do interior durante consultas e ações de saúde.

---

##  Sobre o Projeto

Pacientes do interior do Pará utilizam expressões regionais para descrever sintomas, dores e sensações que muitas vezes são desconhecidas por profissionais de saúde de outras regiões. O **Dicionário MED-PA** traduz essas expressões para a terminologia médica formal, reduzindo a barreira linguística no atendimento.

**Exemplo:** o termo *"gastura"* significa náusea/mal-estar gástrico; *"baticum"* significa palpitação cardíaca.

---

##  Acesso

**Deploy em produção:** https://health-context-pa-pwa.vercel.app

---

##  Tecnologias Utilizadas

| Camada         | Tecnologia              |
|----------------|-------------------------|
| Frontend       | React 19 + TypeScript   |
| Build          | Vite 8                  |
| Estilização    | Tailwind CSS 3          |
| Roteamento     | React Router DOM        |
| Busca          | Fuse.js (busca fuzzy)   |
| Banco de Dados | PostgreSQL via Supabase |
| Deploy         | Vercel                  |
| Versionamento  | Git + GitHub            |

---



```
#  Estrutura do Projeto
## src/
## ├── components/         Componentes reutilizáveis
### │   ├── Header.tsx
### │   ├── SearchBar.tsx
### │   ├── CategoryFilter.tsx
### │   ├── ExpressaoCard.tsx
### │   └── ExpressaoDetail.tsx
## ├── pages/              Telas da aplicação
### │   ├── Home.tsx
### │   └── Dicionario.tsx
## ├── hooks/              Lógica reutilizável
### │   └── useExpressoes.ts
## ├── services/           Camada de acesso a dados (DAO)
### │   └── expressaoService.ts
## ├── lib/                Configurações externas
### │   └── supabase.ts
### └── types/              Interfaces TypeScript
### └── index.ts
```

---

## ️ Como Executar Localmente

**Pré-requisitos:** Node.js 20+ e npm instalados.

**1. Clone o repositório:**
```
git clone https://github.com/WevertoN-710/HealthContext-PA.git
cd HealthContext-PA
```

**2. Instale as dependências:**
```
npm install
```

**3. Configure as variáveis de ambiente:**

Crie um arquivo `.env.local` na raiz do projeto:
```
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_KEY=sua_chave_anon_do_supabase
```

**4. Inicie o servidor de desenvolvimento:**
```
npm run dev
```

Acesse: http://localhost:5173

---

##  Banco de Dados

O sistema utiliza PostgreSQL hospedado no Supabase com 5 tabelas:

- **expressao** — termos regionais e seus significados médicos
- **categoria** — classificações semânticas (Dores, Sintomas, etc.)
- **regiao** — áreas geográficas do Pará
- **expressao_categoria** — relacionamento N:N entre expressão e categoria
- **expressao_regiao** — relacionamento N:N entre expressão e região

---

##  Funcionalidades

- Busca inteligente com tolerância a erros de digitação
- Filtro por categoria com persistência via URL
- Painel de detalhes com descrição clínica completa
- Dark mode persistente
- Layout responsivo para mobile, tablet e desktop

---

##  Melhorias Futuras

- Painel administrativo para cadastro de expressões
- Mapa interativo do Pará com filtro por região
- Áudio de pronúncia das expressões
- Expansão para outros estados brasileiros
- PWA completo para instalação como app nativo

---

##  Autor

Desenvolvido por **Weverton A. Catão**
Disciplina: Engenharia de Software II

---

*Iniciativa: Estudantes de Medicina do Pará*
```