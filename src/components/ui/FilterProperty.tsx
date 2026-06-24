import { MapPin, Search, Home, DollarSign, BedDouble } from "lucide-react";
import { useState, FormEvent } from "react";

export function FilterProperty() {
  // 1. Correção dos Estados: Cada campo precisa do seu próprio estado isolado
  const [localizacao, setLocalizacao] = useState("");
  const [tipoPropriedade, setTipoPropriedade] = useState("");
  const [faixaPreco, setFaixaPreco] = useState("");
  const [quartos, setQuartos] = useState("");

  // Função para lidar com o envio da busca
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // Aqui você conectará com sua futura função de filtro
    console.log({ localizacao, tipoPropriedade, faixaPreco, quartos });
  };

  return (
    /* Alterado para <form> para permitir o envio ao apertar "Enter" */
    <form 
      onSubmit={handleSearch}
      className="bg-white/95 backdrop-blur-md border border-emerald-900/10 p-4 lg:p-6 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-5 lg:gap-2 items-stretch lg:items-center rounded-3xl shadow-xl shadow-emerald-950/5 relative -mt-10 lg:-mt-14 z-40"
    >
      
      {/* CAMPO 1: LOCALIZAÇÃO */}
      <div className="flex-1 flex gap-3 items-center px-2">
        <div className="p-2.5 rounded-xl bg-emerald-900/5 text-emerald-900 hidden sm:block">
          <MapPin className="h-5 w-5" />
        </div>
        <div className="flex-1 flex flex-col min-w-0">
          <label className="text-xs font-bold text-emerald-950 tracking-wide uppercase pl-1 mb-1">Localização</label>
          <input
            type="text"
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
            placeholder="Onde você quer morar?"
            className="w-full font-medium text-sm text-slate-700 placeholder-slate-400 bg-slate-50/50 border border-slate-200/60 rounded-xl p-2.5 focus:outline-hidden focus:border-emerald-900 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Divisores: Ficam ocultos no Mobile e aparecem no Desktop */}
      <div className="hidden lg:block w-px h-12 bg-emerald-900/10 self-center mx-2" />

      {/* CAMPO 2: TIPO DE PROPRIEDADE */}
      <div className="flex-1 flex gap-3 items-center px-2">
        <div className="p-2.5 rounded-xl bg-emerald-900/5 text-emerald-900 hidden sm:block">
          <Home className="h-5 w-5" />
        </div>
        <div className="flex-1 flex flex-col min-w-0">
          <label className="text-xs font-bold text-emerald-950 tracking-wide uppercase pl-1 mb-1">Tipo</label>
          <select
            value={tipoPropriedade}
            onChange={(e) => setTipoPropriedade(e.target.value)}
            className="w-full font-medium text-sm text-slate-700 bg-slate-50/50 border border-slate-200/60 rounded-xl p-2.5 focus:outline-hidden focus:border-emerald-900 focus:bg-white transition-all cursor-pointer"
          >
            <option value="">Todos os tipos</option>
            <option value="casa">Casa Residencial</option>
            <option value="apartamento">Apartamento</option>
            <option value="condominio">Condomínio Fechado</option>
          </select>
        </div>
      </div>

      <div className="hidden lg:block w-px h-12 bg-emerald-900/10 self-center mx-2" />

      {/* CAMPO 3: FAIXA DE PREÇO */}
      <div className="flex-1 flex gap-3 items-center px-2">
        <div className="p-2.5 rounded-xl bg-emerald-900/5 text-emerald-900 hidden sm:block">
          <DollarSign className="h-5 w-5" />
        </div>
        <div className="flex-1 flex flex-col min-w-0">
          <label className="text-xs font-bold text-emerald-950 tracking-wide uppercase pl-1 mb-1">Preço Máximo</label>
          <select
            value={faixaPreco}
            onChange={(e) => setFaixaPreco(e.target.value)}
            className="w-full font-medium text-sm text-slate-700 bg-slate-50/50 border border-slate-200/60 rounded-xl p-2.5 focus:outline-hidden focus:border-emerald-900 focus:bg-white transition-all cursor-pointer"
          >
            <option value="">Qualquer preço</option>
            <option value="ate-500k">Até R$ 500.000</option>
            <option value="ate-1m">Até R$ 1.000.000</option>
            <option value="mais-1m">Acima de R$ 1.000.000</option>
          </select>
        </div>
      </div>

      <div className="hidden lg:block w-px h-12 bg-emerald-900/10 self-center mx-2" />

      {/* CAMPO 4: QUARTOS */}
      <div className="flex-1 flex gap-3 items-center px-2">
        <div className="p-2.5 rounded-xl bg-emerald-900/5 text-emerald-900 hidden sm:block">
          <BedDouble className="h-5 w-5" />
        </div>
        <div className="flex-1 flex flex-col min-w-0">
          <label className="text-xs font-bold text-emerald-950 tracking-wide uppercase pl-1 mb-1">Quartos</label>
          <select
            value={quartos}
            onChange={(e) => setQuartos(e.target.value)}
            className="w-full font-medium text-sm text-slate-700 bg-slate-50/50 border border-slate-200/60 rounded-xl p-2.5 focus:outline-hidden focus:border-emerald-900 focus:bg-white transition-all cursor-pointer"
          >
            <option value="">Tanto faz</option>
            <option value="1">1+ Quartos</option>
            <option value="2">2+ Quartos</option>
            <option value="3">3+ Quartos</option>
            <option value="4">4+ Quartos</option>
          </select>
        </div>
      </div>

      {/* BOTÃO DE BUSCA */}
      <button 
        type="submit"
        className="lg:ml-4 bg-emerald-900 hover:bg-emerald-950 text-yellow-50 text-sm font-bold flex items-center justify-center gap-2 py-4 px-6 rounded-2xl cursor-pointer transition-all active:scale-98 shadow-md shadow-emerald-900/20 whitespace-nowrap"
      >
        <Search className="h-4 w-4" />
        Buscar Imóveis
      </button>

    </form>
  );
}