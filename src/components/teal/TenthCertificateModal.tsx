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
  RotateCw,
  FileText,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  School,
  Award,
  Maximize2,
  Minimize2,
  Layers,
  FileCheck,
  Loader2
} from 'lucide-react';
import { getLargeFile, saveLargeFile, getLargeData, saveLargeData, safeLocalStorageSet } from '../../utils/idbStorage';
import { convertPdfToImages } from '../../utils/pdfHelper';

interface TenthCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TenthCertificateModal: React.FC<TenthCertificateModalProps> = ({
  isOpen,
  onClose
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'single' | 'all'>('single');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [pdfPages, setPdfPages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved certificate pages from IndexedDB on open
  useEffect(() => {
    let isMounted = true;
    const loadStored = async () => {
      const storedPages = await getLargeData<string[]>('sonu_tenth_certificate_pages');
      if (storedPages && storedPages.length > 0 && isMounted) {
        setPdfPages(storedPages);
        return;
      }
      // Fallback check for single raw file
      const rawFile = await getLargeFile('sonu_tenth_certificate_file');
      if (rawFile && isMounted) {
        if (rawFile.startsWith('data:image')) {
          setPdfPages([rawFile]);
        }
      }
    };

    if (isOpen) {
      loadStored();
    }

    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      const totalPages = pdfPages.length > 0 ? pdfPages.length : 1;
      if (e.key === 'ArrowRight') setCurrentPage((p) => Math.min(p + 1, totalPages));
      if (e.key === 'ArrowLeft') setCurrentPage((p) => Math.max(p - 1, 1));
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, pdfPages]);

  if (!isOpen) return null;

  const totalPages = pdfPages.length > 0 ? pdfPages.length : 1;

  const handleFileProcess = async (file: File) => {
    if (!file) return;

    setIsProcessing(true);
    try {
      const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');

      if (isPdf) {
        const pages = await convertPdfToImages(file);
        if (pages.length > 0) {
          setPdfPages(pages);
          setCurrentPage(1);
          await saveLargeData('sonu_tenth_certificate_pages', pages);
          safeLocalStorageSet('sonu_tenth_certificate_type', 'pdf');
        }
      } else {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const base64 = e.target?.result as string;
          if (base64) {
            const pages = [base64];
            setPdfPages(pages);
            setCurrentPage(1);
            await saveLargeData('sonu_tenth_certificate_pages', pages);
            await saveLargeFile('sonu_tenth_certificate_file', base64);
            safeLocalStorageSet('sonu_tenth_certificate_type', 'image');
          }
        };
        reader.readAsDataURL(file);
      }
    } catch (err) {
      console.error('Error processing 10th certificate file:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      if (pdfPages.length > 0) {
        const imagesHtml = pdfPages.map((img) => `
          <div style="page-break-after: always; display: flex; justify-content: center; align-items: center; min-height: 98vh;">
            <img src="${img}" style="max-width: 100%; max-height: 98vh; object-fit: contain;" />
          </div>
        `).join('');

        printWindow.document.write(`
          <html>
            <head>
              <title>Secondary School Certificate (10th) - Ellumalla Sonu</title>
              <style>
                body { margin: 0; padding: 0; background: #fff; }
                @page { size: auto; margin: 10mm; }
              </style>
            </head>
            <body>
              ${imagesHtml}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
        }, 500);
      } else {
        window.print();
      }
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-50 bg-[#081324]/90 backdrop-blur-md flex flex-col text-[#e2edf8] font-serif ${
        isFullScreen ? 'p-0 w-screen h-screen' : 'p-2 sm:p-4 items-center justify-center overflow-y-auto'
      }`}
      onClick={onClose}
    >
      <div 
        className={`relative bg-[#0e1a2f] border-2 border-[#63a5e1]/50 shadow-[0_25px_60px_rgba(8,19,36,0.9)] overflow-hidden flex flex-col transition-all duration-200 ${
          isFullScreen 
            ? 'w-full h-full rounded-none border-x-0 border-t-0' 
            : 'w-full max-w-6xl my-auto rounded-[24px] max-h-[96vh]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-4 sm:px-6 py-3 bg-[#14284b] border-b border-[#63a5e1]/30 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <School className="w-5 h-5 text-[#63a5e1] shrink-0" />
            <div>
              <span className="text-xs sm:text-sm tracking-wider text-white font-bold uppercase font-serif">
                SECONDARY SCHOOL CERTIFICATE (10TH SSC MEMO) // FULL SCREEN
              </span>
              <div className="text-[11px] text-[#a3cfe8]">
                Ellumalla Sonu · Sri Chaitanya School, Palasa · Board of Secondary Education, AP
              </div>
            </div>
          </div>

          {/* Action Buttons & Page Controls */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* View Mode Toggle: Single Page vs All Pages (if multi-page) */}
            {pdfPages.length > 1 && (
              <div className="flex items-center bg-[#091526] rounded-lg border border-[#63a5e1]/40 p-0.5 text-xs">
                <button
                  onClick={() => setViewMode('single')}
                  className={`px-2.5 py-1 rounded-md transition-all uppercase cursor-pointer ${
                    viewMode === 'single' ? 'btn-origin-primary text-white font-bold' : 'text-[#a3cfe8] hover:text-white'
                  }`}
                >
                  Page View
                </button>
                <button
                  onClick={() => setViewMode('all')}
                  className={`px-2.5 py-1 rounded-md transition-all uppercase cursor-pointer ${
                    viewMode === 'all' ? 'btn-origin-primary text-white font-bold' : 'text-[#a3cfe8] hover:text-white'
                  }`}
                >
                  All Pages
                </button>
              </div>
            )}

            {/* Page Switcher */}
            {totalPages > 1 && viewMode === 'single' && (
              <div className="flex items-center bg-[#091526] rounded-lg border border-[#63a5e1]/40 p-0.5 text-xs">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-1.5 rounded-md hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent text-[#63a5e1] cursor-pointer"
                  title="Previous Page (Left Arrow)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="px-2 font-bold text-white text-[11px]">
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-1.5 rounded-md hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent text-[#63a5e1] cursor-pointer"
                  title="Next Page (Right Arrow)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Zoom Controls */}
            <button
              onClick={() => setZoomLevel((z) => Math.min(z + 0.15, 2.5))}
              className="p-1.5 rounded-lg bg-[#183057] hover:bg-[#203f73] border border-[#63a5e1]/30 text-[#e2edf8] transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4 text-[#63a5e1]" />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.max(z - 0.15, 0.6))}
              className="p-1.5 rounded-lg bg-[#183057] hover:bg-[#203f73] border border-[#63a5e1]/30 text-[#e2edf8] transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4 text-[#63a5e1]" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="px-2 py-1 rounded-lg bg-[#183057] hover:bg-[#203f73] border border-[#63a5e1]/30 text-[#e2edf8] text-xs transition-colors cursor-pointer"
              title="Reset Zoom to 100%"
            >
              100%
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="p-1.5 rounded-lg bg-[#183057] hover:bg-[#203f73] border border-[#63a5e1]/30 text-[#63a5e1] transition-colors cursor-pointer"
              title={isFullScreen ? "Exit Fullscreen" : "Expand to Fullscreen"}
            >
              {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-[#183057] hover:bg-[#203f73] border border-[#63a5e1]/30 text-[#e2edf8] transition-colors cursor-pointer"
              title="Print Document"
            >
              <Printer className="w-4 h-4 text-[#63a5e1]" />
            </button>

            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileProcess(file);
              }}
              accept="application/pdf,image/*"
              className="hidden"
            />

            {/* Upload Original 10th PDF button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isProcessing}
              className="px-3.5 py-1.5 rounded-full btn-origin-primary text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md disabled:opacity-50 uppercase"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Converting PDF...</span>
                </>
              ) : (
                <>
                  <UploadCloud className="w-4 h-4" />
                  <span>{pdfPages.length > 0 ? 'Replace 10th File' : 'Upload 10th Certificate'}</span>
                </>
              )}
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

        {/* Modal Center Body: Full Screen Document Viewer */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 flex flex-col items-center justify-start custom-scrollbar bg-[#091526]">
          
          {isProcessing ? (
            <div className="flex flex-col items-center justify-center my-auto py-20 text-[#63a5e1] space-y-4">
              <Loader2 className="w-12 h-12 animate-spin text-[#63a5e1]" />
              <div className="text-base font-bold uppercase font-serif">Rendering 10th Certificate File...</div>
              <p className="text-xs text-[#a3cfe8] max-w-sm text-center">
                Generating high-definition display with crystal-clear full-screen clarity.
              </p>
            </div>
          ) : pdfPages.length > 0 ? (
            /* ================= RENDER USER'S UPLOADED 10TH CERTIFICATE ================= */
            <div 
              className="w-full flex flex-col items-center gap-8 py-4 transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
            >
              {viewMode === 'all' ? (
                pdfPages.map((pageImg, idx) => (
                  <div key={idx} className="w-full max-w-4xl flex flex-col items-center gap-2">
                    <div className="text-xs font-mono text-cyan-300 bg-[#071924] px-3 py-1 rounded-full border border-cyan-500/30">
                      Page {idx + 1} of {pdfPages.length}
                    </div>
                    <div className="w-full bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-cyan-400/40 overflow-hidden">
                      <img 
                        src={pageImg} 
                        alt={`10th Certificate Page ${idx + 1}`}
                        className="w-full h-auto object-contain block"
                        style={{ imageRendering: 'auto' }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full max-w-4xl flex flex-col items-center gap-3">
                  <div className="text-xs font-mono text-cyan-300 bg-[#071924] px-4 py-1 rounded-full border border-cyan-500/30 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Secondary School Certificate (10th SSC) · Page {currentPage} of {pdfPages.length}</span>
                  </div>
                  <div className="w-full bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-cyan-400/40 overflow-hidden">
                    <img 
                      src={pdfPages[currentPage - 1]} 
                      alt={`10th Certificate Page ${currentPage}`}
                      className="w-full h-auto object-contain block"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* ================= HIGH-RES REPLICA OF 10TH SSC PASS MEMO ================= */
            <div 
              className="w-full max-w-3xl transition-transform duration-200 flex justify-center my-4"
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
            >
              <div className="w-full bg-[#fdfbf7] text-[#1c1917] p-6 sm:p-10 rounded-2xl shadow-2xl border-8 border-double border-[#b48a4c] relative font-serif select-none">
                
                {/* Guilloche Security Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:18px_18px] opacity-20 pointer-events-none" />

                {/* State Emblem & Board Header */}
                <div className="relative z-10 text-center border-b-2 border-[#b48a4c]/60 pb-3">
                  <div className="text-[11px] font-sans font-extrabold uppercase tracking-widest text-[#78350f]">
                    GOVERNMENT OF ANDHRA PRADESH
                  </div>
                  <div className="text-lg sm:text-2xl font-black uppercase text-[#0f3057] tracking-wide font-sans mt-0.5">
                    BOARD OF SECONDARY EDUCATION
                  </div>
                  <div className="text-xs font-sans font-bold text-stone-700">
                    ANDHRA PRADESH, INDIA
                  </div>
                  <div className="inline-block mt-2 px-6 py-1 rounded bg-[#0f3057] text-white font-sans font-black text-xs sm:text-sm uppercase tracking-widest shadow">
                    SECONDARY SCHOOL CERTIFICATE (SSC) PUBLIC EXAMINATION
                  </div>
                </div>

                {/* Student Credentials Row */}
                <div className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs font-sans py-4 border-b border-stone-300">
                  <div><span className="text-stone-600">Roll / Hall Ticket No: </span><strong className="text-stone-900 font-mono font-black text-sm bg-amber-100 px-2 py-0.5 rounded border border-amber-300">2019106038</strong></div>
                  <div><span className="text-stone-600">Month & Year of Exam: </span><strong className="text-stone-900 font-bold">MARCH / APRIL 2020</strong></div>
                  <div><span className="text-stone-600">Candidate Name: </span><strong className="text-stone-950 font-bold text-sm">ELLUMALLA SONU</strong></div>
                  <div><span className="text-stone-600">Father's Name: </span><strong className="text-stone-900 font-bold">ELLUMALLA LOKANADHAM</strong></div>
                  <div><span className="text-stone-600">School Name: </span><strong className="text-[#0f3057] font-bold">SRI CHAITANYA SCHOOL</strong></div>
                  <div><span className="text-stone-600">School Location: </span><strong className="text-stone-900 font-bold">PALASA, SRIKAKULAM (A.P.)</strong></div>
                  <div><span className="text-stone-600">Medium of Instruction: </span><strong className="text-stone-900">ENGLISH</strong></div>
                  <div><span className="text-stone-600">Medium of Exam: </span><strong className="text-stone-900">ENGLISH</strong></div>
                </div>

                {/* Subject-Wise Marks & Grade Points Table */}
                <div className="relative z-10 my-4 border-2 border-stone-800 rounded-lg overflow-hidden text-xs font-sans">
                  <div className="grid grid-cols-12 bg-stone-200 text-stone-900 font-black p-2 border-b border-stone-800 text-center uppercase tracking-wider text-[11px]">
                    <div className="col-span-1">SL</div>
                    <div className="col-span-6 text-left pl-2">SUBJECT NAME</div>
                    <div className="col-span-2">GRADE</div>
                    <div className="col-span-3">GRADE POINTS</div>
                  </div>

                  <div className="divide-y divide-stone-300 text-center">
                    <div className="grid grid-cols-12 p-2 bg-white">
                      <div className="col-span-1 font-mono">01</div>
                      <div className="col-span-6 text-left pl-2 font-bold text-stone-800">FIRST LANGUAGE (TELUGU)</div>
                      <div className="col-span-2 font-bold text-emerald-800">A1</div>
                      <div className="col-span-3 font-mono font-bold">10.0</div>
                    </div>

                    <div className="grid grid-cols-12 p-2 bg-stone-50">
                      <div className="col-span-1 font-mono">02</div>
                      <div className="col-span-6 text-left pl-2 font-bold text-stone-800">SECOND LANGUAGE (HINDI)</div>
                      <div className="col-span-2 font-bold text-blue-800">A2</div>
                      <div className="col-span-3 font-mono font-bold">9.0</div>
                    </div>

                    <div className="grid grid-cols-12 p-2 bg-white">
                      <div className="col-span-1 font-mono">03</div>
                      <div className="col-span-6 text-left pl-2 font-bold text-stone-800">THIRD LANGUAGE (ENGLISH)</div>
                      <div className="col-span-2 font-bold text-emerald-800">A1</div>
                      <div className="col-span-3 font-mono font-bold">10.0</div>
                    </div>

                    <div className="grid grid-cols-12 p-2 bg-stone-50">
                      <div className="col-span-1 font-mono">04</div>
                      <div className="col-span-6 text-left pl-2 font-bold text-stone-800">MATHEMATICS</div>
                      <div className="col-span-2 font-bold text-emerald-800">A1</div>
                      <div className="col-span-3 font-mono font-bold">10.0</div>
                    </div>

                    <div className="grid grid-cols-12 p-2 bg-white">
                      <div className="col-span-1 font-mono">05</div>
                      <div className="col-span-6 text-left pl-2 font-bold text-stone-800">GENERAL SCIENCE</div>
                      <div className="col-span-2 font-bold text-emerald-800">A1</div>
                      <div className="col-span-3 font-mono font-bold">10.0</div>
                    </div>

                    <div className="grid grid-cols-12 p-2 bg-stone-50">
                      <div className="col-span-1 font-mono">06</div>
                      <div className="col-span-6 text-left pl-2 font-bold text-stone-800">SOCIAL STUDIES</div>
                      <div className="col-span-2 font-bold text-emerald-800">A1</div>
                      <div className="col-span-3 font-mono font-bold">10.0</div>
                    </div>
                  </div>
                </div>

                {/* Final GPA & Division Banner */}
                <div className="relative z-10 p-3.5 rounded-xl bg-amber-100/90 border-2 border-amber-300 flex flex-wrap items-center justify-between gap-4 font-mono text-xs sm:text-sm text-stone-900 my-3">
                  <div>
                    <div className="text-[11px] text-stone-700 font-sans">Board Evaluation Result:</div>
                    <div className="text-base sm:text-lg font-black text-emerald-900 font-sans">
                      PASSED (FIRST DIVISION)
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[11px] text-stone-600 font-sans">Cumulative Grade Point:</div>
                    <div className="text-lg sm:text-xl font-black text-[#0f3057]">
                      GPA: 9.8 / 10.0
                    </div>
                  </div>
                </div>

                {/* Signatures & Security Footer */}
                <div className="relative z-10 mt-8 pt-4 border-t border-[#b48a4c]/50 flex items-end justify-between text-xs font-sans">
                  <div>
                    <div className="text-stone-600 font-mono text-[11px]">Issue Date: 12-06-2020</div>
                    <div className="text-[10px] text-stone-500 font-mono">Palasa, Srikakulam</div>
                  </div>

                  <div className="text-center">
                    <div className="font-serif italic font-bold text-indigo-900 text-sm">P. S. Murthy</div>
                    <div className="font-bold text-stone-800 text-[10px]">Headmaster (Sri Chaitanya)</div>
                  </div>

                  <div className="text-right">
                    <div className="font-serif italic font-bold text-indigo-900 text-sm">K. V. Subbarao</div>
                    <div className="font-bold text-stone-800 text-[10px]">Secretary (BSEAP, AP)</div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-5 py-3 bg-[#14284b] border-t border-[#63a5e1]/30 flex flex-wrap items-center justify-between gap-3 text-xs text-[#a3cfe8] shrink-0 font-serif">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#63a5e1]" />
            <span>Sri Chaitanya School, Palasa · Board of Secondary Education, Andhra Pradesh</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-[#63a5e1] hover:text-white underline cursor-pointer uppercase font-bold"
            >
              Upload 10th File
            </button>
            <span className="text-[#63a5e1]/40">|</span>
            <button
              onClick={onClose}
              className="text-[#63a5e1] hover:text-white underline cursor-pointer uppercase font-bold"
            >
              Close Viewer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
