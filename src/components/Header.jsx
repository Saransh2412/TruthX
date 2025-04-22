// src/components/Header.jsx
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">TruthX</Link>
          <span className="bg-blue-500 text-xs px-2 py-1 rounded ml-2">BETA</span>
        </div>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link to="/articles" className="hover:text-blue-300">Articles</Link></li>
            <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
            <li><Link to="/help" className="hover:text-blue-300">Help</Link></li>
            <li>
              <SignedOut>
                <SignInButton>
                  <button className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-lg">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;