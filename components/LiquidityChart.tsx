'use client'

import { useEffect, useState } from 'react';

interface OrderBookData {
  price: number;
  size: number;
  total: number;
  side: 'buy' | 'sell';
}

export default function LiquidityChart() {
  const [orderBook, setOrderBook] = useState<OrderBookData[]>([]);
  const [currentPrice, setCurrentPrice] = useState(50000);
  const [priceChange, setPriceChange] = useState(0);

  // Simular dados de liquidez em tempo real
  useEffect(() => {
    const generateOrderBook = () => {
      const basePrice = currentPrice;
      const buyOrders: OrderBookData[] = [];
      const sellOrders: OrderBookData[] = [];
      
      // Gerar ordens de compra (abaixo do preço atual)
      for (let i = 0; i < 10; i++) {
        const price = basePrice - (i + 1) * 50;
        const size = Math.random() * 10 + 1;
        const total = buyOrders.reduce((acc, order) => acc + order.size, 0) + size;
        
        buyOrders.push({
          price,
          size,
          total,
          side: 'buy'
        });
      }
      
      // Gerar ordens de venda (acima do preço atual)
      for (let i = 0; i < 10; i++) {
        const price = basePrice + (i + 1) * 50;
        const size = Math.random() * 10 + 1;
        const total = sellOrders.reduce((acc, order) => acc + order.size, 0) + size;
        
        sellOrders.push({
          price,
          size,
          total,
          side: 'sell'
        });
      }
      
      setOrderBook([...buyOrders.reverse(), ...sellOrders]);
    };

    // Simular mudanças de preço
    const updatePrice = () => {
      const change = (Math.random() - 0.5) * 100;
      setCurrentPrice(prev => {
        const newPrice = prev + change;
        setPriceChange(change);
        return Math.max(45000, Math.min(55000, newPrice));
      });
    };

    generateOrderBook();
    const interval = setInterval(() => {
      generateOrderBook();
      updatePrice();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentPrice]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatSize = (size: number) => {
    return size.toFixed(3);
  };

  return (
    <div className="bg-slate-900 text-white rounded-xl p-4 font-mono text-xs">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-slate-300 font-medium">BTC/USD</span>
        </div>
        <div className="text-right">
          <div className={`text-lg font-bold ${priceChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {formatPrice(currentPrice)}
          </div>
          <div className={`text-xs ${priceChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Order Book Header */}
      <div className="grid grid-cols-3 gap-2 mb-2 text-slate-400 text-xs font-semibold">
        <div>Preço (USD)</div>
        <div className="text-right">Tamanho (BTC)</div>
        <div className="text-right">Total</div>
      </div>

      {/* Sell Orders */}
      <div className="space-y-1 mb-3">
        {orderBook.filter(order => order.side === 'sell').slice(0, 8).map((order, index) => (
          <div key={`sell-${index}`} className="grid grid-cols-3 gap-2 relative group">
            <div 
              className="absolute inset-0 bg-red-500/10 rounded"
              style={{ width: `${(order.total / 50) * 100}%` }}
            ></div>
            <div className="relative text-red-400">{formatPrice(order.price)}</div>
            <div className="relative text-right text-slate-300">{formatSize(order.size)}</div>
            <div className="relative text-right text-slate-400">{formatSize(order.total)}</div>
          </div>
        ))}
      </div>

      {/* Current Price Separator */}
      <div className="flex items-center gap-2 my-3 py-2 bg-slate-800 rounded px-2">
        <div className="flex-1 h-px bg-slate-600"></div>
        <span className={`text-sm font-bold ${priceChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {formatPrice(currentPrice)}
        </span>
        <div className="flex-1 h-px bg-slate-600"></div>
      </div>

      {/* Buy Orders */}
      <div className="space-y-1">
        {orderBook.filter(order => order.side === 'buy').slice(0, 8).map((order, index) => (
          <div key={`buy-${index}`} className="grid grid-cols-3 gap-2 relative group">
            <div 
              className="absolute inset-0 bg-green-500/10 rounded"
              style={{ width: `${(order.total / 50) * 100}%` }}
            ></div>
            <div className="relative text-green-400">{formatPrice(order.price)}</div>
            <div className="relative text-right text-slate-300">{formatSize(order.size)}</div>
            <div className="relative text-right text-slate-400">{formatSize(order.total)}</div>
          </div>
        ))}
      </div>

      {/* Footer Stats */}
      <div className="mt-4 pt-3 border-t border-slate-700 grid grid-cols-2 gap-4">
        <div>
          <div className="text-slate-400 text-xs">Volume 24h</div>
          <div className="text-green-400 font-bold">2.845 BTC</div>
        </div>
        <div className="text-right">
          <div className="text-slate-400 text-xs">Spread</div>
          <div className="text-cyan-400 font-bold">0.02%</div>
        </div>
      </div>
    </div>
  );
}