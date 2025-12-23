// POPUP: Reusable modal component for case study examples
// FEATURE: Modal navigation arrows with looping behavior
import { useEffect, ReactNode } from 'react';

interface ExampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  children: ReactNode;
}

export function ExampleModal({ isOpen, onClose, onPrevious, onNext, children }: ExampleModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on ESC key, navigate with arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrevious) {
        onPrevious();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrevious, onNext]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const modal = document.getElementById('example-modal');
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    modal.addEventListener('keydown', handleTab as any);
    firstElement?.focus();

    return () => {
      modal.removeEventListener('keydown', handleTab as any);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Example viewer"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* FEATURE: Previous Arrow (with looping) */}
      {onPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-[16px] md:left-[32px] z-[10000] bg-[#f1eee7] rounded-full p-[12px] hover:bg-[#e1c78f] transition-colors shadow-lg"
          aria-label="Previous example"
        >
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M15 18L9 12L15 6" stroke="#222021" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>
      )}

      {/* FEATURE: Next Arrow (with looping) */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-[16px] md:right-[32px] z-[10000] bg-[#f1eee7] rounded-full p-[12px] hover:bg-[#e1c78f] transition-colors shadow-lg"
          aria-label="Next example"
        >
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M9 18L15 12L9 6" stroke="#222021" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>
      )}

      {/* Modal Content */}
      <div
        id="example-modal"
        className="relative max-w-[95vw] max-h-[95vh] h-[95dvh] w-[95dvw] overflow-auto bg-[#f1eee7] rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-[16px] right-[16px] float-right z-10 bg-[#f1eee7] rounded-full p-[8px] hover:bg-[#e1c78f] transition-colors"
          aria-label="Close modal"
        >
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M18 6L6 18" stroke="#222021" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M6 6L18 18" stroke="#222021" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-[24px] md:p-[40px] lg:p-[80px] h-full w-full">
          {children}
        </div>
      </div>
    </div>
  );
}