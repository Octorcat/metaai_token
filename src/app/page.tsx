import Image from "next/image";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa"; // Import icons from react-icons

// Reusable component for sections with background video or image
const SectionWithBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Image or Video background */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* If you want to switch to image, just uncomment and use img */}
        {/* <img
          src="/images/background1.jpg"  // Path to your image
          alt="Background"
          className="w-full h-full object-cover"
        /> */}
        {/* Alternatively, you can use a video like this */}
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
      <SectionWithBackground>
        <Image
          src="/logo.png"
          alt="Logo"
          width={500} // Adjusted for better responsiveness
          height={120}
          className="mb-4"
        />
        <p className="text-lg sm:text-2xl lg:text-4xl border-4 border-[#3061a1] rounded-3xl bg-black bg-opacity-70 p-4">
          Why $MetAI? <br />
          MetAI is your ultimate companion for navigating the dynamic Solana memecoin market. Powered by advanced machine learning algorithms, this bot analyzes vast amounts of data from social media, trading volumes, and price movements to identify emerging trends in real-time.
        </p>
      </SectionWithBackground>

      {/* Second Section with Heading and CA */}
      <SectionWithBackground>
        <h1 className="text-4xl sm:text-6xl lg:text-8xl mb-8">
          Follow our socials to find out more
        </h1>

        {/* Social media buttons (Twitter, Telegram, Pump.fun) */}
        <div className="flex space-x-4 sm:space-x-6 mt-4">
          {/* Twitter Button */}
          <a
            href="https://x.com/metaifun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-blue-400"
          >
            <FaTwitter className="text-3xl sm:text-4xl mb-2" /> {/* Twitter Icon */}
            <span className="text-lg sm:text-xl">Twitter</span> {/* Twitter Text */}
          </a>

          {/* Telegram Button */}
          <a
            href="https://t.me/metaifun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-blue-400"
          >
            <FaTelegramPlane className="text-3xl sm:text-4xl mb-2 " /> {/* Telegram Icon */}
            <span className="text-lg sm:text-xl">Telegram</span> {/* Telegram Text */}
          </a>

          {/* Pump.fun Button */}
          <a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-blue-400"
          >
            <Image
              src="/images/pump-icon.png" // Your custom PNG icon path
              alt="Pump.fun"
              width={40} // Adjust based on your icon size
              height={40}
              className="mb-2"
            />
            <span className="text-lg sm:text-xl">Pump.fun</span> {/* Pump.fun Text */}
          </a>
        </div>

        {/* CA Text - Moved to the second section */}
        <div className="mt-6">
          <p className="text-lg sm:text-2xl lg:text-4xl text-white">
            CA: coming soon
          </p>
        </div>
      </SectionWithBackground>
    </>
  );
}
