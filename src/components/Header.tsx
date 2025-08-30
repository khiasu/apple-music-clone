'use client'

import { useState } from 'react'
import { Search, Bell, User, Menu } from 'lucide-react'
import { useMusicStore } from '@/store/musicStore'
import { cn } from '@/lib/utils'

export default function Header() {
  const { sidebarCollapsed, toggleSidebar } = useMusicStore()
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="bg-white border-b border-apple-gray-200 px-6 py-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-apple-gray-100 transition-colors lg:hidden"
        >
          <Menu size={20} />
        </button>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-apple-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for Artists, Songs, or Albums"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-80 bg-apple-gray-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-apple-blue focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-apple-gray-100 transition-colors relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-apple-red rounded-full"></span>
        </button>
        
        <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-apple-gray-100 transition-colors">
          <div className="w-8 h-8 bg-gradient-to-br from-apple-purple to-apple-pink rounded-full flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
          <span className="text-sm font-medium text-apple-gray-900">John Doe</span>
        </button>
      </div>
    </header>
  )
}
