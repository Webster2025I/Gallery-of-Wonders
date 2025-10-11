import React from 'react';
import { Link } from 'react-router-dom';

const CollectionCard = ({ collection }) => {
  const userName = collection.user ? collection.user.name : 'A User';
  const userProfileImage = collection.user ? collection.user.profileImage : 'https://res.cloudinary.com/dw3dkqiac/image/upload/v1759513698/zqzrken305a14txbfjmv.jpg';
  const userProfileLink = collection.user ? `/profile/${collection.user._id}` : '#';

  const workCount = collection.works.length;
  const worksPreview = collection.works.slice(0, 4);

  while (worksPreview.length < 4) {
    worksPreview.push({ isPlaceholder: true });
  }

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
      {/* Card Header: Creator Info */}
      <div className="flex items-center p-4 border-b border-gray-700">
        <Link to={userProfileLink}>
          <img
            src={userProfileImage}
            alt={userName}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-600"
          />
        </Link>
        <div className="ml-3">
          <Link to={userProfileLink} className="text-sm font-semibold text-gray-200 hover:underline">
            {userName}
          </Link>
        </div>
      </div>

      {/* Image Preview */}
      <Link to={`/collection/${collection._id}`} className="block aspect-square">
        {workCount === 1 && collection.works[0].fileUrls?.length > 0 ? (
          <img 
            src={collection.works[0].fileUrls[0]} 
            alt="collection preview" 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="grid grid-cols-2 grid-rows-2 h-full w-full bg-gray-900">
            {worksPreview.map((work, index) => (
              <div key={index} className="bg-gray-700 border border-gray-900">
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
      <div className="px-4 py-3 bg-gray-800">
        <h3 className="font-bold text-gray-100 truncate">{collection.name}</h3>
        <p className="text-sm text-gray-400">{workCount} items</p>
      </div>
    </div>
  );
};

export default CollectionCard;