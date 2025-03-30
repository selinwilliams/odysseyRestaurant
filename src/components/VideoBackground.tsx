// components/VideoBackground.tsx
"use client";

import { useRef, useState, useEffect } from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
}

export default function VideoBackground({ videoUrl }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaybackFailed, setVideoPlaybackFailed] = useState(false);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          console.log("Attempting to play video...");
          await videoRef.current.play();
          console.log("Video playing successfully");
        } catch (error) {
          console.error("Video playback failed:", error);
          setVideoPlaybackFailed(true);
        }
      }
    };
    
    playVideo();
  }, []);

  if (videoPlaybackFailed) {
    return (
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gray-900"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
}