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
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";

// 폼 유효성 검사 스키마 정의
const formSchema = z.object({
  email: z.string().email("유효한 이메일을 입력하세요."),
  accountType: z.enum(["personal", "company"]),
  companyName: z.string().optional(),
  numberOfEmployees: z.coerce.number().optional(),
}).superRefine((data, ctx) => {
 
  if(data.accountType === "company" && !data.companyName) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path:["companyName"],
      message: "기업명을 입력해주세요.",
    });
  }

  if(data.accountType === "company" && (!data.numberOfEmployees  || data.numberOfEmployees < 1 )) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path:["numberOfEmployees"],
      message: "직원수를 입력해주세요.",
    });
  }

});

const SignupPage: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      accountType: "personal",
    },
  });

  // 회원가입 핸들러
  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("회원가입 확인이 통과되었습니다.", data);
  };


  const accountType = form.watch("accountType");




  return (
    <>
      <div className="flex justify-center">
        <PersonStandingIcon size={50} />
      </div>
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">회원가입</CardTitle>
          <CardDescription>Macaronics.net 계정에 회원가입하세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-4"
            >
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

              <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>회원구분</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="회원구분을 선택해 주세요." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="personal">개인</SelectItem>
                        <SelectItem value="company">기업</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              {accountType === "company" && (
                <>
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>기업명</FormLabel>
                        <FormControl>
                          <Input placeholder="기업명을 입력해주세요. " {...field} />
                        </FormControl>                        
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="numberOfEmployees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>직원수</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="직원수를 입력해주세요." {...field}  min={1}   />
                        </FormControl>                        
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                
                </> 
              )}
              
              {accountType === "personal" && (
                <>
                
                  
                </> 
              )}



              {/* 회원가입 버튼 */}
              <Button type="submit" className="w-full">
                회원가입
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <small>이미 계정이 있으신가요?</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/login">로그인</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default SignupPage;
