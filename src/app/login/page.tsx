import LoginCard from "../components/LoginCard"

export const metadata = {
  title: 'Login | TemuDataku',
}

export default function LoginPage() {
  return (
    <main className="relative flex h-dvh items-center justify-center overflow-hidden bg-[#21356e]/10 ">
        <LoginCard />
    </main>
  )
}