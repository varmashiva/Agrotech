import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane as Plant, Sprout, Users, Cloud, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { AuthModal } from './AuthModal';

function Navbar() {
  const { user, signOut } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Plant className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-800">SmartSoil</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-green-600">
              <Sprout className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/soil-analysis" className="flex items-center space-x-1 text-gray-600 hover:text-green-600">
              <Plant className="h-5 w-5" />
              <span>Soil Analysis</span>
            </Link>
            <Link to="/community" className="flex items-center space-x-1 text-gray-600 hover:text-green-600">
              <Users className="h-5 w-5" />
              <span>Community</span>
            </Link>
            <Link to="/weather" className="flex items-center space-x-1 text-gray-600 hover:text-green-600">
              <Cloud className="h-5 w-5" />
              <span>Weather</span>
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center space-x-1 text-gray-600 hover:text-green-600">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </nav>
  );
}

export default Navbar;