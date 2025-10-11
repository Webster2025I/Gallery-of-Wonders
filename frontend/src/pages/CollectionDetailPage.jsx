// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useGetCollectionDetailsQuery } from '../redux/api/collectionApiSlice';
// import Loader from '../components/Loader';
// import WorkGrid from '../components/WorkGrid';
// import AnimatedBackground from '../components/AnimatedBackground';

// const CollectionDetailPage = () => {
//   const { id: collectionId } = useParams();
//   const { data: collection, isLoading, error } = useGetCollectionDetailsQuery(collectionId);

//   if (isLoading) {
//     return <div className="flex justify-center mt-20"><Loader /></div>;
//   }
//   if (error || !collection) {
//     return <div className="text-center mt-20 text-red-400">Could not load collection. It may be private or does not exist.</div>;
//   }

//   const userName = collection.user ? collection.user.name : 'A User';
//   const userProfileLink = collection.user ? `/profile/${collection.user._id}` : '#';

//   return (
//     <div className="relative">
//       <AnimatedBackground />
//       <div className="absolute inset-0 bg-black opacity-50">
//     <div className="container mx-auto max-w-5xl p-4 sm:p-8">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-100">{collection.name}</h1>
//         <p className="text-gray-400 mt-2">{collection.description}</p>
//         <p className="text-sm text-gray-500 mt-1">
//           A collection by <Link to={userProfileLink} className="font-semibold text-indigo-400 hover:underline">{userName}</Link>
//         </p>
//       </div>
      
//       {collection.works && collection.works.length > 0 ? (
//         <WorkGrid works={collection.works} />
//       ) : (
//         <p className="text-center text-gray-500">This collection is empty.</p>
//       )}
//     </div>
//     </div>
//     </div>
//   );
// };

// export default CollectionDetailPage;

// CollectionDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetCollectionDetailsQuery } from '../redux/api/collectionApiSlice';
import Loader from '../components/Loader';
import WorkGrid from '../components/WorkGrid';
import AnimatedBackground from '../components/AnimatedBackground';

const CollectionDetailPage = () => {
  const { id: collectionId } = useParams();
  const { data: collection, isLoading, error } = useGetCollectionDetailsQuery(collectionId);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center content-container">
        <Loader />
      </div>
    );
  }
  if (error || !collection) {
    return <div className="text-center mt-20 text-red-400 content-container">Could not load collection. It may be private or does not exist.</div>;
  }

  const userName = collection.user ? collection.user.name : 'A User';
  const userProfileLink = collection.user ? `/profile/${collection.user._id}` : '#';

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <div className="content-container relative z-10 container mx-auto max-w-5xl p-4 sm:p-8">
        <div className="glass-card rounded-xl p-6 sm:p-8 mb-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-100 mb-4">{collection.name}</h1>
            <p className="text-gray-300 text-lg mb-4">{collection.description}</p>
            <p className="text-sm text-gray-400">
              A collection by{' '}
              <Link to={userProfileLink} className="font-semibold text-indigo-400 hover:text-indigo-300">
                {userName}
              </Link>
            </p>
          </div>
        </div>
        
        {collection.works && collection.works.length > 0 ? (
          <WorkGrid works={collection.works} />
        ) : (
          <div className="glass-card rounded-xl p-8 text-center">
            <p className="text-gray-400 text-lg">This collection is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionDetailPage;