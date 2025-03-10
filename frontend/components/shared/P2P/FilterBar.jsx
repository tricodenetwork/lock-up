"use client"

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { CRYPTO_CURRENCIES, FIAT_CURRENCIES, PAYMENT_METHODS } from '@/constants/p2p';
import clsx from 'clsx';

function FilterDropdown({ label, value, options, onChange }) {
  const selected = options.find(opt => opt.value === value);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {label}: {selected?.label}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <Menu.Item key={option.value}>
                {({ active }) => (
                  <button
                    onClick={() => onChange(option.value)}
                    className={clsx(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    {option.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default function FilterBar({ filter, onChange }) {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      <FilterDropdown
        label="Crypto"
        value={filter.crypto}
        options={CRYPTO_CURRENCIES.map(c => ({ value: c.symbol, label: `${c.name} (${c.symbol})` }))}
        onChange={(crypto) => onChange({ ...filter, crypto })}
      />
      
      <FilterDropdown
        label="Fiat"
        value={filter.fiat}
        options={FIAT_CURRENCIES.map(f => ({ value: f.symbol, label: `${f.name} (${f.symbol})` }))}
        onChange={(fiat) => onChange({ ...filter, fiat })}
      />
      
      <FilterDropdown
        label="Payment"
        value={filter.paymentMethod}
        options={PAYMENT_METHODS.map(p => ({ value: p.id, label: `${p.icon} ${p.name}` }))}
        onChange={(paymentMethod) => onChange({ ...filter, paymentMethod })}
      />
    </div>
  );
}