import React from 'react';
import { Nav, Ul, LiLeft, LiRight, MyImg, MyNavLink } from "../styles/NavbarStyles";
// import logo from "../assets/logo.png";



export default function Navbar() {
  return (
    <Nav>
      <Ul>
        <LiLeft>
          <MyNavLink to={'/'} >
            Let`s order a vermut!!!
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