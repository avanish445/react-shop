import { Link, NavLink } from 'react-router-dom'
import { FaRegCircleUser } from 'react-icons/fa6'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoLogOutOutline } from 'react-icons/io5'
import { useState } from 'react'
import { useUserContext } from '../context/UserContext'

const UserProfile = ({ user }) => {
  const { logout } = useUserContext()
  const handleLogout = () => {
    logout()
  }
  return (
    <div className='user-profile'>
      <h4>Welcome, {user?.name}!</h4>
      <hr />
      <p className='icon' onClick={handleLogout}>
        <IoLogOutOutline />
        Logout
      </p>
    </div>
  )
}

const Header = ({ isUser }) => {
  const { user } = useUserContext()
  const handleActiveLink = (isActive, isPending, isTransitioning) => {
    return [
      isPending ? 'pending' : '',
      isActive ? 'active' : '',
      isTransitioning ? 'transitioning' : '',
    ].join(' ')
  }
  return (
    <div className='header-container'>
      <header className='header'>
        <div class='logo'>
          <Link to='/'>Shopsy</Link>
        </div>
        <nav className='nav'>
          {isUser ? (
            <NavLink
              to='/'
              className={({ isActive, isPending, isTransitioning }) =>
                handleActiveLink(isActive, isPending, isTransitioning)
              }
            >
              <span className='icon profile-icon'>
                <FaRegCircleUser className='user-profile-icon' />
                <UserProfile user={user} />
              </span>
            </NavLink>
          ) : (
            <NavLink
              to='/login'
              className={({ isActive, isPending, isTransitioning }) =>
                handleActiveLink(isActive, isPending, isTransitioning)
              }
            >
              <span className='icon'>
                <FaRegCircleUser />
                <span>Login</span>
              </span>
            </NavLink>
          )}
          <NavLink
            to='/cart'
            className={({ isActive, isPending, isTransitioning }) =>
              handleActiveLink(isActive, isPending, isTransitioning)
            }
          >
            <span className='icon'>
              <AiOutlineShoppingCart />
              <span>Cart</span>
            </span>
          </NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Header
