const Footer: React.FC = () => {
    return (
      <div className="mt-12 text-center text-gray-500">
        <p>
          Humans review some saved chats to improve Google AI. To stop this for
          future chats, turn off Gemini Apps Activity.
        </p>
        <div className="mt-2">
          <button className="px-4 py-2 bg-indigo-500 rounded-md text-white">
            Manage Activity
          </button>
        </div>
      </div>
    );
  };
  
  export default Footer;
  