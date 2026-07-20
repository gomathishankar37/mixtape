import React from 'react';

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

function Cassette() {
  return (
    <div className="relative mx-auto w-full max-w-md md:max-w-lg aspect-[1.6/1] bg-[#5a2d2d] rounded-xl shadow-2xl overflow-hidden border-4 border-[#3d1e1e] flex flex-col justify-between p-4 md:p-6 transition-transform duration-500 hover:scale-[1.02] group">
      {/* Cassette Texture/Details */}
      <div className="absolute inset-0 opacity-10 tape-stripe"></div>
      
      {/* Top Screws */}
      <div className="flex justify-between w-full px-2">
        <div className="w-3 h-3 rounded-full bg-[#2a1515] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-[#1a0a0a] rotate-45"></div>
        </div>
        <div className="w-3 h-3 rounded-full bg-[#2a1515] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-[#1a0a0a] -rotate-12"></div>
        </div>
      </div>

      {/* Label Area */}
      <div className="relative z-10 w-full h-[72%] bg-[#f4eadd] rounded-md shadow-sm border border-[#d3c2aa] overflow-hidden flex flex-col mx-auto w-[90%]">
        {/* Label Header */}
        <div className="bg-[#d4954a] text-[#fff7eb] py-1 px-4 text-center border-b-2 border-[#b87d37]">
          <p className="font-mono text-xs tracking-[0.2em] opacity-90 uppercase">Side A</p>
        </div>
        
        {/* Label Content */}
        <div className="flex-1 p-3 md:p-4 flex flex-col items-center justify-center border-x-4 border-dashed border-[#d4954a]/30 bg-[#f8f1e0] relative">
          
          <h1 className="font-mono text-xl md:text-2xl font-bold text-[#3a2212] text-center mb-1 drop-shadow-sm z-10">
            🌻 For the Smile I Like 🌚
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#5c4228] italic text-center z-10">
            7 Songs · A little playlist for you
          </p>

          {/* Spools Cutout Background */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-14 bg-[#2a1515] rounded-full shadow-inner border-2 border-[#4d2929] flex justify-between items-center px-4 overflow-hidden">
            
            {/* Left Spool */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f4eadd] flex items-center justify-center shadow-md animate-[spin_8s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]">
              <div className="w-3 h-3 rounded-full bg-[#2a1515] shadow-inner"></div>
              {/* Spool Teeth */}
              <div className="absolute w-1.5 h-3.5 bg-[#d3c2aa] rounded-sm -mt-6"></div>
              <div className="absolute w-1.5 h-3.5 bg-[#d3c2aa] rounded-sm mt-6"></div>
              <div className="absolute w-3.5 h-1.5 bg-[#d3c2aa] rounded-sm -ml-6"></div>
              <div className="absolute w-3.5 h-1.5 bg-[#d3c2aa] rounded-sm ml-6"></div>
            </div>
            
            {/* Tape Window */}
            <div className="flex-1 mx-3 h-8 bg-[#110808] rounded shadow-inner overflow-hidden relative opacity-90">
              {/* Tape showing inside */}
              <div className="absolute top-1/2 left-0 w-[45%] h-[80%] bg-[#4a2b1f] -translate-y-1/2 rounded-r-sm"></div>
              <div className="absolute top-1/2 right-0 w-[50%] h-[80%] bg-[#4a2b1f] -translate-y-1/2 rounded-l-sm"></div>
            </div>

            {/* Right Spool */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f4eadd] flex items-center justify-center shadow-md animate-[spin_8s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]">
              <div className="w-3 h-3 rounded-full bg-[#2a1515] shadow-inner"></div>
              {/* Spool Teeth */}
              <div className="absolute w-1.5 h-3.5 bg-[#d3c2aa] rounded-sm -mt-6"></div>
              <div className="absolute w-1.5 h-3.5 bg-[#d3c2aa] rounded-sm mt-6"></div>
              <div className="absolute w-3.5 h-1.5 bg-[#d3c2aa] rounded-sm -ml-6"></div>
              <div className="absolute w-3.5 h-1.5 bg-[#d3c2aa] rounded-sm ml-6"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Screws & Details */}
      <div className="flex justify-between w-full px-2 mt-2">
        <div className="w-3 h-3 rounded-full bg-[#2a1515] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-[#1a0a0a] rotate-12"></div>
        </div>
        
        {/* Bottom edge cutouts */}
        <div className="flex gap-2 items-end">
          <div className="w-5 h-3 bg-[#3d1e1e] rounded-t-[4px] shadow-inner"></div>
          <div className="w-10 h-4 bg-[#2a1515] rounded-t-md shadow-inner"></div>
          <div className="w-10 h-4 bg-[#2a1515] rounded-t-md shadow-inner"></div>
          <div className="w-5 h-3 bg-[#3d1e1e] rounded-t-[4px] shadow-inner"></div>
        </div>

        <div className="w-3 h-3 rounded-full bg-[#2a1515] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-[#1a0a0a] rotate-90"></div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground relative selection:bg-primary/20 selection:text-foreground overflow-hidden">
      <div className="noise-overlay"></div>
      
      <main className="max-w-2xl mx-auto px-5 md:px-8 py-16 md:py-24 relative z-10 flex flex-col items-center">
        
        <header className="w-full mb-20 drop-shadow-xl">
          <Cassette />
        </header>

        <section className="w-full bg-card/80 rounded-2xl p-6 md:p-10 shadow-lg border border-border/60 backdrop-blur-sm relative">
          
          <div className="mb-8 pb-5 border-b-2 border-dashed border-border flex items-end justify-between">
            <h2 className="font-mono text-2xl md:text-3xl font-bold uppercase tracking-widest text-primary drop-shadow-sm">Tracklist</h2>
            <span className="font-mono text-xs md:text-sm text-muted-foreground uppercase tracking-widest">Stereo</span>
          </div>

          <div className="space-y-8">
            {TRACKS.map((track, i) => (
              <div 
                key={track.number} 
                className="group relative flex flex-col gap-4 p-4 -mx-4 rounded-xl transition-all duration-300 hover:bg-black/5"
              >
                <div className="flex items-start gap-4">
                  <div className="font-mono text-2xl font-bold text-primary/60 pt-0.5 group-hover:text-primary transition-colors">
                    {track.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl font-bold mb-1.5 text-foreground group-hover:text-primary transition-colors">
                      {track.song}
                    </h3>
                    <div className="font-sans text-sm md:text-base text-foreground/80 flex flex-wrap gap-x-2 gap-y-1">
                      <span className="italic">({track.film})</span>
                      <span className="text-muted-foreground hidden sm:inline">•</span>
                      <span className="font-medium text-foreground/70">Music: {track.director}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full pl-0 sm:pl-12">
                  {track.spotifyTrackId.startsWith("SPOTIFY_ID_") ? (
                    <div className="w-full h-[80px] bg-background/50 border-2 border-dashed border-border rounded-lg flex items-center justify-center p-4">
                      <p className="font-mono text-sm text-muted-foreground flex items-center gap-2">
                        <span className="text-primary text-xl">♪</span> 
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
                      className="rounded-lg shadow-sm opacity-90 transition-opacity hover:opacity-100"
                    />
                  )}
                </div>
                
                {/* Vintage Tape divider between tracks (except last) */}
                {i < TRACKS.length - 1 && (
                  <div className="absolute -bottom-4 left-4 right-4 h-px tape-stripe opacity-40"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-24 text-center">
          <p className="font-mono text-lg text-primary/80 italic drop-shadow-sm">
            Made with love 🌻
          </p>
        </footer>
        
      </main>
    </div>
  );
}

export default App;
