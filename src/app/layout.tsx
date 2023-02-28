import { ReactNode } from 'react'

export const metadata = {
  title: {
    default: 'Next',
    template: '%s | Rocketseat',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h1>Teste</h1>
        {children}
      </body>
    </html>
  )
}
