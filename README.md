An attempt to clone Apple Music! (incomplete, in progress!)

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Apple Music theme
- **State Management**: Zustand
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📦 Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles and Tailwind config
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Main page component
├── components/         # Reusable UI components
│   ├── Header.tsx      # Top navigation bar
│   ├── Sidebar.tsx     # Left sidebar navigation
│   ├── MusicGrid.tsx   # Main content grid
│   ├── MusicCard.tsx   # Individual track cards
│   ├── PlaylistCard.tsx # Playlist display cards
│   └── Player.tsx      # Music player controls
├── store/              # State management
│   └── musicStore.ts   # Zustand store for music state
├── data/               # Sample data
│   └── tracks.ts       # Track and playlist data
└── lib/                # Utility functions
    └── utils.ts        # Helper functions and utilities
```

## 🚀 Free Deployment done to Vercel!


