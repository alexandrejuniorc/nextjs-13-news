import { Repo } from '@/components/Repo'
import Link from 'next/link'
import React, { Suspense } from 'react'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/">Home</Link>

      <Suspense fallback={<p>Carregando Repositórios...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repo />
      </Suspense>
    </div>
  )
}

export default Dashboard
