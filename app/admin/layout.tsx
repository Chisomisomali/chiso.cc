import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chisomo Misomali - Admin Dashboard',
  description: 'Blog management admin dashboard',
  robots: 'noindex, nofollow',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {children}
    </div>
  )
}
