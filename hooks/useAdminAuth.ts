'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const authToken = localStorage.getItem('admin_auth_token')
      const isAuth = !!authToken
      setIsAuthenticated(isAuth)
      setLoading(false)

      if (!isAuth) {
        router.push('/admin')
      }
    }

    checkAuth()
  }, [router])

  const login = async (password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('admin_auth_token', data.token)
        setIsAuthenticated(true)
        router.push('/admin/blogs')
      } else {
        throw new Error('Invalid password')
      }
    } catch (error) {
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('admin_auth_token')
    setIsAuthenticated(false)
    router.push('/admin')
  }

  return { isAuthenticated, loading, login, logout }
}
