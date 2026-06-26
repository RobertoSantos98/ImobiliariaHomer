import { Building2, ChevronRight, Eye, Trophy, BanknoteArrowUp, Laugh, User } from "lucide-react"
import { cn } from "../../utils/cn"

export function Hero() {
  // Prática recomendada: Isolar dados repetitivos em arrays para limpar o JSX
  const stats = [
    { icon: Trophy, value: "10+", label: "Anos de Experiência" },
    { icon: BanknoteArrowUp, value: "500+", label: "Imóveis Vendidos" },
    { icon: Laugh, value: "98%", label: "Clientes Satisfeitos" },
  ]

  const avaliacoes = [
    { name: "Teste" },
    { name: "Ricardo" },
    { name: "Wesley" },
    { name: "Anderson" },
  ];

  return (
    <section className={cn("relative overflow-hidden min-h-[calc(100dvh-64px)] flex items-center")}>

      {/* 1. BACKGROUND & OVERLAY */}
      <div className="absolute inset-0 bg-slate-900">
        <img
          className="w-full h-full object-cover opacity-90 md:opacity-100"
          src="https://png.pngtree.com/thumb_back/fw800/background/20251130/pngtree-futuristic-circular-eco-house-with-solar-panels-on-grassy-hill-overlooking-image_20655102.webp"
          alt="Casa ecológica futurista sustentável"
        />
        {/* Gradiente adaptativo: Transiciona verticalmente no mobile e horizontalmente no desktop */}
        <div className="absolute inset-0 z-10 bg-linear-to-b from-yellow-50/95 via-yellow-50/80 to-transparent md:bg-linear-to-r md:from-yellow-50 md:via-yellow-50/90 md:via-50% md:to-transparent" />
      </div>

      {/* 2. CONTEÚDO PRINCIPAL (GRID RESPONSIVO) */}
      <div className="max-w-7xl mx-auto w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-12 md:py-2 z-20 relative">

        {/* COLUNA ESQUERDA: TEXTOS E CTAs */}
        <div className="flex flex-col gap-6 items-start max-w-2xl">

          {/* Badge */}
          <div className="inline-flex bg-emerald-900/10 text-emerald-900 font-bold text-xs md:text-sm items-center gap-2 rounded-xl px-4 py-2 border border-emerald-900/10">
            <Building2 className="h-4 w-4 text-emerald-900" />
            Encontre sua casa perfeita
          </div>

          {/* Títulos Responsivos */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tight text-slate-900 font-medium">
              Encontre sua
            </h1>
            <span className="block text-4xl sm:text-5xl md:text-7xl text-emerald-900 font-black tracking-tight">
              Casa dos Sonhos
            </span>
          </div>

          <p className="text-lg md:text-xl text-emerald-950/70 leading-relaxed">
            Nós ajudamos você a encontrar a propriedade perfeita que cabe no seu bolso e nos seus sonhos.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-emerald-900 hover:bg-emerald-950 text-yellow-50 flex py-3 px-6 gap-3 items-center justify-center font-bold rounded-2xl transition-all active:scale-98 shadow-lg shadow-emerald-900/20">
              Explorar Catálogo
              <div className="bg-amber-50 rounded-full p-1">
                <ChevronRight className="h-4 w-4 text-emerald-900" />
              </div>
            </button>

            <button className="w-full sm:w-auto text-emerald-900 hover:text-emerald-950 flex items-center justify-center gap-3 font-bold text-sm transition-colors group py-3">
              <div className="rounded-full border border-emerald-900/30 bg-white/50 group-hover:bg-white p-2 transition-all">
                <Eye className="h-5 w-5 text-emerald-900" />
              </div>
              Assista Agora
            </button>
          </div>

          {/* Seção de Avaliações / Social Proof */}
          <div className="flex flex-col gap-2 items-start mt-2">
            <span className="text-xs text-emerald-900/60 font-black tracking-widest uppercase pl-1">
              Avaliações
            </span>

            <div className="flex items-center gap-4">
              {/* O container pai agora gerencia o empilhamento negativo com '-space-x-3' */}
              <div className="flex -space-x-3 items-center">
                {avaliacoes.map((pessoa, index) => (
                  <div
                    key={index} // 1. FIX: Adicionada a propriedade key obrigatória
                    title={pessoa.name} // Acessibilidade: mostra o nome ao passar o mouse
                    className="h-10 w-10 bg-white/90 backdrop-blur-xs flex items-center justify-center rounded-full border-2 border-yellow-100 shadow-md shadow-emerald-950/5 shrink-0 transition-transform hover:scale-110 hover:z-30 cursor-pointer"
                  >
                    <User className="w-5 h-5 text-emerald-900/80" />
                  </div>
                ))}
              </div>

              {/* Texto de suporte alinhado */}
              <div className="flex flex-col text-emerald-900 leading-none">
                <span className="text-xl font-black tracking-tight">50+</span>
                <span className="text-[10px] font-bold text-emerald-900/50 uppercase tracking-wider mt-0.5">
                  Clientes Felizes
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* COLUNA DIREITA: CARD DE ESTATÍSTICAS */}
        <div className="flex justify-center lg:justify-end items-end w-full h-full">
          <div className="bg-white/80 backdrop-blur-md border border-white/40 rounded-3xl p-6 w-full sm:w-auto lg:max-w-xs shadow-xl shadow-emerald-950/5 flex flex-col gap-4">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-emerald-900/10 text-emerald-900">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col text-emerald-950">
                    <span className="text-3xl font-black tracking-tight">{item.value}</span>
                    <span className="text-xs font-semibold text-emerald-900/60 uppercase tracking-wider">{item.label}</span>
                  </div>
                </div>
                {/* Linha divisória entre os itens (menos no último) */}
                {index < stats.length - 1 && (
                  <div className="h-px bg-emerald-950/10 w-full" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}