import { Building2, ChevronRight, Eye } from "lucide-react"

export function Hero() {
    return (
        <section className="relative h-screen overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/2">
                <div className="absolute bg-linear-to-r from-yellow-100/50 to-transparent z-10 inset-0" />

                <img className="w-full h-full object-cover" src="https://png.pngtree.com/thumb_back/fw800/background/20251130/pngtree-futuristic-circular-eco-house-with-solar-panels-on-grassy-hill-overlooking-image_20655102.webp" alt="" />
            </div>

            <div className="max-w-7xl w-full h-full flex">
                <div className="w-full h-full flex-col flex gap-4 items-start px-6 justify-center">

                    <div className="bg-slate-300/20 text-emerald-900 font-bold text-sm flex items-center gap-2 rounded-xl px-4 py-2">
                        <Building2 className='h-6 w-6 text-emerald-900' />
                        Encontre sua casa perfeita
                    </div>

                    <div>
                        <h1 className="text-7xl">Encontre sua</h1>
                        <span className="text-7xl text-emerald-900 font-bold">Casa dos Sonhos</span>
                    </div>

                    <span className="text-xl text-slate-500">Nós ajudamos você a encontrar a propriedade perfeita que cabe no seu bolso e no seus sonhos</span>

                    <div className="flex justify-center gap-4">
                        <button className="bg-emerald-900 text-yellow-50 flex py-2 px-4 gap-2 items-center font-bold rounded-2xl" >
                            Explorar Catálogo
                            <div className="bg-amber-50 rounded-full p-2">
                                <ChevronRight className="text-emerald-900" />
                            </div>
                        </button>

                        <button className="text-emerald-900 flex items-center gap-2">
                            <div className="rounded-full border border-emerald-900 p-2">
                                <Eye className="text-emerald-900" />
                            </div>
                            <span>Assista Agora</span>
                        </button>

                    </div>
                </div>

                <div className="w-full">

                </div>

            </div>


        </section>
    )
}