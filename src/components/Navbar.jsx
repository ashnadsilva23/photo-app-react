import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Photos App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Add Photos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search">Search Photos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/delete">Delete Photos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/view">View Photos</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar