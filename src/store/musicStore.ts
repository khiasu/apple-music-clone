import { create } from 'zustand'

export interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: number
  cover: string
  audioUrl: string
  genre: string
}

export interface Playlist {
  id: string
  name: string
  description: string
  cover: string
  tracks: Track[]
}

interface MusicStore {
  // Current playback
  currentTrack: Track | null
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  
  // Playlist management
  playlists: Playlist[]
  currentPlaylist: Playlist | null
  queue: Track[]
  
  // UI state
  sidebarCollapsed: boolean
  currentView: 'browse' | 'library' | 'search' | 'playlist'
  
  // Actions
  setCurrentTrack: (track: Track | null) => void
  togglePlay: () => void
  setCurrentTime: (time: number) => void
  setDuration: (duration: number) => void
  setVolume: (volume: number) => void
  addToPlaylist: (playlistId: string, track: Track) => void
  removeFromPlaylist: (playlistId: string, trackId: string) => void
  createPlaylist: (playlist: Omit<Playlist, 'id'>) => void
  setCurrentPlaylist: (playlist: Playlist | null) => void
  addToQueue: (track: Track) => void
  removeFromQueue: (trackId: string) => void
  toggleSidebar: () => void
  setCurrentView: (view: 'browse' | 'library' | 'search' | 'playlist') => void
}

export const useMusicStore = create<MusicStore>((set, get) => ({
  // Initial state
  currentTrack: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 0.7,
  
  playlists: [
    {
      id: '1',
      name: 'Recently Added',
      description: 'Songs you recently added to your library',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      tracks: []
    },
    {
      id: '2',
      name: 'Favorites',
      description: 'Your favorite songs',
      cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
      tracks: []
    }
  ],
  currentPlaylist: null,
  queue: [],
  
  sidebarCollapsed: false,
  currentView: 'browse',
  
  // Actions
  setCurrentTrack: (track) => set({ currentTrack: track }),
  
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  
  setCurrentTime: (time) => set({ currentTime: time }),
  
  setDuration: (duration) => set({ duration }),
  
  setVolume: (volume) => set({ volume }),
  
  addToPlaylist: (playlistId, track) => set((state) => ({
    playlists: state.playlists.map(playlist =>
      playlist.id === playlistId
        ? { ...playlist, tracks: [...playlist.tracks, track] }
        : playlist
    )
  })),
  
  removeFromPlaylist: (playlistId, trackId) => set((state) => ({
    playlists: state.playlists.map(playlist =>
      playlist.id === playlistId
        ? { ...playlist, tracks: playlist.tracks.filter(track => track.id !== trackId) }
        : playlist
    )
  })),
  
  createPlaylist: (playlist) => set((state) => ({
    playlists: [...state.playlists, { ...playlist, id: Date.now().toString() }]
  })),
  
  setCurrentPlaylist: (playlist) => set({ currentPlaylist: playlist }),
  
  addToQueue: (track) => set((state) => ({
    queue: [...state.queue, track]
  })),
  
  removeFromQueue: (trackId) => set((state) => ({
    queue: state.queue.filter(track => track.id !== trackId)
  })),
  
  toggleSidebar: () => set((state) => ({
    sidebarCollapsed: !state.sidebarCollapsed
  })),
  
  setCurrentView: (view) => set({ currentView: view }),
}))
