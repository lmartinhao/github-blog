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
    font-family: 'Courier New', Courier, monospace;
    color: ${(props) => props.theme['blue-100']};
    margin-top: 2rem;
  }
`
