import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LikeButton from './LikeButton';
import SaveButton from './SaveButton';
<<<<<<< HEAD
import WorkOptionsMenu from './WorkOptionsMenu';
=======
import WorkOptionsMenu from './WorkOptionsMenu'; // 👈 Import the new component
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190

const WorkCard = ({ work }) => {
  const { userInfo } = useSelector((state) => state.auth);

  const userName = work.user ? work.user.name : 'Unknown Artist';
  const userProfileImage = work.user ? work.user.profileImage : 'https://res.cloudinary.com/dw3dkqiac/image/upload/v1759513698/zqzrken305a14txbfjmv.jpg';
  const userProfileLink = work.user ? `/profile/${work.user._id}` : '#';

<<<<<<< HEAD
  const isOwner = userInfo && work.user && userInfo._id === work.user._id;

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg max-w-xl mx-auto mb-8">
      {/* Card Header */}
      <div className="flex items-center p-4 border-b border-gray-700">
=======
  // Check if the current user is the owner of the work
  const isOwner = userInfo && work.user && userInfo._id === work.user._id;

  return (
    <div className="bg-white border rounded-lg shadow-sm max-w-xl mx-auto mb-8">
      {/* Card Header: User Info */}
      <div className="flex items-center p-4 border-b">
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
        <Link to={userProfileLink}>
          <img src={userProfileImage} alt={userName} className="h-10 w-10 rounded-full object-cover" />
        </Link>
        <div className="ml-3">
<<<<<<< HEAD
          <Link to={userProfileLink} className="text-sm font-semibold text-gray-200 hover:underline">
            {userName}
          </Link>
        </div>
        {isOwner && <WorkOptionsMenu work={work} />}
      </div>

      {/* Card Image */}
=======
          <Link to={userProfileLink} className="text-sm font-semibold text-gray-800 hover:underline">
            {userName}
          </Link>
        </div>
        
        {/* 👇 Add the options menu if the user is the owner */}
        {isOwner && <WorkOptionsMenu work={work} />}
      </div>

      {/* ... (rest of the WorkCard component remains the same) */}
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
      {work.fileUrls && work.fileUrls.length > 0 && (
        <Link to={`/work/${work._id}`}>
          <img src={work.fileUrls[0]} alt={work.title} className="w-full object-cover" />
        </Link>
      )}
<<<<<<< HEAD

      {/* Action Buttons */}
      <div className="p-4 flex items-center space-x-4">
        <LikeButton work={work} />
        <Link to={`/work/${work._id}#comments`} className="text-gray-400 hover:text-indigo-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        </Link>
        <SaveButton workId={work._id} />
      </div>

      {/* Likes and Description */}
      <div className="px-4 pb-4">
        <p className="font-semibold text-gray-200 text-sm">{work.likes.length} likes</p>
        <div className="mt-1 text-sm">
          <Link to={userProfileLink} className="font-semibold text-gray-200 mr-2">{userName}</Link>
          <span className="text-gray-300">{work.description}</span>
=======
      <div className="p-4 flex items-center space-x-4">
        <LikeButton work={work} />
        <Link to={`/work/${work._id}#comments`} className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        </Link>
        <SaveButton workId={work._id} />
      </div>
      <div className="px-4 pb-4">
        <p className="font-semibold text-gray-800 text-sm">{work.likes.length} likes</p>
        <div className="mt-1 text-sm">
          <Link to={userProfileLink} className="font-semibold text-gray-800 mr-2">{userName}</Link>
          <span className="text-gray-600">{work.description}</span>
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
        </div>
        <Link to={`/work/${work._id}#comments`} className="text-sm text-gray-500 mt-2 block hover:underline">
          View all {work.comments.length} comments
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;