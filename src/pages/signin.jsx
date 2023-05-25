import Login from "@/components/Login";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Signin() {
  const router = useRouter();
  const { token } = useSelector((state) => state.users);
  useEffect(() => {
    if (token) {
      router.back();
    }
  }, [token, router]);
  return (
    <section className="container mx-auto max-w-[1000px] mt-5">
      <Login />
    </section>
  );
}
