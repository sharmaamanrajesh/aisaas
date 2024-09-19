import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';

const PromptBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-64 right-0 p-4 flex justify-center"> {/* Adjust left to account for sidebar width */}
      {/* Wrapper for the prompt bar that limits its width */}
      <div className="max-w-5xl w-full flex items-center bg-gray-700 rounded-full shadow-md px-6 py-3">
        {/* Left Icon (Microphone) */}
        <FaMicrophone className="text-gray-400 mr-4 text-xl cursor-pointer hover:text-gray-300" />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Message ChatGPT"
          className="flex-grow bg-transparent outline-none text-white placeholder-gray-400"
        />

        {/* Right Icon (Send) */}
        <FaPaperPlane className="text-indigo-500 ml-4 text-xl cursor-pointer hover:text-indigo-400" />
      </div>
    </div>
  );
};

export default PromptBar;
