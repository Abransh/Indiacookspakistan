"use client";


import { NextPage } from 'next';
import Head from 'next/head';
import { useRef, useEffect } from 'react';

const VideoBackgroundPage: NextPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error);
      });
    }
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Head>
        <title>Welcome Page</title>
        <meta name="description" content="Welcome to my website" />
      </Head>

      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 min-h-full min-w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* Replace with your video source */}
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional: Dark overlay to improve text visibility */}
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-40"></div>

      {/* Welcome Text */}
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
        <h1 className="text-center text-5xl font-bold text-white drop-shadow-lg md:text-7xl">
          India cooking pakistan as always, 
        
          
        </h1>
        <br />
       
      </div>
      <div className="absolute top-50 left-0 flex h-full w-full items-center justify-center">
      <h2 className="text-center text-large font-bold text-white drop-shadow-lg md:text-5xl">
          We will be back soon, till then watch rawalpindi getting bombed. 
          </h2>
      </div>
    </div>
  );
};

export default VideoBackgroundPage;