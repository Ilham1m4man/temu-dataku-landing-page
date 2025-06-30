import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";
import LoginCard from "../components/LoginCard";

export const metadata = {
  title: "Login | TemuDataku",
};
export const dynamic = 'force-dynamic'

export default async function LoginPage() {
  const token = (await cookies()).get("token")?.value;
  if (token) redirect('/admin');

  return (
    <main className="relative flex h-dvh items-center justify-center overflow-hidden bg-[#21356e]/10 ">
      <LoginCard />
    </main>
  );
}
