import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'

class Login extends Component {
  fail = msg => {
    console.log(msg)
  }

  success = jwt => {
    Cookies.set('jwt_token', jwt, {
      expires: 30,
    })
    const {history} = this.props
    history.replace('/')
  }

  loginButton = async () => {
    const url = 'https://apis.ccbp.in/login'
    const details = {
      username: 'henry',
      password: 'henry_the_developer',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.success(data.jwt_token)
    } else {
      this.fail(data.error_msg)
    }
  }

  render() {
    return (
      <div className="loginPage">
        <h1 className="h1Edit">Please Login</h1>
        <button onClick={this.loginButton} type="button">
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
