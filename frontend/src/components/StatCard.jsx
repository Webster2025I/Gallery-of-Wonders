// import React from 'react';

// const StatCard = ({ title, value, icon }) => {
//   return (
//     <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center space-x-4 border border-gray-700">
//       <div className="bg-indigo-900/50 text-indigo-400 p-3 rounded-full">
//         {icon}
//       </div>
//       <div>
//         <p className="text-sm font-medium text-gray-400">{title}</p>
//         <p className="text-2xl font-bold text-gray-100">{value}</p>
//       </div>
//     </div>
//   );
// };

// export default StatCard;

// components/StatCard.jsx
import React from 'react';

const StatCard = ({ title, value, icon, description, gradient }) => {
  // Safe value handling
  const safeValue = value !== undefined && value !== null ? value : 0;
  
  return (
    <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-3xl font-bold text-gray-100">
          {safeValue.toLocaleString()}
        </p>
        {description && (
          <p className="text-gray-500 text-xs">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default StatCard;