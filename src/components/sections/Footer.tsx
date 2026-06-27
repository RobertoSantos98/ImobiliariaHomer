import { ChevronRight, Building2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-yellow-50 py-12 md:py-16 relative overflow-hidden border-t border-emerald-900/5">

      
      <div className="absolute right-0 bottom-0 h-full w-full sm:w-1/2 z-10">
        <img 
          className="object-cover w-full h-full opacity-40 sm:opacity-100" 
          src="https://arquiteturadavila.com.br/wp-content/uploads/2026/06/01-featured-fachada-casa-alto-padrao-contemporanea-pedra-madeira.jpg" 
          alt="Interior de uma casa moderna iluminada pelo sol" 
        />
        
        <div className="absolute inset-0 bg-linear-to-b from-yellow-50 via-yellow-50/95 to-yellow-50/90 sm:bg-linear-to-r sm:from-yellow-50 sm:via-yellow-50/90 sm:to-transparent" />
      </div>

      
      <div className="max-w-7xl mx-auto z-20 relative px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
        
        
        <div className="flex flex-col space-y-6 py-12 sm:py-8 items-start max-w-lg">
          
          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl text-emerald-950 font-black tracking-tight leading-tight">
              Pronto para escolher sua casa dos Sonhos?
            </h3>
            <p className="text-base text-slate-600 font-medium">
              Faremos da sua jornada um sucesso absoluto.
            </p>
          </div>

          <button className="w-full sm:w-auto bg-emerald-900 hover:bg-emerald-950 text-yellow-50 py-4 px-6 rounded-2xl flex gap-3 font-bold items-center justify-center transition-all hover:scale-102 active:scale-98 shadow-xl shadow-emerald-950/20 cursor-pointer group">
            Marque uma Consultoria
            <div className="bg-amber-50 rounded-full p-1 transition-transform group-hover:translate-x-0.5">
              <ChevronRight className="h-4 w-4 text-emerald-900" />
            </div>
          </button>
        </div>
        
        {/* Coluna da Direita: Espaço vazio no desktop reservado para a imagem respirar */}
        <div className="hidden sm:block h-48" />

      </div>

      {/* 3. RODAPÉ DE DIREITOS AUTORAIS (Copyright) */}
      <div className="max-w-7xl mx-auto z-20 relative px-6 md:px-8 mt-12 sm:mt-8 pt-6 border-t border-emerald-900/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-emerald-900/40 uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-emerald-900/40" />
          <span>Imobiliária Homer &copy; {new Date().getFullYear()}</span>
        </div>
        <span>Todos os direitos reservados.</span>
      </div>

    </footer>
  )
}