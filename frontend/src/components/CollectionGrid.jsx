import React from 'react';
import CollectionCard from './CollectionCard';

const CollectionGrid = ({ collections }) => {
  return (
<<<<<<< HEAD
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
=======
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
      {collections.map((collection) => (
        <CollectionCard key={collection._id} collection={collection} />
      ))}
    </div>
  );
};

export default CollectionGrid;