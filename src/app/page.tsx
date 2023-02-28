// import { Suspense } from 'react'

import { User } from '@/components/User'
import Link from 'next/link'

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link href="/dashboard">Dashboard</Link>

      {/* <Suspense fallback={<p>Carregando Usuários...</p>}></Suspense> */}

      {/* @ts-expect-error Async Server Component */}
      <User />
    </div>
  )
}
