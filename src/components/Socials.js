import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';
import Icon from './Icon';

const Wrapper = styled.div`
  background-color: #2a4765;
  color: white;
  min-height: 1em;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Socials(props) {
  const { socials } = props;
  return (
    <Wrapper>
      {socials.map((el) => (
        <Icon
          href={el.href}
          target="_blank"
          rel="noopener noreferrer"
          key={uuidv4()}
          icon={el.icon}
        />
      ))}
    </Wrapper>
  );
}

Socials.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Socials;
