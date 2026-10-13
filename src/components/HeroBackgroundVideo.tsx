import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HERO_BEVERAGE_VIDEOS } from '../data/heroVideos';

interface HeroBackgroundVideoProps {
  posterImage?: string;
}

export const HeroBackgroundVideo: React.FC<HeroBackgroundVideoProps> = ({
  posterImage = '/assets/hero-bg.png',
}) => {
  const [activePlayer, setActivePlayer] = useState<'A' | 'B'>('A');
  const [srcA, setSrcA] = useState<string>(HERO_BEVERAGE_VIDEOS[0].src);
  const [srcB, setSrcB] = useState<string>(HERO_BEVERAGE_VIDEOS[1].src);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isFirstVideoPlaying, setIsFirstVideoPlaying] = useState(false);

  const videoRefA = useRef<HTMLVideoElement | null>(null);
  const videoRefB = useRef<HTMLVideoElement | null>(null);
  const isTransitioningRef = useRef(false);
  const totalVideos = HERO_BEVERAGE_VIDEOS.length;

  // Reduced motion preference detection
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Smooth crossfade transition to next video
  const transitionToNext = useCallback(() => {
    if (isTransitioningRef.current || prefersReducedMotion) return;
    isTransitioningRef.current = true;

    const nextIdx = (currentIdx + 1) % totalVideos;
    const incomingPlayer = activePlayer === 'A' ? 'B' : 'A';
    const incomingRef = incomingPlayer === 'A' ? videoRefA.current : videoRefB.current;
    const outgoingRef = activePlayer === 'A' ? videoRefA.current : videoRefB.current;

    if (incomingRef) {
      incomingRef.currentTime = 0;
      const playPromise = incomingRef.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Initiate crossfade
            setActivePlayer(incomingPlayer);
            setCurrentIdx(nextIdx);

            // After crossfade finishes, pause outgoing and queue the subsequent video
            setTimeout(() => {
              if (outgoingRef) {
                outgoingRef.pause();
              }
              const subsequentIdx = (nextIdx + 1) % totalVideos;
              if (incomingPlayer === 'A') {
                setSrcB(HERO_BEVERAGE_VIDEOS[subsequentIdx].src);
              } else {
                setSrcA(HERO_BEVERAGE_VIDEOS[subsequentIdx].src);
              }
              isTransitioningRef.current = false;
            }, 750);
          })
          .catch((err) => {
            console.warn('Playback error during transition, advancing to next:', err);
            // In case of playback failure, skip to next index
            setCurrentIdx(nextIdx);
            const subsequentIdx = (nextIdx + 1) % totalVideos;
            if (incomingPlayer === 'A') {
              setSrcB(HERO_BEVERAGE_VIDEOS[subsequentIdx].src);
            } else {
              setSrcA(HERO_BEVERAGE_VIDEOS[subsequentIdx].src);
            }
            isTransitioningRef.current = false;
          });
      }
    } else {
      isTransitioningRef.current = false;
    }
  }, [activePlayer, currentIdx, prefersReducedMotion, totalVideos]);

  // Initial playback on mount
  useEffect(() => {
    if (prefersReducedMotion) return;

    const initialVideo = videoRefA.current;
    if (initialVideo) {
      const playPromise = initialVideo.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsFirstVideoPlaying(true))
          .catch((err) => {
            console.warn('Initial autoplay pending or prevented:', err);
          });
      }
    }
  }, [prefersReducedMotion]);

  // Handle fallback if videos fail to load
  const handleVideoError = () => {
    console.warn('Video failed to load');
    setHasVideoError(true);
  };

  // Static fallback if motion is reduced or video error
  if (prefersReducedMotion || hasVideoError) {
    return (
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src={posterImage}
          alt="Dada Kathiyawadi Chai Background"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(15, 10, 7, 0.82) 0%, rgba(15, 10, 7, 0.52) 48%, rgba(15, 10, 7, 0.28) 100%)',
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#28140D]">
      {/* Poster Image while first video loads */}
      <img
        src={posterImage}
        alt="Dada Kathiawadi Chai Poster"
        className={`absolute inset-0 w-full h-full object-cover object-center z-0 transition-opacity duration-1000 ${
          isFirstVideoPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Video Player A */}
      <video
        ref={videoRefA}
        src={srcA}
        muted
        playsInline
        autoPlay
        preload="auto"
        onPlaying={() => setIsFirstVideoPlaying(true)}
        onEnded={activePlayer === 'A' ? transitionToNext : undefined}
        onError={handleVideoError}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out z-[1] ${
          activePlayer === 'A' ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Video Player B (Crossfade partner) */}
      <video
        ref={videoRefB}
        src={srcB}
        muted
        playsInline
        preload="auto"
        onEnded={activePlayer === 'B' ? transitionToNext : undefined}
        onError={handleVideoError}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out z-[2] ${
          activePlayer === 'B' ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Editorial Espresso Overlay: Strongest on left for text legibility, subtle on right for beverage clarity */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(40, 20, 13, 0.88) 0%, rgba(40, 20, 13, 0.65) 45%, rgba(40, 20, 13, 0.25) 100%)',
        }}
      />
    </div>
  );
};
