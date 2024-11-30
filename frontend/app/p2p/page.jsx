"use client"

import { useState } from 'react';
import TradeTypeSelector from '@/components/shared/P2P/TradeTypeSelector';
import FilterBar from '@/components/shared/P2P/FilterBar';
import AdvertisementList from '@/components/shared/P2P/AdvertisementList';

export default function P2PTrading() {
  const [filter, setFilter] = useState({
    type: 'buy',
    crypto: 'BTC',
    fiat: 'USD',
    paymentMethod: 'bank',
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">P2P Trading</h1>
      
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <TradeTypeSelector
            selected={filter.type}
            onChange={(type) => setFilter({ ...filter, type })}
          />
          <FilterBar
            filter={filter}
            onChange={setFilter}
          />
        </div>
      </div>

      <AdvertisementList filter={filter} />
    </div>
  );
}