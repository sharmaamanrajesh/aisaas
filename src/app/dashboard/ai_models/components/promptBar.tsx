import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';

const PromptBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 p-4">
      <div className="max-w-5xl mx-auto flex items-center bg-gray-700 rounded-full shadow-md px-4 py-2">
        {/* Left Icon (Microphone) */}
        <FaMicrophone className="text-gray-400 mr-4 text-xl cursor-pointer hover:text-gray-300" />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Enter a prompt here"
          className="flex-grow bg-transparent outline-none text-white placeholder-gray-400"
        />

        {/* Right Icon (Paper Plane) */}
        <FaPaperPlane className="text-indigo-500 ml-4 text-xl cursor-pointer hover:text-indigo-400" />
      </div>
    </div>
  );
};

export default PromptBar;
