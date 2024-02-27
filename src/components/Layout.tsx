import { ReactNode } from 'react';
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import { Navbar } from '.';

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main<{ isHomePage: boolean }>`
height: ${props => (props.isHomePage ? '90vh' : '80vh')};
`;

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
        <Navbar />
        <Main isHomePage={isHomePage}>
          {children}
        </Main>
    </>
  );
};

export default Layout;