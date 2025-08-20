import React, { useState } from "react";

const UploadForm = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // File select handler
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // agar file image hai to preview dikhado
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file first!");
      return;
    }
    onUpload(file); // parent ko file bhej diya
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        Upload Your Image
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* File Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border border-gray-300 p-2 rounded-md cursor-pointer"
        />

        {/* Preview */}
        {preview && (
          <div className="mt-3">
            <p className="text-gray-600 text-sm mb-2">Preview:</p>
            <img
              src={preview}
              alt="Preview"
              className="w-full h-64 object-contain rounded-lg border"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md transition-colors"
        >
          Enhance Now
        </button>
      </form>
    </div>
  );
};

export default UploadForm;








