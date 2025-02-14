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
import { CalendarIcon, PersonStandingIcon } from "lucide-react";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/custom_calendar";
import { format } from "date-fns"
import { ko } from "date-fns/locale";  // ✅ 한국어 로케일 추가
import { PasswordInput } from "@/components/ui/password-input";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/custom-use-toast";
import { ToastAction } from "@/components/ui/custom-toast";



//1.유효성 검사 기본 스키마 정의
const formSchema = z.object({
  email: z.string().email("유효한 이메일을 입력하세요."),
  accountType: z.enum(["personal", "company"]),
  companyName: z.string({ required_error: "기업명을 입력해주세요." }).optional(),
  numberOfEmployees: z.coerce.number({ required_error: "직원수를 입력해주세요." }).optional(),  
  dob:z.date({ required_error: "생년월일을 선택해주세요." }).refine((date)=>{
    const today = new Date();
    const eighteedYearsAgo =new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );
    return date <= eighteedYearsAgo;    
  }, "18세 이상의 사람만 회원가입 가능합니다."),  
  password: z.string({ required_error: "비밀번호를 입력해 주세요." }).min(8, "8자 이상 입력하세요.")
  .refine((password) => {
     return /^(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/.test(password);
  },"비밀번호는 특수문자 1개 이상, 대문자 1개 이상을 포함해야 합니다."),

  passwordConfirm: z.string({ required_error: "비밀번호 확인을 입력해 주세요." }),
  acceptTerms: z.boolean({required_error: "이용약관에 동의해야 합니다."})
  //.refine((checked) => checked, "You must accept the terms and conditions"),  

}).superRefine((data, ctx) => {
  // 1️⃣ 기업 계정인 경우 기업명과 직원 수 먼저 확인
  if (data.accountType === "company") {
    if (!data.companyName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["companyName"],
        message: "기업명을 입력해주세요.",
      });
    }

    if (!data.numberOfEmployees || data.numberOfEmployees < 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["numberOfEmployees"],
        message: "직원수를 입력해주세요.",
      });
    }
  }

  // 2️⃣ 비밀번호 확인 필드 체크
  if (data.password !== data.passwordConfirm) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["passwordConfirm"],
      message: "비밀번호와 비밀번호 확인은 일치해야 합니다.",
    });
  }

  // 3️⃣ 이용약관 동의 마지막에 체크
  if (!data.acceptTerms) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["acceptTerms"],
      message: "이용약관에 동의해야 합니다.",
    });
  }
});





const SignupPage: React.FC = () => {
  const { toast } = useToast();
  const router =useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      accountType: "personal", 
      dob: undefined,
      companyName: "",
      //numberOfEmployees: 0,
      password: "", 
      passwordConfirm: "",
    },
  });

  // 회원가입 핸들러
  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("회원가입 확인이 통과되었습니다.", data);
    
    toast({
      variant: "default",
      position: "top",
      description: "🎊 회원 가입을 축하 합니다.",
      duration: 5000, // ✅ 5초 후 토스트가 사라짐
      action: (
        <ToastAction
          altText="확인"
          onClick={() => router.push("/dashboard")} // ✅ 확인 버튼 클릭 시 이동
        >
          확인
        </ToastAction>
      ),
    });

    // ✅ 토스트가 사라진 후 5.2초 후 이동 (여유 시간 추가)
    setTimeout(() => {
      router.push("/dashboard");
    }, 5200);

  };


  const accountType = form.watch("accountType");

  const dobFromDate=new Date();
  dobFromDate.setFullYear(dobFromDate.getFullYear() - 120);


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
                      <Input placeholder="example@email.com" required {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      Macaronics.net 계정의 이메일을 입력해주세요.
                    </FormDescription> */}
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
                          <Input type="number" placeholder="직원수를 입력해주세요." {...field} 
                            min={0} 
                            value={field.value ?? ""}
                          />
                        </FormControl>                        
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                
                </> 
              )}
              

              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col pt-2">
                    <FormLabel className="h-5" >생년월일</FormLabel>
                    <FormControl>                     
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>                            
                            <Button variant={"outline"}                      
                              className="normal-case flex justify-between"                            
                            >
                        
                          {field.value ? (format(field.value, "yyyy-MM-dd")) : (<span>날짜 선택</span>)}
                      
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                       
                        <PopoverContent  align="start" className="w-auto p-0 ">
      
                        <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => field.onChange(date ?? null)}
                            fixedWeeks
                            weekStartsOn={0}  // 주의 시작 요일을 '일요일(0)'로 변경
                            fromMonth={dobFromDate}
                            toDate={new Date()}
                            captionLayout="dropdown-buttons"
                            locale={ko}  // ✅ 한국어 적용
                            required
                          /> 
                        </PopoverContent>
                      </Popover>


                    </FormControl>                        
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
                      {/* <Input placeholder="비밀번호" type="password" {...field} /> */}
                      <PasswordInput  placeholder="비밀번호" required  {...field} />
                    </FormControl>                   
                    <FormMessage />
                  </FormItem>
                )}
              />


           {/* 비밀번호 확인 필드 */}
            <FormField
                control={form.control}                
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>비밀번호 확인</FormLabel>
                    <FormControl>                      
                      <PasswordInput  placeholder="비밀비밀번호 확인" required  {...field} />
                    </FormControl>                   
                    <FormMessage />
                  </FormItem>
                )}
            />



            {/* 이용약관 체크 박스 */}
            <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex gap-2 items-center">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>이용약관에 동의합니다.</FormLabel>
                    </div>
                    <FormDescription>
                      회원 가입을 위해 약관 동의는 필수 입니다.{" "}
                      <Link
                        href="/terms"
                        className="text-primary hover:underline"
                      >
                       이용 약관
                      </Link>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />


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
