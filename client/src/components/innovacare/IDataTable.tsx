/**
 * Innovacare Data Table Component
 * Clean, modern table with 4-color design and pagination
 * Flat design inspired by Healthline
 */

import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import InnovacareTheme from "@/styles/innovacare-theme";
import IPagination from "./IPagination";

const { colors, palette, spacing, animations, components } = InnovacareTheme;

export interface TableColumn<T> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  width?: string;
  render?: (value: any, row: T) => React.ReactNode;
}

export interface IDataTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  className?: string;
  pageSize?: number;
  showPagination?: boolean;
}

export default function IDataTable<T extends Record<string, any>>({
  data,
  columns,
  className = "",
  pageSize: initialPageSize = 10,
  showPagination = true,
}: IDataTableProps<T>) {
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const handleSort = (columnKey: string) => {
    if (sortBy === columnKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(columnKey);
      setSortOrder("asc");
    }
  };

  // Sort data
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      if (!sortBy) return 0;
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
      if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortBy, sortOrder]);
  
  // Paginate data
  const paginatedData = useMemo(() => {
    if (!showPagination) return sortedData;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, currentPage, pageSize, showPagination]);
  
  const totalPages = Math.ceil(data.length / pageSize);
  
  // Reset to first page when page size changes
  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize);
    setCurrentPage(1);
  };

  return (
    <div 
      className={cn("flex flex-col rounded-lg", className)}
      style={{
        backgroundColor: colors.background,
        border: `1px solid ${palette.neutral[200]}`,
        boxShadow: spacing.boxShadow.sm,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div style={{ flex: '1 1 auto', minHeight: 0, overflow: 'auto' }}>
        <Table>
          <TableHeader 
            style={{ 
              backgroundColor: components.table.headerBg,
              borderBottom: `2px solid ${components.table.borderColor}`,
            }}
          >
            <TableRow className="hover:bg-transparent">
              {columns.map((column, index) => (
                <TableHead
                  key={String(column.key)}
                  className="h-8 font-semibold"
                  style={{
                    minWidth: column.width || '100px',
                    color: components.table.headerText,
                    backgroundColor: components.table.headerBg,
                  }}
                >
                  {column.sortable ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSort(String(column.key))}
                      className="h-8 text-xs font-semibold px-2 gap-1"
                      style={{
                        color: components.table.headerText,
                        transition: animations.transition.base,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = palette.neutral[200];
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      {column.label}
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  ) : (
                    <span className="text-xs font-semibold px-2">{column.label}</span>
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell 
                  colSpan={columns.length} 
                  className="text-center py-8 text-sm"
                  style={{ color: palette.neutral[500] }}
                >
                  No records found
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  className="h-8 border-b"
                  style={{
                    backgroundColor: rowIndex % 2 === 0 
                      ? components.table.rowBg 
                      : components.table.rowAltBg,
                    borderColor: components.table.borderColor,
                    transition: animations.transition.fast,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = components.table.rowHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = rowIndex % 2 === 0 
                      ? components.table.rowBg 
                      : components.table.rowAltBg;
                  }}
                >
                  {columns.map((column, cellIndex) => (
                    <TableCell
                      key={String(column.key)}
                      className={cn(
                        "text-xs py-1 px-2",
                        cellIndex === 0 && "font-medium"
                      )}
                      style={{
                        color: cellIndex === 0 ? colors.primary : colors.text,
                      }}
                    >
                      {column.render 
                        ? column.render(row[String(column.key)], row)
                        : row[String(column.key)] || '-'
                      }
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      
      {showPagination && data.length > 0 && (
        <div style={{ flex: '0 0 auto' }}>
          <IPagination
            currentPage={currentPage}
            totalPages={totalPages}
            pageSize={pageSize}
            totalItems={data.length}
            onPageChange={setCurrentPage}
            onPageSizeChange={handlePageSizeChange}
          />
        </div>
      )}
    </div>
  );
}

/**
 * Cell Renderers - Reusable render functions
 */
export const cellRenderers = {
  badge: (value: string, variant: 'primary' | 'accent' | 'success' | 'warning' | 'error' = 'primary') => {
    const variantColors = {
      primary: { bg: palette.primary.light + '20', text: colors.primary },
      accent: { bg: palette.accent.light + '20', text: colors.accent },
      success: { bg: palette.success + '20', text: palette.success },
      warning: { bg: palette.warning + '20', text: palette.warning },
      error: { bg: palette.error + '20', text: palette.error },
    };
    const style = variantColors[variant];
    
    return (
      <Badge 
        variant="outline"
        className="text-[10px] font-semibold px-2 py-0.5"
        style={{
          backgroundColor: style.bg,
          color: style.text,
          borderColor: style.text,
        }}
      >
        {value}
      </Badge>
    );
  },
  
  boolean: (value: boolean) => (
    <div className="flex justify-center">
      {value ? (
        <CheckCircle className="h-4 w-4" style={{ color: palette.success }} />
      ) : (
        <XCircle className="h-4 w-4" style={{ color: palette.neutral[700] }} />
      )}
    </div>
  ),
  
  link: (value: string, href: string) => (
    <a 
      href={href}
      className="text-xs font-medium hover:underline"
      style={{ 
        color: colors.accent,
        transition: animations.transition.base,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = palette.accent.dark;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = colors.accent;
      }}
    >
      {value}
    </a>
  ),
};
