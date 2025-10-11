// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { useGetWorksQuery } from '../redux/api/worksApiSlice';
// import Loader from '../components/Loader';
// import WorkCard from '../components/WorkCard';
// import FilterBar from '../components/FilterBar';

// const HomePage = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   const [category, setCategory] = useState('');
//   const { data: works, isLoading, error } = useGetWorksQuery({ category });

//   const renderWorksFeed = () => (
//     <div>
//       <h1 className="text-3xl font-bold text-center text-gray-100 mb-4">Discover Works</h1>
//       <FilterBar selectedCategory={category} setSelectedCategory={setCategory} />
//       {isLoading ? (
//         <div className="flex justify-center"><Loader /></div>
//       ) : error ? (
//         <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg relative" role="alert">
//           <strong className="font-bold">Error: </strong>
//           <span className="block sm:inline">{error?.data?.message || error.error}</span>
//         </div>
//       ) : (
//         works.map((work) => <WorkCard key={work._id} work={work} />)
//       )}
//     </div>
//   );

//   const renderGuestLandingPage = () => (
//     <div className="text-center flex flex-col items-center justify-center min-h-[70vh]">
//       <h1 className="text-5xl font-extrabold text-gray-100 mb-4 font-serif">Welcome to the Gallery of Wonders</h1>
//       <p className="text-lg text-gray-400 max-w-2xl mb-8">
//         A timeless stage where every creator's legendary act can be captured, celebrated, and preserved forever. Join our community to showcase your art, photography, writing, and more.
//       </p>
//       <div className="flex space-x-4">
//         <Link to="/register" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-transform hover:scale-105">
//           Get Started
//         </Link>
//         <Link to="/login" className="px-8 py-3 bg-gray-700 text-gray-200 font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-transform hover:scale-105">
//           Sign In
//         </Link>
//       </div>
//     </div>
//   );

//   return (
//     <div className="container mx-auto mt-8 px-4">
//       {userInfo ? renderWorksFeed() : renderGuestLandingPage()}
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetWorksQuery } from '../redux/api/worksApiSlice';
import Loader from '../components/Loader';
import WorkCard from '../components/WorkCard';
import FilterBar from '../components/FilterBar';

const HomePage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [category, setCategory] = useState('');
  const { data: works, isLoading, error } = useGetWorksQuery({ category });
  const canvasRef = useRef(null);

  // Effect for the interactive particle background (only for guest view)
  useEffect(() => {
    // Only run the animation if the user is not logged in
    if (userInfo) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.random() * 0.5 - 0.25,
          vy: Math.random() * 0.5 - 0.25,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    setCanvasSize();
    createParticles();
    animate();

    const handleResize = () => {
      setCanvasSize();
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [userInfo]); // Rerun effect if user logs in or out

  const renderWorksFeed = () => (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-100 mb-4">Discover Works</h1>
      <FilterBar selectedCategory={category} setSelectedCategory={setCategory} />
      {isLoading ? (
        <div className="flex justify-center mt-16"><Loader /></div>
      ) : error ? (
        <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg relative text-center" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error?.data?.message || error.error}</span>
        </div>
      ) : (
        works.map((work) => <WorkCard key={work._id} work={work} />)
      )}
    </div>
  );

  const renderGuestLandingPage = () => (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 text-center">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50"></canvas>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 font-serif leading-tight">
          Welcome to the Gallery of Wonders
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          A timeless stage where every creator's legendary act can be captured, celebrated, and preserved forever.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/register" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-transform hover:scale-105 duration-300">
            Get Started
          </Link>
          <Link to="/login" className="px-8 py-3 bg-black/40 backdrop-blur-md text-gray-200 font-semibold rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-transform hover:scale-105 duration-300">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );

  // Main component render logic
  return userInfo ? renderWorksFeed() : renderGuestLandingPage();
};

export default HomePage;
