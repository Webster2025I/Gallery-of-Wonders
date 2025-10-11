// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { useLoginMutation } from '../redux/api/usersApiSlice';
// import { setCredentials } from '../redux/features/authSlice';
// import Loader from '../components/Loader';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [login, { isLoading }] = useLoginMutation();
//   const { userInfo } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (userInfo) navigate('/');
//   }, [navigate, userInfo]);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await login({ email, password }).unwrap();
//       dispatch(setCredentials({ ...res }));
//       navigate('/');
//       toast.success('Login successful!');
//     } catch (err) {
//       toast.error(err?.data?.message || err.error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100 font-serif">
//           Gallery of Wonders
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-400">
//           Sign in to your account
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-gray-800 py-8 px-4 shadow-xl rounded-xl sm:px-10 border border-gray-700">
//           <form className="space-y-6" onSubmit={submitHandler}>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email address</label>
//               <div className="mt-1">
//                 <input id="email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-400">Password</label>
//               <div className="mt-1">
//                 <input id="password" name="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//               </div>
//             </div>

//             <div>
//               <button type="submit" disabled={isLoading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
//                 {isLoading ? 'Signing in...' : 'Sign in'}
//               </button>
//             </div>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-600" /></div>
//               <div className="relative flex justify-center text-sm"><span className="px-2 bg-gray-800 text-gray-500">New to the gallery?</span></div>
//             </div>

//             <div className="mt-6">
//               <Link to="/register" className="w-full flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700">
//                 Create new account
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useLoginMutation } from '../redux/api/usersApiSlice';
import { setCredentials } from '../redux/features/authSlice';

// Loader component for standalone functionality
const Loader = () => (
  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
);

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const canvasRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) navigate('/');
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
      toast.success('Login successful!');
    } catch (err) {
      toast.error(err?.data?.message || err.error || 'Login failed. Please check your credentials.');
    }
  };

  // Effect for the interactive particle background
  useEffect(() => {
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
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden flex items-center justify-center p-4 font-sans">
       <style>
        {`
          /* Fix for browser autofill styles in dark mode */
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px #1f2937 inset !important; /* bg-gray-800 to match panel */
            -webkit-text-fill-color: #f9fafb !important; /* text-gray-50 */
            transition: background-color 5000s ease-in-out 0s;
            caret-color: #f9fafb !important;
          }
        `}
      </style>
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50"></canvas>
      
      <div className="relative z-10 w-full max-w-4xl flex bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
        
        <div className="w-1/2 bg-gray-900 hidden md:flex flex-col justify-between p-10 text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600 rounded-full opacity-30 filter blur-2xl"></div>
          <div className="absolute bottom-10 -left-10 w-40 h-40 bg-purple-600 rounded-full opacity-30 filter blur-2xl"></div>
          
          <div className="z-10">
            <h1 className="text-4xl font-bold font-serif leading-tight">Gallery of Wonders</h1>
            <p className="text-lg leading-relaxed mt-4 text-gray-300">
              Where creativity finds its eternal stage. Join a community that celebrates every form of art.
            </p>
          </div>
          <div className="z-10 text-xs text-gray-500">© 2025 Gallery of Wonders. All rights reserved.</div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="font-bold text-4xl text-white">Login</h2>
          <p className="text-gray-400 mt-4 mb-8">Welcome back! Please sign in to continue.</p>
          
          <form onSubmit={submitHandler} className="space-y-8">
            <div className="relative">
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full bg-transparent text-gray-200 border-b-2 border-gray-600 pt-4 pb-2 focus:outline-none focus:border-indigo-500 transition-all placeholder-transparent"
                placeholder="Email Address"
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 -top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-indigo-400 peer-focus:text-sm"
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full bg-transparent text-gray-200 border-b-2 border-gray-600 pt-4 pb-2 focus:outline-none focus:border-indigo-500 transition-all placeholder-transparent"
                placeholder="Password"
              />
              <label 
                htmlFor="password" 
                className="absolute left-0 -top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-indigo-400 peer-focus:text-sm"
              >
                Password
              </label>
            </div>

            <div className="flex justify-end text-sm">
              <a href="#" className="text-indigo-400 hover:text-indigo-300 hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition duration-300 disabled:bg-indigo-800 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading && <Loader />}
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-600" /></div>
              <div className="relative flex justify-center text-sm"><span className="px-2 bg-gray-800 text-gray-500">Or continue with</span></div>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <button className="h-12 w-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-200 hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.223 0-9.641-3.657-11.28-8.584l-6.521 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.021 35.846 44 30.138 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>
              </button>
              <button className="h-12 w-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-200 hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238 .195 2.238 .195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
              </button>
            </div>
            
            <div className="mt-8 text-center text-sm">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-indigo-400 hover:text-indigo-300 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

