import { Repo } from './Repo'

export async function User() {
  const response = await fetch('http://api.github.com/users/alexandrejuniorc', {
    cache: 'no-store',
  })
  const user = await response.json()

  return (
    <div>
      <h1>User</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      {/* @ts-expect-error Async Server Component */}
      <Repo />
    </div>
  )
}
