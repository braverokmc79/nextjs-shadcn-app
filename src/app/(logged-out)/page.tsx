import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <>
      <h1 className="flex gap-2 items-center  ">
        <PersonStandingIcon size={50} className="text-pink-500" />
        Macaronics.net
      </h1>

      <p>고객 지원을 관리하는 최고의 대시보드</p>

      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">로그인</Link>
        </Button>
        <small>또는</small>
        <Button asChild variant="outline">
          <Link href="/sign-up">회원가입</Link>
        </Button>


        <Button  variant="outline" className="bg-pink-500 text-white hover:bg-pink-600 hover:text-white">
          <Link href="/dashboard">대시보드</Link>
        </Button>
      </div>
    </>
  );
};

export default LandingPage;
