import React from "react"; // Ensure React is imported
import { cn } from "@/lib/utils";
import {
  IconSearch,
  IconFileText,
  IconPercentage,
  IconUpload,
  IconUsers,
  IconSettings,
  IconRocket,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Smart Keyword Extraction",
      description: "Automatically extract important keywords from job descriptions to tailor your application.",
      icon: <IconSearch size={32} />, // Set size for uniformity
    },
    {
      title: "AI-Powered Job Descriptions",
      description: "Generate job descriptions based on extracted keywords with relevancy percentages.",
      icon: <IconFileText size={32} />,
    },
    {
      title: "Core Match Percentage",
      description: "See how well your profile aligns with job descriptions using AI-generated matching scores.",
      icon: <IconPercentage size={32} />,
    },
    {
      title: "Project Showcase",
      description: "Upload and explore projects to inspire and learn from other users.",
      icon: <IconUpload size={32} />,
    },
    {
      title: "Community Collaboration",
      description: "Connect with other users to discuss projects and share experiences.",
      icon: <IconUsers size={32} />,
    },
    {
      title: "Customization Options",
      description: "Adjust AI settings to refine keyword extraction and job description generation.",
      icon: <IconSettings size={32} />,
    },
    {
      title: "Boost Your Career",
      description: "Use AI-driven insights and project showcases to stand out in job applications.",
      icon: <IconRocket size={32} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
    </div>
  );
};

export { FeaturesSection, Feature };
