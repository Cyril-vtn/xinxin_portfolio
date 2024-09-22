"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type MediaItem = {
  src: string;
  alt: string;
  title: string;
  type: "image" | "video";
};

const mediaItems: MediaItem[] = [
  {
    src: "/galery/advertisment_popmart.mp4",
    type: "video",
    alt: "Advertisment Popmart",
    title: "Advertisment Popmart",
  },
  {
    src: "/galery/advertisment_storyboard.mp4",
    type: "video",
    alt: "Advertisment Storyboard",
    title: "Advertisment Storyboard",
  },
  {
    src: "/galery/card game animation_1.mp4",
    type: "video",
    alt: "Card Game Animation",
    title: "Card Game Animation",
  },
  // {
  //   src: "/galery/personal_work_universe.mp4",
  //   type: "video",
  //   alt: "Video 4",
  //   title: "Universe",
  // },
  {
    src: "/galery/personal_work_virus.gif",
    type: "image",
    alt: "Personal Work Virus",
    title: "Personal Work Virus",
  },
];

export default function Galery() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeMedia = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedMedia(null);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (selectedMedia) {
      setIsClosing(false);
    }
  }, [selectedMedia]);

  return (
    <div className="bg-background-dark py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden shadow-lg aspect-video group"
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className={`w-full h-auto object-cover rounded-lg ${
                    item.src.endsWith(".gif") ? "gif-pause" : ""
                  }`}
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                  disablePictureInPicture
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-center font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        {selectedMedia && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeMedia}
          >
            <div
              className={`relative w-full max-w-4xl aspect-video transition-all duration-300 ease-out ${
                isClosing ? "animate-fade-out" : "animate-fade-in"
              }`}
            >
              {selectedMedia.type === "image" ? (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  layout="fill"
                  objectFit="contain"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  className="w-full h-full"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                  disablePictureInPicture
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
