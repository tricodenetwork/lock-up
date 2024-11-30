import React from 'react';
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center space-x-4">
        <span className="font-semibold">P2P Transactions</span>
        <nav className="flex space-x-4">
          <a href="#" className="text-blue-600">Home</a>
          <a href="#" className="text-gray-500">Send</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <BellIcon className="h-6 w-6 text-gray-500" />
        </button>
        <div className="h-8 w-8 rounded-full bg-gray-200"></div>
      </div>
    </header>
  );
}