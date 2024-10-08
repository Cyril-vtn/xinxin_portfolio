"use client";

import ProtectedYouTubeVideo from "./components/ProtectedYoutubeVideo";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <main className="flex flex-col items-center">
        <ProtectedYouTubeVideo />
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
