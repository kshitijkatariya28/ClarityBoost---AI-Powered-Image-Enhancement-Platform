import React from "react";
import UploadForm from "../components/UploadForm";

const Upload = () => {
  // Upload handler (child se file receive karega)
  const handleUpload = (file) => {
    console.log("File uploaded:", file);
    // yaha baad me API call karna hoga (axios se backend pe bhejne ke liye)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <UploadForm onUpload={handleUpload} />
    </div>
  );
};

export default Upload;
