import Cookies from 'js-cookie'
import {FaGoogle} from 'react-icons/fa'
import Navbar from '../Navbar'
import Footer from '../Footer'

import './index.css'

const Account = props => {
  const userDetails = JSON.parse(Cookies.get('user_details'))
  const passwordLength = userDetails.password.length

  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    Cookies.remove('user_details')
    history.replace('/login')
  }

  return (
    <div className="account-main-bg-container">
      <Navbar />
      <div className="account-details-section">
        <h1 className="account-details-heading">Account</h1>
        <hr className="account-details-separatorline" />
        <div className="account-details-section-1">
          <p className="account-details-key-text">Membership</p>
          <div>
            <p className="user-email">{userDetails.username}@gmail.com</p>
            <p className="user-password">
              Password : {'*'.repeat(passwordLength)}
            </p>
          </div>
        </div>
        <hr className="account-details-separatorline" />
        <div className="account-details-section-1">
          <p className="account-details-key-text">Plan details</p>
          <div>
            <p className="user-email">
              Premium <span className="ultra-hd-text">Ultra HD</span>
            </p>
          </div>
        </div>
        <hr className="account-details-separatorline" />
        <div className="logout-btn-container">
          <button type="button" className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Account
