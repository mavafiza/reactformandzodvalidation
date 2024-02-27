import { Nav, Ul, LiLeft, LiRight, MyImg, MyNavLink } from "../styles/NavbarStyles";


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