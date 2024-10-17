export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2"
        autoPlay
        loop
        muted
      >
        <source src="/videos/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-96" style={{ fontFamily: 'var(--font-geist-sans)' }}>
        <h1 className="text-9xl font-bold mb-4">$EYE</h1>
        <p className="text-4xl">Why EYE? In the ever-evolving world of crypto, timing is everything. EYE harnesses cutting-edge AI algorithms to analyze market trends, social sentiment, and emerging patterns, giving you the insights you need to stay ahead of the curve. With EYE, you’re not just investing; you’re joining a community of savvy traders and meme enthusiasts on a mission to find the next breakout coin.</p>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center">
        <p className="text-4xl text-white">CA: coming soon</p>
      </div>
    </div>
  );
}
