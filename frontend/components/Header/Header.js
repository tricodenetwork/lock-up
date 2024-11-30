import React from 'react';

"use client";
import React, { useState } from "react";
import './style.css';
import Link from 'next/link';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // State for Hamburger Menu

    // Placeholder state for editable profile fields
    const [profileData, setProfileData] = useState({
        fullName: "John Doe",
        phoneNumber: "+123456789",
        email: "johndoe@example.com",
      });
    
      // Handle input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

  // Handle Profile Dropdown Toggle
  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle Hamburger Menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="header flex justify-between items-center h-[88px] m-auto px-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="/icons/material-symbols-light_task-outline.svg"
          alt="Product"
          className="h-full"
        />
        <Link href="#">LockUp</Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-[30px]">
        <div className="flex items-center">
          <img src="/icons/home.svg" alt="Product" className="h-full" />
          <Link href="#">Dashboard</Link>
        </div>
        <div className="flex items-center">
          <img
            src="/icons/fluent_payment-20-regular.svg"
            alt="Product"
            className="h-full"
          />
          <Link href="#">P2P Marketplace</Link>
        </div>
        <div className="flex items-center">
          <img
            src="/icons/streamline_investment-selection.svg"
            alt="Product"
            className="h-full"
          />
          <Link href="#">Assets</Link>
        </div>
        <div className="flex items-center">
          <img
            src="/icons/streamline_investment-selection.svg"
            alt="Product"
            className="h-full"
          />
          <Link href="#">Investments</Link>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleNav}
          className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}

      
      {isNavOpen && (
        <div className="absolute top-[88px] left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col gap-4 p-4">
            <div className="flex items-center">
              <img src="/icons/home.svg" alt="Product" className="h-6" />
              <Link href="#">Dashboard</Link>
            </div>
            <div className="flex items-center">
              <img
                src="/icons/fluent_payment-20-regular.svg"
                alt="Product"
                className="h-6"
              />
              <Link href="#">P2P Marketplace</Link>
            </div>
            <div className="flex items-center">
              <img
                src="/icons/streamline_investment-selection.svg"
                alt="Product"
                className="h-6"
              />
              <Link href="#">Assets</Link>
            </div>
            <div className="flex items-center">
              <img
                src="/icons/streamline_investment-selection.svg"
                alt="Product"
                className="h-6"
              />
              <Link href="#">Investments</Link>
            </div>
          </div>
        </div>
      )}

      {/* Search, Notifications, and Profile */}

      
      <div className="hidden md:flex items-center gap-6">
        <div className="relative w-[290px] max-w-sm">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-1xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M9.5 17A7.5 7.5 0 1 1 17 9.5 7.5 7.5 0 0 1 9.5 17z"
              />
            </svg>
          </button>
        </div>
        <div className="relative cursor-pointer bg-white rounded-full drop-shadow-lg p-2">
          <img
            src="/icons/notification.svg"
            alt="Notifications"
            className="h-full"
          />
          <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
            5
          </span>
        </div>
        <div
          className="w-10 h-10 overflow-hidden rounded-full cursor-pointer hover:ring-2 hover:ring-blue-500"
          onClick={handleProfileClick}
        >
          <img
            src="/icons/Ellipse.svg"
            alt="Profile Picture"
            className="object-cover w-full h-full"
          />
        </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
            <div className="absolute right-0 z-10 w-64 p-4 mt-[18rem] bg-white border rounded-lg shadow-lg">
              <h4 className="mb-2 text-sm font-bold text-gray-700">Edit Profile</h4>
              <div className="space-y-2">
                {/* Full Name */}
                <input
                  type="text"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {/* Phone Number */}
                <input
                  type="text"
                  name="phoneNumber"
                  value={profileData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}
      </div>

      
    </div>
  );
};

export default Header;
