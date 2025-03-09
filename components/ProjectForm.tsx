"use client";

import { useState } from "react";

interface ProjectFormProps {
  onSubmit: (project: { title: string; githubUrl: string; category: string }) => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !githubUrl || !category) {
      alert("All fields are required.");
      return;
    }

    // Passing only the necessary fields to onSubmit
    onSubmit({ title, githubUrl, category });

    // Reset the form
    setTitle("");
    setGithubUrl("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      <div className="mb-4">
        <label className="block text-gray-900 dark:text-white font-semibold mb-2">Project Title</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project title"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-900 dark:text-white font-semibold mb-2">GitHub URL</label>
        <input
          type="url"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
          placeholder="https://github.com/your-project"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-900 dark:text-white font-semibold mb-2">Category</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g. Web Development"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
      >
        Submit Project
      </button>
    </form>
  );
};

export default ProjectForm;
