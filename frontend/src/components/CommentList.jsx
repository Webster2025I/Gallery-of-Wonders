import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {comments && comments.length > 0 ? (
        comments.map((comment) => <Comment key={comment._id} comment={comment} />)
      ) : (
<<<<<<< HEAD
        <p className="text-sm text-center text-gray-500 py-8">
          No comments yet. Be the first to share your thoughts!
        </p>
=======
        <p className="text-sm text-gray-500">No comments yet. Be the first to comment!</p>
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
      )}
    </div>
  );
};

export default CommentList;