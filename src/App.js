import React, { useState } from 'react';
import { 
  ShoppingCart, 
  ArrowLeft, 
  Plus, 
  Minus, 
  Trash2, 
  Send, 
  X, 
  Shirt, 
  CheckCircle,
  MapPin,
  User,
  Phone,
  Home,
  ChevronRight,
  Package,
  Star
} from 'lucide-react';

// Componente que tenta carregar imagem com diferentes extensões
// Componente que carrega imagem da pasta public
// Componente que carrega imagem da pasta public
// Componente que carrega imagem da pasta public - DEBUG
// Componente que carrega imagem da pasta public
// Componente que carrega imagem da pasta public
const ProductImage = ({ imageFile, folder = 'camisasCoimbra', alt, style }) => {
  const [currentExtIndex, setCurrentExtIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  
  const extensions = ['.jpg', '.png', '.jpeg'];
  
  const handleError = () => {
    if (currentExtIndex < extensions.length - 1) {
      setCurrentExtIndex(currentExtIndex + 1);
    } else {
      setHasError(true);
    }
  };
  
  if (hasError || !imageFile) {
    return <Shirt style={{ width: '80px', height: '80px', color: '#666' }} strokeWidth={1} />;
  }
  
  return (
    <img 
      src={`/${folder}/${imageFile}${extensions[currentExtIndex]}`}
      alt={alt}
      onError={handleError}
      style={style}
    />
  );
};

// ============================================
// CONFIGURAÇÕES
// ============================================
const PHONE_NUMBER = '5511966007429';
const LOGO_URL = '/logo.png';

// ============================================
// CATEGORIAS
// ============================================
const CATEGORIES = [
  { 
    id: 1, 
    name: 'Times Europeus/Outros', 
    svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'
  },
  { 
    id: 2, 
    name: 'Times Brasileiros', 
    svg: 'M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 14c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5zm-3.5-5.5l1.5 1.5 3.5-3.5 3.5 3.5 1.5-1.5-5-5-5 5z'
  },
  { 
    id: 3, 
    name: 'Seleções', 
    svg: 'M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6zm3.6 8h-3l-.4-2H7V6h5l.4 2H18v6z'
  },
  { 
    id: 4, 
    name: 'Retrô', 
    svg: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z'
  },
  { 
    id: 5, 
    name: 'Modelo Jogador', 
    svg: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
  },
  { 
    id: 7, 
    name: 'Feminino', 
    svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z'
  },
  { 
    id: 8, 
    name: 'Infantil', 
    svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'
  },
  { 
    id: 9, 
    name: 'Calções', 
    svg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 17h4v-4H7v4zm0-6h4V7H7v4zm6 6h4v-4h-4v4zm0-6h4V7h-4v4z'
  },
  { 
    id: 10, 
    name: 'Conjuntos', 
    svg: 'M21 3H3v18h18V3zM11 17H7v-4h4v4zm0-6H7V7h4v4zm6 6h-4v-4h4v4zm0-6h-4V7h4v4z'
  },
];

// ============================================
// PRODUTOS - CORRIGIDO PARA ARQUIVOS EXISTENTES
// ============================================
const PRODUCTS_BY_CATEGORY = {
  2: [
    { id: 1, name: 'Ath Paranaense Azul', imageFile: 'AthParanaenseAzul', price: 150.00 },
    { id: 2, name: 'Atl Mineiro All Black', imageFile: 'AtlMineiroAllBlack', price: 150.00 },
    { id: 3, name: 'Atl Mineiro Amarela', imageFile: 'AtlMineiroAmarela', price: 150.00 },
    { id: 4, name: 'Atl Mineiro Branca Det Preto', imageFile: 'AtlMineiroBrancaDetPreto', price: 150.00 },
    { id: 5, name: 'Atl Mineiro Branca Preta Dour', imageFile: 'AtlMineiroBrancaPretaDour', price: 150.00 },
    { id: 6, name: 'Atl Mineiro Listrada', imageFile: 'AtlMineiroListrada', price: 150.00 },
    { id: 7, name: 'Atl Mineiro Listrada 2', imageFile: 'AtlMineiroListrada2', price: 150.00 },
    { id: 8, name: 'Atl Mineiro Preto Amarelo', imageFile: 'AtlMineiroPretoAmarelo', price: 150.00 },
    { id: 9, name: 'Atl Mineiro Preto Dourado', imageFile: 'AtlMineiroPretoDourado', price: 150.00 },
    { id: 10, name: 'Atl Mineiro Preto Static', imageFile: 'AtlMineiroPretoStatic', price: 150.00 },
    { id: 11, name: 'Atl Mineiro Regata Amarela', imageFile: 'AtlMineiroRegataAmarela', price: 150.00 },
    { id: 12, name: 'Atl Mineiro Regata Preta', imageFile: 'AtlMineiroRegataPreta', price: 150.00 },
    { id: 13, name: 'Bahia Azul Listrado', imageFile: 'BahiaAzulListrado', price: 150.00 },
    { id: 14, name: 'Bahia Azul Vermelha', imageFile: 'BahiaAzulVermelha', price: 150.00 },
    { id: 15, name: 'Bahia Branca', imageFile: 'BahiaBranca', price: 150.00 },
    { id: 16, name: 'Bahia Listrado', imageFile: 'BahiaListrado', price: 150.00 },
    { id: 17, name: 'Botafogo Branca', imageFile: 'BotafogoBranca', price: 150.00 },
    { id: 18, name: 'Botafogo Grafite', imageFile: 'BotafogoGrafite', price: 150.00 },
    { id: 19, name: 'Botafogo Grafite Patro', imageFile: 'BotafogoGrafitePatro', price: 150.00 },
    { id: 20, name: 'Botafogo Listrada', imageFile: 'BotafogoListrada', price: 150.00 },
    { id: 21, name: 'Botafogo Listrada 2', imageFile: 'BotafogoListrada2', price: 150.00 },
    { id: 22, name: 'Botafogo Polo Preta', imageFile: 'BotafogoPoloPreta', price: 150.00 },
    { id: 23, name: 'Botafogo Preta', imageFile: 'BotafogoPreta', price: 150.00 },
    { id: 24, name: 'Botafogo Preta Detalhe Branco', imageFile: 'BotafogoPretaDetalheBranco', price: 150.00 },
    { id: 25, name: 'Corinthians All Black', imageFile: 'CorinthiansAllBlack', price: 150.00 },
    { id: 26, name: 'Corinthians Branca Preta', imageFile: 'CorinthiansBrancaPreta', price: 150.00 },
    { id: 27, name: 'Corinthians Branco Preto Menphis', imageFile: 'CorinthiansBrancoPretoMenphis', price: 150.00 },
    { id: 28, name: 'Corinthians Menphis Preta Branca', imageFile: 'CorinthiansMenphisPretaBranca', price: 150.00 },
    { id: 29, name: 'Corinthians Preta Branca', imageFile: 'CorinthiansPretaBranca', price: 150.00 },
    { id: 30, name: 'Corinthians Preta Detalhe Branco', imageFile: 'CorinthiansPretaDetalheBranco', price: 150.00 },
    { id: 31, name: 'Corinthians Preto Total 90', imageFile: 'CorinthiansPretoTotal90', price: 150.00 },
    { id: 32, name: 'Corinthians Regata Roxa', imageFile: 'CorinthiansRegataRoxa', price: 150.00 },
    { id: 33, name: 'Corinthians Roxa', imageFile: 'CorinthiansRoxa', price: 150.00 },
    { id: 34, name: 'Cruzeiro Azul Branco', imageFile: 'CruzeiroAzulBranco', price: 150.00 },
    { id: 35, name: 'Cruzeiro Azul Dourado', imageFile: 'CruzeiroAzulDourado', price: 150.00 },
    { id: 36, name: 'Cruzeiro Azul Dudu', imageFile: 'CruzeiroAzulDudu', price: 150.00 },
    { id: 37, name: 'Cruzeiro Branco List Azul', imageFile: 'CruzeiroBrancoListAzul', price: 150.00 },
    { id: 38, name: 'Cruzeiro Cinza', imageFile: 'CruzeiroCinza', price: 150.00 },
    { id: 39, name: 'Cruzeiro Raposa 1', imageFile: 'CruzeiroRaposa1', price: 150.00 },
    { id: 40, name: 'Cruzeiro Raposa 2', imageFile: 'CruzeiroRaposa2', price: 150.00 },
    { id: 41, name: 'Cruzeiro Raposa Regata 2', imageFile: 'CruzeiroRaposaRegata2', price: 150.00 },
    { id: 42, name: 'Cruzeiro Regata Azul', imageFile: 'CruzeiroRegataAzul', price: 150.00 },
    { id: 43, name: 'Flamengo Amarela', imageFile: 'FlamengoAmarela', price: 150.00 },
    { id: 44, name: 'Flamengo Azul', imageFile: 'FlamengoAzul', price: 150.00 },
    { id: 45, name: 'Flamengo Azul 3', imageFile: 'FlamengoAzul3', price: 150.00 },
    { id: 46, name: 'Flamengo Azul Claro', imageFile: 'FlamengoAzulClaro', price: 150.00 },
    { id: 47, name: 'Flamengo Azul Claro Polo 2', imageFile: 'FlamengoAzulClaroPolo2', price: 150.00 },
    { id: 48, name: 'Flamengo Azul Polo', imageFile: 'FlamengoAzulPolo', price: 150.00 },
    { id: 49, name: 'Flamengo Branca Dourada', imageFile: 'FlamengoBrancaDourada', price: 150.00 },
    { id: 50, name: 'Flamengo Branco Det Vermelho', imageFile: 'FlamengoBrancoDetVermeho', price: 150.00 },
    { id: 51, name: 'Flamengo Branco Manga Preta', imageFile: 'FlamengoBrancoMangaPreta', price: 150.00 },
    { id: 52, name: 'Flamengo Marrom', imageFile: 'FlamengoMarrom', price: 150.00 },
    { id: 53, name: 'Flamengo Off White Dourado', imageFile: 'FlamengoOffWhiteDourado', price: 150.00 },
    { id: 54, name: 'Flamengo Polo Preta', imageFile: 'FlamengoPoloPreta', price: 150.00 },
    { id: 55, name: 'Flamengo Polo Preta 2', imageFile: 'FlamengoPoloPreta2', price: 150.00 },
    { id: 56, name: 'Flamengo Preto Cinza', imageFile: 'FlamengoPretoCinza', price: 150.00 },
    { id: 57, name: 'Flamengo Preto Cinza Patro', imageFile: 'FlamengoPretoCinzaPatro', price: 150.00 },
    { id: 58, name: 'Flamengo Preto Vermelho Preto', imageFile: 'FlamengoPretoVermelhoPreto', price: 150.00 },
    { id: 59, name: 'Flamengo Regata Azul Marinho', imageFile: 'FlamengoRegataAzulMarinho', price: 150.00 },
    { id: 60, name: 'Flamengo Regata Preto Cinza', imageFile: 'FlamengoRegataPretoCinza', price: 150.00 },
    { id: 61, name: 'Flamengo Rosa', imageFile: 'FlamengoRosa', price: 150.00 },
    { id: 62, name: 'Flamengo Vermelha', imageFile: 'FlamengoVermelha', price: 150.00 },
    { id: 63, name: 'Flamengo Vermelho Preto', imageFile: 'FlamengoVermelhoPreto', price: 150.00 },
    { id: 64, name: 'Flamengo Zico', imageFile: 'FlamengoZico', price: 150.00 },
    { id: 65, name: 'Fluminense Branca Det Verde Vermelho', imageFile: 'FluminenseBrancaDetVerdeVermelho', price: 150.00 },
    { id: 66, name: 'Fluminense Branco', imageFile: 'FluminenseBranco', price: 150.00 },
    { id: 67, name: 'Fluminense Listrado', imageFile: 'FluminenseListrado', price: 150.00 },
    { id: 68, name: 'Fluminense Verde', imageFile: 'FluminenseVerde', price: 150.00 },
    { id: 69, name: 'Fluminense Vinho Dourado', imageFile: 'FluminenseVinhoDourado', price: 150.00 },
    { id: 70, name: 'Fortaleza Azul', imageFile: 'FortalezaAzul', price: 150.00 },
    { id: 71, name: 'Fortaleza Branca', imageFile: 'FortalezaBranca', price: 150.00 },
    { id: 72, name: 'Grêmio Azul Claro', imageFile: 'GremioAzulClaro', price: 150.00 },
    { id: 73, name: 'Grêmio Azul Claro Patro', imageFile: 'GremioAzulClaroPatro', price: 150.00 },
    { id: 74, name: 'Grêmio Azul Marinho', imageFile: 'GremioAzulMarinho', price: 150.00 },
    { id: 75, name: 'Grêmio Listrado', imageFile: 'GremioListrado', price: 150.00 },
    { id: 76, name: 'Grêmio Listrado 2', imageFile: 'GremioListrado2', price: 150.00 },
    { id: 77, name: 'Internacional All Black', imageFile: 'InternacionalAllBlack', price: 150.00 },
    { id: 78, name: 'Internacional Branca', imageFile: 'InternacionalBranca', price: 150.00 },
    { id: 79, name: 'Internacional Branca Vermelha', imageFile: 'InternacionalBrancaVermelha', price: 150.00 },
    { id: 80, name: 'Internacional Vermelha', imageFile: 'InternacionalVermelha', price: 150.00 },
    { id: 81, name: 'Palmeiras Amarela Verde', imageFile: 'PalmeirasAmarelaVerde', price: 150.00 },
    { id: 82, name: 'Palmeiras Branca Detalhe Verde', imageFile: 'PalmeirasBrancaDetalheVerde', price: 150.00 },
    { id: 83, name: 'Palmeiras Branca Polo', imageFile: 'PalmeirasBrancaPolo', price: 150.00 },
    { id: 84, name: 'Palmeiras Branco Verde', imageFile: 'PalmeirasBrancoVerde', price: 150.00 },
    { id: 85, name: 'Palmeiras Brasileirão 22', imageFile: 'PalmeirasBrasileirao22', price: 150.00 },
    { id: 86, name: 'Palmeiras Estrela Verde', imageFile: 'PalmeirasEstrelaVerde', price: 150.00 },
    { id: 87, name: 'Palmeiras Laranja', imageFile: 'PalmeirasLaranja', price: 150.00 },
    { id: 88, name: 'Palmeiras Off White', imageFile: 'PalmeirasOffWhite', price: 150.00 },
    { id: 89, name: 'Palmeiras Off White Verde', imageFile: 'PalmeirasOffWhiteVerde', price: 150.00 },
    { id: 90, name: 'Palmeiras Regata Branca', imageFile: 'PalmeirasRegataBranca', price: 150.00 },
    { id: 91, name: 'Palmeiras Regata Verde Claro', imageFile: 'PalmeirasRegataVerdeClaro', price: 150.00 },
    { id: 92, name: 'Palmeiras Verde', imageFile: 'PalmeirasVerde', price: 150.00 },
    { id: 93, name: 'Palmeiras Verde Detalhe Branco', imageFile: 'PalmeirasVerdeDetalheBranco', price: 150.00 },
    { id: 94, name: 'Palmeiras Verde Detalhe Vermelho', imageFile: 'PalmeirasVerdeDetalheVermelho', price: 150.00 },
    { id: 95, name: 'Palmeiras Verde Limão', imageFile: 'PalmeirasVerdeLimao', price: 150.00 },
    { id: 96, name: 'Palmeiras Verde Limão 2', imageFile: 'PalmeirasVerdeLimao2', price: 150.00 },
    { id: 97, name: 'Palmeiras Verde Mancha Branca', imageFile: 'PalmeirasVerdeManchaBranca', price: 150.00 },
    { id: 98, name: 'RB Bragantino Azul', imageFile: 'RBbragantinoAzul', price: 150.00 },
    { id: 99, name: 'RB Bragantino Branca', imageFile: 'RBbragantinoBranca', price: 150.00 },
    { id: 100, name: 'Santa Cruz Branca', imageFile: 'SantaCruzBranca', price: 150.00 },
    { id: 101, name: 'Santos Amarela', imageFile: 'SantosAmarela', price: 150.00 },
    { id: 102, name: 'Santos Azul', imageFile: 'SantosAzul', price: 150.00 },
    { id: 103, name: 'Santos Azul Neymar', imageFile: 'SantosAzulNeymar', price: 150.00 },
    { id: 104, name: 'Santos Azul Patrocínio', imageFile: 'SantosAzulPatrocinio', price: 150.00 },
    { id: 105, name: 'Santos Branca', imageFile: 'SantosBranca', price: 150.00 },
    { id: 106, name: 'Santos Branca Dourada', imageFile: 'SantosBrancaDourada', price: 150.00 },
    { id: 107, name: 'Santos Branco Cinza', imageFile: 'SantosBrancoCinza', price: 150.00 },
    { id: 108, name: 'Santos Neymar Branca 1', imageFile: 'SantosNeymarBranca1', price: 150.00 },
    { id: 109, name: 'Santos Neymar Branca 2', imageFile: 'SantosNeymarBranca2', price: 150.00 },
    { id: 110, name: 'Santos Neymar Branca 3', imageFile: 'SantosNeymarBranca3', price: 150.00 },
    { id: 111, name: 'Santos Neymar Listrado', imageFile: 'SantosNeymarListrado', price: 150.00 },
    { id: 112, name: 'Santos Preta', imageFile: 'SantosPreta', price: 150.00 },
    { id: 113, name: 'Santos Preta Branca', imageFile: 'SantosPretaBranca', price: 150.00 },
    { id: 114, name: 'São Paulo Cinza', imageFile: 'SaoPauloCinza', price: 150.00 },
    { id: 115, name: 'São Paulo Cinza 2', imageFile: 'SaoPauloCinza2', price: 150.00 },
    { id: 116, name: 'São Paulo Goleiro Azul', imageFile: 'SaoPauloGoleiroAzul', price: 150.00 },
    { id: 117, name: 'São Paulo Goleiro Vermelha', imageFile: 'SaoPauloGoleiroVermelha', price: 150.00 },
    { id: 118, name: 'São Paulo Goleiro Vermelha Preta', imageFile: 'SaoPauloGoleiroVermelhaPreta', price: 150.00 },
    { id: 119, name: 'São Paulo Listrada', imageFile: 'SaoPauloListrada', price: 150.00 },
    { id: 120, name: 'São Paulo Listrado', imageFile: 'SaoPauloListrado', price: 150.00 },
    { id: 121, name: 'São Paulo List Sem Patro', imageFile: 'SaoPauloListSemPatro', price: 150.00 },
    { id: 122, name: 'São Paulo NB Cinza', imageFile: 'SaoPauloNBCinza', price: 150.00 },
    { id: 123, name: 'São Paulo NB Preta', imageFile: 'SaoPauloNBpreta', price: 150.00 },
    { id: 124, name: 'São Paulo NB Vinho', imageFile: 'SaoPauloNBVinho', price: 150.00 },
    { id: 125, name: 'São Paulo Pré Jogo', imageFile: 'SaoPauloPreJogo', price: 150.00 },
    { id: 126, name: 'São Paulo Regata Vinho', imageFile: 'SaoPauloRegataVinho', price: 150.00 },
    { id: 127, name: 'São Paulo Sinalizador', imageFile: 'SaoPauloSinalizador', price: 150.00 },
    { id: 128, name: 'São Paulo Sinalizador 2', imageFile: 'SaoPauloSinalizador2', price: 150.00 },
    { id: 129, name: 'São Paulo Tradicional', imageFile: 'SaoPauloTradicional', price: 150.00 },
    { id: 130, name: 'Sport Vermelha Preto', imageFile: 'SportVermelhaPreto', price: 150.00 },
    { id: 131, name: 'Vasco All Black', imageFile: 'VascoAllBlack', price: 150.00 },
    { id: 132, name: 'Vasco Branca', imageFile: 'VascoBranca', price: 150.00 },
    { id: 133, name: 'Vasco Marrom', imageFile: 'VascoMarrom', price: 150.00 },
    { id: 134, name: 'Vasco Marrom Areia', imageFile: 'VascoMarromAreia', price: 150.00 },
    { id: 135, name: 'Vasco Preta Listra Branca', imageFile: 'VascoPretaListraBranca', price: 150.00 },
    { id: 136, name: 'Vasco Preta Listra Branca 2', imageFile: 'VascoPretaListraBranca2', price: 150.00 },
    { id: 137, name: 'Vitória Branca', imageFile: 'VitoriaBranca', price: 150.00 },
    { id: 138, name: 'Vitória Listrado', imageFile: 'VitoriaListrado', price: 150.00 },
  ],
  1: [
    { id: 1001, name: 'Ajax Azul Jungle', imageFile: 'AjaxAzulJungle', folder: 'timesEuropeus', price: 150.00 },
    { id: 1002, name: 'Ajax Polo Off White', imageFile: 'AjaxPoloOffWhite', folder: 'timesEuropeus', price: 150.00 },
    { id: 1003, name: 'Al Hilal Azul', imageFile: 'AlHilalAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1004, name: 'Al Hilal Azul Static', imageFile: 'AlHilalAzulStatic', folder: 'timesEuropeus', price: 150.00 },
    { id: 1005, name: 'Al Hilal Branca Neymar', imageFile: 'AlHilalBrancaNeymar', folder: 'timesEuropeus', price: 150.00 },
    { id: 1006, name: 'Al Hilal Branco Static', imageFile: 'AlHilalBrancoStatic', folder: 'timesEuropeus', price: 150.00 },
    { id: 1007, name: 'Al Hilal Neymar', imageFile: 'AlHilalNeymar', folder: 'timesEuropeus', price: 150.00 },
    { id: 1008, name: 'Al Hilal Neymar Azul', imageFile: 'AlHilalNeymarAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1009, name: 'Al Nassr Amarela Branca', imageFile: 'AlNassrAmarelaBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1010, name: 'Al Nassr Amarela CR7', imageFile: 'AlNassrAmarelaCR7', folder: 'timesEuropeus', price: 150.00 },
    { id: 1011, name: 'Al Nassr Amarelo', imageFile: 'AlNassrAmarelo', folder: 'timesEuropeus', price: 150.00 },
    { id: 1012, name: 'Al Nassr Azul Amarelo', imageFile: 'AlNassrAzulAmarelo', folder: 'timesEuropeus', price: 150.00 },
    { id: 1013, name: 'Al Nassr Branco Ouro', imageFile: 'AlNassrBrancoOuro', folder: 'timesEuropeus', price: 150.00 },
    { id: 1014, name: 'Al Nassr CR7', imageFile: 'AlNassrCR7', folder: 'timesEuropeus', price: 150.00 },
    { id: 1015, name: 'Al Nassr CR7 Azul', imageFile: 'AlNassrCR7Azul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1016, name: 'Al Nassr CR7 Off White', imageFile: 'AlNassrCR7OffWhite', folder: 'timesEuropeus', price: 150.00 },
    { id: 1017, name: 'Al Nassr Polo Branca Ouro', imageFile: 'AlNassrPoloBrancaOuro', folder: 'timesEuropeus', price: 150.00 },
    { id: 1018, name: 'Arsenal Azul Static', imageFile: 'ArsenalAzulStatic', folder: 'timesEuropeus', price: 150.00 },
    { id: 1019, name: 'Arsenal Branca Cinza', imageFile: 'ArsenalBrancaCinza', folder: 'timesEuropeus', price: 150.00 },
    { id: 1020, name: 'Arsenal Polo Branca', imageFile: 'ArsenalPoloBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1021, name: 'Arsenal Polo Branca 2', imageFile: 'ArsenalPoloBranca2', folder: 'timesEuropeus', price: 150.00 },
    { id: 1022, name: 'Arsenal Roxo Gradiente', imageFile: 'ArsenalRoxoGradiente', folder: 'timesEuropeus', price: 150.00 },
    { id: 1023, name: 'Arsenal Vermelha Branca', imageFile: 'ArsenalVermelhaBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1024, name: 'Aston Villa Vinho', imageFile: 'AstonVillaVinho', folder: 'timesEuropeus', price: 150.00 },
    { id: 1025, name: 'Aston Villa Vinho 2', imageFile: 'AstonVillaVinho2', folder: 'timesEuropeus', price: 150.00 },
    { id: 1026, name: 'Ath Bilbao Polo Listrada', imageFile: 'AthBilbaoPoloListrada', folder: 'timesEuropeus', price: 150.00 },
    { id: 1027, name: 'Ath Madrid Azul Amarelo', imageFile: 'AthMadridAzulAmarelo', folder: 'timesEuropeus', price: 150.00 },
    { id: 1028, name: 'Ath Madrid Cinza', imageFile: 'AthMadridCinza', folder: 'timesEuropeus', price: 150.00 },
    { id: 1029, name: 'Ath Madrid Listrada', imageFile: 'AthMadridListrada', folder: 'timesEuropeus', price: 150.00 },
    { id: 1030, name: 'Ath Madrid Wonder Woman', imageFile: 'AthMadridWonderWoman', folder: 'timesEuropeus', price: 150.00 },
    { id: 1031, name: 'Barcelona 125 Anos', imageFile: 'Barcelona125Anos', folder: 'timesEuropeus', price: 150.00 },
    { id: 1032, name: 'Barcelona Areia Azul', imageFile: 'BarcelonaAreiaAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1033, name: 'Barcelona Gradiente', imageFile: 'BarcelonaGradiente', folder: 'timesEuropeus', price: 150.00 },
    { id: 1034, name: 'Barcelona Lamine Yamal', imageFile: 'BarcelonaLamineYamal', folder: 'timesEuropeus', price: 150.00 },
    { id: 1035, name: 'Barcelona Preta Cactus Jack', imageFile: 'BarcelonaPretaCactusjack', folder: 'timesEuropeus', price: 150.00 },
    { id: 1036, name: 'Barcelona Total 90 Laranja', imageFile: 'BarcelonaTotal90Laranja', folder: 'timesEuropeus', price: 150.00 },
    { id: 1037, name: 'Bayern Leverkusen Preto', imageFile: 'BayernLeverkusenPreto', folder: 'timesEuropeus', price: 150.00 },
    { id: 1038, name: 'Bayern Munchen 125 Anos Vinho', imageFile: 'BayernMunchen125AnosVinho', folder: 'timesEuropeus', price: 150.00 },
    { id: 1039, name: 'Bayern Munchen Branca Manchas', imageFile: 'BayernMunchenBrancaManchas', folder: 'timesEuropeus', price: 150.00 },
    { id: 1040, name: 'Bayern Munchen Preta', imageFile: 'BayernMunchenPreta', folder: 'timesEuropeus', price: 150.00 },
    { id: 1041, name: 'Bayern Munchen Preto Xadrez', imageFile: 'BayernMunchenPretoXadrez', folder: 'timesEuropeus', price: 150.00 },
    { id: 1042, name: 'Bayern Munchen Vermelha Branca', imageFile: 'BayernMunchenVermelhaBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1043, name: 'Benfica Branca Vermelha', imageFile: 'BenficaBrancaVermelha', folder: 'timesEuropeus', price: 150.00 },
    { id: 1044, name: 'Benfica Cinza Vermelha', imageFile: 'BenficaCinzaVermelha', folder: 'timesEuropeus', price: 150.00 },
    { id: 1045, name: 'Benfica Vermelha', imageFile: 'BenficaVermelha', folder: 'timesEuropeus', price: 150.00 },
    { id: 1046, name: 'Boca Jrs Amarela', imageFile: 'BocaJrsAmarela', folder: 'timesEuropeus', price: 150.00 },
    { id: 1047, name: 'Boca Jrs Azul Amarelo', imageFile: 'BocaJrsAzulAmarelo', folder: 'timesEuropeus', price: 150.00 },
    { id: 1048, name: 'Boca Jrs Estrelas Azul', imageFile: 'BocaJrsEstrelasAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1049, name: 'Borussia Amarelo Preto', imageFile: 'BorussiaAmareloPreto', folder: 'timesEuropeus', price: 150.00 },
    { id: 1050, name: 'Borussia Dortmund Amarela', imageFile: 'BorussiaDortmundAmarela', folder: 'timesEuropeus', price: 150.00 },
    { id: 1051, name: 'Brighton Lilas', imageFile: 'BrightonLilas', folder: 'timesEuropeus', price: 150.00 },
    { id: 1052, name: 'Celtic Listrado', imageFile: 'CelticListrado', folder: 'timesEuropeus', price: 150.00 },
    { id: 1053, name: 'Celtic Preta Verde Limao', imageFile: 'CelticPretaVerdeLimao', folder: 'timesEuropeus', price: 150.00 },
    { id: 1054, name: 'Chelsea Azul', imageFile: 'ChelseaAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1055, name: 'Chelsea Branca', imageFile: 'ChelseaBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1056, name: 'Chelsea Preta Total 90', imageFile: 'ChelseaPretaTotal90', folder: 'timesEuropeus', price: 150.00 },
    { id: 1057, name: 'Colo Colo Polo Branca', imageFile: 'ColoColoPoloBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1058, name: 'Colo Colo Preto', imageFile: 'ColoColoPreto', folder: 'timesEuropeus', price: 150.00 },
    { id: 1059, name: 'Feyenoord Branca Vermelha', imageFile: 'FeyenoordBrancaVermelha', folder: 'timesEuropeus', price: 150.00 },
    { id: 1060, name: 'Fulham Branca', imageFile: 'FulhamBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1061, name: 'Inter De Milano Branca Azul', imageFile: 'InterDeMilaoBrancaAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1062, name: 'Inter De Milano Branco Away', imageFile: 'InterDeMilaoBrancoAway', folder: 'timesEuropeus', price: 150.00 },
    { id: 1063, name: 'Inter Miami Azul', imageFile: 'InterMiamiAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1064, name: 'Inter Miami Listrado Rosa', imageFile: 'InterMiamiListradoRosa', folder: 'timesEuropeus', price: 150.00 },
    { id: 1065, name: 'Inter Miami Messi Polo Preta', imageFile: 'InterMiamiMessiPoloPreta', folder: 'timesEuropeus', price: 150.00 },
    { id: 1066, name: 'Inter Miami Messi Preta', imageFile: 'InterMiamiMessiPreta', folder: 'timesEuropeus', price: 150.00 },
    { id: 1067, name: 'Inter Miami Polo Rosa', imageFile: 'InterMiamiPoloRosa', folder: 'timesEuropeus', price: 150.00 },
    { id: 1068, name: 'Inter Miami Polo Rosa Messi', imageFile: 'InterMiamiPoloRosaMessi', folder: 'timesEuropeus', price: 150.00 },
    { id: 1069, name: 'Inter Miami Preta Rosa', imageFile: 'InterMiamiPretaRosa', folder: 'timesEuropeus', price: 150.00 },
    { id: 1070, name: 'Inter Miami Preto Cinza', imageFile: 'InterMiamiPretoCinza', folder: 'timesEuropeus', price: 150.00 },
    { id: 1071, name: 'Inter Miami Rosa', imageFile: 'InterMiamiRosa', folder: 'timesEuropeus', price: 150.00 },
    { id: 1072, name: 'Inter Milao Listra Preta Azul', imageFile: 'InterMilaoListraPretaAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1073, name: 'Juventus Listrado', imageFile: 'JuventosListrado', folder: 'timesEuropeus', price: 150.00 },
    { id: 1074, name: 'Juventus Preta Roses', imageFile: 'JuventosPretaRoses', folder: 'timesEuropeus', price: 150.00 },
    { id: 1075, name: 'LA Galaxy Branca', imageFile: 'LAGalaxyBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1076, name: 'Lille Vermelha', imageFile: 'LilleVermelha', folder: 'timesEuropeus', price: 150.00 },
    { id: 1077, name: 'Liverpool Branco Det Vermelho', imageFile: 'LiverpoolBrancoDetVermelho', folder: 'timesEuropeus', price: 150.00 },
    { id: 1078, name: 'Liverpool Off White', imageFile: 'LiverpoolOffWhite', folder: 'timesEuropeus', price: 150.00 },
    { id: 1079, name: 'Liverpool Preto Listras', imageFile: 'LiverpoolPretoListras', folder: 'timesEuropeus', price: 150.00 },
    { id: 1080, name: 'Liverpool Preto Ouro', imageFile: 'LiverpoolPretoOuro', folder: 'timesEuropeus', price: 150.00 },
    { id: 1081, name: 'Liverpool Verde', imageFile: 'LiverpoolVerde', folder: 'timesEuropeus', price: 150.00 },
    { id: 1082, name: 'Liverpool Vermelha', imageFile: 'LiverpoolVermelha', folder: 'timesEuropeus', price: 150.00 },
    { id: 1083, name: 'Lyon Azul Listrada', imageFile: 'LyonAzulListrada', folder: 'timesEuropeus', price: 150.00 },
    { id: 1084, name: 'Manchester City Azul', imageFile: 'ManchesterCityAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1085, name: 'Manchester City Azul 2', imageFile: 'ManchesterCityAzul2', folder: 'timesEuropeus', price: 150.00 },
    { id: 1086, name: 'Manchester City Branca', imageFile: 'ManchesterCityBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1087, name: 'Manchester City Dragao Cinza', imageFile: 'ManchesterCityDragaoCinza', folder: 'timesEuropeus', price: 150.00 },
    { id: 1088, name: 'Manchester City Polo Preta', imageFile: 'ManchesterCityPoloPreta', folder: 'timesEuropeus', price: 150.00 },
    { id: 1089, name: 'Manchester United Azul', imageFile: 'ManchesterUnitedAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1090, name: 'Manchester United Preta Amarela', imageFile: 'ManchesterUnitedPretaAmarela', folder: 'timesEuropeus', price: 150.00 },
    { id: 1091, name: 'Manchester United Vermelha', imageFile: 'ManchesterUnitedVermelha', folder: 'timesEuropeus', price: 150.00 },
    { id: 1092, name: 'Manchester United Vermelha Preta', imageFile: 'ManchesterUnitedVermelhaPreta', folder: 'timesEuropeus', price: 150.00 },
    { id: 1093, name: 'Milan Branca', imageFile: 'MilanBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1094, name: 'Milan Cinza', imageFile: 'MilanCinza', folder: 'timesEuropeus', price: 150.00 },
    { id: 1095, name: 'Milan Cinza Verde', imageFile: 'MilanCinzaVerde', folder: 'timesEuropeus', price: 150.00 },
    { id: 1096, name: 'Milan Preta Vermelha', imageFile: 'MilanPretaVermelha', folder: 'timesEuropeus', price: 150.00 },
    { id: 1097, name: 'Milan Preto Verde', imageFile: 'MilanPretoVerde', folder: 'timesEuropeus', price: 150.00 },
    { id: 1098, name: 'Monaco Branca Vermelha', imageFile: 'MonacoBrancaVermelha', folder: 'timesEuropeus', price: 150.00 },
    { id: 1099, name: 'Napoli Armadura Azul', imageFile: 'NapoliArmaduraAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1100, name: 'Napoli Azul', imageFile: 'NapoliAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1101, name: 'Napoli Off White', imageFile: 'NapoliOffWhite', folder: 'timesEuropeus', price: 150.00 },
    { id: 1102, name: 'Napoli Polo Azul', imageFile: 'NapoliPoloAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1103, name: 'Newcastle Azul', imageFile: 'NewcastleAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1104, name: 'Newcastle Listrado', imageFile: 'NewCastleListrado', folder: 'timesEuropeus', price: 150.00 },
    { id: 1105, name: 'Newcastle Verde', imageFile: 'NewcastleVerde', folder: 'timesEuropeus', price: 150.00 },
    { id: 1106, name: 'Oasis Polo Branca', imageFile: 'OasisPoloBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1107, name: 'Olympique Marseille Azul Pontilhado', imageFile: 'OlympiqueMarseilleAzulPontilhado', folder: 'timesEuropeus', price: 150.00 },
    { id: 1108, name: 'Olympique Marseille Polo Branca', imageFile: 'OlympiqueMarseillePoloBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1109, name: 'Olympique Marseille Preto Azul', imageFile: 'OlympiqueMarseillePretoAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1110, name: 'Porto Azul Listrado', imageFile: 'PortoAzulListrado', folder: 'timesEuropeus', price: 150.00 },
    { id: 1111, name: 'Porto Listrado', imageFile: 'PortoListrado', folder: 'timesEuropeus', price: 150.00 },
    { id: 1112, name: 'PSG Azul', imageFile: 'PSGAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1113, name: 'PSG Azul Jordan', imageFile: 'PSGAzulJordan', folder: 'timesEuropeus', price: 150.00 },
    { id: 1114, name: 'PSG Azul Marinho', imageFile: 'PSGAzulMarinho', folder: 'timesEuropeus', price: 150.00 },
    { id: 1115, name: 'PSG Regata Preta', imageFile: 'PSGRegataPreta', folder: 'timesEuropeus', price: 150.00 },
    { id: 1116, name: 'PSG Rosa', imageFile: 'PSGRosa', folder: 'timesEuropeus', price: 150.00 },
    { id: 1117, name: 'PSG Vermelha Azul', imageFile: 'PSGVermelhaAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1118, name: 'Racing Club Polo Branca', imageFile: 'RacingClucPoloBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1119, name: 'Rangers FC Polo Vermelha', imageFile: 'RangersFCPoloVermelha', folder: 'timesEuropeus', price: 150.00 },
    { id: 1120, name: 'RB Leipzig Azul Marinho', imageFile: 'RBLeipzigAzulMarinho', folder: 'timesEuropeus', price: 150.00 },
    { id: 1121, name: 'RB Leipzig Branca', imageFile: 'RBLeipzigBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1122, name: 'Real Betis Branca Verde', imageFile: 'RealBetisBrancaVerde', folder: 'timesEuropeus', price: 150.00 },
    { id: 1123, name: 'Real Betis Polo Branca', imageFile: 'RealBetisPoloBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1124, name: 'Real Betis Polo Listrada', imageFile: 'RealBetisPoloListrada', folder: 'timesEuropeus', price: 150.00 },
    { id: 1125, name: 'Real Madrid Adidas Ori Branca', imageFile: 'RealMadridAdidasOriBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1126, name: 'Real Madrid Azul', imageFile: 'RealMadridAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1127, name: 'Real Madrid Branca Cinza', imageFile: 'RealMadridBrancaCinza', folder: 'timesEuropeus', price: 150.00 },
    { id: 1128, name: 'Real Madrid Cinza', imageFile: 'RealMadridCinza', folder: 'timesEuropeus', price: 150.00 },
    { id: 1129, name: 'Real Madrid Laranja', imageFile: 'RealMadridLaranja', folder: 'timesEuropeus', price: 150.00 },
    { id: 1130, name: 'Real Madrid Laranja 2', imageFile: 'RealMadridLaranja2', folder: 'timesEuropeus', price: 150.00 },
    { id: 1131, name: 'Real Madrid Preto Listrado', imageFile: 'RealMadridPretpListrado', folder: 'timesEuropeus', price: 150.00 },
    { id: 1132, name: 'Real Madrid Roses Preta', imageFile: 'RealMadridRosesPreta', folder: 'timesEuropeus', price: 150.00 },
    { id: 1133, name: 'Real Madrid Treino', imageFile: 'RealMadridTreino', folder: 'timesEuropeus', price: 150.00 },
    { id: 1134, name: 'Real Racing Polo Preta Verde', imageFile: 'RealRacingPoloPretaVerde', folder: 'timesEuropeus', price: 150.00 },
    { id: 1135, name: 'Roma Polo Vermelha', imageFile: 'RomaPoloVermelha', folder: 'timesEuropeus', price: 150.00 },
    { id: 1136, name: 'Roma Vinho Laranja', imageFile: 'RomaVinhoLaranja', folder: 'timesEuropeus', price: 150.00 },
    { id: 1137, name: 'Sporting Listrada', imageFile: 'SportingListrada', folder: 'timesEuropeus', price: 150.00 },
    { id: 1138, name: 'Stoke City Listrada', imageFile: 'StokeCityListrada', folder: 'timesEuropeus', price: 150.00 },
    { id: 1139, name: 'Tigres Amarela', imageFile: 'TigresAmarela', folder: 'timesEuropeus', price: 150.00 },
    { id: 1140, name: 'Tottenham All Black', imageFile: 'TottenhamAllBlack', folder: 'timesEuropeus', price: 150.00 },
    { id: 1141, name: 'Tottenham Branca', imageFile: 'TottenhamBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1142, name: 'Tottenham Dragao Dourado', imageFile: 'TottenhamDragaoDourado', folder: 'timesEuropeus', price: 150.00 },
    { id: 1143, name: 'Tottenham Listra Azul', imageFile: 'TottenhamListraAzul', folder: 'timesEuropeus', price: 150.00 },
    { id: 1144, name: 'Tottenham Preta', imageFile: 'TottenhamPreta', folder: 'timesEuropeus', price: 150.00 },
    { id: 1145, name: 'Valencia Branca', imageFile: 'ValenciaBranca', folder: 'timesEuropeus', price: 150.00 },
    { id: 1146, name: 'Valencia Branca Patrocinio', imageFile: 'ValenciaBrancaPatrocinio', folder: 'timesEuropeus', price: 150.00 },
    { id: 1147, name: 'Valencia Vermelha', imageFile: 'ValenciaVermelha', folder: 'timesEuropeus', price: 150.00 },
    { id: 1148, name: 'West Ham Vinho', imageFile: 'WesthamVinho', folder: 'timesEuropeus', price: 150.00 },
  ],
3: [
    { id: 3100, name: 'Seleção 100', imageFile: 'Selecao_100', folder: 'Selecoes', price: 150.00 },
    { id: 3101, name: 'Seleção 101', imageFile: 'Selecao_101', folder: 'Selecoes', price: 150.00 },
    { id: 3102, name: 'Seleção 102', imageFile: 'Selecao_102', folder: 'Selecoes', price: 150.00 },
    { id: 3103, name: 'Seleção 103', imageFile: 'Selecao_103', folder: 'Selecoes', price: 150.00 },
    { id: 3104, name: 'Seleção 104', imageFile: 'Selecao_104', folder: 'Selecoes', price: 150.00 },
    { id: 3105, name: 'Seleção 105', imageFile: 'Selecao_105', folder: 'Selecoes', price: 150.00 },
    { id: 3106, name: 'Seleção 106', imageFile: 'Selecao_106', folder: 'Selecoes', price: 150.00 },
    { id: 3107, name: 'Seleção 107', imageFile: 'Selecao_107', folder: 'Selecoes', price: 150.00 },
    { id: 3108, name: 'Seleção 108', imageFile: 'Selecao_108', folder: 'Selecoes', price: 150.00 },
    { id: 3109, name: 'Seleção 109', imageFile: 'Selecao_109', folder: 'Selecoes', price: 150.00 },
    { id: 3110, name: 'Seleção 110', imageFile: 'Selecao_110', folder: 'Selecoes', price: 150.00 },
    { id: 3111, name: 'Seleção 111', imageFile: 'Selecao_111', folder: 'Selecoes', price: 150.00 },
    { id: 3112, name: 'Seleção 112', imageFile: 'Selecao_112', folder: 'Selecoes', price: 150.00 },
    { id: 3113, name: 'Seleção 113', imageFile: 'Selecao_113', folder: 'Selecoes', price: 150.00 },
    { id: 3114, name: 'Seleção 114', imageFile: 'Selecao_114', folder: 'Selecoes', price: 150.00 },
    { id: 3115, name: 'Seleção 115', imageFile: 'Selecao_115', folder: 'Selecoes', price: 150.00 },
    { id: 3116, name: 'Seleção 116', imageFile: 'Selecao_116', folder: 'Selecoes', price: 150.00 },
    { id: 3117, name: 'Seleção 117', imageFile: 'Selecao_117', folder: 'Selecoes', price: 150.00 },
    { id: 3118, name: 'Seleção 118', imageFile: 'Selecao_118', folder: 'Selecoes', price: 150.00 },
    { id: 3119, name: 'Seleção 119', imageFile: 'Selecao_119', folder: 'Selecoes', price: 150.00 },
    { id: 3120, name: 'Seleção 120', imageFile: 'Selecao_120', folder: 'Selecoes', price: 150.00 },
    { id: 3121, name: 'Seleção 121', imageFile: 'Selecao_121', folder: 'Selecoes', price: 150.00 },
    { id: 3122, name: 'Seleção 122', imageFile: 'Selecao_122', folder: 'Selecoes', price: 150.00 },
    { id: 3123, name: 'Seleção 123', imageFile: 'Selecao_123', folder: 'Selecoes', price: 150.00 },
    { id: 3124, name: 'Seleção 124', imageFile: 'Selecao_124', folder: 'Selecoes', price: 150.00 },
    { id: 3125, name: 'Seleção 125', imageFile: 'Selecao_125', folder: 'Selecoes', price: 150.00 },
    { id: 3126, name: 'Seleção 126', imageFile: 'Selecao_126', folder: 'Selecoes', price: 150.00 },
    { id: 3127, name: 'Seleção 127', imageFile: 'Selecao_127', folder: 'Selecoes', price: 150.00 },
    { id: 3128, name: 'Seleção 128', imageFile: 'Selecao_128', folder: 'Selecoes', price: 150.00 },
    { id: 3129, name: 'Seleção 129', imageFile: 'Selecao_129', folder: 'Selecoes', price: 150.00 },
    { id: 3130, name: 'Seleção 130', imageFile: 'Selecao_130', folder: 'Selecoes', price: 150.00 },
    { id: 3131, name: 'Seleção 131', imageFile: 'Selecao_131', folder: 'Selecoes', price: 150.00 },
    { id: 3132, name: 'Seleção 132', imageFile: 'Selecao_132', folder: 'Selecoes', price: 150.00 },
    { id: 3133, name: 'Seleção 133', imageFile: 'Selecao_133', folder: 'Selecoes', price: 150.00 },
    { id: 3134, name: 'Seleção 134', imageFile: 'Selecao_134', folder: 'Selecoes', price: 150.00 },
    { id: 3135, name: 'Seleção 135', imageFile: 'Selecao_135', folder: 'Selecoes', price: 150.00 },
    { id: 3136, name: 'Seleção 136', imageFile: 'Selecao_136', folder: 'Selecoes', price: 150.00 },
    { id: 3137, name: 'Seleção 137', imageFile: 'Selecao_137', folder: 'Selecoes', price: 150.00 },
    { id: 3138, name: 'Seleção 138', imageFile: 'Selecao_138', folder: 'Selecoes', price: 150.00 },
    { id: 3139, name: 'Seleção 139', imageFile: 'Selecao_139', folder: 'Selecoes', price: 150.00 },
    { id: 3140, name: 'Seleção 140', imageFile: 'Selecao_140', folder: 'Selecoes', price: 150.00 },
    { id: 3141, name: 'Seleção 141', imageFile: 'Selecao_141', folder: 'Selecoes', price: 150.00 },
    { id: 3142, name: 'Seleção 142', imageFile: 'Selecao_142', folder: 'Selecoes', price: 150.00 },
    { id: 3143, name: 'Seleção 143', imageFile: 'Selecao_143', folder: 'Selecoes', price: 150.00 },
    { id: 3144, name: 'Seleção 144', imageFile: 'Selecao_144', folder: 'Selecoes', price: 150.00 },
    { id: 3145, name: 'Seleção 145', imageFile: 'Selecao_145', folder: 'Selecoes', price: 150.00 },
    { id: 3146, name: 'Seleção 146', imageFile: 'Selecao_146', folder: 'Selecoes', price: 150.00 },
    { id: 3147, name: 'Seleção 147', imageFile: 'Selecao_147', folder: 'Selecoes', price: 150.00 },
    { id: 3148, name: 'Seleção 148', imageFile: 'Selecao_148', folder: 'Selecoes', price: 150.00 },
    { id: 3149, name: 'Seleção 149', imageFile: 'Selecao_149', folder: 'Selecoes', price: 150.00 },
    { id: 3150, name: 'Seleção 150', imageFile: 'Selecao_150', folder: 'Selecoes', price: 150.00 },
    { id: 3151, name: 'Seleção 151', imageFile: 'Selecao_151', folder: 'Selecoes', price: 150.00 },
    { id: 3152, name: 'Seleção 152', imageFile: 'Selecao_152', folder: 'Selecoes', price: 150.00 },
    { id: 3153, name: 'Seleção 153', imageFile: 'Selecao_153', folder: 'Selecoes', price: 150.00 },
    { id: 3154, name: 'Seleção 154', imageFile: 'Selecao_154', folder: 'Selecoes', price: 150.00 },
    { id: 3155, name: 'Seleção 155', imageFile: 'Selecao_155', folder: 'Selecoes', price: 150.00 },
    { id: 3156, name: 'Seleção 156', imageFile: 'Selecao_156', folder: 'Selecoes', price: 150.00 },
    { id: 3157, name: 'Seleção 157', imageFile: 'Selecao_157', folder: 'Selecoes', price: 150.00 },
    { id: 3158, name: 'Seleção 158', imageFile: 'Selecao_158', folder: 'Selecoes', price: 150.00 },
    { id: 3159, name: 'Seleção 159', imageFile: 'Selecao_159', folder: 'Selecoes', price: 150.00 },
  ],
4: [
    { id: 4100, name: 'Retrô 100', imageFile: 'Retro_100', folder: 'retro', price: 150.00 },
    { id: 4101, name: 'Retrô 101', imageFile: 'Retro_101', folder: 'retro', price: 150.00 },
    { id: 4102, name: 'Retrô 102', imageFile: 'Retro_102', folder: 'retro', price: 150.00 },
    { id: 4103, name: 'Retrô 103', imageFile: 'Retro_103', folder: 'retro', price: 150.00 },
    { id: 4104, name: 'Retrô 104', imageFile: 'Retro_104', folder: 'retro', price: 150.00 },
    { id: 4105, name: 'Retrô 105', imageFile: 'Retro_105', folder: 'retro', price: 150.00 },
    { id: 4106, name: 'Retrô 106', imageFile: 'Retro_106', folder: 'retro', price: 150.00 },
    { id: 4107, name: 'Retrô 107', imageFile: 'Retro_107', folder: 'retro', price: 150.00 },
    { id: 4108, name: 'Retrô 108', imageFile: 'Retro_108', folder: 'retro', price: 150.00 },
    { id: 4109, name: 'Retrô 109', imageFile: 'Retro_109', folder: 'retro', price: 150.00 },
    { id: 4110, name: 'Retrô 110', imageFile: 'Retro_110', folder: 'retro', price: 150.00 },
    { id: 4111, name: 'Retrô 111', imageFile: 'Retro_111', folder: 'retro', price: 150.00 },
    { id: 4112, name: 'Retrô 112', imageFile: 'Retro_112', folder: 'retro', price: 150.00 },
    { id: 4113, name: 'Retrô 113', imageFile: 'Retro_113', folder: 'retro', price: 150.00 },
    { id: 4114, name: 'Retrô 114', imageFile: 'Retro_114', folder: 'retro', price: 150.00 },
    { id: 4115, name: 'Retrô 115', imageFile: 'Retro_115', folder: 'retro', price: 150.00 },
    { id: 4116, name: 'Retrô 116', imageFile: 'Retro_116', folder: 'retro', price: 150.00 },
    { id: 4117, name: 'Retrô 117', imageFile: 'Retro_117', folder: 'retro', price: 150.00 },
    { id: 4118, name: 'Retrô 118', imageFile: 'Retro_118', folder: 'retro', price: 150.00 },
    { id: 4119, name: 'Retrô 119', imageFile: 'Retro_119', folder: 'retro', price: 150.00 },
    { id: 4120, name: 'Retrô 120', imageFile: 'Retro_120', folder: 'retro', price: 150.00 },
    { id: 4121, name: 'Retrô 121', imageFile: 'Retro_121', folder: 'retro', price: 150.00 },
    { id: 4122, name: 'Retrô 122', imageFile: 'Retro_122', folder: 'retro', price: 150.00 },
    { id: 4123, name: 'Retrô 123', imageFile: 'Retro_123', folder: 'retro', price: 150.00 },
    { id: 4124, name: 'Retrô 124', imageFile: 'Retro_124', folder: 'retro', price: 150.00 },
    { id: 4125, name: 'Retrô 125', imageFile: 'Retro_125', folder: 'retro', price: 150.00 },
    { id: 4126, name: 'Retrô 126', imageFile: 'Retro_126', folder: 'retro', price: 150.00 },
    { id: 4127, name: 'Retrô 127', imageFile: 'Retro_127', folder: 'retro', price: 150.00 },
    { id: 4128, name: 'Retrô 128', imageFile: 'Retro_128', folder: 'retro', price: 150.00 },
    { id: 4129, name: 'Retrô 129', imageFile: 'Retro_129', folder: 'retro', price: 150.00 },
    { id: 4130, name: 'Retrô 130', imageFile: 'Retro_130', folder: 'retro', price: 150.00 },
    { id: 4131, name: 'Retrô 131', imageFile: 'Retro_131', folder: 'retro', price: 150.00 },
    { id: 4132, name: 'Retrô 132', imageFile: 'Retro_132', folder: 'retro', price: 150.00 },
    { id: 4133, name: 'Retrô 133', imageFile: 'Retro_133', folder: 'retro', price: 150.00 },
    { id: 4134, name: 'Retrô 134', imageFile: 'Retro_134', folder: 'retro', price: 150.00 },
    { id: 4135, name: 'Retrô 135', imageFile: 'Retro_135', folder: 'retro', price: 150.00 },
    { id: 4136, name: 'Retrô 136', imageFile: 'Retro_136', folder: 'retro', price: 150.00 },
    { id: 4137, name: 'Retrô 137', imageFile: 'Retro_137', folder: 'retro', price: 150.00 },
    { id: 4138, name: 'Retrô 138', imageFile: 'Retro_138', folder: 'retro', price: 150.00 },
    { id: 4139, name: 'Retrô 139', imageFile: 'Retro_139', folder: 'retro', price: 150.00 },
    { id: 4140, name: 'Retrô 140', imageFile: 'Retro_140', folder: 'retro', price: 150.00 },
    { id: 4141, name: 'Retrô 141', imageFile: 'Retro_141', folder: 'retro', price: 150.00 },
    { id: 4142, name: 'Retrô 142', imageFile: 'Retro_142', folder: 'retro', price: 150.00 },
    { id: 4143, name: 'Retrô 143', imageFile: 'Retro_143', folder: 'retro', price: 150.00 },
    { id: 4144, name: 'Retrô 144', imageFile: 'Retro_144', folder: 'retro', price: 150.00 },
    { id: 4145, name: 'Retrô 145', imageFile: 'Retro_145', folder: 'retro', price: 150.00 },
    { id: 4146, name: 'Retrô 146', imageFile: 'Retro_146', folder: 'retro', price: 150.00 },
    { id: 4147, name: 'Retrô 147', imageFile: 'Retro_147', folder: 'retro', price: 150.00 },
    { id: 4148, name: 'Retrô 148', imageFile: 'Retro_148', folder: 'retro', price: 150.00 },
    { id: 4149, name: 'Retrô 149', imageFile: 'Retro_149', folder: 'retro', price: 150.00 },
    { id: 4150, name: 'Retrô 150', imageFile: 'Retro_150', folder: 'retro', price: 150.00 },
    { id: 4151, name: 'Retrô 151', imageFile: 'Retro_151', folder: 'retro', price: 150.00 },
    { id: 4152, name: 'Retrô 152', imageFile: 'Retro_152', folder: 'retro', price: 150.00 },
    { id: 4153, name: 'Retrô 153', imageFile: 'Retro_153', folder: 'retro', price: 150.00 },
    { id: 4154, name: 'Retrô 154', imageFile: 'Retro_154', folder: 'retro', price: 150.00 },
    { id: 4155, name: 'Retrô 155', imageFile: 'Retro_155', folder: 'retro', price: 150.00 },
    { id: 4156, name: 'Retrô 156', imageFile: 'Retro_156', folder: 'retro', price: 150.00 },
    { id: 4157, name: 'Retrô 157', imageFile: 'Retro_157', folder: 'retro', price: 150.00 },
    { id: 4158, name: 'Retrô 158', imageFile: 'Retro_158', folder: 'retro', price: 150.00 },
    { id: 4159, name: 'Retrô 159', imageFile: 'Retro_159', folder: 'retro', price: 150.00 },
    { id: 4160, name: 'Retrô 160', imageFile: 'Retro_160', folder: 'retro', price: 150.00 },
    { id: 4161, name: 'Retrô 161', imageFile: 'Retro_161', folder: 'retro', price: 150.00 },
    { id: 4162, name: 'Retrô 162', imageFile: 'Retro_162', folder: 'retro', price: 150.00 },
    { id: 4163, name: 'Retrô 163', imageFile: 'Retro_163', folder: 'retro', price: 150.00 },
    { id: 4164, name: 'Retrô 164', imageFile: 'Retro_164', folder: 'retro', price: 150.00 },
    { id: 4165, name: 'Retrô 165', imageFile: 'Retro_165', folder: 'retro', price: 150.00 },
    { id: 4166, name: 'Retrô 166', imageFile: 'Retro_166', folder: 'retro', price: 150.00 },
    { id: 4167, name: 'Retrô 167', imageFile: 'Retro_167', folder: 'retro', price: 150.00 },
    { id: 4168, name: 'Retrô 168', imageFile: 'Retro_168', folder: 'retro', price: 150.00 },
    { id: 4169, name: 'Retrô 169', imageFile: 'Retro_169', folder: 'retro', price: 150.00 },
    { id: 4170, name: 'Retrô 170', imageFile: 'Retro_170', folder: 'retro', price: 150.00 },
    { id: 4171, name: 'Retrô 171', imageFile: 'Retro_171', folder: 'retro', price: 150.00 },
    { id: 4172, name: 'Retrô 172', imageFile: 'Retro_172', folder: 'retro', price: 150.00 },
    { id: 4173, name: 'Retrô 173', imageFile: 'Retro_173', folder: 'retro', price: 150.00 },
    { id: 4174, name: 'Retrô 174', imageFile: 'Retro_174', folder: 'retro', price: 150.00 },
    { id: 4175, name: 'Retrô 175', imageFile: 'Retro_175', folder: 'retro', price: 150.00 },
    { id: 4176, name: 'Retrô 176', imageFile: 'Retro_176', folder: 'retro', price: 150.00 },
    { id: 4177, name: 'Retrô 177', imageFile: 'Retro_177', folder: 'retro', price: 150.00 },
    { id: 4178, name: 'Retrô 178', imageFile: 'Retro_178', folder: 'retro', price: 150.00 },
    { id: 4179, name: 'Retrô 179', imageFile: 'Retro_179', folder: 'retro', price: 150.00 },
    { id: 4180, name: 'Retrô 180', imageFile: 'Retro_180', folder: 'retro', price: 150.00 },
    { id: 4181, name: 'Retrô 181', imageFile: 'Retro_181', folder: 'retro', price: 150.00 },
    { id: 4182, name: 'Retrô 182', imageFile: 'Retro_182', folder: 'retro', price: 150.00 },
    { id: 4183, name: 'Retrô 183', imageFile: 'Retro_183', folder: 'retro', price: 150.00 },
    { id: 4184, name: 'Retrô 184', imageFile: 'Retro_184', folder: 'retro', price: 150.00 },
    { id: 4185, name: 'Retrô 185', imageFile: 'Retro_185', folder: 'retro', price: 150.00 },
    { id: 4186, name: 'Retrô 186', imageFile: 'Retro_186', folder: 'retro', price: 150.00 },
    { id: 4187, name: 'Retrô 187', imageFile: 'Retro_187', folder: 'retro', price: 150.00 },
    { id: 4188, name: 'Retrô 188', imageFile: 'Retro_188', folder: 'retro', price: 150.00 },
    { id: 4189, name: 'Retrô 189', imageFile: 'Retro_189', folder: 'retro', price: 150.00 },
    { id: 4190, name: 'Retrô 190', imageFile: 'Retro_190', folder: 'retro', price: 150.00 },
    { id: 4191, name: 'Retrô 191', imageFile: 'Retro_191', folder: 'retro', price: 150.00 },
    { id: 4192, name: 'Retrô 192', imageFile: 'Retro_192', folder: 'retro', price: 150.00 },
    { id: 4193, name: 'Retrô 193', imageFile: 'Retro_193', folder: 'retro', price: 150.00 },
    { id: 4194, name: 'Retrô 194', imageFile: 'Retro_194', folder: 'retro', price: 150.00 },
    { id: 4195, name: 'Retrô 195', imageFile: 'Retro_195', folder: 'retro', price: 150.00 },
    { id: 4196, name: 'Retrô 196', imageFile: 'Retro_196', folder: 'retro', price: 150.00 },
    { id: 4197, name: 'Retrô 197', imageFile: 'Retro_197', folder: 'retro', price: 150.00 },
    { id: 4198, name: 'Retrô 198', imageFile: 'Retro_198', folder: 'retro', price: 150.00 },
    { id: 4199, name: 'Retrô 199', imageFile: 'Retro_199', folder: 'retro', price: 150.00 },
    { id: 4200, name: 'Retrô 200', imageFile: 'Retro_200', folder: 'retro', price: 150.00 },
    { id: 4201, name: 'Retrô 201', imageFile: 'Retro_201', folder: 'retro', price: 150.00 },
    { id: 4202, name: 'Retrô 202', imageFile: 'Retro_202', folder: 'retro', price: 150.00 },
    { id: 4203, name: 'Retrô 203', imageFile: 'Retro_203', folder: 'retro', price: 150.00 },
    { id: 4204, name: 'Retrô 204', imageFile: 'Retro_204', folder: 'retro', price: 150.00 },
    { id: 4205, name: 'Retrô 205', imageFile: 'Retro_205', folder: 'retro', price: 150.00 },
    { id: 4206, name: 'Retrô 206', imageFile: 'Retro_206', folder: 'retro', price: 150.00 },
    { id: 4207, name: 'Retrô 207', imageFile: 'Retro_207', folder: 'retro', price: 150.00 },
    { id: 4208, name: 'Retrô 208', imageFile: 'Retro_208', folder: 'retro', price: 150.00 },
    { id: 4209, name: 'Retrô 209', imageFile: 'Retro_209', folder: 'retro', price: 150.00 },
    { id: 4210, name: 'Retrô 210', imageFile: 'Retro_210', folder: 'retro', price: 150.00 },
    { id: 4211, name: 'Retrô 211', imageFile: 'Retro_211', folder: 'retro', price: 150.00 },
    { id: 4212, name: 'Retrô 212', imageFile: 'Retro_212', folder: 'retro', price: 150.00 },
    { id: 4213, name: 'Retrô 213', imageFile: 'Retro_213', folder: 'retro', price: 150.00 },
    { id: 4214, name: 'Retrô 214', imageFile: 'Retro_214', folder: 'retro', price: 150.00 },
    { id: 4215, name: 'Retrô 215', imageFile: 'Retro_215', folder: 'retro', price: 150.00 },
    { id: 4216, name: 'Retrô 216', imageFile: 'Retro_216', folder: 'retro', price: 150.00 },
    { id: 4217, name: 'Retrô 217', imageFile: 'Retro_217', folder: 'retro', price: 150.00 },
    { id: 4218, name: 'Retrô 218', imageFile: 'Retro_218', folder: 'retro', price: 150.00 },
    { id: 4219, name: 'Retrô 219', imageFile: 'Retro_219', folder: 'retro', price: 150.00 },
    { id: 4220, name: 'Retrô 220', imageFile: 'Retro_220', folder: 'retro', price: 150.00 },
    { id: 4221, name: 'Retrô 221', imageFile: 'Retro_221', folder: 'retro', price: 150.00 },
  ],5: [
    { id: 5001, name: 'Modelo Jogador 1', imageFile: 'ModeloJogador_1', folder: 'modeloJogador', price: 150.00 },
    { id: 5002, name: 'Modelo Jogador 2', imageFile: 'ModeloJogador_2', folder: 'modeloJogador', price: 150.00 },
    { id: 5003, name: 'Modelo Jogador 3', imageFile: 'ModeloJogador_3', folder: 'modeloJogador', price: 150.00 },
    { id: 5004, name: 'Modelo Jogador 4', imageFile: 'ModeloJogador_4', folder: 'modeloJogador', price: 150.00 },
    { id: 5005, name: 'Modelo Jogador 5', imageFile: 'ModeloJogador_5', folder: 'modeloJogador', price: 150.00 },
    { id: 5006, name: 'Modelo Jogador 6', imageFile: 'ModeloJogador_6', folder: 'modeloJogador', price: 150.00 },
    { id: 5007, name: 'Modelo Jogador 7', imageFile: 'ModeloJogador_7', folder: 'modeloJogador', price: 150.00 },
    { id: 5008, name: 'Modelo Jogador 8', imageFile: 'ModeloJogador_8', folder: 'modeloJogador', price: 150.00 },
    { id: 5009, name: 'Modelo Jogador 9', imageFile: 'ModeloJogador_9', folder: 'modeloJogador', price: 150.00 },
    { id: 5010, name: 'Modelo Jogador 10', imageFile: 'ModeloJogador_10', folder: 'modeloJogador', price: 150.00 },
    { id: 5011, name: 'Modelo Jogador 11', imageFile: 'ModeloJogador_11', folder: 'modeloJogador', price: 150.00 },
    { id: 5012, name: 'Modelo Jogador 12', imageFile: 'ModeloJogador_12', folder: 'modeloJogador', price: 150.00 },
    { id: 5013, name: 'Modelo Jogador 13', imageFile: 'ModeloJogador_13', folder: 'modeloJogador', price: 150.00 },
    { id: 5014, name: 'Modelo Jogador 14', imageFile: 'ModeloJogador_14', folder: 'modeloJogador', price: 150.00 },
    { id: 5015, name: 'Modelo Jogador 15', imageFile: 'ModeloJogador_15', folder: 'modeloJogador', price: 150.00 },
    { id: 5016, name: 'Modelo Jogador 16', imageFile: 'ModeloJogador_16', folder: 'modeloJogador', price: 150.00 },
    { id: 5017, name: 'Modelo Jogador 17', imageFile: 'ModeloJogador_17', folder: 'modeloJogador', price: 150.00 },
    { id: 5018, name: 'Modelo Jogador 18', imageFile: 'ModeloJogador_18', folder: 'modeloJogador', price: 150.00 },
    { id: 5019, name: 'Modelo Jogador 19', imageFile: 'ModeloJogador_19', folder: 'modeloJogador', price: 150.00 },
    { id: 5020, name: 'Modelo Jogador 20', imageFile: 'ModeloJogador_20', folder: 'modeloJogador', price: 150.00 },
    { id: 5021, name: 'Modelo Jogador 21', imageFile: 'ModeloJogador_21', folder: 'modeloJogador', price: 150.00 },
    { id: 5022, name: 'Modelo Jogador 22', imageFile: 'ModeloJogador_22', folder: 'modeloJogador', price: 150.00 },
    { id: 5023, name: 'Modelo Jogador 23', imageFile: 'ModeloJogador_23', folder: 'modeloJogador', price: 150.00 },
    { id: 5024, name: 'Modelo Jogador 24', imageFile: 'ModeloJogador_24', folder: 'modeloJogador', price: 150.00 },
    { id: 5025, name: 'Modelo Jogador 25', imageFile: 'ModeloJogador_25', folder: 'modeloJogador', price: 150.00 },
    { id: 5026, name: 'Modelo Jogador 26', imageFile: 'ModeloJogador_26', folder: 'modeloJogador', price: 150.00 },
    { id: 5027, name: 'Modelo Jogador 27', imageFile: 'ModeloJogador_27', folder: 'modeloJogador', price: 150.00 },
    { id: 5028, name: 'Modelo Jogador 28', imageFile: 'ModeloJogador_28', folder: 'modeloJogador', price: 150.00 },
    { id: 5029, name: 'Modelo Jogador 29', imageFile: 'ModeloJogador_29', folder: 'modeloJogador', price: 150.00 },
    { id: 5030, name: 'Modelo Jogador 30', imageFile: 'ModeloJogador_30', folder: 'modeloJogador', price: 150.00 },
    { id: 5031, name: 'Modelo Jogador 31', imageFile: 'ModeloJogador_31', folder: 'modeloJogador', price: 150.00 },
    { id: 5032, name: 'Modelo Jogador 32', imageFile: 'ModeloJogador_32', folder: 'modeloJogador', price: 150.00 },
    { id: 5033, name: 'Modelo Jogador 33', imageFile: 'ModeloJogador_33', folder: 'modeloJogador', price: 150.00 },
    { id: 5034, name: 'Modelo Jogador 34', imageFile: 'ModeloJogador_34', folder: 'modeloJogador', price: 150.00 },
    { id: 5035, name: 'Modelo Jogador 35', imageFile: 'ModeloJogador_35', folder: 'modeloJogador', price: 150.00 },
    { id: 5036, name: 'Modelo Jogador 36', imageFile: 'ModeloJogador_36', folder: 'modeloJogador', price: 150.00 },
    { id: 5037, name: 'Modelo Jogador 37', imageFile: 'ModeloJogador_37', folder: 'modeloJogador', price: 150.00 },
    { id: 5038, name: 'Modelo Jogador 38', imageFile: 'ModeloJogador_38', folder: 'modeloJogador', price: 150.00 },
    { id: 5039, name: 'Modelo Jogador 39', imageFile: 'ModeloJogador_39', folder: 'modeloJogador', price: 150.00 },
    { id: 5040, name: 'Modelo Jogador 40', imageFile: 'ModeloJogador_40', folder: 'modeloJogador', price: 150.00 },
    { id: 5041, name: 'Modelo Jogador 41', imageFile: 'ModeloJogador_41', folder: 'modeloJogador', price: 150.00 },
    { id: 5042, name: 'Modelo Jogador 42', imageFile: 'ModeloJogador_42', folder: 'modeloJogador', price: 150.00 },
    { id: 5043, name: 'Modelo Jogador 43', imageFile: 'ModeloJogador_43', folder: 'modeloJogador', price: 150.00 },
    { id: 5044, name: 'Modelo Jogador 44', imageFile: 'ModeloJogador_44', folder: 'modeloJogador', price: 150.00 },
    { id: 5045, name: 'Modelo Jogador 45', imageFile: 'ModeloJogador_45', folder: 'modeloJogador', price: 150.00 },
    { id: 5046, name: 'Modelo Jogador 46', imageFile: 'ModeloJogador_46', folder: 'modeloJogador', price: 150.00 },
    { id: 5047, name: 'Modelo Jogador 47', imageFile: 'ModeloJogador_47', folder: 'modeloJogador', price: 150.00 },
    { id: 5048, name: 'Modelo Jogador 48', imageFile: 'ModeloJogador_48', folder: 'modeloJogador', price: 150.00 },
    { id: 5049, name: 'Modelo Jogador 49', imageFile: 'ModeloJogador_49', folder: 'modeloJogador', price: 150.00 },
    { id: 5050, name: 'Modelo Jogador 50', imageFile: 'ModeloJogador_50', folder: 'modeloJogador', price: 150.00 },
    { id: 5051, name: 'Modelo Jogador 51', imageFile: 'ModeloJogador_51', folder: 'modeloJogador', price: 150.00 },
    { id: 5052, name: 'Modelo Jogador 52', imageFile: 'ModeloJogador_52', folder: 'modeloJogador', price: 150.00 },
    { id: 5053, name: 'Modelo Jogador 53', imageFile: 'ModeloJogador_53', folder: 'modeloJogador', price: 150.00 },
    { id: 5054, name: 'Modelo Jogador 54', imageFile: 'ModeloJogador_54', folder: 'modeloJogador', price: 150.00 },
    { id: 5055, name: 'Modelo Jogador 55', imageFile: 'ModeloJogador_55', folder: 'modeloJogador', price: 150.00 },
    { id: 5056, name: 'Modelo Jogador 56', imageFile: 'ModeloJogador_56', folder: 'modeloJogador', price: 150.00 },
    { id: 5057, name: 'Modelo Jogador 57', imageFile: 'ModeloJogador_57', folder: 'modeloJogador', price: 150.00 },
    { id: 5058, name: 'Modelo Jogador 58', imageFile: 'ModeloJogador_58', folder: 'modeloJogador', price: 150.00 },
    { id: 5059, name: 'Modelo Jogador 59', imageFile: 'ModeloJogador_59', folder: 'modeloJogador', price: 150.00 },
    { id: 5060, name: 'Modelo Jogador 60', imageFile: 'ModeloJogador_60', folder: 'modeloJogador', price: 150.00 },
    { id: 5061, name: 'Modelo Jogador 61', imageFile: 'ModeloJogador_61', folder: 'modeloJogador', price: 150.00 },
    { id: 5062, name: 'Modelo Jogador 62', imageFile: 'ModeloJogador_62', folder: 'modeloJogador', price: 150.00 },
    { id: 5063, name: 'Modelo Jogador 63', imageFile: 'ModeloJogador_63', folder: 'modeloJogador', price: 150.00 },
    { id: 5064, name: 'Modelo Jogador 64', imageFile: 'ModeloJogador_64', folder: 'modeloJogador', price: 150.00 },
    { id: 5065, name: 'Modelo Jogador 65', imageFile: 'ModeloJogador_65', folder: 'modeloJogador', price: 150.00 },
    { id: 5066, name: 'Modelo Jogador 66', imageFile: 'ModeloJogador_66', folder: 'modeloJogador', price: 150.00 },
    { id: 5067, name: 'Modelo Jogador 67', imageFile: 'ModeloJogador_67', folder: 'modeloJogador', price: 150.00 },
    { id: 5068, name: 'Modelo Jogador 68', imageFile: 'ModeloJogador_68', folder: 'modeloJogador', price: 150.00 },
    { id: 5069, name: 'Modelo Jogador 69', imageFile: 'ModeloJogador_69', folder: 'modeloJogador', price: 150.00 },
    { id: 5070, name: 'Modelo Jogador 70', imageFile: 'ModeloJogador_70', folder: 'modeloJogador', price: 150.00 },
    { id: 5071, name: 'Modelo Jogador 71', imageFile: 'ModeloJogador_71', folder: 'modeloJogador', price: 150.00 },
    { id: 5072, name: 'Modelo Jogador 72', imageFile: 'ModeloJogador_72', folder: 'modeloJogador', price: 150.00 },
    { id: 5073, name: 'Modelo Jogador 73', imageFile: 'ModeloJogador_73', folder: 'modeloJogador', price: 150.00 },
    { id: 5074, name: 'Modelo Jogador 74', imageFile: 'ModeloJogador_74', folder: 'modeloJogador', price: 150.00 },
    { id: 5075, name: 'Modelo Jogador 75', imageFile: 'ModeloJogador_75', folder: 'modeloJogador', price: 150.00 },
    { id: 5076, name: 'Modelo Jogador 76', imageFile: 'ModeloJogador_76', folder: 'modeloJogador', price: 150.00 },
    { id: 5077, name: 'Modelo Jogador 77', imageFile: 'ModeloJogador_77', folder: 'modeloJogador', price: 150.00 },
    { id: 5078, name: 'Modelo Jogador 78', imageFile: 'ModeloJogador_78', folder: 'modeloJogador', price: 150.00 },
    { id: 5079, name: 'Modelo Jogador 79', imageFile: 'ModeloJogador_79', folder: 'modeloJogador', price: 150.00 },
    { id: 5080, name: 'Modelo Jogador 80', imageFile: 'ModeloJogador_80', folder: 'modeloJogador', price: 150.00 },
    { id: 5081, name: 'Modelo Jogador 81', imageFile: 'ModeloJogador_81', folder: 'modeloJogador', price: 150.00 },
    { id: 5082, name: 'Modelo Jogador 82', imageFile: 'ModeloJogador_82', folder: 'modeloJogador', price: 150.00 },
    { id: 5083, name: 'Modelo Jogador 83', imageFile: 'ModeloJogador_83', folder: 'modeloJogador', price: 150.00 },
    { id: 5084, name: 'Modelo Jogador 84', imageFile: 'ModeloJogador_84', folder: 'modeloJogador', price: 150.00 },
    { id: 5085, name: 'Modelo Jogador 85', imageFile: 'ModeloJogador_85', folder: 'modeloJogador', price: 150.00 },
    { id: 5086, name: 'Modelo Jogador 86', imageFile: 'ModeloJogador_86', folder: 'modeloJogador', price: 150.00 },
    { id: 5087, name: 'Modelo Jogador 87', imageFile: 'ModeloJogador_87', folder: 'modeloJogador', price: 150.00 },
    { id: 5088, name: 'Modelo Jogador 88', imageFile: 'ModeloJogador_88', folder: 'modeloJogador', price: 150.00 },
    { id: 5089, name: 'Modelo Jogador 89', imageFile: 'ModeloJogador_89', folder: 'modeloJogador', price: 150.00 },
    { id: 5090, name: 'Modelo Jogador 90', imageFile: 'ModeloJogador_90', folder: 'modeloJogador', price: 150.00 },
    { id: 5091, name: 'Modelo Jogador 91', imageFile: 'ModeloJogador_91', folder: 'modeloJogador', price: 150.00 },
    { id: 5092, name: 'Modelo Jogador 92', imageFile: 'ModeloJogador_92', folder: 'modeloJogador', price: 150.00 },
  ],  7: [
    { id: 7001, name: 'Feminino 1', imageFile: 'Feminino_1', folder: 'feminino', price: 150.00 },
    { id: 7002, name: 'Feminino 2', imageFile: 'Feminino_2', folder: 'feminino', price: 150.00 },
    { id: 7003, name: 'Feminino 3', imageFile: 'Feminino_3', folder: 'feminino', price: 150.00 },
    { id: 7004, name: 'Feminino 4', imageFile: 'Feminino_4', folder: 'feminino', price: 150.00 },
    { id: 7005, name: 'Feminino 5', imageFile: 'Feminino_5', folder: 'feminino', price: 150.00 },
    { id: 7006, name: 'Feminino 6', imageFile: 'Feminino_6', folder: 'feminino', price: 150.00 },
    { id: 7007, name: 'Feminino 7', imageFile: 'Feminino_7', folder: 'feminino', price: 150.00 },
    { id: 7008, name: 'Feminino 8', imageFile: 'Feminino_8', folder: 'feminino', price: 150.00 },
    { id: 7009, name: 'Feminino 9', imageFile: 'Feminino_9', folder: 'feminino', price: 150.00 },
    { id: 7010, name: 'Feminino 10', imageFile: 'Feminino_10', folder: 'feminino', price: 150.00 },
    { id: 7011, name: 'Feminino 11', imageFile: 'Feminino_11', folder: 'feminino', price: 150.00 },
    { id: 7012, name: 'Feminino 12', imageFile: 'Feminino_12', folder: 'feminino', price: 150.00 },
    { id: 7013, name: 'Feminino 13', imageFile: 'Feminino_13', folder: 'feminino', price: 150.00 },
    { id: 7014, name: 'Feminino 14', imageFile: 'Feminino_14', folder: 'feminino', price: 150.00 },
    { id: 7015, name: 'Feminino 15', imageFile: 'Feminino_15', folder: 'feminino', price: 150.00 },
    { id: 7016, name: 'Feminino 16', imageFile: 'Feminino_16', folder: 'feminino', price: 150.00 },
    { id: 7017, name: 'Feminino 17', imageFile: 'Feminino_17', folder: 'feminino', price: 150.00 },
    { id: 7018, name: 'Feminino 18', imageFile: 'Feminino_18', folder: 'feminino', price: 150.00 },
    { id: 7019, name: 'Feminino 19', imageFile: 'Feminino_19', folder: 'feminino', price: 150.00 },
  ],
8: [
    { id: 8119, name: 'Infantil 119', imageFile: 'Infantil_119', folder: 'infantil', price: 150.00 },
    { id: 8120, name: 'Infantil 120', imageFile: 'Infantil_120', folder: 'infantil', price: 150.00 },
    { id: 8121, name: 'Infantil 121', imageFile: 'Infantil_121', folder: 'infantil', price: 150.00 },
    { id: 8122, name: 'Infantil 122', imageFile: 'Infantil_122', folder: 'infantil', price: 150.00 },
    { id: 8123, name: 'Infantil 123', imageFile: 'Infantil_123', folder: 'infantil', price: 150.00 },
    { id: 8124, name: 'Infantil 124', imageFile: 'Infantil_124', folder: 'infantil', price: 150.00 },
    { id: 8125, name: 'Infantil 125', imageFile: 'Infantil_125', folder: 'infantil', price: 150.00 },
    { id: 8126, name: 'Infantil 126', imageFile: 'Infantil_126', folder: 'infantil', price: 150.00 },
    { id: 8127, name: 'Infantil 127', imageFile: 'Infantil_127', folder: 'infantil', price: 150.00 },
    { id: 8128, name: 'Infantil 128', imageFile: 'Infantil_128', folder: 'infantil', price: 150.00 },
    { id: 8129, name: 'Infantil 129', imageFile: 'Infantil_129', folder: 'infantil', price: 150.00 },
    { id: 8130, name: 'Infantil 130', imageFile: 'Infantil_130', folder: 'infantil', price: 150.00 },
    { id: 8131, name: 'Infantil 131', imageFile: 'Infantil_131', folder: 'infantil', price: 150.00 },
    { id: 8132, name: 'Infantil 132', imageFile: 'Infantil_132', folder: 'infantil', price: 150.00 },
    { id: 8133, name: 'Infantil 133', imageFile: 'Infantil_133', folder: 'infantil', price: 150.00 },
    { id: 8134, name: 'Infantil 134', imageFile: 'Infantil_134', folder: 'infantil', price: 150.00 },
    { id: 8135, name: 'Infantil 135', imageFile: 'Infantil_135', folder: 'infantil', price: 150.00 },
    { id: 8136, name: 'Infantil 136', imageFile: 'Infantil_136', folder: 'infantil', price: 150.00 },
    { id: 8137, name: 'Infantil 137', imageFile: 'Infantil_137', folder: 'infantil', price: 150.00 },
    { id: 8138, name: 'Infantil 138', imageFile: 'Infantil_138', folder: 'infantil', price: 150.00 },
    { id: 8139, name: 'Infantil 139', imageFile: 'Infantil_139', folder: 'infantil', price: 150.00 },
    { id: 8140, name: 'Infantil 140', imageFile: 'Infantil_140', folder: 'infantil', price: 150.00 },
    { id: 8141, name: 'Infantil 141', imageFile: 'Infantil_141', folder: 'infantil', price: 150.00 },
    { id: 8142, name: 'Infantil 142', imageFile: 'Infantil_142', folder: 'infantil', price: 150.00 },
    { id: 8143, name: 'Infantil 143', imageFile: 'Infantil_143', folder: 'infantil', price: 150.00 },
    { id: 8144, name: 'Infantil 144', imageFile: 'Infantil_144', folder: 'infantil', price: 150.00 },
    { id: 8145, name: 'Infantil 145', imageFile: 'Infantil_145', folder: 'infantil', price: 150.00 },
    { id: 8146, name: 'Infantil 146', imageFile: 'Infantil_146', folder: 'infantil', price: 150.00 },
    { id: 8147, name: 'Infantil 147', imageFile: 'Infantil_147', folder: 'infantil', price: 150.00 },
    { id: 8148, name: 'Infantil 148', imageFile: 'Infantil_148', folder: 'infantil', price: 150.00 },
    { id: 8149, name: 'Infantil 149', imageFile: 'Infantil_149', folder: 'infantil', price: 150.00 },
    { id: 8150, name: 'Infantil 150', imageFile: 'Infantil_150', folder: 'infantil', price: 150.00 },
    { id: 8151, name: 'Infantil 151', imageFile: 'Infantil_151', folder: 'infantil', price: 150.00 },
    { id: 8152, name: 'Infantil 152', imageFile: 'Infantil_152', folder: 'infantil', price: 150.00 },
    { id: 8153, name: 'Infantil 153', imageFile: 'Infantil_153', folder: 'infantil', price: 150.00 },
    { id: 8154, name: 'Infantil 154', imageFile: 'Infantil_154', folder: 'infantil', price: 150.00 },
    { id: 8155, name: 'Infantil 155', imageFile: 'Infantil_155', folder: 'infantil', price: 150.00 },
    { id: 8156, name: 'Infantil 156', imageFile: 'Infantil_156', folder: 'infantil', price: 150.00 },
    { id: 8157, name: 'Infantil 157', imageFile: 'Infantil_157', folder: 'infantil', price: 150.00 },
    { id: 8158, name: 'Infantil 158', imageFile: 'Infantil_158', folder: 'infantil', price: 150.00 },
    { id: 8159, name: 'Infantil 159', imageFile: 'Infantil_159', folder: 'infantil', price: 150.00 },
    { id: 8160, name: 'Infantil 160', imageFile: 'Infantil_160', folder: 'infantil', price: 150.00 },
    { id: 8161, name: 'Infantil 161', imageFile: 'Infantil_161', folder: 'infantil', price: 150.00 },
    { id: 8162, name: 'Infantil 162', imageFile: 'Infantil_162', folder: 'infantil', price: 150.00 },
    { id: 8163, name: 'Infantil 163', imageFile: 'Infantil_163', folder: 'infantil', price: 150.00 },
    { id: 8164, name: 'Infantil 164', imageFile: 'Infantil_164', folder: 'infantil', price: 150.00 },
    { id: 8165, name: 'Infantil 165', imageFile: 'Infantil_165', folder: 'infantil', price: 150.00 },
    { id: 8166, name: 'Infantil 166', imageFile: 'Infantil_166', folder: 'infantil', price: 150.00 },
    { id: 8167, name: 'Infantil 167', imageFile: 'Infantil_167', folder: 'infantil', price: 150.00 },
    { id: 8168, name: 'Infantil 168', imageFile: 'Infantil_168', folder: 'infantil', price: 150.00 },
    { id: 8169, name: 'Infantil 169', imageFile: 'Infantil_169', folder: 'infantil', price: 150.00 },
    { id: 8170, name: 'Infantil 170', imageFile: 'Infantil_170', folder: 'infantil', price: 150.00 },
    { id: 8171, name: 'Infantil 171', imageFile: 'Infantil_171', folder: 'infantil', price: 150.00 },
    { id: 8172, name: 'Infantil 172', imageFile: 'Infantil_172', folder: 'infantil', price: 150.00 },
    { id: 8173, name: 'Infantil 173', imageFile: 'Infantil_173', folder: 'infantil', price: 150.00 },
    { id: 8174, name: 'Infantil 174', imageFile: 'Infantil_174', folder: 'infantil', price: 150.00 },
    { id: 8175, name: 'Infantil 175', imageFile: 'Infantil_175', folder: 'infantil', price: 150.00 },
    { id: 8176, name: 'Infantil 176', imageFile: 'Infantil_176', folder: 'infantil', price: 150.00 },
    { id: 8177, name: 'Infantil 177', imageFile: 'Infantil_177', folder: 'infantil', price: 150.00 },
    { id: 8178, name: 'Infantil 178', imageFile: 'Infantil_178', folder: 'infantil', price: 150.00 },
    { id: 8179, name: 'Infantil 179', imageFile: 'Infantil_179', folder: 'infantil', price: 150.00 },
    { id: 8180, name: 'Infantil 180', imageFile: 'Infantil_180', folder: 'infantil', price: 150.00 },
    { id: 8181, name: 'Infantil 181', imageFile: 'Infantil_181', folder: 'infantil', price: 150.00 },
    { id: 8182, name: 'Infantil 182', imageFile: 'Infantil_182', folder: 'infantil', price: 150.00 },
    { id: 8183, name: 'Infantil 183', imageFile: 'Infantil_183', folder: 'infantil', price: 150.00 },
    { id: 8184, name: 'Infantil 184', imageFile: 'Infantil_184', folder: 'infantil', price: 150.00 },
    { id: 8185, name: 'Infantil 185', imageFile: 'Infantil_185', folder: 'infantil', price: 150.00 },
    { id: 8186, name: 'Infantil 186', imageFile: 'Infantil_186', folder: 'infantil', price: 150.00 },
    { id: 8187, name: 'Infantil 187', imageFile: 'Infantil_187', folder: 'infantil', price: 150.00 },
    { id: 8188, name: 'Infantil 188', imageFile: 'Infantil_188', folder: 'infantil', price: 150.00 },
    { id: 8189, name: 'Infantil 189', imageFile: 'Infantil_189', folder: 'infantil', price: 150.00 },
    { id: 8190, name: 'Infantil 190', imageFile: 'Infantil_190', folder: 'infantil', price: 150.00 },
    { id: 8191, name: 'Infantil 191', imageFile: 'Infantil_191', folder: 'infantil', price: 150.00 },
    { id: 8192, name: 'Infantil 192', imageFile: 'Infantil_192', folder: 'infantil', price: 150.00 },
    { id: 8193, name: 'Infantil 193', imageFile: 'Infantil_193', folder: 'infantil', price: 150.00 },
    { id: 8194, name: 'Infantil 194', imageFile: 'Infantil_194', folder: 'infantil', price: 150.00 },
    { id: 8195, name: 'Infantil 195', imageFile: 'Infantil_195', folder: 'infantil', price: 150.00 },
    { id: 8196, name: 'Infantil 196', imageFile: 'Infantil_196', folder: 'infantil', price: 150.00 },
    { id: 8197, name: 'Infantil 197', imageFile: 'Infantil_197', folder: 'infantil', price: 150.00 },
    { id: 8198, name: 'Infantil 198', imageFile: 'Infantil_198', folder: 'infantil', price: 150.00 },
    { id: 8199, name: 'Infantil 199', imageFile: 'Infantil_199', folder: 'infantil', price: 150.00 },
    { id: 8200, name: 'Infantil 200', imageFile: 'Infantil_200', folder: 'infantil', price: 150.00 },
    { id: 8201, name: 'Infantil 201', imageFile: 'Infantil_201', folder: 'infantil', price: 150.00 },
    { id: 8202, name: 'Infantil 202', imageFile: 'Infantil_202', folder: 'infantil', price: 150.00 },
    { id: 8203, name: 'Infantil 203', imageFile: 'Infantil_203', folder: 'infantil', price: 150.00 },
    { id: 8204, name: 'Infantil 204', imageFile: 'Infantil_204', folder: 'infantil', price: 150.00 },
    { id: 8205, name: 'Infantil 205', imageFile: 'Infantil_205', folder: 'infantil', price: 150.00 },
    { id: 8206, name: 'Infantil 206', imageFile: 'Infantil_206', folder: 'infantil', price: 150.00 },
    { id: 8207, name: 'Infantil 207', imageFile: 'Infantil_207', folder: 'infantil', price: 150.00 },
    { id: 8208, name: 'Infantil 208', imageFile: 'Infantil_208', folder: 'infantil', price: 150.00 },
    { id: 8209, name: 'Infantil 209', imageFile: 'Infantil_209', folder: 'infantil', price: 150.00 },
    { id: 8210, name: 'Infantil 210', imageFile: 'Infantil_210', folder: 'infantil', price: 150.00 },
    { id: 8211, name: 'Infantil 211', imageFile: 'Infantil_211', folder: 'infantil', price: 150.00 },
    { id: 8212, name: 'Infantil 212', imageFile: 'Infantil_212', folder: 'infantil', price: 150.00 },
    { id: 8213, name: 'Infantil 213', imageFile: 'Infantil_213', folder: 'infantil', price: 150.00 },
    { id: 8214, name: 'Infantil 214', imageFile: 'Infantil_214', folder: 'infantil', price: 150.00 },
    { id: 8215, name: 'Infantil 215', imageFile: 'Infantil_215', folder: 'infantil', price: 150.00 },
    { id: 8216, name: 'Infantil 216', imageFile: 'Infantil_216', folder: 'infantil', price: 150.00 },
    { id: 8217, name: 'Infantil 217', imageFile: 'Infantil_217', folder: 'infantil', price: 150.00 },
    { id: 8218, name: 'Infantil 218', imageFile: 'Infantil_218', folder: 'infantil', price: 150.00 },
    { id: 8219, name: 'Infantil 219', imageFile: 'Infantil_219', folder: 'infantil', price: 150.00 },
    { id: 8220, name: 'Infantil 220', imageFile: 'Infantil_220', folder: 'infantil', price: 150.00 },
    { id: 8221, name: 'Infantil 221', imageFile: 'Infantil_221', folder: 'infantil', price: 150.00 },
    { id: 8222, name: 'Infantil 222', imageFile: 'Infantil_222', folder: 'infantil', price: 150.00 },
    { id: 8223, name: 'Infantil 223', imageFile: 'Infantil_223', folder: 'infantil', price: 150.00 },
    { id: 8224, name: 'Infantil 224', imageFile: 'Infantil_224', folder: 'infantil', price: 150.00 },
    { id: 8225, name: 'Infantil 225', imageFile: 'Infantil_225', folder: 'infantil', price: 150.00 },
    { id: 8226, name: 'Infantil 226', imageFile: 'Infantil_226', folder: 'infantil', price: 150.00 },
    { id: 8227, name: 'Infantil 227', imageFile: 'Infantil_227', folder: 'infantil', price: 150.00 },
    { id: 8228, name: 'Infantil 228', imageFile: 'Infantil_228', folder: 'infantil', price: 150.00 },
    { id: 8229, name: 'Infantil 229', imageFile: 'Infantil_229', folder: 'infantil', price: 150.00 },
    { id: 8230, name: 'Infantil 230', imageFile: 'Infantil_230', folder: 'infantil', price: 150.00 },
    { id: 8231, name: 'Infantil 231', imageFile: 'Infantil_231', folder: 'infantil', price: 150.00 },
    { id: 8232, name: 'Infantil 232', imageFile: 'Infantil_232', folder: 'infantil', price: 150.00 },
    { id: 8233, name: 'Infantil 233', imageFile: 'Infantil_233', folder: 'infantil', price: 150.00 },
    { id: 8234, name: 'Infantil 234', imageFile: 'Infantil_234', folder: 'infantil', price: 150.00 },
    { id: 8235, name: 'Infantil 235', imageFile: 'Infantil_235', folder: 'infantil', price: 150.00 },
    { id: 8236, name: 'Infantil 236', imageFile: 'Infantil_236', folder: 'infantil', price: 150.00 },
    { id: 8237, name: 'Infantil 237', imageFile: 'Infantil_237', folder: 'infantil', price: 150.00 },
    { id: 8238, name: 'Infantil 238', imageFile: 'Infantil_238', folder: 'infantil', price: 150.00 },
    { id: 8239, name: 'Infantil 239', imageFile: 'Infantil_239', folder: 'infantil', price: 150.00 },
    { id: 8240, name: 'Infantil 240', imageFile: 'Infantil_240', folder: 'infantil', price: 150.00 },
    { id: 8241, name: 'Infantil 241', imageFile: 'Infantil_241', folder: 'infantil', price: 150.00 },
    { id: 8242, name: 'Infantil 242', imageFile: 'Infantil_242', folder: 'infantil', price: 150.00 },
  ],  9: [
    { id: 9001, name: 'Calção 1', imageFile: 'Calcoes_1', folder: 'calcoes', price: 150.00 },
    { id: 9002, name: 'Calção 2', imageFile: 'Calcoes_2', folder: 'calcoes', price: 150.00 },
    { id: 9003, name: 'Calção 3', imageFile: 'Calcoes_3', folder: 'calcoes', price: 150.00 },
    { id: 9004, name: 'Calção 4', imageFile: 'Calcoes_4', folder: 'calcoes', price: 150.00 },
    { id: 9005, name: 'Calção 5', imageFile: 'Calcoes_5', folder: 'calcoes', price: 150.00 },
    { id: 9006, name: 'Calção 6', imageFile: 'Calcoes_6', folder: 'calcoes', price: 150.00 },
    { id: 9007, name: 'Calção 7', imageFile: 'Calcoes_7', folder: 'calcoes', price: 150.00 },
    { id: 9008, name: 'Calção 8', imageFile: 'Calcoes_8', folder: 'calcoes', price: 150.00 },
    { id: 9009, name: 'Calção 9', imageFile: 'Calcoes_9', folder: 'calcoes', price: 150.00 },
    { id: 9010, name: 'Calção 10', imageFile: 'Calcoes_10', folder: 'calcoes', price: 150.00 },
    { id: 9011, name: 'Calção 11', imageFile: 'Calcoes_11', folder: 'calcoes', price: 150.00 },
    { id: 9012, name: 'Calção 12', imageFile: 'Calcoes_12', folder: 'calcoes', price: 150.00 },
    { id: 9013, name: 'Calção 13', imageFile: 'Calcoes_13', folder: 'calcoes', price: 150.00 },
    { id: 9014, name: 'Calção 14', imageFile: 'Calcoes_14', folder: 'calcoes', price: 150.00 },
    { id: 9015, name: 'Calção 15', imageFile: 'Calcoes_15', folder: 'calcoes', price: 150.00 },
    { id: 9016, name: 'Calção 16', imageFile: 'Calcoes_16', folder: 'calcoes', price: 150.00 },
    { id: 9017, name: 'Calção 17', imageFile: 'Calcoes_17', folder: 'calcoes', price: 150.00 },
    { id: 9018, name: 'Calção 18', imageFile: 'Calcoes_18', folder: 'calcoes', price: 150.00 },
    { id: 9019, name: 'Calção 19', imageFile: 'Calcoes_19', folder: 'calcoes', price: 150.00 },
  ],
  10: [
    { id: 10001, name: 'Conjunto 1', imageFile: 'Conjunto_1', folder: 'conjuntos', price: 150.00 },
    { id: 10002, name: 'Conjunto 2', imageFile: 'Conjunto_2', folder: 'conjuntos', price: 150.00 },
    { id: 10003, name: 'Conjunto 3', imageFile: 'Conjunto_3', folder: 'conjuntos', price: 150.00 },
    { id: 10004, name: 'Conjunto 4', imageFile: 'Conjunto_4', folder: 'conjuntos', price: 150.00 },
    { id: 10005, name: 'Conjunto 5', imageFile: 'Conjunto_5', folder: 'conjuntos', price: 150.00 },
    { id: 10006, name: 'Conjunto 6', imageFile: 'Conjunto_6', folder: 'conjuntos', price: 150.00 },
    { id: 10007, name: 'Conjunto 7', imageFile: 'Conjunto_7', folder: 'conjuntos', price: 150.00 },
    { id: 10008, name: 'Conjunto 8', imageFile: 'Conjunto_8', folder: 'conjuntos', price: 150.00 },
    { id: 10009, name: 'Conjunto 9', imageFile: 'Conjunto_9', folder: 'conjuntos', price: 150.00 },
    { id: 10010, name: 'Conjunto 10', imageFile: 'Conjunto_10', folder: 'conjuntos', price: 150.00 },
    { id: 10011, name: 'Conjunto 11', imageFile: 'Conjunto_11', folder: 'conjuntos', price: 150.00 },
    { id: 10012, name: 'Conjunto 12', imageFile: 'Conjunto_12', folder: 'conjuntos', price: 150.00 },
    { id: 10013, name: 'Conjunto 13', imageFile: 'Conjunto_13', folder: 'conjuntos', price: 150.00 },
    { id: 10014, name: 'Conjunto 14', imageFile: 'Conjunto_14', folder: 'conjuntos', price: 150.00 },
    { id: 10015, name: 'Conjunto 15', imageFile: 'Conjunto_15', folder: 'conjuntos', price: 150.00 },
    { id: 10016, name: 'Conjunto 16', imageFile: 'Conjunto_16', folder: 'conjuntos', price: 150.00 },
    { id: 10017, name: 'Conjunto 17', imageFile: 'Conjunto_17', folder: 'conjuntos', price: 150.00 },
    { id: 10018, name: 'Conjunto 18', imageFile: 'Conjunto_18', folder: 'conjuntos', price: 150.00 },
    { id: 10019, name: 'Conjunto 19', imageFile: 'Conjunto_19', folder: 'conjuntos', price: 150.00 },
    { id: 10020, name: 'Conjunto 20', imageFile: 'Conjunto_20', folder: 'conjuntos', price: 150.00 },
    { id: 10021, name: 'Conjunto 21', imageFile: 'Conjunto_21', folder: 'conjuntos', price: 150.00 },
    { id: 10022, name: 'Conjunto 22', imageFile: 'Conjunto_22', folder: 'conjuntos', price: 150.00 },
    { id: 10023, name: 'Conjunto 23', imageFile: 'Conjunto_23', folder: 'conjuntos', price: 150.00 },
  ],
};

// Header Component - REMOVIDO
const Header = ({ onBack, showBack = false, cartCount = 0, onCartClick, onHomeClick }) => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#000000',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #333',
      zIndex: 999,
      minHeight: '60px'
    }}>
      {/* Lado Esquerdo - Botão Voltar */}
      <div style={{ width: '60px' }}>
        {showBack && (
          <button
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              color: '#fcb404',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '8px'
            }}
          >
            <ArrowLeft style={{ width: '24px', height: '24px' }} />
          </button>
        )}
      </div>
      
      {/* Centro - Logo */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1
      }}>
        <img 
          src="/logo.png" 
          alt="Coimbra Imports" 
          style={{ 
            height: '45px', 
            objectFit: 'contain'
          }} 
        />
      </div>
      
      {/* Lado Direito - Ícones Home e Carrinho */}
      <div style={{ 
        display: 'flex', 
        gap: '15px', 
        alignItems: 'center',
        width: '60px',
        justifyContent: 'flex-end'
      }}>
        <button
          onClick={onHomeClick}
          style={{
            background: 'none',
            border: 'none',
            color: '#fcb404',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          <Home style={{ width: '24px', height: '24px' }} />
        </button>
        <button
          onClick={onCartClick}
          style={{
            background: 'none',
            border: 'none',
            color: '#fcb404',
            cursor: 'pointer',
            position: 'relative',
            padding: '8px'
          }}
        >
          <ShoppingCart style={{ width: '24px', height: '24px' }} />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '0',
              right: '0',
              backgroundColor: '#fcb404',
              color: '#000',
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              fontSize: '12px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
// Category Button Component
const CategoryButton = ({ category, onClick }) => (
  <div className="category-card" onClick={() => onClick(category)}>
    <div className="icon-box">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d={category.svg} />
      </svg>
    </div>
    <span className="card-title">{category.name}</span>
    <span className="action-arrow">VER COLEÇÃO →</span>
  </div>
);

// Product Card Component
const ProductCard = ({ product, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onClick={() => onClick(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: '#1E1E1E',
        borderRadius: '12px',
        padding: '15px',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        border: isHovered ? '1px solid #fcb404' : '1px solid #333',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 5px 15px rgba(252, 180, 4, 0.1)' : 'none',
        cursor: 'pointer'
      }}
    >
      <div style={{
        width: '100%',
        height: '220px',
        backgroundColor: '#2C2C2C',
        borderRadius: '8px',
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <ProductImage 
  imageFile={product.imageFile}
  folder={product.folder || 'camisasCoimbra'}
  alt={product.name}
  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
/>
      </div>
      
      <h3 style={{
        fontFamily: "'Teko', sans-serif",
        fontSize: '1.3rem',
        color: '#FFFFFF',
        margin: '0 0 5px 0',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        lineHeight: '1.2'
      }}>
        {product.name}
      </h3>
      
      <button style={{
        width: '100%',
        padding: '12px',
        backgroundColor: isHovered ? '#fcb404' : 'transparent',
        border: '2px solid #fcb404',
        color: isHovered ? '#121212' : '#fcb404',
        fontFamily: "'Teko', sans-serif",
        fontWeight: '600',
        fontSize: '1.2rem',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        letterSpacing: '1px',
        textTransform: 'uppercase'
      }}>
        {isHovered ? 'VER TAMANHOS' : `R$ ${product.price.toFixed(2).replace('.', ',')}`}
      </button>
    </div>
  );
};

// Size Modal Component
const SizeModal = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const sizes = ['P', 'M', 'G', 'GG', 'XG'];

  const handleAdd = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize);
      setShowSuccess(true);
      setTimeout(() => { setShowSuccess(false); onClose(); }, 1500);
    }
  };

  return (
    <div 
      style={{
        display: 'flex', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.85)', zIndex: 1000, justifyContent: 'center',
        alignItems: 'center', backdropFilter: 'blur(5px)'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#1E1E1E', padding: '30px', borderRadius: '16px', width: '90%',
          maxWidth: '400px', textAlign: 'center', position: 'relative', border: '1px solid #444',
          boxShadow: '0 0 20px rgba(0,0,0,0.5)', maxHeight: '90vh', overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {showSuccess ? (
          <div style={{ padding: '40px 0' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              backgroundColor: 'rgba(37, 211, 102, 0.2)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px'
            }}>
              <CheckCircle style={{ width: '40px', height: '40px', color: '#25D366' }} />
            </div>
            <p style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '600', fontFamily: "'Teko', sans-serif" }}>
              Adicionado ao carrinho!
            </p>
          </div>
        ) : (
          <>
            <span onClick={onClose} style={{
              position: 'absolute', top: '15px', right: '20px', fontSize: '24px',
              color: '#B0B0B0', cursor: 'pointer'
            }}>✕</span>
            
            <div style={{
              width: '100%', height: '250px', backgroundColor: '#2C2C2C', borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', overflow: 'hidden'
            }}>
              <ProductImage 
  imageFile={product.imageFile}
  folder={product.folder || 'camisasCoimbra'}
  alt={product.name}
  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
/>
            </div>
            
            <h3 style={{ color: '#fff', marginTop: '15px', fontFamily: "'Teko', sans-serif", fontSize: '1.6rem', textTransform: 'uppercase' }}>
              {product.name}
            </h3>
            <p style={{ color: '#fcb404', fontWeight: 'bold', fontSize: '1.5rem', margin: '10px 0', fontFamily: "'Teko', sans-serif" }}>
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>
            
            <p style={{ color: '#888', marginBottom: '10px', fontFamily: "'Teko', sans-serif", fontSize: '1.1rem' }}>
              Selecione o tamanho ideal para você:
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '25px 0' }}>
              {sizes.map((size) => (
                <div key={size} onClick={() => setSelectedSize(size)} style={{
                  width: '50px', height: '50px', border: selectedSize === size ? '2px solid #fcb404' : '2px solid #444',
                  borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                  color: selectedSize === size ? '#121212' : '#B0B0B0', fontFamily: "'Teko', sans-serif", fontWeight: 'bold',
                  fontSize: '1.2rem', backgroundColor: selectedSize === size ? '#fcb404' : 'transparent', transition: 'all 0.2s'
                }}>
                  {size}
                </div>
              ))}
            </div>

            <button onClick={handleAdd} disabled={!selectedSize} style={{
              width: '100%', padding: '15px', border: 'none', borderRadius: '8px', fontFamily: "'Teko', sans-serif",
              fontWeight: '600', fontSize: '1.2rem', textTransform: 'uppercase',
              cursor: selectedSize ? 'pointer' : 'not-allowed',
              backgroundColor: selectedSize ? '#fcb404' : '#333', color: selectedSize ? '#121212' : '#666'
            }}>
              {selectedSize ? 'ADICIONAR AO CARRINHO' : 'SELECIONE UM TAMANHO'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// Cart Item Component
  const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(30, 30, 30, 0.9)', borderRadius: '16px', padding: '16px',
      border: '1px solid #333', display: 'flex', gap: '16px'
    }}>
      <div style={{
        width: '64px', height: '64px', borderRadius: '12px', backgroundColor: '#2C2C2C',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden'
      }}>
        <ProductImage 
          imageFile={item.imageFile}
          folder={item.folder || 'camisasCoimbra'}
          alt={item.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
        />
      </div>
      
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{ color: '#fff', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          fontFamily: "'Teko', sans-serif", fontSize: '1.3rem', textTransform: 'uppercase', margin: 0 }}>
          {item.name}
        </h3>
        <p style={{ color: '#B0B0B0', fontSize: '1rem', fontFamily: "'Teko', sans-serif", margin: '4px 0' }}>
          Tam: {item.size}
        </p>
        <p style={{ color: '#fcb404', fontWeight: 'bold', fontFamily: "'Teko', sans-serif", fontSize: '1.2rem' }}>
          R$ {item.price.toFixed(2).replace('.', ',')}
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <button onClick={() => onRemove(item.cartId)} style={{
          width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(239, 68, 68, 0.2)',
          border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
        }}>
          <Trash2 style={{ width: '16px', height: '16px', color: '#ef4444' }} />
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)} style={{
            width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#2C2C2C',
            border: '1px solid #444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
          }}>
            <Minus style={{ width: '16px', height: '16px', color: '#fff' }} />
          </button>
          <span style={{ width: '24px', textAlign: 'center', color: '#fff', fontWeight: 'bold', fontFamily: "'Teko', sans-serif", fontSize: '1.2rem' }}>
            {item.quantity}
          </span>
          <button onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)} style={{
            width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#2C2C2C',
            border: '1px solid #444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
          }}>
            <Plus style={{ width: '16px', height: '16px', color: '#fff' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Input Field Component
const InputField = ({ icon: Icon, label, ...props }) => (
  <div style={{ marginBottom: '0' }}>
    <label style={{ color: '#B0B0B0', fontSize: '1rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px',
      fontFamily: "'Teko', sans-serif", marginBottom: '8px' }}>
      <Icon style={{ width: '16px', height: '16px' }} />
      {label}
    </label>
    <input style={{
      width: '100%', backgroundColor: '#2C2C2C', border: '1px solid #444', borderRadius: '12px',
      padding: '12px 16px', color: '#fff', fontSize: '1rem', fontFamily: "'Teko', sans-serif",
      outline: 'none', boxSizing: 'border-box'
    }} {...props} />
  </div>
);

// ============================================
// APP PRINCIPAL
// ============================================
export default function App() {
  const [view, setView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({ name: '', phone: '', cep: '', street: '', number: '', complement: '', neighborhood: '', city: '' });

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleCategoryClick = (category) => { setSelectedCategory(category); setView('products'); };
  const handleProductClick = (product) => { setSelectedProduct(product); };
  const handleAddToCart = (product, size) => {
    const cartItem = { ...product, size, quantity: 1, cartId: `${product.id}-${size}-${Date.now()}` };
    setCart([...cart, cartItem]);
    setSelectedProduct(null);
  };
  const handleUpdateQuantity = (cartId, newQuantity) => {
    if (newQuantity <= 0) setCart(cart.filter(item => item.cartId !== cartId));
    else setCart(cart.map(item => item.cartId === cartId ? { ...item, quantity: newQuantity } : item));
  };
  const handleRemoveFromCart = (cartId) => { setCart(cart.filter(item => item.cartId !== cartId)); };
  const handleBack = () => {
    if (view === 'products') setView('categories');
    else if (view === 'cart') setView('products');
    else if (view === 'checkout') setView('cart');
    else if (view === 'categories') setView('home');
  };

  const handleSendWhatsApp = () => {
    const items = cart.map(item => `• ${item.quantity}x ${item.name} (Tam: ${item.size}) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`).join('\n');
    const message = `🛒 *NOVO PEDIDO - COIMBRA IMPORTS*\n\n📦 *Itens:*\n${items}\n\n💰 *Total: R$ ${cartTotal.toFixed(2).replace('.', ',')}*\n\n👤 *Cliente:* ${formData.name}\n📱 *Telefone:* ${formData.phone}\n\n📍 *Endereço de Entrega:*\n${formData.street}, ${formData.number}${formData.complement ? ` - ${formData.complement}` : ''}\n${formData.neighborhood}\n${formData.city} - CEP: ${formData.cep}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // RENDER HOME
  const renderHome = () => (
    <div style={{ minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative', padding: '20px', background: 'url("/backgroundSiteCoimbra.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {cartCount > 0 && (
        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <button onClick={() => setView('cart')} style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', position: 'relative', padding: '0' }}>
            <ShoppingCart style={{ width: '32px', height: '32px', color: '#ffffff', strokeWidth: '1' }} />
            <span style={{ position: 'absolute', top: '0px', right: '0px', minWidth: '18px', height: '18px', backgroundColor: '#fcb404', color: '#000', fontSize: '11px', fontWeight: 'bold', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cartCount}</span>
          </button>
        </div>
      )}
      <img src={LOGO_URL} alt="Coimbra Imports" className="floating-logo" style={{ width: '270px', maxWidth: '90%', height: 'auto', marginBottom: '20px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.8))' }} />
      <h1 style={{ fontFamily: "'Teko', sans-serif", fontSize: '3.5rem', lineHeight: '0.9', textTransform: 'uppercase', fontWeight: '700', fontStyle: 'italic', marginBottom: '40px', letterSpacing: '2px', color: '#ffffff' }}>
        Vista a <br /><span style={{ color: '#fcb404', display: 'block', textShadow: '0 0 25px rgba(252, 180, 4, 0.4)' }}>Paixão</span>
      </h1>
      <button onClick={() => setView('categories')} style={{ backgroundColor: '#fcb404', color: '#000', fontFamily: "'Teko', sans-serif", fontSize: '1.8rem', fontWeight: '700', padding: '15px 50px', borderRadius: '50px', border: 'none', textTransform: 'uppercase', boxShadow: '0 0 20px rgba(252, 180, 4, 0.3)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px', width: '100%', maxWidth: '350px', justifyContent: 'center' }}>
        Acessar Catálogo
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </button>
    </div>
  );

  // RENDER CATEGORIES
  const renderCategories = () => (
    <div style={{ minHeight: '100vh', width: '100%', background: 'url("/backgroundSiteCoimbra.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', padding: '40px 20px', paddingTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header 
        showBack={true} 
        onBack={() => setView('home')} 
        cartCount={cartCount} 
        onCartClick={() => setView('cart')} 
        onHomeClick={() => setView('home')} 
      />
      <div style={{ marginBottom: '30px' }}>
        <img src={LOGO_URL} alt="Coimbra Imports" style={{ width: '250px', height: 'auto', objectFit: 'contain' }} />
      </div>
      <h2 className="section-title">Explore nosso <span className="highlight">Arsenal</span></h2>
      <div className="category-grid">
        {CATEGORIES.map((category) => <CategoryButton key={category.id} category={category} onClick={handleCategoryClick} />)}
      </div>
    </div>
  );

  // RENDER PRODUCTS
  const renderProducts = () => (
    <div style={{ minHeight: '100vh', width: '100%', background: 'url("/backgroundSiteCoimbra.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', padding: '40px 20px', paddingTop: '100px' }}>
      <Header 
        showBack={true} 
        onBack={() => setView('categories')} 
        cartCount={cartCount} 
        onCartClick={() => setView('cart')} 
        onHomeClick={() => setView('home')} 
      />
      <h1 style={{ textAlign: 'center', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', fontFamily: "'Teko', sans-serif", fontSize: '2.5rem' }}>
        Coimbra <span style={{ color: '#fcb404' }}>Imports</span>
      </h1>
      <h2 style={{ textAlign: 'center', color: '#B0B0B0', marginBottom: '40px', fontWeight: '600', fontSize: '1.8rem', fontFamily: "'Teko', sans-serif", textTransform: 'uppercase', letterSpacing: '2px' }}>{selectedCategory?.name}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {PRODUCTS_BY_CATEGORY[selectedCategory?.id]?.map((product) => <ProductCard key={product.id} product={product} onClick={handleProductClick} />)}
      </div>
    </div>
  );

  // RENDER CART
  const renderCart = () => (
    <div style={{ minHeight: '100vh', width: '100%', background: 'url("/backgroundSiteCoimbra.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', padding: '40px 20px', paddingTop: '100px' }}>
      <Header 
        showBack={true} 
        onBack={handleBack} 
        cartCount={cartCount} 
        onCartClick={() => setView('cart')} 
        onHomeClick={() => setView('home')} 
      />
      <h2 style={{ fontFamily: "'Teko', sans-serif", fontSize: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '30px', fontWeight: '600', textAlign: 'center', color: '#fff' }}>
        Seu <span style={{ color: '#fcb404' }}>Carrinho</span>
      </h2>
      {cart.length === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 0' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(28, 28, 28, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <ShoppingCart style={{ width: '40px', height: '40px', color: '#666' }} />
          </div>
          <p style={{ color: '#fff', marginBottom: '16px', fontFamily: "'Teko', sans-serif", fontSize: '1.5rem', textTransform: 'uppercase' }}>Seu carrinho está vazio</p>
          <button onClick={() => setView('categories')} style={{ padding: '12px 24px', backgroundColor: '#fcb404', color: '#000', fontFamily: "'Teko', sans-serif", fontWeight: '600', fontSize: '1.2rem', textTransform: 'uppercase', borderRadius: '12px', border: 'none', cursor: 'pointer' }}>
            Explorar Produtos
          </button>
        </div>
      ) : (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Teko', sans-serif", fontSize: '1.2rem', color: '#B0B0B0', textAlign: 'center', marginBottom: '20px' }}>
            {cartCount} {cartCount === 1 ? 'item' : 'itens'} no carrinho
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {cart.map((item) => <CartItem key={item.cartId} item={item} onUpdateQuantity={handleUpdateQuantity} onRemove={handleRemoveFromCart} />)}
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.8), transparent)', padding: '32px 16px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', maxWidth: '600px', margin: '0 auto 16px' }}>
            <span style={{ color: '#fff', fontFamily: "'Teko', sans-serif", fontSize: '1.3rem', textTransform: 'uppercase' }}>Total</span>
            <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fcb404', fontFamily: "'Teko', sans-serif" }}>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
          </div>
          <button onClick={() => setView('checkout')} style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto', padding: '16px', backgroundColor: '#fcb404', color: '#000', fontFamily: "'Teko', sans-serif", fontWeight: '600', fontSize: '1.3rem', textTransform: 'uppercase', borderRadius: '16px', border: 'none', cursor: 'pointer' }}>
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );

  // RENDER CHECKOUT
  const renderCheckout = () => (
    <div style={{ minHeight: '100vh', width: '100%', background: 'url("/backgroundSiteCoimbra.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', padding: '40px 20px', paddingTop: '100px', paddingBottom: '120px' }}>
      <Header 
        showBack={true} 
        onBack={() => setView('cart')} 
        cartCount={cartCount} 
        onCartClick={() => setView('cart')} 
        onHomeClick={() => setView('home')} 
      />
      <h2 style={{ fontFamily: "'Teko', sans-serif", fontSize: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '30px', fontWeight: '600', textAlign: 'center', color: '#fff' }}>
        Finalizar <span style={{ color: '#fcb404' }}>Pedido</span>
      </h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ backgroundColor: 'rgba(28, 28, 28, 0.9)', borderRadius: '16px', padding: '16px', border: '1px solid #333' }}>
            <h3 style={{ color: '#fcb404', fontWeight: 'bold', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Teko', sans-serif", fontSize: '1.3rem' }}>
              <User style={{ width: '20px', height: '20px' }} /> Dados Pessoais
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <InputField icon={User} label="Nome Completo *" placeholder="Seu nome completo" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <InputField icon={Phone} label="Telefone (WhatsApp) *" placeholder="(00) 00000-0000" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
          </div>
          <div style={{ backgroundColor: 'rgba(28, 28, 28, 0.9)', borderRadius: '16px', padding: '16px', border: '1px solid #333' }}>
            <h3 style={{ color: '#fcb404', fontWeight: 'bold', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Teko', sans-serif", fontSize: '1.3rem' }}>
              <MapPin style={{ width: '20px', height: '20px' }} /> Endereço de Entrega
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <InputField icon={Home} label="Rua *" placeholder="Nome da rua" value={formData.street} onChange={(e) => setFormData({ ...formData, street: e.target.value })} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <InputField icon={Home} label="Número *" placeholder="Nº" value={formData.number} onChange={(e) => setFormData({ ...formData, number: e.target.value })} />
                <InputField icon={Home} label="Complemento" placeholder="Apto, Bloco..." value={formData.complement} onChange={(e) => setFormData({ ...formData, complement: e.target.value })} />
              </div>
              <InputField icon={MapPin} label="CEP *" placeholder="00000-000" value={formData.cep} onChange={(e) => setFormData({ ...formData, cep: e.target.value })} />
              <InputField icon={MapPin} label="Bairro *" placeholder="Seu bairro" value={formData.neighborhood} onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })} />
              <InputField icon={MapPin} label="Cidade *" placeholder="Sua cidade" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
            </div>
          </div>
          <div style={{ backgroundColor: 'rgba(28, 28, 28, 0.9)', borderRadius: '16px', padding: '16px', border: '1px solid #333' }}>
            <h3 style={{ color: '#fcb404', fontWeight: 'bold', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Teko', sans-serif", fontSize: '1.3rem' }}>
              <Package style={{ width: '20px', height: '20px' }} /> Resumo do Pedido
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
              {cart.map((item) => (
                <div key={item.cartId} style={{ display: 'flex', justifyContent: 'space-between', color: '#ccc', fontFamily: "'Teko', sans-serif", fontSize: '1.1rem' }}>
                  <span>{item.quantity}x {item.name} ({item.size})</span>
                  <span>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #444', paddingTop: '8px', marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#fff', fontWeight: 'bold', fontFamily: "'Teko', sans-serif", fontSize: '1.2rem' }}>Total</span>
                <span style={{ color: '#fcb404', fontWeight: 'bold', fontFamily: "'Teko', sans-serif", fontSize: '1.2rem' }}>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.8), transparent)', padding: '32px 16px 16px' }}>
        <button onClick={handleSendWhatsApp} style={{ width: '100%', maxWidth: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', margin: '0 auto', padding: '16px', backgroundColor: '#fcb404', color: '#000', fontFamily: "'Teko', sans-serif", fontWeight: '600', fontSize: '1.3rem', textTransform: 'uppercase', borderRadius: '16px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(252, 180, 4, 0.3)' }}>
          <Send style={{ width: '20px', height: '20px' }} />
          Enviar Pedido via WhatsApp
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;600&display=swap');
        @keyframes floatLogo { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
        .floating-logo { animation: floatLogo 3s ease-in-out infinite; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #fcb404; border-radius: 2px; }
        button { -webkit-tap-highlight-color: transparent; user-select: none; }
        html { scroll-behavior: smooth; }
        input:-webkit-autofill { -webkit-box-shadow: 0 0 0 30px #18181b inset !important; -webkit-text-fill-color: white !important; }
        .category-card { background: #1c1c1c; border: 1px solid #333; border-radius: 16px; padding: 35px 20px; text-decoration: none; color: white; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 5px 15px rgba(0,0,0,0.5); cursor: pointer; width: 100%; }
        .category-card:hover { transform: translateY(-8px) scale(1.02); border-color: #fcb404; box-shadow: 0 15px 40px rgba(252, 180, 4, 0.15); }
        .icon-box { width: 60px; height: 60px; margin-bottom: 20px; color: #888; transition: color 0.4s ease, transform 0.4s ease; }
        .icon-box svg { width: 100%; height: 100%; fill: currentColor; }
        .category-card:hover .icon-box { color: #fcb404; transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(252, 180, 4, 0.6)); }
        .card-title { font-family: 'Teko', sans-serif; font-size: 1.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; line-height: 1.1; text-align: center; }
        .action-arrow { margin-top: 20px; font-family: 'Teko', sans-serif; font-size: 1.1rem; color: #fcb404; opacity: 0; transform: translateY(15px); transition: all 0.4s ease; font-weight: 600; letter-spacing: 2px; }
        .category-card:hover .action-arrow { opacity: 1; transform: translateY(0); }
        .category-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 25px; width: 100%; max-width: 1200px; }
        .section-title { font-family: 'Teko', sans-serif; font-size: 3rem; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 40px; font-weight: 600; text-align: center; background: linear-gradient(to right, #ffffff, #a0a0a0); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .section-title .highlight { background: linear-gradient(to right, #fcb404, #e5a204); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      `}</style>
      {view === 'home' && renderHome()}
      {view === 'categories' && renderCategories()}
      {view === 'products' && renderProducts()}
      {view === 'cart' && renderCart()}
      {view === 'checkout' && renderCheckout()}
      {selectedProduct && <SizeModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={handleAddToCart} />}
    </div>
  );
}