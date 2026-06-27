import { Phone, UsersRound } from 'lucide-react'


export function Agentes() {

    const corretores = [
        {id: 1, nome: "Jussara", tel: "11 123456789", cargo: "Gestor Financeiro", img: "https://img.magnific.com/fotos-gratis/empresario-loiros-expressao-feliz_1194-3866.jpg"},
        {id: 2, nome: "Martinez", tel: "11 123456789", cargo: "Gestor Financeiro", img: "https://www.ibresp.com.br/wp-content/uploads/2025/09/www.ibresp.com.br-por-que-o-corretor-de-imoveis-e-a-profissao-da-moda-02.-por-que-corretor-de-imoveis-e-a-profissao-da-moda.jpg"},
        {id: 3, nome: "Pedro", tel: "11 123456789", cargo: "Gestor Financeiro", img: "https://www.ibresp.com.br/wp-content/uploads/2024/03/www.ibresp.com.br-o-que-faz-e-o-que-e-um-corretor-de-imoveis-o-que-e-um-corretor-de-imoveis-1280x720.jpg"},
        {id: 4, nome: "Milena", tel: "11 123456789", cargo: "Gestor Financeiro", img: "https://img.freepik.com/fotos-premium/mulher-agente-imobiliaria-segurando-uma-casa-de-brinquedo-isolada-no-fundo-branco-fazendo-o-proximo-gesto_1368-288709.jpg?semt=ais_hybrid&w=740&q=80"},
    ]



    return (
        <section className="bg-yellow-50 py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto flex flex-col gap-8 px-8">
                <div className="text-emerald-900 font-extrabold text-4xl justify-center flex w-full">
                    Conheça Nossa Equipe
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {corretores.map((c)=> (
                        <RenderEquipe key={c.id} nome={c.nome} img={c.img} tel={c.tel} cargo={c.cargo} />
                    ))}
                </div>


            </div>
        </section>
    )
}


type RenderEquipeProps = {
    nome: string,
    img: string,
    cargo: string,
    tel: string
}


export function RenderEquipe({nome, img, cargo, tel}: RenderEquipeProps){
    return(
        <div className="bg-white rounded-2xl py-8 md:py-12 flex flex-col items-center gap-4 border border-yellow-100 hover:scale-105 hover:shadow-lg shadow-yellow-100/50 transition-all">
            <img src={img} alt="" className="w-30 h-35 object-cover rounded-xl hover:scale-105" />
            <span className="text-2xl font-bold">{nome}</span>

            <div className='text-slate-400 text-sm flex gap-4 items-center'>
                <UsersRound className='w-4 h-4'/>
                {cargo}
            </div>

            <div className='text-slate-400 text-sm flex gap-4 items-center'>
                <Phone className='w-4 h-4'/>
                {tel}
            </div>
        </div>
    )
}