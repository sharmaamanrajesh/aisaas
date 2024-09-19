import { useUser } from '@clerk/nextjs'; // Import Clerk's useUser hook
import React from 'react';

const Header: React.FC = () => {
  const { user } = useUser(); // Get the logged-in user's information

  return (
    <div className="mb-10">
      {user ? ( /* If user is logged in, show their first name */
        <>
          <h1 className="text-5xl font-bold text-indigo-400">Hello, {user.firstName}</h1>
          <p className="text-2xl mt-2 text-gray-400">How can I help you today?</p>
        </>
      ) : ( /* Fallback if no user is logged in */
        <>
          <h1 className="text-5xl font-bold text-indigo-400">Hello, Guest</h1>
          <p className="text-2xl mt-2 text-gray-400">Please log in to continue</p>
        </>
      )}
    </div>
  );
};

export default Header;
