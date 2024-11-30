"use client"

import { Tab } from '@headlessui/react';
import clsx from 'clsx';

export default function TradeTypeSelector({ selected, onChange }) {
  return (
    <Tab.Group selectedIndex={selected === 'buy' ? 0 : 1} onChange={(index) => onChange(index === 0 ? 'buy' : 'sell')}>
      <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1">
        <Tab
          className={({ selected }) =>
            clsx(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
              'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white text-blue-700 shadow'
                : 'text-gray-600 hover:bg-white/[0.12] hover:text-gray-800'
            )
          }
        >
          Buy
        </Tab>
        <Tab
          className={({ selected }) =>
            clsx(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
              'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white text-blue-700 shadow'
                : 'text-gray-600 hover:bg-white/[0.12] hover:text-gray-800'
            )
          }
        >
          Sell
        </Tab>
      </Tab.List>
    </Tab.Group>
  );
}