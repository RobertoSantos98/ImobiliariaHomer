import { Building2, Menu, ChevronsRight } from 'lucide-react';

export function Header() {
  return (
    // Alterado para bg-yellow-50/80 para habilitar a transparência do blur
    <header className='sticky top-0 z-50 w-full border-b border-emerald-900/10 bg-yellow-50/80 backdrop-blur-md transition-all'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6'>

        {/* 1. LOGO & BRANDING */}
        <div className='flex items-center gap-3 cursor-pointer group'>
          <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-900/10 text-emerald-900 transition-colors group-hover:bg-emerald-900/20'>
            <Building2 className='h-5 w-5' />
          </div>
          <div className='flex flex-col min-w-0'>
            <span className='text-emerald-900 font-black tracking-tight leading-none text-base md:text-lg'>
              Imobiliária <span className='text-emerald-700 font-extrabold'>Homer</span>
            </span>
            <span className='text-emerald-950/60 text-[10px] font-bold tracking-wider mt-0.5 uppercase block truncate'>
              Encontre sua nova morada
            </span>
          </div>
        </div>

        {/* 2. NAVEGAÇÃO (Desktop) */}
        <nav className='hidden md:flex items-center gap-8 text-sm font-semibold text-emerald-900/80'>
          <a href="#home" className='hover:text-emerald-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-emerald-900 after:transition-all'>
            Início
          </a>
          <a href="#alugar" className='hover:text-emerald-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-emerald-900 after:transition-all'>
            Alugar
          </a>
          <a href="#vender" className='hover:text-emerald-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-emerald-900 after:transition-all'>
            Vender
          </a>
          <a href="#sobre" className='hover:text-emerald-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-emerald-900 after:transition-all'>
            Sobre nós
          </a>
        </nav>

        {/* 3. BOTÃO DE AÇÃO (CTA) & MOBILE BUTTON */}
        <div className='flex items-center gap-4'>
          {/* Movido para fora do <nav> para melhor controle de layout */}
          <a 
            href="#contato" 
            className='hidden sm:inline-flex items-center gap-2 bg-emerald-900 text-yellow-50 px-5 py-2.5 text-sm font-bold rounded-xl hover:bg-emerald-950 transition-all active:scale-98 group shadow-md shadow-emerald-900/10'
          >
            Contato
            <ChevronsRight className='w-4 h-4 transition-transform group-hover:translate-x-0.5' />
          </a>

          {/* Menu Hambúrguer (Obrigatório para o Mobile não ficar vazio) */}
          <button className='flex md:hidden p-2 text-emerald-900 hover:bg-emerald-900/10 rounded-xl transition-colors' aria-label="Abrir menu">
            <Menu className='h-6 w-6' />
          </button>
        </div>

      </div>
    </header>
  );
}