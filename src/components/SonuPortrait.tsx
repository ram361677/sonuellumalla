import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, CheckCircle2, Sparkles } from 'lucide-react';
import { getLargeFile, saveLargeFile, safeLocalStorageSet } from '../utils/idbStorage';

interface SonuPortraitProps {
  className?: string;
  allowUpload?: boolean;
}

const PERMANENT_SONU_PHOTO = '/assets/aistudio/sonu_profile_photo.png';

export const SonuPortrait: React.FC<SonuPortraitProps> = ({ 
  className = '', 
  allowUpload = true 
}) => {
  const [photoUrl, setPhotoUrl] = useState<string>(PERMANENT_SONU_PHOTO);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved photo from IndexedDB / localStorage if present, defaulting permanently to PERMANENT_SONU_PHOTO
  useEffect(() => {
    let isMounted = true;
    getLargeFile('sonu_profile_photo').then((saved) => {
      if (isMounted && saved) setPhotoUrl(saved);
      else if (isMounted) setPhotoUrl(PERMANENT_SONU_PHOTO);
    });

    const handleStorageChange = () => {
      getLargeFile('sonu_profile_photo').then((saved) => {
        if (saved) setPhotoUrl(saved);
        else setPhotoUrl(PERMANENT_SONU_PHOTO);
      });
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('sonu_photo_updated', handleStorageChange);
    return () => {
      isMounted = false;
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('sonu_photo_updated', handleStorageChange);
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          safeLocalStorageSet('sonu_profile_photo', base64);
          await saveLargeFile('sonu_profile_photo', base64);
          setPhotoUrl(base64);
          window.dispatchEvent(new Event('sonu_photo_updated'));
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
          src={photoUrl || PERMANENT_SONU_PHOTO}
          alt="Ellumalla Sonu - Master of Cybersecurity"
          className="w-full h-full object-cover object-top"
          style={{ 
            imageRendering: 'auto',
            filter: 'none',
            transform: 'none'
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = PERMANENT_SONU_PHOTO;
          }}
        />
      ) : (
        /* Razor-sharp, crystal-clear high-definition rendering of Sonu matching uploaded photo */
        <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden">
          
          {/* Solid Emerald Green Circle Backdrop (No blur, crisp sharp circle matching uploaded image!) */}
          <div 
            className="absolute rounded-full bg-[#0a7d4b]"
            style={{
              width: '74%',
              height: '74%',
              top: '12%',
              left: '13%'
            }}
          />

          {/* High-Definition Crisp Vector of Sonu with White Jacket, Polo Collar & Confident Smile */}
          <svg
            viewBox="0 0 320 400"
            className="relative z-10 w-full h-full object-contain"
            style={{ shapeRendering: 'geometricPrecision' }}
          >
            <defs>
              <linearGradient id="whiteJacketHD" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
              <linearGradient id="innerLiningHD" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
              <linearGradient id="skinToneHD" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8e8e93" />
                <stop offset="100%" stopColor="#636366" />
              </linearGradient>
            </defs>

            {/* White Windbreaker Jacket Shoulders & Chest */}
            <path
              d="M 20 400 C 20 310, 48 260, 95 240 L 160 270 L 225 240 C 272 260, 300 310, 300 400 Z"
              fill="url(#whiteJacketHD)"
              stroke="#cbd5e1"
              strokeWidth="2"
            />

            {/* Jacket Collar Flaps */}
            <path d="M 95 240 L 125 210 L 140 260 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <path d="M 225 240 L 195 210 L 180 260 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Inner Dark Lining along zipper */}
            <polygon points="125,210 145,265 160,270 140,215" fill="url(#innerLiningHD)" />
            <polygon points="195,210 175,265 160,270 180,215" fill="url(#innerLiningHD)" />

            {/* Inner White Polo Shirt */}
            <path d="M 136 215 L 160 225 L 184 215 L 175 265 L 145 265 Z" fill="#ffffff" />
            {/* Dark stripe on polo placket */}
            <line x1="160" y1="225" x2="160" y2="265" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="152" y1="230" x2="152" y2="245" stroke="#0f172a" strokeWidth="1.5" />

            {/* Center Front Zipper Line */}
            <line x1="160" y1="270" x2="160" y2="400" stroke="#475569" strokeWidth="4" />
            <line x1="156" y1="272" x2="156" y2="400" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="164" y1="272" x2="164" y2="400" stroke="#0f172a" strokeWidth="1.5" />

            {/* Neck */}
            <path d="M 138 185 L 138 225 Q 160 234 182 225 L 182 185 Z" fill="url(#skinToneHD)" />

            {/* Head & Jawline Structure */}
            <path
              d="M 116 135 C 116 95, 126 72, 160 72 C 194 72, 204 95, 204 135 C 204 175, 190 205, 160 205 C 130 205, 116 175, 116 135 Z"
              fill="#7c7c80"
            />

            {/* Ears */}
            <path d="M 114 130 C 110 130, 108 145, 115 152 Z" fill="#6c6c70" />
            <path d="M 206 130 C 210 130, 212 145, 205 152 Z" fill="#6c6c70" />

            {/* Hair: Thick, Wavy, Textured Dark Hair matching uploaded photo */}
            <path
              d="M 112 120 C 108 95, 116 55, 142 48 C 154 44, 170 44, 184 50 C 200 58, 212 78, 208 116 C 196 106, 186 102, 174 105 C 160 102, 145 102, 130 108 C 122 112, 115 118, 112 120 Z"
              fill="#111111"
            />
            {/* Hair curls/waves highlight */}
            <path d="M 136 46 Q 148 36 160 38 Q 174 34 182 44 Q 170 40 158 42 Z" fill="#222222" />
            <path d="M 148 50 Q 160 42 172 45 Q 160 48 148 50 Z" fill="#2c2c2e" />

            {/* Eyebrows (Strong, masculine, well-defined) */}
            <path d="M 126 122 Q 138 116 148 120" stroke="#111111" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M 172 120 Q 182 116 194 122" stroke="#111111" strokeWidth="4.5" strokeLinecap="round" fill="none" />

            {/* Eyes */}
            <ellipse cx="138" cy="132" rx="6.5" ry="4" fill="#111111" />
            <ellipse cx="182" cy="132" rx="6.5" ry="4" fill="#111111" />
            {/* Catchlights */}
            <circle cx="139" cy="131" r="1.8" fill="#ffffff" />
            <circle cx="183" cy="131" r="1.8" fill="#ffffff" />

            {/* Nose Bridge and Tip */}
            <path d="M 160 126 L 157 152 L 163 152" stroke="#48484a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="160" cy="154" rx="5" ry="2.5" fill="#3a3a3c" />

            {/* Mustache (Neatly trimmed, matching smile) */}
            <path d="M 144 164 Q 160 160 176 164" stroke="#111111" strokeWidth="4" strokeLinecap="round" fill="none" />

            {/* Smile with visible white teeth (Key feature from photo!) */}
            <path d="M 146 170 Q 160 182 174 170 Z" fill="#ffffff" stroke="#2c2c2e" strokeWidth="1.5" />
            <path d="M 145 169 Q 160 184 175 169" stroke="#1c1917" strokeWidth="2.5" fill="none" strokeLinecap="round" />

            {/* Well-Groomed Trimmed Beard & Stubble along jawline */}
            <path
              d="M 122 148 C 126 182, 142 200, 160 200 C 178 200, 194 182, 198 148 C 194 186, 178 196, 160 196 C 142 196, 126 186, 122 148 Z"
              fill="#111111"
              opacity="0.9"
            />
            {/* Soul patch under lip */}
            <circle cx="160" cy="186" r="3.5" fill="#111111" opacity="0.8" />
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
          title="Click to select your original photo file"
        >
          <Camera className="w-4 h-4" />
          {!photoUrl && (
            <span className="text-[10px] font-mono font-bold uppercase pr-1 hidden sm:inline">
              Upload Photo
            </span>
          )}
        </button>
      )}

    </div>
  );
};
