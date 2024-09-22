"use client";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [language, setLanguage] = useState("english");

  return (
    <div className="bg-background-dark text-text-light min-h-screen">
      <div className="max-w-7xl mx-auto">
        <main className="flex flex-col items-center">
          <div className="flex gap-5">
            <button
              onClick={() => setLanguage("english")}
              className={`custom-button ${
                language === "english" ? "text-[#75dc75] border-[#75dc75]" : ""
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("chinese")}
              className={`custom-button ${
                language === "chinese" ? "text-[#75dc75] border-[#75dc75]" : ""
              }`}
            >
              Chinese
            </button>
          </div>
          <div className="w-1/2 my-10">
            <Image
              src={`/images/resumer-${
                language === "english" ? "eng" : "cz"
              }.jpg`}
              alt="Resume"
              width={500}
              height={700}
              layout="responsive"
            />
          </div>
          <a
            href={`/images/resumer-${
              language === "english" ? "eng" : "cz"
            }.jpg`}
            download
            className="custom-button"
          >
            Download
          </a>
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
          <p className="font-roboto text-sm tracking-widest">
            © 2024 Xinxin Qin
          </p>
        </footer>
      </div>
    </div>
  );
}
