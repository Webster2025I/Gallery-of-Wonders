// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useGetWorkDetailsQuery } from '../redux/api/worksApiSlice';
// import { useGetCommentsForWorkQuery } from '../redux/api/commentsApiSlice';
// import Loader from '../components/Loader';
// import CommentList from '../components/CommentList';
// import AddCommentForm from '../components/AddCommentForm';
// import ImageCarousel from '../components/ImageCarousel';

// import AnimatedBackground from '../components/AnimatedBackground';

// const WorkDetailPage = () => {
//   const { id: workId } = useParams();
//   const { data: work, isLoading: isLoadingWork, error: workError } = useGetWorkDetailsQuery(workId);
//   const { data: comments, isLoading: isLoadingComments } = useGetCommentsForWorkQuery(workId);

//   if (isLoadingWork || isLoadingComments) {
//     return <div className="flex justify-center items-center h-screen"><Loader /></div>;
//   }
//   if (workError) {
//     return <div className="text-center mt-10 text-red-400">Error: {workError?.data?.message || 'Could not fetch work'}</div>;
//   }

//   const userName = work.user ? work.user.name : 'Unknown Artist';
//   const userProfileImage = work.user ? work.user.profileImage : '/default-avatar.png';
//   const userProfileLink = work.user ? `/profile/${work.user._id}` : '#';

//   return (
//     <div className="relative">
//       <AnimatedBackground />
//       <div className="relative z-10">
//     <div className="container mx-auto mt-10 max-w-6xl">
//       <div className="flex flex-col md:flex-row border border-gray-700 rounded-xl shadow-2xl overflow-hidden min-h-[80vh]">
//         <div className="w-full md:w-1/2 bg-black"><ImageCarousel images={work.fileUrls} /></div>
//         <div className="w-full md:w-1/2 flex flex-col bg-gray-800">
//           <div className="flex items-center p-4 border-b border-gray-700">
//             <Link to={userProfileLink}><img src={userProfileImage} alt={userName} className="h-10 w-10 rounded-full object-cover" /></Link>
//             <div className="ml-3"><Link to={userProfileLink} className="text-sm font-semibold text-gray-200">{userName}</Link></div>
//           </div>
//           <div className="p-4 border-b border-gray-700">
//             <p className="text-sm">
//               <span className="font-semibold text-gray-200 mr-2">{work.title}</span>
//               <span className="text-gray-400">{work.description}</span>
//             </p>
//           </div>
//           <CommentList comments={comments} />
//           <div className="border-t border-gray-700 p-4">
//             <p className="font-semibold text-gray-200 text-sm">{work.likes.length} likes</p>
//           </div>
//           <AddCommentForm workId={workId} />
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default WorkDetailPage;

// WorkDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetWorkDetailsQuery } from '../redux/api/worksApiSlice';
import { useGetCommentsForWorkQuery } from '../redux/api/commentsApiSlice';
import Loader from '../components/Loader';
import CommentList from '../components/CommentList';
import AddCommentForm from '../components/AddCommentForm';
import ImageCarousel from '../components/ImageCarousel';
import AnimatedBackground from '../components/AnimatedBackground';

const WorkDetailPage = () => {
  const { id: workId } = useParams();
  const { data: work, isLoading: isLoadingWork, error: workError } = useGetWorkDetailsQuery(workId);
  const { data: comments, isLoading: isLoadingComments } = useGetCommentsForWorkQuery(workId);

  if (isLoadingWork || isLoadingComments) {
    return (
      <div className="min-h-screen flex items-center justify-center content-container">
        <Loader />
      </div>
    );
  }
  if (workError) {
    return <div className="text-center mt-10 text-red-400 content-container">Error: {workError?.data?.message || 'Could not fetch work'}</div>;
  }

  const userName = work.user ? work.user.name : 'Unknown Artist';
  const userProfileImage = work.user ? work.user.profileImage : '/default-avatar.png';
  const userProfileLink = work.user ? `/profile/${work.user._id}` : '#';

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <div className="content-container relative z-10 container mx-auto mt-10 max-w-6xl">
        <div className="glass-card rounded-xl shadow-2xl overflow-hidden min-h-[80vh]">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-black">
              <ImageCarousel images={work.fileUrls} />
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="flex items-center p-4 border-b border-gray-700">
                <Link to={userProfileLink}>
                  <img src={userProfileImage} alt={userName} className="h-10 w-10 rounded-full object-cover" />
                </Link>
                <div className="ml-3">
                  <Link to={userProfileLink} className="text-sm font-semibold text-gray-200 hover:text-indigo-300">
                    {userName}
                  </Link>
                </div>
              </div>
              <div className="p-4 border-b border-gray-700">
                <h2 className="text-xl font-bold text-gray-100 mb-2">{work.title}</h2>
                <p className="text-gray-300">{work.description}</p>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-400">
                  <span>❤️ {work.likes?.length || 0} likes</span>
                  <span>💬 {work.comments?.length || 0} comments</span>
                </div>
              </div>
              <CommentList comments={comments} />
              <AddCommentForm workId={workId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPage;