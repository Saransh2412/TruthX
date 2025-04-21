function Header() {
    return (
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold">TruthX</span>
            <span className="bg-blue-500 text-xs px-2 py-1 rounded ml-2">BETA</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#how-it-works" className="hover:text-blue-300">How It Works</a></li>
              <li><a href="#" className="hover:text-blue-300">API</a></li>
              <li><a href="#" className="hover:text-blue-300">About</a></li>
              <li><a href="#" className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-lg">Sign In</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  
  