import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { 
  useGetMyCollectionsQuery, 
  useCreateCollectionMutation,
  useAddWorkToCollectionMutation,
  useRemoveWorkFromCollectionMutation,
} from '../redux/api/collectionApiSlice';
import Loader from './Loader';

const CollectionModal = ({ isOpen, onClose, workId }) => {
  const [newCollectionName, setNewCollectionName] = useState('');
  
  const { data: collections, isLoading: isLoadingCollections } = useGetMyCollectionsQuery();
  const [createCollection, { isLoading: isCreating }] = useCreateCollectionMutation();
  const [addWorkToCollection] = useAddWorkToCollectionMutation();
  const [removeWorkFromCollection] = useRemoveWorkFromCollectionMutation();

  const handleCreateCollection = async (e) => {
    e.preventDefault();
    if (!newCollectionName.trim()) return;
    try {
      const newCollection = await createCollection({ name: newCollectionName }).unwrap();
      setNewCollectionName('');
      toast.success('Collection created!');
      await handleToggleSave(newCollection._id, false);
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to create collection.');
    }
  };

  const handleToggleSave = async (collectionId, isAlreadySaved) => {
    try {
      if (isAlreadySaved) {
        await removeWorkFromCollection({ collectionId, workId }).unwrap();
        toast.info('Removed from collection.');
      } else {
        await addWorkToCollection({ collectionId, workId }).unwrap();
        toast.success('Saved to collection!');
      }
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to update collection.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-50 flex justify-center items-center p-4">
      <div className="bg-gray-800 text-gray-200 rounded-xl shadow-2xl p-6 w-full max-w-md max-h-[80vh] flex flex-col">
        <h2 className="text-xl font-bold text-gray-100 border-b border-gray-700 pb-3 mb-4">Save to Collection</h2>
        
        <div className="flex-grow overflow-y-auto mb-4 pr-2">
          {isLoadingCollections ? <div className="flex justify-center"><Loader /></div> : (
            <ul className="space-y-2">
              {collections?.map(collection => {
                const isSavedInThisCollection = collection.works.some(w => w._id === workId);
                
                return (
                  <li key={collection._id}>
                    <button 
                      onClick={() => handleToggleSave(collection._id, isSavedInThisCollection)}
                      className={`w-full text-left p-3 rounded-lg flex justify-between items-center transition-all duration-200 ${
                        isSavedInThisCollection 
                          ? 'bg-indigo-900/70 hover:bg-indigo-900 text-indigo-300' 
                          : 'hover:bg-gray-700'
                      }`}
                    >
                      <span className="font-medium">{collection.name}</span>
                      {isSavedInThisCollection && (
                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        
        <form onSubmit={handleCreateCollection} className="border-t border-gray-700 pt-4 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Create a new collection..."
            value={newCollectionName}
            onChange={(e) => setNewCollectionName(e.target.value)}
            className="flex-grow bg-gray-900 border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-200 placeholder-gray-400"
          />
          <button 
            type="submit" 
            disabled={isCreating}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 disabled:bg-indigo-800 disabled:cursor-not-allowed transition-colors"
          >
            {isCreating ? '...' : 'Create'}
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-center text-sm text-gray-500 hover:underline">Close</button>
      </div>
    </div>
  );
};

export default CollectionModal;