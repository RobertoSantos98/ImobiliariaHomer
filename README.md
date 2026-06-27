# 🏡 Imobiliária Homer — Landing Page Premium

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Uma Landing Page moderna, elegante e totalmente responsiva desenvolvida para uma imobiliária fictícia com foco em propriedades de alto padrão e construções eco-sustentáveis. O projeto foi construído do zero utilizando as melhores práticas de componentização do React e a performance do Tailwind CSS v4.

---

## 🚀 Principais Recursos e Diferenciais

* **Design Atômico & Modular:** Código altamente faturado e limpo, isolando componentes de UI genéricos de seções estruturais.
* **Filtro de Busca Dinâmico:** Sistema de abas clicáveis integrado com o estado do React (`useState`) para filtragem instantânea de propriedades (Venda/Aluguel) sem recarregamento de página.
* **Social Proof Avançado:** Bloco de "Prova Social" com avatares empilhados nativamente via Tailwind CSS e micro-interações de destaque ao passar o mouse (`hover:scale-110`).
* **100% Responsivo & Mobile-First:** Layout fluido que se adapta perfeitamente de telas de smartphones compactos a monitores ultra-wide.
* **Acessibilidade & SEO:** Uso rigoroso de tags semânticas do HTML5 (`<header>`, `<nav>`, `<main>`, `<footer>`, `<h2>`) e atributos de acessibilidade para leitores de tela.

---

## 🛠️ Stack Tecnológica

| Tecnologia | Finalidade | Principais Recursos Usados |
| :--- | :--- | :--- |
| **React 19** | Biblioteca Base | Hooks (`useState`), renderização de listas dinâmicas (`.map()`, `.filter()`). |
| **Vite** | Build Tool & Bundler | Hot Module Replacement (HMR) ultrarrápido para desenvolvimento instantâneo. |
| **Tailwind CSS v4** | Estilização | Configuração em folha de estilo nativa, gradientes adaptativos, variáveis CSS dinâmicas. |
| **TypeScript** | Tipagem Estática | Interfaces rígidas para propriedades de componentes (`Props`), prevenindo bugs em produção. |
| **Lucide React** | Iconografia | Ícones vetoriais modernos, limpos e escaláveis de alta performance. |

---

## 📁 Estrutura do Projeto

A arquitetura de pastas segue o padrão de **Separação de Responsabilidades**, facilitando a escalabilidade:

src/
├── components/
│   ├── layout/           # Componentes estruturais globais
│   │   └── Header.tsx
│   ├── sections/         # As grandes dobras da página (Landing Page)
│   │   ├── Agentes.tsx
│   │   ├── Hero.tsx
│   │   ├── Recomendados.tsx
│   │   └── Footer.tsx
│   └── ui/               # Componentes visuais atômicos e reutilizáveis
│       ├── FilterProperty.tsx
│       └── PropertyCard.tsx
├── utils/
│   └── cn.ts             # Utilitário para combinação condicional de classes Tailwind
├── App.tsx               # Orquestrador principal da aplicação
├── index.css             # Importação global do Tailwind v4
└── main.tsx              # Ponto de entrada do React no DOM

---

## 📦 Como Executar o Projeto Localmente

Certifique-se de ter o **Node.js** instalado em sua máquina antes de prosseguir.

1. Clone o repositório:
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Entre no diretório do projeto:
   cd nome-do-repositorio

3. Instale as dependências:
   npm install

4. Inicie o servidor de desenvolvimento:
   npm run dev
   (O projeto estará disponível no endereço indicado no terminal, geralmente http://localhost:5173)

5. Para build de produção:
   npm run build

---

## 📝 Licença

Este projeto foi desenvolvido exclusivamente para fins de estudo e portfólio, estando sob a licença MIT. Sinta-se livre para clonar, modificar e utilizar o código conforme suas necessidades.

---
Desenvolvido com 💚 por Roberto Santos
