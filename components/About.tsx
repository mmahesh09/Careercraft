import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black text-gray-900 dark:text-white p-10">
      {/* Heading Section */}
      <h1 className="text-5xl font-extrabold mb-6 text-center">🚀 Welcome to CareerCraft</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-3xl">
        **AI-powered job search assistance** to help you craft job descriptions, optimize resumes, and stand out in the competitive job market.
      </p>

      {/* Hero Section */}
      <div className="mt-10 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-4">🔍 Job Hunting Made Smarter</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Struggling to tailor job applications? **CareerCraft** simplifies the process with AI-driven insights, making sure your resume and job descriptions match **industry expectations.**
        </p>
      </div>

      {/* Feature Highlights */}
      <div className="mt-12 w-full max-w-5xl">
        <h2 className="text-3xl font-semibold text-center mb-6">✨ Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            icon="📌"
            title="Keyword Extraction"
            description="AI analyzes job descriptions, extracting must-have skills, experience, and buzzwords."
          />
          <FeatureCard
            icon="📝"
            title="AI-Powered Job Descriptions"
            description="Generate job descriptions tailored to your skills with a match percentage."
          />
          <FeatureCard
            icon="📂"
            title="Resume & Application Matching"
            description="Compare resumes against job descriptions and receive real-time optimization tips."
          />
          <FeatureCard
            icon="🎯"
            title="Project Showcasing"
            description="Upload and showcase projects to help job seekers gain insights and inspiration."
          />
          <FeatureCard
            icon="🛠"
            title="Industry-Specific Templates"
            description="Access ready-made job application templates across different industries."
          />
        </div>
      </div>

      {/* Why Choose CareerCraft? */}
      <div className="mt-16 text-center max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">🌟 Why CareerCraft?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Traditional job-search platforms help you find jobs, **CareerCraft helps you land them!** 
          Our AI-driven approach **eliminates guesswork** and ensures your applications are **optimized for success.**
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12">
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
          Ready to **take your job search to the next level?** Join the CareerCraft revolution today! 🚀
        </p>
        <a
          href="/signup"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Get Started Now
        </a>
      </div>
    </div>
  );
};

/** Feature Card Component */
const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg">
    <h3 className="text-xl font-semibold mb-2 flex items-center">
      <span className="text-2xl mr-2">{icon}</span> {title}
    </h3>
    <p className="text-gray-700 dark:text-gray-400">{description}</p>
  </div>
);

export default About;
