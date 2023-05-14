import { createContext, useState, useEffect, useContext } from 'react'
import { User } from '@/types/User';

interface UserContextProps {
    user: User | null
    setUser: (user: User | null) => void
    logout: () => void
    isLoading: boolean
}

const UserContext = createContext<UserContextProps>({
    user: null,
    setUser: () => { },
    logout: () => { },
    isLoading: false,
})

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        async function fetchUser() {
            setIsLoading(true)
            try {
                const res = await fetch('/api/account/user')
                const data = await res.json()
                setUser(data.user || null)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchUser()
    }, [])

    const logout = async () => {
        try {
            await fetch('/api/auth/logout', {
                method: 'POST',
            })
            setUser(null)
        } catch (error) {
            console.error(error)
        }
    }

    const contextValue: UserContextProps = {
        user,
        setUser,
        logout,
        isLoading,
    }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext

export function useUser() {
    const context = useContext(UserContext)

    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider')
    }

    return context
}
