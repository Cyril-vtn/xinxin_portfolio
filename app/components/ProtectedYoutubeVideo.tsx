"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const ProtectedYouTubeVideo = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const videoId = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID;

  const handleSubmit = (e: React.FormEvent) => {
    console.log(
      "Stored password:",
      process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_PASSWORD
    );
    console.log("Entered password:", password);
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="w-full aspect-w-16 aspect-h-9">
      {!isAuthenticated ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center h-full"
        >
          <h2 className="text-lg font-roboto mb-4 text-center text-text-light">
            Enter the password to access the video
          </h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 p-2 border rounded focus:outline-none focus:border-primary-green"
          />
          <button type="submit" className="custom-button">
            Submit
          </button>
        </form>
      ) : (
        <YouTube
          videoId={videoId}
          className="w-full aspect-video px-10"
          iframeClassName="w-full h-full"
        />
      )}
    </div>
  );
};

export default ProtectedYouTubeVideo;
