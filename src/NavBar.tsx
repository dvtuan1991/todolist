
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='nav-item'>
        <Link to='/withclass' className='nav-link'>Todo App with Class</Link>
      </div>
      <div className='nav-item'>
        <Link to='/withstate' className='nav-link'>
          Todo App With State
        </Link>
      </div>
      <div className='nav-item'>
        <Link to='/usereduce' className='nav-link'>
        Todo App with Hook Usereducer
        </Link>
      </div>
      <div className='nav-item'>
        <Link to='/usereduceimmer' className='nav-link'>
        Todo App with UseReducer And Immerjs
        </Link>
      </div>
      <div className='nav-item'>
        <Link to='redux' className='nav-link'>
        Todo App with Redux
        </Link>
      </div>
      <div className='nav-item'>
        <Link to='reduximmer' className='nav-link'>
          Todo App with Redux Immer
        </Link>
      </div>
    </div>
  )
}

export default NavBar