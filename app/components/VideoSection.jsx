"use client";
import React, { useState, useRef } from "react";

const VideoSection = () => {
  const videoData = [
    {
      id: 1,
      title: "Education for All",
      caption: "Empowering children through learning and faith.",
      src: "/videos/video.mp4",
      thumbnail: "/thumbnail/thumbnail1.png",
    },
    {
      id: 2,
      title: "Medical Relief Camps",
      caption: "Providing care and healing to the underserved.",
      src: "/videos/video.mp4",
      thumbnail: "/thumbnail/thumbnail2.png",
    },
    {
      id: 3,
      title: "Ijtima-e-Qurbani 2025",
      caption: "Delivering meals and dignity to those in need.",
      src: "/videos/video.mp4",
      thumbnail: "/thumbnail/thumbnail3.png",
    },
    {
      id: 4,
      title: "Food Aid Distribution",
      caption: "Delivering meals and hope to those in need.",
      src: "/videos/video.mp4",
      thumbnail: "/thumbnail/thumbnail4.png",
    },
  ];

  const [mainVideo, setMainVideo] = useState(videoData[0]);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoChange = (video) => {
    setMainVideo(video);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  };

  return (
    <section className="text-center py-16 bg-white px-29">
      {/* Heading */}
      <p className="text-red-600 tracking-wide uppercase text-sm inline-block border-b-2 border-[#BC153F]">
  Real Stories
</p>

      <h2 className="text-3xl font-bold mt-2">See the Difference You Make</h2>
      <p className="text-gray-600 mt-2 mb-8 text-sm">
       Experience how your generosity spreads hope, care, and change to those who need it most.
      </p>

      {/* Main Video */}
      <div  className="relative  lg:max-w-[1750px] max-w-5xl mx-auto rounded-xl overflow-hidden mb-10  h-64 md:h-94">
  <video
    ref={videoRef}
    className="w-full h-full rounded-xl object-cover"
    poster={mainVideo.thumbnail}
    controls={false}
  >
    <source src={mainVideo.src} type="video/mp4" />
  </video>

  {/* Overlay at bottom */}
  <div className="absolute bottom-0 left-0 w-full h-42 bg-gradient-to-t from-black to-transparent px-4 py-3 flex flex-col justify-end text-left">
    
   
  </div>

  <button
    onClick={handlePlayPause}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-full w-13 h-13 text-3xl flex items-center justify-center shadow-md hover:scale-105 transition z-10"
  >
    {isPlaying ? "❚❚" : "▶"}
  </button>
</div>


      {/* Thumbnails */}
<div className="flex justify-center flex-wrap gap-5 w-full max-w-5xl  mx-auto">
  {videoData.map((video) => (
    <div
      key={video.id}
      onClick={() => handleVideoChange(video)}
      className={`relative w-56 md:w-60 rounded-md cursor-pointer overflow-hidden transition transform hover:scale-105  ${
        mainVideo.id === video.id ? "ring-4 ring-red-500" : ""
      }`}
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-39 md:h-47 object-cover rounded-md"
      />
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent px-3 py-2 flex flex-col justify-end text-left">
        <span className="text-white text-2xl mb-4 text-center">▶</span>
        <h4 className="text-white text-[13px] ml-2">{video.title}</h4>
<p className="text-white text-[9px] mb-3 ml-2">{video.caption}</p>

      </div>
    </div>
  ))}
</div>


    </section>
  );
};

export default VideoSection;
