"use client";

import { useState } from "react";
import nlp from "compromise";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "@/components/ui/Spotlight";

export default function KeywordExtractor() {
  const [jobDescription, setJobDescription] = useState("");
  const [userSkills, setUserSkills] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [userKeywords, setUserKeywords] = useState<string[]>([]);
  const [missingKeywords, setMissingKeywords] = useState<string[]>([]);
  const [matchScore, setMatchScore] = useState(0);
  
  const extractKeywords = (text: string) => {
    const doc = nlp(text);
    return doc.nouns().out("array") as string[];
  };

  const analyzeMatch = () => {
    if (!jobDescription.trim() || !userSkills.trim()) return;

    const jobKeywords = extractKeywords(jobDescription);
    const userExtractedKeywords = extractKeywords(userSkills);

    setKeywords(jobKeywords);
    setUserKeywords(userExtractedKeywords);

    const missing = jobKeywords.filter((word: string) => !userExtractedKeywords.includes(word));
    setMissingKeywords(missing);

    const matchPercentage = jobKeywords.length > 0 
      ? ((userExtractedKeywords.filter((word: string) => jobKeywords.includes(word)).length / jobKeywords.length) * 100).toFixed(2) 
      : "0";
    setMatchScore(Number(matchPercentage));
  };

  return (
    <div className="relative flex flex-col items-center bg-blue-900 text-white p-6 min-h-screen">
      <Spotlight className="absolute inset-0 w-full h-full opacity-40" />
      <h1 className="text-4xl font-semibold text-center mt-6">Keyword Extractor</h1>
      <p className="text-center text-gray-300 max-w-2xl mt-2">
        Paste a job description and your skills below to analyze keyword matches and improve your resume.
      </p>
      
      <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Paste Job Description</h2>
        <textarea
          className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md"
          rows={4}
          placeholder="Paste job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />

        <h2 className="text-2xl font-semibold text-center mt-4 mb-4">Paste Your Skills</h2>
        <textarea
          className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md"
          rows={4}
          placeholder="Paste your resume or skills here..."
          value={userSkills}
          onChange={(e) => setUserSkills(e.target.value)}
        />

        <button
          className="mt-4 w-full px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition"
          onClick={analyzeMatch}
        >
          Analyze Match
        </button>

        {keywords.length > 0 && (
          <div className="mt-6 bg-gray-900 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-blue-400">Extracted Job Keywords:</h3>
            <p className="text-blue-300">{keywords.join(", ")}</p>

            <h3 className="text-xl font-semibold text-green-400 mt-4">Your Extracted Skills:</h3>
            <p className="text-green-300">{userKeywords.join(", ")}</p>

            {missingKeywords.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-red-400 mt-4">Missing Keywords:</h3>
                <p className="text-red-300">{missingKeywords.join(", ")}</p>
              </div>
            )}

            <p className="mt-4 text-sm text-gray-400">
              Job Match Score: <span className="text-blue-300 font-semibold">{matchScore}%</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
