// import React from 'react';
// import { useGetWorkStatsQuery, useGetMyWorksQuery } from '../redux/api/worksApiSlice';
// import Loader from '../components/Loader';
// import StatCard from '../components/StatCard';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import AnimatedBackground from '../components/AnimatedBackground';

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-gray-900 p-3 border border-gray-700 rounded-lg shadow-lg text-sm">
//         <p className="font-semibold text-gray-100 mb-1">{label}</p>
//         {payload.map((entry, index) => (
//           <p key={`item-${index}`} style={{ color: entry.color }}>
//             {entry.name}: <span className="font-medium">{entry.value}</span>
//           </p>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// const DashboardPage = () => {
//   const { data: stats, isLoading: isLoadingStats } = useGetWorkStatsQuery();
//   const { data: myWorks, isLoading: isLoadingWorks } = useGetMyWorksQuery();

//   if (isLoadingStats || isLoadingWorks) {
//     return <div className="flex justify-center mt-20"><Loader /></div>;
//   }

//   const chartData = myWorks
//     ?.slice()
//     .sort((a, b) => b.likes.length - a.likes.length)
//     .slice(0, 5)
//     .map(work => ({
//       name: work.title.substring(0, 15) + (work.title.length > 15 ? '…' : ''),
//       Likes: work.likes.length,
//       Comments: work.comments.length,
//     }));

//   return (
//     <div className="min-h-screen relative">
//       <AnimatedBackground />
//       <div className="relative z-10">
//     <div className="container mx-auto max-w-7xl p-4 sm:p-8 bg-gray-900 min-h-screen">
//       <h1 className="text-3xl font-bold text-gray-100 mb-8">Your Dashboard</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatCard title="Total Works" value={stats?.totalWorks || 0} icon={"🎨"} />
//         <StatCard title="Total Likes" value={stats?.totalLikes || 0} icon={"❤️"} />
//         <StatCard title="Total Comments" value={stats?.totalComments || 0} icon={"💬"} />
//         <StatCard title="Total Saves" value={stats?.totalSaves || 0} icon={"🔖"} />
//       </div>

//       <div className="mt-12">
//         <h2 className="text-2xl font-bold text-gray-100 mb-6">Top 5 Most Engaged Works</h2>
//         <div className="bg-gray-800 p-6 rounded-xl shadow-lg h-96 border border-gray-700">
//           {chartData && chartData.length > 0 ? (
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#4b5563" /> 
//                 <XAxis dataKey="name" axisLine={false} tickLine={false} style={{ fontSize: '0.8rem' }} tick={{ fill: '#9ca3af' }} />
//                 <YAxis axisLine={false} tickLine={false} style={{ fontSize: '0.8rem' }} tick={{ fill: '#9ca3af' }} />
//                 <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(129, 140, 248, 0.1)' }} />
//                 <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', color: '#d1d5db' }} />
//                 <Bar dataKey="Likes" fill="#4f46e5" barSize={30} radius={[5, 5, 0, 0]} />
//                 <Bar dataKey="Comments" fill="#818cf8" barSize={30} radius={[5, 5, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           ) : (
//             <div className="flex items-center justify-center h-full text-gray-500">
//               No works available to display chart data. Start creating!
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default DashboardPage;


import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useGetWorkStatsQuery, useGetMyWorksQuery } from '../redux/api/worksApiSlice';
import Loader from '../components/Loader';
import StatCard from '../components/StatCard';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/95 backdrop-blur-lg p-4 border border-gray-700 rounded-xl shadow-2xl text-sm">
        <p className="font-semibold text-gray-100 mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} className="flex items-center space-x-2" style={{ color: entry.color }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
            <span>{entry.name}: <span className="font-bold">{entry.value}</span></span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const DashboardPage = () => {
  const { data: stats, isLoading: isLoadingStats } = useGetWorkStatsQuery();
  const { data: myWorks, isLoading: isLoadingWorks } = useGetMyWorksQuery();

  if (isLoadingStats || isLoadingWorks) {
    return (
      <div className="min-h-screen bg-gray-900 relative overflow-hidden flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  // Safe data extraction with fallbacks to prevent errors
  const statsData = stats || {};
  const worksData = myWorks || [];

  const chartData = worksData
    .slice()
    .sort((a, b) => (b.likes?.length || 0) - (a.likes?.length || 0))
    .slice(0, 5)
    .map(work => ({ 
      name: work.title ? work.title.substring(0, 12) + (work.title.length > 12 ? '…' : '') : 'Untitled', 
      Likes: work.likes?.length || 0, 
      Comments: work.comments?.length || 0 
    }));

  const recentActivity = worksData
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
        {/* Morphing Blob Background */}
        <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute bg-gradient-to-r from-purple-600 to-indigo-600 w-96 h-96 rounded-full -top-32 -left-32 animate-morph"></div>
            <div className="absolute bg-gradient-to-r from-rose-500 to-pink-500 w-80 h-80 rounded-full -bottom-24 -right-16 animate-morph animation-delay-3000"></div>
            <div className="absolute bg-gradient-to-r from-cyan-500 to-blue-500 w-72 h-72 rounded-full bottom-32 left-1/4 animate-morph animation-delay-6000"></div>
        </div>

      <div className="relative z-10 container mx-auto max-w-7xl p-4 sm:p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-100 to-purple-200 bg-clip-text text-transparent mb-2">
                Creator Dashboard
              </h1>
              <p className="text-gray-400 text-lg">
                Track your creative journey and engagement metrics
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-sm">Live Analytics</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard 
            title="Total Works" 
            value={statsData.totalWorks || 0} 
            icon="🎨"
            description="Your creative portfolio"
            gradient="from-purple-500 to-indigo-600"
          />
          <StatCard 
            title="Total Likes" 
            value={statsData.totalLikes || 0} 
            icon="❤️"
            description="Community appreciation"
            gradient="from-pink-500 to-rose-600"
          />
          <StatCard 
            title="Total Comments" 
            value={statsData.totalComments || 0} 
            icon="💬"
            description="Engagement & feedback"
            gradient="from-blue-500 to-cyan-600"
          />
          <StatCard 
            title="Total Saves" 
            value={statsData.totalSaves || 0} 
            icon="🔖"
            description="Bookmarked content"
            gradient="from-green-500 to-emerald-600"
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-100">Engagement Analytics</h2>
              </div>
              
              <div className="h-80">
                {chartData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                      <defs>
                        <linearGradient id="likesGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#818cf8" stopOpacity={0.8}/>
                          <stop offset="100%" stopColor="#4f46e5" stopOpacity={0.2}/>
                        </linearGradient>
                        <linearGradient id="commentsGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#a78bfa" stopOpacity={0.8}/>
                          <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.2}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid 
                        strokeDasharray="3 3" 
                        vertical={false} 
                        stroke="#374151" 
                        opacity={0.5}
                      />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#9ca3af', fontSize: 12 }}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#9ca3af', fontSize: 12 }}
                      />
                      <Tooltip 
                        content={<CustomTooltip />} 
                        cursor={{ fill: 'rgba(129, 140, 248, 0.1)' }}
                      />
                       <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                      <Bar 
                        dataKey="Likes" 
                        fill="url(#likesGradient)" 
                        barSize={40} 
                        radius={[8, 8, 0, 0]}
                      />
                      <Bar 
                        dataKey="Comments" 
                        fill="url(#commentsGradient)" 
                        barSize={40} 
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📊</span>
                    </div>
                    <p className="text-lg">No data available yet</p>
                    <p className="text-sm text-gray-400">Create your first work to see analytics</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="xl:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl h-full">
              <h2 className="text-2xl font-bold text-gray-100 mb-6">Recent Activity</h2>
              
              <div className="space-y-4">
                {recentActivity.length > 0 ? (
                  recentActivity.map((activity, index) => (
                    <Link to={`/work/${activity._id}`}
                      key={activity._id}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-100 font-medium truncate group-hover:text-purple-300 transition-colors">
                          {activity.title || 'Untitled Work'}
                        </p>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-gray-400">
                          <span className="flex items-center space-x-1">
                            <span>❤️</span>
                            <span>{activity.likes?.length || 0}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <span>💬</span>
                            <span>{activity.comments?.length || 0}</span>
                          </span>
                          <span>Recently</span>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">⚡</span>
                    </div>
                    <p>No recent activity</p>
                    <p className="text-sm mt-1">Start creating to see activity here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
       <style jsx>{`
        .animation-delay-3000 {
            animation-delay: 3s;
        }
        .animation-delay-6000 {
            animation-delay: 6s;
        }
        @keyframes morph {
            0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg) scale(1) translate(0px, 0px); }
            25% { transform: rotate(45deg) scale(1.05) translate(20px, -20px); }
            50% { border-radius: 30% 70% 40% 60% / 70% 40% 60% 30%; transform: rotate(90deg) scale(1.1) translate(-20px, 20px); }
            75% { transform: rotate(135deg) scale(1.05) translate(0px, 0px); }
            100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(180deg) scale(1) translate(0px, 0px); }
        }
        .animate-morph {
            animation: morph 15s ease-in-out infinite alternate;
            transition: all 1.5s ease-in-out;
            filter: blur(50px);
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;


