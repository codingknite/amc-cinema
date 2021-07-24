import React from 'react';
import { themes } from 'styles/themes';
import styled from 'styled-components';
import { ImGithub, ImLinkedin, ImTwitter } from 'react-icons/im';

const Wrapper = styled.footer`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Disclaimer = styled.div`
  width: 30rem;
  height: 10vh;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a {
    color: ${themes.colors.blue};
  }

  div {
    width: 10rem;
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const Footer = (): JSX.Element => {
  return (
    <Wrapper>
      <Disclaimer>
        <p>
          Created with ❤ by{' '}
          <a
            href="https://codingknite.com"
            rel="referrer noreferrer"
            target="_blank"
          >
            CodingKnite
          </a>
        </p>
        <div>
          <a
            href="https://github.com/codingknite"
            rel="referrer noreferrer"
            target="_blank"
            style={{ color: 'white' }}
          >
            <ImGithub size={25} />
          </a>
          <a
            href="https://linkedin.com/in/joelmugalu"
            rel="referrer noreferrer"
            target="_blank"
            style={{ color: 'white' }}
          >
            <ImLinkedin size={25} />
          </a>
          <a
            href="https://twitter.com/codingknite"
            rel="referrer noreferrer"
            target="_blank"
            style={{ color: 'white' }}
          >
            <ImTwitter size={25} />
          </a>
        </div>
      </Disclaimer>
    </Wrapper>
  );
};

export default Footer;
