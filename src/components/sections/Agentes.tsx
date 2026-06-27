import { Phone, UsersRound } from 'lucide-react'

export function Agentes() {
  const corretores = [
    { id: 1, nome: "Jussara", tel: "11 91234-5678", cargo: "Diretora Comercial", img: "https://img.magnific.com/fotos-gratis/empresario-loiros-expressao-feliz_1194-3866.jpg" },
    { id: 2, nome: "Martinez", tel: "11 91234-5678", cargo: "Consultor de Alto Padrão", img: "https://www.ibresp.com.br/wp-content/uploads/2025/09/www.ibresp.com.br-por-que-o-corretor-de-imoveis-e-a-profissao-da-moda-02.-por-que-corretor-de-imoveis-e-a-profissao-da-moda.jpg" },
    { id: 3, nome: "Pedro", tel: "11 91234-5678", cargo: "Gestor Financeiro", img: "https://www.ibresp.com.br/wp-content/uploads/2024/03/www.ibresp.com.br-o-que-faz-e-o-que-e-um-corretor-de-imoveis-o-que-e-um-corretor-de-imoveis-1280x720.jpg" },
    { id: 4, nome: "Milena", tel: "11 91234-5678", cargo: "Especialista em Leilões", img: "https://img.freepik.com/fotos-premium/mulher-agente-imobiliaria-segurando-uma-casa-de-brinquedo-isolada-no-fundo-branco-fazendo-o-proximo-gesto_1368-288709.jpg?semt=ais_hybrid&w=740&q=80" },
  ]

  return (
    <section id="equipe" className="bg-yellow-50/60 py-16 sm:py-24">
      {/* Ajustado px para conter melhor o grid em telas menores */}
      <div className="max-w-7xl mx-auto flex flex-col gap-12 px-6 sm:px-8">
        
        {/* SEMÂNTICA: Mudado para h2 para SEO e acessibilidade */}
        <div className="flex flex-col items-center text-center gap-2 w-full">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-900 bg-emerald-900/5 px-3 py-1 rounded-full">
            Especialistas
          </span>
          <h2 className="text-3xl md:text-4xl text-emerald-900 font-black tracking-tight">
            Conheça Nossa Equipe
          </h2>
        </div>

        {/* Ajustado gap para 6 ou 8 (padrão de design system) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corretores.map((c) => (
            <AgentCard key={c.id} nome={c.nome} img={c.img} tel={c.tel} cargo={c.cargo} />
          ))}
        </div>

      </div>
    </section>
  )
}


type AgentCardProps = {
  nome: string
  img: string
  cargo: string
  tel: string
}

export function AgentCard({ nome, img, cargo, tel }: AgentCardProps) {
  return (
    <div className="group bg-white rounded-3xl p-6 flex flex-col items-center text-center border border-emerald-900/5 hover:-translate-y-1 duration-300 hover:shadow-xl hover:shadow-emerald-950/5 transition-all">
      
      
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-emerald-900/10 p-1 bg-yellow-50/50 mb-2">
        <img 
          src={img} 
          alt={`Foto do corretor ${nome}`} // Acessibilidade para leitores de tela
          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300" 
        />
      </div>

      
      <div className="flex flex-col items-center">
        <h3 className="text-xl text-emerald-900 font-bold tracking-tight">{nome}</h3>
        
        <div className="text-slate-500 text-xs font-medium flex gap-2 items-center mt-1">
          <UsersRound className="w-3.5 h-3.5 text-emerald-600" />
          <span>{cargo}</span>
        </div>
      </div>

      <div className="h-px bg-slate-100 w-full my-2" />

    
      <a 
        href={`tel:${tel.replace(/\s+/g, '')}`}
        className="text-slate-600 hover:text-emerald-900 text-xs font-semibold flex gap-2 items-center py-1.5 px-3 rounded-xl bg-slate-50 hover:bg-emerald-900/5 transition-colors w-full justify-center group/btn"
      >
        <Phone className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-emerald-700 transition-colors" />
        {tel}
      </a>
    </div>
  )
}