import { Header } from './components/layouts/Header';
import { Hero } from './components/sections/Hero';
import { SobreNos } from './components/sections/SobreNos';
import { PropertyCard } from './components/ui/PropertyCards';
import { Building2, Search } from 'lucide-react';

const MOCK_PROPERTIES = [
  {
    id: 1,
    title: 'Apartamento Alto Padrão Essence',
    location: 'Jardins, São Paulo - SP',
    price: 'R$ 1.250.000',
    beds: 3,
    baths: 2,
    area: 110,
    type: 'Venda' as const,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Casa Contemporânea com Piscina',
    location: 'Alphaville, Barueri - SP',
    price: 'R$ 3.800.000',
    beds: 4,
    baths: 5,
    area: 320,
    type: 'Venda' as const,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Studio Minimalista Loft SOHO',
    location: 'Vila Madalena, São Paulo - SP',
    price: 'R$ 4.500 /mês',
    beds: 1,
    baths: 1,
    area: 45,
    type: 'Aluguel' as const,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&auto=format&fit=crop&q=80'
  }
];

function App() {
  return (
   <div className='bg-yellow-100/50'>
      <Header/>

      <Hero/>

      <SobreNos/>
   </div>
  );
}

export default App;