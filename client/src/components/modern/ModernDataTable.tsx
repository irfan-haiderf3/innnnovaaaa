/**
 * Modern Data Table Component
 * Reusable table component with sorting, modern styling, and animations
 * Based on PlanboardTable design patterns
 */

import { useState } from "react";
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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ArrowUpDown, CheckCircle, Bell, FileText } from "lucide-react";
import { brandColors, withOpacity } from "@/config/branding";

export interface TableColumn<T> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  width?: string;
  render?: (value: any, row: T) => React.ReactNode;
}

export interface ModernDataTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  className?: string;
}

export default function ModernDataTable<T extends Record<string, any>>({
  data,
  columns,
  className = "",
}: ModernDataTableProps<T>) {
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (columnKey: string) => {
    if (sortBy === columnKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(columnKey);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortBy) return 0;
    const aVal = a[sortBy];
    const bVal = b[sortBy];
    if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
    if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className={`h-full flex flex-col rounded-lg border bg-white shadow-sm ${className}`}>
      <ScrollArea className="flex-1">
        <Table>
          <TableHeader 
            className="sticky top-0 z-20 border-b-2"
            style={{ 
              background: `linear-gradient(to right, ${brandColors.primary[50]}, ${brandColors.primary[100]}, ${brandColors.primary[50]})`,
              borderColor: brandColors.primary[300]
            }}
          >
            <TableRow className="hover:bg-transparent">
              {columns.map((column, index) => (
                <TableHead
                  key={String(column.key)}
                  className={`h-10 font-bold ${index === 0 ? 'sticky left-0 z-10' : ''}`}
                  style={{
                    minWidth: column.width || '100px',
                    color: brandColors.neutral[700],
                    background: index === 0 
                      ? `linear-gradient(to right, ${brandColors.primary[50]}, ${brandColors.primary[100]}, ${brandColors.primary[50]})`
                      : 'transparent'
                  }}
                >
                  {column.sortable ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSort(String(column.key))}
                      className="h-8 text-xs font-bold px-2 hover:bg-white/60 transition-all duration-200"
                    >
                      {column.label}
                      <ArrowUpDown className="ml-1 h-3 w-3" />
                    </Button>
                  ) : (
                    <span className="text-xs font-bold px-2">{column.label}</span>
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.length === 0 ? (
              <TableRow>
                <TableCell 
                  colSpan={columns.length} 
                  className="text-center text-muted-foreground py-8 text-sm"
                >
                  No records found
                </TableCell>
              </TableRow>
            ) : (
              sortedData.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  className="h-10 transition-all duration-150 hover:shadow-sm border-b"
                  style={{
                    backgroundColor: rowIndex % 2 === 0 
                      ? brandColors.neutral[50] 
                      : brandColors.neutral[100],
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = withOpacity(brandColors.primary[200], 0.3);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = rowIndex % 2 === 0 
                      ? brandColors.neutral[50] 
                      : brandColors.neutral[100];
                  }}
                >
                  {columns.map((column, cellIndex) => (
                    <TableCell
                      key={String(column.key)}
                      className={`text-xs py-2 px-3 ${cellIndex === 0 ? 'sticky left-0 bg-inherit z-10 font-medium' : ''}`}
                      style={{
                        color: cellIndex === 0 
                          ? brandColors.primary[600] 
                          : brandColors.neutral[700]
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
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

/**
 * Predefined render functions for common cell types
 */
export const cellRenderers = {
  // Render a badge
  badge: (value: string, variant: "default" | "success" | "warning" | "error" = "default") => (
    <Badge 
      variant="outline"
      className="text-[10px] font-semibold px-2 py-0.5"
      style={{
        backgroundColor: variant === "success" ? brandColors.success + '20' :
                        variant === "warning" ? brandColors.warning + '20' :
                        variant === "error" ? brandColors.error + '20' :
                        brandColors.primary[100],
        color: variant === "success" ? brandColors.success :
               variant === "warning" ? brandColors.warning :
               variant === "error" ? brandColors.error :
               brandColors.primary[700],
        borderColor: variant === "success" ? brandColors.success :
                     variant === "warning" ? brandColors.warning :
                     variant === "error" ? brandColors.error :
                     brandColors.primary[300],
      }}
    >
      {value}
    </Badge>
  ),

  // Render a boolean as checkmark/icon
  boolean: (value: boolean, activeIcon: React.ReactNode = <CheckCircle className="h-4 w-4" />) => (
    <div className="flex justify-center">
      {value ? (
        <span style={{ color: brandColors.success }}>{activeIcon}</span>
      ) : (
        <span style={{ color: brandColors.neutral[300] }}>{activeIcon}</span>
      )}
    </div>
  ),

  // Render an action button
  actionButton: (onClick: () => void, icon: React.ReactNode, label?: string) => (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className="h-6 px-2 text-[10px] hover:bg-primary/10 transition-colors"
    >
      {icon}
      {label && <span className="ml-1">{label}</span>}
    </Button>
  ),

  // Render a link
  link: (value: string, href: string) => (
    <a 
      href={href}
      className="text-xs font-medium hover:underline transition-colors"
      style={{ color: brandColors.primary[600] }}
    >
      {value}
    </a>
  ),
};
