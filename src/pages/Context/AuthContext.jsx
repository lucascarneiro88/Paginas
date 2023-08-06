import { createContext, useEffect, useState } from "react"
//criação do contexto
export const AuthContext = createContext()
//componente de provider que recebe um filho
export const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
 
  const [user, setUser] = useState({ username: '' });


  const login = (userData) => {
      setIsLoggedIn(true)
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
  }
    
  const logout = () => {
    setIsLoggedIn(false)
    setUser(null)
    localStorage.removeItem('user')
}

useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
        setUser(JSON.parse(user))
        setIsLoggedIn(true)
    }
}, [])

return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
        {children}
    </AuthContext.Provider>
)    
}