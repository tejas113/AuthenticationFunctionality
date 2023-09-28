import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './index.css'
import Cookies from 'js-cookie'

class LogoutButton extends Component {
  logout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <button type="button" className="logoutButton" onClick={this.logout}>
        Logout
      </button>
    )
  }
}

export default LogoutButton
