/**
 * AdminPanel
 * Floating panel for uploading profile photo and resume.
 * Only visible when ?admin=true is in the URL.
 * Access: yoursite.com/?admin=true
 */

import { useRef, useState } from 'react';
import { X, Upload, Trash2, Image, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const AdminPanel = ({
  profileImage,
  resumeData,
  uploadProfileImage,
  uploadResume,
  clearProfileImage,
  clearResume,
  uploadError,
  uploadSuccess,
}) => {
  const imageInputRef = useRef(null);
  const resumeInputRef = useRef(null);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] w-72 font-sans">
      {/* Panel header */}
      <div
        className="flex items-center justify-between bg-green-600 text-white px-4 py-2.5 rounded-t-xl cursor-pointer select-none"
        onClick={() => setCollapsed(!collapsed)}
      >
        <span className="text-sm font-semibold tracking-wide">Admin Panel</span>
        {collapsed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </div>

      {!collapsed && (
        <div className="bg-gray-900 border border-gray-700 rounded-b-xl p-4 space-y-4 shadow-2xl">

          {/* Feedback messages */}
          {uploadError && (
            <p className="text-xs text-red-400 bg-red-900/30 border border-red-700 rounded-lg px-3 py-2">
              {uploadError}
            </p>
          )}
          {uploadSuccess && (
            <p className="text-xs text-green-400 bg-green-900/30 border border-green-700 rounded-lg px-3 py-2">
              {uploadSuccess}
            </p>
          )}

          {/* Profile Photo */}
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Image className="w-3 h-3" /> Profile Photo
            </p>
            {profileImage && (
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={profileImage}
                  alt="Preview"
                  className="w-10 h-10 rounded-full object-cover border border-gray-600"
                />
                <span className="text-xs text-green-400 flex-1">Uploaded</span>
                <button
                  onClick={clearProfileImage}
                  className="text-red-400 hover:text-red-300 transition-colors"
                  title="Remove photo"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => uploadProfileImage(e.target.files[0])}
            />
            <button
              onClick={() => imageInputRef.current.click()}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              {profileImage ? 'Replace Photo' : 'Upload Photo'}
            </button>
            <p className="text-xs text-gray-500 mt-1">Max 3 MB</p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700" />

          {/* Resume */}
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileText className="w-3 h-3" /> Resume (PDF)
            </p>
            {resumeData && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-green-400 flex-1">Resume uploaded</span>
                <a
                  href={resumeData}
                  download="Resume.pdf"
                  className="text-xs text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  Preview
                </a>
                <button
                  onClick={clearResume}
                  className="text-red-400 hover:text-red-300 transition-colors"
                  title="Remove resume"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            <input
              ref={resumeInputRef}
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => uploadResume(e.target.files[0])}
            />
            <button
              onClick={() => resumeInputRef.current.click()}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              {resumeData ? 'Replace Resume' : 'Upload Resume'}
            </button>
            <p className="text-xs text-gray-500 mt-1">Max 8 MB · PDF only</p>
          </div>

          {/* Exit hint */}
          <p className="text-xs text-gray-600 text-center">
            Remove <code className="text-gray-500">?admin=true</code> from URL to exit
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
