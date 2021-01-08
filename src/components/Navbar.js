import React  from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom'
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';


const Nav =styled.nav`
  height: 60px;
  background-color:transparent;
  display: flex;
  padding: 1rem 2rem;
  z-index:100;
  position: fixed;
  width:100%;
  justify-content: space-between;

`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration:none;
`

const Logo = styled(Link)`
 ${NavLink}
  font-style: italic;

`;

const MenuBars = styled.i`
  display: none;
   @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 1rem;
    transform:translate(-50%, -50%);
    color: #fff;
    font-size: 2rem;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items:center;
  margin-right: -48px;
   @media screen and (max-width: 768px) {
     display: none;
   }

`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items:center;
@media screen and (max-width: 768px) {
     display: none;
   }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars ><FaBars /></MenuBars>
      <NavMenu>
          {menuData.map((menu, key) => (
            <NavMenuLinks to={menu.link} key={key}>
              {menu.title}
            </NavMenuLinks>
          ))}


      </NavMenu>
       <NavBtn>
        <Button to='/contact' primary="true">Contact Us</Button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar
