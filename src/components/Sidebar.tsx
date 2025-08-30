'use client'

import { useState } from 'react'
import { 
  Home, 
  Search, 
  Library, 
  Plus, 
  Heart, 
  Download, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useMusicStore } from '@/store/musicStore'
import { cn } from '@/lib/utils'

export default function Sidebar() {
  const { sidebarCollapsed, toggleSidebar, currentView, setCurrentView, playlists } = useMusicStore()

  const navigationItems = [
    { icon: Home, label: 'Home', view: 'browse' as const },
    { icon: Search, label: 'Search', view: 'search' as const },
    { icon: Library, label: 'Your Library', view: 'library' as const },
  ]

  const libraryItems = [
    { icon: Plus, label: 'Create Playlist' },
    { icon: Heart, label: 'Liked Songs' },
    { icon: Download, label: 'Downloaded' },
  ]

  return (
    <div className={cn(
      "bg-white border-r border-apple-gray-200 transition-all duration-300 flex flex-col",
      sidebarCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-apple-gray-200 flex items-center justify-between">
        {!sidebarCollapsed && (
          <h1 className="text-xl font-bold text-apple-gray-900">Apple Music</h1>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-apple-gray-100 transition-colors"
        >
          {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-6">
        {/* Main Navigation */}
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setCurrentView(item.view)}
              className={cn(
                "sidebar-item w-full",
                currentView === item.view && "active"
              )}
            >
              <item.icon size={20} />
              {!sidebarCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </div>

        {/* Library Section */}
        {!sidebarCollapsed && (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-apple-gray-600 px-4">LIBRARY</h3>
            {libraryItems.map((item) => (
              <button
                key={item.label}
                className="sidebar-item w-full"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Playlists */}
        {!sidebarCollapsed && playlists.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-apple-gray-600 px-4">PLAYLISTS</h3>
            {playlists.map((playlist) => (
              <button
                key={playlist.id}
                onClick={() => setCurrentView('playlist')}
                className="sidebar-item w-full"
              >
                <div className="w-6 h-6 rounded bg-gradient-to-br from-apple-purple to-apple-pink flex items-center justify-center">
                  <span className="text-white text-xs font-bold">♪</span>
                </div>
                <span className="truncate">{playlist.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-apple-gray-200">
        <button className="sidebar-item w-full">
          <Settings size={20} />
          {!sidebarCollapsed && <span>Settings</span>}
        </button>
      </div>
    </div>
  )
}
