"use client"
import { usePathname } from 'next/navigation';
import PromptBar from '../ai_models/components/promptBar'; // Adjust path as needed
import 'src/app/globals.css';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <main className="max-w-5xl mx-auto">{children}</main>

      {/* Conditionally Render PromptBar only on /ai_models/gemini */}
      {pathname === '/ai_models/gemini' && <PromptBar />}
    </div>
  );
};

export default Layout;
