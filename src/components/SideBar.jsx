import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// styles
import './SideBar.scss'

export default
class SideBar extends React.Component {
  render() {
    return (
      <div className='SideBar'>
        <div className='logo'>nous</div>
        <ul>
          <NavLink to='/' exact={true} activeClassName='active'>
            <li>
              <i className='material-icons'>dashboard</i>
              <label>Browse</label>
            </li>
          </NavLink>
          <NavLink to='/setup' exact={true} activeClassName='active'>
            <li>
              <i className='material-icons'>shopping_cart</i>
              <label>Cart</label>
            </li>
          </NavLink>
          <NavLink to='/submit' exact={true} activeClassName='active'>
            <li>
              <i className='material-icons'>add</i>
              <label>Submit Questions</label>
            </li>
          </NavLink>
        </ul>
      </div>
    )
  }
}
