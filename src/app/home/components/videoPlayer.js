import { useState, useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  // Gestisce l'avvio e la pausa del video
  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();

    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setShowPlayButton(true);
  };

  // Gestisce la fine del video
  const handleVideoEnd = () => {
    videoRef.current.currentTime = 0; // Riporta il video all'inizio
    setIsPlaying(false); // Ferma il video
    setShowPlayButton(true); // Mostra il pulsante per riavviare
  };

  return (
    <div className="relative w-full h-full">
        <video
            ref={videoRef}
            onClick={togglePlayPause}
            className="w-full h-full object-contain"
            controls={false} // Nasconde la barra di controllo
            poster="/video/copertina.png"
            onEnded={handleVideoEnd} // Chiamato quando il video finisce
        >
            <source src="/video/add.mp4" type="video/mp4" />
        </video>

        {showPlayButton && (
        <div className="absolute inset-0 flex items-center justify-center">
            <button
                onClick={togglePlayPause}
                className=" text-white p-4 opacity-50 hover:opacity-100 transition text-4xl"
                >
                {!isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60" fill="currentColor">
                        <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <polygon points="10,7 16,12 10,17" fill="currentColor"/>
                    </svg>
                ) : null}
            </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
