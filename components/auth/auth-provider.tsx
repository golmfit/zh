"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

interface User {
  email: string
  name: string
  role: "admin" | "student"
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if user is authenticated on mount
    const checkAuth = () => {
      const authData = localStorage.getItem("zhacademie_auth")
      if (authData) {
        try {
          const { isAuthenticated, user } = JSON.parse(authData)
          setUser(user)
          setIsAuthenticated(isAuthenticated)
        } catch (error) {
          // Invalid auth data
          localStorage.removeItem("zhacademie_auth")
        }
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  useEffect(() => {
    // Protect routes
    if (!isLoading) {
      // Only redirect if we're confident about the auth state
      const isProtectedRoute = pathname.startsWith("/dashboard") || pathname.startsWith("/admin")
      const isAuthRoute = pathname === "/login" || pathname === "/register" || pathname === "/forgot-password"

      if (!isAuthenticated && isProtectedRoute) {
        // Redirect unauthenticated users trying to access protected routes
        window.location.href = "/login"
      } else if (isAuthenticated && isAuthRoute) {
        // Redirect authenticated users away from auth routes
        const redirectPath = user?.role === "admin" ? "/admin/dashboard" : "/dashboard"
        window.location.href = redirectPath
      } else if (isAuthenticated) {
        // Redirect users based on role if they're in the wrong area
        if (user?.role === "admin" && pathname.startsWith("/dashboard")) {
          window.location.href = "/admin/dashboard"
        } else if (user?.role === "student" && pathname.startsWith("/admin")) {
          window.location.href = "/dashboard"
        }
      }
    }
  }, [isAuthenticated, isLoading, pathname, user])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate login - will be replaced with actual auth
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock role check - will be replaced with actual role check
      const role = email.includes("admin") ? "admin" : "student"
      const name = role === "admin" ? "Zakaria Hassan" : "Sarah Adams"

      const userData = { email, role, name } as User

      // Store auth state in localStorage (temporary solution)
      localStorage.setItem(
        "zhacademie_auth",
        JSON.stringify({
          isAuthenticated: true,
          user: userData,
        }),
      )

      setUser(userData)
      setIsAuthenticated(true)

      // Use direct navigation instead of router
      if (role === "admin") {
        window.location.href = "/admin/dashboard"
      } else {
        window.location.href = "/dashboard"
      }
    } catch (error) {
      throw new Error("Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("zhacademie_auth")
    setUser(null)
    setIsAuthenticated(false)
    window.location.href = "/login"
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
