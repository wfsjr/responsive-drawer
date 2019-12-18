import React from 'react'
import styled from 'styled-components'

const SideDrawerNav = styled.nav`
  top: 0;
  left: 0;
  width: 70%;
  z-index: 20;
  height: 100%;
  position: fixed;
  max-width: 400px;
  background: #fff;
  box-shadow: 1px 0 7px rgba(0, 0, 0, 0.6);
  transform: translateX(${({ show }) => (show ? '0' : '-100%')});
  transition: transform 0.3s ease-out;
`
const SideDrawerUl = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;
  flex-direction: column;
  justify-content: center;
`
const SideDrawerItem = styled.li`
  margin: 0.5rem 0;
  a {
    color: #521751;
    font-size: 1.2rem;
    text-decoration: none;
  }
  a:hover,
  a:active {
    color: #fa923f;
  }
`

const SideDrawer = ({show}) => (
  <SideDrawerNav show={show}>
    <SideDrawerUl>
      <SideDrawerItem>
        <a href="/">Products</a>
      </SideDrawerItem>
      <SideDrawerItem>
        <a href="/">Users</a>
      </SideDrawerItem>
    </SideDrawerUl>
  </SideDrawerNav>
)
export default SideDrawer
