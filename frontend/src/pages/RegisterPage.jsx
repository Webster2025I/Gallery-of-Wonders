<<<<<<< HEAD
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';

// import { useRegisterMutation } from '../redux/api/usersApiSlice';
// import { setCredentials } from '../redux/features/authSlice';
// import Loader from '../components/Loader';

// const RegisterPage = () => {
//   // State for form inputs
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   // Redux and Router hooks
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Get the register mutation from RTK Query
//   const [register, { isLoading }] = useRegisterMutation();

//   // Get user info from the global state
//   const { userInfo } = useSelector((state) => state.auth);

//   // Redirect if user is already logged in
//   useEffect(() => {
//     if (userInfo) {
//       navigate('/');
//     }
//   }, [navigate, userInfo]);

//   // Handler for form submission
//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match');
//       return;
//     }

//     try {
//       const res = await register({ name, email, password }).unwrap();
//       dispatch(setCredentials({ ...res }));
//       navigate('/');
//       toast.success('Registration successful!');
//     } catch (err) {
//       toast.error(err?.data?.message || err.error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-serif">
//           Gallery of Wonders
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Create a new account
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={submitHandler}>
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Name
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email address
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Confirm Password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type="password"
//                   required
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
//               >
//                 {isLoading ? 'Registering...' : 'Register'}
//               </button>
//               {isLoading && <div className="flex justify-center mt-4"><Loader /></div>}
//             </div>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Already have an account?{' '}
//               <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRegisterMutation } from '../redux/api/usersApiSlice';
import { setCredentials } from '../redux/features/authSlice';

// Loader component
const Loader = () => (
  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
);

const RegisterPage = () => {
=======
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useRegisterMutation } from '../redux/api/usersApiSlice';
import { setCredentials } from '../redux/features/authSlice';
import Loader from '../components/Loader';

const RegisterPage = () => {
  // State for form inputs
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

<<<<<<< HEAD
  const canvasRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) navigate('/');
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
=======
  // Redux and Router hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the register mutation from RTK Query
  const [register, { isLoading }] = useRegisterMutation();

  // Get user info from the global state
  const { userInfo } = useSelector((state) => state.auth);

  // Redirect if user is already logged in
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  // Handler for form submission
  const submitHandler = async (e) => {
    e.preventDefault();

>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
<<<<<<< HEAD
=======

>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
      toast.success('Registration successful!');
    } catch (err) {
<<<<<<< HEAD
      toast.error(err?.data?.message || err.error || 'Registration failed. Please try again.');
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
            <h1 className="text-4xl font-bold font-serif leading-tight">Join the Gallery</h1>
            <p className="text-lg leading-relaxed mt-4 text-gray-300">
              Create your account to start sharing your work and discover amazing art from creators around the world.
            </p>
          </div>
          <div className="z-10 text-xs text-gray-500">© 2025 Gallery of Wonders. All rights reserved.</div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="font-bold text-4xl text-white">Sign Up</h2>
          <p className="text-gray-400 mt-4 mb-8">Let's get you started with a new account.</p>
          
          <form onSubmit={submitHandler} className="space-y-8">
            <div className="relative">
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="peer w-full bg-transparent text-gray-200 border-b-2 border-gray-600 pt-4 pb-2 focus:outline-none focus:border-indigo-500 transition-all placeholder-transparent"
                placeholder="Full Name"
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 -top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-indigo-400 peer-focus:text-sm"
              >
                Full Name
              </label>
            </div>

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

            <div className="relative">
              <input
                id="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="peer w-full bg-transparent text-gray-200 border-b-2 border-gray-600 pt-4 pb-2 focus:outline-none focus:border-indigo-500 transition-all placeholder-transparent"
                placeholder="Confirm Password"
              />
              <label 
                htmlFor="confirmPassword" 
                className="absolute left-0 -top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-indigo-400 peer-focus:text-sm"
              >
                Confirm Password
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition duration-300 disabled:bg-indigo-800 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading && <Loader />}
              {isLoading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-8 text-center text-sm">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-indigo-400 hover:text-indigo-300 hover:underline">
                Sign In
=======
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-serif">
          Gallery of Wonders
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Create a new account
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isLoading ? 'Registering...' : 'Register'}
              </button>
              {isLoading && <div className="flex justify-center mt-4"><Loader /></div>}
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default RegisterPage;

=======
export default RegisterPage;
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
