// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { useCreateWorkMutation } from '../redux/api/worksApiSlice';

// const CreateWorkModal = ({ isOpen, onClose }) => {
//   // ... (state and handlers remain the same) ...
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('Art');
//   const [fileUrls, setFileUrls] = useState([]);
//   const [isUploading, setIsUploading] = useState(false);
//   const [createWork, { isLoading: isCreating }] = useCreateWorkMutation();
//   const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
//   const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

//   // Functions (handleFileUpload, handleRemoveImage, handleSubmit, etc.) are unchanged

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-50 flex justify-center items-center p-4">
//       <div className="bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         {/* ... (form header and image upload section are unchanged) ... */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* ... (image upload section) ... */}
          
//           <div>
//             <label htmlFor="title" className="block text-sm font-medium text-gray-400">Title</label>
//             <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
//           </div>
//           <div>
//             <label htmlFor="description" className="block text-sm font-medium text-gray-400">Description</label>
//             <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
//           </div>
//           <div>
//             <label htmlFor="category" className="block text-sm font-medium text-gray-400">Category</label>
//             <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
//               {/* 👇 UPDATED: Added classes to options for visibility */}
//               <option className="bg-gray-700 text-gray-200">Art</option>
//               <option className="bg-gray-700 text-gray-200">Photography</option>
//               <option className="bg-gray-700 text-gray-200">Writing</option>
//               <option className="bg-gray-700 text-gray-200">Other</option>
//             </select>
//           </div>
          
//           {/* ... (form buttons are unchanged) ... */}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateWorkModal;

// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { useCreateWorkMutation } from '../redux/api/worksApiSlice';

// const CreateWorkModal = ({ isOpen, onClose }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('Art');
//   const [fileUrls, setFileUrls] = useState([]);
//   const [isUploading, setIsUploading] = useState(false);
//   const [createWork, { isLoading: isCreating }] = useCreateWorkMutation();
  
//   const cloudName ="dsqf6yz3m";
//   const uploadPreset ="padhiyar";

//   const handleFileUpload = async (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length === 0) return;

//     setIsUploading(true);
    
//     try {
//       const uploadPromises = files.map(async (file) => {
//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('upload_preset', uploadPreset);

//         const response = await fetch(
//           `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
//           {
//             method: 'POST',
//             body: formData,
//           }
//         );

//         if (!response.ok) {
//           throw new Error('Upload failed');
//         }

//         const data = await response.json();
//         return data.secure_url;
//       });

//       const urls = await Promise.all(uploadPromises);
//       setFileUrls(prev => [...prev, ...urls]);
//       toast.success('Images uploaded successfully!');
//     } catch (error) {
//       console.error('Upload error:', error);
//       toast.error('Failed to upload images');
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const handleRemoveImage = (indexToRemove) => {
//     setFileUrls(prev => prev.filter((_, index) => index !== indexToRemove));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!title.trim()) {
//       toast.error('Please enter a title');
//       return;
//     }

//     if (fileUrls.length === 0) {
//       toast.error('Please upload at least one image');
//       return;
//     }

//     try {
//       const workData = {
//         title: title.trim(),
//         description: description.trim(),
//         category,
//         images: fileUrls,
//       };

//       const res = await createWork(workData).unwrap();
//       toast.success('Work created successfully!');
      
//       // Reset form and close modal
//       setTitle('');
//       setDescription('');
//       setCategory('Art');
//       setFileUrls([]);
//       onClose();
//     } catch (error) {
//       console.error('Create work error:', error);
//       toast.error(error?.data?.message || 'Failed to create work');
//     }
//   };

//   const handleClose = () => {
//     if (!isCreating && !isUploading) {
//       setTitle('');
//       setDescription('');
//       setCategory('Art');
//       setFileUrls([]);
//       onClose();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-50 flex justify-center items-center p-4">
//       <div className="bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl font-bold text-white">Create New Work</h2>
//           <button
//             onClick={handleClose}
//             disabled={isCreating || isUploading}
//             className="text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Image Upload Section */}
//           <div>
//             <label className="block text-sm font-medium text-gray-400 mb-3">
//               Upload Images
//             </label>
            
//             {/* File Input */}
//             <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors">
//               <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 onChange={handleFileUpload}
//                 disabled={isUploading}
//                 className="hidden"
//                 id="file-upload"
//               />
//               <label
//                 htmlFor="file-upload"
//                 className={`cursor-pointer block ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
//               >
//                 <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
//                   <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//                 <div className="mt-2">
//                   <span className="text-indigo-400 font-medium">Click to upload</span>
//                   <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 10MB each</p>
//                 </div>
//               </label>
//             </div>

//             {/* Upload Progress */}
//             {isUploading && (
//               <div className="mt-4">
//                 <div className="flex items-center space-x-2 text-sm text-gray-400">
//                   <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-500"></div>
//                   <span>Uploading images...</span>
//                 </div>
//               </div>
//             )}

//             {/* Preview Images */}
//             {fileUrls.length > 0 && (
//               <div className="mt-4">
//                 <p className="text-sm text-gray-400 mb-2">Uploaded images ({fileUrls.length})</p>
//                 <div className="grid grid-cols-3 gap-3">
//                   {fileUrls.map((url, index) => (
//                     <div key={index} className="relative group">
//                       <img
//                         src={url}
//                         alt={`Preview ${index + 1}`}
//                         className="w-full h-24 object-cover rounded-lg"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => handleRemoveImage(index)}
//                         disabled={isUploading}
//                         className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
//                       >
//                         ×
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Title Input */}
//           <div>
//             <label htmlFor="title" className="block text-sm font-medium text-gray-400">
//               Title *
//             </label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//               placeholder="Enter work title"
//               required
//             />
//           </div>

//           {/* Description Input */}
//           <div>
//             <label htmlFor="description" className="block text-sm font-medium text-gray-400">
//               Description
//             </label>
//             <textarea
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               rows="3"
//               className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//               placeholder="Describe your work..."
//             />
//           </div>

//           {/* Category Select */}
//           <div>
//             <label htmlFor="category" className="block text-sm font-medium text-gray-400">
//               Category
//             </label>
//             <select
//               id="category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//             >
//               <option className="bg-gray-700 text-gray-200">Art</option>
//               <option className="bg-gray-700 text-gray-200">Photography</option>
//               <option className="bg-gray-700 text-gray-200">Digital Art</option>
//               <option className="bg-gray-700 text-gray-200">Sculpture</option>
//               <option className="bg-gray-700 text-gray-200">Other</option>
//             </select>
//           </div>

//           {/* Form Buttons */}
//           <div className="flex space-x-3 pt-4">
//             <button
//               type="button"
//               onClick={handleClose}
//               disabled={isCreating || isUploading}
//               className="flex-1 px-4 py-3 text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={isCreating || isUploading || fileUrls.length === 0 || !title.trim()}
//               className="flex-1 px-4 py-3 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//             >
//               {isCreating ? (
//                 <>
//                   <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                   Creating...
//                 </>
//               ) : (
//                 'Create Work'
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateWorkModal;

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useCreateWorkMutation } from '../redux/api/worksApiSlice';

const CreateWorkModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Art');
  const [fileUrls, setFileUrls] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [createWork, { isLoading: isCreating }] = useCreateWorkMutation();
  
  const cloudName = "dsqf6yz3m";
  const uploadPreset = "padhiyar";

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setIsUploading(true);
    
    try {
      const uploadPromises = files.map(async (file) => {
        if (file.size > 10 * 1024 * 1024) {
          throw new Error(`File ${file.name} is too large. Maximum size is 10MB.`);
        }

        if (!file.type.startsWith('image/')) {
          throw new Error(`File ${file.name} is not an image.`);
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: 'POST',
            body: formData,
          }
        );

        const data = await response.json();
        
        if (!response.ok) {
          console.error('Cloudinary response error:', data);
          throw new Error(data.error?.message || `Upload failed with status ${response.status}`);
        }

        console.log('Upload successful:', data.secure_url);
        return data.secure_url;
      });

      const urls = await Promise.all(uploadPromises);
      setFileUrls(prev => [...prev, ...urls]);
      toast.success(`Successfully uploaded ${urls.length} image(s)!`);
    } catch (error) {
      console.error('Upload error details:', error);
      toast.error(error.message || 'Failed to upload images. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = (indexToRemove) => {
    setFileUrls(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  // In CreateWorkModal.jsx, update the handleSubmit function:

const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!title.trim()) {
    toast.error('Please enter a title');
    return;
  }

  if (fileUrls.length === 0) {
    toast.error('Please upload at least one image');
    return;
  }

  try {
    const workData = {
      title: title.trim(),
      description: description.trim(),
      category,
      fileUrls: fileUrls, // CHANGE THIS FROM 'images' TO 'fileUrls'
    };

    console.log('Submitting work data:', workData);
    
    // Log the exact data being sent
    console.log('Work data being sent:', JSON.stringify(workData, null, 2));
    console.log('Number of images:', workData.fileUrls.length);
    console.log('Image URLs:', workData.fileUrls);

    const res = await createWork(workData).unwrap();
    console.log('Create work response:', res);
    
    toast.success('Work created successfully!');
    
    // Reset form and close modal
    setTitle('');
    setDescription('');
    setCategory('Art');
    setFileUrls([]);
    onClose();
  } catch (error) {
    console.error('Create work error details:', error);
    
    // More detailed error logging
    if (error.data) {
      console.error('Backend error data:', error.data);
      console.error('Backend error message:', error.data.message);
      console.error('Backend error details:', error.data.details);
    }
    
    // Show specific error message from backend
    const errorMessage = error?.data?.message || error?.data?.error || 'Failed to create work';
    toast.error(errorMessage);
  }
};

  const handleClose = () => {
    if (!isCreating && !isUploading) {
      setTitle('');
      setDescription('');
      setCategory('Art');
      setFileUrls([]);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-50 flex justify-center items-center p-4">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Create New Work</h2>
          <button
            onClick={handleClose}
            disabled={isCreating || isUploading}
            className="text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload Section */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-3">
              Upload Images *
            </label>
            
            {/* File Input */}
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                disabled={isUploading}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className={`cursor-pointer block ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="mt-2">
                  <span className="text-indigo-400 font-medium">Click to upload</span>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 10MB each</p>
                  <p className="text-xs text-yellow-400 mt-1">At least one image is required</p>
                </div>
              </label>
            </div>

            {/* Upload Progress */}
            {isUploading && (
              <div className="mt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-500"></div>
                  <span>Uploading images...</span>
                </div>
              </div>
            )}

            {/* Preview Images */}
            {fileUrls.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">
                  Uploaded images ({fileUrls.length})
                  <span className="text-green-400 ml-2">✓ Ready to submit</span>
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {fileUrls.map((url, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={url}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg border-2 border-green-500"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        disabled={isUploading}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-400">
              Title *
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="Enter work title"
              required
            />
          </div>

          {/* Description Input */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-400">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="Describe your work..."
            />
          </div>

          {/* Category Select */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-400">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            >
              <option value="Art">Art</option>
              <option value="Photography">Photography</option>
              <option value="Digital Art">Digital Art</option>
              <option value="Sculpture">Sculpture</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Form Buttons */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              disabled={isCreating || isUploading}
              className="flex-1 px-4 py-3 text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isCreating || isUploading || fileUrls.length === 0 || !title.trim()}
              className="flex-1 px-4 py-3 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isCreating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Creating...
                </>
              ) : (
                `Create ${category} Work`
              )}
            </button>
          </div>

          {/* Debug Info (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-3 bg-gray-900 rounded-lg">
              <p className="text-xs text-gray-400">Debug Info:</p>
              <p className="text-xs text-gray-400">Images: {fileUrls.length}</p>
              <p className="text-xs text-gray-400">Title: {title}</p>
              <p className="text-xs text-gray-400">Category: {category}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateWorkModal;