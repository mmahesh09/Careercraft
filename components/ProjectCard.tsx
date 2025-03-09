"use client";

interface ProjectCardProps {
  title: string;
  githubUrl: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, githubUrl, category }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-3">{category}</p>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
