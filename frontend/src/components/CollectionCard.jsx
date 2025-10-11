import React from 'react';
import { Link } from 'react-router-dom';

const CollectionCard = ({ collection }) => {
  const userName = collection.user ? collection.user.name : 'A User';
  const userProfileImage = collection.user ? collection.user.profileImage : 'https://res.cloudinary.com/dw3dkqiac/image/upload/v1759513698/zqzrken305a14txbfjmv.jpg';
  const userProfileLink = collection.user ? `/profile/${collection.user._id}` : '#';

  const workCount = collection.works.length;
<<<<<<< HEAD
  const worksPreview = collection.works.slice(0, 4);

=======

  // Get the first 4 works for the grid preview
  const worksPreview = collection.works.slice(0, 4);

  // Pad the array with placeholders if there are fewer than 4 works
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
  while (worksPreview.length < 4) {
    worksPreview.push({ isPlaceholder: true });
  }

  return (
<<<<<<< HEAD
    <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
      {/* Card Header: Creator Info */}
      <div className="flex items-center p-4 border-b border-gray-700">
=======
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
      {/* Card Header: Creator Info */}
      <div className="flex items-center p-4 border-b">
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
        <Link to={userProfileLink}>
          <img
            src={userProfileImage}
            alt={userName}
<<<<<<< HEAD
            className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-600"
          />
        </Link>
        <div className="ml-3">
          <Link to={userProfileLink} className="text-sm font-semibold text-gray-200 hover:underline">
=======
            className="h-10 w-10 rounded-full object-cover"
          />
        </Link>
        <div className="ml-3">
          <Link to={userProfileLink} className="text-sm font-semibold text-gray-800 hover:underline">
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
            {userName}
          </Link>
        </div>
      </div>

<<<<<<< HEAD
      {/* Image Preview */}
      <Link to={`/collection/${collection._id}`} className="block aspect-square">
        {workCount === 1 && collection.works[0].fileUrls?.length > 0 ? (
=======
      {/* 👇 UPDATED: Conditional Image Preview */}
      <Link to={`/collection/${collection._id}`} className="block aspect-square">
        {workCount === 1 && collection.works[0].fileUrls?.length > 0 ? (
          // Layout for a SINGLE work in the collection
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
          <img 
            src={collection.works[0].fileUrls[0]} 
            alt="collection preview" 
            className="w-full h-full object-cover" 
          />
        ) : (
<<<<<<< HEAD
          <div className="grid grid-cols-2 grid-rows-2 h-full w-full bg-gray-900">
            {worksPreview.map((work, index) => (
              <div key={index} className="bg-gray-700 border border-gray-900">
=======
          // Layout for MULTIPLE works (2x2 grid)
          <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-1">
            {worksPreview.map((work, index) => (
              <div key={index} className="bg-gray-100">
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
                {!work.isPlaceholder && work.fileUrls && work.fileUrls.length > 0 && (
                  <img
                    src={work.fileUrls[0]}
                    alt="collection item"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </Link>

      {/* Card Footer: Collection Details */}
<<<<<<< HEAD
      <div className="px-4 py-3 bg-gray-800">
        <h3 className="font-bold text-gray-100 truncate">{collection.name}</h3>
        <p className="text-sm text-gray-400">{workCount} items</p>
=======
      <div className="px-4 py-3">
        <h3 className="font-bold text-gray-800">{collection.name}</h3>
        <p className="text-sm text-gray-500">{collection.works.length} items</p>
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
      </div>
    </div>
  );
};

export default CollectionCard;