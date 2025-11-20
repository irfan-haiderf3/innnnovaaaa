/**
 * Innovacare Pagination Component
 * Modern, compact pagination with Healthline-style design
 */

import React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { cn } from "@/lib/utils";
import InnovacareTheme from "@/styles/innovacare-theme";

const { colors, palette, spacing, animations } = InnovacareTheme;

export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  className?: string;
}

export default function IPagination({
  currentPage,
  totalPages,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
  className = "",
}: IPaginationProps) {
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);
  
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible + 2) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first, last, and pages around current
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      pages.push(totalPages);
    }
    
    return pages;
  };
  
  const pageSizes = [10, 15, 18, 20, 25, 50];
  
  return (
    <div 
      className={cn("flex items-center justify-between px-2 py-1.5", className)}
      style={{
        backgroundColor: colors.background,
        borderTop: `1px solid ${palette.neutral[200]}`,
      }}
    >
      {/* Left - Items info */}
      <div className="flex items-center gap-3">
        <span 
          className="text-xs"
          style={{ color: palette.neutral[600] }}
        >
          Showing <span style={{ color: colors.text, fontWeight: 600 }}>
            {startItem}-{endItem}
          </span> of <span style={{ color: colors.text, fontWeight: 600 }}>
            {totalItems}
          </span> items
        </span>
        
        {onPageSizeChange && (
          <div className="flex items-center gap-1.5">
            <span 
              className="text-xs"
              style={{ color: palette.neutral[600] }}
            >
              Show:
            </span>
            <select
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="h-7 px-2 text-xs rounded border"
              style={{
                borderColor: palette.neutral[300],
                backgroundColor: colors.background,
                color: colors.text,
                outline: 'none',
                transition: animations.transition.base,
              }}
              onFocus={(e) => {
                e.target.style.borderColor = colors.primary;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = palette.neutral[300];
              }}
            >
              {pageSizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        )}
      </div>
      
      {/* Right - Pagination controls */}
      <div className="flex items-center gap-1">
        {/* First page */}
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="p-1.5 rounded disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            color: palette.neutral[600],
            transition: animations.transition.base,
          }}
          onMouseEnter={(e) => {
            if (currentPage !== 1) {
              e.currentTarget.style.backgroundColor = palette.neutral[100];
              e.currentTarget.style.color = colors.primary;
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = palette.neutral[600];
          }}
          title="First page"
        >
          <ChevronsLeft className="h-4 w-4" />
        </button>
        
        {/* Previous page */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1.5 rounded disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            color: palette.neutral[600],
            transition: animations.transition.base,
          }}
          onMouseEnter={(e) => {
            if (currentPage !== 1) {
              e.currentTarget.style.backgroundColor = palette.neutral[100];
              e.currentTarget.style.color = colors.primary;
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = palette.neutral[600];
          }}
          title="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        
        {/* Page numbers */}
        <div className="flex items-center gap-0.5 px-1">
          {getPageNumbers().map((page, index) => (
            page === '...' ? (
              <span 
                key={`dots-${index}`} 
                className="px-2 text-xs"
                style={{ color: palette.neutral[400] }}
              >
                •••
              </span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page as number)}
                className={cn(
                  "min-w-[28px] h-7 px-2 text-xs font-medium rounded",
                  "transition-all duration-150"
                )}
                style={{
                  backgroundColor: currentPage === page ? colors.primary : 'transparent',
                  color: currentPage === page 
                    ? palette.primary.contrast 
                    : colors.text,
                  transition: animations.transition.base,
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== page) {
                    e.currentTarget.style.backgroundColor = palette.neutral[100];
                    e.currentTarget.style.color = colors.primary;
                    e.currentTarget.style.transform = animations.hoverScale.sm;
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== page) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = colors.text;
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                {page}
              </button>
            )
          ))}
        </div>
        
        {/* Next page */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            color: palette.neutral[600],
            transition: animations.transition.base,
          }}
          onMouseEnter={(e) => {
            if (currentPage !== totalPages) {
              e.currentTarget.style.backgroundColor = palette.neutral[100];
              e.currentTarget.style.color = colors.primary;
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = palette.neutral[600];
          }}
          title="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        
        {/* Last page */}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            color: palette.neutral[600],
            transition: animations.transition.base,
          }}
          onMouseEnter={(e) => {
            if (currentPage !== totalPages) {
              e.currentTarget.style.backgroundColor = palette.neutral[100];
              e.currentTarget.style.color = colors.primary;
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = palette.neutral[600];
          }}
          title="Last page"
        >
          <ChevronsRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
