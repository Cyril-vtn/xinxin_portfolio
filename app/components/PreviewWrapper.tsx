"use client";

import { useState, useEffect } from "react";

export default function PreviewWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPreview, setShowPreview] = useState(true);

  useEffect(() => {
    const handleInteraction = () => {
      const preview = document.getElementById("preview");
      if (preview) {
        preview.classList.add("hide-with-animation");
        setTimeout(() => setShowPreview(false), 2000);
      }
    };

    document.addEventListener("keydown", handleInteraction);
    document.addEventListener("click", handleInteraction);

    return () => {
      document.removeEventListener("keydown", handleInteraction);
      document.removeEventListener("click", handleInteraction);
    };
  }, []);

  return (
    <>
      {showPreview && (
        <div
          id="preview"
          className="fixed inset-0 bg-text-light z-50 flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-cover"
              src="/video/Portfolio trailer web.mp4"
              autoPlay
              loop
              muted
            />
            <div className="absolute bottom-[5%] right-[3%] text-footer-text">
              <h1 className="font-['AO_Mireille'] text-[clamp(2rem,5vw,7rem)]">
                Xinxin Qin
              </h1>
              <p className="font-['AO_Mireille'] text-[clamp(15px,1vw,2rem)] text-right">
                Animation artist
              </p>
            </div>
            <div className="absolute bottom-[3%] right-1/2 transform translate-x-1/2 text-footer-text">
              <span className="font-ao-mireille text-base inline-block animate-pulse">
                Press any key
              </span>
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
