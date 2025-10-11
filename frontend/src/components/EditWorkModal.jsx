import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useGetWorkDetailsQuery, useUpdateWorkMutation } from '../redux/api/worksApiSlice';
import Loader from './Loader';

const EditWorkModal = ({ isOpen, onClose, workId }) => {
  const { data: work, isLoading: isLoadingWork } = useGetWorkDetailsQuery(workId, { skip: !isOpen });
  const [updateWork, { isLoading: isUpdating }] = useUpdateWorkMutation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (work) {
      setTitle(work.title);
      setDescription(work.description);
      setCategory(work.category);
    }
  }, [work]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { title, description, category };
      await updateWork({ workId, formData }).unwrap();
      toast.success('Work updated successfully!');
      onClose();
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to update work.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-50 flex justify-center items-center p-4">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-100 border-b border-gray-700 pb-4">Edit Work Details</h2>
        {isLoadingWork ? <div className="flex justify-center"><Loader /></div> : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="edit-title" className="block text-sm font-medium text-gray-400">Title</label>
              <input type="text" id="edit-title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
            </div>
            <div>
              <label htmlFor="edit-description" className="block text-sm font-medium text-gray-400">Description</label>
              <textarea id="edit-description" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
            </div>
            <div>
              <label htmlFor="edit-category" className="block text-sm font-medium text-gray-400">Category</label>
              <select id="edit-category" value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option className="bg-gray-700 text-gray-200">Art</option>
                <option className="bg-gray-700 text-gray-200">Photography</option>
                <option className="bg-gray-700 text-gray-200">Writing</option>
                <option className="bg-gray-700 text-gray-200">Other</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4 pt-4 border-t border-gray-700">
              <button type="button" onClick={onClose} className="bg-gray-600 text-gray-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-500 transition-colors">
                Cancel
              </button>
              <button type="submit" disabled={isUpdating} className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 disabled:bg-indigo-800 disabled:cursor-not-allowed transition-colors">
                {isUpdating ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditWorkModal;