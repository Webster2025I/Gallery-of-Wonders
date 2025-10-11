import React from 'react';
import { Link } from 'react-router-dom';

const WorkGridItem = ({ work }) => {
<<<<<<< HEAD
  const hasImage = work && work.fileUrls && work.fileUrls.length > 0 && work.fileUrls[0];

  return (
    <Link to={`/work/${work._id}`} className="relative aspect-square group bg-gray-800 overflow-hidden">
=======
  // Check if there's a valid, non-empty image URL to display
  const hasImage = work && work.fileUrls && work.fileUrls.length > 0 && work.fileUrls[0];

  return (
    <Link to={`/work/${work._id}`} className="relative aspect-square group bg-gray-200">
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
      {hasImage ? (
        <img
          src={work.fileUrls[0]}
          alt={work.title}
<<<<<<< HEAD
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"></path></svg>
        </div>
      )}
      
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white flex space-x-6 text-lg">
          <span className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
            {work.likes?.length || 0}
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" /></svg>
            {work.comments?.length || 0}
=======
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"></path></svg>
        </div>
      )}
      
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white flex space-x-4 text-lg">
          {/* 👇 UPDATED: Use optional chaining to prevent crashes */}
          <span className="flex items-center">
            🤍 {work.likes?.length || 0}
          </span>
          <span className="flex items-center">
            💬 {work.comments?.length || 0}
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkGridItem;