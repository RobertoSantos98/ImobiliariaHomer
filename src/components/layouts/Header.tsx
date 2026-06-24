import { Building2, Menu, Phone, ChevronsRight } from 'lucide-react';


export function Header() {


    return (
        <header className='sticky top-0 z-50 w-full border-b border-amber-50 bg-yellow-100/50  backdrop-blur-md transition-all'>
            <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6'>


                <div className='flex items-center gap-2 font-bold text-xl cursor-pointer'>
                    <div>
                        <Building2 className='h-8 w-8 text-emerald-900' />
                    </div>
                    <div className='flex-col flex'>
                        <span className='text-emerald-900 tracking-tighter'>
                            Imobiliária<span className='text-emerald-900'>Homer</span>
                        </span>
                        <span className='text-emerald-900 text-xs tracking-wider'>Encontre sua nova morada</span>
                    </div>
                </div>

                <nav className='hidden md:flex items-center gap-8 text-sm font-medium text-emerald-900'>
                    <a href="#home" className='hover:text-emerald-800 transition-colors relative after:absolute after:-bottom-5 after:h-[2px] after:w-0 hover:after:w-full after:transition-all'>
                        Início
                    </a>
                    <a href="" className='hover:text-emerald-800 transition-colors'>
                        Alugar
                    </a>
                    <a href="" className='hover:text-emerald-800 transition-colors'>
                        Vender
                    </a>
                    <a href="" className='hover:text-emerald-800 transition-colors'>
                        Sobre nós
                    </a>
                    <a href="" className='transition-colors flex items-center gap-2 bg-emerald-900 text-yellow-100 px-6 py-3 rounded-2xl hover:bg-emerald-950'>

                        Contato
                        <ChevronsRight className='w-6 h-6' />
                    </a>

                </nav>

            </div>

        </header>
    )
}