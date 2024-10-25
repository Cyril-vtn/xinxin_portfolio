"use client";

import ProtectedYouTubeVideo from "./components/ProtectedYoutubeVideo";
import YouTube from "react-youtube";

export default function Home() {
  const useProtectedVideo =
    process.env.NEXT_PUBLIC_USE_PROTECTED_VIDEO === "true";
  const videoId = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID;

  return (
    <div className="max-w-7xl mx-auto">
      <main className="flex flex-col items-center">
        {useProtectedVideo ? (
          <ProtectedYouTubeVideo />
        ) : (
          <div className="w-full aspect-w-16 aspect-h-9">
            <YouTube
              videoId={videoId}
              className="w-full aspect-video px-10"
              iframeClassName="w-full h-full"
            />
          </div>
        )}
      </main>

      <footer className="flex flex-col items-center py-20 gap-8">
        <ul className="flex gap-5">
          <li>
            <a
              href="https://www.instagram.com/qinxxin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light hover:text-primary-green transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/xinxin-qin-1ab673253"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f8f8f8] hover:text-[#75dc75] transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="mailto:xq19980000@gmail.com"
              className="text-[#f8f8f8] hover:text-[#75dc75] transition-colors"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
        <p className="font-['Roboto'] text-sm tracking-widest">
          © 2024 Xinxin Qin
        </p>
      </footer>
    </div>
  );
}
