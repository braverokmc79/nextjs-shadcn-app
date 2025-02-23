import { Table } from "@tanstack/react-table"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
  page: number
  pageSize: number
  totalCount: number
  setPage: (page: number) => void
  setPageSize: (pageSize: number) => void
}

export function DataTablePagination<TData>({
  table,
  page, pageSize, totalCount, setPage,setPageSize
}: DataTablePaginationProps<TData>) {
  //const pageCount = table.getPageCount()
  //  const currentPage = table.getState().pagination.pageIndex
  const pageCount = Math.ceil(totalCount / pageSize) ;
  const currentPage = page;

  console.log(" =========pageCount : ", pageCount);
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length}개 선택됨 / 총{" "}
        {totalCount}개 행
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">페이지당 행 개수</p>
          <Select
            value={`${pageSize}`}
            onValueChange={(value) => {setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[3,5,10,20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[150px] items-center justify-center text-sm font-medium">
          페이지 {currentPage + 1} / 총 {pageCount}
        </div>
        <div className="flex items-center space-x-1">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => setPage(1)} 
            disabled={page === 1}
          >
            <span className="sr-only">첫 페이지로 이동</span>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => setPage(page - 1)} 
            disabled={page === 1}
          >
            <span className="sr-only">이전 페이지로 이동</span>
            <ChevronLeft />
          </Button>

          {/* 페이지 번호 버튼 */}
          {[...Array(pageCount)].map((_, index) => (
            <Button
              key={index}
              variant={currentPage === index+1 ? "default" : "outline"}
              className={`h-8 w-8 p-0 ${
                currentPage === index+1 ? "bg-primary text-white" : ""
              }`}
              onClick={() => setPage(index+1)}
            >
              {index + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => setPage(page + 1)}
            disabled={page === pageCount}
          >
            <span className="sr-only">다음 페이지로 이동</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => setPage(pageCount)} 
            disabled={page === pageCount}
          >
            <span className="sr-only">마지막 페이지로 이동</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
