import { Suspense } from 'react'
import { Repo } from '@/components/Repo'
import { User } from '@/components/User'

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Suspense fallback={<p>Carregando Repositórios</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repo />
      </Suspense>

      <Suspense fallback={<p>Carregando Usuários</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
    </div>
  )
}
