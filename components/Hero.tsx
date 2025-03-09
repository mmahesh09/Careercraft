"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import { AnimatedGradientText } from "./ui/AnimatedGradient";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { WobbleCard } from "./ui/WobbleCard";
import { LampContainer } from "./ui/Lamp";
import { FeaturesSection } from "./ui/FeaturesSection";
import { RainbowButton } from "./magicui/rainbow-button";

const Hero = ({ openSearch }: { openSearch: () => void }) => {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowSearch(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openSearch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openSearch]);

  return (
    <div className="relative min-h-screen pb-20 pt-36">
      {/* Search Button */}
      {showSearch && (
        <div className="absolute top-6 right-6 flex items-center space-x-3">
          <button
            onClick={openSearch}
            className="flex items-center space-x-2 rounded-lg border border-white/20 bg-black/20 px-4 py-2 text-white backdrop-blur-md transition hover:bg-white/10"
          >
            <span className="text-sm text-gray-500">Search for Documentation</span>
          </button>
        </div>
      )}

      {/* Spotlight Effects */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      {/* Announcement Badge */}
      <Link href="/about">
        <div className="group relative mx-auto flex w-fit cursor-pointer items-center justify-center rounded-full px-3 py-1 shadow-md transition-shadow duration-500 hover:shadow-lg text-sm">
          <span
            className="absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:250%_100%] p-[0.5px]"
            style={{
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "subtract",
              WebkitClipPath: "padding-box",
            }}
          />
          🎉 <hr className="mx-1 h-3 w-px shrink-0 bg-neutral-500" />
          <AnimatedGradientText className="text-sm font-medium whitespace-nowrap">
            Introducing CareerCraft
          </AnimatedGradientText>
          <ChevronRight className="ml-1 size-3 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </div>
      </Link>

      {/* Main Text Section */}
      <div className="relative z-10 my-20 flex flex-col items-center justify-center text-center">
        <p className="text-xs uppercase tracking-widest text-blue-100">
          Turn Job Descriptions into Opportunities 🚀
        </p>
        <TextGenerateEffect
          words="Extract skills & Generate job descriptions!"
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold mt-4"
        />
      </div>

      {/* Centered Rainbow Button */}
      <div className="flex justify-center items-center mt-8 mb-8">
        <Link href="/keywordextractor">
          <RainbowButton className="px-6 py-3 text-lg font-semibold border border-white/30 shadow-lg hover:shadow-xl transition">
            Try Keyword Extractor
          </RainbowButton>
        </Link>
      </div>

      {/* WobbleCard Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]">
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              From Keywords to Careers – AI That Works for You!
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Transform keywords into careers with AI-powered job descriptions and insights!
            </p>
          </div>
          <Image
            src="/carbon.png"
            width={500}
            height={500}
            alt="linear demo image"
            priority
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Extract, Generate, Inspire.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            "Extract keywords, generate job descriptions, and inspire career growth."
          </p>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Share your Idea with the World!
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Help fellow coders with your idea and grow together!
            </p>
          </div>
        </WobbleCard>
      </div>

      {/* Lamp Section */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 text-center text-4xl font-medium tracking-tight text-white md:text-7xl"
        >
          Get Your Keywords <br /> the right way
        </motion.h1>
      </LampContainer>

      {/* Features Section */}
      <FeaturesSection />
    </div>
  );
};

export default Hero;
