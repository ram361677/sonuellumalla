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
  GraduationCap,
  Award,
  Maximize2,
  Minimize2,
  Layers,
  FileCheck,
  Loader2
} from 'lucide-react';
import { getLargeFile, saveLargeFile, getLargeData, saveLargeData, safeLocalStorageSet } from '../../utils/idbStorage';
import { convertPdfToImages } from '../../utils/pdfHelper';

interface BtechCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BtechCertificateModal: React.FC<BtechCertificateModalProps> = ({
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
      const storedPages = await getLargeData<string[]>('sonu_btech_certificate_pages');
      if (storedPages && storedPages.length > 0 && isMounted) {
        setPdfPages(storedPages);
        return;
      }
      // Fallback check for single raw file
      const rawFile = await getLargeFile('sonu_btech_certificate_file');
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
      const totalPages = pdfPages.length > 0 ? pdfPages.length : 3;
      if (e.key === 'ArrowRight') setCurrentPage((p) => Math.min(p + 1, totalPages));
      if (e.key === 'ArrowLeft') setCurrentPage((p) => Math.max(p - 1, 1));
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, pdfPages]);

  if (!isOpen) return null;

  const totalPages = pdfPages.length > 0 ? pdfPages.length : 3;

  const handleFileProcess = async (file: File) => {
    if (!file) return;

    setIsProcessing(true);
    try {
      const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');

      if (isPdf) {
        // Convert all pages of PDF to high-resolution images using PDF.js
        // This ensures 100% compatibility across all browsers and iframes!
        const pages = await convertPdfToImages(file);
        if (pages.length > 0) {
          setPdfPages(pages);
          setCurrentPage(1);
          await saveLargeData('sonu_btech_certificate_pages', pages);
          safeLocalStorageSet('sonu_btech_certificate_type', 'pdf');
        }
      } else {
        // Direct image (PNG, JPG)
        const reader = new FileReader();
        reader.onload = async (e) => {
          const base64 = e.target?.result as string;
          if (base64) {
            const pages = [base64];
            setPdfPages(pages);
            setCurrentPage(1);
            await saveLargeData('sonu_btech_certificate_pages', pages);
            await saveLargeFile('sonu_btech_certificate_file', base64);
            safeLocalStorageSet('sonu_btech_certificate_type', 'image');
          }
        };
        reader.readAsDataURL(file);
      }
    } catch (err) {
      console.error('Error processing certificate file:', err);
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
              <title>B.Tech Certificate - Ellumalla Sonu (22A51A05E1)</title>
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
            <GraduationCap className="w-5 h-5 text-[#63a5e1] shrink-0" />
            <div>
              <span className="text-xs sm:text-sm tracking-wider text-white font-bold uppercase font-serif">
                ORIGINAL B.TECH CERTIFICATE & GRADE MEMO (FULL SCREEN)
              </span>
              <div className="text-[11px] text-[#a3cfe8]">
                Ellumalla Sonu · Hall Ticket: 22A51A05E1 · AITAM Tekkali (JNTU Gurajada)
              </div>
            </div>
          </div>

          {/* Action Buttons & Page Controls */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* View Mode Toggle: Single Page vs All Pages */}
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

            {/* Page Switcher (when in single page view) */}
            {viewMode === 'single' && (
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

            {/* Upload Original PDF button */}
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
                  <span>{pdfPages.length > 0 ? 'Replace PDF' : 'Upload Original PDF'}</span>
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
              <div className="text-base font-bold uppercase font-serif">Rendering Certificate PDF Pages...</div>
              <p className="text-xs text-[#a3cfe8] max-w-sm text-center font-normal">
                Generating high-definition page renders with crystal-clear full-screen clarity.
              </p>
            </div>
          ) : pdfPages.length > 0 ? (
            /* ================= RENDER USER'S UPLOADED PDF PAGES ================= */
            <div 
              className="w-full flex flex-col items-center gap-8 py-4 transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
            >
              {viewMode === 'all' ? (
                /* Continuous All Pages Stack */
                pdfPages.map((pageImg, idx) => (
                  <div key={idx} className="w-full max-w-4xl flex flex-col items-center gap-2">
                    <div className="text-xs text-[#dfcad4] bg-[#201533] px-3 py-1 rounded-full border border-[#cb799f]/30">
                      Page {idx + 1} of {pdfPages.length}
                    </div>
                    <div className="w-full bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-[#cb799f]/40 overflow-hidden">
                      <img 
                        src={pageImg} 
                        alt={`B.Tech Certificate Page ${idx + 1}`}
                        className="w-full h-auto object-contain block"
                        style={{ imageRendering: 'auto' }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                /* Single Page View */
                <div className="w-full max-w-4xl flex flex-col items-center gap-3">
                  <div className="text-xs text-[#dfcad4] bg-[#201533] px-4 py-1 rounded-full border border-[#cb799f]/30 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#cb799f]" />
                    <span>Page {currentPage} of {pdfPages.length} · Original PDF Render</span>
                  </div>
                  <div className="w-full bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-[#cb799f]/40 overflow-hidden">
                    <img 
                      src={pdfPages[currentPage - 1]} 
                      alt={`B.Tech Certificate Page ${currentPage}`}
                      className="w-full h-auto object-contain block"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* ================= HIGH-RES REPLICA OF THE 3 PAGES (FALLBACK WHEN NO PDF UPLOADED YET) ================= */
            <div 
              className="w-full max-w-4xl transition-transform duration-200 flex justify-center my-4"
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
            >
              
              {/* PAGE 1: PROVISIONAL CERTIFICATE */}
              {currentPage === 1 && (
                <div className="w-full bg-[#fcf9f2] text-[#1c1917] p-8 sm:p-12 rounded-2xl shadow-2xl border-8 border-double border-[#b48a4c] relative font-serif select-none">
                  
                  {/* Subtle Guilloche Pattern Background */}
                  <div className="absolute inset-0 bg-[radial-gradient(#cfb786_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

                  {/* Header: AITAM + Affiliation */}
                  <div className="relative z-10 flex items-start justify-between border-b border-[#b48a4c]/50 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full border-2 border-[#b48a4c] flex items-center justify-center bg-white p-1">
                        <span className="font-sans font-black text-xs text-[#0e3b60]">aitam</span>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg font-black uppercase text-[#0e3b60] tracking-wide font-sans">
                          ADITYA INSTITUTE OF TECHNOLOGY AND MANAGEMENT
                        </div>
                        <div className="text-xs text-stone-600 font-sans font-semibold">
                          (An Autonomous Institution) · K.Kotturu, Tekkali-532201, Srikakulam, A.P, India
                        </div>
                        <div className="text-[10px] text-stone-500 font-sans">
                          Approved by AICTE · Recognized by UGC sections 2(f) & 12(b)
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* JNTU Affiliation Header */}
                  <div className="relative z-10 text-center py-2.5">
                    <div className="text-[10px] font-sans font-bold text-stone-600">Affiliated to</div>
                    <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0e3b60] font-sans">
                      JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY GURAJADA, VIZIANAGARAM
                    </div>
                    <div className="text-[10px] text-stone-500 font-sans">
                      VIZIANAGARAM - 535 003, ANDHRA PRADESH, INDIA
                    </div>
                  </div>

                  {/* Serial, PC No & Student Passport Photo Row */}
                  <div className="relative z-10 flex items-start justify-between py-3 border-t border-b border-stone-300 font-mono text-xs">
                    <div className="space-y-1.5">
                      <div><span className="text-stone-600">Sl. No : </span><strong className="text-stone-900 font-black text-base">006038</strong></div>
                      <div><span className="text-stone-600">PC No. : </span><strong className="text-stone-900 font-bold">2026JUN19BT5617</strong></div>
                      <div className="pt-2"><span className="text-stone-600">Hall Ticket No. : </span><strong className="text-stone-900 font-black text-sm bg-amber-100 px-2 py-0.5 rounded border border-amber-300">22A51A05E1</strong></div>
                    </div>

                    {/* Student Photo */}
                    <div className="w-24 h-28 border-2 border-stone-800 rounded bg-white overflow-hidden shadow-md flex items-center justify-center p-0.5">
                      <div className="text-[10px] text-center font-sans font-bold text-stone-700">
                        ELLUMALLA SONU
                      </div>
                    </div>
                  </div>

                  {/* Title: PROVISIONAL CERTIFICATE */}
                  <div className="relative z-10 text-center my-4">
                    <div className="inline-block px-8 py-1.5 rounded-md border-2 border-stone-800 bg-[#f7f2e4] text-stone-900 font-sans font-black text-sm sm:text-base tracking-widest uppercase shadow-sm">
                      PROVISIONAL CERTIFICATE
                    </div>
                  </div>

                  {/* Certificate Body Text */}
                  <div className="relative z-10 space-y-4 text-xs sm:text-sm text-stone-800 leading-relaxed font-serif pt-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span>This is to certify that Mr./Ms.</span>
                      <strong className="font-sans font-bold text-stone-950 text-sm sm:text-base underline decoration-stone-400">
                        ELLUMALLA SONU
                      </strong>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-2">
                      <span>Son/Daughter of</span>
                      <strong className="font-sans font-bold text-stone-950 underline decoration-stone-400">
                        ELLUMALLA LOKANADHAM
                      </strong>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-2">
                      <span>passed</span>
                      <strong className="font-sans font-black text-stone-950 text-sm sm:text-base underline decoration-stone-400">
                        B.Tech (Computer Science and Engineering)
                      </strong>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-2">
                      <span>degree examination of this Autonomous college held in</span>
                      <strong className="font-sans font-bold text-stone-950 underline decoration-stone-400">
                        APRIL 2026
                      </strong>
                      <span>and that</span>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-2">
                      <span>he/she was placed in</span>
                      <span className="font-sans font-black text-emerald-900 bg-emerald-100 px-3 py-0.5 rounded border border-emerald-400">
                        *** First Class ***
                      </span>
                    </div>

                    <p className="text-xs pt-2">
                      He/She has satisfied all the requirements for the award of the <strong>Bachelor of Technology</strong> degree from Aditya Institute of Technology and Management affiliated to Jawaharlal Nehru Technological University Gurajada, Vizianagaram.
                    </p>

                    <div className="text-[11px] text-stone-600 font-sans pt-2">
                      * Medium of Instruction and Examinations in English
                    </div>
                  </div>

                  {/* Bottom Signatures */}
                  <div className="relative z-10 mt-8 pt-4 border-t border-[#b48a4c]/50 flex items-end justify-between text-xs font-sans">
                    <div>
                      <div className="text-stone-600 font-mono text-[11px]">Date : 19-06-2026</div>
                    </div>

                    <div className="text-center">
                      <div className="font-serif italic font-bold text-indigo-900 text-sm">V. Chittibabu</div>
                      <div className="font-bold text-stone-800 text-[11px]">Controller of Examinations</div>
                    </div>

                    <div className="text-right">
                      <div className="font-serif italic font-bold text-indigo-900 text-sm">A. S. Rao</div>
                      <div className="font-bold text-stone-800 text-[11px]">Chief Controller of Examinations</div>
                    </div>
                  </div>

                </div>
              )}

              {/* PAGE 2: VERIFICATION SIGNATURES */}
              {currentPage === 2 && (
                <div className="w-full bg-[#fcf9f2] text-[#1c1917] p-8 sm:p-14 rounded-2xl shadow-2xl border-4 border-stone-300 relative min-h-[550px] flex flex-col justify-end">
                  <div className="text-center text-stone-400 text-xs font-mono uppercase tracking-widest mb-24">
                    [ Page 2: Endorsement & Verification Backsheet ]
                  </div>

                  <div className="grid grid-cols-3 border-2 border-stone-700 rounded-xl overflow-hidden text-center text-xs font-sans">
                    <div className="p-3 border-r border-stone-700 bg-stone-100 font-bold">
                      Prepared by
                    </div>
                    <div className="p-3 border-r border-stone-700 bg-stone-100 font-bold">
                      Verified by
                    </div>
                    <div className="p-3 bg-stone-100 font-bold">
                      Asst. Controller of Examinations
                    </div>

                    <div className="h-20 flex items-center justify-center p-2 border-r border-stone-700 font-serif italic text-base text-blue-900">
                      B. Venu
                    </div>
                    <div className="h-20 flex items-center justify-center p-2 border-r border-stone-700 font-serif italic text-base text-blue-900">
                      M. Rao
                    </div>
                    <div className="h-20 flex items-center justify-center p-2 font-serif italic text-base text-blue-900">
                      D. Sharma
                    </div>
                  </div>
                </div>
              )}

              {/* PAGE 3: CONSOLIDATED GRADE / CREDIT MEMO */}
              {currentPage === 3 && (
                <div className="w-full bg-[#fcf9f2] text-[#1c1917] p-6 sm:p-10 rounded-2xl shadow-2xl border-8 border-double border-[#b48a4c] relative font-serif select-none">
                  
                  {/* Header */}
                  <div className="text-center border-b border-[#b48a4c]/50 pb-2">
                    <div className="text-base sm:text-xl font-black uppercase text-[#0e3b60] tracking-wide font-sans">
                      ADITYA Institute of Technology And Management
                    </div>
                    <div className="text-xs font-bold text-stone-700 font-sans">
                      (An Autonomous Institution)
                    </div>
                    <div className="inline-block mt-1 px-4 py-0.5 rounded bg-[#0e3b60] text-white font-sans font-black text-xs uppercase tracking-widest">
                      CONSOLIDATED GRADE/CREDIT MEMO
                    </div>
                  </div>

                  {/* Student & College Metadata Table */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs font-sans py-3 border-b border-stone-300">
                    <div><span className="text-stone-600">Name: </span><strong className="text-stone-900">ELLUMALLA SONU</strong></div>
                    <div><span className="text-stone-600">Year of Admission: </span><strong className="text-stone-900">2022 - 2023</strong></div>
                    <div><span className="text-stone-600">Branch: </span><strong className="text-stone-900">Computer Science and Engineering</strong></div>
                    <div><span className="text-stone-600">Degree: </span><strong className="text-stone-900">B.Tech</strong></div>
                    <div><span className="text-stone-600">Hall Ticket No: </span><strong className="text-stone-900 font-mono font-bold">22A51A05E1</strong></div>
                    <div><span className="text-stone-600">Month & Year of Final Exam: </span><strong className="text-stone-900">APRIL 2026</strong></div>
                    <div><span className="text-stone-600">CGCM No: </span><strong className="text-stone-900 font-mono font-bold">26577</strong></div>
                    <div><span className="text-stone-600">College: </span><strong className="text-stone-900">AITAM - TEKKALI (Code: A5)</strong></div>
                  </div>

                  {/* Semester Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-[11px] font-sans">
                    <div className="p-2.5 rounded-lg border border-stone-300 bg-white/70 space-y-1">
                      <div className="font-bold text-[#0e3b60] border-b border-stone-200 pb-0.5">I YEAR (Sem I & II)</div>
                      <div className="flex justify-between text-[10px]">
                        <span>English (C), Linear Algebra (E), Chemistry (C), PPS (B), Graphics (C)</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-stone-600">
                        <span>Diff Eq (E), Physics (E), Data Structures (D), Basic Elec (D), IT Workshop (A)</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg border border-stone-300 bg-white/70 space-y-1">
                      <div className="font-bold text-[#0e3b60] border-b border-stone-200 pb-0.5">II YEAR (Sem I & II)</div>
                      <div className="flex justify-between text-[10px]">
                        <span>Python (B), Digital Logic (D), Discrete Maths (D), COA (C), OOP (D)</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-stone-600">
                        <span>Prob & Stats (E), DAA (D), DBMS (C), Operating Systems (B), Adv Coding (C)</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg border border-stone-300 bg-white/70 space-y-1">
                      <div className="font-bold text-[#0e3b60] border-b border-stone-200 pb-0.5">III YEAR (Sem I & II)</div>
                      <div className="flex justify-between text-[10px]">
                        <span>FLAT (C), Software Eng (B), Computer Networks (C), Unix Internals (D), Adv Python (A)</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-stone-600">
                        <span>Web Tech (C), Compiler Design (A), Management (B), IoT (B), Mobile App Lab (A)</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg border border-stone-300 bg-white/70 space-y-1">
                      <div className="font-bold text-[#0e3b60] border-b border-stone-200 pb-0.5">IV YEAR (Sem I & II)</div>
                      <div className="flex justify-between text-[10px]">
                        <span>Crypto & NetSec (D), Machine Learning (B), HCI (B), Blockchain Tech (A)</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-emerald-800 font-bold">
                        <span>Project Work (A · Grade Points 9 · Credits 12)</span>
                      </div>
                    </div>
                  </div>

                  {/* Standing Box */}
                  <div className="p-3 rounded-xl bg-amber-100/80 border-2 border-amber-300 flex flex-wrap items-center justify-between gap-4 font-mono text-xs sm:text-sm text-stone-900 my-2">
                    <div>
                      <div>Number of Credits Registered: <strong>180.00</strong></div>
                      <div>Number of Credits Obtained: <strong>160.00</strong></div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-black text-emerald-900">
                        OVERALL CGPA : 7.47
                      </div>
                      <div className="text-xs font-bold text-stone-700">
                        Class Obtained: First Class
                      </div>
                    </div>
                  </div>

                  {/* Signatures */}
                  <div className="mt-4 pt-3 border-t border-[#b48a4c]/50 flex items-center justify-between text-xs font-sans">
                    <div className="text-stone-600 font-mono text-[11px]">Date : 19-06-2026</div>
                    <div className="text-center">
                      <div className="font-serif italic font-bold text-indigo-900">V. Chittibabu</div>
                      <div className="font-bold text-stone-800 text-[10px]">CONTROLLER OF EXAMINATIONS</div>
                    </div>
                    <div className="text-right">
                      <div className="font-serif italic font-bold text-indigo-900">A. S. Rao</div>
                      <div className="font-bold text-stone-800 text-[10px]">CHIEF CONTROLLER OF EXAMINATIONS</div>
                    </div>
                  </div>

                </div>
              )}

            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-5 py-3 bg-[#14284b] border-t border-[#63a5e1]/30 flex flex-wrap items-center justify-between gap-3 text-xs text-[#a3cfe8] shrink-0 font-serif">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#63a5e1]" />
            <span>Aditya Institute of Technology and Management · Affiliated to JNTUGV Vizianagaram</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-[#63a5e1] hover:text-white underline cursor-pointer uppercase font-bold"
            >
              Upload PDF File
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
