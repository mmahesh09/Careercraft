"use client";
import { useState } from "react";
import FeedbackForm from "@/components/Feedbackform";

export default function FeedbackPage() {
  const [isOpen, setIsOpen] = useState(true); // Initially open

  const closeFeedback = () => {
    setIsOpen(false); // Close when called
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      {isOpen && <FeedbackForm onClose={closeFeedback} />} {/* ✅ Pass onClose prop */}
    </div>
  );
}
