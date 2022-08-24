import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Characters
        </NavLink>
        {/* <a class="navbar-brand" href="#">Characters</a> */}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <CustomLink to="/all">All</CustomLink>
            <CustomLink to="/by-locations">By Location</CustomLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }){
  return (
    <li className="nav-item">
      <NavLink 
        to={to}  
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        {...props}
      >
        {children}
      </NavLink>
    </li>
  )
}