'use client'

import { useState } from 'react'
import { Play, Heart, MoreHorizontal } from 'lucide-react'
import { Playlist } from '@/store/musicStore'
import { useMusicStore } from '@/store/musicStore'
import { truncateText } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface PlaylistCardProps {
  playlist: Playlist
}

export default function PlaylistCard({ playlist }: PlaylistCardProps) {
  const { setCurrentPlaylist, setCurrentView } = useMusicStore()
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const handlePlaylistClick = () => {
    setCurrentPlaylist(playlist)
    setCurrentView('playlist')
  }

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    // Play the first track in the playlist
    if (playlist.tracks.length > 0) {
      // This would integrate with the music player
      console.log('Playing playlist:', playlist.name)
    }
  }

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  return (
    <div
      className="music-card group relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePlaylistClick}
    >
      {/* Cover Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <img
          src={playlist.cover}
          alt={playlist.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay with Play Button */}
        <div className={cn(
          "absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <button
            onClick={handlePlayClick}
            className="play-button"
          >
            <Play size={20} />
          </button>
        </div>

        {/* Like Button */}
        <button
          onClick={handleLikeClick}
          className={cn(
            "absolute top-2 right-2 p-1.5 rounded-full transition-all duration-200",
            isLiked 
              ? "bg-apple-red text-white" 
              : "bg-black/50 text-white hover:bg-black/70"
          )}
        >
          <Heart size={16} className={cn(isLiked && "fill-current")} />
        </button>

        {/* Track Count Badge */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {playlist.tracks.length} songs
        </div>
      </div>

      {/* Playlist Info */}
      <div className="p-4">
        <h3 className="font-semibold text-apple-gray-900 text-lg mb-2">
          {truncateText(playlist.name, 30)}
        </h3>
        <p className="text-apple-gray-600 text-sm mb-3">
          {truncateText(playlist.description, 60)}
        </p>
        
        {/* Preview of tracks */}
        <div className="space-y-1">
          {playlist.tracks.slice(0, 3).map((track, index) => (
            <div key={track.id} className="flex items-center gap-2 text-xs text-apple-gray-500">
              <span className="w-4 h-4 bg-apple-gray-200 rounded flex items-center justify-center text-[10px]">
                {index + 1}
              </span>
              <span className="truncate">{truncateText(track.title, 25)}</span>
            </div>
          ))}
          {playlist.tracks.length > 3 && (
            <div className="text-xs text-apple-gray-400">
              +{playlist.tracks.length - 3} more songs
            </div>
          )}
        </div>
      </div>

      {/* More Options Button */}
      <button className="absolute top-2 left-2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <MoreHorizontal size={16} />
      </button>
    </div>
  )
}
