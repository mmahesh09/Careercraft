"use client";

import { useState } from "react";

interface FeedbackFormProps {
  onClose: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onClose }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Feedback Submitted: ${feedback}`);
    setFeedback("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> {/* Modal container */}
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Feedback Form</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-red-400">
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg"
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
