'use client'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Student Management System</h1>
      <Link href="/students" className="btn btn-primary">Go to Student List</Link>
    </main>
  )
}
