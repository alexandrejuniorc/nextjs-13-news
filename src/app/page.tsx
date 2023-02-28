// import { Repo } from '@/components/Repo'
import { User } from '@/components/User'

export const revalidate = 30

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>

      {/* @ts-expect-error Async Server Component */}
      <User />

      {/*    <Repo /> */}
    </div>
  )
}
