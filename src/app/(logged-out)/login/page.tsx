"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'


const LoginPage:React.FC = () => {
  return (
    <>
    <PersonStandingIcon  size={50} />
    <Card className='w-full max-w-sm'>
        <CardHeader>
             <CardTitle>
                로그인   
             </CardTitle>  
             <CardDescription>
                SupportMe 계정에 로그인하세요.
             </CardDescription>
        </CardHeader>
        <CardContent>
            로그인 폼
        </CardContent>
        <CardFooter className='flex justify-between'>
            <small> 계정이 없으신가요?</small>

            <Button asChild variant="outline" size="sm" >
                <Link href="/sign-up">회원가입</Link>
            </Button>        

        </CardFooter>
    </Card>
    </>    
  )

}

export default LoginPage;