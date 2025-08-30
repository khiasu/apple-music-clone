'use client'

import { useState } from 'react'
import { Play, Pause, Heart, MoreHorizontal } from 'lucide-react'
import { Track } from '@/store/musicStore'
import { useMusicStore } from '@/store/musicStore'
import { formatDuration, truncateText } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface MusicCardProps {
  track: Track
}

export default function MusicCard({ track }: MusicCardProps) {
  const { currentTrack, isPlaying, setCurrentTrack, togglePlay } = useMusicStore()
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const isCurrentTrack = currentTrack?.id === track.id

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isCurrentTrack) {
      togglePlay()
    } else {
      setCurrentTrack(track)
    }
  }

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  return (
    <div
      className={cn(
        "music-card group relative overflow-hidden",
        isCurrentTrack && "ring-2 ring-apple-blue"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cover Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <img
          src={track.cover}
          alt={track.title}
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
            {isCurrentTrack && isPlaying ? (
              <Pause size={20} />
            ) : (
              <Play size={20} />
            )}
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

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {formatDuration(track.duration)}
        </div>
      </div>

      {/* Track Info */}
      <div className="p-3">
        <h3 className="font-semibold text-apple-gray-900 text-sm mb-1">
          {truncateText(track.title, 20)}
        </h3>
        <p className="text-apple-gray-600 text-xs mb-2">
          {truncateText(track.artist, 25)}
        </p>
        <p className="text-apple-gray-500 text-xs">
          {truncateText(track.album, 25)}
        </p>
      </div>

      {/* More Options Button */}
      <button className="absolute top-2 left-2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <MoreHorizontal size={16} />
      </button>
    </div>
  )
}
