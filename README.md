# Apple Music Clone 🎵

A highly accurate Apple Music clone built with Next.js 14, TypeScript, and Tailwind CSS. This project replicates the Apple Music interface with modern design patterns and smooth animations.

## ✨ Features

- **🎨 Pixel-perfect Apple Music UI** - Exact replica of Apple Music's interface
- **🎵 Full Music Player** - Play, pause, skip, volume control, and progress tracking
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **🎯 Interactive Components** - Hover effects, animations, and smooth transitions
- **📚 Playlist Management** - Create, view, and manage playlists
- **🔍 Search Functionality** - Search through tracks and albums
- **🎨 Modern Design System** - Apple's design language with custom color palette
- **⚡ Performance Optimized** - Built with Next.js 14 and optimized for speed

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Apple Music theme
- **State Management**: Zustand
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd apple-music-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
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

## 🎨 Design System

The project uses a custom Apple Music-inspired design system:

### Colors
- **Primary**: Apple Red (`#FF3B30`)
- **Secondary**: Apple Blue (`#007AFF`)
- **Background**: Apple Gray (`#F2F2F7`)
- **Text**: Apple Gray (`#1C1C1E`)

### Typography
- **Font Family**: SF Pro Display (Apple's system font)
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Apple-style rounded buttons with hover states
- **Progress Bars**: Custom styled range inputs
- **Icons**: Lucide React icons for consistency

## 🚀 Deployment to Vercel

### Step 1: Prepare Your Project

1. **Ensure your project is ready**
   ```bash
   npm run build
   ```

2. **Test locally**
   ```bash
   npm run start
   ```

### Step 2: Deploy to Vercel

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy using Vercel Dashboard** (Recommended)
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings
   - Click "Deploy"

3. **Or deploy using CLI**
   ```bash
   vercel
   ```

### Step 3: Configure Environment Variables

If you have any environment variables, add them in the Vercel dashboard:
- Go to your project settings
- Navigate to "Environment Variables"
- Add any required variables

### Step 4: Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## 🎵 Features in Detail

### Music Player
- **Play/Pause**: Click the play button on any track
- **Progress Control**: Drag the progress bar to seek
- **Volume Control**: Adjust volume with the slider
- **Shuffle/Repeat**: Toggle shuffle and repeat modes
- **Skip Controls**: Navigate between tracks

### Navigation
- **Sidebar**: Collapsible navigation with main sections
- **Search**: Real-time search functionality
- **Library**: Personal music library
- **Playlists**: Create and manage playlists

### Responsive Design
- **Desktop**: Full-featured interface
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Touch-friendly controls and navigation

## 🔧 Customization

### Adding New Tracks
Edit `src/data/tracks.ts` to add new tracks:

```typescript
{
  id: 'unique-id',
  title: 'Song Title',
  artist: 'Artist Name',
  album: 'Album Name',
  duration: 180, // in seconds
  cover: 'image-url',
  audioUrl: 'audio-file-url',
  genre: 'Genre'
}
```

### Styling Changes
- Modify `tailwind.config.js` for theme changes
- Update `src/app/globals.css` for custom styles
- Edit component files for specific styling

### Adding Features
- Extend the Zustand store in `src/store/musicStore.ts`
- Create new components in `src/components/`
- Add new pages in `src/app/`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Apple Music for the design inspiration
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons
- Vercel for seamless deployment

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the documentation

---
