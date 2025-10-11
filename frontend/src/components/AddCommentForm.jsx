import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAddCommentToWorkMutation } from '../redux/api/commentsApiSlice';

const AddCommentForm = ({ workId }) => {
  const [text, setText] = useState('');
  const [addComment, { isLoading }] = useAddCommentToWorkMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      await addComment({ workId, text }).unwrap();
      setText('');
<<<<<<< HEAD
      // Toast notification for success can be configured for dark theme via ToastContainer props
=======
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
      toast.success('Comment added');
    } catch (error) {
      toast.error(error?.data?.message || 'Failed to add comment');
    }
  };

  return (
<<<<<<< HEAD
    <div className="border-t border-gray-700 p-4 bg-gray-900">
      <form onSubmit={handleSubmit} className="flex items-center space-x-3">
=======
    <div className="border-t p-4">
      <form onSubmit={handleSubmit} className="flex items-center">
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment..."
<<<<<<< HEAD
          className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-200 placeholder-gray-400 p-2"
          disabled={isLoading}  
=======
          className="flex-1 border-none focus:ring-0 text-sm p-2"
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
        />
        <button
          type="submit"
          disabled={isLoading || !text.trim()}
<<<<<<< HEAD
          className="text-indigo-400 font-semibold text-sm hover:text-indigo-300 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
=======
          className="text-indigo-600 font-semibold text-sm disabled:text-indigo-300 disabled:cursor-not-allowed"
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
        >
          {isLoading ? 'Posting...' : 'Post'}
        </button>
      </form>
    </div>
  );
};

export default AddCommentForm;