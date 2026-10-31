import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  UploadCloud, 
  Printer, 
  CheckCircle2, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  RotateCw,
  FileImage,
  ShieldCheck
} from 'lucide-react';
import { getLargeFile, saveLargeFile } from '../../utils/idbStorage';

interface IntermediateCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IntermediateCertificateModal: React.FC<IntermediateCertificateModalProps> = ({
  isOpen,
  onClose
}) => {
  const [certImage, setCertImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved certificate from IndexedDB
  useEffect(() => {
    let isMounted = true;
    getLargeFile('sonu_intermediate_certificate').then((saved) => {
      if (isMounted && saved) {
        setCertImage(saved);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFileProcess = (file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          setCertImage(base64);
          await saveLargeFile('sonu_intermediate_certificate', base64);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileProcess(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileProcess(file);
  };

  const handleDownload = () => {
    if (!certImage) return;
    const a = document.createElement('a');
    a.href = certImage;
    a.download = 'Ellumalla_Sonu_Intermediate_Certificate.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handlePrint = () => {
    if (!certImage) return;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Ellumalla Sonu - Intermediate Certificate</title>
            <style>
              body { margin: 0; display: flex; justify-content: center; align-items: center; background: #fff; }
              img { max-width: 100%; height: auto; display: block; }
            </style>
          </head>
          <body>
            <img src="${certImage}" onload="window.print();window.close();" />
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 p-2 sm:p-4 bg-[#081324]/90 backdrop-blur-md flex items-center justify-center overflow-y-auto font-serif"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl my-auto rounded-[32px] bg-[#0e1a2f] border-2 border-[#63a5e1]/50 shadow-[0_25px_60px_rgba(8,19,36,0.9)] overflow-hidden text-[#e2edf8] flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-4 sm:px-6 py-3 bg-[#14284b] border-b border-[#63a5e1]/30 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#63a5e1]" />
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase font-serif">
                ORIGINAL SECONDARY SCHOOL CERTIFICATE
              </span>
              <div className="text-[11px] text-[#a3cfe8]">
                Ellumalla Sonu · Reg No: 2202230921 · Board of Intermediate Education AP
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {certImage && (
              <>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(z + 0.2, 2.5))}
                  className="p-1.5 rounded-lg bg-[#183057] hover:bg-[#203f73] border border-[#63a5e1]/30 text-[#e2edf8] transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4 text-[#63a5e1]" />
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.max(z - 0.2, 0.6))}
                  className="p-1.5 rounded-lg bg-[#183057] hover:bg-[#203f73] border border-[#63a5e1]/30 text-[#e2edf8] transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4 text-[#63a5e1]" />
                </button>
                <button
                  onClick={() => setRotation((r) => (r + 90) % 360)}
                  className="p-1.5 rounded-lg bg-[#183057] hover:bg-[#203f73] border border-[#63a5e1]/30 text-[#e2edf8] transition-colors cursor-pointer"
                  title="Rotate"
                >
                  <RotateCw className="w-4 h-4 text-[#63a5e1]" />
                </button>
                <button
                  onClick={handleDownload}
                  className="p-1.5 rounded-lg bg-[#183057] hover:bg-[#203f73] border border-[#63a5e1]/30 text-[#e2edf8] transition-colors cursor-pointer"
                  title="Download Certificate"
                >
                  <Download className="w-4 h-4 text-[#63a5e1]" />
                </button>
                <button
                  onClick={handlePrint}
                  className="p-1.5 rounded-lg bg-[#183057] hover:bg-[#203f73] border border-[#63a5e1]/30 text-[#e2edf8] transition-colors cursor-pointer"
                  title="Print Certificate"
                >
                  <Printer className="w-4 h-4 text-[#63a5e1]" />
                </button>
              </>
            )}

            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />

            {/* Upload / Replace button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-3 py-1.5 rounded-full btn-origin-primary text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md uppercase"
            >
              <UploadCloud className="w-4 h-4" />
              <span>{certImage ? 'Replace Original Image' : 'Select Certificate Image'}</span>
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#183057] hover:bg-[#203f73] text-[#e2edf8] hover:text-white border border-[#63a5e1]/30 transition-colors cursor-pointer ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-[#63a5e1]" />
            </button>
          </div>
        </div>

        {/* Modal Center Body */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 flex flex-col items-center justify-center custom-scrollbar bg-[#091526]">
          {certImage ? (
            <div className="w-full flex items-center justify-center overflow-auto py-2">
              <div 
                className="transition-transform duration-200 max-w-full flex justify-center"
                style={{
                  transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                  transformOrigin: 'center center'
                }}
              >
                <img 
                  src={certImage} 
                  alt="Original Board of Intermediate Education Certificate - Ellumalla Sonu"
                  className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl border-2 border-[#63a5e1]/50"
                  style={{
                    imageRendering: 'auto',
                    filter: 'none'
                  }}
                />
              </div>
            </div>
          ) : (
            <div 
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`w-full max-w-xl p-8 sm:p-12 rounded-3xl border-2 border-dashed transition-all flex flex-col items-center justify-center text-center cursor-pointer select-none ${
                isDragging 
                  ? 'border-[#63a5e1] bg-[#63a5e1]/10' 
                  : 'border-[#63a5e1]/40 hover:border-[#63a5e1] bg-[#10223f]'
              }`}
            >
              <div className="w-20 h-20 rounded-full bg-[#183057] border border-[#63a5e1]/50 flex items-center justify-center mb-4 text-[#63a5e1] shadow-md">
                <FileImage className="w-10 h-10" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white uppercase mb-2 font-serif">
                Click to Insert Your Original Certificate Image
              </h3>
              
              <p className="text-xs sm:text-sm text-[#c8d9ed] max-w-md leading-relaxed mb-6 font-normal">
                Select or drop your provided certificate photo (<strong className="text-[#63a5e1]">image.png</strong>). It will be embedded directly in original resolution with zero alterations.
              </p>

              <button
                type="button"
                className="px-6 py-2.5 rounded-full btn-origin-primary text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Browse File (image.png)</span>
              </button>

              <div className="mt-4 text-[11px] text-[#63a5e1] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Saved locally in your browser with full permanence</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-5 py-3 bg-[#14284b] border-t border-[#63a5e1]/30 flex flex-wrap items-center justify-between gap-3 text-xs text-[#a3cfe8]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#63a5e1]" />
            <span>Official Document: Board of Intermediate Education Andhra Pradesh · Reg No: 2202230921</span>
          </div>

          <a
            href="https://bie.ap.gov.in/getQrData.do?rno=2202230921"
            target="_blank"
            rel="noreferrer"
            className="text-[#63a5e1] hover:text-white flex items-center gap-1 underline cursor-pointer"
          >
            <span>Verify on AP BIE Portal</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
};
