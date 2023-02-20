import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Navbar = () => (
  <div className="navbar-bg">
    <div>
      <img
        src="https://res.cloudinary.com/dds8wfxdw/image/upload/v1676920782/CCBP-mini%20projects/Movies%20website%20%28netflix%2Cprime%20clone%29/assets/LOGO_ycujjt.png"
        alt="website logo"
        className="website-logo"
      />
    </div>

    <Link to="/">movies</Link>
    <Link to="/popular">Popular</Link>
  </div>
)

export default withRouter(Navbar)
