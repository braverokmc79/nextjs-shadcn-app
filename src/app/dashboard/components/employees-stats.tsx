import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const EmployeesStats:React.FC = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
            <CardHeader>
                <CardTitle className='text-base'>전체 직원</CardTitle>    
            </CardHeader>   
            <CardContent className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <UserIcon />
                </div>
                <div className='text-5xl font-bold'>
                    100
                </div>
                <div>
                    <Button size="xs"  asChild>
                        <Link href="/dashboard/employees">전체 보기</Link>
                    </Button>
                </div>
            </CardContent> 
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className='text-base'>전체 직원 </CardTitle>    
            </CardHeader>    
        </Card>
        <Card className='border-pink-500'>
            <CardHeader>
                <CardTitle className='text-base'> 전체 직원</CardTitle> 
            </CardHeader>    
        </Card>
    </div>
  )
}

export default EmployeesStats;