"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";

// 폼 유효성 검사 스키마 정의
const formSchema = z.object({
  email: z.string().email("유효한 이메일을 입력하세요."),
  password: z.string().min(4, "비밀번호는 최소 4자 이상이어야 합니다."),
});

const LoginPage: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 로그인 핸들러
  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("로그인 확인이 통과되었습니다.", data);
  };

  return (
    <>
      <div className="flex justify-center">
        <PersonStandingIcon size={50} />
      </div>
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">로그인</CardTitle>
          <CardDescription>Macaronics.net 계정에 로그인하세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4">
              {/* 이메일 필드 */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input placeholder="example@email.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      Macaronics.net 계정의 이메일을 입력해주세요.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 비밀번호 필드 */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>비밀번호</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="비밀번호" {...field} />
                    </FormControl>
                    <FormDescription>
                      Macaronics.net 계정의 비밀번호을 입력해주세요.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 로그인 버튼 */}
              <Button type="submit" className="w-full">
                로그인
              </Button>
            </form>

          </Form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <small> 계정이 없으신가요?</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/sign-up">회원가입</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginPage;
