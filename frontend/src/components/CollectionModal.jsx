import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { 
  useGetMyCollectionsQuery, 
  useCreateCollectionMutation,
  useAddWorkToCollectionMutation,
<<<<<<< HEAD
  useRemoveWorkFromCollectionMutation,
=======
  useRemoveWorkFromCollectionMutation, // 👈 Import remove hook
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
} from '../redux/api/collectionApiSlice';
import Loader from './Loader';

const CollectionModal = ({ isOpen, onClose, workId }) => {
  const [newCollectionName, setNewCollectionName] = useState('');
  
  const { data: collections, isLoading: isLoadingCollections } = useGetMyCollectionsQuery();
  const [createCollection, { isLoading: isCreating }] = useCreateCollectionMutation();
  const [addWorkToCollection] = useAddWorkToCollectionMutation();
<<<<<<< HEAD
  const [removeWorkFromCollection] = useRemoveWorkFromCollectionMutation();
=======
  const [removeWorkFromCollection] = useRemoveWorkFromCollectionMutation(); // 👈 Use remove hook
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190

  const handleCreateCollection = async (e) => {
    e.preventDefault();
    if (!newCollectionName.trim()) return;
    try {
<<<<<<< HEAD
      const newCollection = await createCollection({ name: newCollectionName }).unwrap();
      setNewCollectionName('');
      toast.success('Collection created!');
=======
      // Create the new collection
      const newCollection = await createCollection({ name: newCollectionName }).unwrap();
      setNewCollectionName('');
      toast.success('Collection created!');
      // Automatically add the work to the newly created collection
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
      await handleToggleSave(newCollection._id, false);
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to create collection.');
    }
  };

<<<<<<< HEAD
=======
  // UPDATED: This function now adds OR removes the work
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
  const handleToggleSave = async (collectionId, isAlreadySaved) => {
    try {
      if (isAlreadySaved) {
        await removeWorkFromCollection({ collectionId, workId }).unwrap();
        toast.info('Removed from collection.');
      } else {
        await addWorkToCollection({ collectionId, workId }).unwrap();
        toast.success('Saved to collection!');
      }
<<<<<<< HEAD
=======
      onClose(); // Close modal after action
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to update collection.');
    }
  };

  if (!isOpen) return null;

  return (
<<<<<<< HEAD
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-50 flex justify-center items-center p-4">
      <div className="bg-gray-800 text-gray-200 rounded-xl shadow-2xl p-6 w-full max-w-md max-h-[80vh] flex flex-col">
        <h2 className="text-xl font-bold text-gray-100 border-b border-gray-700 pb-3 mb-4">Save to Collection</h2>
        
        <div className="flex-grow overflow-y-auto mb-4 pr-2">
          {isLoadingCollections ? <div className="flex justify-center"><Loader /></div> : (
            <ul className="space-y-2">
              {collections?.map(collection => {
=======
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[80vh] flex flex-col">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4">Save to Collection</h2>
        
        <div className="flex-grow overflow-y-auto mb-4">
          {isLoadingCollections ? <div className="flex justify-center"><Loader /></div> : (
            <ul className="space-y-2">
              {collections?.map(collection => {
                // Check if the current work is in this specific collection
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
                const isSavedInThisCollection = collection.works.some(w => w._id === workId);
                
                return (
                  <li key={collection._id}>
                    <button 
                      onClick={() => handleToggleSave(collection._id, isSavedInThisCollection)}
<<<<<<< HEAD
                      className={`w-full text-left p-3 rounded-lg flex justify-between items-center transition-all duration-200 ${
                        isSavedInThisCollection 
                          ? 'bg-indigo-900/70 hover:bg-indigo-900 text-indigo-300' 
                          : 'hover:bg-gray-700'
                      }`}
                    >
                      <span className="font-medium">{collection.name}</span>
                      {isSavedInThisCollection && (
                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
=======
                      className={`w-full text-left p-3 rounded-md flex justify-between items-center transition-colors ${
                        isSavedInThisCollection ? 'bg-indigo-100 hover:bg-indigo-200' : 'hover:bg-gray-100'
                      }`}
                    >
                      <span>{collection.name}</span>
                      {isSavedInThisCollection && (
                        // Checkmark icon
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        
<<<<<<< HEAD
        <form onSubmit={handleCreateCollection} className="border-t border-gray-700 pt-4 flex items-center space-x-2">
=======
        <form onSubmit={handleCreateCollection} className="border-t pt-4 flex items-center space-x-2">
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
          <input
            type="text"
            placeholder="Create a new collection..."
            value={newCollectionName}
            onChange={(e) => setNewCollectionName(e.target.value)}
<<<<<<< HEAD
            className="flex-grow bg-gray-900 border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-200 placeholder-gray-400"
=======
            className="flex-grow border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
          />
          <button 
            type="submit" 
            disabled={isCreating}
<<<<<<< HEAD
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 disabled:bg-indigo-800 disabled:cursor-not-allowed transition-colors"
=======
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 disabled:bg-indigo-400"
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
          >
            {isCreating ? '...' : 'Create'}
          </button>
        </form>
<<<<<<< HEAD
        <button onClick={onClose} className="mt-4 text-center text-sm text-gray-500 hover:underline">Close</button>
=======
        <button onClick={onClose} className="mt-4 text-center text-sm text-gray-600 hover:underline">Close</button>
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
      </div>
    </div>
  );
};

export default CollectionModal;