/**
 * useAdminAssets
 * Manages uploadable portfolio assets (profile image, resume) via localStorage.
 * Admin mode is activated by visiting /?admin=true in the browser.
 */

import { useState } from 'react';

const KEYS = {
  profileImage: 'portfolio_profile_image',
  resume: 'portfolio_resume',
};

const MAX_IMAGE_BYTES = 3 * 1024 * 1024;  // 3 MB
const MAX_RESUME_BYTES = 8 * 1024 * 1024; // 8 MB

export const useAdminAssets = () => {
  const [profileImage, setProfileImage] = useState(
    () => localStorage.getItem(KEYS.profileImage) || null
  );
  const [resumeData, setResumeData] = useState(
    () => localStorage.getItem(KEYS.resume) || null
  );
  const [uploadError, setUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(null);

  const readFile = (file, maxBytes, onSuccess, errorMsg) => {
    if (!file) return;
    if (file.size > maxBytes) {
      setUploadError(errorMsg);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        onSuccess(e.target.result);
        setUploadError(null);
      } catch {
        setUploadError('Storage limit reached. Clear browser storage and try again.');
      }
    };
    reader.readAsDataURL(file);
  };

  const uploadProfileImage = (file) => {
    readFile(
      file,
      MAX_IMAGE_BYTES,
      (data) => {
        localStorage.setItem(KEYS.profileImage, data);
        setProfileImage(data);
        setUploadSuccess('Profile photo updated!');
        setTimeout(() => setUploadSuccess(null), 3000);
      },
      'Image must be under 3 MB. Try compressing it first.'
    );
  };

  const uploadResume = (file) => {
    readFile(
      file,
      MAX_RESUME_BYTES,
      (data) => {
        localStorage.setItem(KEYS.resume, data);
        setResumeData(data);
        setUploadSuccess('Resume updated!');
        setTimeout(() => setUploadSuccess(null), 3000);
      },
      'Resume must be under 8 MB. Try compressing the PDF first.'
    );
  };

  const clearProfileImage = () => {
    localStorage.removeItem(KEYS.profileImage);
    setProfileImage(null);
  };

  const clearResume = () => {
    localStorage.removeItem(KEYS.resume);
    setResumeData(null);
  };

  return {
    profileImage,
    resumeData,
    uploadProfileImage,
    uploadResume,
    clearProfileImage,
    clearResume,
    uploadError,
    uploadSuccess,
  };
};
