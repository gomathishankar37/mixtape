import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bgCrowd from '@assets/bg-crowd.png';

const TRACKS = [
  {
    number: "01",
    song: "Roja Kadale",
    film: "Anegan",
    director: "Harris Jayaraj",
    spotifyTrackId: "SPOTIFY_ID_1",
  },
  {
    number: "02",
    song: "Oyyale",
    film: "Mann Madhan Ambu",
    director: "Harris Jayaraj",
    spotifyTrackId: "SPOTIFY_ID_2",
  },
  {
    number: "03",
    song: "Mei Nigara",
    film: "24",
    director: "A.R. Rahman",
    spotifyTrackId: "SPOTIFY_ID_3",
  },
  {
    number: "04",
    song: "Kanave Kanave",
    film: "Sketch",
    director: "Vivek-Mervin",
    spotifyTrackId: "SPOTIFY_ID_4",
  },
  {
    number: "05",
    song: "Kadavule",
    film: "Kacheri Arambam",
    director: "G.V. Prakash Kumar",
    spotifyTrackId: "SPOTIFY_ID_5",
  },
  {
    number: "06",
    song: "Mona Lisa",
    film: "Lingaa",
    director: "A.R. Rahman",
    spotifyTrackId: "SPOTIFY_ID_6",
  },
  {
    number: "07",
    song: "Naan Varaindhu Vaitha",
    film: "Jayamkondan",
    director: "Unknown",
    spotifyTrackId: "SPOTIFY_ID_7",
  },
];

function CassetteBack() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#1a1a2e] rounded-xl border border-[#2a2a3e] shadow-2xl flex flex-col py-4 px-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
      {/* Top Screws */}
      <div className="flex justify-between w-full mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a14] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-px bg-[#2a2a3e] rotate-45"></div>
        </div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a14] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-px bg-[#2a2a3e] -rotate-12"></div>
        </div>
      </div>
      
      {/* Back Label Area */}
      <div className="relative w-full flex-1 bg-[#f0e6d3] rounded-md shadow-sm overflow-hidden flex flex-col p-4 border border-[#d3c2aa]">
        <div className="bg-gradient-to-r from-[#1e003c] to-[#3a005c] text-[#f0e6d3] py-1 px-3 text-center inline-block w-fit mx-auto mb-4 rounded-sm shadow-sm">
          <p className="font-mono text-[9px] tracking-[0.2em] font-bold">TRACKLIST</p>
        </div>
        
        <div className="space-y-2.5">
          {TRACKS.map(t => (
            <div key={t.number} className="flex gap-3 text-[10px] font-mono text-[#1e003c]">
              <span className="font-bold opacity-60 w-4">{t.number}</span>
              <span className="flex-1 truncate uppercase font-bold tracking-tight">{t.song}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Screws */}
      <div className="flex justify-between w-full mt-3">
        <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a14] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-px bg-[#2a2a3e] rotate-90"></div>
        </div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a14] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-px bg-[#2a2a3e] rotate-12"></div>
        </div>
      </div>
    </div>
  );
}

function CassetteFront() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#1a1a2e] rounded-xl border border-[#2a2a3e] shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between py-4 px-3 [backface-visibility:hidden]">
      
      {/* Top Screws */}
      <div className="flex justify-between w-full px-1">
        <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a14] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-px bg-[#2a2a3e] rotate-45"></div>
        </div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a14] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-px bg-[#2a2a3e] -rotate-12"></div>
        </div>
      </div>
      
      {/* Top Ridge */}
      <div className="w-full h-2 bg-[#2a2a3e]/40 rounded-sm mt-2 mb-1 shadow-inner"></div>

      {/* Label Area */}
      <div className="relative w-full flex-1 bg-[#f0e6d3] rounded-md shadow-sm overflow-hidden flex flex-col border border-[#d3c2aa]">
        
        {/* Label Header Banner */}
        <div className="bg-gradient-to-r from-[#1e003c] to-[#3a005c] text-[#f0e6d3] py-1.5 text-center border-b-2 border-[#1e003c]">
          <p className="font-mono text-[10px] tracking-[0.2em] font-bold">SIDE A</p>
        </div>
        
        {/* Main Label Title */}
        <div className="flex-1 px-4 flex flex-col items-center justify-center border-x-[3px] border-dashed border-[#1e003c]/15 bg-[#f4eadd]">
          <h1 className="font-serif text-2xl md:text-3xl font-black text-[#1e003c] text-center leading-[1.1] mb-2 drop-shadow-sm">
            🌻 For the<br/>Smile I Like 🌚
          </h1>
          <p className="font-mono text-[10px] text-[#1e003c]/80 tracking-widest uppercase font-bold mt-1">
            7 Songs
          </p>
          <div className="w-16 h-px bg-[#1e003c]/20 mt-4 mb-8"></div>
        </div>

        {/* Spool window below label inside the cream label? 
            Standard cassettes have the label frame the window, so putting it overlapping the bottom edge. */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[85%] h-[52px] bg-[#1a1a2e] rounded-full shadow-inner border border-[#2a2a3e] flex justify-between items-center px-4">
          {/* Left Spool */}
          <div className="relative w-10 h-10 rounded-full bg-[#f0e6d3] flex items-center justify-center shadow-md animate-[spin_5s_linear_infinite]">
            <div className="w-3.5 h-3.5 rounded-full bg-[#0a0a14] z-10 shadow-inner"></div>
            <div className="absolute w-1.5 h-3.5 bg-[#d3c2aa] -mt-6"></div>
            <div className="absolute w-1.5 h-3.5 bg-[#d3c2aa] mt-6"></div>
            <div className="absolute w-3.5 h-1.5 bg-[#d3c2aa] -ml-6"></div>
            <div className="absolute w-3.5 h-1.5 bg-[#d3c2aa] ml-6"></div>
          </div>
          {/* Tape */}
          <div className="flex-1 mx-3 h-[28px] bg-[#0a0a14] rounded-sm shadow-inner overflow-hidden relative opacity-90 border border-white/5">
            <div className="absolute top-1/2 left-0 w-[42%] h-[80%] bg-[#2a2a3e] -translate-y-1/2 rounded-r-[2px]"></div>
            <div className="absolute top-1/2 right-0 w-[45%] h-[80%] bg-[#2a2a3e] -translate-y-1/2 rounded-l-[2px]"></div>
          </div>
          {/* Right Spool */}
          <div className="relative w-10 h-10 rounded-full bg-[#f0e6d3] flex items-center justify-center shadow-md animate-[spin_5s_linear_infinite]">
            <div className="w-3.5 h-3.5 rounded-full bg-[#0a0a14] z-10 shadow-inner"></div>
            <div className="absolute w-1.5 h-3.5 bg-[#d3c2aa] -mt-6"></div>
            <div className="absolute w-1.5 h-3.5 bg-[#d3c2aa] mt-6"></div>
            <div className="absolute w-3.5 h-1.5 bg-[#d3c2aa] -ml-6"></div>
            <div className="absolute w-3.5 h-1.5 bg-[#d3c2aa] ml-6"></div>
          </div>
        </div>
      </div>

      {/* Bottom Ridge & Cutouts */}
      <div className="w-full h-2 bg-[#2a2a3e]/40 rounded-sm mt-1 mb-2 shadow-inner"></div>
      
      <div className="flex justify-center gap-2.5 items-end w-full h-5">
        <div className="w-6 h-3 bg-[#0a0a14] rounded-t-sm shadow-inner"></div>
        <div className="w-10 h-[18px] bg-[#0a0a14] rounded-t-md shadow-inner"></div>
        <div className="w-10 h-[18px] bg-[#0a0a14] rounded-t-md shadow-inner"></div>
        <div className="w-6 h-3 bg-[#0a0a14] rounded-t-sm shadow-inner"></div>
      </div>

      {/* Bottom Screws */}
      <div className="flex justify-between w-full px-1 mt-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a14] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-px bg-[#2a2a3e] rotate-90"></div>
        </div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a14] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-px bg-[#2a2a3e] rotate-12"></div>
        </div>
      </div>
    </div>
  );
}

function Cassette({ isOpen, isFlipped }: { isOpen: boolean; isFlipped: boolean }) {
  return (
    <motion.div 
      className="relative mx-auto w-[280px] h-[390px] md:w-[300px] md:h-[420px] [transform-style:preserve-3d] z-20 cursor-pointer"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: isOpen ? 0.88 : 1,
        y: isOpen ? -40 : 0,
        opacity: 1,
        rotateY: isFlipped ? 180 : 0
      }}
      transition={{ 
        opacity: { duration: 0.8, delay: 0.3 },
        y: { type: 'spring', bounce: 0.35 },
        scale: { type: 'spring', bounce: 0.35 },
        rotateY: { type: 'spring', bounce: 0.2, duration: 0.8 }
      }}
    >
      <CassetteFront />
      <CassetteBack />
    </motion.div>
  );
}

function TrackList({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', bounce: 0.25, duration: 0.7 }}
          className="fixed bottom-0 left-0 w-full max-h-[60vh] h-[60vh] bg-[rgba(15,5,25,0.95)] backdrop-blur-xl rounded-t-3xl border-t border-white/10 flex flex-col z-30 shadow-[0_-10px_50px_rgba(0,0,0,0.6)]"
        >
          <div className="flex justify-center w-full pt-5 pb-3 shrink-0">
            <div className="w-16 h-1.5 bg-white/20 rounded-full" />
          </div>
          
          <div className="px-6 md:px-8 pb-10 overflow-y-auto w-full max-w-2xl mx-auto space-y-6 scrollbar-hide">
            {TRACKS.map((track, i) => (
              <div key={track.number} className="group relative flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="font-mono text-xl md:text-2xl font-bold text-primary transition-colors mt-0.5">
                    {track.number}
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h3 className="font-serif text-lg md:text-xl font-bold mb-1 text-white group-hover:text-primary transition-colors">
                      {track.song}
                    </h3>
                    <div className="font-sans text-xs md:text-sm text-white/50 flex flex-wrap gap-x-2 gap-y-1">
                      <span className="italic">({track.film})</span>
                      <span className="hidden sm:inline">•</span>
                      <span>Music: {track.director}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full pl-0 sm:pl-11">
                  {track.spotifyTrackId.startsWith("SPOTIFY_ID_") ? (
                    <div className="w-full h-[80px] bg-black/40 border border-white/5 rounded-md flex items-center justify-center p-4 shadow-inner">
                      <p className="font-mono text-[11px] md:text-xs text-white/40 flex items-center gap-2">
                        <span className="text-primary text-lg">♪</span> 
                        {track.song} — Spotify link coming soon
                      </p>
                    </div>
                  ) : (
                    <iframe
                      src={`https://open.spotify.com/embed/track/${track.spotifyTrackId}?utm_source=generator&theme=0`}
                      width="100%"
                      height="80"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-md opacity-80 transition-opacity hover:opacity-100 shadow-lg"
                    />
                  )}
                </div>
                
                {i < TRACKS.length - 1 && (
                  <div className="w-full h-px bg-white/5 mt-3"></div>
                )}
              </div>
            ))}
            {/* Bottom padding for scrolling */}
            <div className="h-10"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="fixed inset-0 w-full h-[100dvh] overflow-hidden flex flex-col bg-[#0a0014] perspective-[1200px]">
      {/* Background Image & Overlay */}
      <div 
        className="bg-scene" 
        style={{ backgroundImage: `url(${bgCrowd})` }}
      />
      
      {/* Main Container */}
      <main className="relative w-full h-full z-10 flex flex-col items-center justify-center pt-4 pb-20 px-4">
        
        <div className="w-full max-w-md mx-auto relative perspective-[1200px] flex flex-col items-center">
          <Cassette isOpen={isOpen} isFlipped={isFlipped} />
          
          {/* Action Buttons */}
          <motion.div 
            className="flex justify-center items-center gap-4 mt-10 relative z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button
              onClick={() => {
                if (isFlipped) setIsFlipped(false);
                setIsOpen(!isOpen);
              }}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-black/50 border border-white/20 text-white/90 font-mono text-xs font-bold tracking-[0.15em] backdrop-blur-md transition-all duration-300 hover:border-primary hover:text-primary hover:bg-black/70 hover:-translate-y-0.5 active:scale-95 uppercase shadow-lg"
            >
              {isOpen ? '▼ CLOSE' : '▶ OPEN'}
            </button>
            
            <AnimatePresence>
              {!isOpen && (
                <motion.button
                  initial={{ opacity: 0, width: 0, paddingLeft: 0, paddingRight: 0, scale: 0.8 }}
                  animate={{ opacity: 1, width: 'auto', paddingLeft: 24, paddingRight: 24, scale: 1 }}
                  exit={{ opacity: 0, width: 0, paddingLeft: 0, paddingRight: 0, scale: 0.8 }}
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="flex items-center justify-center gap-2 rounded-full bg-black/50 border border-white/20 text-white/90 font-mono text-xs font-bold tracking-[0.15em] backdrop-blur-md transition-all duration-300 hover:border-primary hover:text-primary hover:bg-black/70 hover:-translate-y-0.5 active:scale-95 uppercase shadow-lg h-10 overflow-hidden whitespace-nowrap"
                >
                  ↺ FLIP
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer 
          className="absolute bottom-6 left-0 w-full text-center z-20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-mono text-[11px] md:text-xs text-white/40 tracking-widest drop-shadow-md">
            Made with love 🌻
          </p>
        </motion.footer>

        <TrackList isOpen={isOpen} />
      </main>
    </div>
  );
}

export default App;
