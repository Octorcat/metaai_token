import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Ensuring the video fills the entire screen with a blur effect */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="w-full h-full object-cover filter"
          autoPlay
          loop
          muted
        >
          <source src="/videos/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-10 lg:px-96 text-center"
        style={{ fontFamily: "var(--font-geist-sans)" }}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={500} // Adjust width based on your logo size
          height={100} // Adjust height based on your logo size
          className="mb-4" // Adds spacing between the logo and heading
        />

        {/* Responsive paragraph size */}
        <p className="text-lg sm:text-4xl lg:text-4xl border-4 border-[#286921] rounded-md bg-black bg-opacity-70 p-4">
          Why $EYE? <br></br>In the ever-evolving world of crypto, timing is everything.
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