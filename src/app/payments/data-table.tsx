"use client"
import {
  ColumnDef,
  ColumnFiltersState,  
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { DataTablePagination } from "./DataTablePagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  page: number
  pageSize: number
  totalCount: number
  setPage: (page: number) => void
  setPageSize: (pageSize: number) => void
}

export function DataTable<TData, TValue>({
  columns,
  data,
  page, pageSize, totalCount,setPage,setPageSize
}: DataTableProps<TData, TValue>) {
 
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] =useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,  
      rowSelection, 
    },

    manualPagination: true,
    pageCount: Math.ceil(totalCount / pageSize),
  })

  return (
    <div>
        
        <div className="flex items-center py-4">
          <Input
            placeholder="팀명 검색"
            value={(table.getColumn("teamName")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("teamName")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
            컬럼 표시/숨기기
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">

            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>


        </div>

        <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredRowModel().rows.length} 중{" "}
        {table.getFilteredSelectedRowModel().rows.length} 행이 선택되었습니다.
        </div>
        
        <div className="rounded-md border">


        <Table>
            <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                    return (
                    <TableHead key={header.id}>
                        {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                            )}
                    </TableHead>
                    )
                })}
                </TableRow>
            ))}
            </TableHeader>
            <TableBody>
            {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                >
                    {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                    ))}
                </TableRow>
                ))
            ) : (
                <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                   데이터가 없습니다.
                </TableCell>
                </TableRow>
            )}
            </TableBody>
        </Table>
        </div>
        
        
        
       <div className="flex items-center justify-end space-x-2 py-4">
      

       <DataTablePagination 
         table={table}
          page={page} 
          pageSize={pageSize} totalCount={totalCount} setPage={setPage} setPageSize={setPageSize} />

        </div>
 </div>
  )
}
