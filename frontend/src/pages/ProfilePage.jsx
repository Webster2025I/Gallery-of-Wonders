// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useGetUserByIdQuery } from '../redux/api/usersApiSlice';
// import { useGetWorksByUserIdQuery } from '../redux/api/worksApiSlice';
// import { useGetCollectionsByUserIdQuery } from '../redux/api/collectionApiSlice';
// import Loader from '../components/Loader';
// import ProfileHeader from '../components/ProfileHeader';
// import WorkGrid from '../components/WorkGrid';
// import CollectionGrid from '../components/CollectionGrid';

// import AnimatedBackground from '../components/AnimatedBackground';

// const ProfilePage = () => {
//   const [activeTab, setActiveTab] = useState('works');
//   const { userId } = useParams();
//   const { userInfo: currentUser } = useSelector((state) => state.auth);

//   const profileUserId = userId || currentUser._id;
//   const isCurrentUser = !userId || userId === currentUser._id;

//   const { data: profileUser, isLoading: isLoadingUser } = useGetUserByIdQuery(profileUserId);
//   const { data: works, isLoading: isLoadingWorks } = useGetWorksByUserIdQuery(profileUserId);
//   const { data: collections, isLoading: isLoadingCollections } = useGetCollectionsByUserIdQuery(profileUserId);

//   if (isLoadingUser || isLoadingWorks || isLoadingCollections) {
//     return <div className="flex justify-center mt-20"><Loader /></div>;
//   }
//   if (!profileUser) {
//     return <div className="text-center text-gray-400 mt-20">User not found.</div>;
//   }

//   return (
//     <div className="relative">
//       <AnimatedBackground />
//       <div className="absolute inset-0 bg-black opacity-50">
//     <div className="container mx-auto max-w-5xl">
//       <ProfileHeader user={profileUser} workCount={works?.length || 0} isCurrentUser={isCurrentUser} />
      
//       <div className="border-b border-gray-700">
//         <div className="flex justify-center space-x-8">
//           <button onClick={() => setActiveTab('works')} className={`py-4 px-2 text-sm font-medium uppercase tracking-wider ${activeTab === 'works' ? 'border-b-2 border-indigo-400 text-gray-100' : 'text-gray-500 hover:text-gray-300'}`}>
//             Works
//           </button>
//           <button onClick={() => setActiveTab('collections')} className={`py-4 px-2 text-sm font-medium uppercase tracking-wider ${activeTab === 'collections' ? 'border-b-2 border-indigo-400 text-gray-100' : 'text-gray-500 hover:text-gray-300'}`}>
//             Collections
//           </button>
//         </div>
//       </div>

//       <div className="p-4 sm:p-8">
//         {activeTab === 'works' && (works && works.length > 0 ? <WorkGrid works={works} /> : <p className="text-center text-gray-500">No works yet.</p>)}
//         {activeTab === 'collections' && (collections && collections.length > 0 ? <CollectionGrid collections={collections} /> : <p className="text-center text-gray-500">No collections yet.</p>)}
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default ProfilePage;

// ProfilePage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetUserByIdQuery } from '../redux/api/usersApiSlice';
import { useGetWorksByUserIdQuery } from '../redux/api/worksApiSlice';
import { useGetCollectionsByUserIdQuery } from '../redux/api/collectionApiSlice';
import Loader from '../components/Loader';
import ProfileHeader from '../components/ProfileHeader';
import WorkGrid from '../components/WorkGrid';
import CollectionGrid from '../components/CollectionGrid';
import AnimatedBackground from '../components/AnimatedBackground';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('works');
  const { userId } = useParams();
  const { userInfo: currentUser } = useSelector((state) => state.auth);

  const profileUserId = userId || currentUser._id;
  const isCurrentUser = !userId || userId === currentUser._id;

  const { data: profileUser, isLoading: isLoadingUser } = useGetUserByIdQuery(profileUserId);
  const { data: works, isLoading: isLoadingWorks } = useGetWorksByUserIdQuery(profileUserId);
  const { data: collections, isLoading: isLoadingCollections } = useGetCollectionsByUserIdQuery(profileUserId);

  if (isLoadingUser || isLoadingWorks || isLoadingCollections) {
    return (
      <div className="min-h-screen flex items-center justify-center content-container">
        <Loader />
      </div>
    );
  }
  if (!profileUser) {
    return <div className="text-center text-gray-400 mt-20 content-container">User not found.</div>;
  }

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <div className="content-container relative z-10 container mx-auto max-w-5xl">
        <ProfileHeader user={profileUser} workCount={works?.length || 0} isCurrentUser={isCurrentUser} />
        
        <div className="glass-card border-b border-gray-700 mx-4 sm:mx-8">
          <div className="flex justify-center space-x-8">
            <button 
              onClick={() => setActiveTab('works')} 
              className={`py-4 px-2 text-sm font-medium uppercase tracking-wider ${
                activeTab === 'works' 
                  ? 'border-b-2 border-indigo-400 text-gray-100' 
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Works
            </button>
            <button 
              onClick={() => setActiveTab('collections')} 
              className={`py-4 px-2 text-sm font-medium uppercase tracking-wider ${
                activeTab === 'collections' 
                  ? 'border-b-2 border-indigo-400 text-gray-100' 
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Collections
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-8">
          {activeTab === 'works' && (
            works && works.length > 0 
              ? <WorkGrid works={works} /> 
              : <p className="text-center text-gray-400 glass-card p-8 rounded-xl">No works yet.</p>
          )}
          {activeTab === 'collections' && (
            collections && collections.length > 0 
              ? <CollectionGrid collections={collections} /> 
              : <p className="text-center text-gray-400 glass-card p-8 rounded-xl">No collections yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;