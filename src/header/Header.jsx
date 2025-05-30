import { Link, NavLink } from 'react-router-dom'

const Header = () => {
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
          <NavLink
            to='/about'
            className={({ isActive, isPending, isTransitioning }) =>
              handleActiveLink(isActive, isPending, isTransitioning)
            }
          >
            About
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive, isPending, isTransitioning }) =>
              handleActiveLink(isActive, isPending, isTransitioning)
            }
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Header
