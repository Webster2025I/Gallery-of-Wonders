<<<<<<< HEAD
// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/Navbar';

// // We will create the Navbar component in a later step
// // import Navbar from './components/layout/Navbar';

// const App = () => {
//   return (
//     <>
//       <ToastContainer />
//       <Navbar />
//       <main className="py-3">
//         <Outlet />
//       </main>
//     </>
//   );
// };

// export default App;

// // App.jsx
// import React from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/Navbar';

// const App = () => {
//   const location = useLocation();
  
//   // Pages that should NOT have the animated background
//   const noBackgroundPages = ['/login', '/register', '/'];
  
//   // Check if current page should have the animated background
//   const shouldShowBackground = !noBackgroundPages.includes(location.pathname);

//   return (
//     <>
//       <ToastContainer />
//       <Navbar />
//       <main className={`py-3 ${shouldShowBackground ? 'animated-bg' : ''}`}>
//         <Outlet />
//       </main>
      
//       {/* Global background styles */}
//       <style dangerouslySetInnerHTML={{
//         __html: `
//           .animated-bg {
//             min-height: calc(100vh - 80px);
//             position: relative;
//             overflow: hidden;
//           }
          
//           .animated-bg::before {
//             content: '';
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             z-index: -10;
//             pointer-events: none;
//           }
          
//           .animated-bg .morphing-blobs {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             z-index: -5;
//             opacity: 0.4;
//             pointer-events: none;
//           }
          
//           .animated-bg .morph-blob-1 {
//             position: absolute;
//             background: linear-gradient(to right, #9333ea, #4f46e5);
//             width: 24rem;
//             height: 24rem;
//             border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
//             top: -8rem;
//             left: -8rem;
//             animation: morph 15s ease-in-out infinite alternate;
//             filter: blur(50px);
//           }
          
//           .animated-bg .morph-blob-2 {
//             position: absolute;
//             background: linear-gradient(to right, #e11d48, #ec4899);
//             width: 20rem;
//             height: 20rem;
//             border-radius: 30% 70% 40% 60% / 70% 40% 60% 30%;
//             bottom: -6rem;
//             right: -4rem;
//             animation: morph 15s ease-in-out infinite alternate 3s;
//             filter: blur(50px);
//           }
          
//           .animated-bg .morph-blob-3 {
//             position: absolute;
//             background: linear-gradient(to right, #06b6d4, #3b82f6);
//             width: 18rem;
//             height: 18rem;
//             border-radius: 40% 60% 70% 30% / 40% 50% 60% 70%;
//             bottom: 8rem;
//             left: 25%;
//             animation: morph 15s ease-in-out infinite alternate 6s;
//             filter: blur(50px);
//           }
          
//           @keyframes morph {
//             0% { 
//               border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; 
//               transform: rotate(0deg) scale(1) translate(0px, 0px); 
//             }
//             25% { 
//               transform: rotate(45deg) scale(1.05) translate(20px, -20px); 
//             }
//             50% { 
//               border-radius: 30% 70% 40% 60% / 70% 40% 60% 30%; 
//               transform: rotate(90deg) scale(1.1) translate(-20px, 20px); 
//             }
//             75% { 
//               transform: rotate(135deg) scale(1.05) translate(0px, 0px); 
//             }
//             100% { 
//               border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; 
//               transform: rotate(180deg) scale(1) translate(0px, 0px); 
//             }
//           }
//         `
//       }} />
//     </>
//   );
// };

// export default App;

// App.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
=======
import React from 'react';
import { Outlet } from 'react-router-dom';
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';

<<<<<<< HEAD
const App = () => {
  const location = useLocation();
  
  // Pages that should NOT have the animated background
  const noBackgroundPages = ['/login', '/register', '/'];
  
  // Check if current page should have the animated background
  const shouldShowBackground = !noBackgroundPages.includes(location.pathname);

=======
// We will create the Navbar component in a later step
// import Navbar from './components/layout/Navbar';

const App = () => {
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
  return (
    <>
      <ToastContainer />
      <Navbar />
<<<<<<< HEAD
      <main className={`${shouldShowBackground ? 'animated-bg-page' : ''}`}>
        <Outlet />
      </main>
      
      {/* Global background styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .animated-bg-page {
            min-height: calc(100vh - 64px);
            position: relative;
          }
          
          .animated-bg-page::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -10;
            pointer-events: none;
          }
          
          .animated-bg-page .morphing-blobs {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -5;
            opacity: 0.3;
            pointer-events: none;
          }
          
          .animated-bg-page .morph-blob-1 {
            position: absolute;
            background: linear-gradient(to right, #9333ea, #4f46e5);
            width: 24rem;
            height: 24rem;
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            top: -8rem;
            left: -8rem;
            animation: morph 15s ease-in-out infinite alternate;
            filter: blur(60px);
          }
          
          .animated-bg-page .morph-blob-2 {
            position: absolute;
            background: linear-gradient(to right, #e11d48, #ec4899);
            width: 20rem;
            height: 20rem;
            border-radius: 30% 70% 40% 60% / 70% 40% 60% 30%;
            bottom: -6rem;
            right: -4rem;
            animation: morph 15s ease-in-out infinite alternate 3s;
            filter: blur(60px);
          }
          
          .animated-bg-page .morph-blob-3 {
            position: absolute;
            background: linear-gradient(to right, #06b6d4, #3b82f6);
            width: 18rem;
            height: 18rem;
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 70%;
            bottom: 8rem;
            left: 25%;
            animation: morph 15s ease-in-out infinite alternate 6s;
            filter: blur(60px);
          }
          
          @keyframes morph {
            0% { 
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; 
              transform: rotate(0deg) scale(1) translate(0px, 0px); 
            }
            25% { 
              transform: rotate(45deg) scale(1.05) translate(20px, -20px); 
            }
            50% { 
              border-radius: 30% 70% 40% 60% / 70% 40% 60% 30%; 
              transform: rotate(90deg) scale(1.1) translate(-20px, 20px); 
            }
            75% { 
              transform: rotate(135deg) scale(1.05) translate(0px, 0px); 
            }
            100% { 
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; 
              transform: rotate(180deg) scale(1) translate(0px, 0px); 
            }
          }

          .content-container {
            position: relative;
            z-index: 10;
          }

          .glass-card {
            background: rgba(17, 24, 39, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
        `
      }} />
=======
      <main className="py-3">
        <Outlet />
      </main>
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
    </>
  );
};

export default App;