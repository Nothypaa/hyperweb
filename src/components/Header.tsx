'use client'

import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-[#FAFAFA] w-full">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center px-24 py-24 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-black text-[#1a1a1a] font-system tracking-tight">
          HyperWeb
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-3 ml-auto mr-12">
          {/* Blog Button */}
          <button className="px-5 py-2.5 bg-white text-[#6B7280] rounded-[25px] font-medium border border-[#E5E7EB] shadow-sm hover:text-[#000000] hover:scale-95 hover:shadow-md transition-all duration-200 ease-in-out font-system text-sm">
            Blog
          </button>

          {/* Careers Button */}
          <button className="px-5 py-2.5 bg-white text-[#6B7280] rounded-[25px] font-medium border border-[#E5E7EB] shadow-sm hover:text-[#000000] hover:scale-95 hover:shadow-md transition-all duration-200 ease-in-out font-system text-sm">
            Careers
          </button>

          {/* Menu Button - Ice Blue */}
          <button className="w-10 h-10 bg-[#B8E6E1] text-[#1a1a1a] rounded-full flex items-center justify-center border border-[#B8E6E1] shadow-sm hover:scale-95 hover:shadow-md transition-all duration-200 ease-in-out ml-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-black text-[#1a1a1a] font-system tracking-tight">
            HyperWeb
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-white text-[#6B7280] rounded-[25px] text-sm font-medium border border-[#E5E7EB] shadow-sm hover:text-[#000000] hover:scale-95 hover:shadow-md transition-all duration-200 ease-in-out">
              Blog
            </button>
            <button className="px-4 py-2 bg-white text-[#6B7280] rounded-[25px] text-sm font-medium border border-[#E5E7EB] shadow-sm hover:text-[#000000] hover:scale-95 hover:shadow-md transition-all duration-200 ease-in-out">
              Careers
            </button>
            <button className="w-8 h-8 bg-[#B8E6E1] text-[#1a1a1a] rounded-full flex items-center justify-center border border-[#B8E6E1] shadow-sm hover:scale-95 hover:shadow-md transition-all duration-200 ease-in-out">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header