import { ReactNode } from 'react'

interface DashboardProps {
  children: ReactNode
}

export default function Dashboard({ children }: DashboardProps) {
  return (
    <div>
      <h1>estou dentro da rota dashboard</h1>
      {children}
    </div>
  )
}
