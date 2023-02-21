import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'
import './index.css'

// const tabs = [
//   {
//     id: 'home',
//     text: 'Home',
//   },
//   {
//     id: 'popular',
//     text: 'Popular',
//   },
// ]

class Navbar extends Component {
  state = {
    activeTab: 'home',
  }

  changeToHome = () => {
    this.setState({activeTab: 'home'})
  }

  changeToPopular = () => {
    this.setState({activeTab: 'popular'})
  }

  changeToSearch = () => {
    this.setState({activeTab: 'search'})
  }

  render() {
    const {activeTab} = this.state
    return (
      <div className="navbar-bg">
        <div>
          <img
            src="https://res.cloudinary.com/dds8wfxdw/image/upload/v1676920782/CCBP-mini%20projects/Movies%20website%20%28netflix%2Cprime%20clone%29/assets/LOGO_ycujjt.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <ul className="nav-links-list-container">
          <li className="nav-links-list-item" onClick={this.changeToHome}>
            <Link
              to="/"
              className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-links-list-item" onClick={this.changeToPopular}>
            <Link
              to="/popular"
              className={`nav-link ${activeTab === 'popular' ? 'active' : ''}`}
            >
              Popular
            </Link>
          </li>
        </ul>
        <ul className="profile-search-list-container">
          <li className="nav-links-list-item">
            <Link to="/search" className="search-route-link">
              {activeTab === 'search' ? (
                <input type="text" className="search-input" />
              ) : null}
              <button
                type="button"
                className={`search-button ${
                  activeTab === 'search' ? 'search-active' : ''
                }`}
                data-testid="searchButton"
                onClick={this.changeToSearch}
              >
                <HiOutlineSearch className="search-icon" />
              </button>
            </Link>
          </li>
          <li className="nav-links-list-item">
            <img
              src="https://res.cloudinary.com/dds8wfxdw/image/upload/v1676973451/CCBP-mini%20projects/Movies%20website%20%28netflix%2Cprime%20clone%29/assets/Home%20page/Avatar_maai79.svg"
              alt="profile"
              className="profile-pic"
            />
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Navbar)
