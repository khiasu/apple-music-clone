'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX,
  Shuffle,
  Repeat,
  Heart,
  List
} from 'lucide-react'
import { useMusicStore } from '@/store/musicStore'
import { formatTime } from '@/lib/utils'
import { cn } from '@/lib/utils'

export default function Player() {
  const { 
    currentTrack, 
    isPlaying, 
    currentTime, 
    duration, 
    volume,
    togglePlay, 
    setCurrentTime, 
    setDuration, 
    setVolume 
  } = useMusicStore()

  const audioRef = useRef<HTMLAudioElement>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isShuffled, setIsShuffled] = useState(false)
  const [repeatMode, setRepeatMode] = useState<'none' | 'one' | 'all'>('none')

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentTrack])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value)
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled)
  }

  const toggleRepeat = () => {
    const modes: Array<'none' | 'one' | 'all'> = ['none', 'one', 'all']
    const currentIndex = modes.indexOf(repeatMode)
    const nextIndex = (currentIndex + 1) % modes.length
    setRepeatMode(modes[nextIndex])
  }

  if (!currentTrack) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-apple-gray-200 px-6 py-4">
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => {
          // Handle track ending
          console.log('Track ended')
        }}
      />
      
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Section - Track Info */}
        <div className="flex items-center gap-4 flex-1">
          <img
            src={currentTrack.cover}
            alt={currentTrack.title}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <h4 className="font-medium text-apple-gray-900 truncate">
              {currentTrack.title}
            </h4>
            <p className="text-sm text-apple-gray-600 truncate">
              {currentTrack.artist}
            </p>
          </div>
          <button className="p-2 text-apple-gray-600 hover:text-apple-red transition-colors">
            <Heart size={16} />
          </button>
        </div>

        {/* Center Section - Playback Controls */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleShuffle}
              className={cn(
                "p-2 text-apple-gray-600 hover:text-apple-gray-900 transition-colors",
                isShuffled && "text-apple-blue"
              )}
            >
              <Shuffle size={16} />
            </button>
            
            <button className="p-2 text-apple-gray-600 hover:text-apple-gray-900 transition-colors">
              <SkipBack size={20} />
            </button>
            
            <button
              onClick={togglePlay}
              className="w-10 h-10 bg-apple-red text-white rounded-full flex items-center justify-center hover:bg-apple-red/90 transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button className="p-2 text-apple-gray-600 hover:text-apple-gray-900 transition-colors">
              <SkipForward size={20} />
            </button>
            
            <button
              onClick={toggleRepeat}
              className={cn(
                "p-2 text-apple-gray-600 hover:text-apple-gray-900 transition-colors",
                repeatMode !== 'none' && "text-apple-blue"
              )}
            >
              <Repeat size={16} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-3 w-full max-w-md">
            <span className="text-xs text-apple-gray-500 w-10">
              {formatTime(currentTime)}
            </span>
            <div className="flex-1 relative">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleProgressChange}
                className="progress-bar appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #FF3B30 0%, #FF3B30 ${(currentTime / (duration || 1)) * 100}%, #E5E5EA ${(currentTime / (duration || 1)) * 100}%, #E5E5EA 100%)`
                }}
              />
            </div>
            <span className="text-xs text-apple-gray-500 w-10">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Right Section - Volume and Queue */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <button className="p-2 text-apple-gray-600 hover:text-apple-gray-900 transition-colors">
            <List size={16} />
          </button>
          
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-2 text-apple-gray-600 hover:text-apple-gray-900 transition-colors"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
