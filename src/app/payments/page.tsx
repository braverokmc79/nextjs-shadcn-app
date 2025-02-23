"use client";

import { useSearchParams } from "next/navigation";
import { Employee, columns } from "./columns";
import { DataTable } from "./data-table";
import { useState, useEffect } from "react";

async function getData(page: number, pageSize: number): Promise<{ data: Employee[], totalCount: number }> {  
  console.log("getData", page, pageSize);
  const response = await fetch(`/api/employees?page=${page}&pageSize=${pageSize}`);
  return response.json();
}

export default function DemoPage() {
  const searchParams = useSearchParams();
  const pageFromParams = Number(searchParams.get("page")) || 1;
  const pageSizeFromParams = Number(searchParams.get("page")) || 5;

  const [page, setPage] = useState(pageFromParams);
  const [pageSize, setPageSize] = useState(pageSizeFromParams);
  const [data, setData] = useState<Employee[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);    
    getData(page, pageSize).then(({ data, totalCount }) => {
      setData(data);
      setTotalCount(totalCount);
      setLoading(false);
    });
  }, [page,pageSize]);

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} 
                data={data} page={page} 
                pageSize={pageSize} 
                totalCount={totalCount} 
                setPage={setPage} 
                setPageSize={setPageSize}
                />
    </div>
  );
}
