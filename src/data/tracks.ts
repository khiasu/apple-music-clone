import { Track } from '@/store/musicStore'

export const sampleTracks: Track[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: 200,
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    genre: 'Pop'
  },
  {
    id: '2',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    album: '÷ (Divide)',
    duration: 233,
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    genre: 'Pop'
  },
  {
    id: '3',
    title: 'Dance Monkey',
    artist: 'Tones and I',
    album: 'The Kids Are Coming',
    duration: 209,
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    genre: 'Pop'
  },
  {
    id: '4',
    title: 'Someone You Loved',
    artist: 'Lewis Capaldi',
    album: 'Divinely Uninspired to a Hellish Extent',
    duration: 182,
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    genre: 'Pop'
  },
  {
    id: '5',
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    album: 'When We All Fall Asleep, Where Do We Go?',
    duration: 194,
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    genre: 'Pop'
  },
  {
    id: '6',
    title: 'Uptown Funk',
    artist: 'Mark Ronson ft. Bruno Mars',
    album: 'Uptown Special',
    duration: 270,
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    genre: 'Funk'
  },
  {
    id: '7',
    title: 'Despacito',
    artist: 'Luis Fonsi ft. Daddy Yankee',
    album: 'Vida',
    duration: 229,
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    genre: 'Latin'
  },
  {
    id: '8',
    title: 'Closer',
    artist: 'The Chainsmokers ft. Halsey',
    album: 'Collage',
    duration: 245,
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    genre: 'Electronic'
  },
  {
    id: '9',
    title: 'Thinking Out Loud',
    artist: 'Ed Sheeran',
    album: 'x (Multiply)',
    duration: 281,
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    genre: 'Pop'
  },
  {
    id: '10',
    title: 'See You Again',
    artist: 'Wiz Khalifa ft. Charlie Puth',
    album: 'Furious 7: Original Motion Picture Soundtrack',
    duration: 229,
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    genre: 'Hip-Hop'
  },
  {
    id: '11',
    title: 'Lean On',
    artist: 'Major Lazer & DJ Snake ft. MØ',
    album: 'Peace Is the Mission',
    duration: 176,
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    genre: 'Electronic'
  },
  {
    id: '12',
    title: 'Hello',
    artist: 'Adele',
    album: '25',
    duration: 295,
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    genre: 'Pop'
  }
]

export const featuredPlaylists = [
  {
    id: 'featured-1',
    name: 'Today\'s Hits',
    description: 'The biggest hits right now',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    tracks: sampleTracks.slice(0, 6)
  },
  {
    id: 'featured-2',
    name: 'Chill Vibes',
    description: 'Relaxing music for your day',
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
    tracks: sampleTracks.slice(6, 12)
  },
  {
    id: 'featured-3',
    name: 'Workout Mix',
    description: 'High energy tracks to keep you moving',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
    tracks: sampleTracks.slice(0, 4)
  }
]
