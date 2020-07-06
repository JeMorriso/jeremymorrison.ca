import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Wrapper = styled.nav`
  background-color: #2a4765;
  color: white;
`;

const Ul = styled.ul`
  padding-left: 1em;
`;

const Li = styled.li`
  list-style-type: none;
`;

function Navbar(props) {
  const { toggleSidebar } = props;

  return (
    <Wrapper>
      <Ul className="nav-items">
        <Li>
          <Link to="/portfolio" onClick={toggleSidebar}>
            Portfolio
          </Link>
        </Li>
        <Li>
          <Link to="/about" onClick={toggleSidebar}>
            About
          </Link>
        </Li>
        <Li>
          <Link to="/resume" onClick={toggleSidebar}>
            Resume
          </Link>
        </Li>
        <Li>
          <Link to="/contact" onClick={toggleSidebar}>
            Contact
          </Link>
        </Li>
      </Ul>
    </Wrapper>
  );
}

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};
export default Navbar;
