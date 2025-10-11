import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CollectionModal from './CollectionModal';
import { useGetMyCollectionsQuery } from '../redux/api/collectionApiSlice';

const SaveButton = ({ workId }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  const { data: collections } = useGetMyCollectionsQuery();

  if (!userInfo) {
    return (
      <Link to="/login" className="ml-auto" aria-label="Log in to save">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
      </Link>
    );
  }

  const isSaved = collections?.some(collection => 
    collection.works.some(work => work._id === workId)
  );

  return (
    <>
      <button 
        onClick={() => setModalOpen(true)}
        className="text-gray-400 hover:text-white ml-auto"
        aria-label="Save to collection"
      >
        {isSaved ? (
          <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21z"></path></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
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