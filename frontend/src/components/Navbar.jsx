<<<<<<< HEAD
// import React, { useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { useLogoutMutation } from '../redux/api/usersApiSlice.js';
// import { logout } from '../redux/features/authSlice.js';
// import CreateWorkModal from './CreateWorkModal';

// const Navbar = () => {
//   const { userInfo } = useSelector((state) => state.auth);
  
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCreateModalOpen, setCreateModalOpen] = useState(false);
//   const [keyword, setKeyword] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [logoutApiCall] = useLogoutMutation();

//   const showSearchBar = location.pathname === '/' || location.pathname.startsWith('/search');

//   const logoutHandler = async () => {
//     try {
//       await logoutApiCall().unwrap();
//       dispatch(logout());
//       navigate('/login');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (keyword.trim()) {
//       navigate(`/search/${keyword}`);
//       setKeyword('');
//     } else {
//       navigate('/');
//     }
//   };

//   return (
//     <>
//       <nav className="bg-gray-900 shadow-lg sticky top-0 z-40 border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex-shrink-0">
//               <Link to="/" className="text-2xl font-bold font-serif text-gray-100">
//                 Gallery of Wonders
//               </Link>
//             </div>

//             {showSearchBar && (
//               <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-center">
//                 <div className="max-w-lg w-full lg:max-w-xs">
//                   <form onSubmit={handleSearchSubmit} className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
//                     </div>
//                     <input
//                       type="text"
//                       value={keyword}
//                       onChange={(e) => setKeyword(e.target.value)}
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:bg-gray-700 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                       placeholder="Search"  
//                     />
//                   </form>
//                 </div>
//               </div>
//             )}

//             <div className="hidden md:block">
//               <div className={`ml-4 flex items-center md:ml-6 ${!showSearchBar && 'flex-1 justify-end'}`}>
//                 {userInfo ? (
//                   <div className="flex items-center space-x-4">
//                     <button 
//                       onClick={() => setCreateModalOpen(true)}
//                       className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
//                     >
//                       Create
//                     </button>

//                     <div className="relative">
//                       <button
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         className="flex items-center space-x-2 text-gray-300 hover:text-white"
//                       >
//                         <img src={userInfo.profileImage} alt="profile" className="h-8 w-8 rounded-full object-cover" />
//                         <span className="font-medium">{userInfo.name}</span>
//                         <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
//                       </button>

//                       {isMenuOpen && (
//                         <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5">
//                           <Link to="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" onClick={() => setIsMenuOpen(false)}>My Profile</Link>
//                           <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
//                           <button onClick={logoutHandler} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Logout</button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="flex items-center space-x-2">
//                     <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</Link>
//                     <Link to="/register" className="text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <CreateWorkModal isOpen={isCreateModalOpen} onClose={() => setCreateModalOpen(false)} />
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../redux/api/usersApiSlice.js';
import { logout } from '../redux/features/authSlice.js';
import CreateWorkModal from './CreateWorkModal';

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [logoutApiCall] = useLogoutMutation();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [keyword, setKeyword] = useState('');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.user-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Show search bar only on home and search pages
  const showSearchBar = location.pathname === '/' || location.pathname.startsWith('/search');

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-40 bg-black/50 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold font-serif text-white">
                Gallery of Wonders
              </Link>
            </div>

            {showSearchBar && userInfo && (
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-center">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                    </div>
                    <input
                      type="text"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                      placeholder="Search"
                    />
                  </form>
                </div>
              </div>
            )}

            <div className="hidden md:block">
              <div className={`ml-4 flex items-center md:ml-6 ${(!showSearchBar || !userInfo) && 'flex-1 justify-end'}`}>
                {userInfo ? (
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setCreateModalOpen(true)}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
                    >
                      Create
                    </button>
                    
                    <div className="relative user-menu-container">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMenuOpen(!isMenuOpen);
                        }}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white"
                      >
                        <img 
                          src={userInfo.profileImage} 
                          alt="profile" 
                          className="h-8 w-8 rounded-full object-cover ring-2 ring-transparent group-hover:ring-indigo-500 transition" 
                        />
                        <span className="font-medium">{userInfo.name}</span>
                        <svg 
                          className={`h-5 w-5 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>

                      {isMenuOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-25 border border-gray-700 z-50">
                          <Link 
                            to="/profile" 
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" 
                            onClick={() => setIsMenuOpen(false)}
                          >
                            My Profile
                          </Link>
                          <Link 
                            to="/dashboard" 
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" 
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Dashboard
                          </Link>
                          <button 
                            onClick={logoutHandler} 
                            className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Link 
                      to="/login" 
                      className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link 
                      to="/register" 
                      className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <CreateWorkModal isOpen={isCreateModalOpen} onClose={() => setCreateModalOpen(false)} />
    </>
  );
};

export default Navbar;