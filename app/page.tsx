import Image from "next/image";
import HeroSection from "./home/Herosection";
import Posts from "./home/Posts";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <Posts />
    </main>
  );
}
