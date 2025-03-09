"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectSection"; // Import the ProjectsSection component
import Footer from "@/components/Footer"; // Ensure correct import

const Page = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const openFeedback = () => setIsFeedbackOpen(true);
  const closeFeedback = () => setIsFeedbackOpen(false);

  const openSearch = () => {
    console.log("Search opened");
  };

  return (
    <main className="relative bg-black-100 flex justify-center items-center min-h-screen">
      <div className="max-w-7xl w-full">
        {/* Hero Section */}
        <Hero openSearch={openSearch} />

        {/* Navbar */}
        <Navbar openSearch={openSearch} openFeedback={openFeedback} />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
};

export default Page;
