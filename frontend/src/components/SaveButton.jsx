import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CollectionModal from './CollectionModal';
import { useGetMyCollectionsQuery } from '../redux/api/collectionApiSlice';

const SaveButton = ({ workId }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

<<<<<<< HEAD
  const { data: collections } = useGetMyCollectionsQuery();

  if (!userInfo) {
    return (
      <Link to="/login" className="ml-auto" aria-label="Log in to save">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
=======
  // Fetch the user's collections to check if this work is saved
  const { data: collections } = useGetMyCollectionsQuery();

  // If the user isn't logged in, show a link to the login page
  if (!userInfo) {
    return (
      <Link to="/login" className="ml-auto" aria-label="Log in to save">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
      </Link>
    );
  }

<<<<<<< HEAD
  const isSaved = collections?.some(collection => 
    collection.works.some(work => work._id === workId)
=======
  // Determine if the work is in any of the user's collections
  const isSaved = collections?.some(collection => 
    collection.works.some(workInCollection => workInCollection._id === workId)
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
  );

  return (
    <>
      <button 
        onClick={() => setModalOpen(true)}
<<<<<<< HEAD
        className="text-gray-400 hover:text-white ml-auto"
        aria-label="Save to collection"
      >
        {isSaved ? (
          <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21z"></path></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
=======
        className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 ml-auto"
        aria-label="Save to collection"
      >
        {isSaved ? (
          // Filled Icon (Saved)
          <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21z"></path></svg>
        ) : (
          // Outlined Icon (Not Saved)
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
        )}
      </button>

      <CollectionModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)}
        workId={workId}
      />
    </>
  );
};

export default SaveButton;