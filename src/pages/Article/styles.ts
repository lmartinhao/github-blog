import styled from 'styled-components'

export const ArticleContainer = styled.div``

export const ArticleArea = styled.div`
  width: 54rem;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  line-height: 150%;
  text-justify: distribute;

  ul {
    margin-left: 2.5rem;
    margin-top: 1rem;
  }

  h1 {
    margin: 2rem 0 1rem;
  }

  h2 {
    margin: 1rem 0;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-weight: bold;
  }

  code {
    font-family: monospace;
    font-size: inherit;
    background: ${(props) => props.theme['blue-700']};
    word-wrap: break-word;
    box-decoration-break: clone;
    padding: 0.1rem 0.3rem 0.2rem;
    border-radius: 0.2rem;
  }

  code:not(p > code) {
    margin: 1.5rem;
    display: block;
    background: ${(props) => props.theme['blue-600']};
  }

  p {
    margin-left: 1rem;
  }

  p + p {
    margin-bottom: 0.5rem;
  }
`
