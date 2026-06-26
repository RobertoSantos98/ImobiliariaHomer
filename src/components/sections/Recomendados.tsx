import { PropertyCard } from "../ui/PropertyCards"; // Ajustado o nome do arquivo se necessário

export default function Recomendados() {
  // Prática recomendada: Tipar explicitamente ou usar 'as const' para o type do imóvel
  const lista = [
    { 
      id: "1", 
      image: "https://axvliw1bcpyx.objectstorage.sa-vinhedo-1.oci.customer-oci.com/n/axvliw1bcpyx/b/ksi/o/867/foto_/2024/10983/ribeirao-preto-casa-condominio-portal-da-mata-17-01-2024_10-21-25-0.webp", 
      title: "Casa em Local Planejado", 
      location: "Condomínio Portal da Mata, Ribeirão Preto - SP", // Deixando o endereço mais comercial
      price: "R$ 400.000", // Formatando a string de preço para exibição real
      beds: 2, 
      baths: 1, 
      area: 124, 
      type: "Venda" as const 
    },
    { 
      id: "2", 
      image: "https://axvliw1bcpyx.objectstorage.sa-vinhedo-1.oci.customer-oci.com/n/axvliw1bcpyx/b/ksi/o/867/foto_/2024/10983/ribeirao-preto-casa-condominio-portal-da-mata-17-01-2024_10-21-25-0.webp", 
      title: "Casa em Local Planejado", 
      location: "Condomínio Portal da Mata, Ribeirão Preto - SP", 
      price: "R$ 400.000", 
      beds: 2, 
      baths: 1, 
      area: 124, 
      type: "Venda" as const 
    },
    { 
      id: "3", 
      image: "https://axvliw1bcpyx.objectstorage.sa-vinhedo-1.oci.customer-oci.com/n/axvliw1bcpyx/b/ksi/o/867/foto_/2024/10983/ribeirao-preto-casa-condominio-portal-da-mata-17-01-2024_10-21-25-0.webp", 
      title: "Casa em Local Planejado", 
      location: "Condomínio Portal da Mata, Ribeirão Preto - SP", 
      price: "R$ 400.000", 
      beds: 2, 
      baths: 1, 
      area: 124, 
      type: "Venda" as const 
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      {/* Adicionado px-6 para o conteúdo não colar na borda em telas pequenas */}
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Título da Seção: Essencial para dar contexto ao usuário */}
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-900 bg-emerald-900/5 px-3 py-1 rounded-full">
            Recomendados para Você
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
            Destaques que acabaram de chegar
          </h2>
        </div>

        {/* CORREÇÃO DO LAYOUT: Mudamos de flex para grid responsivo com gap generoso */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lista.map((imovel) => (
            <PropertyCard 
              key={imovel.id} 
              image={imovel.image} 
              title={imovel.title} 
              location={imovel.location} 
              price={imovel.price} 
              beds={imovel.beds} 
              baths={imovel.baths} // FIX: Passando a prop esquecida
              area={imovel.area} 
              type={imovel.type}
            /> 
          ))}
        </div>

      </div>
    </section>
  )
}