import React from 'react'
import './Navbar.css'
import { Link} from 'react-router-dom'
export default function Navbar() {
    // const navigate = useNavigate()
  
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'>Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/' >Home</Link>
          </li>
          <li className="nav-item"> 
            <Link className="nav-link" to='/T-u'>Top Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to='/f-d'>Trending post</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}
