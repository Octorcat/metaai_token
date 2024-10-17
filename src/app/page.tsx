export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Ensuring the video fills the entire screen */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-10 lg:px-96 text-center"
        style={{ fontFamily: "var(--font-geist-sans)" }}
      >
        {/* Responsive heading size */}
        <h1 className="text-4xl sm:text-6xl lg:text-9xl font-bold mb-4">
          $EYE
        </h1>

        {/* Responsive paragraph size */}
        <p className="text-lg sm:text-2xl lg:text-4xl">
          Why EYE? <br></br>In the ever-evolving world of crypto, timing is everything.
          EYE harnesses cutting-edge AI algorithms to analyze market trends,
          social sentiment, and emerging patterns, giving you the insights you
          need to stay ahead of the curve. With EYE, you’re not just investing;
          you’re joining a community of savvy traders and meme enthusiasts on a
          mission to find the next breakout coin.
        </p>
      </div>

      {/* Responsive footer text */}
      <div className="absolute bottom-5 w-full flex justify-center">
        <p className="text-lg sm:text-2xl lg:text-4xl text-white">CA: coming soon</p>
      </div>
    </div>
  );
}
