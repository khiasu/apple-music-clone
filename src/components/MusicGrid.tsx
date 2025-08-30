'use client'

import { useState } from 'react'
import { sampleTracks, featuredPlaylists } from '@/data/tracks'
import { useMusicStore } from '@/store/musicStore'
import { cn } from '@/lib/utils'
import MusicCard from './MusicCard'
import PlaylistCard from './PlaylistCard'

export default function MusicGrid() {
  const { currentView } = useMusicStore()
  const [selectedGenre, setSelectedGenre] = useState('All')

  const genres = ['All', 'Pop', 'Hip-Hop', 'Electronic', 'Funk', 'Latin']

  const filteredTracks = selectedGenre === 'All' 
    ? sampleTracks 
    : sampleTracks.filter(track => track.genre === selectedGenre)

  if (currentView === 'search') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-apple-gray-900">Search Results</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredTracks.map((track) => (
            <MusicCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    )
  }

  if (currentView === 'library') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-apple-gray-900">Your Library</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {sampleTracks.slice(0, 12).map((track) => (
            <MusicCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-64 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 apple-gradient"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Welcome to Apple Music</h1>
            <p className="text-lg opacity-90">Discover millions of songs and create your perfect playlist</p>
          </div>
        </div>
      </div>

      {/* Featured Playlists */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-apple-gray-900">Featured Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPlaylists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </div>

      {/* Recently Played */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-apple-gray-900">Recently Played</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {sampleTracks.slice(0, 6).map((track) => (
            <MusicCard key={track.id} track={track} />
          ))}
        </div>
      </div>

      {/* Browse by Genre */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-apple-gray-900">Browse by Genre</h2>
        
        {/* Genre Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                selectedGenre === genre
                  ? "bg-apple-blue text-white"
                  : "bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200"
              )}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Genre Tracks */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredTracks.map((track) => (
            <MusicCard key={track.id} track={track} />
          ))}
        </div>
      </div>

      {/* New Releases */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-apple-gray-900">New Releases</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {sampleTracks.slice(6, 12).map((track) => (
            <MusicCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </div>
  )
}
