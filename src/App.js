import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { 
  ShoppingCart, 
  ArrowLeft, 
  Plus, 
  Minus, 
  Trash2, 
  Send, 
  Shirt, 
  CheckCircle,
  MapPin,
  User,
  Phone,
  Home,
  Package
} from 'lucide-react';

// Configuração do Supabase
const supabaseUrl = 'https://pfhxvnzwokmkxagxyodj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmaHh2bnp3b2tta3hhZ3h5b2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2OTc5NjAsImV4cCI6MjA4NzI3Mzk2MH0.z7myzjkuGMqnwAabcpJrqs6hjGVxdDGQrYTP2aylUHg';
const supabase = createClient(supabaseUrl, supabaseKey);

// Componente que tenta carregar imagem com diferentes extensões
const ProductImage = ({ imageFile, folder = 'camisasCoimbra', alt, style }) => {
  const [currentExtIndex, setCurrentExtIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [imgKey, setImgKey] = useState(0);
  
  const extensions = ['.jpg', '.png', '.jpeg'];
  
  // Reset quando mudar o imageFile
  useEffect(() => {
    setCurrentExtIndex(0);
    setHasError(false);
    setImgKey(prev => prev + 1);
  }, [imageFile]);
  
  const handleError = () => {
    if (currentExtIndex < extensions.length - 1) {
      setCurrentExtIndex(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const handleLoad = (e) => {
    // Verifica se a imagem carregada é válida (não é HTML de erro)
    const img = e.target;
    if (img.naturalWidth === 0 || img.naturalHeight === 0) {
      handleError();
    }
  };
  
  if (hasError || !imageFile) {
    return <Shirt style={{ width: '80px', height: '80px', color: '#666' }} strokeWidth={1} />;
  }
  
  return (
    <img 
      key={`${imgKey}-${currentExtIndex}`}
      src={`/${folder}/${imageFile}${extensions[currentExtIndex]}`}
      alt={alt}
      onError={handleError}
      onLoad={handleLoad}
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
    shortName: 'Europeus',
    backgroundImage: '/backEuropeus.png'
  },
  { 
    id: 2, 
    name: 'Times Brasileiros',
    shortName: 'Brasileiros',
    backgroundImage: 'backgroundBRs.png'
  },
  { 
  id: 3, 
  name: 'Seleções',
  shortName: 'Seleções',
  backgroundImage: '/backSelecoes.png'
},
  { 
    id: 4, 
    name: 'Retrô',
    shortName: 'Retrô',
    backgroundImage: '/backRetro.png'
  },
  { 
    id: 5, 
    name: 'Modelo Jogador',
    shortName: 'Modelo Jogador',
    backgroundImage: '/backModeloJogador.png'
  },
  { 
    id: 7, 
    name: 'Feminino',
    shortName: 'Feminino',
    backgroundImage: 'backFeminino.png'
  },
  { 
    id: 8, 
    name: 'Infantil',
    shortName: 'Infantil',
    backgroundImage: 'backInfantil.png'
  },
  { 
    id: 9, 
    name: 'Calções',
    shortName: 'Calções',
    backgroundImage: 'backCalcoes.png'
  },
  { 
    id: 10, 
    name: 'Conjuntos',
    shortName: 'Conjuntos',
    backgroundImage: 'backConjuntos.png'
  },
];

// ============================================
// PRODUTOS - CORRIGIDO PARA ARQUIVOS EXISTENTES
// ============================================
const PRODUCTS_BY_CATEGORY = {
  2: [
    { id: 2001, name: 'Athletico Paranaense Away 22/23', imageFile: 'brasileiros_01', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2002, name: 'Atletico Mineiro All Black 25/26', imageFile: 'brasileiros_02', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2003, name: 'Atletico Mineiro Treino 25/26', imageFile: 'brasileiros_03', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2004, name: 'Atletico Mineiro Away 24/25', imageFile: 'brasileiros_04', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2005, name: 'Atletico Mineiro Away 25/26', imageFile: 'brasileiros_05', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2006, name: 'Atletico Mineiro Home 24/25', imageFile: 'brasileiros_06', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2007, name: 'Atletico Mineiro Home 25/26', imageFile: 'brasileiros_07', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2008, name: 'Atletico Mineiro Treino Preta 25/26', imageFile: 'brasileiros_08', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2009, name: 'Atletico Mineiro Third 25/26', imageFile: 'brasileiros_09', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2010, name: 'Atletico Mineiro Third 24/25', imageFile: 'brasileiros_10', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2011, name: 'Atletico Mineiro Treino II 25/26', imageFile: 'brasileiros_11', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2012, name: 'Atletico Mineiro Treino II Preta 25/26', imageFile: 'brasileiros_12', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2013, name: 'Bahia Away 24/25', imageFile: 'brasileiros_13', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2014, name: 'Bahia Away 25/26', imageFile: 'brasileiros_14', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2015, name: 'Bahia Home 25/26', imageFile: 'brasileiros_15', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2016, name: 'Bahia Away II 24/25', imageFile: 'brasileiros_16', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2017, name: 'Botafogo Third 25/26', imageFile: 'brasileiros_17', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2018, name: 'Botafogo Aura90 25/26', imageFile: 'brasileiros_18', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2019, name: 'Botafogo Aura90 Vbet 25/26', imageFile: 'brasileiros_19', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2020, name: 'Botafogo Home 25/26', imageFile: 'brasileiros_20', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2021, name: 'Botafogo Home Vbet 25/26', imageFile: 'brasileiros_21', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2022, name: 'Botafogo Away Vbet 25/26', imageFile: 'brasileiros_22', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2023, name: 'Botafogo Pre-Jogo 25/26', imageFile: 'brasileiros_23', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2024, name: 'Botafogo Edição Especial 2024', imageFile: 'brasileiros_24', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2025, name: 'Corinthians Away 24/25', imageFile: 'brasileiros_25', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2026, name: 'Corinthians Home 25/26', imageFile: 'brasileiros_26', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2027, name: 'Corinthians Home Memphis 25/26', imageFile: 'brasileiros_27', folder: 'camisasCoimbra', price: 190.00 },
    { id: 2028, name: 'Corinthians Away Memphis 25/26', imageFile: 'brasileiros_28', folder: 'camisasCoimbra', price: 190.00 },
    { id: 2029, name: 'Corinthians Away 25/26', imageFile: 'brasileiros_29', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2030, name: 'Corinthians Pre-Jogo 25/26', imageFile: 'brasileiros_30', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2031, name: 'Corinthians Total 90 25/26', imageFile: 'brasileiros_31', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2032, name: 'Corinthians Treino II 25/26', imageFile: 'brasileiros_32', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2033, name: 'Corinthians Treino 25/26', imageFile: 'brasileiros_33', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2034, name: 'Cruzeiro Home 25/26', imageFile: 'brasileiros_34', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2035, name: 'Cruzeiro Third 25/26', imageFile: 'brasileiros_35', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2036, name: 'Cruzeiro Home Dudu 24/25', imageFile: 'brasileiros_36', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2037, name: 'Cruzeiro Away 25/26', imageFile: 'brasileiros_37', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2038, name: 'Cruzeiro Gigante 2025', imageFile: 'brasileiros_38', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2039, name: 'Cruzeiro Treino I 25/26', imageFile: 'brasileiros_39', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2040, name: 'Cruzeiro Treino II 25/26', imageFile: 'brasileiros_40', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2041, name: 'Cruzeiro Treino II Regata 25/26', imageFile: 'brasileiros_41', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2042, name: 'Cruzeiro Treino I Regata 25/26', imageFile: 'brasileiros_42', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2043, name: 'Flamengo Goleiro I 25/26', imageFile: 'brasileiros_43', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2044, name: 'Flamengo Treino I 25/26', imageFile: 'brasileiros_44', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2045, name: 'Flamengo Treino II 25/26', imageFile: 'brasileiros_45', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2046, name: 'Flamengo Treino II 25/26 repetida', imageFile: 'brasileiros_46', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2047, name: 'Flamengo Treino II Polo 25/26', imageFile: 'brasileiros_47', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2048, name: 'Flamengo Treino I Polo 25/26', imageFile: 'brasileiros_48', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2049, name: 'Flamengo Third 25/26', imageFile: 'brasileiros_49', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2050, name: 'Flamengo Away 24/25', imageFile: 'brasileiros_50', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2051, name: 'Flamengo Away 25/26', imageFile: 'brasileiros_51', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2052, name: 'Flamengo Identidade 2025', imageFile: 'brasileiros_52', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2053, name: 'Flamengo Third Pixbet 25/26', imageFile: 'brasileiros_53', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2054, name: 'Flamengo Lifestyle 2025', imageFile: 'brasileiros_54', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2055, name: 'Internacional Treino 25/26', imageFile: 'brasileiros_55', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2056, name: 'Flamengo Third 24/25', imageFile: 'brasileiros_56', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2057, name: 'Flamengo Third Pixbet 24/25', imageFile: 'brasileiros_57', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2058, name: 'Flamengo Home 25/26', imageFile: 'brasileiros_58', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2059, name: 'Flamengo Treino I Regata 25/26', imageFile: 'brasileiros_59', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2060, name: 'Flamengo Third Regata 24/25', imageFile: 'brasileiros_60', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2061, name: 'Flamengo Goleiro II 25/26', imageFile: 'brasileiros_61', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2062, name: 'Flamengo Icons 25/26', imageFile: 'brasileiros_62', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2063, name: 'Flamengo Home 23/24', imageFile: 'brasileiros_63', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2064, name: 'Flamengo Volta Zico 2025', imageFile: 'brasileiros_64', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2065, name: 'Fluminense Away 25/26', imageFile: 'brasileiros_65', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2066, name: 'Fluminense Away 24/25', imageFile: 'brasileiros_66', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2067, name: 'Fluminense Home 25/26', imageFile: 'brasileiros_67', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2068, name: 'Fluminense Treino 25/26', imageFile: 'brasileiros_68', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2069, name: 'Fluminense Third 25/26', imageFile: 'brasileiros_69', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2070, name: 'Fortaleza Copa do Nordeste 2025', imageFile: 'brasileiros_70', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2071, name: 'Fortaleza Away 25/26', imageFile: 'brasileiros_71', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2072, name: 'Corinthians Treino II 24/25', imageFile: 'brasileiros_72', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2073, name: 'Gremio Away 25/26', imageFile: 'brasileiros_73', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2074, name: 'Gremio Away alfa 25/26', imageFile: 'brasileiros_74', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2075, name: 'Gremio Third 25/26', imageFile: 'brasileiros_75', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2076, name: 'Gremio Home 25/26', imageFile: 'brasileiros_76', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2077, name: 'Gremio Home 23/24', imageFile: 'brasileiros_77', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2078, name: 'Internacional Third 25/26', imageFile: 'brasileiros_78', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2079, name: 'Internacional Away 25/26', imageFile: 'brasileiros_79', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2080, name: 'Internacional Away 24/25', imageFile: 'brasileiros_80', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2081, name: 'Internacional Home 25/26', imageFile: 'brasileiros_81', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2082, name: 'Bahia Third 25/26', imageFile: 'brasileiros_82', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2083, name: 'Palmeiras Away 25/26', imageFile: 'brasileiros_83', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2084, name: 'Flamengo Lifestyle Red 2025', imageFile: 'brasileiros_84', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2085, name: 'São Paulo Home 25/26', imageFile: 'brasileiros_85', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2086, name: 'Palmeiras Third 25/26', imageFile: 'brasileiros_86', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2087, name: 'Palmeiras Away 23/24', imageFile: 'brasileiros_87', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2088, name: 'Palmeiras Away 24/25', imageFile: 'brasileiros_88', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2089, name: 'Palmeiras Away II 25/26', imageFile: 'brasileiros_89', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2090, name: 'Palmeiras Campeão 2022', imageFile: 'brasileiros_90', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2091, name: 'Palmeiras Home 23/24', imageFile: 'brasileiros_91', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2092, name: 'Palmeiras Goleiro II 25/26', imageFile: 'brasileiros_92', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2093, name: 'Palmeiras Away 22/23', imageFile: 'brasileiros_93', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2094, name: 'Palmeiras Edição Especial 2025', imageFile: 'brasileiros_94', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2095, name: 'Palmeiras Regata II 2024', imageFile: 'brasileiros_95', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2096, name: 'Palmeiras Treino Regata 24/25', imageFile: 'brasileiros_96', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2097, name: 'Palmeiras Home 25/26', imageFile: 'brasileiros_97', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2098, name: 'Palmeiras Viagem 2025', imageFile: 'brasileiros_98', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2099, name: 'Palmeiras Home 2026', imageFile: 'brasileiros_99', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2100, name: 'Palmeiras Goleiro I 23/24', imageFile: 'brasileiros_100', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2101, name: 'Palmeiras Third 23/24', imageFile: 'brasileiros_101', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2102, name: 'Palmeiras Edição Especial 24/25', imageFile: 'brasileiros_102', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2103, name: 'Red Bull Bragantino Away 25/26', imageFile: 'brasileiros_103', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2104, name: 'Red Bull Bragantino Home 25/26', imageFile: 'brasileiros_104', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2105, name: 'Santa Cruz Away 25/26', imageFile: 'brasileiros_105', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2106, name: 'Santos Treino 25/26', imageFile: 'brasileiros_106', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2107, name: 'Santos Third 7k 25/26', imageFile: 'brasileiros_107', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2108, name: 'Santos Third Neymar Jr. 25/26', imageFile: 'brasileiros_108', folder: 'camisasCoimbra', price: 190.00 },
    { id: 2109, name: 'Santos Third 25/26', imageFile: 'brasileiros_109', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2110, name: 'Santos Home 25/26', imageFile: 'brasileiros_110', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2111, name: 'Santos Pelé 1000 Gols', imageFile: 'brasileiros_111', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2112, name: 'Santos Home 24/25', imageFile: 'brasileiros_112', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2113, name: 'Santos Home Neymar Jr. 25/26', imageFile: 'brasileiros_113', folder: 'camisasCoimbra', price: 190.00 },
    { id: 2114, name: 'Santos Home Neymar Jr. 24/25', imageFile: 'brasileiros_114', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2115, name: 'Santos Home VivaSorte Neymar Jr. 24/25', imageFile: 'brasileiros_115', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2116, name: 'Santos Away Neymar Jr. 25/26', imageFile: 'brasileiros_116', folder: 'camisasCoimbra', price: 190.00 },
    { id: 2117, name: 'Santos Pelé 1000 Gols Preta', imageFile: 'brasileiros_117', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2118, name: 'Santos Away 25/26', imageFile: 'brasileiros_118', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2119, name: 'São Paulo Treino 25/26', imageFile: 'brasileiros_119', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2120, name: 'São Paulo Goleiro III 24/25', imageFile: 'brasileiros_120', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2121, name: 'São Paulo Goleiro II 25/26', imageFile: 'brasileiros_121', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2122, name: 'São Paulo Goleiro I 25/26', imageFile: 'brasileiros_122', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2123, name: 'São Paulo Goleiro III 25/26', imageFile: 'brasileiros_123', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2124, name: 'São Paulo Away 23/24', imageFile: 'brasileiros_124', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2125, name: 'São Paulo Away 25/26', imageFile: 'brasileiros_125', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2126, name: 'São Paulo Away 24/25', imageFile: 'brasileiros_126', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2127, name: 'São Paulo Grey Days 2025', imageFile: 'brasileiros_127', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2128, name: 'São Paulo Third 25/26', imageFile: 'brasileiros_128', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2129, name: 'São Paulo Treino II 25/26', imageFile: 'brasileiros_129', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2130, name: 'São Paulo Pré-Jogo 24/25', imageFile: 'brasileiros_130', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2131, name: 'São Paulo Treino II Regata 25/26', imageFile: 'brasileiros_131', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2132, name: 'São Paulo Pré-Jogo I Superbet 24/25', imageFile: 'brasileiros_132', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2133, name: 'São Paulo Pré-Jogo I 24/25', imageFile: 'brasileiros_133', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2134, name: 'São Paulo Home 25/26', imageFile: 'brasileiros_134', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2135, name: 'Sport Home 25/26', imageFile: 'brasileiros_135', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2136, name: 'Vasco Negritude 2025', imageFile: 'brasileiros_136', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2137, name: 'Vasco Away 25/26', imageFile: 'brasileiros_137', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2138, name: 'Vasco Third 25/26', imageFile: 'brasileiros_138', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2139, name: 'Vasco Third 24/25', imageFile: 'brasileiros_139', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2140, name: 'Vasco Home 98', imageFile: 'brasileiros_140', folder: 'camisasCoimbra', price: 150.00 },
    { id: 2141, name: 'Vasco Home 25/26', imageFile: 'brasileiros_141', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2142, name: 'Vitoria Away 25/26', imageFile: 'brasileiros_142', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2143, name: 'Vitoria Home 25/26', imageFile: 'brasileiros_143', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2144, name: 'Flamengo US Pack 2025', imageFile: 'brasileiros_144', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2145, name: 'Flamengo Edição Icon 2018', imageFile: 'brasileiros_145', folder: 'camisasCoimbra', price: 170.00 },
    { id: 2146, name: 'Vasco Home 24/25', imageFile: 'brasileiros_146', folder: 'camisasCoimbra', price: 150.00 },

  ],
  1: [
    { id: 1001, name: 'Ajax Away 24/25', imageFile: 'europeus_01', folder: 'timesEuropeus', price: 150.00 },
    { id: 1002, name: 'Ajax Third 25/26', imageFile: 'europeus_59', folder: 'timesEuropeus', price: 170.00 },
    { id: 1003, name: 'Napoli Cyborg', imageFile: 'europeus_03', folder: 'timesEuropeus', price: 170.00 },
    { id: 1004, name: 'Al Hilal Away Neymar Jr 24/25', imageFile: 'europeus_70', folder: 'timesEuropeus', price: 170.00 },
    { id: 1005, name: 'Al Hilal Away 24/25', imageFile: 'europeus_81', folder: 'timesEuropeus', price: 150.00 },
    { id: 1006, name: 'Al Hilal Home 23', imageFile: 'europeus_92', folder: 'timesEuropeus', price: 150.00 },
    { id: 1007, name: 'Al Hilal Home 24/25', imageFile: 'europeus_103', folder: 'timesEuropeus', price: 150.00 },
    { id: 1008, name: 'Al Hilal Home Neymar Jr 23', imageFile: 'europeus_114', folder: 'timesEuropeus', price: 170.00 },
    { id: 1009, name: 'Al Hilal Home Neymar Jr 24/25', imageFile: 'europeus_125', folder: 'timesEuropeus', price: 170.00 },
    { id: 1010, name: 'Al Nassr Home 24/25', imageFile: 'europeus_35', folder: 'timesEuropeus', price: 150.00 },
    { id: 1011, name: 'Al Nassr Home 23/24 CR7', imageFile: 'europeus_24', folder: 'timesEuropeus', price: 170.00 },
    { id: 1012, name: 'Al Nassr Home 25/26', imageFile: 'europeus_13', folder: 'timesEuropeus', price: 170.00 },
    { id: 1013, name: 'Al Nassr Away 24/25', imageFile: 'europeus_136', folder: 'timesEuropeus', price: 150.00 },
    { id: 1014, name: 'Al Nassr Third 24/25', imageFile: 'europeus_54', folder: 'timesEuropeus', price: 150.00 },
    { id: 1015, name: 'Al Nassr Home 24/25 CR7', imageFile: 'europeus_46', folder: 'timesEuropeus', price: 170.00 },
    { id: 1016, name: 'Al Nassr Away 24/25 CR7', imageFile: 'europeus_02', folder: 'timesEuropeus', price: 170.00 },
    { id: 1017, name: 'Al Nassr Third 24/25 CR7', imageFile: 'europeus_55', folder: 'timesEuropeus', price: 170.00 },
    { id: 1018, name: 'Al Nassr Third 25/26', imageFile: 'europeus_56', folder: 'timesEuropeus', price: 170.00 },
    { id: 1019, name: 'Arsenal Away 25/26', imageFile: 'europeus_57', folder: 'timesEuropeus', price: 170.00 },
    { id: 1020, name: 'Arsenal Third 25/26', imageFile: 'europeus_61', folder: 'timesEuropeus', price: 170.00 },
    { id: 1021, name: 'Arsenal Third 24/25', imageFile: 'europeus_58', folder: 'timesEuropeus', price: 150.00 },
    { id: 1022, name: 'Arsenal Home 25/26', imageFile: 'europeus_62', folder: 'timesEuropeus', price: 170.00 },
    { id: 1023, name: 'Aston Villa Home 25/26', imageFile: 'europeus_63', folder: 'timesEuropeus', price: 170.00 },
    { id: 1024, name: 'Athletic Bilbao Home 25/26', imageFile: 'europeus_64', folder: 'timesEuropeus', price: 170.00 },
    { id: 1025, name: 'Atletico de Madrid Away 25/26', imageFile: 'europeus_65', folder: 'timesEuropeus', price: 170.00 },
    { id: 1026, name: 'Atletico de Madrid Away 24/25', imageFile: 'europeus_66', folder: 'timesEuropeus', price: 150.00 },
    { id: 1027, name: 'Atletico de Madrid Home 25/26', imageFile: 'europeus_67', folder: 'timesEuropeus', price: 170.00 },
    { id: 1028, name: 'Atletico de Madrid Wonder Woman', imageFile: 'europeus_93', folder: 'timesEuropeus', price: 170.00 },
    { id: 1029, name: 'FC Barcelona 125 Anos', imageFile: 'europeus_94', folder: 'timesEuropeus', price: 170.00 },
    { id: 1030, name: 'FC Barcelona Away 25/26', imageFile: 'europeus_96', folder: 'timesEuropeus', price: 170.00 },
    { id: 1031, name: 'FC Barcelona Home 25/26', imageFile: 'europeus_97', folder: 'timesEuropeus', price: 170.00 },
    { id: 1032, name: 'FC Barcelona Home 25/26 Lamine Yamal', imageFile: 'europeus_95', folder: 'timesEuropeus', price: 190.00 },
    { id: 1033, name: 'FC Barcelona Cactus Jack', imageFile: 'europeus_98', folder: 'timesEuropeus', price: 150.00 },
    { id: 1034, name: 'FC Barcelona Third 25/26', imageFile: 'europeus_68', folder: 'timesEuropeus', price: 170.00 },
    { id: 1035, name: 'Bayer Leverkusen Edição Especial 24/25', imageFile: 'europeus_69', folder: 'timesEuropeus', price: 150.00 },
    { id: 1036, name: 'Bayern de Munique 125 anos', imageFile: 'europeus_71', folder: 'timesEuropeus', price: 150.00 },
    { id: 1037, name: 'Bayern de Munique Away 25/26', imageFile: 'europeus_74', folder: 'timesEuropeus', price: 170.00 },
    { id: 1038, name: 'Bayern de Munique Treino 25/26', imageFile: 'europeus_73', folder: 'timesEuropeus', price: 170.00 },
    { id: 1039, name: 'Bayern de Munique Third 25/26', imageFile: 'europeus_72', folder: 'timesEuropeus', price: 170.00 },
    { id: 1040, name: 'Bayern de Munique Home 25/26', imageFile: 'europeus_75', folder: 'timesEuropeus', price: 170.00 },
    { id: 1041, name: 'Benfica Away 25/26', imageFile: 'europeus_77', folder: 'timesEuropeus', price: 170.00 },
    { id: 1042, name: 'Benfica Third 25/26', imageFile: 'europeus_76', folder: 'timesEuropeus', price: 170.00 },
    { id: 1043, name: 'Benfica Home 25/26', imageFile: 'europeus_78', folder: 'timesEuropeus', price: 170.00 },
    { id: 1044, name: 'Boca Juniors Away 25/26', imageFile: 'europeus_79', folder: 'timesEuropeus', price: 170.00 },
    { id: 1045, name: 'Boca Juniors Home 25/26', imageFile: 'europeus_80', folder: 'timesEuropeus', price: 170.00 },
    { id: 1046, name: 'Boca Juniors Third 25/26', imageFile: 'europeus_82', folder: 'timesEuropeus', price: 170.00 },
    { id: 1047, name: 'Borussia Dortmund Home 24/25', imageFile: 'europeus_83', folder: 'timesEuropeus', price: 150.00 },
    { id: 1048, name: 'Borussia Dortmund Home 25/26', imageFile: 'europeus_84', folder: 'timesEuropeus', price: 170.00 },
    { id: 1049, name: 'Brighton Away 25/26', imageFile: 'europeus_86', folder: 'timesEuropeus', price: 170.00 },
    { id: 1050, name: 'Celtic Home 25/26', imageFile: 'europeus_85', folder: 'timesEuropeus', price: 170.00 },
    { id: 1051, name: 'Celtic Away 25/26', imageFile: 'europeus_88', folder: 'timesEuropeus', price: 170.00 },
    { id: 1052, name: 'Chelsea FC Home 25/26', imageFile: 'europeus_87', folder: 'timesEuropeus', price: 170.00 },
    { id: 1053, name: 'Chelsea FC Away 25/26', imageFile: 'europeus_89', folder: 'timesEuropeus', price: 170.00 },
    { id: 1054, name: 'Chelsea FC Third Total 90 25/26', imageFile: 'europeus_90', folder: 'timesEuropeus', price: 170.00 },
    { id: 1055, name: 'Colo-Colo 100 Anos', imageFile: 'europeus_91', folder: 'timesEuropeus', price: 150.00 },
    { id: 1056, name: 'Colo-Colo Adidas Originals', imageFile: 'europeus_99', folder: 'timesEuropeus', price: 150.00 },
    { id: 1057, name: 'Feyenoord Home 25/26', imageFile: 'europeus_100', folder: 'timesEuropeus', price: 170.00 },
    { id: 1058, name: 'Fulham Home 25/26', imageFile: 'europeus_101', folder: 'timesEuropeus', price: 170.00 },
    { id: 1059, name: 'Inter de Milão Away 24/25', imageFile: 'europeus_102', folder: 'timesEuropeus', price: 150.00 },
    { id: 1060, name: 'Inter de Milão Away 25/26', imageFile: 'europeus_113', folder: 'timesEuropeus', price: 170.00 },
    { id: 1061, name: 'Inter Miami Third 24/25', imageFile: 'europeus_112', folder: 'timesEuropeus', price: 150.00 },
    { id: 1062, name: 'Inter Miami Home 25/26', imageFile: 'europeus_108', folder: 'timesEuropeus', price: 170.00 },
    { id: 1063, name: 'Inter Miami Away 24/25 L. Messi', imageFile: 'europeus_109', folder: 'timesEuropeus', price: 170.00 },
    { id: 1064, name: 'Inter Miami Away 23/24 L. Messi', imageFile: 'europeus_105', folder: 'timesEuropeus', price: 170.00 },
    { id: 1065, name: 'Inter Miami Home 23/24', imageFile: 'europeus_110', folder: 'timesEuropeus', price: 150.00 },
    { id: 1066, name: 'Inter Miami Home 23/24 L. Messi', imageFile: 'europeus_106', folder: 'timesEuropeus', price: 170.00 },
    { id: 1067, name: 'Inter Miami Away 24/25', imageFile: 'europeus_107', folder: 'timesEuropeus', price: 150.00 },
    { id: 1068, name: 'Inter Miami Away 25/26', imageFile: 'europeus_111', folder: 'timesEuropeus', price: 170.00 },
    { id: 1069, name: 'Inter Miami Home 24/25', imageFile: 'europeus_104', folder: 'timesEuropeus', price: 150.00 },
    { id: 1070, name: 'Inter de Milão Home 25/26', imageFile: 'europeus_115', folder: 'timesEuropeus', price: 170.00 },
    { id: 1071, name: 'Juventus Home 25/26', imageFile: 'europeus_116', folder: 'timesEuropeus', price: 170.00 },
    { id: 1072, name: 'Juventus Third 25/26', imageFile: 'europeus_117', folder: 'timesEuropeus', price: 170.00 },
    { id: 1073, name: 'LA Galaxy Home 24/25', imageFile: 'europeus_118', folder: 'timesEuropeus', price: 150.00 },
    { id: 1074, name: 'Lille Home 25/26', imageFile: 'europeus_120', folder: 'timesEuropeus', price: 170.00 },
    { id: 1075, name: 'Liverpool Away II 25/26', imageFile: 'europeus_119', folder: 'timesEuropeus', price: 170.00 },
    { id: 1076, name: 'Liverpool Away 25/26', imageFile: 'europeus_122', folder: 'timesEuropeus', price: 170.00 },
    { id: 1077, name: 'Liverpool Goleiro Third 25/26', imageFile: 'europeus_121', folder: 'timesEuropeus', price: 170.00 },
    { id: 1078, name: 'Liverpool Black 25/26', imageFile: 'europeus_124', folder: 'timesEuropeus', price: 170.00 },
    { id: 1079, name: 'Liverpool Third 25/26', imageFile: 'europeus_123', folder: 'timesEuropeus', price: 170.00 },
    { id: 1080, name: 'Liverpool Home 25/26', imageFile: 'europeus_126', folder: 'timesEuropeus', price: 170.00 },
    { id: 1081, name: 'Lyon Away 25/26', imageFile: 'europeus_130', folder: 'timesEuropeus', price: 170.00 },
    { id: 1082, name: 'Manchester City Home 25/26', imageFile: 'europeus_129', folder: 'timesEuropeus', price: 170.00 },
    { id: 1083, name: 'Manchester City Home 24/25', imageFile: 'europeus_131', folder: 'timesEuropeus', price: 150.00 },
    { id: 1084, name: 'Manchester City x KIDSUPER', imageFile: 'europeus_132', folder: 'timesEuropeus', price: 150.00 },
    { id: 1085, name: 'Manchester United Alternative 25/26', imageFile: 'europeus_134', folder: 'timesEuropeus', price: 170.00 },
    { id: 1086, name: 'Manchester City Ano do Dragão', imageFile: 'europeus_127', folder: 'timesEuropeus', price: 150.00 },
    { id: 1087, name: 'Manchester City Away 25/26', imageFile: 'europeus_128', folder: 'timesEuropeus', price: 170.00 },
    { id: 1088, name: 'Manchester United Treino 25/26', imageFile: 'europeus_135', folder: 'timesEuropeus', price: 170.00 },
    { id: 1089, name: 'Manchester United Third 25/26', imageFile: 'europeus_133', folder: 'timesEuropeus', price: 170.00 },
    { id: 1090, name: 'Manchester United Home 25/26', imageFile: 'europeus_137', folder: 'timesEuropeus', price: 170.00 },
    { id: 1091, name: 'Manchester United Pre Jogo 25/26', imageFile: 'europeus_138', folder: 'timesEuropeus', price: 170.00 },
    { id: 1092, name: 'Milan Away 25/26', imageFile: 'europeus_139', folder: 'timesEuropeus', price: 170.00 },
    { id: 1093, name: 'Milan Goleiro 25/26', imageFile: 'europeus_142', folder: 'timesEuropeus', price: 170.00 },
    { id: 1094, name: 'Milan Third 24/25', imageFile: 'europeus_140', folder: 'timesEuropeus', price: 150.00 },
    { id: 1095, name: 'Milan Home 25/26', imageFile: 'europeus_141', folder: 'timesEuropeus', price: 170.00 },
    { id: 1096, name: 'Milan Off-White 24/25', imageFile: 'europeus_143', folder: 'timesEuropeus', price: 150.00 },
    { id: 1097, name: 'Monaco Home 25/26', imageFile: 'europeus_145', folder: 'timesEuropeus', price: 170.00 },
    { id: 1098, name: 'Napoli Home 25/26', imageFile: 'europeus_144', folder: 'timesEuropeus', price: 170.00 },
    { id: 1099, name: 'Napoli Away 25/26', imageFile: 'europeus_146', folder: 'timesEuropeus', price: 170.00 },
    { id: 1100, name: 'Napoli Edição Especial', imageFile: 'europeus_05', folder: 'timesEuropeus', price: 150.00 },
    { id: 1101, name: 'Newcastle Home 25/26', imageFile: 'europeus_06', folder: 'timesEuropeus', price: 170.00 },
    { id: 1102, name: 'Newcastle Away 25/26', imageFile: 'europeus_07', folder: 'timesEuropeus', price: 170.00 },
    { id: 1103, name: 'Newcastle Third 25/26', imageFile: 'europeus_04', folder: 'timesEuropeus', price: 170.00 },
    { id: 1104, name: 'Oasis Adidas Originals', imageFile: 'europeus_10', folder: 'timesEuropeus', price: 150.00 },
    { id: 1105, name: 'Olympique Marseille Third 25/26', imageFile: 'europeus_09', folder: 'timesEuropeus', price: 170.00 },
    { id: 1106, name: 'Olympique Marseille Home 25/26', imageFile: 'europeus_08', folder: 'timesEuropeus', price: 170.00 },
    { id: 1107, name: 'Olympique Marseille Away 25/26', imageFile: 'europeus_37', folder: 'timesEuropeus', price: 170.00 },
    { id: 1108, name: 'Real Sociedad Home 25/26', imageFile: 'europeus_11', folder: 'timesEuropeus', price: 170.00 },
    { id: 1109, name: 'Porto Home 25/26', imageFile: 'europeus_15', folder: 'timesEuropeus', price: 170.00 },
    { id: 1110, name: 'Paris Saint-German x Jordan 2022', imageFile: 'europeus_16', folder: 'timesEuropeus', price: 150.00 },
    { id: 1111, name: 'Paris Saint-German x Jordan Fourth 24/25', imageFile: 'europeus_12', folder: 'timesEuropeus', price: 150.00 },
    { id: 1112, name: 'Paris Saint-German Home 25/26', imageFile: 'europeus_18', folder: 'timesEuropeus', price: 170.00 },
    { id: 1113, name: 'Paris Saint-German x Jordan Treino', imageFile: 'europeus_17', folder: 'timesEuropeus', price: 150.00 },
    { id: 1114, name: 'Paris Saint-German x Jordan Third 24/25', imageFile: 'europeus_14', folder: 'timesEuropeus', price: 150.00 },
    { id: 1115, name: 'Paris Saint-German Third 25/26', imageFile: 'europeus_19', folder: 'timesEuropeus', price: 170.00 },
    { id: 1116, name: 'Racing Club Third 25/26', imageFile: 'europeus_21', folder: 'timesEuropeus', price: 170.00 },
    { id: 1117, name: 'Rangers FC Third 25/26', imageFile: 'europeus_22', folder: 'timesEuropeus', price: 170.00 },
    { id: 1118, name: 'RB Leipzig Away 25/26', imageFile: 'europeus_23', folder: 'timesEuropeus', price: 170.00 },
    { id: 1119, name: 'RB Leipzig Home 25/26', imageFile: 'europeus_26', folder: 'timesEuropeus', price: 170.00 },
    { id: 1120, name: 'Real Betis Home 25/26', imageFile: 'europeus_27', folder: 'timesEuropeus', price: 170.00 },
    { id: 1121, name: 'Real Betis Concept 24/25', imageFile: 'europeus_25', folder: 'timesEuropeus', price: 150.00 },
    { id: 1122, name: 'Real Betis Home 24/25', imageFile: 'europeus_28', folder: 'timesEuropeus', price: 150.00 },
    { id: 1123, name: 'Real Madrid Adidas Originals 24/25', imageFile: 'europeus_33', folder: 'timesEuropeus', price: 150.00 },
    { id: 1124, name: 'Real Madrid Third 25/26', imageFile: 'europeus_32', folder: 'timesEuropeus', price: 170.00 },
    { id: 1125, name: 'Real Madrid Home 25/26', imageFile: 'europeus_30', folder: 'timesEuropeus', price: 170.00 },
    { id: 1126, name: 'Real Madrid Away 25/26', imageFile: 'europeus_29', folder: 'timesEuropeus', price: 170.00 },
    { id: 1127, name: 'Real Madrid Away 24/25', imageFile: 'europeus_31', folder: 'timesEuropeus', price: 150.00 },
    { id: 1128, name: 'Real Madrid Goleiro Fourth 25/26', imageFile: 'europeus_36', folder: 'timesEuropeus', price: 170.00 },
    { id: 1129, name: 'Real Madrid Y-3', imageFile: 'europeus_34', folder: 'timesEuropeus', price: 150.00 },
    { id: 1130, name: 'Real Madrid Treino 25/26', imageFile: 'europeus_20', folder: 'timesEuropeus', price: 170.00 },
    { id: 1131, name: 'Racing Santander 112th Anniversary', imageFile: 'europeus_39', folder: 'timesEuropeus', price: 150.00 },
    { id: 1132, name: 'Roma Home 25/26', imageFile: 'europeus_40', folder: 'timesEuropeus', price: 170.00 },
    { id: 1133, name: 'Sporting Home 25/26', imageFile: 'europeus_41', folder: 'timesEuropeus', price: 170.00 },
    { id: 1134, name: 'Stoke City Home 25/26', imageFile: 'europeus_42', folder: 'timesEuropeus', price: 170.00 },
    { id: 1135, name: 'Tigres Home 25/26', imageFile: 'europeus_45', folder: 'timesEuropeus', price: 170.00 },
    { id: 1136, name: 'Tottenham Away-pat 25/26', imageFile: 'europeus_47', folder: 'timesEuropeus', price: 170.00 },
    { id: 1137, name: 'Tottenham Home 25/26', imageFile: 'europeus_48', folder: 'timesEuropeus', price: 170.00 },
    { id: 1138, name: 'Tottenham Pré-jogo 25/26', imageFile: 'europeus_44', folder: 'timesEuropeus', price: 170.00 },
    { id: 1139, name: 'Tottenham Away 24/25', imageFile: 'europeus_43', folder: 'timesEuropeus', price: 150.00 },
    { id: 1140, name: 'Tottenham Away 25/26', imageFile: 'europeus_50', folder: 'timesEuropeus', price: 170.00 },
    { id: 1141, name: 'Valencia Home 25/26', imageFile: 'europeus_51', folder: 'timesEuropeus', price: 170.00 },
    { id: 1142, name: 'Valencia Home-pat 25/26', imageFile: 'europeus_49', folder: 'timesEuropeus', price: 170.00 },
    { id: 1143, name: 'Valencia Away 25/26', imageFile: 'europeus_52', folder: 'timesEuropeus', price: 170.00 },
    { id: 1144, name: 'WestHam Home 25/26', imageFile: 'europeus_53', folder: 'timesEuropeus', price: 170.00 },
    { id: 1145, name: 'Borussia Dortmund Home pat 25/26', imageFile: 'europeus_150', folder: 'timesEuropeus', price: 170.00 },
    { id: 1146, name: 'River Plate Away 25/26', imageFile: 'europeus_148', folder: 'timesEuropeus', price: 170.00 },
    { id: 1147, name: 'Oasis Adidas Originals II', imageFile: 'europeus_147', folder: 'timesEuropeus', price: 150.00 },
    { id: 1148, name: 'Ajax Away 25/26', imageFile: 'europeus_149', folder: 'timesEuropeus', price: 170.00 },
    { id: 1149, name: 'Roma Home 23/24', imageFile: 'europeus_38', folder: 'timesEuropeus', price: 150.00 },
    { id: 1150, name: 'Arsenal Concept 25/26', imageFile: 'europeus_60', folder: 'timesEuropeus', price: 170.00 },
    { id: 1151, name: 'Aston Villa Third 25/26', imageFile: 'europeus_151', folder: 'timesEuropeus', price: 170.00 },
    { id: 1152, name: 'Real Madrid Edição Especial 23/24', imageFile: 'europeus_152', folder: 'timesEuropeus', price: 150.00 },


  ],
3: [
    { id: 3001, name: 'Portugal Home 24/25', imageFile: 'selecao_01', folder: 'selecoes', price: 150.00 },
    { id: 3002, name: 'Inglaterra Treino Regata 24/25', imageFile: 'selecao_02', folder: 'selecoes', price: 150.00 },
    { id: 3003, name: 'Portugal Home Cristiano Ronaldo 25/26', imageFile: 'selecao_03', folder: 'selecoes', price: 190.00 },
    { id: 3004, name: 'Argentina La Pulga 23/24', imageFile: 'selecao_04', folder: 'selecoes', price: 150.00 },
    { id: 3005, name: 'Itália Treino Regata 24/25', imageFile: 'selecao_05', folder: 'selecoes', price: 150.00 },
    { id: 3006, name: 'Brasil Third 19/20', imageFile: 'selecao_06', folder: 'selecoes', price: 150.00 },
    { id: 3007, name: 'Argentina Treino Regata 24/25', imageFile: 'selecao_07', folder: 'selecoes', price: 150.00 },
    { id: 3008, name: 'Brasil Home Copa 2026', imageFile: 'selecao_08', folder: 'selecoes', price: 150.00 },
    { id: 3009, name: 'Brasil Goleiro I 21/22', imageFile: 'selecao_09', folder: 'selecoes', price: 150.00 },
    { id: 3010, name: 'Japão Edição Especial 23/24', imageFile: 'selecao_10', folder: 'selecoes', price: 150.00 },
    { id: 3011, name: 'Argentina La Pulga L. Messi 23/24', imageFile: 'selecao_11', folder: 'selecoes', price: 170.00 },
    { id: 3012, name: 'Portugal Away 25/26', imageFile: 'selecao_12', folder: 'selecoes', price: 170.00 },
    { id: 3013, name: 'Portugal Home 21/22', imageFile: 'selecao_13', folder: 'selecoes', price: 150.00 },
    { id: 3014, name: 'Itália Away 24/25', imageFile: 'selecao_14', folder: 'selecoes', price: 150.00 },
    { id: 3015, name: 'Argentina Treino 25/26', imageFile: 'selecao_15', folder: 'selecoes', price: 170.00 },
    { id: 3016, name: 'Portugal Pantera Negra 25/26', imageFile: 'selecao_16', folder: 'selecoes', price: 170.00 },
    { id: 3017, name: 'Portugal Home 25/26', imageFile: 'selecao_17', folder: 'selecoes', price: 170.00 },
    { id: 3018, name: 'Brasil Away Copa 2026', imageFile: 'selecao_18', folder: 'selecoes', price: 150.00 },
    { id: 3019, name: 'Alemanha Away 24/25', imageFile: 'selecao_19', folder: 'selecoes', price: 150.00 },
    { id: 3020, name: 'Estados Unidos Away 24/25', imageFile: 'selecao_20', folder: 'selecoes', price: 150.00 },
    { id: 3021, name: 'Brasil Away 25/26', imageFile: 'selecao_21', folder: 'selecoes', price: 170.00 },
    { id: 3022, name: 'Irlanda Edição Especial 2025', imageFile: 'selecao_22', folder: 'selecoes', price: 150.00 },
    { id: 3023, name: 'Coreia do Sul Home 25/26', imageFile: 'selecao_23', folder: 'selecoes', price: 170.00 },
    { id: 3024, name: 'Suíça Home Copa 2026', imageFile: 'selecao_24', folder: 'selecoes', price: 150.00 },
    { id: 3025, name: 'Brasil Treino I 2014', imageFile: 'selecao_25', folder: 'selecoes', price: 150.00 },
    { id: 3026, name: 'Alemanha Away 25/26', imageFile: 'selecao_26', folder: 'selecoes', price: 170.00 },
    { id: 3027, name: 'Brasil Away Copa 2022', imageFile: 'selecao_27', folder: 'selecoes', price: 150.00 },
    { id: 3028, name: 'Camarões Away 25/26', imageFile: 'selecao_28', folder: 'selecoes', price: 170.00 },
    { id: 3029, name: 'Marrocos Home 25/26', imageFile: 'selecao_29', folder: 'selecoes', price: 170.00 },
    { id: 3030, name: 'Alemanha 125 Anos 2025', imageFile: 'selecao_30', folder: 'selecoes', price: 150.00 },
    { id: 3031, name: 'Brasil Treino II 2014', imageFile: 'selecao_31', folder: 'selecoes', price: 150.00 },
    { id: 3032, name: 'Brasil Treino III 2014', imageFile: 'selecao_32', folder: 'selecoes', price: 150.00 },
    { id: 3033, name: 'Portugal Home Copa 2026', imageFile: 'selecao_33', folder: 'selecoes', price: 150.00 },
    { id: 3034, name: 'Brasil Treino IV 2014', imageFile: 'selecao_34', folder: 'selecoes', price: 150.00 },
    { id: 3035, name: 'Japão Home Copa 2026', imageFile: 'selecao_35', folder: 'selecoes', price: 150.00 },
    { id: 3036, name: 'Itália Away Copa 2026', imageFile: 'selecao_36', folder: 'selecoes', price: 150.00 },
    { id: 3037, name: 'Argentina Home Copa 2026', imageFile: 'selecao_37', folder: 'selecoes', price: 150.00 },
    { id: 3038, name: 'Bélgica Home Copa 2026', imageFile: 'selecao_38', folder: 'selecoes', price: 150.00 },
    { id: 3039, name: 'Brasil Home Copa 2022', imageFile: 'selecao_39', folder: 'selecoes', price: 150.00 },
    { id: 3040, name: 'México Gold Cup 2025', imageFile: 'selecao_40', folder: 'selecoes', price: 150.00 },
    { id: 3041, name: 'México Away Copa 2026', imageFile: 'selecao_41', folder: 'selecoes', price: 150.00 },
    { id: 3042, name: 'França Home Copa 2026', imageFile: 'selecao_42', folder: 'selecoes', price: 150.00 },
    { id: 3043, name: 'Espanha Home Copa 2026', imageFile: 'selecao_43', folder: 'selecoes', price: 150.00 },
    { id: 3044, name: 'México Home Copa 2026', imageFile: 'selecao_44', folder: 'selecoes', price: 150.00 },
    { id: 3045, name: 'Portugal Away Copa 2026', imageFile: 'selecao_45', folder: 'selecoes', price: 150.00 },
    { id: 3046, name: 'Portugal Home Cristiano Ronaldo 2026', imageFile: 'selecao_46', folder: 'selecoes', price: 170.00 },
    { id: 3047, name: 'Itália Home Copa 2026', imageFile: 'selecao_47', folder: 'selecoes', price: 150.00 },
    { id: 3048, name: 'Argentina x Adidas 50 Anos 25/26', imageFile: 'selecao_48', folder: 'selecoes', price: 170.00 },
    { id: 3049, name: 'Inglaterra Away 24/25', imageFile: 'selecao_49', folder: 'selecoes', price: 150.00 },
    { id: 3050, name: 'Inglaterra Away Copa 2026', imageFile: 'selecao_50', folder: 'selecoes', price: 150.00 },
    { id: 3051, name: 'Romania Home 24/25', imageFile: 'selecao_51', folder: 'selecoes', price: 150.00 },
    { id: 3052, name: 'Alemanha Away 25/26', imageFile: 'selecao_52', folder: 'selecoes', price: 170.00 },
    { id: 3053, name: 'Chile Home Copa 2026', imageFile: 'selecao_53', folder: 'selecoes', price: 150.00 },
    { id: 3054, name: 'Itália Away 25/26', imageFile: 'selecao_54', folder: 'selecoes', price: 170.00 },
    { id: 3055, name: 'Colombia 100 Anos 24/25', imageFile: 'selecao_55', folder: 'selecoes', price: 150.00 },
    { id: 3056, name: 'Japão Edição Especial 23/24', imageFile: 'selecao_56', folder: 'selecoes', price: 150.00 },
    { id: 3057, name: 'Inglaterra Home 25/26', imageFile: 'selecao_57', folder: 'selecoes', price: 170.00 },
    { id: 3058, name: 'Uruguai Home 24/25', imageFile: 'selecao_58', folder: 'selecoes', price: 150.00 },
    { id: 3059, name: 'Peru Away 23/24', imageFile: 'selecao_59', folder: 'selecoes', price: 150.00 },
  ],
4: [
    { id: 4001, name: 'Manchester United Home 98/99', imageFile: 'retro_01', folder: 'retro', price: 180.00 },
    { id: 4002, name: 'Palmeiras Home 94/95', imageFile: 'retro_02', folder: 'retro', price: 180.00 },
    { id: 4003, name: 'Corinthians Home 99/00', imageFile: 'retro_03', folder: 'retro', price: 180.00 },
    { id: 4004, name: 'Chelsea Home UCL 2008', imageFile: 'retro_04', folder: 'retro', price: 180.00 },
    { id: 4005, name: 'Barcelona Away Ronaldinho 07/08', imageFile: 'retro_05', folder: 'retro', price: 200.00 },
    { id: 4006, name: 'Vasco Home 99/00', imageFile: 'retro_06', folder: 'retro', price: 180.00 },
    { id: 4007, name: 'Brasil Home Copa 1998', imageFile: 'retro_07', folder: 'retro', price: 180.00 },
    { id: 4008, name: 'Brasil Away Ronaldo Copa 1998', imageFile: 'retro_08', folder: 'retro', price: 200.00 },
    { id: 4009, name: 'Barcelona Away L. Messi 07/08', imageFile: 'retro_09', folder: 'retro', price: 200.00 },
    { id: 4010, name: 'São Paulo Home 00/01', imageFile: 'retro_10', folder: 'retro', price: 180.00 },
    { id: 4011, name: 'Barcelona Home UCL 05/06', imageFile: 'retro_11', folder: 'retro', price: 180.00 },
    { id: 4012, name: 'Arsenal Home 05/06', imageFile: 'retro_12', folder: 'retro', price: 180.00 },
    { id: 4013, name: 'França Home Zidane Copa 1998', imageFile: 'retro_13', folder: 'retro', price: 200.00 },
    { id: 4014, name: 'França Home Copa 1998', imageFile: 'retro_14', folder: 'retro', price: 180.00 },
    { id: 4015, name: 'Brasil Away Copa 2002', imageFile: 'retro_15', folder: 'retro', price: 180.00 },
    { id: 4016, name: 'Real Madrid Away Kaká 11/12', imageFile: 'retro_16', folder: 'retro', price: 200.00 },
    { id: 4017, name: 'Barcelona Home UCL 2009', imageFile: 'retro_17', folder: 'retro', price: 180.00 },
    { id: 4018, name: 'Santos Third Neymar Jr. 11/12', imageFile: 'retro_18', folder: 'retro', price: 200.00 },
    { id: 4019, name: 'Flamengo Away 1995', imageFile: 'retro_19', folder: 'retro', price: 180.00 },
    { id: 4020, name: 'Manchester United UCL 2008', imageFile: 'retro_20', folder: 'retro', price: 180.00 },
    { id: 4021, name: 'Flamengo Home Adriano Imperador 08/09', imageFile: 'retro_21', folder: 'retro', price: 200.00 },
    { id: 4022, name: 'Manchester United Home Beckham 98/99', imageFile: 'retro_22', folder: 'retro', price: 200.00 },
    { id: 4023, name: 'Corinthians Centenário 2010', imageFile: 'retro_23', folder: 'retro', price: 180.00 },
    { id: 4024, name: 'Milan Third 98/99', imageFile: 'retro_24', folder: 'retro', price: 180.00 },
    { id: 4025, name: 'Barcelona Home 15/16', imageFile: 'retro_25', folder: 'retro', price: 180.00 },
    { id: 4026, name: 'Corinthians Away 1995', imageFile: 'retro_26', folder: 'retro', price: 180.00 },
    { id: 4027, name: 'Paris Saint-German Home Neymar Jr. 17/18', imageFile: 'retro_27', folder: 'retro', price: 200.00 },
    { id: 4028, name: 'Paris Saint-German Home 01/02', imageFile: 'retro_28', folder: 'retro', price: 180.00 },
    { id: 4029, name: 'Real Madrid Home 99/00', imageFile: 'retro_29', folder: 'retro', price: 180.00 },
    { id: 4030, name: 'Barcelona Home 14/15', imageFile: 'retro_30', folder: 'retro', price: 180.00 },
    { id: 4031, name: 'Arsenal Home Henry 04/05', imageFile: 'retro_31', folder: 'retro', price: 200.00 },
    { id: 4032, name: 'Inglaterra Away 1996', imageFile: 'retro_32', folder: 'retro', price: 180.00 },
    { id: 4033, name: 'Real Madrid Third Cristiano Ronaldo 17/18', imageFile: 'retro_33', folder: 'retro', price: 200.00 },
    { id: 4034, name: 'Argentina Home 1998', imageFile: 'retro_34', folder: 'retro', price: 180.00 },
    { id: 4035, name: 'Bayern de Munique Away 96/98', imageFile: 'retro_35', folder: 'retro', price: 180.00 },
    { id: 4036, name: 'Manchester United Away 07/08', imageFile: 'retro_36', folder: 'retro', price: 180.00 },
    { id: 4037, name: 'Milan Third Kaká 13/14', imageFile: 'retro_37', folder: 'retro', price: 200.00 },
    { id: 4038, name: 'Manchester United Away 96/97', imageFile: 'retro_38', folder: 'retro', price: 180.00 },
    { id: 4039, name: 'Manchester United Centenário 01/02', imageFile: 'retro_39', folder: 'retro', price: 180.00 },
    { id: 4040, name: 'Fluminense Home 2010', imageFile: 'retro_40', folder: 'retro', price: 180.00 },
    { id: 4041, name: 'Flamengo Home 1995', imageFile: 'retro_41', folder: 'retro', price: 180.00 },
    { id: 4042, name: 'Corinthians Home Ronaldo 09/10', imageFile: 'retro_42', folder: 'retro', price: 200.00 },
    { id: 4043, name: 'Santos Home Neymar 10/11', imageFile: 'retro_43', folder: 'retro', price: 200.00 },
    { id: 4044, name: 'Barcelona Home Ronaldinho 2006', imageFile: 'retro_44', folder: 'retro', price: 180.00 },
    { id: 4045, name: 'Corinthians Away 09/10', imageFile: 'retro_45', folder: 'retro', price: 180.00 },
    { id: 4046, name: 'Corinthians Away 1998', imageFile: 'retro_46', folder: 'retro', price: 180.00 },
    { id: 4047, name: 'Liverpool Third 96/97', imageFile: 'retro_47', folder: 'retro', price: 180.00 },
    { id: 4048, name: 'França Away Copa 1998', imageFile: 'retro_48', folder: 'retro', price: 180.00 },
    { id: 4049, name: 'Brasil Home Romário Copa 1994', imageFile: 'retro_49', folder: 'retro', price: 200.00 },
    { id: 4050, name: 'Real Madrid Away 98/00', imageFile: 'retro_50', folder: 'retro', price: 180.00 },
    { id: 4051, name: 'Santos Home 12/13', imageFile: 'retro_51', folder: 'retro', price: 180.00 },
    { id: 4052, name: 'Bayern de Munique Home 95/97', imageFile: 'retro_52', folder: 'retro', price: 180.00 },
    { id: 4053, name: 'Milan Third 06/07', imageFile: 'retro_53', folder: 'retro', price: 180.00 },
    { id: 4054, name: 'Roma Away 99/00', imageFile: 'retro_54', folder: 'retro', price: 180.00 },
    { id: 4055, name: 'Roma Home 99/00', imageFile: 'retro_55', folder: 'retro', price: 180.00 },
    { id: 4056, name: 'Manchester United Home 1996', imageFile: 'retro_56', folder: 'retro', price: 180.00 },
    { id: 4057, name: 'Chelsea Home Drogba UCL 2008', imageFile: 'retro_57', folder: 'retro', price: 200.00 },
    { id: 4058, name: 'Bayern de Munique Home Robben UCL 2013', imageFile: 'retro_58', folder: 'retro', price: 200.00 },
    { id: 4059, name: 'Real Madrid Home Cristiano Ronaldo 17/18', imageFile: 'retro_59', folder: 'retro', price: 200.00 },
    { id: 4060, name: 'Flamengo Home 08/09', imageFile: 'retro_60', folder: 'retro', price: 180.00 },
    { id: 4061, name: 'Lazio Away 00/01', imageFile: 'retro_61', folder: 'retro', price: 180.00 },
    { id: 4062, name: 'Argentina Away Copa 1994', imageFile: 'retro_62', folder: 'retro', price: 180.00 },
    { id: 4063, name: 'Chelsea Home 06/08', imageFile: 'retro_63', folder: 'retro', price: 180.00 },
    { id: 4064, name: 'Milan Home Ronaldinho 06/07', imageFile: 'retro_64', folder: 'retro', price: 200.00 },
    { id: 4065, name: 'Barcelona Home Neymar Jr. 15/16', imageFile: 'retro_65', folder: 'retro', price: 200.00 },
    { id: 4066, name: 'Milan Home Kaká 06/07', imageFile: 'retro_66', folder: 'retro', price: 200.00 },
    { id: 4067, name: 'França Away Zidane Copa 2006', imageFile: 'retro_67', folder: 'retro', price: 200.00 },
    { id: 4068, name: 'Inter de Milão Home Ronaldo 98/99', imageFile: 'retro_68', folder: 'retro', price: 200.00 },
    { id: 4069, name: 'Flamengo Home 07/08', imageFile: 'retro_69', folder: 'retro', price: 180.00 },
    { id: 4070, name: 'França Home 1982', imageFile: 'retro_70', folder: 'retro', price: 180.00 },
    { id: 4071, name: 'Manchester United Home 07/08', imageFile: 'retro_71', folder: 'retro', price: 180.00 },
    { id: 4072, name: 'Milan Home 08/09', imageFile: 'retro_72', folder: 'retro', price: 180.00 },
    { id: 4073, name: 'Manchester United Away 98/99', imageFile: 'retro_73', folder: 'retro', price: 180.00 },
    { id: 4074, name: 'Botafogo Home 1995', imageFile: 'retro_74', folder: 'retro', price: 180.00 },
    { id: 4075, name: 'Holanda Home V. Nistelrooy 2004', imageFile: 'retro_75', folder: 'retro', price: 200.00 },
    { id: 4076, name: 'Holanda Home 2004', imageFile: 'retro_76', folder: 'retro', price: 180.00 },
    { id: 4077, name: 'Inter de Milão Away 04/05', imageFile: 'retro_77', folder: 'retro', price: 180.00 },
    { id: 4078, name: 'Barcelona Home 1992', imageFile: 'retro_78', folder: 'retro', price: 180.00 },
    { id: 4079, name: 'Santos IV 10/11', imageFile: 'retro_79', folder: 'retro', price: 180.00 },
    { id: 4080, name: 'Manchester City Home 2013', imageFile: 'retro_80', folder: 'retro', price: 180.00 },
    { id: 4081, name: 'Real Madrid Home Ronaldo 04/05', imageFile: 'retro_81', folder: 'retro', price: 200.00 },
    { id: 4082, name: 'Vasco Away 99/00', imageFile: 'retro_82', folder: 'retro', price: 180.00 },
    { id: 4083, name: 'Milan Home 06/07', imageFile: 'retro_83', folder: 'retro', price: 180.00 },
    { id: 4084, name: 'França Home Zidane Copa 1998', imageFile: 'retro_84', folder: 'retro', price: 200.00 },
    { id: 4085, name: 'São Paulo Home 07/08', imageFile: 'retro_85', folder: 'retro', price: 180.00 },
    { id: 4086, name: 'Corinthians Away Mundial 2012', imageFile: 'retro_86', folder: 'retro', price: 180.00 },
    { id: 4087, name: 'Corinthians Home Campeão 2011', imageFile: 'retro_87', folder: 'retro', price: 180.00 },
    { id: 4088, name: 'Barcelona Home Neymar Jr. 14/15', imageFile: 'retro_88', folder: 'retro', price: 200.00 },
    { id: 4089, name: 'Santos Third 12/13', imageFile: 'retro_89', folder: 'retro', price: 180.00 },
    { id: 4090, name: 'Barcelona Away 07/08', imageFile: 'retro_90', folder: 'retro', price: 180.00 },
    { id: 4091, name: 'Milan Away Kaká 06/07', imageFile: 'retro_91', folder: 'retro', price: 200.00 },
    { id: 4092, name: 'Corinthians Home Campeão 1990', imageFile: 'retro_92', folder: 'retro', price: 180.00 },
    { id: 4093, name: 'Brasil Home Rivaldo Copa 1998', imageFile: 'retro_93', folder: 'retro', price: 200.00 },
    { id: 4094, name: 'Liverpool Home 09/10', imageFile: 'retro_94', folder: 'retro', price: 180.00 },
    { id: 4095, name: 'Itália Home Pirlo Euro 2012', imageFile: 'retro_95', folder: 'retro', price: 200.00 },
    { id: 4096, name: 'Flamengo Home 94/95', imageFile: 'retro_96', folder: 'retro', price: 180.00 },
    { id: 4097, name: 'Itália Home R. Baggio Copa 1994', imageFile: 'retro_97', folder: 'retro', price: 200.00 },
    { id: 4098, name: 'Palmeiras Home 1999', imageFile: 'retro_98', folder: 'retro', price: 180.00 },
    { id: 4099, name: 'Manchester United Third Beckham 98/99', imageFile: 'retro_99', folder: 'retro', price: 200.00 },
    { id: 4100, name: 'Flamengo Away 1995', imageFile: 'retro_100', folder: 'retro', price: 180.00 },
    { id: 4101, name: 'Brasil Home Ronaldinho Copa 2006', imageFile: 'retro_101', folder: 'retro', price: 200.00 },
    { id: 4102, name: 'Real Madrid Third 2006', imageFile: 'retro_102', folder: 'retro', price: 180.00 },
    { id: 4103, name: 'Palmeiras Home 1994', imageFile: 'retro_103', folder: 'retro', price: 180.00 },
    { id: 4104, name: 'França Home 96/97', imageFile: 'retro_104', folder: 'retro', price: 180.00 },
    { id: 4105, name: 'Brasil Home Ronaldo 1998', imageFile: 'retro_105', folder: 'retro', price: 200.00 },
    { id: 4106, name: 'Flamengo Home 1994', imageFile: 'retro_106', folder: 'retro', price: 180.00 },
    { id: 4107, name: 'Brasil Home Copa 2002', imageFile: 'retro_107', folder: 'retro', price: 180.00 },
    { id: 4108, name: 'Real Madrid Away 2006', imageFile: 'retro_108', folder: 'retro', price: 180.00 },
    { id: 4109, name: 'Flamengo Home 92/93', imageFile: 'retro_109', folder: 'retro', price: 180.00 },
    { id: 4110, name: 'Lazio Third 98/99', imageFile: 'retro_110', folder: 'retro', price: 180.00 },
    { id: 4111, name: 'Arsenal Home Henry 2006', imageFile: 'retro_111', folder: 'retro', price: 200.00 },
    { id: 4112, name: 'Corinthians Third 2011', imageFile: 'retro_112', folder: 'retro', price: 180.00 },
  ],5: [
    { id: 5001, name: 'Flamengo Away 25/26', imageFile: 'jogador_01', folder: 'modeloJogador', price: 170.00 },
    { id: 5002, name: 'FC Barcelona Home 25/26', imageFile: 'jogador_02', folder: 'modeloJogador', price: 170.00 },
    { id: 5003, name: 'Palmeiras Home 25/26', imageFile: 'jogador_03', folder: 'modeloJogador', price: 170.00 },
    { id: 5004, name: 'Portugal Home 24/25', imageFile: 'jogador_04', folder: 'modeloJogador', price: 150.00 },
    { id: 5005, name: 'Bayern de Munique Away 25/26', imageFile: 'jogador_05', folder: 'modeloJogador', price: 170.00 },
    { id: 5006, name: 'Palmeiras Home 23/24', imageFile: 'jogador_06', folder: 'modeloJogador', price: 150.00 },
    { id: 5007, name: 'Colombia Home Copa 2026', imageFile: 'jogador_07', folder: 'modeloJogador', price: 150.00 },
    { id: 5008, name: 'Inglaterra Home Copa 2026', imageFile: 'jogador_08', folder: 'modeloJogador', price: 150.00 },
    { id: 5009, name: 'Corinthians Third 24/25', imageFile: 'jogador_09', folder: 'modeloJogador', price: 150.00 },
    { id: 5010, name: 'Bélgica Home Copa 2026', imageFile: 'jogador_10', folder: 'modeloJogador', price: 150.00 },
    { id: 5011, name: 'Bayern de Munique Away 24/25', imageFile: 'jogador_11', folder: 'modeloJogador', price: 150.00 },
    { id: 5012, name: 'São Paulo Pré-Jogo I Superbet 24/25', imageFile: 'jogador_12', folder: 'modeloJogador', price: 150.00 },
    { id: 5013, name: 'Palmeiras Third 24/25', imageFile: 'jogador_13', folder: 'modeloJogador', price: 150.00 },
    { id: 5014, name: 'Santos Treino 2025', imageFile: 'jogador_14', folder: 'modeloJogador', price: 150.00 },
    { id: 5015, name: 'Inter Miami Home 25/26', imageFile: 'jogador_15', folder: 'modeloJogador', price: 170.00 },
    { id: 5016, name: 'Tottenham Pré-jogo 25/26', imageFile: 'jogador_16', folder: 'modeloJogador', price: 170.00 },
    { id: 5017, name: 'Chelsea Away 25/26', imageFile: 'jogador_17', folder: 'modeloJogador', price: 170.00 },
    { id: 5018, name: 'Boca Juniors Away 25/26', imageFile: 'jogador_18', folder: 'modeloJogador', price: 170.00 },
    { id: 5019, name: 'Barcelona Third 22/23', imageFile: 'jogador_19', folder: 'modeloJogador', price: 150.00 },
    { id: 5020, name: 'Bayern de Munique 125 anos 25/26', imageFile: 'jogador_20', folder: 'modeloJogador', price: 170.00 },
    { id: 5021, name: 'Brasil Away 25/26', imageFile: 'jogador_21', folder: 'modeloJogador', price: 170.00 },
    { id: 5022, name: 'FC Barcelona 125 Anos', imageFile: 'jogador_22', folder: 'modeloJogador', price: 150.00 },
    { id: 5023, name: 'Brasil Home Copa 2022', imageFile: 'jogador_23', folder: 'modeloJogador', price: 150.00 },
    { id: 5024, name: 'Flamengo Third 25/26', imageFile: 'jogador_24', folder: 'modeloJogador', price: 170.00 },
    { id: 5025, name: 'Brasil Away Copa 2022', imageFile: 'jogador_25', folder: 'modeloJogador', price: 150.00 },
    { id: 5026, name: 'Real Madrid Away 25/26', imageFile: 'jogador_26', folder: 'modeloJogador', price: 170.00 },
    { id: 5027, name: 'Argentina Home Copa 2026', imageFile: 'jogador_27', folder: 'modeloJogador', price: 150.00 },
    { id: 5028, name: 'Corinthians Away 25/26', imageFile: 'jogador_28', folder: 'modeloJogador', price: 170.00 },
    { id: 5029, name: 'Al Hilal Home 25/26', imageFile: 'jogador_29', folder: 'modeloJogador', price: 170.00 },
    { id: 5030, name: 'Palmeiras Away 23/24', imageFile: 'jogador_30', folder: 'modeloJogador', price: 150.00 },
    { id: 5031, name: 'Santos Third 25/26', imageFile: 'jogador_31', folder: 'modeloJogador', price: 170.00 },
    { id: 5032, name: 'Holanda Goleiro II 25/26', imageFile: 'jogador_32', folder: 'modeloJogador', price: 170.00 },
    { id: 5033, name: 'Alemanha 125 Anos 25/26', imageFile: 'jogador_33', folder: 'modeloJogador', price: 170.00 },
    { id: 5034, name: 'Estados Unidos Away 24/25', imageFile: 'jogador_34', folder: 'modeloJogador', price: 150.00 },
    { id: 5035, name: 'São Paulo Away 25/26', imageFile: 'jogador_35', folder: 'modeloJogador', price: 170.00 },
    { id: 5036, name: 'Arsenal Third 24/25', imageFile: 'jogador_36', folder: 'modeloJogador', price: 150.00 },
    { id: 5037, name: 'Arsenal Home 24/25', imageFile: 'jogador_37', folder: 'modeloJogador', price: 150.00 },
    { id: 5038, name: 'Tottenham Home 25/26', imageFile: 'jogador_38', folder: 'modeloJogador', price: 170.00 },
    { id: 5039, name: 'São Paulo Home 25/26', imageFile: 'jogador_39', folder: 'modeloJogador', price: 170.00 },
    { id: 5040, name: 'Barcelona Home x Travis Scott 24/25', imageFile: 'jogador_40', folder: 'modeloJogador', price: 150.00 },
    { id: 5041, name: 'Paris Saint-German Home 25/26', imageFile: 'jogador_41', folder: 'modeloJogador', price: 170.00 },
    { id: 5042, name: 'Alemanha Home Copa 2026', imageFile: 'jogador_42', folder: 'modeloJogador', price: 150.00 },
    { id: 5043, name: 'Liverpool Home 25/26', imageFile: 'jogador_43', folder: 'modeloJogador', price: 170.00 },
    { id: 5044, name: 'Real Madrid Y-3', imageFile: 'jogador_44', folder: 'modeloJogador', price: 150.00 },
    { id: 5045, name: 'Paris Saint-German Third 25/26', imageFile: 'jogador_45', folder: 'modeloJogador', price: 170.00 },
    { id: 5046, name: 'Paris Saint-German x Jordan IV Preta 24/25', imageFile: 'jogador_46', folder: 'modeloJogador', price: 150.00 },
    { id: 5047, name: 'Boca Juniors Home 25/26', imageFile: 'jogador_47', folder: 'modeloJogador', price: 170.00 },
    { id: 5048, name: 'Palmeiras Away II 25/26', imageFile: 'jogador_48', folder: 'modeloJogador', price: 170.00 },
    { id: 5049, name: 'Milan Home Edição Especial 23/24', imageFile: 'jogador_49', folder: 'modeloJogador', price: 150.00 },
    { id: 5050, name: 'Bahia Home 25/26', imageFile: 'jogador_50', folder: 'modeloJogador', price: 170.00 },
    { id: 5051, name: 'Corinthians Home 25/26', imageFile: 'jogador_51', folder: 'modeloJogador', price: 170.00 },
    { id: 5052, name: 'Palmeiras x Kidsuper 25/26', imageFile: 'jogador_52', folder: 'modeloJogador', price: 170.00 },
    { id: 5053, name: 'Palmeiras Edição Especial 2025', imageFile: 'jogador_53', folder: 'modeloJogador', price: 150.00 },
    { id: 5054, name: 'São Paulo Third 25/26', imageFile: 'jogador_54', folder: 'modeloJogador', price: 170.00 },
    { id: 5055, name: 'Flamengo Third 24/25', imageFile: 'jogador_55', folder: 'modeloJogador', price: 150.00 },
    { id: 5056, name: 'Milan Home 25/26', imageFile: 'jogador_56', folder: 'modeloJogador', price: 170.00 },
    { id: 5057, name: 'Manchester City Home 25/26', imageFile: 'jogador_57', folder: 'modeloJogador', price: 170.00 },
    { id: 5058, name: 'Corinthians Away 24/25', imageFile: 'jogador_58', folder: 'modeloJogador', price: 150.00 },
    { id: 5059, name: 'Manchester United Alternative 25/26', imageFile: 'jogador_59', folder: 'modeloJogador', price: 170.00 },
    { id: 5060, name: 'Portugal Home 25/26', imageFile: 'jogador_60', folder: 'modeloJogador', price: 170.00 },
    { id: 5061, name: 'Chelsea Third 25/26', imageFile: 'jogador_61', folder: 'modeloJogador', price: 170.00 },
    { id: 5062, name: 'Itália Home Copa 2026', imageFile: 'jogador_62', folder: 'modeloJogador', price: 150.00 },
    { id: 5063, name: 'França Home 25/26', imageFile: 'jogador_63', folder: 'modeloJogador', price: 170.00 },
    { id: 5064, name: 'Arsenal Home 25/26', imageFile: 'jogador_64', folder: 'modeloJogador', price: 170.00 },
    { id: 5065, name: 'Atletico de Madrid Home 25/26', imageFile: 'jogador_65', folder: 'modeloJogador', price: 170.00 },
    { id: 5066, name: 'FC Barcelona Third 25/26', imageFile: 'jogador_66', folder: 'modeloJogador', price: 170.00 },
    { id: 5067, name: 'Santos Home 25/26', imageFile: 'jogador_67', folder: 'modeloJogador', price: 170.00 },
    { id: 5068, name: 'Brasil Home Copa 1998', imageFile: 'jogador_68', folder: 'modeloJogador', price: 150.00 },
    { id: 5069, name: 'Palmeiras Third 25/26', imageFile: 'jogador_69', folder: 'modeloJogador', price: 170.00 },
    { id: 5070, name: 'Itália Away 25/26', imageFile: 'jogador_70', folder: 'modeloJogador', price: 170.00 },
    { id: 5071, name: 'México Home Copa 2026', imageFile: 'jogador_71', folder: 'modeloJogador', price: 150.00 },
    { id: 5072, name: 'Inter de Milão Away 25/26', imageFile: 'jogador_72', folder: 'modeloJogador', price: 170.00 },
    { id: 5073, name: 'Portugal Home Cristiano Ronaldo 2026', imageFile: 'jogador_73', folder: 'modeloJogador', price: 170.00 },
    { id: 5074, name: 'Santos Away 25/26', imageFile: 'jogador_74', folder: 'modeloJogador', price: 170.00 },
    { id: 5075, name: 'Manchester City Away 25/26', imageFile: 'jogador_75', folder: 'modeloJogador', price: 170.00 },
    { id: 5076, name: 'Brasil Away Copa 2026', imageFile: 'jogador_76', folder: 'modeloJogador', price: 150.00 },
    { id: 5077, name: 'Brasil Home Copa 2026', imageFile: 'jogador_77', folder: 'modeloJogador', price: 150.00 },
    { id: 5078, name: 'Portugal Home Copa 2026', imageFile: 'jogador_78', folder: 'modeloJogador', price: 150.00 },
    { id: 5079, name: 'Borussia Dortmund Home 25/26', imageFile: 'jogador_79', folder: 'modeloJogador', price: 170.00 },
    { id: 5080, name: 'Bayern de Munique Home 25/26', imageFile: 'jogador_80', folder: 'modeloJogador', price: 170.00 },
    { id: 5081, name: 'FC Barcelona Away 25/26', imageFile: 'jogador_81', folder: 'modeloJogador', price: 170.00 },
    { id: 5082, name: 'Japão Home Copa 2026', imageFile: 'jogador_82', folder: 'modeloJogador', price: 150.00 },
    { id: 5083, name: 'Santos Away 7K 25/26', imageFile: 'jogador_83', folder: 'modeloJogador', price: 170.00 },
    { id: 5084, name: 'México Gold Cup 2025', imageFile: 'jogador_84', folder: 'modeloJogador', price: 150.00 },
    { id: 5085, name: 'Portugal Pantera Negra 25/26', imageFile: 'jogador_85', folder: 'modeloJogador', price: 170.00 },
    { id: 5086, name: 'Real Madrid Home 25/26', imageFile: 'jogador_86', folder: 'modeloJogador', price: 170.00 },
    { id: 5087, name: 'Tottenham Home AIA 25/26', imageFile: 'jogador_87', folder: 'modeloJogador', price: 170.00 },
    { id: 5088, name: 'FC Barcelona Cactus Jack', imageFile: 'jogador_88', folder: 'modeloJogador', price: 150.00 },
    { id: 5089, name: 'Real Madrid Adidas Originals 24/25', imageFile: 'jogador_89', folder: 'modeloJogador', price: 150.00 },
    { id: 5090, name: 'Juventus Third Edição Especial 25/26', imageFile: 'jogador_90', folder: 'modeloJogador', price: 170.00 },
    { id: 5091, name: 'Arsenal Third 25/26', imageFile: 'jogador_91', folder: 'modeloJogador', price: 170.00 },
  ],  7: [
    { id: 7001, name: 'Vasco Home 25/26', imageFile: 'feminino_1', folder: 'feminino', price: 170.00 },
    { id: 7002, name: 'Palmeiras Away 24/25', imageFile: 'feminino_2', folder: 'feminino', price: 150.00 },
    { id: 7003, name: 'Palmeiras Away 25/26', imageFile: 'feminino_3', folder: 'feminino', price: 170.00 },
    { id: 7004, name: 'Palmeiras Third 24/25', imageFile: 'feminino_4', folder: 'feminino', price: 150.00 },
    { id: 7005, name: 'Atletico Mineiro Home 25/26', imageFile: 'feminino_5', folder: 'feminino', price: 170.00 },
    { id: 7006, name: 'Palmeiras Away 23/24', imageFile: 'feminino_6', folder: 'feminino', price: 150.00 },
    { id: 7007, name: 'Brasil Away Copa 2022', imageFile: 'feminino_7', folder: 'feminino', price: 150.00 },
    { id: 7008, name: 'São Paulo Home 25/26', imageFile: 'feminino_8', folder: 'feminino', price: 170.00 },
    { id: 7009, name: 'Barcelona Home 25/26', imageFile: 'feminino_9', folder: 'feminino', price: 170.00 },
    { id: 7010, name: 'Palmeiras x Kidsuper 25/26', imageFile: 'feminino_10', folder: 'feminino', price: 170.00 },
    { id: 7011, name: 'Corinthians Away 25/26', imageFile: 'feminino_11', folder: 'feminino', price: 170.00 },
    { id: 7012, name: 'Botafogo Home 25/26', imageFile: 'feminino_12', folder: 'feminino', price: 170.00 },
    { id: 7013, name: 'Cruzeiro Home 25/26', imageFile: 'feminino_13', folder: 'feminino', price: 170.00 },
    { id: 7014, name: 'Flamengo Away 25/26', imageFile: 'feminino_14', folder: 'feminino', price: 170.00 },
    { id: 7015, name: 'Vasco Away 25/26', imageFile: 'feminino_15', folder: 'feminino', price: 170.00 },
    { id: 7016, name: 'Flamengo Third 25/26', imageFile: 'feminino_16', folder: 'feminino', price: 170.00 },
    { id: 7017, name: 'Palmeiras Third 25/26', imageFile: 'feminino_17', folder: 'feminino', price: 170.00 },
    { id: 7018, name: 'São Paulo Away 25/26', imageFile: 'feminino_18', folder: 'feminino', price: 170.00 },
    { id: 7019, name: 'Santos Home 25/26', imageFile: 'feminino_19', folder: 'feminino', price: 170.00 },
  ],
8: [
    { id: 8001, name: 'Inter Miami L. Messi Home 25/26', imageFile: 'infantil_01', folder: 'infantil', price: 190.00 },
    { id: 8002, name: 'Inter Miami L. Messi Home 24/25', imageFile: 'infantil_02', folder: 'infantil', price: 170.00 },
    { id: 8003, name: 'Manchester United Home 24/25', imageFile: 'infantil_03', folder: 'infantil', price: 150.00 },
    { id: 8004, name: 'Corinthians Home 25/26', imageFile: 'infantil_04', folder: 'infantil', price: 170.00 },
    { id: 8005, name: 'Bermuda Nike Swoosh Azul', imageFile: 'infantil_05', folder: 'infantil', price: 150.00 },
    { id: 8006, name: 'Bermuda Nike Swoosh Verde', imageFile: 'infantil_06', folder: 'infantil', price: 150.00 },
    { id: 8007, name: 'São Paulo Away 25/26', imageFile: 'infantil_07', folder: 'infantil', price: 170.00 },
    { id: 8008, name: 'Argentina Home Copa 2026', imageFile: 'infantil_08', folder: 'infantil', price: 150.00 },
    { id: 8009, name: 'Inter Miami Treino 23/24', imageFile: 'infantil_09', folder: 'infantil', price: 150.00 },
    { id: 8010, name: 'São Paulo Away 23/24', imageFile: 'infantil_10', folder: 'infantil', price: 150.00 },
    { id: 8011, name: 'Liverpool Away 25/26', imageFile: 'infantil_11', folder: 'infantil', price: 170.00 },
    { id: 8012, name: 'Arsenal Third 25/26', imageFile: 'infantil_12', folder: 'infantil', price: 170.00 },
    { id: 8013, name: 'Bayern de Munique Away 25/26', imageFile: 'infantil_13', folder: 'infantil', price: 170.00 },
    { id: 8014, name: 'Al Hilal Neymar Jr. Home 24/25', imageFile: 'infantil_14', folder: 'infantil', price: 170.00 },
    { id: 8015, name: 'São Paulo Home 23/24 Regata', imageFile: 'infantil_15', folder: 'infantil', price: 150.00 },
    { id: 8016, name: 'Real Madrid Home 24/25', imageFile: 'infantil_16', folder: 'infantil', price: 150.00 },
    { id: 8017, name: 'Real Madrid Bellingham Home 24/25', imageFile: 'infantil_17', folder: 'infantil', price: 170.00 },
    { id: 8018, name: 'Santos Home 25/26', imageFile: 'infantil_18', folder: 'infantil', price: 170.00 },
    { id: 8019, name: 'Inter Miami Third 25/26', imageFile: 'infantil_19', folder: 'infantil', price: 170.00 },
    { id: 8020, name: 'São Paulo Home 25/26', imageFile: 'infantil_20', folder: 'infantil', price: 170.00 },
    { id: 8021, name: 'Santos Neymar Jr. Away 25/26', imageFile: 'infantil_21', folder: 'infantil', price: 190.00 },
    { id: 8022, name: 'Boca Jrs. Home 25/26', imageFile: 'infantil_22', folder: 'infantil', price: 170.00 },
    { id: 8023, name: 'Inter Miami L. Messi Home 23/24', imageFile: 'infantil_23', folder: 'infantil', price: 170.00 },
    { id: 8024, name: 'Al Nassr Third 25/26', imageFile: 'infantil_24', folder: 'infantil', price: 170.00 },
    { id: 8025, name: 'Milan Home 24/25', imageFile: 'infantil_25', folder: 'infantil', price: 150.00 },
    { id: 8026, name: 'Liverpool L. James 23/24', imageFile: 'infantil_26', folder: 'infantil', price: 170.00 },
    { id: 8027, name: 'Manchester United Third 24/25', imageFile: 'infantil_27', folder: 'infantil', price: 150.00 },
    { id: 8028, name: 'Palmeiras Edição Especial 24/25', imageFile: 'infantil_28', folder: 'infantil', price: 150.00 },
    { id: 8029, name: 'França Home 24/25', imageFile: 'infantil_29', folder: 'infantil', price: 150.00 },
    { id: 8030, name: 'Barcelona Spotify 24/25', imageFile: 'infantil_30', folder: 'infantil', price: 150.00 },
    { id: 8031, name: 'Manchester City Away 25/26', imageFile: 'infantil_31', folder: 'infantil', price: 170.00 },
    { id: 8032, name: 'Palmeiras Third 25/26', imageFile: 'infantil_32', folder: 'infantil', price: 170.00 },
    { id: 8033, name: 'Brasil Edição Especial 24/25', imageFile: 'infantil_33', folder: 'infantil', price: 150.00 },
    { id: 8034, name: 'Chelsea Home 25/26', imageFile: 'infantil_34', folder: 'infantil', price: 170.00 },
    { id: 8035, name: 'Portugal Eusebio 2025', imageFile: 'infantil_35', folder: 'infantil', price: 170.00 },
    { id: 8036, name: 'Blusa Corinthians', imageFile: 'infantil_36', folder: 'infantil', price: 150.00 },
    { id: 8037, name: 'Blusa Paris Saint-German Branca', imageFile: 'infantil_37', folder: 'infantil', price: 150.00 },
    { id: 8038, name: 'Palmeiras Away 25/26', imageFile: 'infantil_38', folder: 'infantil', price: 170.00 },
    { id: 8039, name: 'Palmeiras Home 25/26', imageFile: 'infantil_39', folder: 'infantil', price: 170.00 },
    { id: 8040, name: 'Juventus Home 25/26', imageFile: 'infantil_40', folder: 'infantil', price: 170.00 },
    { id: 8041, name: 'Gremio Home 24/25', imageFile: 'infantil_41', folder: 'infantil', price: 150.00 },
    { id: 8042, name: 'Portugal Cristiano Ronaldo Home 25/26', imageFile: 'infantil_42', folder: 'infantil', price: 190.00 },
    { id: 8043, name: 'Brasil Home Copa 2026', imageFile: 'infantil_43', folder: 'infantil', price: 150.00 },
    { id: 8044, name: 'Flamengo Away 25/26', imageFile: 'infantil_44', folder: 'infantil', price: 170.00 },
    { id: 8045, name: 'Inter Miami Home 25/26', imageFile: 'infantil_45', folder: 'infantil', price: 170.00 },
    { id: 8046, name: 'Chelsea Third 25/26', imageFile: 'infantil_47', folder: 'infantil', price: 170.00 },
    { id: 8047, name: 'Blusa Paris Saint-German Preta', imageFile: 'infantil_48', folder: 'infantil', price: 150.00 },
    { id: 8048, name: 'Espanha Home Copa 2026', imageFile: 'infantil_49', folder: 'infantil', price: 150.00 },
    { id: 8049, name: 'Inglaterra Away 25/26', imageFile: 'infantil_50', folder: 'infantil', price: 170.00 },
    { id: 8050, name: 'Napoli Home 25/26', imageFile: 'infantil_51', folder: 'infantil', price: 170.00 },
    { id: 8051, name: 'Cruzeiro Treino I 25/26', imageFile: 'infantil_52', folder: 'infantil', price: 170.00 },
    { id: 8052, name: 'Inter de Milão Home 25/26', imageFile: 'infantil_53', folder: 'infantil', price: 170.00 },
    { id: 8053, name: 'Manchester City Home 25/26', imageFile: 'infantil_54', folder: 'infantil', price: 170.00 },
    { id: 8054, name: 'Portugal Cristiano Ronaldo Away 25/26', imageFile: 'infantil_55', folder: 'infantil', price: 190.00 },
    { id: 8055, name: 'Cruzeiro Treino II 25/26', imageFile: 'infantil_56', folder: 'infantil', price: 170.00 },
    { id: 8056, name: 'Botafogo Home 25/26', imageFile: 'infantil_57', folder: 'infantil', price: 170.00 },
    { id: 8057, name: 'Borussia Dortmund Home 25/26', imageFile: 'infantil_58', folder: 'infantil', price: 170.00 },
    { id: 8058, name: 'Flamengo Third 25/26', imageFile: 'infantil_59', folder: 'infantil', price: 170.00 },
    { id: 8059, name: 'Real Madrid Home 25/26', imageFile: 'infantil_60', folder: 'infantil', price: 170.00 },
    { id: 8060, name: 'Japão Home 25/26', imageFile: 'infantil_61', folder: 'infantil', price: 170.00 },
    { id: 8061, name: 'Itália Home Copa 2026', imageFile: 'infantil_62', folder: 'infantil', price: 150.00 },
    { id: 8062, name: 'Inter de Milão Away 25/26', imageFile: 'infantil_64', folder: 'infantil', price: 170.00 },
    { id: 8063, name: 'Tottenham Away 25/26', imageFile: 'infantil_65', folder: 'infantil', price: 170.00 },
    { id: 8064, name: 'Fluminense Home 25/26', imageFile: 'infantil_66', folder: 'infantil', price: 170.00 },
    { id: 8065, name: 'México Third 25/26', imageFile: 'infantil_67', folder: 'infantil', price: 170.00 },
    { id: 8066, name: 'Celtic Home 25/26', imageFile: 'infantil_68', folder: 'infantil', price: 170.00 },
    { id: 8067, name: 'Alemanha Away Copa 2026', imageFile: 'infantil_69', folder: 'infantil', price: 150.00 },
    { id: 8068, name: 'Ajax Away 25/26', imageFile: 'infantil_70', folder: 'infantil', price: 170.00 },
    { id: 8069, name: 'Brasil Away Copa 2022', imageFile: 'infantil_71', folder: 'infantil', price: 150.00 },
    { id: 8070, name: 'Corinthians Third 25/26', imageFile: 'infantil_72', folder: 'infantil', price: 170.00 },
    { id: 8071, name: 'Atletico Mineiro Home 25/26', imageFile: 'infantil_73', folder: 'infantil', price: 170.00 },
    { id: 8072, name: 'Barcelona Away 25/26', imageFile: 'infantil_74', folder: 'infantil', price: 170.00 },
    { id: 8073, name: 'Atletico Mineiro Home 23/24', imageFile: 'infantil_75', folder: 'infantil', price: 150.00 },
    { id: 8074, name: 'São Paulo Home 24/25', imageFile: 'infantil_76', folder: 'infantil', price: 150.00 },
    { id: 8075, name: 'Borussia Dortmund Home 24/25', imageFile: 'infantil_77', folder: 'infantil', price: 150.00 },
    { id: 8076, name: 'Portugal Home Copa 2026', imageFile: 'infantil_78', folder: 'infantil', price: 150.00 },
    { id: 8077, name: 'Colombia 100 Anos 24/25', imageFile: 'infantil_79', folder: 'infantil', price: 150.00 },
    { id: 8078, name: 'Bayern de Munique Home 25/26', imageFile: 'infantil_80', folder: 'infantil', price: 170.00 },
    { id: 8079, name: 'Portugal Home 25/26', imageFile: 'infantil_81', folder: 'infantil', price: 170.00 },
    { id: 8080, name: 'Corinthians Away 25/26', imageFile: 'infantil_82', folder: 'infantil', price: 170.00 },
    { id: 8081, name: 'Flamengo Novembro Negro 24/25', imageFile: 'infantil_83', folder: 'infantil', price: 150.00 },
    { id: 8082, name: 'Manchester United Home 25/26', imageFile: 'infantil_86', folder: 'infantil', price: 170.00 },
    { id: 8083, name: 'Portugal Away Copa 2026', imageFile: 'infantil_87', folder: 'infantil', price: 150.00 },
    { id: 8084, name: 'México Away Copa 2026', imageFile: 'infantil_88', folder: 'infantil', price: 150.00 },
    { id: 8085, name: 'Corinthians Away 18/19', imageFile: 'infantil_89', folder: 'infantil', price: 150.00 },
    { id: 8086, name: 'Alemanha Home Copa 2026', imageFile: 'infantil_90', folder: 'infantil', price: 150.00 },
    { id: 8087, name: 'Corinthians Home 18/19', imageFile: 'infantil_91', folder: 'infantil', price: 150.00 },
    { id: 8088, name: 'Fluminense Home 24/25', imageFile: 'infantil_92', folder: 'infantil', price: 150.00 },
    { id: 8089, name: 'Vasco Away 25/26', imageFile: 'infantil_93', folder: 'infantil', price: 170.00 },
    { id: 8090, name: 'Benfica Home 25/26', imageFile: 'infantil_94', folder: 'infantil', price: 170.00 },
    { id: 8091, name: 'Santos Neymar Jr. Home 24/25', imageFile: 'infantil_95', folder: 'infantil', price: 170.00 },
    { id: 8092, name: 'Milan IV 24/25', imageFile: 'infantil_96', folder: 'infantil', price: 150.00 },
    { id: 8093, name: 'Flamengo Home 25/26', imageFile: 'infantil_97', folder: 'infantil', price: 170.00 },
    { id: 8094, name: 'Itália Home 24/25', imageFile: 'infantil_98', folder: 'infantil', price: 150.00 },
    { id: 8095, name: 'Barcelona Third 24/25', imageFile: 'infantil_99', folder: 'infantil', price: 150.00 },
    { id: 8096, name: 'Liverpool Home 25/26', imageFile: 'infantil_100', folder: 'infantil', price: 170.00 },
    { id: 8097, name: 'Santos Home 24/25', imageFile: 'infantil_101', folder: 'infantil', price: 150.00 },
    { id: 8098, name: 'Barcelona Third 25/26', imageFile: 'infantil_102', folder: 'infantil', price: 170.00 },
    { id: 8099, name: 'Palmeiras Avanti 25/26', imageFile: 'infantil_103', folder: 'infantil', price: 170.00 },
    { id: 8100, name: 'Chelsea Away 25/26', imageFile: 'infantil_104', folder: 'infantil', price: 170.00 },
    { id: 8101, name: 'Barcelona Home 25/26', imageFile: 'infantil_105', folder: 'infantil', price: 170.00 },
    { id: 8102, name: 'Real Madrid Third 25/26', imageFile: 'infantil_106', folder: 'infantil', price: 170.00 },
    { id: 8103, name: 'Paris Saint-German IV 25/26', imageFile: 'infantil_107', folder: 'infantil', price: 170.00 },
    { id: 8104, name: 'Tottenham Home 25/26', imageFile: 'infantil_109', folder: 'infantil', price: 170.00 },
    { id: 8105, name: 'Al Nassr Cristiano Ronaldo Away 24/25', imageFile: 'infantil_110', folder: 'infantil', price: 170.00 },
    { id: 8106, name: 'Al Nassr Away 25/26', imageFile: 'infantil_111', folder: 'infantil', price: 170.00 },
    { id: 8107, name: 'México Home Copa 2026', imageFile: 'infantil_112', folder: 'infantil', price: 150.00 },
    { id: 8108, name: 'Botafogo Third 25/26', imageFile: 'infantil_113', folder: 'infantil', price: 170.00 },
    { id: 8109, name: 'Portugal Away 25/26', imageFile: 'infantil_114', folder: 'infantil', price: 170.00 },
    { id: 8110, name: 'Al Hilal Home 24/25', imageFile: 'infantil_115', folder: 'infantil', price: 150.00 },
    { id: 8111, name: 'Internacional Home 25/26', imageFile: 'infantil_116', folder: 'infantil', price: 170.00 },
    { id: 8112, name: 'Inter Miami Away 25/26', imageFile: 'infantil_117', folder: 'infantil', price: 170.00 },
    { id: 8113, name: 'Paris Saint-German Home 25/26', imageFile: 'infantil_118', folder: 'infantil', price: 170.00 },
    { id: 8114, name: 'Inter Miami Third 24/25', imageFile: 'infantil_119', folder: 'infantil', price: 150.00 },
    { id: 8115, name: 'Palmeiras Home 23/24', imageFile: 'infantil_120', folder: 'infantil', price: 150.00 },
    { id: 8116, name: 'Tottenham Home 24/25', imageFile: 'infantil_121', folder: 'infantil', price: 150.00 },
    { id: 8117, name: 'Alemanha 125 Anos 2025', imageFile: 'infantil_122', folder: 'infantil', price: 150.00 },
    { id: 8118, name: 'Palmeiras Away 24/25', imageFile: 'infantil_123', folder: 'infantil', price: 150.00 },
    { id: 8119, name: 'Inglaterra Home 25/26', imageFile: 'infantil_124', folder: 'infantil', price: 170.00 },
  ],  9: [
    { id: 9001, name: 'PSG x Jordan', imageFile: 'Calcoes_1', folder: 'calcoes', price: 120.00 },
    { id: 9002, name: 'Palmeiras Puma', imageFile: 'Calcoes_2', folder: 'calcoes', price: 120.00 },
    { id: 9003, name: 'Arsenal Adidas', imageFile: 'Calcoes_3', folder: 'calcoes', price: 120.00 },
    { id: 9004, name: 'França Nike', imageFile: 'Calcoes_4', folder: 'calcoes', price: 120.00 },
    { id: 9005, name: 'Argentina Adidas Originals', imageFile: 'Calcoes_5', folder: 'calcoes', price: 120.00 },
    { id: 9006, name: 'Inter de Milão Nike', imageFile: 'Calcoes_6', folder: 'calcoes', price: 120.00 },
    { id: 9007, name: 'Barcelona Nike', imageFile: 'Calcoes_7', folder: 'calcoes', price: 120.00 },
    { id: 9008, name: 'Itália Adidas', imageFile: 'Calcoes_8', folder: 'calcoes', price: 120.00 },
    { id: 9009, name: 'Portugal Puma', imageFile: 'Calcoes_9', folder: 'calcoes', price: 120.00 },
    { id: 9010, name: 'Flamengo Adidas', imageFile: 'Calcoes_10', folder: 'calcoes', price: 120.00 },
    { id: 9011, name: 'Espanha Adidas', imageFile: 'Calcoes_11', folder: 'calcoes', price: 120.00 },
    { id: 9012, name: 'Real Madrid Adidas Azul', imageFile: 'Calcoes_12', folder: 'calcoes', price: 120.00 },
    { id: 9013, name: 'Real Madrid Adidas', imageFile: 'Calcoes_13', folder: 'calcoes', price: 120.00 },
    { id: 9014, name: 'Barcelona Azul', imageFile: 'Calcoes_14', folder: 'calcoes', price: 120.00 },
    { id: 9015, name: 'PSG x Jordan Azul', imageFile: 'Calcoes_15', folder: 'calcoes', price: 120.00 },
    { id: 9016, name: 'Barcelona Nike Azul', imageFile: 'Calcoes_16', folder: 'calcoes', price: 120.00 },
    { id: 9017, name: 'Arsenal Adidas Vinho', imageFile: 'Calcoes_17', folder: 'calcoes', price: 120.00 },
    { id: 9018, name: 'Cruzeiro Adidas Verde', imageFile: 'Calcoes_18', folder: 'calcoes', price: 120.00 },
    { id: 9019, name: 'Flamengo Adidas Azul', imageFile: 'Calcoes_19', folder: 'calcoes', price: 120.00 },
  ],
  10: [
    { id: 10001, name: 'Paris Saint-German x Jordan Treino I', imageFile: 'Conjunto_1', folder: 'conjuntos', price: 200.00 },
    { id: 10002, name: 'Paris Saint-German x Jordan Treino II', imageFile: 'Conjunto_2', folder: 'conjuntos', price: 200.00 },
    { id: 10003, name: 'Alemanha Treino I', imageFile: 'Conjunto_3', folder: 'conjuntos', price: 200.00 },
    { id: 10004, name: 'Arsenal Treino I', imageFile: 'Conjunto_4', folder: 'conjuntos', price: 200.00 },
    { id: 10005, name: 'Real Madrid Treino I', imageFile: 'Conjunto_5', folder: 'conjuntos', price: 200.00 },
    { id: 10006, name: 'Barcelona Treino I', imageFile: 'Conjunto_6', folder: 'conjuntos', price: 200.00 },
    { id: 10007, name: 'Arsenal Treino II', imageFile: 'Conjunto_7', folder: 'conjuntos', price: 200.00 },
    { id: 10008, name: 'Palmeiras Treino I', imageFile: 'Conjunto_8', folder: 'conjuntos', price: 200.00 },
    { id: 10009, name: 'Argentina Treino I', imageFile: 'Conjunto_9', folder: 'conjuntos', price: 200.00 },
    { id: 10010, name: 'Corinthians Treino I', imageFile: 'Conjunto_10', folder: 'conjuntos', price: 200.00 },
    { id: 10011, name: 'Real Madrid Treino II', imageFile: 'Conjunto_11', folder: 'conjuntos', price: 200.00 },
    { id: 10012, name: 'Inter de Milão Treino I', imageFile: 'Conjunto_12', folder: 'conjuntos', price: 200.00 },
    { id: 10013, name: 'Real Madrid Treino III', imageFile: 'Conjunto_13', folder: 'conjuntos', price: 200.00 },
    { id: 10014, name: 'Arsenal Treino III', imageFile: 'Conjunto_14', folder: 'conjuntos', price: 200.00 },
    { id: 10015, name: 'Tottenham Treino I', imageFile: 'Conjunto_15', folder: 'conjuntos', price: 200.00 },
    { id: 10016, name: 'Paris Saint-German Treino III', imageFile: 'Conjunto_16', folder: 'conjuntos', price: 200.00 },
    { id: 10017, name: 'Itália Treino I', imageFile: 'Conjunto_17', folder: 'conjuntos', price: 200.00 },
    { id: 10018, name: 'Napoli Treino I', imageFile: 'Conjunto_18', folder: 'conjuntos', price: 200.00 },
    { id: 10019, name: 'Real Madrid Treino IV', imageFile: 'Conjunto_19', folder: 'conjuntos', price: 200.00 },
    { id: 10020, name: 'Manchester United Treino I', imageFile: 'Conjunto_20', folder: 'conjuntos', price: 200.00 },
    { id: 10021, name: 'Al Nassr Home 23/24', imageFile: 'Conjunto_21', folder: 'conjuntos', price: 200.00 },
    { id: 10022, name: 'Palmeiras Treino II', imageFile: 'Conjunto_22', folder: 'conjuntos', price: 200.00 },
    { id: 10023, name: 'Flamengo Treino I', imageFile: 'Conjunto_23', folder: 'conjuntos', price: 200.00 },
  ],
};

// Header Component - REMOVIDO
const Header = ({ onBack, showBack = false, cartCount = 0, onCartClick, onHomeClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header style={{
        position: 'fixed',
        top: isVisible ? '0' : '-75px',
        left: 0,
        right: 0,
        backgroundColor: '#0d0d0d',
        padding: '10px 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 999,
        minHeight: '45px',
        transition: 'top 0.3s ease-in-out',
      }}>
      {/* Borda com degradê */}
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        left: 0,
        right: 0,
        height: '30px',
        background: 'linear-gradient(to bottom, rgba(13, 13, 13, 1), rgba(13, 13, 13, 0.5), transparent)',
        pointerEvents: 'none'
      }} />

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
            <ArrowLeft style={{ width: '18px', height: '18px' }} />
          </button>
        )}
      </div>
      
      {/* Centro - Vazio */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1
      }}>
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
          <Home style={{ width: '18px', height: '18px' }} />
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
          <ShoppingCart style={{ width: '18px', height: '18px' }} />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '0',
              right: '0',
              backgroundColor: '#fcb404',
              color: '#000',
              borderRadius: '50%',
              width: '14px',
              height: '14px',
              fontSize: '10px',
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
  <div 
    className="category-card" 
    onClick={() => onClick(category)}
    style={{
      backgroundImage: category.backgroundImage ? `url(${category.backgroundImage})` : 'linear-gradient(135deg, #1c1c1c 0%, #2a2a2a 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
      backgroundRepeat: 'no-repeat',
      aspectRatio: '3/4',
      padding: 0,
      maxWidth: '250px',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    {/* Camada preta com degradê */}
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '40%',
      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.95) 100%)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingBottom: '15px'
    }}>
      <span style={{
        fontFamily: "'Teko', sans-serif",
        fontSize: '1.4rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#fff',
        textAlign: 'center'
      }}>
        {category.shortName}
      </span>
    </div>
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
  const [view, setView] = useState('categories');
  const [showCover, setShowCover] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
  if (showCover) {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }
}, [showCover]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({ name: '', phone: '', cep: '', street: '', number: '', complement: '', neighborhood: '', city: '' });

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleCategoryClick = (category) => { setSelectedCategory(category); setView('products'); };
  const handleProductClick = (product) => { setSelectedProduct(product); };
  const handleAddToCart = (product, size) => {
    const cartItem = { 
      ...product, 
      size, 
      quantity: 1, 
      cartId: `${product.id}-${size}-${Date.now()}`,
      categoryName: selectedCategory?.name || 'Não especificada'
    };
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
  // Função para salvar pedido no banco de dados
  const salvarPedido = async () => {
    try {
      // 1. Inserir ou buscar cliente
      const { data: clienteExistente } = await supabase
        .from('clientes')
        .select('id_cliente')
        .eq('telefone', formData.phone)
        .single();

      let idCliente;

      if (clienteExistente) {
        idCliente = clienteExistente.id_cliente;
        
        // Atualizar dados do cliente
        await supabase
          .from('clientes')
          .update({
            nome: formData.name,
            rua: formData.street,
            numero: formData.number,
            complemento: formData.complement || null,
            cep: formData.cep,
            bairro: formData.neighborhood,
            cidade: formData.city
          })
          .eq('id_cliente', idCliente);
      } else {
        // Criar novo cliente
        const { data: novoCliente, error: erroCliente } = await supabase
          .from('clientes')
          .insert({
            nome: formData.name,
            telefone: formData.phone,
            rua: formData.street,
            numero: formData.number,
            complemento: formData.complement || null,
            cep: formData.cep,
            bairro: formData.neighborhood,
            cidade: formData.city
          })
          .select('id_cliente')
          .single();

        if (erroCliente) throw erroCliente;
        idCliente = novoCliente.id_cliente;
      }

      // 2. Criar pedido
      const { data: novoPedido, error: erroPedido } = await supabase
        .from('pedidos')
        .insert({
          id_cliente: idCliente,
          valor_total: cartTotal,
          status: 'pendente'
        })
        .select('id_pedido')
        .single();

      if (erroPedido) throw erroPedido;

      // 3. Buscar código dos produtos e inserir itens do pedido
      const itensPedido = await Promise.all(cart.map(async (item) => {
        // Mapear categoria para nome da tabela
        const tabelasPorCategoria = {
          'Times Europeus/Outros': 'times_europeus',
          'Times Brasileiros': 'times_brasileiros',
          'Seleções': 'selecoes',
          'Retrô': 'retro',
          'Modelo Jogador': 'modelo_jogador',
          'Feminino': 'feminino',
          'Infantil': 'infantil',
          'Calções': 'calcoes',
          'Conjuntos': 'conjuntos'
        };

        const tabela = tabelasPorCategoria[item.categoryName];
        let codigoProduto = null;

        if (tabela) {
          // Buscar código do produto pela descrição
          const { data: produto } = await supabase
            .from(tabela)
            .select('codigo')
            .eq('descricao', item.name)
            .single();

          if (produto) {
            codigoProduto = produto.codigo;
          }
        }

        return {
          id_pedido: novoPedido.id_pedido,
          codigo_produto: codigoProduto,
          categoria: item.categoryName || 'Não especificada',
          descricao_produto: item.name,
          tamanho: item.size,
          quantidade: item.quantity,
          preco_unitario: item.price,
          preco_total: item.price * item.quantity
        };
      }));

      const { error: erroItens } = await supabase
        .from('itens_pedido')
        .insert(itensPedido);

      if (erroItens) throw erroItens;

      console.log('Pedido salvo com sucesso! ID:', novoPedido.id_pedido);
      return novoPedido.id_pedido;

    } catch (error) {
      console.error('Erro ao salvar pedido:', error);
      return null;
    }
  };
  const handleSendWhatsApp = async () => {
    if (!formData.name || !formData.phone || !formData.street || !formData.number || !formData.cep || !formData.neighborhood || !formData.city) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Salvar pedido no banco de dados
    const idPedido = await salvarPedido();
    if (idPedido) {
      console.log('Pedido #' + idPedido + ' salvo com sucesso!');
    }

    // Montar mensagem do WhatsApp
    const endereco = `${formData.street}, ${formData.number}${formData.complement ? ` - ${formData.complement}` : ''}, ${formData.neighborhood}, ${formData.city} - CEP: ${formData.cep}`;
    
    const itensTexto = cart.map(item => 
      `• ${item.quantity}x ${item.name} (Tam: ${item.size}) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`
    ).join('\n');

    const mensagem = `🛒 *NOVO PEDIDO${idPedido ? ` #${idPedido}` : ''}*\n\n` +
      `👤 *Cliente:* ${formData.name}\n` +
      `📱 *Telefone:* ${formData.phone}\n\n` +
      `📍 *Endereço de Entrega:*\n${endereco}\n\n` +
      `📦 *Itens do Pedido:*\n${itensTexto}\n\n` +
      `💰 *Total: R$ ${cartTotal.toFixed(2).replace('.', ',')}*\n\n` +
      `Aguardo confirmação! ⚽`;

    const urlWhatsApp = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, '_blank');

    // Limpar carrinho após envio
    setCart([]);
    setFormData({ name: '', phone: '', cep: '', street: '', number: '', complement: '', neighborhood: '', city: '' });
    setView('categories');
    setShowCover(true);
  };  
  // RENDER CATEGORIES
  const renderCategories = () => (
    <div style={{ minHeight: '100vh', width: '100%', background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header 
        showBack={false} 
        onBack={() => {}} 
        cartCount={cartCount} 
        onCartClick={() => setView('cart')} 
        onHomeClick={() => { setShowCover(true); setView('categories'); }} 
      />
      
      {/* CAPA */}
        {showCover && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 998,
            padding: '20px',
            opacity: showCover ? 1 : 0,
            transition: 'opacity 0.3s ease-out',
            textAlign: 'center',
            boxSizing: 'border-box'
          }}>
          {/* Logo */}
            <div className="capa-logo" style={{ marginBottom: '40px' }}>
              <img src={LOGO_URL} alt="Coimbra Imports" style={{ width: '243px', maxWidth: '90%', height: 'auto' }} />
            </div>          
          {/* 3 Imagens - Grid para PC, Carrossel para Mobile */}
            <div className="capa-imagens capa-desktop" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '35px', 
              marginBottom: '40px',
              maxWidth: '1050px',
              width: '100%',
              padding: '0 20px',
              margin: '0 auto 40px auto'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ aspectRatio: '1/1', overflow: 'hidden', width: '100%' }}>
                  <img src="/teste2.png" alt="Imagem 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ 
                  fontFamily: "'Teko', sans-serif", 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px', 
                  color: '#fff', 
                  marginTop: '10px',
                  textAlign: 'center'
                }}>
                  AS PRINCIPAIS <span style={{ color: '#fcb404' }}>LIGAS</span>
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ aspectRatio: '1/1', overflow: 'hidden', width: '100%' }}>
                  <img src="/teste1.png" alt="Imagem 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ 
                  fontFamily: "'Teko', sans-serif", 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px', 
                  color: '#fff', 
                  marginTop: '10px',
                  textAlign: 'center'
                }}>
                  AS MAIORES <span style={{ color: '#fcb404' }}>SELEÇÕES</span>
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ aspectRatio: '1/1', overflow: 'hidden', width: '100%' }}>
                  <img src="/teste3.png" alt="Imagem 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ 
                  fontFamily: "'Teko', sans-serif", 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px', 
                  color: '#fff', 
                  marginTop: '10px',
                  textAlign: 'center'
                }}>
                  ÉPOCAS DE <span style={{ color: '#fcb404' }}>OURO</span>
                </p>
              </div>
            </div>

            {/* Carrossel Mobile */}
            <div className="capa-carrossel" style={{
              display: 'none',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '40px',
              width: '100%',
              padding: '0 20px'
            }}>
              {[
                { img: '/teste2.png', texto: 'AS PRINCIPAIS', destaque: 'LIGAS' },
                { img: '/teste1.png', texto: 'AS MAIORES', destaque: 'SELEÇÕES' },
                { img: '/teste3.png', texto: 'ÉPOCAS DE', destaque: 'OURO' }
              ].map((item, index) => (
                <div 
                  key={index}
                  style={{ 
                    display: carouselIndex === index ? 'flex' : 'none',
                    flexDirection: 'column', 
                    alignItems: 'center',
                    animation: 'fadeIn 0.5s ease-in'
                  }}
                >
                  <div style={{ width: '200px', aspectRatio: '1/1', overflow: 'hidden' }}>
                    <img src={item.img} alt={`Imagem ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <p style={{ 
                    fontFamily: "'Teko', sans-serif", 
                    fontSize: '1.2rem', 
                    fontWeight: '600', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px', 
                    color: '#fff', 
                    marginTop: '15px',
                    textAlign: 'center'
                  }}>
                    {item.texto} <span style={{ color: '#fcb404' }}>{item.destaque}</span>
                  </p>
                </div>
              ))}
            {/* Indicadores do carrossel */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
              {[0, 1, 2].map((index) => (
                <div 
                  key={index}
                  onClick={() => setCarouselIndex(index)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: carouselIndex === index ? '#fcb404' : '#444',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>        
          {/* Botão Arsenal */}
        <button 
          className="capa-botao"
          onClick={() => setShowCover(false)}
          style={{ 
            backgroundColor: '#fcb404', 
            color: '#000', 
            fontFamily: "'Teko', sans-serif", 
            fontSize: '1.8rem', 
            fontWeight: '700', 
            padding: '15px 60px', 
            borderRadius: '50px', 
            border: 'none', 
            textTransform: 'uppercase', 
            boxShadow: '0 0 20px rgba(252, 180, 4, 0.3)', 
            cursor: 'pointer',
            letterSpacing: '2px'
          }}
        >
          Arsenal
        </button>
        </div>
      )}
      
      {/* CARDS DE CATEGORIAS */}
      {!showCover && (
        <div style={{ 
          padding: '40px 20px', 
          paddingTop: '100px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          width: '100%',
          animation: 'fadeIn 0.3s ease-in'
        }}>
          <div style={{ marginBottom: '30px' }}>
            <img src={LOGO_URL} alt="Coimbra Imports" style={{ width: '250px', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div className="category-grid">
            {CATEGORIES.map((category) => <CategoryButton key={category.id} category={category} onClick={handleCategoryClick} />)}
          </div>
        </div>
      )}
    </div>
  );

  // RENDER PRODUCTS
const renderProducts = () => (
    <div style={{ minHeight: '100vh', width: '100%', background: '#000', padding: '40px 20px', paddingTop: '100px' }}>      <Header 
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
      <div className="products-grid" style={{ display: 'grid', gap: '15px', maxWidth: '1200px', margin: '0 auto', padding: '0 10px' }}>
        {PRODUCTS_BY_CATEGORY[selectedCategory?.id]?.map((product) => <ProductCard key={product.id} product={product} onClick={handleProductClick} />)}
      </div>
    </div>
  );

  // RENDER CART
const renderCart = () => (
    <div style={{ minHeight: '100vh', width: '100%', background: '#000', padding: '40px 20px', paddingTop: '100px' }}>      <Header 
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
    <div style={{ minHeight: '100vh', width: '100%', background: '#000', padding: '40px 20px', paddingTop: '100px', paddingBottom: '120px' }}>      <Header 
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
.category-card { background: #1c1c1c; border: 2px solid #000; border-radius: 16px; text-decoration: none; color: white; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; box-shadow: 0 5px 15px rgba(0,0,0,0.5); cursor: pointer; width: 100%; }        .category-card:hover .icon-box { color: #fcb404; transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(252, 180, 4, 0.6)); }
        .card-title { font-family: 'Teko', sans-serif; font-size: 1.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; line-height: 1.1; text-align: center; }
        .action-arrow { margin-top: 20px; font-family: 'Teko', sans-serif; font-size: 1.1rem; color: #fcb404; opacity: 0; transform: translateY(15px); transition: all 0.4s ease; font-weight: 600; letter-spacing: 2px; }
        .category-card:hover .action-arrow { opacity: 1; transform: translateY(0); }
        .category-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; width: 100%; max-width: 1100px; padding: 0 15px; }
@media (max-width: 768px) { .category-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; } }
@media (max-width: 768px) { .category-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; } .capa-desktop { display: none !important; } .capa-carrossel { display: flex !important; } }@media (min-width: 769px) { .capa-logo { margin-top: 30px !important; } .capa-imagens { margin-top: -70px !important; } .capa-botao { margin-top: -30px !important; transform: scale(0.85); } }
        }

        @media (min-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
      {view === 'categories' && renderCategories()}
      {view === 'products' && renderProducts()}
      {view === 'cart' && renderCart()}
      {view === 'checkout' && renderCheckout()}
      {selectedProduct && <SizeModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={handleAddToCart} />}
    </div>
  );
}