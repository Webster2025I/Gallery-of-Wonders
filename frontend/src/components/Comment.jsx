import React from 'react';
import { Link } from 'react-router-dom';

const Comment = ({ comment }) => {
<<<<<<< HEAD
=======
  // Defensive check for populated user data
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
  const userName = comment.user ? comment.user.name : 'Anonymous';
  const userProfileImage = comment.user ? comment.user.profileImage : '/default-avatar.png';
  const userProfileLink = comment.user ? `/profile/${comment.user._id}` : '#';

  return (
    <div className="flex items-start space-x-3 my-4">
      <Link to={userProfileLink}>
        <img
          src={userProfileImage}
          alt={userName}
          className="h-9 w-9 rounded-full object-cover"
        />
      </Link>
      <div className="flex-1">
<<<<<<< HEAD
        <div className="bg-gray-700 rounded-xl p-3">
          <Link to={userProfileLink} className="font-semibold text-gray-100 mr-2 hover:underline text-sm">
            {userName}
          </Link>
          <p className="text-gray-300 text-sm">{comment.text}</p>
        </div>
=======
        <p className="text-sm">
          <Link to={userProfileLink} className="font-semibold text-gray-800 mr-2">
            {userName}
          </Link>
          <span className="text-gray-600">{comment.text}</span>
        </p>
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
      </div>
    </div>
  );
};

export default Comment;