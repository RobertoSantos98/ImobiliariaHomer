import { MapPin, BedDouble, Bath, Maximize } from 'lucide-react';

// Definindo o contrato de dados do componente (TypeScript)
interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: number;
  type: 'Venda' | 'Aluguel';
}

export function PropertyCard({ image, title, location, price, beds, baths, area, type }: PropertyCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Imagem com Badge */}
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full text-white ${
          type === 'Venda' ? 'bg-indigo-600' : 'bg-emerald-600'
        }`}>
          {type}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="p-5 space-y-4">
        <div>
          <p className="text-2xl font-bold text-slate-900 tracking-tight">{price}</p>
          <h3 className="text-lg font-semibold text-slate-800 line-clamp-1 mt-1">{title}</h3>
          <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
            <MapPin className="w-4 h-4 text-slate-400" />
            <span>{location}</span>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-slate-100 w-full" />

        {/* Detalhes Técnicos */}
        <div className="flex items-center justify-between text-slate-600 text-sm">
          <div className="flex items-center gap-1.5">
            <BedDouble className="w-4 h-4 text-emerald-500" />
            <span>{beds} Quartos</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-emerald-500" />
            <span>{baths} Banh.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4 text-emerald-500" />
            <span>{area} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
}