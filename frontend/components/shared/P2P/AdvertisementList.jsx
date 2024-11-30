"use client"

import { useMemo } from 'react';
import { format } from 'date-fns';

// Mock data - in a real app, this would come from an API
const MOCK_ADS = [
  {
    id: '1',
    type: 'sell',
    user: {
      id: 'user1',
      name: 'CryptoTrader',
      completedTrades: 156,
      completionRate: 98.5,
      avgResponseTime: '5m',
    },
    crypto: {
      symbol: 'BTC',
      amount: 0.5,
      price: 35000,
    },
    fiat: {
      symbol: 'USD',
      min: 100,
      max: 5000,
    },
    paymentMethods: [
      { id: 'bank', name: 'Bank Transfer', icon: '🏦' },
      { id: 'card', name: 'Credit Card', icon: '💳' },
    ],
    terms: 'Fast payment required. Please have verification ready.',
    createdAt: new Date().toISOString(),
  },
  // Add more mock advertisements as needed
];

function AdvertisementCard({ ad }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold">{ad.user.name}</h3>
            <span className="text-sm text-gray-500">
              {ad.user.completedTrades} trades | {ad.user.completionRate}% completion
            </span>
          </div>
          
          <div className="text-2xl font-bold mb-4">
            {ad.crypto.price} {ad.fiat.symbol}
          </div>
          
          <div className="text-sm text-gray-600 mb-2">
            Limits: {ad.fiat.min}-{ad.fiat.max} {ad.fiat.symbol}
          </div>
          
          <div className="flex gap-2 mb-4">
            {ad.paymentMethods.map((pm) => (
              <span key={pm.id} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {pm.icon} {pm.name}
              </span>
            ))}
          </div>
          
          <p className="text-sm text-gray-600">{ad.terms}</p>
        </div>
        
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          {ad.type === 'buy' ? 'Sell' : 'Buy'} {ad.crypto.symbol}
        </button>
      </div>
      
      <div className="mt-4 text-xs text-gray-500">
        Posted {format(new Date(ad.createdAt), 'PPp')}
      </div>
    </div>
  );
}


export default function AdvertisementList({ filter }) {
  const filteredAds = useMemo(() => {
    return MOCK_ADS.filter(ad => 
      ad.type === filter.type &&
      ad.crypto.symbol === filter.crypto &&
      ad.fiat.symbol === filter.fiat &&
      ad.paymentMethods.some(pm => pm.id === filter.paymentMethod)
    );
  }, [filter]);

  return (
    <div className="space-y-4">
      {filteredAds.map((ad) => (
        <AdvertisementCard key={ad.id} ad={ad} />
      ))}
    </div>
  );
}