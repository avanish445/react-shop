import { createContext, useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
export const userData = {
  name: 'Avanish Kumar',
  userName: 'avanish@gmail.com',
  password: 'jsr@1234',
}
const Context = createContext()
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigation = useNavigate()
  const handleSetUser = (userInput) => {
    window.localStorage.setItem('user', JSON.stringify(userData))
    navigation('/')
    window.location.reload()
  }
  const logout = () => {
    window.localStorage.removeItem('user')
    navigation('/')
    window.location.reload()
  }
  return (
    <Context.Provider value={{ handleSetUser, setUser, user, logout }}>{children}</Context.Provider>
  )
}

const useUserContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useUserContext must be used within a UserContext')
  }
  return context
}
export default UserContext
export { useUserContext }
