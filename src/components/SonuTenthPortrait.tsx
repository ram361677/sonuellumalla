import React, { useState, useEffect } from 'react';
import { getLargeFile } from '../utils/idbStorage';

interface SonuTenthPortraitProps {
  className?: string;
  allowUpload?: boolean;
}

const PERMANENT_TENTH_PHOTO = '/assets/aistudio/sonu_profile_photo.png';

export const SonuTenthPortrait: React.FC<SonuTenthPortraitProps> = ({ 
  className = ''
}) => {
  const [photoUrl, setPhotoUrl] = useState<string>(PERMANENT_TENTH_PHOTO);

  // Load saved secondary school photo from IndexedDB / localStorage, defaulting permanently to PERMANENT_TENTH_PHOTO
  useEffect(() => {
    let isMounted = true;

    const loadPhoto = async () => {
      const savedTenth = await getLargeFile('sonu_tenth_school_photo');
      if (savedTenth && isMounted) {
        setPhotoUrl(savedTenth);
        return;
      }
      const savedIntermediate = await getLargeFile('sonu_intermediate_photo');
      if (savedIntermediate && isMounted) {
        setPhotoUrl(savedIntermediate);
        return;
      }
      const savedBtech = await getLargeFile('sonu_btech_photo');
      if (savedBtech && isMounted) {
        setPhotoUrl(savedBtech);
        return;
      }
      const savedProfile = await getLargeFile('sonu_profile_photo');
      if (savedProfile && isMounted) {
        setPhotoUrl(savedProfile);
        return;
      }
      if (isMounted) {
        setPhotoUrl(PERMANENT_TENTH_PHOTO);
      }
    };

    loadPhoto();

    const handleStorageChange = () => {
      loadPhoto();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('sonu_tenth_photo_updated', handleStorageChange);
    return () => {
      isMounted = false;
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('sonu_tenth_photo_updated', handleStorageChange);
    };
  }, []);

  return (
    <div 
      className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-white select-none ${className}`}
      style={{ imageRendering: 'crisp-edges' }}
    >
      {/* If Original Uploaded Photo exists, render direct photo with crystal clarity */}
      {photoUrl ? (
        <img
          src={photoUrl || PERMANENT_TENTH_PHOTO}
          alt="Ellumalla Sonu - Secondary School Photo"
          className="w-full h-full object-cover object-top"
          style={{ imageRendering: 'auto' }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = PERMANENT_TENTH_PHOTO;
          }}
        />
      ) : (
        /* Fallback authentic student portrait avatar */
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#e8eff5] to-[#c2d4e3] relative overflow-hidden">
          <div className="w-24 h-28 rounded-2xl bg-white border-2 border-[#63a5e1] flex flex-col items-center justify-center text-[#429ac9] shadow-sm">
            <span className="font-bold text-xs uppercase text-center px-1 font-serif text-[#193768]">
              ELLUMALLA SONU
            </span>
            <span className="text-[10px] text-[#429ac9] mt-1 uppercase font-semibold">
              10th (SSC)
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
