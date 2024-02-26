import React from 'react';
import { Nav, Ul, LiLeft, LiRight, MyImg, MyNavLink } from "../styles/NavbarStyles";
// import logo from "../assets/logo.png";



export default function Navbar() {
  return (
    <Nav>
      <Ul>
        <LiLeft>
        {/* <MyImg src={logo} alt="Logo soundwave" /> */}
          <MyNavLink to={'/'} >
            Soundwave
          </MyNavLink>
        </LiLeft>
        <LiRight>
          <MyNavLink to={'/zodpage'} >
            Zod
          </MyNavLink>
 
          <MyNavLink to={'/nozodpage'} >
          NoZod
          </MyNavLink>
        </LiRight>
      </Ul>
    </Nav>

  );
}