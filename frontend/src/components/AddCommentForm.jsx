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
      // Toast notification for success can be configured for dark theme via ToastContainer props
      toast.success('Comment added');
    } catch (error) {
      toast.error(error?.data?.message || 'Failed to add comment');
    }
  };

  return (
    <div className="border-t border-gray-700 p-4 bg-gray-900">
      <form onSubmit={handleSubmit} className="flex items-center space-x-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-200 placeholder-gray-400 p-2"
          disabled={isLoading}  
        />
        <button
          type="submit"
          disabled={isLoading || !text.trim()}
          className="text-indigo-400 font-semibold text-sm hover:text-indigo-300 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Posting...' : 'Post'}
        </button>
      </form>
    </div>
  );
};

export default AddCommentForm;