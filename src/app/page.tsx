import Image from "next/image";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa"; // Import icons from react-icons

// Reusable component for sections with background video
const SectionWithVideoBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
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
        {children}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* First Section with Logo and Text */}
      <SectionWithVideoBackground>
        <Image
          src="/logo.png"
          alt="Logo"
          width={500} // Adjust width based on your logo size
          height={100} // Adjust height based on your logo size
          className="mb-4"
        />
        <p className="text-lg sm:text-4xl lg:text-4xl border-4 border-[#286921] rounded-md bg-black bg-opacity-70 p-4">
          Why $EYE? <br />In the ever-evolving world of crypto, timing is everything. 
          EYE harnesses cutting-edge AI algorithms to analyze market trends, 
          social sentiment, and emerging patterns, giving you the insights you 
          need to stay ahead of the curve. With EYE, you’re not just investing; 
          you’re joining a community of savvy traders and meme enthusiasts on a 
          mission to find the next breakout coin.
        </p>
      </SectionWithVideoBackground>

      {/* Second Section with Heading */}
      <SectionWithVideoBackground>
        <h1 className="sm:text-6xl lg:text-9xl mb-8">
          Join the waiting list, coming soon
        </h1>
      </SectionWithVideoBackground>

      {/* Footer Section with CA and Social Icons */}
      <div className="absolute bottom-5 w-full flex flex-col items-center z-20">
        {/* CA Text */}
        <p className="text-lg sm:text-2xl lg:text-4xl text-white mb-2">
          CA: coming soon
        </p>

        {/* Social media buttons */}
        <div className="flex space-x-6 mt-2">
          <a
            href="https://x.com/aeyexyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 text-4xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://t.me/aeyexyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 text-4xl"
          >
            <FaTelegramPlane /> {/* Telegram icon */}
          </a>
        </div>
      </div>
    </>
  );
}
