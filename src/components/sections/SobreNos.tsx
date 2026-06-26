import { House, Tag, Key, Sliders } from 'lucide-react'
import { FilterProperty } from "../ui/FilterProperty";

export function SobreNos() {
  // Prática Recomendada (DRY): Centralizar dados repetitivos em uma estrutura de array
  const serviços = [
    {
      id: "comprar",
      icon: House,
      title: "Comprar um Imóvel",
      description: "Encontre a morada perfeita dentro do nosso acervo exclusivo de alto padrão."
    },
    {
      id: "vender",
      icon: Tag,
      title: "Vender um Imóvel",
      description: "Avaliação precisa e anúncios estratégicos para vender pelo melhor valor."
    },
    {
      id: "alugar",
      icon: Key,
      title: "Alugar um Imóvel",
      description: "Processo rápido, digital e totalmente seguro para proprietários e inquilinos."
    },
    {
      id: "gerenciar",
      icon: Sliders,
      title: "Gerenciamento de Bens",
      description: "Cuidamos de toda a burocracia e manutenção do seu patrimônio imobiliário."
    }
  ];

  return (
    // Adicionado preenchimento (padding) vertical para a seção respirar
    <section className="bg-yellow-50/60 py-16 lg:py-0 lg:pb-24 ">
      {/* Garantindo margens laterais seguras com px-6 */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Componente de Filtro Flutuante */}
        <FilterProperty />

        {/* Títulos de chamada da seção */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className='text-xs font-bold text-emerald-900 tracking-widest uppercase bg-emerald-900/5 px-3 py-1 rounded-full'>
            Nossos Serviços
          </span>
          <h2 className='text-3xl md:text-4xl text-emerald-900 font-black tracking-tight'>
            Soluções Completas é Aqui
          </h2>
        </div>

        {/* GRID RESPONSIVO: Substitui o 'flex gap-2' que quebrava telas menores */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch'>
          
          {/* BLOCO DA IMAGEM (Responsiva) */}
          <div className="rounded-3xl overflow-hidden shadow-xl shadow-emerald-950/5 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
            <img 
              src="https://tarkett.com.br/blog/wp-content/uploads/2025/08/ambientada-24387002-scaled.jpg" 
              alt="Sala de estar moderna e sofisticada" 
              className="w-full h-full object-cover hover:scale-102 transition-transform duration-500" 
            />
          </div>

          {/* BLOCO DOS CARDS DE SERVIÇO */}
          <div className='flex flex-col justify-between bg-white border border-emerald-900/10 rounded-3xl p-4 sm:p-6 shadow-xl shadow-emerald-950/5 gap-3'>
            
            {serviços.map((serviço) => (
              <button 
                key={serviço.id}
                className='group flex gap-4 text-left p-4 rounded-2xl hover:bg-emerald-900/5 border border-transparent hover:border-emerald-900/5 transition-all duration-200 cursor-pointer w-full items-start'
              >
                {/* Ícone Dinâmico com efeito hover invertido */}
                <div className='flex h-12 w-12 shrink-0 items-center justify-center text-emerald-900 bg-emerald-50 rounded-xl group-hover:bg-emerald-900 group-hover:text-yellow-50 transition-colors duration-200'>
                  <serviço.icon className='w-6 h-6' />
                </div>
                
                {/* Textos */}
                <div className='flex flex-col min-w-0 pt-0.5'>
                  <h3 className='text-emerald-900 text-base font-bold tracking-tight group-hover:text-emerald-950 transition-colors'>
                    {serviço.title}
                  </h3>
                  <p className='text-emerald-900/60 text-xs md:text-sm font-normal mt-1 leading-relaxed'>
                    {serviço.description}
                  </p>
                </div>
              </button>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}