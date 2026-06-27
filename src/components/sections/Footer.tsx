import { ChevronRight } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-yellow-50 lg:py-16 relative">


            <div className="absolute right-0 bottom-0 h-full w-full sm:w-1/2">
                <img className=" object-cover w-full h-full hover:scale-110 sm:flex flex-none" src="https://storage.agil.net/cdn/agil/88/property/500/medium/d1d5a2b78de5.webp" alt="" />

                <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-yellow-50 via-yellow-50/90 to-yellow-50/80 sm:to-transparent" />
            </div>


            <div className="max-w-7xl mx-auto z-20 relative grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col w-full sm:w-auto space-y-4 px-4 sm:py-8 py-24 sm:items-start">
                    <div className="flex flex-col">
                        <span className="sm:text-3xl text-2xl text-emerald-950 font-bold">Pronto para escolher sua casa dos Sonhos?</span>
                        <span className="sm:text-base text-sm text-slate-600">Faremos da sua jornada um sucesso</span>
                    </div>
                    <button className="bg-emerald-900 justify-center text-white py-4 px-6 hover:scale-102 active:scale-100 transition-all rounded-2xl flex gap-2 font-bold items-center hover:bg-emerald-950 shadow-lg shadow-emerald-950/30">
                        Marque uma Consultoria
                        <div className="bg-amber-50 rounded-full p-1 ">
                            <ChevronRight className="h-4 w-4 text-emerald-900" />
                        </div>
                    </button>
                </div>
            </div>

        </footer>
    )
}