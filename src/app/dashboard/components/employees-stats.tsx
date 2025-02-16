import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {  AlertTriangleIcon, BadgeCheckIcon, UserCheck2Icon, UserIcon, UserRoundIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const EmployeesStats:React.FC = () => {
  const totalEmployees = 100;
  const employeesPresent = 85;
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100;

  return (
    <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
            <CardHeader className='pb-2'>
                <CardTitle className='text-base'>전체 직원</CardTitle>    
            </CardHeader>   
            <CardContent className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <UserIcon />
                </div>
                <div className='text-5xl font-bold'>
                    {totalEmployees}
                </div>
                <div>
                    <Button size="xs"  asChild>
                        <Link href="/dashboard/employees">전체 보기</Link>
                    </Button>
                </div>
            </CardContent> 
        </Card>


        <Card>
            <CardHeader className='pb-2'>
                <CardTitle className='text-base'>직원 출근율</CardTitle>    
            </CardHeader>   
            <CardContent className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    {employeesPresentPercentage > 75 ? <UserCheck2Icon /> : <UserRoundIcon />}
                    <div className='text-5xl font-bold'>{employeesPresent}</div>                    
                </div>                                
            </CardContent> 
            <CardFooter>
            {employeesPresentPercentage > 75 ?(
                <span className='text-xs text-green-500 flex gap-1 items-center'>
                    <BadgeCheckIcon />
                    직원의 {employeesPresentPercentage}% 가 현재 근무 중
                </span>
            ):(
                <span className='text-xs text-red-500 flex gap-1 items-center'>
                <AlertTriangleIcon />
                직원의 {employeesPresentPercentage}% 만 현재 근무 중
                </span>
            )}
            </CardFooter>
        </Card>


        <Card className='border-pink-500'>
            <CardHeader className='pb-2'>
                <CardTitle className='text-base'> 이달의 직원</CardTitle> 
            </CardHeader>    
        </Card>
    </div>
  )
}

export default EmployeesStats;