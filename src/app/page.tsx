'use client'

import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import MusicGrid from '@/components/MusicGrid'
import Player from '@/components/Player'
import { useMusicStore } from '@/store/musicStore'

export default function Home() {
  const { currentTrack, isPlaying } = useMusicStore()

  return (
    <div className="flex h-screen bg-apple-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <MusicGrid />
        </main>
        
        {/* Player */}
        {currentTrack && (
          <Player />
        )}
      </div>
    </div>
  )
}
