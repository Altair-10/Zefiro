import { useState, useRef, useEffect, useCallback } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const observerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [isFlashing, setIsFlashing] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);  // Stato per il termine del video

  // Funzione per avviare o fermare il video
  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setShowPlayButton(true);
  }, [isPlaying]);

  // Funzione per il termine del video
  const handleVideoEnd = useCallback(() => {
    videoRef.current.currentTime = 0;  // Riporta il video all'inizio
    setIsPlaying(false);  // Ferma il video
    setShowPlayButton(true);  // Mostra il pulsante per riavviare
    setIsVideoEnded(true);  // Imposta che il video è terminato
  }, []);

  // Funzione per far lampeggiare i bordi del video
  const startFlashingBorders = useCallback(() => {
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 2000); // Fermiamo il lampeggio dopo 2 secondi
  }, []);

  // Gestiamo l'IntersectionObserver solo una volta
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startFlashingBorders(); // Iniziamo a far lampeggiare i bordi
          }
        });
      },
      {
        threshold: 0.5, // L'elemento deve essere visibile al 50% per attivare l'osservatore
      }
    );

    observerRef.current = observer; // Salviamo il riferimento all'observer

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (observerRef.current && videoRef.current) {
        observerRef.current.unobserve(videoRef.current);
      }
    };
  }, [startFlashingBorders]);

  return (
    <div
      className="relative w-full h-full"
      style={{
        border: isFlashing ? '5px solid red' : '5px solid transparent',
        transition: 'border 0.5s ease-in-out',
      }}
    >
      {!isPlaying && isVideoEnded && (
        <img
          src="/video/copertina.png"
          alt="Poster"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
      )}

      <video
        ref={videoRef}
        onClick={togglePlayPause}
        className="w-full h-full object-cover"
        controls={false}
        poster="/video/copertina.png"
        onEnded={handleVideoEnd}
        style={{
          display: isVideoEnded ? 'none' : 'block', // Nasconde il video quando è finito
        }}
      >
        <source src="/video/add.mp4" type="video/mp4" />
      </video>

      {showPlayButton && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlayPause}
            className="text-white p-4 opacity-50 hover:opacity-100 transition text-4xl"
          >
            {!isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="100"
                height="100"
                fill="currentColor"
              >
                <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <polygon points="10,7 16,12 10,17" fill="currentColor" />
              </svg>
            ) : null}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
