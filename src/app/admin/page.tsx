import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { jwtVerify } from 'jose'
import CatalogClient from './CatalogClient'

export default async function CatalogPage() {
  const token = (await cookies()).get('token')?.value
  
  if (!token) redirect('/login')

  try {
    await jwtVerify(
      new TextEncoder().encode(token),
      new TextEncoder().encode(process.env.JWT_SECRET as string),
    )
  } catch {
    redirect('/login')
  }

  return <CatalogClient />
}


