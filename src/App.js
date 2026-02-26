import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Send,
  Shirt,
  CheckCircle,
  MapPin,
  User,
  Phone,
  Package,
  LayoutGrid,
  Home,
  Search
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
// ============================================
// MAPEAMENTO DE CATEGORIAS - TABELAS E PASTAS
// ============================================
const CATEGORY_CONFIG = {
  1: {
    id: 1,
    name: 'Times Europeus/Outros',
    shortName: 'Europeus',
    backgroundImage: '/backEuropeus.png',
    tabela: 'europeus',
    folder: 'timesEuropeus'
  },
  2: {
    id: 2,
    name: 'Times Brasileiros',
    shortName: 'Brasileiros',
    backgroundImage: 'backgroundBRs.png',
    tabela: 'times_brasileiros',
    folder: 'camisasCoimbra'
  },
  3: {
    id: 3,
    name: 'Seleções',
    shortName: 'Seleções',
    backgroundImage: '/backSelecoes.png',
    tabela: 'selecoes',
    folder: 'selecoes'
  },
  4: {
    id: 4,
    name: 'Retrô',
    shortName: 'Retrô',
    backgroundImage: '/backRetro.png',
    tabela: 'retro',
    folder: 'retro'
  },
  5: {
    id: 5,
    name: 'Modelo Jogador',
    shortName: 'Modelo Jogador',
    backgroundImage: '/backModeloJogador.png',
    tabela: 'modelo_jogador',
    folder: 'modeloJogador'
  },
  7: {
    id: 7,
    name: 'Feminino',
    shortName: 'Feminino',
    backgroundImage: 'backFeminino.png',
    tabela: 'feminino',
    folder: 'feminino'
  },
  8: {
    id: 8,
    name: 'Infantil',
    shortName: 'Infantil',
    backgroundImage: 'backInfantil.png',
    tabela: 'infantil',
    folder: 'infantil'
  },
  10: {
    id: 10,
    name: 'Conjuntos',
    shortName: 'Conjuntos',
    backgroundImage: 'imagemConjuntos.png',
    tabela: 'conjuntos',
    folder: 'conjuntos'
  },
};

// Array de categorias para renderização
const CATEGORIES = Object.values(CATEGORY_CONFIG);

// ============================================
// FUNÇÃO PARA BUSCAR PRODUTOS DO SUPABASE
// ============================================
const fetchProductsByCategory = async (categoryId) => {
  const config = CATEGORY_CONFIG[categoryId];
  if (!config) return [];

  try {
    const { data, error } = await supabase
      .from(config.tabela)
      .select('id_produto, descricao, preco, tamanhos, arquivo, estoque')
      .order('id_produto', { ascending: true });

    if (error) {
      console.error(`Erro ao buscar produtos da categoria ${config.name}:`, error);
      return [];
    }

    return data.map(produto => ({
      id: produto.id_produto,
      name: produto.descricao,
      price: parseFloat(produto.preco),
      imageFile: produto.arquivo,
      folder: config.folder,
      sizes: produto.tamanhos ? produto.tamanhos.split(', ') : ['P', 'M', 'G', 'GG'],
      inStock: produto.estoque !== false
    }));
  } catch (err) {
    console.error('Erro na conexão:', err);
    return [];
  }
};

// Header Component
const Header = ({ cartCount = 0, onCartClick, onCategoriesClick, showCategoriesButton = false, showSearchBar = false, searchTerm = '', onSearchChange, onSearchSubmit }) => {
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearchSubmit();
    }
  };

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

      {/* Lado Esquerdo e Centro - Barra de Busca */}
      <div className="header-search-container" style={{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingRight: '10px'
      }}>
        {showSearchBar && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: '8px',
            border: '2px solid #fcb404',
            overflow: 'hidden',
            width: '100%',
            maxWidth: '300px'
          }}>
            <input
              type="text"
              placeholder="Buscar produto..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyPress={handleKeyPress}
              style={{
                flex: 1,
                padding: '8px 12px',
                border: 'none',
                outline: 'none',
                fontSize: '14px',
                backgroundColor: '#fff',
                color: '#000'
              }}
            />
            <button
              onClick={onSearchSubmit}
              style={{
                background: 'none',
                border: 'none',
                padding: '8px 12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Search style={{ width: '18px', height: '18px', color: '#fcb404' }} />
            </button>
          </div>
        )}
      </div>

      {/* Lado Direito - Ícones Grid e Carrinho */}
      <div style={{
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}>
        {showCategoriesButton && (
          <button
            onClick={onCategoriesClick}
            style={{
              background: 'none',
              border: 'none',
              color: '#fcb404',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            <LayoutGrid style={{ width: '18px', height: '18px' }} />
          </button>
        )}
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
      <span
        className={category.shortName === 'Brasileiros' ? 'category-brasileiros' : ''}
        style={{
          fontFamily: "'Teko', sans-serif",
          fontSize: '1.4rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          color: '#fff',
          textAlign: 'center'
        }}
      >
        {category.shortName}
      </span>
    </div>
  </div>
);

// Product Card Component
const ProductCard = ({ product, onClick }) => {
  const isAvailable = product.inStock !== false;

  return (
    <div
      onClick={() => isAvailable && onClick(product)}
      style={{
        backgroundColor: 'rgba(40, 40, 40, 0.95)',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: isAvailable ? 'pointer' : 'default',
        transition: 'transform 0.2s, box-shadow 0.2s',
        border: '1px solid #333',
        opacity: isAvailable ? 1 : 0.7
      }}
    >
      <div style={{
        width: '100%', aspectRatio: '1', backgroundColor: '#2C2C2C',
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
        position: 'relative'
      }}>
        <ProductImage
          imageFile={product.imageFile}
          folder={product.folder || 'camisasCoimbra'}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ padding: '12px' }}>
        <h3 style={{
          color: '#fff', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis',
          whiteSpace: 'nowrap', fontFamily: "'Teko', sans-serif", fontSize: '1.2rem', textTransform: 'uppercase'
        }}>{product.name}</h3>
        {isAvailable ? (
          <p style={{ color: '#fcb404', fontWeight: 'bold', marginTop: '4px', fontFamily: "'Teko', sans-serif", fontSize: '1.3rem' }}>
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>
        ) : (
          <p style={{ color: '#888', fontWeight: 'bold', marginTop: '4px', fontFamily: "'Teko', sans-serif", fontSize: '1.3rem', textTransform: 'uppercase' }}>
            Indisponível
          </p>
        )}
      </div>
    </div>
  );
};

// Size Modal Component
const SizeModal = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Pega os tamanhos do produto, se não tiver usa o padrão
  const sizes = product.sizes || ['P', 'M', 'G', 'GG'];

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

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '25px 0', flexWrap: 'wrap' }}>
              {sizes.map((size) => (
                <div key={size} onClick={() => setSelectedSize(size)} style={{
                  minWidth: '50px', height: '50px', padding: '0 10px', border: selectedSize === size ? '2px solid #fcb404' : '2px solid #444',
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
        <h3 style={{
          color: '#fff', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          fontFamily: "'Teko', sans-serif", fontSize: '1.3rem', textTransform: 'uppercase', margin: 0
        }}>
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
    <label style={{
      color: '#B0B0B0', fontSize: '1rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px',
      fontFamily: "'Teko', sans-serif", marginBottom: '8px'
    }}>
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
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  // Estado para produtos carregados do Supabase
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
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

  // Função para carregar produtos ao selecionar categoria
  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    setView('products');
    setSearchTerm('');
    setSearchFilter('');
    setLoadingProducts(true);

    // Buscar produtos do Supabase
    const produtosCarregados = await fetchProductsByCategory(category.id);
    setProducts(produtosCarregados);
    setLoadingProducts(false);
  };
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
  const handleSearchSubmit = () => {
    setSearchFilter(searchTerm);
  };

  const getFilteredProducts = () => {
    if (!searchFilter) return products;

    const removeAccents = (str) => {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };

    const searchNormalized = removeAccents(searchFilter.toLowerCase());

    return products.filter(product =>
      removeAccents(product.name.toLowerCase()).includes(searchNormalized)
    );
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
          'Times Europeus/Outros': 'europeus',
          'Times Brasileiros': 'times_brasileiros',
          'Seleções': 'selecoes',
          'Retrô': 'retro',
          'Modelo Jogador': 'modelo_jogador',
          'Feminino': 'feminino',
          'Infantil': 'infantil',
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
        cartCount={cartCount}
        onCartClick={() => setView('cart')}
        onHomeClick={() => { setShowCover(true); setView('categories'); }}
        showCategoriesButton={false}
        onCategoriesClick={() => setView('categories')}
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
            <img src={LOGO_URL} alt="Coimbra Imports" className="capa-logo-img" style={{ width: '243px', maxWidth: '90%', height: 'auto' }} />
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
    <div style={{ minHeight: '100vh', width: '100%', background: '#000', padding: '40px 20px', paddingTop: '100px' }}>
      <Header
        cartCount={cartCount}
        onCartClick={() => setView('cart')}
        showCategoriesButton={true}
        onCategoriesClick={() => { setView('categories'); setSearchTerm(''); setSearchFilter(''); }}
        showSearchBar={true}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearchSubmit={handleSearchSubmit}
      />
      <h1 style={{ textAlign: 'center', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', fontFamily: "'Teko', sans-serif", fontSize: '2.5rem' }}>
        Coimbra <span style={{ color: '#fcb404' }}>Imports</span>
      </h1>
      <h2 style={{ textAlign: 'center', color: '#B0B0B0', marginBottom: '40px', fontWeight: '600', fontSize: '1.8rem', fontFamily: "'Teko', sans-serif", textTransform: 'uppercase', letterSpacing: '2px' }}>{selectedCategory?.name}</h2>
      {loadingProducts ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
          <p style={{ color: '#fcb404', fontFamily: "'Teko', sans-serif", fontSize: '1.5rem' }}>Carregando produtos...</p>
        </div>
      ) : (
        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
          {getFilteredProducts().map((product) => <ProductCard key={product.id} product={product} onClick={handleProductClick} />)}
        </div>
      )}

      {!loadingProducts && getFilteredProducts().length === 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
          <p style={{ color: '#888', fontFamily: "'Teko', sans-serif", fontSize: '1.3rem' }}>Nenhum produto encontrado.</p>
        </div>
      )}    </div>
  );

  // RENDER CART
  const renderCart = () => (
    <div style={{ minHeight: '100vh', width: '100%', background: '#000', padding: '40px 20px', paddingTop: '100px' }}>
      <Header
        showBack={false}
        cartCount={cartCount}
        onCartClick={() => setView('cart')}
        onHomeClick={() => { setShowCover(true); setView('categories'); }}
        showCategoriesButton={true}
        onCategoriesClick={() => setView('categories')}
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
    <div style={{ minHeight: '100vh', width: '100%', background: '#000', padding: '40px 20px', paddingTop: '100px', paddingBottom: '120px' }}>
      <Header
        showBack={false}
        cartCount={cartCount}
        onCartClick={() => setView('cart')}
        onHomeClick={() => { setShowCover(true); setView('categories'); }}
        showCategoriesButton={true}
        onCategoriesClick={() => setView('categories')}
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
@media (max-width: 768px) { .category-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; } }@media (max-width: 768px) { .header-search-container { justify-content: flex-start !important; } }
@media (max-width: 768px) { .category-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; } .capa-desktop { display: none !important; } .capa-carrossel { display: flex !important; } .capa-logo-img { transform: translateY(15%); } }@media (min-width: 769px) { .capa-logo { margin-top: 30px !important; } .capa-imagens { margin-top: -70px !important; } .capa-botao { margin-top: -30px !important; transform: scale(0.85); } }        }

        @media (min-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
          @media (min-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(4, 1fr) !important;
    max-width: 900px !important;
    margin: 0 auto !important;
  }
}
        @media (max-width: 768px) { .category-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; } .capa-desktop { display: none !important; } .capa-carrossel { display: flex !important; } .capa-logo-img { transform: translateY(15%); } .header-search-container { justify-content: flex-start !important; } .category-brasileiros { font-size: 1.1rem !important; } }

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