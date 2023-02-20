import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
  }

  onInputPassword = event => {
    this.setState({password: event.target.value})
  }

  onInputUsername = event => {
    this.setState({username: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitLoginDetails = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      //   console.log(data)
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

      this.onSubmitSuccess()
    } else {
      this.setState({showErrorMsg: true})
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, showErrorMsg} = this.state

    return (
      <div className="login-bg-container">
        <form
          className="login-form-container"
          onSubmit={this.onSubmitLoginDetails}
        >
          <h1 className="login-form-heading">Login</h1>
          <label className="login-form-label" htmlFor="usernameInput">
            USERNAME
          </label>
          <input
            type="text"
            className="login-form-input"
            id="usernameInput"
            onChange={this.onInputUsername}
            value={username}
          />
          <label className="login-form-label" htmlFor="passwordInput">
            PASSWORD
          </label>
          <input
            type="password"
            className="login-form-input"
            id="passwordInput"
            onChange={this.onInputPassword}
            value={password}
          />
          {showErrorMsg && (
            <p className="error-msg">Username or Password is Invalid</p>
          )}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginPage
