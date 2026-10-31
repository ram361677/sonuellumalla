import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'lucide-react';
import { getLargeFile, saveLargeFile, safeLocalStorageSet } from '../utils/idbStorage';

interface SonuIntermediatePortraitProps {
  className?: string;
  allowUpload?: boolean;
}

const PERMANENT_INTERMEDIATE_PHOTO = '/assets/aistudio/sonu_profile_photo.png';

export const SonuIntermediatePortrait: React.FC<SonuIntermediatePortraitProps> = ({ 
  className = '', 
  allowUpload = true 
}) => {
  const [photoUrl, setPhotoUrl] = useState<string>(PERMANENT_INTERMEDIATE_PHOTO);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved intermediate photo from IndexedDB / localStorage, defaulting permanently to PERMANENT_INTERMEDIATE_PHOTO
  useEffect(() => {
    let isMounted = true;

    const loadPhoto = async () => {
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
        setPhotoUrl(PERMANENT_INTERMEDIATE_PHOTO);
      }
    };

    loadPhoto();

    const handleStorageChange = () => {
      loadPhoto();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('sonu_intermediate_photo_updated', handleStorageChange);
    return () => {
      isMounted = false;
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('sonu_intermediate_photo_updated', handleStorageChange);
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          safeLocalStorageSet('sonu_intermediate_photo', base64);
          await saveLargeFile('sonu_intermediate_photo', base64);
          setPhotoUrl(base64);
          window.dispatchEvent(new Event('sonu_intermediate_photo_updated'));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div 
      className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-white select-none ${className}`}
      style={{ imageRendering: 'crisp-edges' }}
    >
      {/* If Original Uploaded Photo exists, render direct photo with crystal clarity and 0 blur! */}
      {photoUrl ? (
        <img
          src={photoUrl || PERMANENT_INTERMEDIATE_PHOTO}
          alt="Ellumalla Sonu - Senior Secondary (Intermediate)"
          className="w-full h-full object-cover object-top"
          style={{ 
            imageRendering: 'auto',
            filter: 'none',
            transform: 'none'
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = PERMANENT_INTERMEDIATE_PHOTO;
          }}
        />
      ) : (
        /* Razor-sharp high-definition rendering of Sonu with navy circular backdrop (Visakha Defence Academy theme) */
        <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden">
          
          {/* Deep Navy/Cyan Circle Backdrop */}
          <div 
            className="absolute rounded-full bg-[#0a3854]"
            style={{
              width: '76%',
              height: '76%',
              top: '12%',
              left: '12%'
            }}
          />

          {/* High-Definition Crisp Vector of Sonu in intermediate uniform/shirt */}
          <svg
            viewBox="0 0 320 400"
            className="relative z-10 w-full h-full object-contain"
            style={{ shapeRendering: 'geometricPrecision' }}
          >
            <defs>
              <linearGradient id="intermediateShirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="60%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
              <linearGradient id="skinToneInter" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9a9a9e" />
                <stop offset="100%" stopColor="#6c6c70" />
              </linearGradient>
            </defs>

            {/* Blue Intermediate College Shirt Shoulders & Chest */}
            <path
              d="M 20 400 C 20 315, 52 265, 95 242 L 160 262 L 225 242 C 268 265, 300 315, 300 400 Z"
              fill="url(#intermediateShirtGrad)"
              stroke="#1e3a8a"
              strokeWidth="2"
            />

            {/* Collar */}
            <path
              d="M 124 235 C 130 258, 160 262, 196 235 C 188 252, 160 256, 132 245 Z"
              fill="#1e40af"
              stroke="#1e3a8a"
              strokeWidth="2.5"
            />

            {/* "VDA INTERMEDIATE" Badge Text */}
            <text
              x="160"
              y="312"
              textAnchor="middle"
              fill="#93c5fd"
              fontSize="10"
              fontFamily="monospace, sans-serif"
              fontWeight="bold"
              letterSpacing="2.5"
            >
              VDA JUNIOR COLLEGE
            </text>

            {/* Neck / Throat */}
            <path d="M 136 185 L 136 235 Q 160 244 184 235 L 184 185 Z" fill="url(#skinToneInter)" />

            {/* Head & Jawline Structure */}
            <path
              d="M 115 135 C 115 95, 126 70, 160 70 C 194 70, 205 95, 205 135 C 205 175, 192 205, 160 205 C 128 205, 115 175, 115 135 Z"
              fill="#828286"
            />

            {/* Ears */}
            <path d="M 113 130 C 108 130, 106 148, 114 154 Z" fill="#707074" />
            <path d="M 207 130 C 212 130, 214 148, 206 154 Z" fill="#707074" />

            {/* Hair */}
            <path
              d="M 110 115 C 106 88, 114 52, 140 44 C 152 40, 168 40, 184 46 C 202 54, 215 76, 210 115 C 198 104, 186 100, 174 102 C 160 100, 145 100, 130 106 C 122 110, 114 114, 110 115 Z"
              fill="#111111"
            />

            {/* Eyebrows */}
            <path d="M 126 122 Q 138 116 148 119" stroke="#111111" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M 172 119 Q 182 116 194 122" stroke="#111111" strokeWidth="4.5" strokeLinecap="round" fill="none" />

            {/* Eyes */}
            <ellipse cx="138" cy="132" rx="6.5" ry="4" fill="#111111" />
            <ellipse cx="182" cy="132" rx="6.5" ry="4" fill="#111111" />
            <circle cx="139" cy="131" r="1.8" fill="#ffffff" />
            <circle cx="183" cy="131" r="1.8" fill="#ffffff" />

            {/* Nose Bridge and Tip */}
            <path d="M 160 125 L 156 150 L 164 150" stroke="#48484a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="160" cy="153" rx="5" ry="2.5" fill="#3a3a3c" />

            {/* Smile */}
            <path d="M 146 168 Q 160 178 174 168" stroke="#171717" strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Trimmed beard */}
            <path
              d="M 120 146 C 124 182, 140 200, 160 200 C 180 200, 196 182, 200 146 C 196 186, 180 196, 160 196 C 140 196, 124 186, 120 146 Z"
              fill="#111111"
              opacity="0.9"
            />
          </svg>
        </div>
      )}

      {/* Hidden File Input */}
      {allowUpload && (
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      )}

      {/* Floating Upload / Replace Camera Button */}
      {allowUpload && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
          className="absolute bottom-2 right-2 z-30 p-2.5 rounded-full bg-white/90 hover:bg-[#429ac9] hover:text-white text-[#193768] border border-[#63a5e1]/70 shadow-xl transition-all transform hover:scale-110 active:scale-95 cursor-pointer flex items-center gap-1.5"
          title="Click to select your Senior Secondary photo file"
        >
          <Camera className="w-4 h-4" />
          <span className="text-[10px] font-mono font-bold uppercase pr-1 hidden sm:inline">
            Upload Photo
          </span>
        </button>
      )}

    </div>
  );
};
