// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useSearchWorksQuery } from '../redux/api/worksApiSlice';
// import Loader from '../components/Loader';
// import WorkCard from '../components/WorkCard';

// import AnimatedBackground from '../components/AnimatedBackground';

// const SearchPage = () => {
//   const { keyword } = useParams();
//   const { data: works, isLoading, error } = useSearchWorksQuery(keyword);

//   return (
//     <div className="relative">
//       <AnimatedBackground />
//       <div className="absolute inset-0 bg-black opacity-50">
//       <div className="relative z-10">
//     <div className="container mx-auto mt-8 px-4">
//       <h1 className="text-3xl font-bold text-center text-gray-100 mb-8">
//         Search Results for: <span className="text-indigo-400">{keyword}</span>
//       </h1>

//       {isLoading ? (
//         <div className="flex justify-center"><Loader /></div>
//       ) : error ? (
//         <div className="text-center text-red-400">Error: {error?.data?.message || 'Could not fetch results.'}</div>
//       ) : works && works.length > 0 ? (
//         works.map((work) => <WorkCard key={work._id} work={work} />)
//       ) : (
//         <p className="text-center text-gray-500">No works found matching your search.</p>
//       )}
//     </div>
//     </div>
//     </div>
//     </div>
//   );
// };


// export default SearchPage;

// SearchPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSearchWorksQuery } from '../redux/api/worksApiSlice';
import Loader from '../components/Loader';
import WorkCard from '../components/WorkCard';
import AnimatedBackground from '../components/AnimatedBackground';

const SearchPage = () => {
  const { keyword } = useParams();
  const { data: works, isLoading, error } = useSearchWorksQuery(keyword);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <div className="content-container relative z-10 container mx-auto mt-8 px-4">
        <div className="glass-card rounded-xl p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-100">
            Search Results for: <span className="text-indigo-400">{keyword}</span>
          </h1>
        </div>

        {isLoading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : error ? (
          <div className="text-center text-red-400 glass-card p-6 rounded-xl">
            Error: {error?.data?.message || 'Could not fetch results.'}
          </div>
        ) : works && works.length > 0 ? (
          works.map((work) => <WorkCard key={work._id} work={work} />)
        ) : (
          <div className="glass-card rounded-xl p-8 text-center">
            <p className="text-gray-400 text-lg">No works found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;