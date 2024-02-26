import React from 'react'
import { MyFooter, Ul, Li, MyImg, MyLink, MyImgFb } from "../styles/FooterStyles";
import { logoFb, twitter} from "../assets";

export default function Footer() {
  return (

    <MyFooter>
      <Ul>
        <Li>
          <MyLink to={'#'} >
            About Us
          </MyLink>
        </Li>
        <Li>
          <MyLink to={'#'} >
            Contact
          </MyLink>
        </Li>
      </Ul>
      <Ul>
        <Li>
          <MyImg src={twitter} alt="Logo twitter" />
          <MyLink to={'#'} >
            Twitter
          </MyLink>
        </Li>
        <Li>
          <MyImgFb src={logoFb} alt="Logo Facebook" />
          <MyLink to={'#'} >
            Facebook
          </MyLink>
        </Li>
      </Ul>
    </MyFooter>

  )
}
