// src/components/SplashScreen.tsx
import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., fetching data, initializing resources)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex items-center justify-center h-screen ${loading ? 'bg-gray-100' : 'hidden'}`}>
      {/* Your splash screen content (e.g., logo, loading animation) goes here */}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default SplashScreen;